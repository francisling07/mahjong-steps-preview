// Final five Sichuan lessons and guided key moments, based on T/TFMJ 01—2024.
// These are condensed teaching snapshots, not a full wall simulation.
const L=(zh,en)=>({zh,en});
const O=(id,zh,en)=>({id,label:L(zh,en)});
const Q=(id,zh,en,answer,options,whyZh,whyEn)=>({id,type:'choice',prompt:L(zh,en),options:options.map(x=>O(...x)),answer,explanation:L(whyZh,whyEn)});
const scoreQ=(id,zh,en,input,target,values,whyZh,whyEn)=>({id,type:'score',prompt:L(zh,en),scoreInput:input,target,values,explanation:L(whyZh,whyEn)});
const RQ=(id,zh,en,scenarioId)=>({id,type:'round',prompt:L(zh,en),scenarioId,explanation:L('按本局关键步骤完成后，核对胡牌条件与结算。','Finish the key decisions, then check the win and settlement.')});
const lesson=(id,zh,en,introZh,introEn,questions)=>({id,title:L(zh,en),intro:L(introZh,introEn),questions});
const chapter=(id,zh,en,lessons)=>({id,title:L(zh,en),lessons});

const chapters=[chapter('sc-12','综合关键局面','Integrated key moments',[
 lesson('sc-12-1','金钩钓点炮胡','Golden Hook on a discard','四组已经碰杠公开，单张等将；胡牌后核对大对子与金钩钓，再结算。','Four sets are already exposed through pungs or kongs, with one tile waiting for the pair. Check All Triplets and Golden Hook after the win, then settle.',[
  Q('sc-12-1-a','四组牌已碰出，暗手只剩一张五条，另一张五条使你成将胡牌。哪项要在胡牌后核对？','Four sets are exposed; your concealed hand has only one five-bamboo, and another completes the pair and win. What should you check after winning?','b',[['a','任何单张等待都自动算金钩钓','Every single-tile wait is automatically Golden Hook'],['b','四组公开面子加单钓将，符合金钩钓条件','Four exposed sets plus the single pair wait meet Golden Hook conditions'],['c','必须再摸两张五条才算胡牌','Two more five-bamboos are needed to win']],'金钩钓要求四组已公开，只留单张等将；还要先确认胡牌成立。','Golden Hook requires four exposed sets and a single pair wait, after confirming a valid win.'),
  scoreQ('sc-12-1-b','大对子主体2分，确认金钩钓加倍且无根，点炮胡的主体分是多少？','All Triplets is two points; Golden Hook doubles it, with no roots. What is the discard-win pattern value?',{base:'allTriplets',roots:0,extras:['goldenHook'],mode:'discard',activeOpponents:3},'points',[2,4,8],'2×2＝4分，由点炮者独付。','Two doubled is four, paid by the discarder.'),
  RQ('sc-12-1-c','完成四组碰出、单钓将与点炮结算的关键局面。','Play the exposed-sets, pair-wait and discard-settlement key moments.','golden-hook-win')
 ]),
 lesson('sc-12-2','一炮多响后续打','Continue after two winners','同一弃牌可让两家同时胡；胡者退出，点炮者和另一未胡者继续。','One discard may produce two winners. They leave, while the discarder and the other unwon player continue.',[
  Q('sc-12-2-a','东家的一张弃牌同时让南家和西家合法胡牌，结果是什么？','East discards one tile and both South and West validly win on it. What is the result?','a',[['a','南、西都成为胡牌者','South and West both become winners'],['b','只认南家','Only South wins'],['c','这张牌作废','The tile is void']],'一炮多响时，同时成立的胡牌都有效。','On a multi-win discard, both valid simultaneous wins stand.'),
  Q('sc-12-2-b','南、西两家已胡退出，东家点炮，北家尚未胡。场上还有谁继续？','South and West have won and left; East discarded and North has not won. Who keeps playing?','c',[['a','只有北家','Only North'],['b','南家与西家','South and West'],['c','东家与北家','East and North']],'两位胡者退出，点炮的东家与北家仍在摸打。','The two winners leave; East the discarder and North remain active.'),
  RQ('sc-12-2-c','完成一炮多响到第三家胡牌的关键局面。','Play the key moments from a double win to the third winner.','double-discard-win')
 ]),
 lesson('sc-12-3','杠上炮的两笔账','Two payments after a kong-discard win','先算杠上炮胡牌分，再核对已收普通杠分的呼叫转移。','Calculate the winning value, then check transfer of ordinary kong points already collected.',[
  Q('sc-12-3-a','东家暗杠并补牌，随后打出的牌让南家胡。除胡牌分外，东家此前已收的普通杠分如何处理？','East makes a concealed kong, draws the replacement, then discards a tile South wins on. What happens to East’s previously collected ordinary kong points, apart from the winning value?','b',[['a','东家再收一次','East collects them again'],['b','按呼叫转移给南家','They transfer to South under the call-transfer rule'],['c','无条件由北家获得','North receives them unconditionally']],'杠上炮触发呼叫转移；胡牌分与原杠分转移分别记录。','A kong-discard win triggers transfer; winning points and transferred kong points are separate.'),
  scoreQ('sc-12-3-b','普通牌型1分，杠上炮加倍，只有一位胡者。点炮者另付的胡牌主体分是多少？','An ordinary one-point hand doubles for a kong-discard win with one winner. What winning pattern value does the discarder separately pay?',{base:'ordinary',roots:0,extras:['kongDiscard'],mode:'discard',activeOpponents:3},'points',[1,2,6],'胡牌主体分1×2＝2；此前杠分另行转移，不包含在这2分中。','The pattern value is one doubled to two; previous kong points transfer separately.'),
  RQ('sc-12-3-c','完成补牌、点炮与呼叫转移的关键局面。','Play the replacement, deal-in and kong-point transfer key moments.','kong-discard-transfer')
 ]),
 lesson('sc-12-4','抢杠胡牌','Robbing an added kong','别家把第四张牌加到已有碰牌上开杠时，若这张牌使你胡牌，可按抢杠判断。','When another player adds a fourth tile to an exposed pung, that tile may be claimed for a robbing-kong win.',[
  Q('sc-12-4-a','西家已有一组碰出的四条，摸进第四张四条准备加杠；你正好听四条。此时应核对哪种胡牌事件？','West has an exposed pung of four-bamboos and draws the fourth to add a kong; you are ready on four-bamboo. Which win event should you check?','a',[['a','抢杠','Robbing the kong'],['b','你自己杠上花','Your own kong-replacement win'],['c','你自己海底自摸','Your own last-tile self-draw']],'胡别家加杠的第四张是抢杠，不是自己摸牌。','Winning with the tile another player adds to a pung is robbing the kong, not a self-draw.'),
  scoreQ('sc-12-4-b','普通主体1分，已确认抢杠加倍，点炮胡分由加杠者支付多少？','Ordinary pattern value one, doubled by confirmed robbing the kong: how many winning points does the player adding the kong pay?',{base:'ordinary',roots:0,extras:['robKong'],mode:'discard',activeOpponents:3},'total',[1,2,4],'普通1分加抢杠因素翻倍为2分，按点炮胡由加杠者付。','Ordinary one doubled by Robbing Kong is two, paid by the player adding the kong.'),
  RQ('sc-12-4-c','完成抢杠、胡牌方式与支付判断的关键局面。','Play the robbing-kong, win-mode and payment key moments.','rob-kong-win')
 ]),
 lesson('sc-12-5','海底自摸','Self-draw on the last tile','摸到牌墙最后一张并胡牌，海底使主体分加倍，自摸另加底分。','Winning by drawing the wall’s final tile doubles the pattern value for Last Tile, with the self-draw base point added.',[
  Q('sc-12-5-a','你摸到牌墙最后一张牌并胡牌。这张牌对应哪种加番因素？','You draw the last tile of the wall and win on it. Which doubling factor applies?','b',[['a','金钩钓','Golden Hook'],['b','海底','Last Tile'],['c','抢杠','Robbing Kong']],'牌墙最后一张自摸成胡属于海底。','A self-draw win on the wall’s final tile is a Last Tile win.'),
  scoreQ('sc-12-5-b','普通主体1分，海底加倍并自摸，三位对手都未胡。合共收多少？','Ordinary pattern value one, doubled for Last Tile and self-drawn with three active opponents. What total is collected?',{base:'ordinary',roots:0,extras:['lastTile'],mode:'selfDraw',activeOpponents:3},'total',[6,9,12],'主体1×2＝2，加自摸底分1，每家付3，三家共9。','One doubled is two, plus one self-draw base point: three each, nine total.'),
  RQ('sc-12-5-c','完成最后一张、海底自摸与三家结算的关键局面。','Play the last-tile, self-draw and three-payer key moments.','last-tile-win')
 ])
])];

const step=(zh,en,hand,missing,active,wall,options,correct,whyZh,whyEn,discard=null)=>({prompt:L(zh,en),scene:{hand,missingSuit:missing,active,wallRemaining:wall,lastDiscard:discard},options:options.map(x=>O(...x)),correct,explanation:L(whyZh,whyEn)});
const round=(id,zh,en,steps,finishZh,finishEn,scoreInput=null)=>({id,title:L(zh,en),steps,final:{description:L(finishZh,finishEn),scoreInput,kongInput:null}});
const all=['east','south','west','north'];
const ready=['p1','p2','p3','p4','p5','p6','p7','p8','p9','s1','s2','s3','s5'];
const won=[...ready,'s5'];
const hookReady=['p1','p1','p1','p2','p2','p2','p3','p3','p3','s4','s4','s4','s5'];
const hookWon=[...hookReady,'s5'];

const robReady=['p1','p2','p3','p4','p5','p6','p7','p8','p9','s2','s3','s5','s5'];
const robWon=[...robReady,'s4'];
const northReady=['p1','p2','p3','p6','p7','p8','s1','s2','s3','s6','s7','s8','p5'];
const northWon=[...northReady,'p5'];

const rounds=[
 round('golden-hook-win','金钩钓点炮','Golden Hook on a discard',[
  step('你四组牌都已碰出，示意牌包含公开面子；暗手只剩五条。对手弃五条，怎样判断？','Your four sets are exposed; the illustration includes them, and only five-bamboo remains concealed. An opponent discards five-bamboo. What is the decision?',hookReady,'m',all,22,[['win','单钓将胡牌','Win on the pair wait'],['hold','还不能胡','Cannot win']],'win','五条补成将，四组一对成立且已打缺。','Five-bamboo completes the pair alongside the four sets, with the missing suit cleared.','s5'),
  step('胡牌已确认，四组均为公开刻子。先选哪个主体牌型？','The win is confirmed and all four exposed sets are triplets. Which main pattern applies?',hookWon,'m',all,22,[['triplets','大对子','All Triplets'],['pairs','七对','Seven Pairs']],'triplets','四组刻子加一对将是大对子，主体2分。','Four triplets and a pair make All Triplets, valued at two.'),
  step('再加金钩钓因素，点炮者的胡牌分是多少？','Golden Hook doubles the pattern. What winning value does the discarder pay?',hookWon,'m',all,22,[['four','4分','Four points'],['two','2分','Two points']],'four','大对子2×金钩钓2＝4分，由点炮者独付。','All Triplets two doubled by Golden Hook is four, paid by the discarder.')
 ],'大对子2分加金钩钓后为4分；点炮者独付4分。','All Triplets two doubled by Golden Hook is four, paid by the discarder.',{base:'allTriplets',roots:0,extras:['goldenHook'],mode:'discard',activeOpponents:3}),
 round('double-discard-win','一炮多响后续打','Continue after two winners',[
  step('示意手牌是南家的听牌。东家弃五条，南家与西家都同时合法胡牌。谁成为胡牌者？','The illustrated ready hand belongs to South. East discards five-bamboo, and South and West both validly claim it. Who wins?',ready,'m',all,26,[['both','南、西都胡','Both South and West'],['south','只有南家','South only']],'both','一炮多响时同时成立的两家都胡。','Both valid simultaneous claims win on the same discard.','s5'),
  step('南、西已退出。其他回合略过，现示意东家的手牌；场上谁继续？','South and West have left. Other turns are skipped; the illustrated hand is now East’s. Who continues?',ready,'m',['east','north'],18,[['two','东、北两家','East and North'],['one','只有北家','North only']],'two','点炮的东家没有胡，也继续与北家摸打。','East the discarder has not won and keeps playing with North.'),
  step('视角切到北家，北家随后成为第三位胡牌者。这副牌何时结束？','The view switches to North, who later becomes the third winner. When does this hand end?',northWon,'m',['east','north'],9,[['end','北家胡后结束','After North wins'],['continue','还要第四家胡','Only after a fourth winner']],'end','三家已胡，本副结束；东家未胡也无需继续摸打。','Three players have won, so the hand ends even though East has not won.')
 ],'同一弃牌让南、西两家胡后，东、北继续；北家成为第三位胡者时本副结束。','South and West win on one discard; East and North continue until North becomes the third winner.'),
 round('kong-discard-transfer','杠上炮与呼叫转移','Kong-discard win and transfer',[
  step('示意手牌是南家的听牌。东家暗杠四张九条，已向三家收杠分6。东家从牌墙哪里补牌？','The illustrated ready hand is South’s. East conceals a kong of four nine-bamboos and collects six ordinary kong points. Where does East draw the replacement?',ready,'m',all,31,[['front','牌墙前端','Front of the wall'],['tail','牌墙尾端','Tail of the wall']],'front','本竞赛规则杠后从牌墙前端补牌。','This competition rule replaces a kong from the front of the wall.'),
  step('东家补牌后打出五条，南家这手可胡。现在属于什么事件？','East discards five-bamboo after the kong replacement and South can win. Which event is this?',ready,'m',all,30,[['kongDiscard','杠上炮','Kong-discard win'],['selfDraw','南家自摸','South self-draw']],'kongDiscard','杠后补牌打出的牌点炮，属于杠上炮；南家胡牌分另算。','Dealing in with the replacement-turn discard is a kong-discard win; South’s winning points are separate.','s5'),
  step('南家普通胡牌分因杠上炮变为2；东家已收的杠分6转给南家。南家本案例共收到多少？','South’s ordinary winning value doubles to two; East’s previously collected six kong points transfer to South. How much does South receive in this example?',won,'m',all,30,[['eight','8分：胡牌2＋转移6','Eight: two winning plus six transferred'],['two','只收胡牌2分','Only two winning points']],'eight','南家收到胡牌分2和转移杠分6，共8；东家不是再次收取杠分。','South receives two winning points and six transferred kong points, eight total; East does not collect kong points again.')
 ],'南家胡牌分2，原杠分6转给南家，共收8；两笔分别记录。','South receives two winning points and six transferred kong points, eight total, on separate ledgers.',{base:'ordinary',roots:0,extras:['kongDiscard'],mode:'discard',activeOpponents:3}),
 round('rob-kong-win','抢杠点炮胡','Robbing an added kong',[
  step('你的手牌示意已经打缺万子，听四条。西家碰出三张四条，摸进第四张准备加杠。你可以核对什么？','Your illustrated hand has cleared characters and waits on four-bamboo. West has a pung of three four-bamboos and draws the fourth to add a kong. What can you check?',robReady,'m',all,25,[['rob','抢杠胡牌','Rob the kong'],['chow','吃四条','Chow four-bamboo']],'rob','四条可补成条子顺子，胡别人加杠的牌属于抢杠。','Four-bamboo completes a bamboo run; winning with another player’s added-kong tile is Robbing Kong.'),
  step('抢杠按这套规则属于哪种胡牌支付方式？','Under this rule, how is a robbing-kong win paid?',robReady,'m',all,25,[['discard','点炮胡，由加杠者支付','Discard win, paid by the kong player'],['self','自摸，三家各付','Self-draw, paid by all three']],'discard','抢杠按点炮胡处理；加杠者是支付方。','Robbing Kong is treated as a discard win, paid by the player adding the kong.'),
  step('加入四条后构成四组一对；普通主体1分加抢杠加倍，支付多少？','After adding four-bamboo the hand has four sets and a pair. Ordinary value one doubles for Robbing Kong. How much is paid?',robWon,'m',all,25,[['two','2分','Two points'],['six','6分','Six points']],'two','主体1×2＝2分，由加杠者独付，没有自摸底分。','One doubled is two, paid by the kong player, without a self-draw base point.')
 ],'抢杠胡牌按点炮胡，普通主体1分加倍为2分，由加杠者付。','Robbing Kong is a discard win: ordinary one doubles to two, paid by the kong player.',{base:'ordinary',roots:0,extras:['robKong'],mode:'discard',activeOpponents:3}),
 round('last-tile-win','海底自摸','Last-tile self-draw',[
  step('你的手牌已打缺万子并听五条；牌墙只剩最后一张。摸到五条并胡牌，核对哪个因素？','Your ready hand has cleared characters and waits on five-bamboo. The wall has one tile left; you draw five-bamboo and win. Which factor applies?',ready,'m',all,1,[['last','海底','Last Tile'],['hook','金钩钓','Golden Hook']],'last','抓牌墙最后一张自摸成胡，属于海底。','Winning by drawing the wall’s final tile is Last Tile.'),
  step('五条补成将，普通主体1分海底加倍后为2。自摸还要加什么？','Five-bamboo completes the pair. Ordinary value one doubles to two for Last Tile. What is added for a self-draw?',won,'m',all,0,[['base','底分1','One base point'],['nothing','不加','Nothing']],'base','自摸每位仍在玩的对手要付主体2加底分1，共3。','Each active opponent pays pattern two plus one base point, three.'),
  step('三位对手均未胡，每家付3分，最后共收多少？','All three opponents remain active and each pays three. What is the total?',won,'m',all,0,[['nine','9分','Nine points'],['three','3分','Three points']],'nine','3×3＝9分；牌墙已尽，但这张最后牌自摸已成立。','Three times three is nine; the final-tile self-draw is valid even though the wall is now empty.')
 ],'普通1分海底加倍成2，自摸加底分1，每家付3，三家共9。','Ordinary one doubles to two for Last Tile; self-draw adds one, so three each and nine total.',{base:'ordinary',roots:0,extras:['lastTile'],mode:'selfDraw',activeOpponents:3})
];

module.exports={chapters,rounds};
