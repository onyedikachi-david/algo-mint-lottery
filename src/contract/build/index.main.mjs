// Automatically generated with Reach 0.1.11 (27cb9643)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (27cb9643)';
export const _backendVersion = 19;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc2, ctc2, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Null;
  const ctc9 = stdlib.T_Data({
    None: ctc8,
    Some: ctc4
    });
  const ctc10 = stdlib.T_Data({
    None: ctc8,
    Some: ctc2
    });
  const map0_ctc = ctc9;
  
  const map1_ctc = ctc10;
  
  
  const _Creator_v = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v609, v610, v611, v613, v615, v626, v628, v629, v630, v631, v632, v635, v636, v647, v648] = svs;
      return (await ((async () => {
        
        
        return v609;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _balance_NFT_v = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v609, v610, v611, v613, v615, v626, v628, v629, v630, v631, v632, v635, v636, v647, v648] = svs;
      return (await ((async () => {
        
        
        return v648;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _balance_v = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v609, v610, v611, v613, v615, v626, v628, v629, v630, v631, v632, v635, v636, v647, v648] = svs;
      return (await ((async () => {
        
        
        return v636;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _raffleOver_v = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v609, v610, v611, v613, v615, v626, v628, v629, v630, v631, v632, v635, v636, v647, v648] = svs;
      return (await ((async () => {
        
        
        return v628;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _receivedTickets_v = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v609, v610, v611, v613, v615, v626, v628, v629, v630, v631, v632, v635, v636, v647, v648] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _rewardsClaimed_v = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v609, v610, v611, v613, v615, v626, v628, v629, v630, v631, v632, v635, v636, v647, v648] = svs;
      return (await ((async () => {
        
        
        return v629;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _ticketPrice_v = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v609, v610, v611, v613, v615, v626, v628, v629, v630, v631, v632, v635, v636, v647, v648] = svs;
      return (await ((async () => {
        
        
        return v613;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _ticketsSold_v = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v609, v610, v611, v613, v615, v626, v628, v629, v630, v631, v632, v635, v636, v647, v648] = svs;
      return (await ((async () => {
        
        
        return v631;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _winningTicket_v = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v609, v610, v611, v613, v615, v626, v628, v629, v630, v631, v632, v635, v636, v647, v648] = svs;
      return (await ((async () => {
        
        
        return v632;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      Creator_v: {
        decode: _Creator_v,
        ty: ctc0
        },
      balance_NFT_v: {
        decode: _balance_NFT_v,
        ty: ctc2
        },
      balance_v: {
        decode: _balance_v,
        ty: ctc2
        },
      raffleOver_v: {
        decode: _raffleOver_v,
        ty: ctc5
        },
      receivedTickets_v: {
        decode: _receivedTickets_v,
        ty: ctc2
        },
      rewardsClaimed_v: {
        decode: _rewardsClaimed_v,
        ty: ctc5
        },
      ticketPrice_v: {
        decode: _ticketPrice_v,
        ty: ctc2
        },
      ticketsSold_v: {
        decode: _ticketsSold_v,
        ty: ctc2
        },
      winningTicket_v: {
        decode: _winningTicket_v,
        ty: ctc2
        }
      },
    views: {
      3: [ctc0, ctc1, ctc2, ctc2, ctc3, ctc4, ctc5, ctc5, ctc4, ctc2, ctc2, ctc7, ctc2, ctc6, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc5 = stdlib.T_Tuple([ctc3, ctc4]);
  return {
    mapDataTy: ctc5
    };
  };
export async function Creator(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Creator expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Creator expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Object({
    duration: ctc1,
    gAlgoT: ctc5,
    jackpotSplit: ctc1,
    supply: ctc1,
    ticketCost: ctc1
    });
  const ctc7 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc8 = stdlib.T_Digest;
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc1]);
  const ctc11 = stdlib.T_Data({
    claimRewards0_87: ctc9,
    getTicket0_87: ctc10,
    revealWinner0_87: ctc7
    });
  const ctc12 = stdlib.T_Bool;
  const ctc13 = stdlib.T_Address;
  const ctc14 = stdlib.T_Tuple([ctc1, ctc1, ctc12]);
  const ctc15 = stdlib.T_Array(ctc14, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false,
    ty: map1_ctc
    });
  
  
  const v586 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v587 = [v586];
  const v591 = stdlib.protect(ctc6, interact.getLotteryParams, 'for Creator\'s interact field getLotteryParams');
  const v592 = v591.duration;
  const v593 = v591.gAlgoT;
  const v594 = v591.jackpotSplit;
  const v595 = v591.supply;
  const v596 = v591.ticketCost;
  
  const v604 = stdlib.protect(ctc1, await interact.random(), {
    at: './src/contract/index.rsh:45:51:application',
    fs: ['at ./src/contract/index.rsh:42:21:application call to [unknown function] (defined at: ./src/contract/index.rsh:42:25:function exp)'],
    msg: 'random',
    who: 'Creator'
    });
  const v605 = stdlib.safeMod(v604, stdlib.checkedBigNumberify('./src/contract/index.rsh:12:26:decimal', stdlib.UInt_max, '5'));
  const v606 = stdlib.protect(ctc1, await interact.random(), {
    at: 'reach standard library:64:31:application',
    fs: ['at ./src/contract/index.rsh:46:59:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./src/contract/index.rsh:42:21:application call to [unknown function] (defined at: ./src/contract/index.rsh:42:25:function exp)'],
    msg: 'random',
    who: 'Creator'
    });
  const v607 = stdlib.digest(ctc7, [v606, v605]);
  stdlib.protect(ctc0, await interact.showSalt(v606), {
    at: './src/contract/index.rsh:48:51:application',
    fs: ['at ./src/contract/index.rsh:42:21:application call to [unknown function] (defined at: ./src/contract/index.rsh:42:25:function exp)'],
    msg: 'showSalt',
    who: 'Creator'
    });
  stdlib.protect(ctc0, await interact.showWinningTicket(v605), {
    at: './src/contract/index.rsh:49:60:application',
    fs: ['at ./src/contract/index.rsh:42:21:application call to [unknown function] (defined at: ./src/contract/index.rsh:42:25:function exp)'],
    msg: 'showWinningTicket',
    who: 'Creator'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v607, v592, v595, v596, v594, v593],
    evt_cnt: 6,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./src/contract/index.rsh:53:17:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8, ctc1, ctc1, ctc1, ctc1, ctc5],
    pay: [stdlib.checkedBigNumberify('./src/contract/index.rsh:53:17:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v610, v611, v612, v613, v614, v615], secs: v617, time: v616, didSend: v48, from: v609 } = txn1;
      
      const v618 = v587[stdlib.checkedBigNumberify('./src/contract/index.rsh:53:17:dot', stdlib.UInt_max, '0')];
      const v619 = stdlib.Array_set(v618, '0', stdlib.checkedBigNumberify('./src/contract/index.rsh:53:17:dot', stdlib.UInt_max, '0'));
      const v620 = stdlib.Array_set(v587, stdlib.checkedBigNumberify('./src/contract/index.rsh:53:17:dot', stdlib.UInt_max, '0'), v619);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v615
        });
      ;
      
      const v626 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v628 = false;
      const v629 = false;
      const v630 = v626;
      const v631 = stdlib.checkedBigNumberify('./src/contract/index.rsh:76:113:decimal', stdlib.UInt_max, '0');
      const v632 = stdlib.checkedBigNumberify('./src/contract/index.rsh:76:127:decimal', stdlib.UInt_max, '0');
      const v633 = v616;
      const v635 = v620;
      const v636 = stdlib.checkedBigNumberify('./src/contract/index.rsh:40:15:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        
        return true;})()) {
        const v647 = v635[stdlib.checkedBigNumberify('./src/contract/index.rsh:83:44:application', stdlib.UInt_max, '0')];
        const v648 = v647[stdlib.checkedBigNumberify('./src/contract/index.rsh:83:44:application', stdlib.UInt_max, '0')];
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v615
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc8, ctc1, ctc1, ctc1, ctc1, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v610, v611, v612, v613, v614, v615], secs: v617, time: v616, didSend: v48, from: v609 } = txn1;
  const v618 = v587[stdlib.checkedBigNumberify('./src/contract/index.rsh:53:17:dot', stdlib.UInt_max, '0')];
  const v619 = stdlib.Array_set(v618, '0', stdlib.checkedBigNumberify('./src/contract/index.rsh:53:17:dot', stdlib.UInt_max, '0'));
  const v620 = stdlib.Array_set(v587, stdlib.checkedBigNumberify('./src/contract/index.rsh:53:17:dot', stdlib.UInt_max, '0'), v619);
  ;
  ;
  const v623 = 'CONTRACT DEPLOYED';
  stdlib.protect(ctc0, await interact.iDeployed(v623), {
    at: './src/contract/index.rsh:56:35:application',
    fs: ['at ./src/contract/index.rsh:56:35:application call to [unknown function] (defined at: ./src/contract/index.rsh:56:35:function exp)', 'at ./src/contract/index.rsh:56:35:application call to "liftedInteract" (defined at: ./src/contract/index.rsh:56:35:application)'],
    msg: 'iDeployed',
    who: 'Creator'
    });
  
  const v626 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  let v628 = false;
  let v629 = false;
  let v630 = v626;
  let v631 = stdlib.checkedBigNumberify('./src/contract/index.rsh:76:113:decimal', stdlib.UInt_max, '0');
  let v632 = stdlib.checkedBigNumberify('./src/contract/index.rsh:76:127:decimal', stdlib.UInt_max, '0');
  let v633 = v616;
  let v635 = v620;
  let v636 = stdlib.checkedBigNumberify('./src/contract/index.rsh:40:15:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    
    return true;})()) {
    const v647 = v635[stdlib.checkedBigNumberify('./src/contract/index.rsh:83:44:application', stdlib.UInt_max, '0')];
    const v648 = v647[stdlib.checkedBigNumberify('./src/contract/index.rsh:83:44:application', stdlib.UInt_max, '0')];
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc11],
      timeoutAt: ['time', v611],
      waitIfNotPresent: false
      }));
    if (txn2.didTimeout) {
      const txn3 = await (ctc.sendrecv({
        args: [v609, v610, v611, v613, v615, v626, v628, v629, v630, v631, v632, v635, v636, v647, v648],
        evt_cnt: 0,
        funcNum: 3,
        lct: v633,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./src/contract/index.rsh:177:21:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          stdlib.simMapDupe(sim_r, 1, map1);
          
          const {data: [], secs: v1163, time: v1162, didSend: v530, from: v1161 } = txn3;
          
          ;
          const cv628 = v628;
          const cv629 = v629;
          const cv630 = v630;
          const cv631 = v631;
          const cv632 = v632;
          const cv633 = v1162;
          const cv635 = v635;
          const cv636 = v636;
          
          await (async () => {
            const v628 = cv628;
            const v629 = cv629;
            const v630 = cv630;
            const v631 = cv631;
            const v632 = cv632;
            const v633 = cv633;
            const v635 = cv635;
            const v636 = cv636;
            
            if (await (async () => {
              
              return true;})()) {
              const v647 = v635[stdlib.checkedBigNumberify('./src/contract/index.rsh:83:44:application', stdlib.UInt_max, '0')];
              const v648 = v647[stdlib.checkedBigNumberify('./src/contract/index.rsh:83:44:application', stdlib.UInt_max, '0')];
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: v615
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc13, ctc8, ctc1, ctc1, ctc5, ctc2, ctc12, ctc12, ctc2, ctc1, ctc1, ctc15, ctc1, ctc14, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v1163, time: v1162, didSend: v530, from: v1161 } = txn3;
      ;
      const v1164 = stdlib.addressEq(v609, v1161);
      stdlib.assert(v1164, {
        at: './src/contract/index.rsh:177:21:dot',
        fs: ['at ./src/contract/index.rsh:176:40:application call to [unknown function] (defined at: ./src/contract/index.rsh:176:40:function exp)'],
        msg: 'sender correct',
        who: 'Creator'
        });
      const cv628 = v628;
      const cv629 = v629;
      const cv630 = v630;
      const cv631 = v631;
      const cv632 = v632;
      const cv633 = v1162;
      const cv635 = v635;
      const cv636 = v636;
      
      v628 = cv628;
      v629 = cv629;
      v630 = cv630;
      v631 = cv631;
      v632 = cv632;
      v633 = cv633;
      v635 = cv635;
      v636 = cv636;
      
      continue;
      }
    else {
      const {data: [v762], secs: v764, time: v763, didSend: v395, from: v761 } = txn2;
      switch (v762[0]) {
        case 'claimRewards0_87': {
          const v765 = v762[1];
          undefined /* setApiDetails */;
          ;
          const v806 = stdlib.Array_set(v647, '0', v648);
          const v807 = stdlib.Array_set(v635, stdlib.checkedBigNumberify('./src/contract/index.rsh:76:111:dot', stdlib.UInt_max, '0'), v806);
          ;
          const v809 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v761), null);
          const v813 = stdlib.fromSome(v809, v626);
          const v814 = await stdlib.Array_asyncReduce([v813], false, async([v816], v815, v817) => {
            const v818 = stdlib.eq(v632, v816);
            const v820 = v815 ? v815 : v818;
            
            return v820;})
          stdlib.assert(v814, {
            at: './src/contract/index.rsh:163:24:application',
            fs: ['at ./src/contract/index.rsh:162:13:application call to [unknown function] (defined at: ./src/contract/index.rsh:162:13:function exp)'],
            msg: 'You do not have the winning ticket, Wait for another raffle',
            who: 'Creator'
            });
          const v822 = v629 ? false : true;
          stdlib.assert(v822, {
            at: './src/contract/index.rsh:164:32:application',
            fs: ['at ./src/contract/index.rsh:162:13:application call to [unknown function] (defined at: ./src/contract/index.rsh:162:13:function exp)'],
            msg: 'Rewards have already been claimed by the raffle winner',
            who: 'Creator'
            });
          stdlib.assert(v628, {
            at: './src/contract/index.rsh:165:32:application',
            fs: ['at ./src/contract/index.rsh:162:13:application call to [unknown function] (defined at: ./src/contract/index.rsh:162:13:function exp)'],
            msg: 'Raffle is not yet over. ',
            who: 'Creator'
            });
          const v824 = v807[stdlib.checkedBigNumberify('./src/contract/index.rsh:166:32:application', stdlib.UInt_max, '0')];
          const v825 = v824[stdlib.checkedBigNumberify('./src/contract/index.rsh:166:32:application', stdlib.UInt_max, '0')];
          const v826 = stdlib.ge(v825, v613);
          stdlib.assert(v826, {
            at: './src/contract/index.rsh:166:24:application',
            fs: ['at ./src/contract/index.rsh:162:13:application call to [unknown function] (defined at: ./src/contract/index.rsh:162:13:function exp)'],
            msg: 'Weirdly, you do not have enough NFT to claim the rewards',
            who: 'Creator'
            });
          const v832 = stdlib.safeSub(v825, v613);
          const v834 = stdlib.Array_set(v824, '0', v832);
          const v835 = stdlib.Array_set(v807, stdlib.checkedBigNumberify('./src/contract/index.rsh:168:49:application', stdlib.UInt_max, '0'), v834);
          ;
          const v836 = true;
          await txn2.getOutput('claimRewards', 'v836', ctc12, v836);
          const cv628 = true;
          const cv629 = true;
          const cv630 = v630;
          const cv631 = v631;
          const cv632 = v632;
          const cv633 = v763;
          const cv635 = v835;
          const cv636 = v636;
          
          v628 = cv628;
          v629 = cv629;
          v630 = cv630;
          v631 = cv631;
          v632 = cv632;
          v633 = cv633;
          v635 = cv635;
          v636 = cv636;
          
          continue;
          break;
          }
        case 'getTicket0_87': {
          const v897 = v762[1];
          undefined /* setApiDetails */;
          ;
          const v936 = stdlib.safeAdd(v648, v613);
          const v938 = stdlib.Array_set(v647, '0', v936);
          const v939 = stdlib.Array_set(v635, stdlib.checkedBigNumberify('./src/contract/index.rsh:76:111:dot', stdlib.UInt_max, '0'), v938);
          ;
          const v976 = v897[stdlib.checkedBigNumberify('./src/contract/index.rsh:91:13:spread', stdlib.UInt_max, '0')];
          const v977 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v761), null);
          const v978 = stdlib.fromSome(v977, stdlib.checkedBigNumberify('./src/contract/index.rsh:64:45:decimal', stdlib.UInt_max, '0'));
          const v979 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v761), null);
          const v983 = stdlib.fromSome(v979, v626);
          const v984 = stdlib.gt(v976, stdlib.checkedBigNumberify('./src/contract/index.rsh:110:31:decimal', stdlib.UInt_max, '0'));
          const v985 = stdlib.le(v976, stdlib.checkedBigNumberify('./src/contract/index.rsh:12:26:decimal', stdlib.UInt_max, '5'));
          const v986 = v984 ? v985 : false;
          stdlib.assert(v986, {
            at: './src/contract/index.rsh:110:24:application',
            fs: ['at ./src/contract/index.rsh:107:13:application call to [unknown function] (defined at: ./src/contract/index.rsh:107:13:function exp)'],
            msg: 'Invalid ticket number',
            who: 'Creator'
            });
          const v987 = stdlib.lt(v631, stdlib.checkedBigNumberify('./src/contract/index.rsh:12:26:decimal', stdlib.UInt_max, '5'));
          stdlib.assert(v987, {
            at: './src/contract/index.rsh:111:24:application',
            fs: ['at ./src/contract/index.rsh:107:13:application call to [unknown function] (defined at: ./src/contract/index.rsh:107:13:function exp)'],
            msg: 'All tickets have been sold. Sorry!',
            who: 'Creator'
            });
          const v988 = v628 ? false : true;
          stdlib.assert(v988, {
            at: './src/contract/index.rsh:112:32:application',
            fs: ['at ./src/contract/index.rsh:107:13:application call to [unknown function] (defined at: ./src/contract/index.rsh:107:13:function exp)'],
            msg: 'Raffle is already over. Sorry!',
            who: 'Creator'
            });
          const v989 = await stdlib.Array_asyncReduce([v630], false, async([v991], v990, v992) => {
            const v993 = stdlib.eq(v976, v991);
            const v995 = v990 ? v990 : v993;
            
            return v995;})
          const v996 = v989 ? false : true;
          stdlib.assert(v996, {
            at: './src/contract/index.rsh:113:32:application',
            fs: ['at ./src/contract/index.rsh:107:13:application call to [unknown function] (defined at: ./src/contract/index.rsh:107:13:function exp)'],
            msg: 'Someone already purchased your chosen ticket!. Try again',
            who: 'Creator'
            });
          const v997 = stdlib.lt(v978, stdlib.checkedBigNumberify('./src/contract/index.rsh:12:26:decimal', stdlib.UInt_max, '5'));
          stdlib.assert(v997, {
            at: './src/contract/index.rsh:114:24:application',
            fs: ['at ./src/contract/index.rsh:107:13:application call to [unknown function] (defined at: ./src/contract/index.rsh:107:13:function exp)'],
            msg: 'weird - ticketCount bigger than array size',
            who: 'Creator'
            });
          const v998 = stdlib.safeAdd(v978, stdlib.checkedBigNumberify('./src/contract/index.rsh:116:51:decimal', stdlib.UInt_max, '1'));
          await stdlib.mapSet(map1, v761, v998);
          const v999 = stdlib.safeAdd(v631, stdlib.checkedBigNumberify('./src/contract/index.rsh:117:60:decimal', stdlib.UInt_max, '1'));
          const v1001 = stdlib.Array_set(v983, v978, v976);
          await stdlib.mapSet(map0, v761, v1001);
          const v1003 = stdlib.Array_set(v630, v978, v976);
          const v1004 = true;
          await txn2.getOutput('getTicket', 'v1004', ctc12, v1004);
          const cv628 = v628;
          const cv629 = v629;
          const cv630 = v1003;
          const cv631 = v999;
          const cv632 = v632;
          const cv633 = v763;
          const cv635 = v939;
          const cv636 = v636;
          
          v628 = cv628;
          v629 = cv629;
          v630 = cv630;
          v631 = cv631;
          v632 = cv632;
          v633 = cv633;
          v635 = cv635;
          v636 = cv636;
          
          continue;
          break;
          }
        case 'revealWinner0_87': {
          const v1029 = v762[1];
          undefined /* setApiDetails */;
          ;
          const v1070 = stdlib.Array_set(v647, '0', v648);
          const v1071 = stdlib.Array_set(v635, stdlib.checkedBigNumberify('./src/contract/index.rsh:76:111:dot', stdlib.UInt_max, '0'), v1070);
          ;
          const v1145 = v1029[stdlib.checkedBigNumberify('./src/contract/index.rsh:125:13:spread', stdlib.UInt_max, '0')];
          const v1146 = v1029[stdlib.checkedBigNumberify('./src/contract/index.rsh:125:13:spread', stdlib.UInt_max, '1')];
          const v1147 = stdlib.addressEq(v761, v609);
          stdlib.assert(v1147, {
            at: './src/contract/index.rsh:137:24:application',
            fs: ['at ./src/contract/index.rsh:136:13:application call to [unknown function] (defined at: ./src/contract/index.rsh:136:13:function exp)'],
            msg: 'Only Raffle Creator can use this API',
            who: 'Creator'
            });
          const v1148 = stdlib.eq(stdlib.checkedBigNumberify('./src/contract/index.rsh:12:26:decimal', stdlib.UInt_max, '5'), v631);
          stdlib.assert(v1148, {
            at: './src/contract/index.rsh:138:32:application',
            fs: ['at ./src/contract/index.rsh:136:13:application call to [unknown function] (defined at: ./src/contract/index.rsh:136:13:function exp)'],
            msg: 'Wait until all tickets are sold before revealing the winner',
            who: 'Creator'
            });
          const v1149 = v628 ? false : true;
          stdlib.assert(v1149, {
            at: './src/contract/index.rsh:139:32:application',
            fs: ['at ./src/contract/index.rsh:136:13:application call to [unknown function] (defined at: ./src/contract/index.rsh:136:13:function exp)'],
            msg: 'Raffle is already over. ',
            who: 'Creator'
            });
          const v1150 = stdlib.digest(ctc7, [v1145, v1146]);
          const v1151 = stdlib.digestEq(v610, v1150);
          stdlib.assert(v1151, {
            at: 'reach standard library:69:17:application',
            fs: ['at ./src/contract/index.rsh:141:32:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)', 'at ./src/contract/index.rsh:136:13:application call to [unknown function] (defined at: ./src/contract/index.rsh:136:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v1152 = true;
          await txn2.getOutput('revealWinner', 'v1152', ctc12, v1152);
          const cv628 = v628;
          const cv629 = v629;
          const cv630 = v630;
          const cv631 = v631;
          const cv632 = v1146;
          const cv633 = v763;
          const cv635 = v1071;
          const cv636 = v636;
          
          v628 = cv628;
          v629 = cv629;
          v630 = cv630;
          v631 = cv631;
          v632 = cv632;
          v633 = cv633;
          v635 = cv635;
          v636 = cv636;
          
          continue;
          break;
          }
        }}
    
    }
  return;
  
  
  };
export async function _claimRewards3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _claimRewards3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _claimRewards3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Digest;
  const ctc7 = stdlib.T_Token;
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc14 = stdlib.T_Data({
    claimRewards0_87: ctc11,
    getTicket0_87: ctc12,
    revealWinner0_87: ctc13
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  
  const [v609, v610, v611, v613, v615, v626, v628, v629, v630, v631, v632, v635, v636, v647, v648] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc5, ctc6, ctc1, ctc1, ctc7, ctc2, ctc8, ctc8, ctc2, ctc1, ctc1, ctc10, ctc1, ctc9, ctc1]);
  const v702 = ctc.selfAddress();
  const v704 = stdlib.protect(ctc11, await interact.in(), {
    at: './src/contract/index.rsh:1:23:application',
    fs: ['at ./src/contract/index.rsh:152:13:application call to [unknown function] (defined at: ./src/contract/index.rsh:152:13:function exp)', 'at ./src/contract/index.rsh:76:111:application call to "runclaimRewards0_87" (defined at: ./src/contract/index.rsh:149:13:function exp)', 'at ./src/contract/index.rsh:76:111:application call to [unknown function] (defined at: ./src/contract/index.rsh:76:111:function exp)'],
    msg: 'in',
    who: 'claimRewards'
    });
  const v706 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v702), null);
  const v710 = stdlib.fromSome(v706, v626);
  const v711 = await stdlib.Array_asyncReduce([v710], false, async([v713], v712, v714) => {
    const v715 = stdlib.eq(v632, v713);
    const v717 = v712 ? v712 : v715;
    
    return v717;})
  stdlib.assert(v711, {
    at: './src/contract/index.rsh:153:23:application',
    fs: ['at ./src/contract/index.rsh:152:13:application call to [unknown function] (defined at: ./src/contract/index.rsh:152:17:function exp)', 'at ./src/contract/index.rsh:152:13:application call to [unknown function] (defined at: ./src/contract/index.rsh:152:13:function exp)', 'at ./src/contract/index.rsh:76:111:application call to "runclaimRewards0_87" (defined at: ./src/contract/index.rsh:149:13:function exp)', 'at ./src/contract/index.rsh:76:111:application call to [unknown function] (defined at: ./src/contract/index.rsh:76:111:function exp)'],
    msg: 'You do not have the winning ticket, Wait for another raffle',
    who: 'claimRewards'
    });
  const v719 = v629 ? false : true;
  stdlib.assert(v719, {
    at: './src/contract/index.rsh:154:31:application',
    fs: ['at ./src/contract/index.rsh:152:13:application call to [unknown function] (defined at: ./src/contract/index.rsh:152:17:function exp)', 'at ./src/contract/index.rsh:152:13:application call to [unknown function] (defined at: ./src/contract/index.rsh:152:13:function exp)', 'at ./src/contract/index.rsh:76:111:application call to "runclaimRewards0_87" (defined at: ./src/contract/index.rsh:149:13:function exp)', 'at ./src/contract/index.rsh:76:111:application call to [unknown function] (defined at: ./src/contract/index.rsh:76:111:function exp)'],
    msg: 'Rewards have already been claimed by the raffle winner',
    who: 'claimRewards'
    });
  stdlib.assert(v628, {
    at: './src/contract/index.rsh:155:31:application',
    fs: ['at ./src/contract/index.rsh:152:13:application call to [unknown function] (defined at: ./src/contract/index.rsh:152:17:function exp)', 'at ./src/contract/index.rsh:152:13:application call to [unknown function] (defined at: ./src/contract/index.rsh:152:13:function exp)', 'at ./src/contract/index.rsh:76:111:application call to "runclaimRewards0_87" (defined at: ./src/contract/index.rsh:149:13:function exp)', 'at ./src/contract/index.rsh:76:111:application call to [unknown function] (defined at: ./src/contract/index.rsh:76:111:function exp)'],
    msg: 'Raffle is not yet over. ',
    who: 'claimRewards'
    });
  const v723 = stdlib.ge(v648, v613);
  stdlib.assert(v723, {
    at: './src/contract/index.rsh:156:23:application',
    fs: ['at ./src/contract/index.rsh:152:13:application call to [unknown function] (defined at: ./src/contract/index.rsh:152:17:function exp)', 'at ./src/contract/index.rsh:152:13:application call to [unknown function] (defined at: ./src/contract/index.rsh:152:13:function exp)', 'at ./src/contract/index.rsh:76:111:application call to "runclaimRewards0_87" (defined at: ./src/contract/index.rsh:149:13:function exp)', 'at ./src/contract/index.rsh:76:111:application call to [unknown function] (defined at: ./src/contract/index.rsh:76:111:function exp)'],
    msg: 'Weirdly, you do not have enough NFT to claim the rewards',
    who: 'claimRewards'
    });
  const v726 = ['claimRewards0_87', v704];
  
  const txn1 = await (ctc.sendrecv({
    args: [v609, v610, v611, v613, v615, v626, v628, v629, v630, v631, v632, v635, v636, v647, v648, v726],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./src/contract/index.rsh:160:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./src/contract/index.rsh:160:25:decimal', stdlib.UInt_max, '0'), v615]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v762], secs: v764, time: v763, didSend: v395, from: v761 } = txn1;
      
      switch (v762[0]) {
        case 'claimRewards0_87': {
          const v765 = v762[1];
          sim_r.txns.push({
            kind: 'api',
            who: "claimRewards"
            });
          ;
          const v806 = stdlib.Array_set(v647, '0', v648);
          const v807 = stdlib.Array_set(v635, stdlib.checkedBigNumberify('./src/contract/index.rsh:76:111:dot', stdlib.UInt_max, '0'), v806);
          ;
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v761), null);
          const v824 = v807[stdlib.checkedBigNumberify('./src/contract/index.rsh:166:32:application', stdlib.UInt_max, '0')];
          const v825 = v824[stdlib.checkedBigNumberify('./src/contract/index.rsh:166:32:application', stdlib.UInt_max, '0')];
          const v832 = stdlib.safeSub(v825, v613);
          const v834 = stdlib.Array_set(v824, '0', v832);
          const v835 = stdlib.Array_set(v807, stdlib.checkedBigNumberify('./src/contract/index.rsh:168:49:application', stdlib.UInt_max, '0'), v834);
          sim_r.txns.push({
            kind: 'from',
            to: v761,
            tok: v615
            });
          const v836 = true;
          const v837 = await txn1.getOutput('claimRewards', 'v836', ctc8, v836);
          
          const v1731 = true;
          const v1732 = true;
          const v1733 = v630;
          const v1734 = v631;
          const v1735 = v632;
          const v1737 = v835;
          const v1738 = v636;
          const v1739 = v835[stdlib.checkedBigNumberify('./src/contract/index.rsh:83:44:application', stdlib.UInt_max, '0')];
          const v1740 = v1739[stdlib.checkedBigNumberify('./src/contract/index.rsh:83:44:application', stdlib.UInt_max, '0')];
          sim_r.isHalt = false;
          
          break;
          }
        case 'getTicket0_87': {
          const v897 = v762[1];
          
          break;
          }
        case 'revealWinner0_87': {
          const v1029 = v762[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc6, ctc1, ctc1, ctc7, ctc2, ctc8, ctc8, ctc2, ctc1, ctc1, ctc10, ctc1, ctc9, ctc1, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v762], secs: v764, time: v763, didSend: v395, from: v761 } = txn1;
  switch (v762[0]) {
    case 'claimRewards0_87': {
      const v765 = v762[1];
      undefined /* setApiDetails */;
      ;
      const v806 = stdlib.Array_set(v647, '0', v648);
      const v807 = stdlib.Array_set(v635, stdlib.checkedBigNumberify('./src/contract/index.rsh:76:111:dot', stdlib.UInt_max, '0'), v806);
      ;
      const v809 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v761), null);
      const v813 = stdlib.fromSome(v809, v626);
      const v814 = await stdlib.Array_asyncReduce([v813], false, async([v816], v815, v817) => {
        const v818 = stdlib.eq(v632, v816);
        const v820 = v815 ? v815 : v818;
        
        return v820;})
      stdlib.assert(v814, {
        at: './src/contract/index.rsh:163:24:application',
        fs: ['at ./src/contract/index.rsh:162:13:application call to [unknown function] (defined at: ./src/contract/index.rsh:162:13:function exp)'],
        msg: 'You do not have the winning ticket, Wait for another raffle',
        who: 'claimRewards'
        });
      const v822 = v629 ? false : true;
      stdlib.assert(v822, {
        at: './src/contract/index.rsh:164:32:application',
        fs: ['at ./src/contract/index.rsh:162:13:application call to [unknown function] (defined at: ./src/contract/index.rsh:162:13:function exp)'],
        msg: 'Rewards have already been claimed by the raffle winner',
        who: 'claimRewards'
        });
      stdlib.assert(v628, {
        at: './src/contract/index.rsh:165:32:application',
        fs: ['at ./src/contract/index.rsh:162:13:application call to [unknown function] (defined at: ./src/contract/index.rsh:162:13:function exp)'],
        msg: 'Raffle is not yet over. ',
        who: 'claimRewards'
        });
      const v824 = v807[stdlib.checkedBigNumberify('./src/contract/index.rsh:166:32:application', stdlib.UInt_max, '0')];
      const v825 = v824[stdlib.checkedBigNumberify('./src/contract/index.rsh:166:32:application', stdlib.UInt_max, '0')];
      const v826 = stdlib.ge(v825, v613);
      stdlib.assert(v826, {
        at: './src/contract/index.rsh:166:24:application',
        fs: ['at ./src/contract/index.rsh:162:13:application call to [unknown function] (defined at: ./src/contract/index.rsh:162:13:function exp)'],
        msg: 'Weirdly, you do not have enough NFT to claim the rewards',
        who: 'claimRewards'
        });
      const v832 = stdlib.safeSub(v825, v613);
      const v834 = stdlib.Array_set(v824, '0', v832);
      const v835 = stdlib.Array_set(v807, stdlib.checkedBigNumberify('./src/contract/index.rsh:168:49:application', stdlib.UInt_max, '0'), v834);
      ;
      const v836 = true;
      const v837 = await txn1.getOutput('claimRewards', 'v836', ctc8, v836);
      if (v395) {
        stdlib.protect(ctc0, await interact.out(v765, v837), {
          at: './src/contract/index.rsh:150:13:application',
          fs: ['at ./src/contract/index.rsh:150:13:application call to [unknown function] (defined at: ./src/contract/index.rsh:150:13:function exp)', 'at ./src/contract/index.rsh:172:20:application call to "res" (defined at: ./src/contract/index.rsh:162:13:function exp)', 'at ./src/contract/index.rsh:162:13:application call to [unknown function] (defined at: ./src/contract/index.rsh:162:13:function exp)'],
          msg: 'out',
          who: 'claimRewards'
          });
        }
      else {
        }
      
      const v1731 = true;
      const v1732 = true;
      const v1733 = v630;
      const v1734 = v631;
      const v1735 = v632;
      const v1737 = v835;
      const v1738 = v636;
      const v1739 = v835[stdlib.checkedBigNumberify('./src/contract/index.rsh:83:44:application', stdlib.UInt_max, '0')];
      const v1740 = v1739[stdlib.checkedBigNumberify('./src/contract/index.rsh:83:44:application', stdlib.UInt_max, '0')];
      return;
      
      break;
      }
    case 'getTicket0_87': {
      const v897 = v762[1];
      return;
      break;
      }
    case 'revealWinner0_87': {
      const v1029 = v762[1];
      return;
      break;
      }
    }
  
  
  };
export async function _getTicket3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _getTicket3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _getTicket3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Digest;
  const ctc7 = stdlib.T_Token;
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc11 = stdlib.T_Tuple([ctc1]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc14 = stdlib.T_Data({
    claimRewards0_87: ctc12,
    getTicket0_87: ctc11,
    revealWinner0_87: ctc13
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  
  const [v609, v610, v611, v613, v615, v626, v628, v629, v630, v631, v632, v635, v636, v647, v648] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc5, ctc6, ctc1, ctc1, ctc7, ctc2, ctc8, ctc8, ctc2, ctc1, ctc1, ctc10, ctc1, ctc9, ctc1]);
  const v653 = ctc.selfAddress();
  const v655 = stdlib.protect(ctc11, await interact.in(), {
    at: './src/contract/index.rsh:1:23:application',
    fs: ['at ./src/contract/index.rsh:94:13:application call to [unknown function] (defined at: ./src/contract/index.rsh:94:13:function exp)', 'at ./src/contract/index.rsh:76:111:application call to "rungetTicket0_87" (defined at: ./src/contract/index.rsh:91:13:function exp)', 'at ./src/contract/index.rsh:76:111:application call to [unknown function] (defined at: ./src/contract/index.rsh:76:111:function exp)'],
    msg: 'in',
    who: 'getTicket'
    });
  const v656 = v655[stdlib.checkedBigNumberify('./src/contract/index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v659 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v653), null);
  const v660 = stdlib.fromSome(v659, stdlib.checkedBigNumberify('./src/contract/index.rsh:64:45:decimal', stdlib.UInt_max, '0'));
  const v666 = stdlib.gt(v656, stdlib.checkedBigNumberify('./src/contract/index.rsh:97:30:decimal', stdlib.UInt_max, '0'));
  const v667 = stdlib.le(v656, stdlib.checkedBigNumberify('./src/contract/index.rsh:12:26:decimal', stdlib.UInt_max, '5'));
  const v668 = v666 ? v667 : false;
  stdlib.assert(v668, {
    at: './src/contract/index.rsh:97:23:application',
    fs: ['at ./src/contract/index.rsh:94:13:application call to [unknown function] (defined at: ./src/contract/index.rsh:94:20:function exp)', 'at ./src/contract/index.rsh:94:13:application call to [unknown function] (defined at: ./src/contract/index.rsh:94:13:function exp)', 'at ./src/contract/index.rsh:76:111:application call to "rungetTicket0_87" (defined at: ./src/contract/index.rsh:91:13:function exp)', 'at ./src/contract/index.rsh:76:111:application call to [unknown function] (defined at: ./src/contract/index.rsh:76:111:function exp)'],
    msg: 'Invalid ticket number',
    who: 'getTicket'
    });
  const v669 = stdlib.lt(v631, stdlib.checkedBigNumberify('./src/contract/index.rsh:12:26:decimal', stdlib.UInt_max, '5'));
  stdlib.assert(v669, {
    at: './src/contract/index.rsh:98:23:application',
    fs: ['at ./src/contract/index.rsh:94:13:application call to [unknown function] (defined at: ./src/contract/index.rsh:94:20:function exp)', 'at ./src/contract/index.rsh:94:13:application call to [unknown function] (defined at: ./src/contract/index.rsh:94:13:function exp)', 'at ./src/contract/index.rsh:76:111:application call to "rungetTicket0_87" (defined at: ./src/contract/index.rsh:91:13:function exp)', 'at ./src/contract/index.rsh:76:111:application call to [unknown function] (defined at: ./src/contract/index.rsh:76:111:function exp)'],
    msg: 'All tickets have been sold. Sorry!',
    who: 'getTicket'
    });
  const v670 = v628 ? false : true;
  stdlib.assert(v670, {
    at: './src/contract/index.rsh:99:31:application',
    fs: ['at ./src/contract/index.rsh:94:13:application call to [unknown function] (defined at: ./src/contract/index.rsh:94:20:function exp)', 'at ./src/contract/index.rsh:94:13:application call to [unknown function] (defined at: ./src/contract/index.rsh:94:13:function exp)', 'at ./src/contract/index.rsh:76:111:application call to "rungetTicket0_87" (defined at: ./src/contract/index.rsh:91:13:function exp)', 'at ./src/contract/index.rsh:76:111:application call to [unknown function] (defined at: ./src/contract/index.rsh:76:111:function exp)'],
    msg: 'Raffle is already over. Sorry!',
    who: 'getTicket'
    });
  const v671 = await stdlib.Array_asyncReduce([v630], false, async([v673], v672, v674) => {
    const v675 = stdlib.eq(v656, v673);
    const v677 = v672 ? v672 : v675;
    
    return v677;})
  const v678 = v671 ? false : true;
  stdlib.assert(v678, {
    at: './src/contract/index.rsh:100:31:application',
    fs: ['at ./src/contract/index.rsh:94:13:application call to [unknown function] (defined at: ./src/contract/index.rsh:94:20:function exp)', 'at ./src/contract/index.rsh:94:13:application call to [unknown function] (defined at: ./src/contract/index.rsh:94:13:function exp)', 'at ./src/contract/index.rsh:76:111:application call to "rungetTicket0_87" (defined at: ./src/contract/index.rsh:91:13:function exp)', 'at ./src/contract/index.rsh:76:111:application call to [unknown function] (defined at: ./src/contract/index.rsh:76:111:function exp)'],
    msg: 'Someone already purchased your chosen ticket!. Try again',
    who: 'getTicket'
    });
  const v679 = stdlib.lt(v660, stdlib.checkedBigNumberify('./src/contract/index.rsh:12:26:decimal', stdlib.UInt_max, '5'));
  stdlib.assert(v679, {
    at: './src/contract/index.rsh:101:23:application',
    fs: ['at ./src/contract/index.rsh:94:13:application call to [unknown function] (defined at: ./src/contract/index.rsh:94:20:function exp)', 'at ./src/contract/index.rsh:94:13:application call to [unknown function] (defined at: ./src/contract/index.rsh:94:13:function exp)', 'at ./src/contract/index.rsh:76:111:application call to "rungetTicket0_87" (defined at: ./src/contract/index.rsh:91:13:function exp)', 'at ./src/contract/index.rsh:76:111:application call to [unknown function] (defined at: ./src/contract/index.rsh:76:111:function exp)'],
    msg: 'weird - ticketCount bigger than array size',
    who: 'getTicket'
    });
  const v683 = ['getTicket0_87', v655];
  
  const txn1 = await (ctc.sendrecv({
    args: [v609, v610, v611, v613, v615, v626, v628, v629, v630, v631, v632, v635, v636, v647, v648, v683],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./src/contract/index.rsh:105:24:decimal', stdlib.UInt_max, '0'), [[v613, v615]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v762], secs: v764, time: v763, didSend: v395, from: v761 } = txn1;
      
      switch (v762[0]) {
        case 'claimRewards0_87': {
          const v765 = v762[1];
          
          break;
          }
        case 'getTicket0_87': {
          const v897 = v762[1];
          sim_r.txns.push({
            kind: 'api',
            who: "getTicket"
            });
          ;
          const v936 = stdlib.safeAdd(v648, v613);
          const v938 = stdlib.Array_set(v647, '0', v936);
          const v939 = stdlib.Array_set(v635, stdlib.checkedBigNumberify('./src/contract/index.rsh:76:111:dot', stdlib.UInt_max, '0'), v938);
          sim_r.txns.push({
            amt: v613,
            kind: 'to',
            tok: v615
            });
          const v976 = v897[stdlib.checkedBigNumberify('./src/contract/index.rsh:91:13:spread', stdlib.UInt_max, '0')];
          const v977 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v761), null);
          const v978 = stdlib.fromSome(v977, stdlib.checkedBigNumberify('./src/contract/index.rsh:64:45:decimal', stdlib.UInt_max, '0'));
          const v979 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v761), null);
          const v983 = stdlib.fromSome(v979, v626);
          const v998 = stdlib.safeAdd(v978, stdlib.checkedBigNumberify('./src/contract/index.rsh:116:51:decimal', stdlib.UInt_max, '1'));
          await stdlib.simMapSet(sim_r, 1, v761, v998);
          const v999 = stdlib.safeAdd(v631, stdlib.checkedBigNumberify('./src/contract/index.rsh:117:60:decimal', stdlib.UInt_max, '1'));
          const v1001 = stdlib.Array_set(v983, v978, v976);
          await stdlib.simMapSet(sim_r, 0, v761, v1001);
          const v1003 = stdlib.Array_set(v630, v978, v976);
          const v1004 = true;
          const v1005 = await txn1.getOutput('getTicket', 'v1004', ctc8, v1004);
          
          const v1779 = v628;
          const v1780 = v629;
          const v1781 = v1003;
          const v1782 = v999;
          const v1783 = v632;
          const v1785 = v939;
          const v1786 = v636;
          const v1787 = v939[stdlib.checkedBigNumberify('./src/contract/index.rsh:83:44:application', stdlib.UInt_max, '0')];
          const v1788 = v1787[stdlib.checkedBigNumberify('./src/contract/index.rsh:83:44:application', stdlib.UInt_max, '0')];
          sim_r.isHalt = false;
          
          break;
          }
        case 'revealWinner0_87': {
          const v1029 = v762[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc6, ctc1, ctc1, ctc7, ctc2, ctc8, ctc8, ctc2, ctc1, ctc1, ctc10, ctc1, ctc9, ctc1, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v762], secs: v764, time: v763, didSend: v395, from: v761 } = txn1;
  switch (v762[0]) {
    case 'claimRewards0_87': {
      const v765 = v762[1];
      return;
      break;
      }
    case 'getTicket0_87': {
      const v897 = v762[1];
      undefined /* setApiDetails */;
      ;
      const v936 = stdlib.safeAdd(v648, v613);
      const v938 = stdlib.Array_set(v647, '0', v936);
      const v939 = stdlib.Array_set(v635, stdlib.checkedBigNumberify('./src/contract/index.rsh:76:111:dot', stdlib.UInt_max, '0'), v938);
      ;
      const v976 = v897[stdlib.checkedBigNumberify('./src/contract/index.rsh:91:13:spread', stdlib.UInt_max, '0')];
      const v977 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v761), null);
      const v978 = stdlib.fromSome(v977, stdlib.checkedBigNumberify('./src/contract/index.rsh:64:45:decimal', stdlib.UInt_max, '0'));
      const v979 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v761), null);
      const v983 = stdlib.fromSome(v979, v626);
      const v984 = stdlib.gt(v976, stdlib.checkedBigNumberify('./src/contract/index.rsh:110:31:decimal', stdlib.UInt_max, '0'));
      const v985 = stdlib.le(v976, stdlib.checkedBigNumberify('./src/contract/index.rsh:12:26:decimal', stdlib.UInt_max, '5'));
      const v986 = v984 ? v985 : false;
      stdlib.assert(v986, {
        at: './src/contract/index.rsh:110:24:application',
        fs: ['at ./src/contract/index.rsh:107:13:application call to [unknown function] (defined at: ./src/contract/index.rsh:107:13:function exp)'],
        msg: 'Invalid ticket number',
        who: 'getTicket'
        });
      const v987 = stdlib.lt(v631, stdlib.checkedBigNumberify('./src/contract/index.rsh:12:26:decimal', stdlib.UInt_max, '5'));
      stdlib.assert(v987, {
        at: './src/contract/index.rsh:111:24:application',
        fs: ['at ./src/contract/index.rsh:107:13:application call to [unknown function] (defined at: ./src/contract/index.rsh:107:13:function exp)'],
        msg: 'All tickets have been sold. Sorry!',
        who: 'getTicket'
        });
      const v988 = v628 ? false : true;
      stdlib.assert(v988, {
        at: './src/contract/index.rsh:112:32:application',
        fs: ['at ./src/contract/index.rsh:107:13:application call to [unknown function] (defined at: ./src/contract/index.rsh:107:13:function exp)'],
        msg: 'Raffle is already over. Sorry!',
        who: 'getTicket'
        });
      const v989 = await stdlib.Array_asyncReduce([v630], false, async([v991], v990, v992) => {
        const v993 = stdlib.eq(v976, v991);
        const v995 = v990 ? v990 : v993;
        
        return v995;})
      const v996 = v989 ? false : true;
      stdlib.assert(v996, {
        at: './src/contract/index.rsh:113:32:application',
        fs: ['at ./src/contract/index.rsh:107:13:application call to [unknown function] (defined at: ./src/contract/index.rsh:107:13:function exp)'],
        msg: 'Someone already purchased your chosen ticket!. Try again',
        who: 'getTicket'
        });
      const v997 = stdlib.lt(v978, stdlib.checkedBigNumberify('./src/contract/index.rsh:12:26:decimal', stdlib.UInt_max, '5'));
      stdlib.assert(v997, {
        at: './src/contract/index.rsh:114:24:application',
        fs: ['at ./src/contract/index.rsh:107:13:application call to [unknown function] (defined at: ./src/contract/index.rsh:107:13:function exp)'],
        msg: 'weird - ticketCount bigger than array size',
        who: 'getTicket'
        });
      const v998 = stdlib.safeAdd(v978, stdlib.checkedBigNumberify('./src/contract/index.rsh:116:51:decimal', stdlib.UInt_max, '1'));
      await stdlib.mapSet(map1, v761, v998);
      const v999 = stdlib.safeAdd(v631, stdlib.checkedBigNumberify('./src/contract/index.rsh:117:60:decimal', stdlib.UInt_max, '1'));
      const v1001 = stdlib.Array_set(v983, v978, v976);
      await stdlib.mapSet(map0, v761, v1001);
      const v1003 = stdlib.Array_set(v630, v978, v976);
      const v1004 = true;
      const v1005 = await txn1.getOutput('getTicket', 'v1004', ctc8, v1004);
      if (v395) {
        stdlib.protect(ctc0, await interact.out(v897, v1005), {
          at: './src/contract/index.rsh:92:13:application',
          fs: ['at ./src/contract/index.rsh:92:13:application call to [unknown function] (defined at: ./src/contract/index.rsh:92:13:function exp)', 'at ./src/contract/index.rsh:121:20:application call to "res" (defined at: ./src/contract/index.rsh:107:13:function exp)', 'at ./src/contract/index.rsh:107:13:application call to [unknown function] (defined at: ./src/contract/index.rsh:107:13:function exp)'],
          msg: 'out',
          who: 'getTicket'
          });
        }
      else {
        }
      
      const v1779 = v628;
      const v1780 = v629;
      const v1781 = v1003;
      const v1782 = v999;
      const v1783 = v632;
      const v1785 = v939;
      const v1786 = v636;
      const v1787 = v939[stdlib.checkedBigNumberify('./src/contract/index.rsh:83:44:application', stdlib.UInt_max, '0')];
      const v1788 = v1787[stdlib.checkedBigNumberify('./src/contract/index.rsh:83:44:application', stdlib.UInt_max, '0')];
      return;
      
      break;
      }
    case 'revealWinner0_87': {
      const v1029 = v762[1];
      return;
      break;
      }
    }
  
  
  };
export async function _revealWinner3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _revealWinner3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _revealWinner3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Digest;
  const ctc7 = stdlib.T_Token;
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc1]);
  const ctc14 = stdlib.T_Data({
    claimRewards0_87: ctc12,
    getTicket0_87: ctc13,
    revealWinner0_87: ctc11
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  
  const [v609, v610, v611, v613, v615, v626, v628, v629, v630, v631, v632, v635, v636, v647, v648] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc5, ctc6, ctc1, ctc1, ctc7, ctc2, ctc8, ctc8, ctc2, ctc1, ctc1, ctc10, ctc1, ctc9, ctc1]);
  const v685 = ctc.selfAddress();
  const v687 = stdlib.protect(ctc11, await interact.in(), {
    at: './src/contract/index.rsh:1:23:application',
    fs: ['at ./src/contract/index.rsh:128:13:application call to [unknown function] (defined at: ./src/contract/index.rsh:128:13:function exp)', 'at ./src/contract/index.rsh:76:111:application call to "runrevealWinner0_87" (defined at: ./src/contract/index.rsh:125:13:function exp)', 'at ./src/contract/index.rsh:76:111:application call to [unknown function] (defined at: ./src/contract/index.rsh:76:111:function exp)'],
    msg: 'in',
    who: 'revealWinner'
    });
  const v693 = stdlib.addressEq(v685, v609);
  stdlib.assert(v693, {
    at: './src/contract/index.rsh:129:23:application',
    fs: ['at ./src/contract/index.rsh:128:13:application call to [unknown function] (defined at: ./src/contract/index.rsh:128:25:function exp)', 'at ./src/contract/index.rsh:128:13:application call to [unknown function] (defined at: ./src/contract/index.rsh:128:13:function exp)', 'at ./src/contract/index.rsh:76:111:application call to "runrevealWinner0_87" (defined at: ./src/contract/index.rsh:125:13:function exp)', 'at ./src/contract/index.rsh:76:111:application call to [unknown function] (defined at: ./src/contract/index.rsh:76:111:function exp)'],
    msg: 'Only Raffle Creator can reveal the winner',
    who: 'revealWinner'
    });
  const v694 = stdlib.eq(stdlib.checkedBigNumberify('./src/contract/index.rsh:12:26:decimal', stdlib.UInt_max, '5'), v631);
  stdlib.assert(v694, {
    at: './src/contract/index.rsh:130:31:application',
    fs: ['at ./src/contract/index.rsh:128:13:application call to [unknown function] (defined at: ./src/contract/index.rsh:128:25:function exp)', 'at ./src/contract/index.rsh:128:13:application call to [unknown function] (defined at: ./src/contract/index.rsh:128:13:function exp)', 'at ./src/contract/index.rsh:76:111:application call to "runrevealWinner0_87" (defined at: ./src/contract/index.rsh:125:13:function exp)', 'at ./src/contract/index.rsh:76:111:application call to [unknown function] (defined at: ./src/contract/index.rsh:76:111:function exp)'],
    msg: 'Wait until all tickets are sold before revealing the winner',
    who: 'revealWinner'
    });
  const v695 = v628 ? false : true;
  stdlib.assert(v695, {
    at: './src/contract/index.rsh:131:31:application',
    fs: ['at ./src/contract/index.rsh:128:13:application call to [unknown function] (defined at: ./src/contract/index.rsh:128:25:function exp)', 'at ./src/contract/index.rsh:128:13:application call to [unknown function] (defined at: ./src/contract/index.rsh:128:13:function exp)', 'at ./src/contract/index.rsh:76:111:application call to "runrevealWinner0_87" (defined at: ./src/contract/index.rsh:125:13:function exp)', 'at ./src/contract/index.rsh:76:111:application call to [unknown function] (defined at: ./src/contract/index.rsh:76:111:function exp)'],
    msg: 'Raffle is already over. ',
    who: 'revealWinner'
    });
  const v700 = ['revealWinner0_87', v687];
  
  const txn1 = await (ctc.sendrecv({
    args: [v609, v610, v611, v613, v615, v626, v628, v629, v630, v631, v632, v635, v636, v647, v648, v700],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./src/contract/index.rsh:134:29:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./src/contract/index.rsh:134:33:decimal', stdlib.UInt_max, '0'), v615]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v762], secs: v764, time: v763, didSend: v395, from: v761 } = txn1;
      
      switch (v762[0]) {
        case 'claimRewards0_87': {
          const v765 = v762[1];
          
          break;
          }
        case 'getTicket0_87': {
          const v897 = v762[1];
          
          break;
          }
        case 'revealWinner0_87': {
          const v1029 = v762[1];
          sim_r.txns.push({
            kind: 'api',
            who: "revealWinner"
            });
          ;
          const v1070 = stdlib.Array_set(v647, '0', v648);
          const v1071 = stdlib.Array_set(v635, stdlib.checkedBigNumberify('./src/contract/index.rsh:76:111:dot', stdlib.UInt_max, '0'), v1070);
          ;
          const v1146 = v1029[stdlib.checkedBigNumberify('./src/contract/index.rsh:125:13:spread', stdlib.UInt_max, '1')];
          const v1152 = true;
          const v1153 = await txn1.getOutput('revealWinner', 'v1152', ctc8, v1152);
          
          const v1827 = v628;
          const v1828 = v629;
          const v1829 = v630;
          const v1830 = v631;
          const v1831 = v1146;
          const v1833 = v1071;
          const v1834 = v636;
          const v1835 = v1071[stdlib.checkedBigNumberify('./src/contract/index.rsh:83:44:application', stdlib.UInt_max, '0')];
          const v1836 = v1835[stdlib.checkedBigNumberify('./src/contract/index.rsh:83:44:application', stdlib.UInt_max, '0')];
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc6, ctc1, ctc1, ctc7, ctc2, ctc8, ctc8, ctc2, ctc1, ctc1, ctc10, ctc1, ctc9, ctc1, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v762], secs: v764, time: v763, didSend: v395, from: v761 } = txn1;
  switch (v762[0]) {
    case 'claimRewards0_87': {
      const v765 = v762[1];
      return;
      break;
      }
    case 'getTicket0_87': {
      const v897 = v762[1];
      return;
      break;
      }
    case 'revealWinner0_87': {
      const v1029 = v762[1];
      undefined /* setApiDetails */;
      ;
      const v1070 = stdlib.Array_set(v647, '0', v648);
      const v1071 = stdlib.Array_set(v635, stdlib.checkedBigNumberify('./src/contract/index.rsh:76:111:dot', stdlib.UInt_max, '0'), v1070);
      ;
      const v1145 = v1029[stdlib.checkedBigNumberify('./src/contract/index.rsh:125:13:spread', stdlib.UInt_max, '0')];
      const v1146 = v1029[stdlib.checkedBigNumberify('./src/contract/index.rsh:125:13:spread', stdlib.UInt_max, '1')];
      const v1147 = stdlib.addressEq(v761, v609);
      stdlib.assert(v1147, {
        at: './src/contract/index.rsh:137:24:application',
        fs: ['at ./src/contract/index.rsh:136:13:application call to [unknown function] (defined at: ./src/contract/index.rsh:136:13:function exp)'],
        msg: 'Only Raffle Creator can use this API',
        who: 'revealWinner'
        });
      const v1148 = stdlib.eq(stdlib.checkedBigNumberify('./src/contract/index.rsh:12:26:decimal', stdlib.UInt_max, '5'), v631);
      stdlib.assert(v1148, {
        at: './src/contract/index.rsh:138:32:application',
        fs: ['at ./src/contract/index.rsh:136:13:application call to [unknown function] (defined at: ./src/contract/index.rsh:136:13:function exp)'],
        msg: 'Wait until all tickets are sold before revealing the winner',
        who: 'revealWinner'
        });
      const v1149 = v628 ? false : true;
      stdlib.assert(v1149, {
        at: './src/contract/index.rsh:139:32:application',
        fs: ['at ./src/contract/index.rsh:136:13:application call to [unknown function] (defined at: ./src/contract/index.rsh:136:13:function exp)'],
        msg: 'Raffle is already over. ',
        who: 'revealWinner'
        });
      const v1150 = stdlib.digest(ctc11, [v1145, v1146]);
      const v1151 = stdlib.digestEq(v610, v1150);
      stdlib.assert(v1151, {
        at: 'reach standard library:69:17:application',
        fs: ['at ./src/contract/index.rsh:141:32:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)', 'at ./src/contract/index.rsh:136:13:application call to [unknown function] (defined at: ./src/contract/index.rsh:136:13:function exp)'],
        msg: null,
        who: 'revealWinner'
        });
      const v1152 = true;
      const v1153 = await txn1.getOutput('revealWinner', 'v1152', ctc8, v1152);
      if (v395) {
        stdlib.protect(ctc0, await interact.out(v1029, v1153), {
          at: './src/contract/index.rsh:126:13:application',
          fs: ['at ./src/contract/index.rsh:126:13:application call to [unknown function] (defined at: ./src/contract/index.rsh:126:13:function exp)', 'at ./src/contract/index.rsh:143:20:application call to "res" (defined at: ./src/contract/index.rsh:136:13:function exp)', 'at ./src/contract/index.rsh:136:13:application call to [unknown function] (defined at: ./src/contract/index.rsh:136:13:function exp)'],
          msg: 'out',
          who: 'revealWinner'
          });
        }
      else {
        }
      
      const v1827 = v628;
      const v1828 = v629;
      const v1829 = v630;
      const v1830 = v631;
      const v1831 = v1146;
      const v1833 = v1071;
      const v1834 = v636;
      const v1835 = v1071[stdlib.checkedBigNumberify('./src/contract/index.rsh:83:44:application', stdlib.UInt_max, '0')];
      const v1836 = v1835[stdlib.checkedBigNumberify('./src/contract/index.rsh:83:44:application', stdlib.UInt_max, '0')];
      return;
      
      break;
      }
    }
  
  
  };
export async function claimRewards(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for claimRewards expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for claimRewards expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _claimRewards3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function getTicket(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for getTicket expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for getTicket expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _getTicket3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function revealWinner(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for revealWinner expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for revealWinner expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _revealWinner3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`claimRewards()byte`, `getTicket(uint64)byte`, `revealWinner(uint64,uint64)byte`],
    pure: [`Creator_v()address`, `balance_NFT_v()uint64`, `balance_v()uint64`, `raffleOver_v()byte`, `receivedTickets_v(address)uint64`, `rewardsClaimed_v()byte`, `ticketPrice_v()uint64`, `ticketsSold_v()uint64`, `winningTicket_v()uint64`],
    sigs: [`Creator_v()address`, `balance_NFT_v()uint64`, `balance_v()uint64`, `claimRewards()byte`, `getTicket(uint64)byte`, `raffleOver_v()byte`, `receivedTickets_v(address)uint64`, `revealWinner(uint64,uint64)byte`, `rewardsClaimed_v()byte`, `ticketPrice_v()uint64`, `ticketsSold_v()uint64`, `winningTicket_v()uint64`]
    },
  appApproval: `BiAbAAEDCAUoAkAEMsjW3pcGg6DZ3weeop60DLC6+eQMkcaq3AbXpLjbB6aJr9cCzY7SvQOZ1NW2Be24rZECn7/HvgJIUKoBsgHLAaCNBiYDAQEBAAAiNQAxGEEGXSpkSSJbNQElWzUCMRkjEkEACjEAKSEJr2ZCBio2GgAXSUEBYCI1BCM1BkkhCgxAALBJIQsMQABZSSEMDEAAOUkhDQxAABkhDRJENAEkEkQpZChkUEk1A1eAATUHQgX2IQwSRDQBJBJEKWQoZFBJNQNXACA1B0IF3SELEkQ0ASQSRClkKGRQSTUDV7IINQdCBcRJIQ4MQAAwSSEPDEAAEyEPEkQ2GgE1/yg0/1Alr1BCAWghDhJENhoBNhoCUDX/gAECNP9QQgFSIQoSRDQBJBJEKWQoZFBJNQNX5Ag1B0IFdEkhEAxAAEdJIREMQAAnSSESDEAAGSESEkQ0ASQSRClkKGRQSTUDV4EBNQdCBUYhERJENAEAIRASRDQBJBJEKWQoZFBJNQNXywg1B0IFJkkhEwxAADJJIRQMQAASIRQSRCo1/yk0/1CBEK9QQgDLIRMSRDQBJBJEKWQoZFBJNQNXqgg1B0IE7YGdurgOEkQ0ASQSRClkKGRQSTUDV0gINQdCBNE2GgIXNQQ2GgM2GgEXSSEGDEADVEkkDEAAeyQSRCQ0ARJENARJIhJMNAISEUQpZChkUEk1A0lXACA1/yEHWzX+gASnZcS0sDIGNP4PRDT/MQASRDT/NANXICA0/jQDIRVbNAMhFls0A1dYKDQDV4ABFzQDV4EBFzQDV4IoNAMhF1s0AyEYWzIGNANXuhE0AyEZW0IDeEgkNAESRDQESSISTDQCEhFEKWQoZFBJNQNJSkpKSkpKSVcAIDX/VyAgNf4hB1s1/SEVWzX8IRZbNftXWCg1+leAARc1+VeBARc1+FeCKDX3IRdbNfYhGFs19Ve6ETX0IRlbNfNX0xE18oHkAVs18Uk1BTXwgASKiizcNPBQsDIGNP0MRDTwIlVJIwxAAY1JIQYMQABpIQYSRDTwVwEQNe807yVbNe4xADT/EkQhBDT2EkQ0+RRENP4071cACDTuFlABEkSACQAAAAAAAASAAbAoNQc0/zT+NP00/DT7NPo0+TT4NPc09jTuMgY08jTxFjXtVwgJNO1MUDTzQgJ6SDTwVwEINe80/DT7iAN7NO8XNe4iMQCIA0lXKQlJNewjWzTsIlVNNe007iINNO4hBA4QRDT2IQQMRDT5FEQiNewiNes09yU06wslWBc16jTuNOoSNOxJTTXsNOsjCEk16yEEDED/3TTsFEQ07SEEDEQxACkxAIgC6ig07SMIFlA161cAKTTrUGYxACkxAIgC0ig0+jEAiALKVwApSTXrVwEoNOsiVU1JIiU07QtSNO4WUEwlSTTtCwghBVJQUDXrVykJNOtMUGaACQAAAAAAAAPsAbAoNQc0/zT+NP00/DT7NPo0+TT4NPciJTTtC1I07hZQNPclSTTtCwghBVJQNPYjCDT1MgY08jTxNPwIFjXrVwgJNOtMUDTzQgFdSDTyNPEWNe5XCAk07kxQNe8iNe4iNe00+jEAiAIoVwApSTXsVwEoNOwiVU0lNO0LJVgXNew09TTsEjTuSU017jTtIwhJNe0hBAxA/8o07kQ0+BRENPlENO9XABFJNe0iW0k17DT8D0SxIrIBNPyyEiEIshAxALIUNPuyEbOACQAAAAAAAANEAbAoNQc0/zT+NP00/DT7NPojIzT3NPY09TIGNO007DT8CRY161cICTTrTFA080IApSISRCEaiAGVIjQBEkQ0BEkiEkw0AhIRREk1BUlKSlcAIDX/gSBbNf4hBVs1/YEwWzX8gThbNfshB1s1+oAE6Pld8DT/UDT+FlA0/RZQNPwWUDT7FlA0+hZQsIERrzX5IRqIATmxIrIBIrISIQiyEDIKshQ0+rIRsyEFrzX4MQA0/zT+NPw0+jT4IiI0+CIiMgY0+VcAESWvNfdXCAk090xQIkIAADX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU19DXzNfI0/lcAEUk18SJbNfA08jTzUDT0FlA09RZQNPYWUDT3UDT4FlEHCFA0+RZRBwhQNPpQNPsWUDT8FlA0/lA0/xZQNPFQNPAWUClLAVcAf2coSwFXf21nSCQ1ATIGNQJCABwxGSEEEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEJDE1EkQiMTYSRCMxNxJEIjUBIjUCQv+vSTEYYUAABUghCa+JKWKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAhCBJEOBFPAhJEOBISRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 50,
  stateKeys: 2,
  stateSize: 236,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v610",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v611",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v612",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v613",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v614",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v615",
                "type": "address"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v610",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v611",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v612",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v613",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v614",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v615",
                "type": "address"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T15",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_claimRewards0_87",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T13",
                    "name": "_getTicket0_87",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T14",
                    "name": "_revealWinner0_87",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T15",
                "name": "v762",
                "type": "tuple"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1004",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1152",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v836",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Creator_v",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T1",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256[5]",
            "name": "_Some",
            "type": "uint256[5]"
          }
        ],
        "internalType": "struct T1",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap1Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T2",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T2",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T15",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_claimRewards0_87",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T13",
                    "name": "_getTicket0_87",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T14",
                    "name": "_revealWinner0_87",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T15",
                "name": "v762",
                "type": "tuple"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "balance_NFT_v",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "balance_v",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "claimRewards",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "getTicket",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "raffleOver_v",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "v1843",
        "type": "address"
      }
    ],
    "name": "receivedTickets_v",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_a1",
        "type": "uint256"
      }
    ],
    "name": "revealWinner",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "rewardsClaimed_v",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "ticketPrice_v",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "ticketsSold_v",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "winningTicket_v",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200352238038062003522833981016040819052620000269162000701565b600080554360035562000038620003c8565b6040805133815283516020808301919091528085015180518385015290810151606080840191909152818401516080808501919091529082015160a0808501919091529082015160c084015201516001600160a01b031660e082015290517f6eeaf4151199c42f7acbbfd807af257f7a55624995a108b444a03fe1a6d828be918190036101000190a180516000908190528151602090810182905282516040019190915281519082015152620000f1341560106200020a565b604081810180516000908190528151602001819052815190920182905280516060018290525160800152620001256200040f565b8051339052602083810180515183518301528051820151835160409081019190915281516060908101518551820152915160a09081015185516001600160a01b039091166080918201528683018051875184015285870180516000908190528151880181905291518151860152805186018290528051909201819052905143920191909152858401805183519485018452828552815151860151958501959095525151820151151591830191909152620001e0929162000234565b60208201805160c0019190915251600060e0909101526200020181620002b7565b505050620009a4565b81620002305760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6200023e62000433565b60005b600181101562000294578481600181106200026057620002606200079f565b60200201518282600181106200027a576200027a6200079f565b6020020152806200028b81620007b5565b91505062000241565b5081818460018110620002ab57620002ab6200079f565b60200201529392505050565b620002c162000480565b8151516001600160a01b039081168252825160209081015181840152835160409081015181850152845160609081015181860152855160809081015190941684860152855160a09081015190860152828601805151151560c0808801919091528151850151151560e080890191909152825185015161010089015282519093015161012088015281519095015161014087015280518501516101608701528051909101516101808601528051840151516101a0860152519092015151516101c084015260036000554360015590516200039d9183910162000851565b60405160208183030381529060405260029080519060200190620003c392919062000545565b505050565b6040805160c081019091526000606082018181526080830182905260a0830191909152815260208101620003fb62000433565b81526020016200040a620005d4565b905290565b604051806040016040528062000424620005f2565b81526020016200040a6200063c565b60405180602001604052806001905b62000469604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620004425790505090565b604051806101e0016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001620004cb620005d4565b81526000602082018190526040820152606001620004e8620005d4565b815260200160008152602001600081526020016200050562000433565b81526020016000815260200162000538604051806060016040528060008152602001600081526020016000151581525090565b8152602001600081525090565b828054620005539062000967565b90600052602060002090601f016020900481019282620005775760008555620005c2565b82601f106200059257805160ff1916838001178555620005c2565b82800160010185558215620005c2579182015b82811115620005c2578251825591602001919060010190620005a5565b50620005d092915062000682565b5090565b6040518060a001604052806005906020820280368337509192915050565b6040518060c0016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160006001600160a01b031681526020016200040a620005d4565b6040805161010081018252600080825260208201529081016200065e620005d4565b81526020016000815260200160008152602001600081526020016200053862000433565b5b80821115620005d0576000815560010162000683565b604080519081016001600160401b0381118282101715620006ca57634e487b7160e01b600052604160045260246000fd5b60405290565b60405160c081016001600160401b0381118282101715620006ca57634e487b7160e01b600052604160045260246000fd5b600081830360e08112156200071557600080fd5b6200071f62000699565b8351815260c0601f19830112156200073657600080fd5b62000740620006d0565b91506020840151825260408401516020830152606084015160408301526080840151606083015260a0840151608083015260c084015160018060a01b03811681146200078b57600080fd5b60a083015260208101919091529392505050565b634e487b7160e01b600052603260045260246000fd5b6000600019821415620007d857634e487b7160e01b600052601160045260246000fd5b5060010190565b8060005b600581101562000804578151845260209384019390910190600101620007e3565b50505050565b8060005b600181101562000804576200083a84835180518252602080820151908301526040908101511515910152565b60609390930192602091909101906001016200080e565b81516001600160a01b03168152610360810160208301516020830152604083015160408301526060830151606083015260808301516200089c60808401826001600160a01b03169052565b5060a0830151620008b160a0840182620007df565b5060c0830151610140620008c88185018315159052565b60e08501519150610160620008e08186018415159052565b6101008601519250610180620008f981870185620007df565b61012087015161022087015282870151610240870152818701519350620009256102608701856200080a565b8601516102c08601525050506101a083015180516102e084015260208101516103008401526040015115156103208301526101c0909201516103409091015290565b600181811c908216806200097c57607f821691505b602082108114156200099e57634e487b7160e01b600052602260045260246000fd5b50919050565b612b6e80620009b46000396000f3fe60806040526004361061010c5760003560e01c8063832307571161009a578063cadc2e7a11610061578063cadc2e7a14610294578063d2b339bd146102c1578063df13d7ad146102d6578063e43ffb9f146102e9578063f6f52c13146102fe57005b8063832307571461021d5780639ba0680d14610232578063a41942a714610247578063a80cb2c21461025c578063ab53f2c61461027157005b80633894aea5116100de5780633894aea51461018a5780633bc5b7bf146101b757806370a03cd8146101e457806373b4522c146101f75780637dc379fa1461020a57005b806313658db7146101155780631476ca821461013f5780631e93b0f11461016d578063372500ab1461018257005b3661011357005b005b34801561012157600080fd5b5061012a610313565b60405190151581526020015b60405180910390f35b34801561014b57600080fd5b5061015f61015a3660046122cc565b610325565b604051908152602001610136565b34801561017957600080fd5b5060035461015f565b61012a61034f565b34801561019657600080fd5b5061019f61038d565b6040516001600160a01b039091168152602001610136565b3480156101c357600080fd5b506101d76101d23660046122cc565b610399565b6040516101369190612332565b6101136101f236600461236b565b6103b0565b610113610205366004612383565b6103e9565b61012a610218366004612395565b61041e565b34801561022957600080fd5b5060015461015f565b34801561023e57600080fd5b5061015f61046e565b34801561025357600080fd5b5061012a61047a565b34801561026857600080fd5b5061015f610486565b34801561027d57600080fd5b50610286610492565b6040516101369291906123da565b3480156102a057600080fd5b506102b46102af3660046122cc565b61052f565b6040516101369190612414565b3480156102cd57600080fd5b5061015f610555565b61012a6102e4366004612444565b610561565b3480156102f557600080fd5b5061015f6105be565b34801561030a57600080fd5b5061015f6105ca565b60008061031f816105d6565b91505090565b60408051602081019091526001600160a01b03821681526000906103488161069f565b9392505050565b6000610359611f0b565b60208181015151600090819052604080516060810182528281529283018290528201526103868282610768565b5192915050565b60008061031f8161112f565b6103a1611f2a565b6103aa826111f0565b92915050565b60408051606081018252600080825260208201819052918101919091526103e56103df3684900384018461251d565b82610768565b5050565b60408051606081018252600080825260208201819052918101919091526103e5610418368490038401846125f8565b826112da565b6000610428611f0b565b602081810180515160019052515160409081015185905280516060810182526000808252928101839052908101919091526104638282610768565b602001519392505050565b60008061031f816114f7565b60008061031f816115bc565b60008061031f81611680565b6000606060005460028080546104a79061264e565b80601f01602080910402602001604051908101604052809291908181526020018280546104d39061264e565b80156105205780601f106104f557610100808354040283529160200191610520565b820191906000526020600020905b81548152906001019060200180831161050357829003601f168201915b50505050509050915091509091565b60408051606081018252600080825260208201819052918101919091526103aa82611745565b60008061031f81611808565b600061056b611f0b565b602081810180515160029052805151606090810151879052905151810151820185905260408051918201815260008083529282018390528101919091526105b28282610768565b60400151949350505050565b60008061031f816118cd565b60008061031f81611992565b60006003600054141561068e576000600280546105f29061264e565b80601f016020809104026020016040519081016040528092919081815260200182805461061e9061264e565b801561066b5780601f106106405761010080835404028352916020019161066b565b820191906000526020600020905b81548152906001019060200180831161064e57829003601f168201915b505050505080602001905181019061068391906127c8565b60c001519392505050565b61069a6000600a611a52565b919050565b60006003600054141561075c576000600280546106bb9061264e565b80601f01602080910402602001604051908101604052809291908181526020018280546106e79061264e565b80156107345780601f1061070957610100808354040283529160200191610734565b820191906000526020600020905b81548152906001019060200180831161071757829003601f168201915b505050505080602001905181019061074c91906127c8565b905061075a6000600b611a52565b505b61069a6000600b611a52565b6107786003600054146024611a52565b815161079390158061078c57508251600154145b6025611a52565b6000808055600280546107a59061264e565b80601f01602080910402602001604051908101604052809291908181526020018280546107d19061264e565b801561081e5780601f106107f35761010080835404028352916020019161081e565b820191906000526020600020905b81548152906001019060200180831161080157829003601f168201915b505050505080602001905181019061083691906127c8565b9050610840611f49565b610851826040015143106026611a52565b7fe6c658c94407d6e3ca89491ebcf78eb22aae2ecc66f7ff53116a4788bbac6ffc33856040516108829291906128c7565b60405180910390a160006020850151515160028111156108a4576108a46122e9565b1415610b69576108b634156011611a52565b6108fa82610160015160006040518060600160405280866101c001518152602001866101a00151602001518152602001866101a00151604001511515815250611a78565b81526080820151610919906109129033906000611aec565b6012611a52565b6000604082018190525b60058110156109ba576001610937336111f0565b516001811115610949576109496122e9565b14610958578260a00151610966565b610961336111f0565b604001515b816005811061097757610977612938565b60200201516060830152604082015161099b578160600151836101400151146109a1565b81604001515b15156040830152806109b281612964565b915050610923565b5060408101511515602082018190526109d4906013611a52565b6109f18260e001516109e75760016109ea565b60005b6014611a52565b610a008260c001516015611a52565b606082015181515151610a169111156016611a52565b610a298260800151338460600151611b02565b604051600181527f709e5952d82f7a965fdf623325f5f880c1f663f1d82f8bd164ee61c9ec10ae939060200160405180910390a160018352610a69611fd3565b825181516001600160a01b03918216905260208085015183518201526040808601518451820152606080870180518651830152608080890151875196169581019590955260a080890151875182015284870180516001908190528151909601959095526101008901518551850152610120890151855184015261014089015185519096019590955292514394019390935284518151938401909152845151519151610b41939192600092918291610b1f91611b1b565b8152865151602090810151908201528651516040908101511515910152611a78565b60208201805160c00191909152610180840151905160e00152610b6381611b6a565b50611129565b6001602085015151516002811115610b8357610b836122e9565b1415610f2057602084015151604001516080820152610ba434156017611a52565b610bc1610bba3384608001518560600151611aec565b6018611a52565b6001610bcc33611745565b516001811115610bde57610bde6122e9565b14610bea576000610bf8565b610bf333611745565b604001515b60a0820152608081015151610c2490610c12576000610c1d565b608082015151600510155b6019611a52565b610c37600583610120015110601a611a52565b610c548260c00151610c4a576001610c4d565b60005b601b611a52565b600060e082018190525b6005811015610cc3578261010001518160058110610c7e57610c7e612938565b602002015161010083015260e0820151610ca45761010082015160808301515114610caa565b8160e001515b151560e083015280610cbb81612964565b915050610c5e565b5060e0810151151560c08201819052610ceb90610ce1576001610ce4565b60005b601c611a52565b610cfd60058260a0015110601d611a52565b336000908152600560205260409020805460ff1916600190811790915560a0820151610d2891611c70565b33600081815260056020908152604080832060019081019590955560049091529020805460ff191683179055610da19190610d62906111f0565b516001811115610d7457610d746122e9565b14610d83578260a00151610d91565b610d8c336111f0565b604001515b60a0830151608084015151611cbd565b336000908152600460205260409020610dc1916001909101906005611ff3565b50604051600181527fb17979633e918ba8a3614ce6e867a05a09213055082ba4ec4ad8f7ebb2b200b49060200160405180910390a160016020840152610e05611fd3565b825181516001600160a01b0391821690526020808501518351820152604080860151845190910152606080860151845190910152608080860151845193169281019290925260a080860151845182015260c0860151828501805191151590915260e08701519051901515920191909152610100850151908401519184015151610e8e9290611cbd565b602082015160400152610120830151610ea8906001611c70565b602082018051606090810192909252610140850151815160800152514360a090910152610160840151604080518084019091526101c086015192860151610b4193600092918291610ef891611c70565b8152602001876101a00151602001518152602001876101a00151604001511515815250611a78565b6002602085015151516002811115610f3a57610f3a6122e9565b14156111295760208401515160600151610120820152610f5c3415601e611a52565b610f76610f6f3384608001516000611aec565b601f611a52565b8151610f8e906001600160a01b031633146020611a52565b610fa18261012001516005146021611a52565b610fbe8260c00151610fb4576001610fb7565b60005b6022611a52565b610120810151805160209182015160405161100e93610fe893929101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360200151146023611a52565b604051600181527f71eca3f89696ce40bac6d8d0a8a2ade53aca87ade1d7e50bdf0a9eeb249995389060200160405180910390a160016040840152611051611fd3565b825181516001600160a01b039182169052602080850151835182015260408086015184518201526060808701518551820152608080880151865195169481019490945260a080880151865182015260c0880151848701805191151590915260e08901518151901515908601526101008901518151850152610120808a01518251850152880151850151815190960195909552935143940193909352610160860151815193840182526101c087015184526101a087018051840151938501939093529151810151151590830152610b4191600090611a78565b50505050565b6000600360005414156111e45760006002805461114b9061264e565b80601f01602080910402602001604051908101604052809291908181526020018280546111779061264e565b80156111c45780601f10611199576101008083540402835291602001916111c4565b820191906000526020600020905b8154815290600101906020018083116111a757829003601f168201915b50505050508060200190518101906111dc91906127c8565b519392505050565b61069a60006007611a52565b6111f8611f2a565b60016001600160a01b03831660009081526004602052604090205460ff166001811115611227576112276122e9565b14156112cb576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115611268576112686122e9565b6001811115611279576112796122e9565b81528154610100900460ff16151560208201526040805160a08101808352919092019190600184019060059082845b8154815260200190600101908083116112a8575050505050815250509050919050565b60008082526020820152919050565b6112ea6003600054146029611a52565b81516113059015806112fe57508251600154145b602a611a52565b6000808055600280546113179061264e565b80601f01602080910402602001604051908101604052809291908181526020018280546113439061264e565b80156113905780601f1061136557610100808354040283529160200191611390565b820191906000526020600020905b81548152906001019060200180831161137357829003601f168201915b50505050508060200190518101906113a891906127c8565b90506113bc8160400151431015602b611a52565b60408051338152845160208083019190915285015115158183015290517f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c69181900360600190a161140f34156027611a52565b8051611427906001600160a01b031633146028611a52565b61142f611fd3565b815181516001600160a01b039182169052602080840151835182015260408085015184518201526060808601518551820152608080870151865195169481019490945260a080870151865182015260c080880151858801805191151590915260e0808a015182519015159701969096526101008901518151909501949094526101208801518451909301929092526101408701518351909501949094528151439401939093526101608501518151909301929092526101808401519151015261112981611b6a565b6000600360005414156115b0576000600280546115139061264e565b80601f016020809104026020016040519081016040528092919081815260200182805461153f9061264e565b801561158c5780601f106115615761010080835404028352916020019161158c565b820191906000526020600020905b81548152906001019060200180831161156f57829003601f168201915b50505050508060200190518101906115a491906127c8565b61012001519392505050565b61069a6000600e611a52565b600060036000541415611674576000600280546115d89061264e565b80601f01602080910402602001604051908101604052809291908181526020018280546116049061264e565b80156116515780601f1061162657610100808354040283529160200191611651565b820191906000526020600020905b81548152906001019060200180831161163457829003601f168201915b505050505080602001905181019061166991906127c8565b60e001519392505050565b61069a6000600c611a52565b6000600360005414156117395760006002805461169c9061264e565b80601f01602080910402602001604051908101604052809291908181526020018280546116c89061264e565b80156117155780601f106116ea57610100808354040283529160200191611715565b820191906000526020600020905b8154815290600101906020018083116116f857829003601f168201915b505050505080602001905181019061172d91906127c8565b61014001519392505050565b61069a6000600f611a52565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff166001811115611791576117916122e9565b14156112cb576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff1660018111156117d2576117d26122e9565b60018111156117e3576117e36122e9565b81528154610100900460ff161515602082015260019091015460409091015292915050565b6000600360005414156118c1576000600280546118249061264e565b80601f01602080910402602001604051908101604052809291908181526020018280546118509061264e565b801561189d5780601f106118725761010080835404028352916020019161189d565b820191906000526020600020905b81548152906001019060200180831161188057829003601f168201915b50505050508060200190518101906118b591906127c8565b6101c001519392505050565b61069a60006008611a52565b600060036000541415611986576000600280546118e99061264e565b80601f01602080910402602001604051908101604052809291908181526020018280546119159061264e565b80156119625780601f1061193757610100808354040283529160200191611962565b820191906000526020600020905b81548152906001019060200180831161194557829003601f168201915b505050505080602001905181019061197a91906127c8565b61018001519392505050565b61069a60006009611a52565b600060036000541415611a4a576000600280546119ae9061264e565b80601f01602080910402602001604051908101604052809291908181526020018280546119da9061264e565b8015611a275780601f106119fc57610100808354040283529160200191611a27565b820191906000526020600020905b815481529060010190602001808311611a0a57829003601f168201915b5050505050806020019051810190611a3f91906127c8565b606001519392505050565b61069a6000600d5b816103e55760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b611a80612031565b60005b6001811015611acc57848160018110611a9e57611a9e612938565b6020020151828260018110611ab557611ab5612938565b602002015280611ac481612964565b915050611a83565b5081818460018110611ae057611ae0612938565b60200201529392505050565b6000611afa83853085611d25565b949350505050565b611b0d838383611dff565b611b1657600080fd5b505050565b600082611b28838261297f565b91508111156103aa5760405162461bcd60e51b815260206004820152600e60248201526d1cdd58881ddc985c185c9bdd5b9960921b6044820152606401611a6f565b611b7261207c565b8151516001600160a01b039081168252825160209081015181840152835160409081015181850152845160609081015181860152855160809081015190941684860152855160a09081015190860152828601805151151560c0808801919091528151850151151560e080890191909152825185015161010089015282519093015161012088015281519095015161014087015280518501516101608701528051909101516101808601528051840151516101a0860152519092015151516101c08401526003600055436001559051611c4c918391016129da565b60405160208183030381529060405260029080519060200190611b1692919061213a565b600082611c7d8382612ae7565b91508110156103aa5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401611a6f565b611cc56121ad565b60005b6005811015611d1157848160058110611ce357611ce3612938565b6020020151828260058110611cfa57611cfa612938565b602002015280611d0981612964565b915050611cc8565b5081818460058110611ae057611ae0612938565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391611d8c91612aff565b60006040518083038185875af1925050503d8060008114611dc9576040519150601f19603f3d011682016040523d82523d6000602084013e611dce565b606091505b5091509150611ddf82826001611ed0565b5080806020019051810190611df49190612b1b565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391611e5e91612aff565b60006040518083038185875af1925050503d8060008114611e9b576040519150601f19603f3d011682016040523d82523d6000602084013e611ea0565b606091505b5091509150611eb182826002611ed0565b5080806020019051810190611ec69190612b1b565b9695505050505050565b60608315611edf575081610348565b825115611eef5782518084602001fd5b60405163100960cb60e01b815260048101839052602401611a6f565b604051806040016040528060008152602001611f256121cb565b905290565b6040805160608101825260008082526020820152908101611f256121ad565b604051806101400160405280611f5d612031565b815260200160001515815260200160001515815260200160008152602001611f916040518060200160405280600081525090565b81526020016000815260200160001515815260200160001515815260200160008152602001611f25604051806040016040528060008152602001600081525090565b6040518060400160405280611fe6612215565b8152602001611f2561225d565b8260058101928215612021579160200282015b82811115612021578251825591602001919060010190612006565b5061202d92915061229f565b5090565b60405180602001604052806001905b612066604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816120405790505090565b604051806101e0016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160006001600160a01b031681526020016120c56121ad565b815260006020820181905260408201526060016120e06121ad565b815260200160008152602001600081526020016120fb612031565b81526020016000815260200161212d604051806060016040528060008152602001600081526020016000151581525090565b8152602001600081525090565b8280546121469061264e565b90600052602060002090601f0160209004810192826121685760008555612021565b82601f1061218157805160ff1916838001178555612021565b828001600101855582156120215791820182811115612021578251825591602001919060010190612006565b6040518060a001604052806005906020820280368337509192915050565b6040518060200160405280611f2560408051608081018252600080825260208083018290528351808201855282815283850152835180850190945281845283015290606082015290565b6040518060c0016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001611f256121ad565b60408051610100810182526000808252602082015290810161227d6121ad565b815260200160008152602001600081526020016000815260200161212d612031565b5b8082111561202d57600081556001016122a0565b6001600160a01b03811681146122c957600080fd5b50565b6000602082840312156122de57600080fd5b8135610348816122b4565b634e487b7160e01b600052602160045260246000fd5b600281106122c9576122c96122e9565b8060005b6005811015611129578151845260209384019390910190600101612313565b815160e0820190612342816122ff565b808352506020830151151560208301526040830151612364604084018261230f565b5092915050565b600060c0828403121561237d57600080fd5b50919050565b60006040828403121561237d57600080fd5b6000602082840312156123a757600080fd5b5035919050565b60005b838110156123c95781810151838201526020016123b1565b838111156111295750506000910152565b82815260406020820152600082518060408401526123ff8160608501602087016123ae565b601f01601f1916919091016060019392505050565b81516060820190612424816122ff565b808352506020830151151560208301526040830151604083015292915050565b6000806040838503121561245757600080fd5b50508035926020909101359150565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff8111828210171561249f5761249f612466565b60405290565b6040516020810167ffffffffffffffff8111828210171561249f5761249f612466565b6040516080810167ffffffffffffffff8111828210171561249f5761249f612466565b6040516101e0810167ffffffffffffffff8111828210171561249f5761249f612466565b80151581146122c957600080fd5b600081830360c081121561253057600080fd5b61253861247c565b8335815260a0601f198301121561254e57600080fd5b6125566124a5565b61255e6124c8565b60208601356003811061257057600080fd5b815260408601356125808161250f565b806020830152506020605f198501121561259957600080fd5b6125a16124a5565b60608701358152806040830152506040607f19850112156125c157600080fd5b6125c961247c565b93506080860135845260a086013560208501528360608201528082525080602083015250809250505092915050565b60006040828403121561260a57600080fd5b6040516040810181811067ffffffffffffffff8211171561262d5761262d612466565b6040528235815260208301356126428161250f565b60208201529392505050565b600181811c9082168061266257607f821691505b6020821081141561237d57634e487b7160e01b600052602260045260246000fd5b805161069a816122b4565b600082601f83011261269f57600080fd5b60405160a0810181811067ffffffffffffffff821117156126c2576126c2612466565b6040528060a08401858111156126d757600080fd5b845b818110156126f15780518352602092830192016126d9565b509195945050505050565b805161069a8161250f565b60006060828403121561271957600080fd5b6040516060810181811067ffffffffffffffff8211171561273c5761273c612466565b8060405250809150825181526020830151602082015260408301516127608161250f565b6040919091015292915050565b600082601f83011261277e57600080fd5b6127866124a5565b8060608085018681111561279957600080fd5b855b818110156127bc576127ad8882612707565b8552602090940193820161279b565b50919695505050505050565b600061036082840312156127db57600080fd5b6127e36124eb565b6127ec83612683565b815260208301516020820152604083015160408201526060830151606082015261281860808401612683565b608082015261282a8460a0850161268e565b60a082015261014061283d8185016126fc565b60c08301526101606128508186016126fc565b60e08401526101806128648782880161268e565b6101008501526102208601516101208501526102408601518385015261288e87610260880161276d565b828501526102c0860151818501525050506128ad846102e08501612707565b6101a082015261034092909201516101c083015250919050565b6001600160a01b0383168152815160208083019190915282015151805160e083019190600381106128fa576128fa6122e9565b80604085015250602081015115156060840152604081015151608084015260608101519050805160a0840152602081015160c0840152509392505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60006000198214156129785761297861294e565b5060010190565b6000828210156129915761299161294e565b500390565b8060005b6001811015611129576129c484835180518252602080820151908301526040908101511515910152565b606093909301926020919091019060010161299a565b81516001600160a01b0316815261036081016020830151602083015260408301516040830152606083015160608301526080830151612a2460808401826001600160a01b03169052565b5060a0830151612a3760a084018261230f565b5060c0830151610140612a4d8185018315159052565b60e08501519150610160612a648186018415159052565b6101008601519250610180612a7b8187018561230f565b61012087015161022087015282870151610240870152818701519350612aa5610260870185612996565b8601516102c08601525050506101a083015180516102e084015260208101516103008401526040015115156103208301526101c0909201516103409091015290565b60008219821115612afa57612afa61294e565b500190565b60008251612b118184602087016123ae565b9190910192915050565b600060208284031215612b2d57600080fd5b81516103488161250f56fea264697066735822122064d15c575c01512f219ae5dc5091584d62efcc4d553cd097508a16dcdbc4145864736f6c634300080c0033`,
  BytecodeLen: 13602,
  Which: `oD`,
  version: 7,
  views: {
    Creator_v: `Creator_v`,
    balance_NFT_v: `balance_NFT_v`,
    balance_v: `balance_v`,
    raffleOver_v: `raffleOver_v`,
    receivedTickets_v: `receivedTickets_v`,
    rewardsClaimed_v: `rewardsClaimed_v`,
    ticketPrice_v: `ticketPrice_v`,
    ticketsSold_v: `ticketsSold_v`,
    winningTicket_v: `winningTicket_v`
    }
  };
export const _stateSourceMap = {
  2: {
    at: './src/contract/index.rsh:180:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './src/contract/index.rsh:76:111:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Creator": Creator,
  "claimRewards": claimRewards,
  "getTicket": getTicket,
  "revealWinner": revealWinner
  };
export const _APIs = {
  claimRewards: claimRewards,
  getTicket: getTicket,
  revealWinner: revealWinner
  };
