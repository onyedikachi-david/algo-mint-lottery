Lossless lottery

For Algorand green house hackerton

SDK used:

 async mint() {
    console.log(this.props.acc.networkAccount.addr)
    const res = await prepareMintTransactions({
      appId: 793119194,
      gAlgoId: 793124631,
    }, {
      appId: 793119270,
    }, this.props.acc.networkAccount.addr, 10, true)
    console.log(res)
  }

  continue() {
    this.setState({view: 'Attach'});

  }

{
    "sigs": [
        "Creator_v()address",
        "balance_NFT_v()uint64",
        "balance_v()uint64",
        "claimRewards()byte",
        "getTicket(uint64)byte",
        "raffleOver_v()byte",
        "receivedTickets_v(address)uint64",
        "revealWinner(uint64,uint64)byte",
        "rewardsClaimed_v()byte",
        "ticketPrice_v()uint64",
        "ticketsSold_v()uint64",
        "winningTicket_v()uint64"
    ]
}
========================================

To Run This Project
First, run the development server:

cd src
npm run dev
# or
yarn dev
