
    'reach 0.1';
    
    // const lotteryParams = Tuple(UInt, UInt, UInt, UInt, Token);
const lotteryParams = Object({
    duration: UInt,
    supply: UInt,
    ticketCost: UInt,
    jackpotSplit: UInt,
    gAlgoT: Token,
})
    const totalTickets = 5;
    export const main = Reach.App(() => {
        setOptions({ untrustworthyMaps: true });
        const Creator = Participant('Creator', {
            ...hasRandom,
            getLotteryParams: lotteryParams,
            showSalt: Fun([UInt], Null),
            showWinningTicket: Fun([UInt], Null),
    
            iDeployed: Fun([Bytes(17)], Null),
        })
        const User = API({
            getTicket : Fun([UInt], Bool),
	        revealWinner : Fun([UInt, UInt], Bool),
	        claimRewards : Fun([], Bool),	
        });
        const Views = View({
            Creator_v : Address,
            balance_v : UInt,
            balance_NFT_v : UInt,
            ticketsSold_v : UInt,
            ticketPrice_v : UInt,
            rewardsClaimed_v : Bool,
            raffleOver_v : Bool,
            receivedTickets_v : Fun([Address], UInt),
            winningTicket_v : UInt,	
        });

        init();

        Creator.only(() => {
            const {duration, supply, ticketCost, jackpotSplit, gAlgoT} = declassify(interact.getLotteryParams);
           
            const _winningTicket = interact.random() % totalTickets;
            const [_commitCreator, _salt] = makeCommitment(interact, _winningTicket);
            const commitCreator = declassify(_commitCreator);
            const x = declassify(interact.showSalt(_salt));
            const y = declassify(interact.showWinningTicket(_winningTicket));
            
        });

        Creator.publish(commitCreator, duration, supply, ticketCost, jackpotSplit, gAlgoT)
    

        Creator.interact.iDeployed('CONTRACT DEPLOYED');
       

        const end = duration;
        const startTime = thisConsensusTime();

        //unwrap integer map handler
        const unwInt = (m) => fromSome(m, UInt256(0));
        const unwInt64 = (m) => fromSome(m, 0);
        //unwarap array of 100 UInt
        const unwUintArrMap = (m) => fromSome(m, Array.replicate(totalTickets, 0));
        //unwrap boolean map handler
        const unwBool = (m) => fromSome(m, false);

        //Maps
        const receivedTicketsArr = new Map(Array(UInt, totalTickets));
        const myTickets = new Map(UInt);



        const [ticketsSold_St,rewardsClaimed_St,raffleOver_St,winningTicket_St, ticketsArray] = parallelReduce([0,false,false,0, Array.replicate(totalTickets, 0)])
        .invariant(balance() >= 0 && ticketsArray.length == totalTickets)
        .while(ticketsArray.length == totalTickets)
        .paySpec([gAlgoT])
        .define(() => {
            Views.Creator_v.set(Creator);
            Views.balance_v.set(balance());
            Views.balance_NFT_v.set(balance(gAlgoT));
            Views.ticketsSold_v.set(ticketsSold_St);
            Views.ticketPrice_v.set(ticketCost);
            Views.rewardsClaimed_v.set(rewardsClaimed_St);
            Views.raffleOver_v.set(raffleOver_St);
            Views.winningTicket_v.set(winningTicket_St);
        })
        
        .api(
            User.getTicket,
            // Assumes
            ((num) => {
                const myTicketCount = unwInt64(myTickets[this]);
                const arr = unwUintArrMap(receivedTicketsArr[this]);
                assume(num > 0 && num <= totalTickets, 'Invalid ticket number');
                assume(ticketsSold_St < totalTickets,'All tickets have been sold. Sorry!'); 
 		        assume(raffleOver_St == false,'Raffle is already over. Sorry!'); 
		        assume(ticketsArray.includes(num) == false,'Someone already purchased your chosen ticket!. Try again');
                assume(myTicketCount < totalTickets, 'weird - ticketCount bigger than array size')

            }),
            // Payments
            ((num) => [0, [ticketCost, gAlgoT]]),
            // Consensus
            ((num, res) => {
                const myTicketCount = unwInt64(myTickets[this]);
                const arr = unwUintArrMap(receivedTicketsArr[this]);
                require(num > 0 && num <= totalTickets, 'Invalid ticket number');
                require(ticketsSold_St < totalTickets,'All tickets have been sold. Sorry!'); 
 		        require(raffleOver_St == false,'Raffle is already over. Sorry!'); 
		        require(ticketsArray.includes(num) == false,'Someone already purchased your chosen ticket!. Try again');
                require(myTicketCount < totalTickets, 'weird - ticketCount bigger than array size')
                
                myTickets[this] = myTicketCount + 1;
                const ticketsSold_Stt = ticketsSold_St  +  1 ;
		        receivedTicketsArr[this] = Array.set(arr, myTicketCount, num);
                const ticketsArrayNew = Array.set(ticketsArray, myTicketCount, num);

                res(true);
                return [ticketsSold_Stt,rewardsClaimed_St,raffleOver_St,winningTicket_St, ticketsArrayNew];
            })
        )
        .api(
            User.revealWinner,
            // Assumes
            ((salt, wt) => {
                assume(this == Creator,'Only Raffle Creator can reveal the winner'); 
 		        assume(totalTickets == ticketsSold_St,'Wait until all tickets are sold before revealing the winner'); 
		        assume(raffleOver_St == false,'Raffle is already over. ');
            }),
            // Payments
            ((salt, wt) => [0, [0, gAlgoT]]),
            // Consensus
            ((salt, wt, res) => {
                require(this == Creator,'Only Raffle Creator can use this API'); 
 		        require(totalTickets == ticketsSold_St,'Wait until all tickets are sold before revealing the winner'); 
		        require(raffleOver_St == false,'Raffle is already over. ');
                
                checkCommitment(commitCreator, salt, wt);

                res(true);
                return [ticketsSold_St,rewardsClaimed_St,raffleOver_St,wt, ticketsArray];
            })
            
        )
  
        .api(
            User.claimRewards,
            // Assumes
            (() => {
                assume(unwUintArrMap(receivedTicketsArr[this]).includes(winningTicket_St) == true,'You do not have the winning ticket, Wait for another raffle'); 
 		        assume(rewardsClaimed_St == false,'Rewards have already been claimed by the raffle winner'); 
		        assume(raffleOver_St == true,'Raffle is not yet over. ');
                assume(balance(gAlgoT) >= ticketCost,'Weirdly, you do not have enough NFT to claim the rewards');

            }),
            // Payments
            (() => [0, [0, gAlgoT]]),
            // Consensus
            ((res) => {
                require(unwUintArrMap(receivedTicketsArr[this]).includes(winningTicket_St) == true,'You do not have the winning ticket, Wait for another raffle'); 
 		        require(rewardsClaimed_St == false,'Rewards have already been claimed by the raffle winner'); 
		        require(raffleOver_St == true,'Raffle is not yet over. ');
                require(balance(gAlgoT) >= ticketCost,'Weirdly, you do not have enough NFT to claim the rewards');
                
                transfer(ticketCost, gAlgoT ).to(this);

                const rewardsClaimed_Stt = true;

                res(true);
                return [ticketsSold_St,rewardsClaimed_Stt,raffleOver_St,winningTicket_St, ticketsArray];
            })
        )
        .timeout(absoluteTime(end), () => {
            Anybody.publish();
            return [ticketsSold_St,rewardsClaimed_St,raffleOver_St,winningTicket_St, ticketsArray];
        })
        commit();
        exit();
    });   
    