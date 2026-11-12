/* Original, bounded practice situations. They are not complete free games. */
(function (g) {
  'use strict';
  const T = (zh, tw, en) => ({ zh, tw, en });
  const action = (id, kind, label, next, explanation) => ({ id, kind, label, legal: true, next, explanation });
  const blocked = (id, kind, label, reason) => ({ id, kind, label, legal: false, reason });
  const finish = (hand, table, title, summary) => ({ hand, table, result: { title, summary } });
  const scene = (id, mode, title, intro, prompt, hand, table, actions, endings) => ({
    id, mode, title, intro, start: 'start',
    nodes: { start: { prompt, hand, table, actions }, ...endings }
  });
  const a = action, b = blocked, f = finish;
  const scenarios = [
    scene('hk-discard','hk',T('留下两对，还是拆一对','留下兩對，還是拆一對','Keep both pairs or break one'),
      T('刚摸到第 14 张牌。两种出牌都合法，比较它们对手牌结构的影响。','剛摸到第 14 張牌。兩種出牌都合法，比較它們對手牌結構的影響。','You have drawn tile 14. Compare two legal discards and the shapes they leave.'),
      T('现在打哪张？','現在打哪張？','What do you discard?'),
      ['m2','m3','m4','p2','p3','p4','s5','s6','s7','z1','z1','p8','p8','z7'],
      { phase:T('出牌','出牌','Discard'), wallRemaining:42, discards:['s1','m9'], note:T('两组顺子、一组顺子、东风对子与八筒对子。','兩組順子、一組順子、東風對子與八筒對子。','Three runs, an East pair and an 8 Dot pair.') },
      [a('drop-white','discard',T('打白板','打白板','Discard White Dragon'),'end-white',T('保留两对，后续仍可比较哪一对作将。','保留兩對，後續仍可比較哪一對作將。','Both pairs remain; you can still choose which one becomes the pair.')),
       a('drop-eight','discard',T('打一张八筒','打一張八筒','Discard one 8 Dot'),'end-eight',T('这也是合法出牌，但八筒对子被拆开。','這也是合法出牌，但八筒對子被拆開。','This is legal, but it breaks the 8 Dot pair.')),
       b('win-now','win',T('立即宣布胡牌','立即宣佈胡牌','Declare a win now'),T('现在有 14 张，但尚不能拆成四组面子加一对。','現在有 14 張，但尚不能拆成四組面子加一對。','Four melds and a pair are not complete yet.'))],
      { 'end-white':f(['m2','m3','m4','p2','p3','p4','s5','s6','s7','z1','z1','p8','p8'],{ phase:T('待摸牌','待摸牌','Await draw'),wallRemaining:42,discards:['s1','m9','z7'] },T('两对都留下了','兩對都留下了','Both pairs survive'),T('白板是孤张。下一步可比较东风和八筒两条成组路线；这不是保证能胡的结论。','白板是孤張。下一步可比較東風和八筒兩條成組路線；這不是保證能胡的結論。','The isolated White Dragon is gone. Compare the East and 8 Dot routes next; no win is guaranteed.')),
        'end-eight':f(['m2','m3','m4','p2','p3','p4','s5','s6','s7','z1','z1','p8','z7'],{ phase:T('待摸牌','待摸牌','Await draw'),wallRemaining:42,discards:['s1','m9','p8'] },T('八筒对子拆开了','八筒對子拆開了','The 8 Dot pair is broken'),T('出牌合法，但现在留下八筒和白板两张孤张。复盘时比较这条路线和打白板的路线。','出牌合法，但現在留下八筒和白板兩張孤張。重看時比較這條路線和打白板的路線。','The discard is legal, but 8 Dot and White Dragon are now isolated. Replay to compare.')) }),

    scene('hk-call','hk',T('同一张弃牌：吃还是碰','同一張棄牌：吃還是碰','One discard: chow or pung'),
      T('上家打出三万。你的手里既有一、二万，也有两张三万。','上家打出三萬。你的手裡既有一、二萬，也有兩張三萬。','The previous player discards 3 Crak. You have 1–2 Crak and a pair of 3 Craks.'),
      T('选择一条合法的叫牌路线。','選擇一條合法的叫牌路線。','Choose a legal call.'),
      ['m1','m2','m3','m3','p2','p3','p4','s1','s2','s3','z1','z1','z2'],
      { phase:T('上家刚弃牌','上家剛棄牌','Previous player discarded'),lastDiscard:'m3',discards:['p9','s9'],wallRemaining:37 },
      [a('chow','chow',T('用一、二万吃三万','用一、二萬吃三萬','Chow with 1–2 Crak'),'end-chow',T('你从上家的弃牌组成一、二、三万顺子，并把它公开。','你從上家的棄牌組成一、二、三萬順子，並把它公開。','The previous player’s discard completes an exposed 1–2–3 Crak run.')),
       a('pung','pung',T('用两张三万碰三万','用兩張三萬碰三萬','Pung with two 3 Craks'),'end-pung',T('两张三万与弃牌组成三张相同的明刻。','兩張三萬與棄牌組成三張相同的明刻。','Two 3 Craks plus the discard form an exposed pung.')),
       b('hide','call',T('叫牌后藏进暗手','叫牌後藏進暗手','Call and hide the discard'),T('叫到的牌必须组成并公开相应面子，不能直接塞进暗手。','叫到的牌必須組成並公開相應面子，不能直接放進暗手。','A called tile must complete an exposed meld; it cannot be hidden in your hand.'))],
      { 'end-chow':f(['m3','m3','p2','p3','p4','s1','s2','s3','z1','z1','z2'],{phase:T('叫牌后待出牌','叫牌後待出牌','Discard after call'),melds:[{seat:'you',tiles:['m1','m2','m3']}],wallRemaining:37},T('已吃出顺子','已吃出順子','Chow exposed'),T('一、二、三万公开，手里仍有三万对子。叫牌后还要弃一张。','一、二、三萬公開，手裡仍有三萬對子。叫牌後還要棄一張。','The run is exposed and your 3 Crak pair remains. You still owe a discard.')),
        'end-pung':f(['m1','m2','p2','p3','p4','s1','s2','s3','z1','z1','z2'],{phase:T('叫牌后待出牌','叫牌後待出牌','Discard after call'),melds:[{seat:'you',tiles:['m3','m3','m3']}],wallRemaining:37},T('已碰出刻子','已碰出刻子','Pung exposed'),T('三万刻子公开，一、二万留下未成组。叫牌后还要弃一张。','三萬刻子公開，一、二萬留下未成組。叫牌後還要棄一張。','The pung is exposed; 1–2 Crak remain incomplete. You still owe a discard.')) }),

    scene('hk-win','hk',T('牌形成立后如何选择','牌形成立後如何選擇','After a complete hand'),
      T('刚自摸成四组刻子加一对。本站香港教学基准下，碰碰胡本身达到三番门槛；正式计分仍须核对其他条件。','剛自摸成四組刻子加一對。本站香港教學基準下，碰碰胡本身達到三番門檻；正式計分仍須核對其他條件。','You have self-drawn four pungs and a pair. In this course baseline, the all-pungs pattern reaches the three-faan threshold; verify the full score separately.'),
      T('接下来做什么？','接下來做什麼？','What do you do?'),
      ['m1','m1','m1','m2','m2','m2','p3','p3','p3','s4','s4','s4','z1','z1'],
      {phase:T('自摸后','自摸後','After self-draw'),wallRemaining:28,note:T('本题只练胡牌资格，不自动计算全部番种。','本題只練胡牌資格，不自動計算全部番種。','This drill checks win eligibility, not every scoring pattern.')},
      [a('declare','win',T('核对后按碰碰胡宣布胡牌','核對後按碰碰胡宣佈胡牌','Verify and declare all pungs'),'end-win',T('四组三张相同加一对的牌形成立；碰碰胡在本课程基准下达到起胡番数。','四組三張相同加一對的牌形成立；碰碰胡在本課程基準下達到起胡番數。','The hand has four pungs and a pair; all pungs reaches this course’s minimum faan.')),
       a('continue','discard',T('放弃本次胡牌，打一张东风','放棄本次胡牌，打一張東風','Decline and discard one East'),'end-continue',T('放弃可胡的一手属于策略选择，牌形随弃牌改变。','放棄可胡的一手屬於策略選擇，牌形隨棄牌改變。','Declining a legal win is a choice; discarding changes the hand.')),
       b('seven-pairs','win',T('按七对宣布胡牌','按七對宣佈胡牌','Declare seven pairs'),T('这手是四组刻子加一对，不是七对牌形。','這手是四組刻子加一對，不是七對牌形。','This is four pungs and a pair, not seven pairs.'))],
      { 'end-win':f(['m1','m1','m1','m2','m2','m2','p3','p3','p3','s4','s4','s4','z1','z1'],{phase:T('本局结束','本局結束','Round complete'),wallRemaining:28},T('牌形与最低番已核对','牌形與最低番已核對','Shape and threshold checked'),T('这里只确认碰碰胡达到本站的三番起胡条件。附加番、支付和特殊责任应按完整规则另行核对。','這裡只確認碰碰胡達到本站的三番起胡條件。附加番、支付和特殊責任應按完整規則另行核對。','This establishes the threshold only. Check extra faan, payment and special liabilities against the full rules.')),
        'end-continue':f(['m1','m1','m1','m2','m2','m2','p3','p3','p3','s4','s4','s4','z1'],{phase:T('继续摸打','繼續摸打','Continue play'),wallRemaining:28,discards:['z1']},T('选择了继续','選擇了繼續','You played on'),T('打掉一张东风后原有的对子不再完整。可重开比较宣布胡牌的路线。','打掉一張東風後原有的對子不再完整。可重開比較宣佈胡牌的路線。','Discarding an East breaks the pair. Restart to compare with declaring.')) }),

    scene('sc-missing','sc',T('定缺牌还在手里','定缺牌還在手裡','Missing-suit tiles remain'),
      T('你定缺条子。手里还有一条和九条；这两张都可以打，但其他花色暂不能先打。','你定缺索子。手裡還有一索和九索；這兩張都可以打，但其他花色暫不能先打。','You chose bamboo as the missing suit. Both bamboo tiles can be discarded, but other suits wait.'),
      T('选一张合法出牌。','選一張合法出牌。','Choose a legal discard.'),
      ['s1','s9','m2','m3','m4','p2','p3','p4','m6','m7','m8','p7','p7','p8'],
      {phase:T('定缺出牌','定缺出牌','Missing-suit discard'),missingSuit:'s',wallRemaining:51},
      [a('drop-one','discard',T('打一条','打一索','Discard 1 Bam'),'end-one',T('一条属于定缺门，出牌合法；九条仍须优先处理。','一索屬於定缺門，出牌合法；九索仍須優先處理。','1 Bam is in your missing suit. 9 Bam must still be handled first later.')),
       a('drop-nine','discard',T('打九条','打九索','Discard 9 Bam'),'end-nine',T('九条属于定缺门，出牌合法；一条仍须优先处理。','九索屬於定缺門，出牌合法；一索仍須優先處理。','9 Bam is in your missing suit. 1 Bam must still be handled first later.')),
       b('drop-dot','discard',T('先打八筒','先打八筒','Discard 8 Dot first'),T('定缺条子仍在手中，须先处理定缺门的牌。','定缺索子仍在手中，須先處理定缺門的牌。','Bamboo, your missing suit, is still in hand; discard it first.'))],
      { 'end-one':f(['s9','m2','m3','m4','p2','p3','p4','m6','m7','m8','p7','p7','p8'],{phase:T('继续清缺','繼續清缺','Clear missing suit'),missingSuit:'s',wallRemaining:51,discards:['s1']},T('一条已打出','一索已打出','1 Bam discarded'),T('还有九条，下一次出牌仍要先处理条子。','還有九索，下一次出牌仍要先處理索子。','9 Bam remains. Your next discard must still address bamboo.')),
        'end-nine':f(['s1','m2','m3','m4','p2','p3','p4','m6','m7','m8','p7','p7','p8'],{phase:T('继续清缺','繼續清缺','Clear missing suit'),missingSuit:'s',wallRemaining:51,discards:['s9']},T('九条已打出','九索已打出','9 Bam discarded'),T('还有一条，下一次出牌仍要先处理条子。','還有一索，下一次出牌仍要先處理索子。','1 Bam remains. Your next discard must still address bamboo.')) }),

    scene('sc-pung','sc',T('四川：碰还是过','四川：碰還是過','Pung or pass in Sichuan'),
      T('你已定缺万子，手里没有万子。别家刚打五筒；你有两张五筒。','你已定缺萬子，手裡沒有萬子。別家剛打五筒；你有兩張五筒。','Your missing suit is characters and none remain. Another player discards 5 Dot; you hold a pair.'),
      T('你可以怎样处理？','你可以怎樣處理？','How can you respond?'),
      ['p5','p5','p2','p3','p4','s2','s3','s4','p7','p8','p9','s7','s7'],
      {phase:T('回应弃牌','回應棄牌','Respond to discard'),missingSuit:'m',lastDiscard:'p5',wallRemaining:34},
      [a('pung','pung',T('碰五筒','碰五筒','Pung 5 Dot'),'end-pung',T('两张五筒加刚弃出的五筒可组成明刻。','兩張五筒加剛棄出的五筒可組成明刻。','Your pair plus the discard makes an exposed pung.')),
       a('pass','pass',T('先过，不碰','先過，不碰','Pass the call'),'end-pass',T('碰牌并非强制；保留五筒对子也是合法选择。','碰牌並非強制；保留五筒對子也是合法選擇。','Calling a pung is optional; keeping the pair is legal.')),
       b('chow','chow',T('吃成四、五、六筒','吃成四、五、六筒','Chow 4–5–6 Dot'),T('本站四川血战基准不允许吃牌。','本站四川血戰基準不允許吃牌。','This Sichuan baseline does not allow chow.'))],
      { 'end-pung':f(['p2','p3','p4','s2','s3','s4','p7','p8','p9','s7','s7'],{phase:T('碰后待出牌','碰後待出牌','Discard after pung'),missingSuit:'m',melds:[{seat:'you',tiles:['p5','p5','p5']}],wallRemaining:34},T('明刻已形成','明刻已形成','Pung exposed'),T('五筒刻子已公开；接下来按规则出一张。','五筒刻子已公開；接下來按規則出一張。','The 5 Dot pung is exposed. Next, discard a tile.')),
        'end-pass':f(['p5','p5','p2','p3','p4','s2','s3','s4','p7','p8','p9','s7','s7'],{phase:T('等待下一轮','等待下一輪','Wait for next turn'),missingSuit:'m',discards:['p5'],wallRemaining:34},T('保留对子','保留對子','Pair kept'),T('五筒仍成对子。过牌不会自动判错；可重开比较碰牌路线。','五筒仍成對子。過牌不會自動判錯；可重開比較碰牌路線。','The pair remains. Passing is legal; replay to compare the pung route.')) }),

    scene('sc-blood','sc',T('一家胡后，牌局继续','一家胡後，牌局繼續','Play after the first win'),
      T('东家已胡并退出本局；其余三家继续。轮到你出牌，你已清完定缺万子。','東家已胡並退出本局；其餘三家繼續。輪到你出牌，你已清完定缺萬子。','East has won and left this hand. Three players continue; your missing character suit is cleared.'),
      T('下一步如何行动？','下一步如何行動？','What do you do next?'),
      ['p1','p2','p3','p4','p5','p6','s2','s3','s4','s7','s8','s9','p9','p9'],
      {phase:T('血战继续出牌','血戰繼續出牌','Blood battle continues'),missingSuit:'m',activeSeats:['south','west','north'],wallRemaining:19,note:T('东家已胡；本题只比较合法续打，不判最优出牌。','東家已胡；本題只比較合法續打，不判最優出牌。','East has won. This drill compares legal continuations, not the best discard.')},
      [a('drop-one','discard',T('打一筒继续','打一筒繼續','Discard 1 Dot and continue'),'end-one',T('剩余三家继续摸打；打一筒合法，但原有一、二、三筒顺子被拆。','剩餘三家繼續摸打；打一筒合法，但原有一、二、三筒順子被拆。','The three active players continue. This legal discard breaks your 1–2–3 Dot run.')),
       a('drop-nine','discard',T('打九筒继续','打九筒繼續','Discard one 9 Dot and continue'),'end-nine',T('剩余三家继续摸打；九筒对子被拆，但其他顺子保留。','剩餘三家繼續摸打；九筒對子被拆，但其他順子保留。','The three active players continue. This breaks the 9 Dot pair while preserving runs.')),
       b('stop','stop',T('因为东家胡牌，直接结束整局','因為東家胡牌，直接結束整局','End the hand because East won'),T('血战到底中，一家胡牌后其余未胡玩家继续。','血戰到底中，一家胡牌後其餘未胡玩家繼續。','In blood battle, the players who have not won keep playing.'))],
      { 'end-one':f(['p2','p3','p4','p5','p6','s2','s3','s4','s7','s8','s9','p9','p9'],{phase:T('其余三家继续','其餘三家繼續','Three players continue'),missingSuit:'m',activeSeats:['south','west','north'],discards:['p1'],wallRemaining:19},T('血战仍在进行','血戰仍在進行','Play continues'),T('东家不再摸打；你打出一筒，其他三家继续按顺序行动。','東家不再摸打；你打出一筒，其他三家繼續按順序行動。','East no longer takes turns. The other three continue after your 1 Dot discard.')),
        'end-nine':f(['p1','p2','p3','p4','p5','p6','s2','s3','s4','s7','s8','s9','p9'],{phase:T('其余三家继续','其餘三家繼續','Three players continue'),missingSuit:'m',activeSeats:['south','west','north'],discards:['p9'],wallRemaining:19},T('血战仍在进行','血戰仍在進行','Play continues'),T('你保留了顺子，但拆开九筒对子。东家不再摸打。','你保留了順子，但拆開九筒對子。東家不再摸打。','You preserved the runs but broke the 9 Dot pair. East remains out of the hand.')) }),

    scene('am-charleston','am',T('Charleston：两种传牌路线','Charleston：兩種傳牌路線','Charleston: two passes'),
      T('原创教学卡样 A 需要二万、四筒、六条与东风组。首轮传牌可有不同策略，但 Joker 不能传。','原創教學卡樣 A 需要二萬、四筒、六索與東風組。首輪傳牌可有不同策略，但 Joker 不能傳。','Original practice line A uses 2 Craks, 4 Dots, 6 Bams and East. There is more than one pass strategy, but jokers cannot be passed.'),
      T('向右传三张牌，你选哪组？','向右傳三張牌，你選哪組？','Which three tiles do you pass right?'),
      ['m2','m2','p4','p4','s6','s6','z1','z1','f1','j1','m9','p9','s1'],
      {phase:T('首轮 Charleston · 向右','首輪 Charleston · 向右','First Charleston · pass right'),target:T('原创教学卡样 A，非 NMJL 年度卡','原創教學卡樣 A，非 NMJL 年度卡','Original practice line A, not an NMJL card'),wallRemaining:0},
      [a('spares','pass',T('传九万、九筒、一条','傳九萬、九筒、一索','Pass 9 Crak, 9 Dot, 1 Bam'),'end-spares',T('三张孤张传出，四个对子保留。','三張孤張傳出，四個對子保留。','The three isolated tiles go out; all four pairs remain.')),
       a('east','pass',T('传九万、九筒、一张东风','傳九萬、九筒、一張東風','Pass 9 Crak, 9 Dot, one East'),'end-east',T('这三张也可传，但东风对子被拆开。','這三張也可傳，但東風對子被拆開。','This pass is legal, but it breaks the East pair.')),
       b('joker','pass',T('传 Joker、九万、九筒','傳 Joker、九萬、九筒','Pass joker, 9 Crak, 9 Dot'),T('Charleston 中 Joker 不能传。','Charleston 中 Joker 不能傳。','A joker cannot be passed during the Charleston.'))],
      { 'end-spares':f(['m2','m2','m2','p4','p4','p4','s6','s6','z1','z1','z1','f1','j1'],{phase:T('收到三张后','收到三張後','After receiving three'),target:T('原创教学卡样 A','原創教學卡樣 A','Original practice line A'),note:T('本局省略其余传牌步骤。','本局省略其餘傳牌步驟。','Other Charleston passes are omitted.')},T('目标组得到补强','目標組得到補強','Target groups improved'),T('假设收到二万、四筒和东风各一张；三组变成三张相同。仍要完成其余卡行要求。','假設收到二萬、四筒和東風各一張；三組變成三張相同。仍要完成其餘卡行要求。','Assume you receive 2 Crak, 4 Dot and East. Three groups become pungs; the full line is still incomplete.')),
        'end-east':f(['m2','m2','p4','p4','p4','s6','s6','s6','z1','f1','j1','s1','f2'],{phase:T('收到三张后','收到三張後','After receiving three'),target:T('原创教学卡样 A','原創教學卡樣 A','Original practice line A'),note:T('本局省略其余传牌步骤。','本局省略其餘傳牌步驟。','Other Charleston passes are omitted.')},T('东风对子被拆','東風對子被拆','East pair broken'),T('假设收到六条、花牌和一条。虽然六条变成三张、花牌有两张，东风对子只剩一张；比较卡行缺口。','假設收到六索、花牌和一索。雖然六索變成三張、花牌有兩張，東風對子只剩一張；比較卡行缺口。','Assume you receive 6 Bam, Flower and 1 Bam. The 6 Bam group improves, but only one East remains.')) }),

    scene('am-joker','am',T('公开组中的 Joker','公開組中的 Joker','Joker in an exposure'),
      T('对手公开四筒、四筒、Joker 的 pung。轮到你且已摸牌；你手里有真四筒。','對手公開四筒、四筒、Joker 的 pung。輪到你且已摸牌；你手裡有真四筒。','An opponent exposed 4 Dot, 4 Dot, joker. It is your turn after drawing, and you hold a natural 4 Dot.'),
      T('你怎么处理这张四筒？','你怎麼處理這張四筒？','What do you do with your 4 Dot?'),
      ['p4','m2','m2','s6','s6','z1','z1','f1','f2','m9','p9','s1','s3','j1'],
      {phase:T('自己回合 · 已摸牌','自己回合 · 已摸牌','Your turn · after draw'),melds:[{seat:'opponent',tiles:['p4','p4','j1']}],wallRemaining:25,target:T('原创教学目标','原創教學目標','Original practice target')},
      [a('exchange','exchange',T('用真四筒换出 Joker','用真四筒換出 Joker','Exchange 4 Dot for joker'),'end-exchange',T('用与公开组相符的真四筒换出 Joker；仍须完成本回合。','用與公開組相符的真四筒換出 Joker；仍須完成本回合。','Use the matching natural 4 Dot to exchange the joker, then finish your turn.')),
       a('hold','hold',T('暂不交换，保留四筒','暫不交換，保留四筒','Keep 4 Dot for now'),'end-hold',T('交换不是强制动作；保留真牌也是合法选择。','交換不是強制動作；保留真牌也是合法選擇。','Joker exchange is optional; keeping the natural tile is legal.')),
       b('wrong-tile','exchange',T('用二万换出 Joker','用二萬換出 Joker','Exchange 2 Crak for joker'),T('该 Joker 代表四筒，必须用真四筒交换。','該 Joker 代表四筒，必須用真四筒交換。','The joker stands for 4 Dot; only a natural 4 Dot can replace it.'))],
      { 'end-exchange':f(['j1','m2','m2','s6','s6','z1','z1','f1','f2','m9','p9','s1','s3','j1'],{phase:T('交换后待出牌','交換後待出牌','Discard after exchange'),melds:[{seat:'opponent',tiles:['p4','p4','p4']}],wallRemaining:25},T('Joker 已换到手','Joker 已換到手','Joker collected'),T('对手的公开组现在是三张真四筒。你手里多了 Joker，仍要按规则出牌。','對手的公開組現在是三張真四筒。你手裡多了 Joker，仍要按規則出牌。','The exposure now has three natural 4 Dots. You hold the joker and still owe a discard.')),
        'end-hold':f(['p4','m2','m2','s6','s6','z1','z1','f1','f2','m9','p9','s1','s3','j1'],{phase:T('待出牌','待出牌','Await discard'),melds:[{seat:'opponent',tiles:['p4','p4','j1']}],wallRemaining:25},T('选择保留真牌','選擇保留真牌','Natural tile kept'),T('你保留四筒，对手公开组不变。本回合仍需弃牌；可重开比较交换路线。','你保留四筒，對手公開組不變。本回合仍需棄牌；可重開比較交換路線。','You keep 4 Dot and the exposure stays as it was. Finish your turn, or replay to compare.')) }),

    scene('am-card','am',T('原创教学卡的整行核对','原創教學卡的整行核對','Check an original practice line'),
      T('你摸到第二张花牌，现有 14 张牌完整匹配本站原创教学卡样 A。它不是 NMJL 年度卡上的正式牌型。','你摸到第二張花牌，現有 14 張牌完整匹配本站原創教學卡樣 A。它不是 NMJL 年度卡上的正式牌型。','A second Flower makes 14 tiles that match this site’s original practice line A. It is not an official NMJL card hand.'),
      T('在这个教学局中，你选择怎样继续？','在這個教學局中，你選擇怎樣繼續？','What do you do in this practice hand?'),
      ['m2','m2','m2','p4','p4','p4','s6','s6','s6','z1','z1','z1','f1','f2'],
      {phase:T('教学卡样已齐','教學卡樣已齊','Practice line complete'),target:T('原创卡样 A：三组数牌 pung、东风 pung、两张花牌','原創卡樣 A：三組數牌 pung、東風 pung、兩張花牌','Original line A: three suited pungs, East pung, two Flowers'),wallRemaining:16},
      [a('practice-check','check',T('核对完整 14 张并完成本次练习','核對完整 14 張並完成本次練習','Check all 14 and finish practice'),'end-check',T('14 张与原创教学卡样完整吻合；这只代表教学目标完成。','14 張與原創教學卡樣完整吻合；這只代表教學目標完成。','All 14 match the original practice line. The teaching target is complete.')),
       a('continue','discard',T('弃一张花牌，继续摸打','棄一張花牌，繼續摸打','Discard a Flower and continue'),'end-continue',T('可以选择继续，但原创教学卡样 A 现在又缺一张花牌。','可以選擇繼續，但原創教學卡樣 A 現在又缺一張花牌。','You may play on, but practice line A now lacks a Flower again.')),
       b('official-win','win',T('按 NMJL 官方牌型宣布胡牌','按 NMJL 官方牌型宣佈胡牌','Declare an official NMJL win'),T('本站原创卡样不是官方年度卡牌型；正式胡牌必须核对当年官方卡的一整行。','本站原創卡樣不是官方年度卡牌型；正式胡牌必須核對當年官方卡的一整行。','This original line is not an official annual-card hand. A real win needs a matching current card line.'))],
      { 'end-check':f(['m2','m2','m2','p4','p4','p4','s6','s6','s6','z1','z1','z1','f1','f2'],{phase:T('教学目标完成','教學目標完成','Practice target complete'),target:T('原创教学卡样 A','原創教學卡樣 A','Original practice line A'),wallRemaining:16},T('练习卡行匹配','練習卡行匹配','Practice line matched'),T('这次只完成了原创练习。正式对局仍需持当年 NMJL 卡，并核对真实牌型和桌规。','這次只完成了原創練習。正式對局仍需持當年 NMJL 卡，並核對真實牌型和桌規。','This completes an original drill only. Real play requires the current NMJL card and table rules.')),
        'end-continue':f(['m2','m2','m2','p4','p4','p4','s6','s6','s6','z1','z1','z1','f1'],{phase:T('继续摸打','繼續摸打','Continue play'),target:T('原创教学卡样 A','原創教學卡樣 A','Original practice line A'),discards:['f2'],wallRemaining:16},T('继续追牌','繼續追牌','You played on'),T('现在手里 13 张，原创卡样 A 缺一张花牌。重开可比较完成教学目标的路线。','現在手裡 13 張，原創卡樣 A 缺一張花牌。重開可比較完成教學目標的路線。','You now have 13 tiles and need a Flower for practice line A again. Replay to compare.')) })
  ];
  g.MahjongPlaygroundData = scenarios;
  if (typeof module !== 'undefined' && module.exports) module.exports = scenarios;
})(typeof globalThis !== 'undefined' ? globalThis : window);
