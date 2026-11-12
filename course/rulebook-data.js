/* Original HKMA learning summaries; checked 2026-11-06. */
(function(g){
const data=[
  {
    "entries": [
      {
        "description": {
          "en": "Four winds make 16 hands; East does not repeat after a win or draw.",
          "tw": "一輪為東南西北四圈、共十六局，不設連莊；流局後莊位照常輪換。",
          "zh": "一轮为东南西北四圈、共十六局，不设连庄；流局后庄位照常轮换。"
        },
        "id": "rounds",
        "title": {
          "en": "Dealer rotation and hand count",
          "tw": "輪莊與局數",
          "zh": "轮庄与局数"
        }
      },
      {
        "description": {
          "en": "Use 136 tiles without flowers or 144 with flowers; agree on the version first.",
          "tw": "無花用136張牌；啟用花牌時用144張。先確認當前採用哪一路線。",
          "zh": "无花用136张牌；启用花牌时用144张。先确认当前采用哪一路线。"
        },
        "id": "tiles",
        "title": {
          "en": "Tile count and flowers",
          "tw": "牌張與花牌",
          "zh": "牌张与花牌"
        }
      },
      {
        "description": {
          "en": "The basic winning shape is four sets and a pair; Thirteen Orphans is a listed special shape.",
          "tw": "普通胡牌形為四組順子、刻子或槓，加一對將；十三幺是列明的特殊形。",
          "zh": "普通胡牌形为四组顺子、刻子或杠，加一对将；十三幺是列明的特殊形。"
        },
        "id": "shape",
        "title": {
          "en": "Winning shapes",
          "tw": "基礎胡牌形",
          "zh": "基础胡牌形"
        }
      },
      {
        "description": {
          "en": "Determine seats and East; dice and wall opening do not change seat winds.",
          "tw": "開局先確定座位與東家。擲骰和開門決定取牌位置，不改變四家門風順序。",
          "zh": "开局先确定座位与东家。掷骰和开门决定取牌位置，不改变四家门风顺序。"
        },
        "id": "seats",
        "title": {
          "en": "Seats and dice",
          "tw": "座位和擲骰",
          "zh": "座位和掷骰"
        }
      },
      {
        "description": {
          "en": "East starts with 14 tiles, others with 13; East discards first.",
          "tw": "配牌完成後東家十四張，其餘三家十三張；東家先棄一張。",
          "zh": "配牌完成后东家十四张，其余三家十三张；东家先弃一张。"
        },
        "id": "deal",
        "title": {
          "en": "Dealing",
          "tw": "開局配牌",
          "zh": "开局配牌"
        }
      },
      {
        "description": {
          "en": "Keep wall, discards, concealed hand and exposed sets in their own areas.",
          "tw": "牌牆、牌河、暗手和公開面子分區擺放；明牌組合應保持獨立可辨。",
          "zh": "牌墙、牌河、暗手和公开面子分区摆放；明牌组合应保持独立可辨。"
        },
        "id": "zones",
        "title": {
          "en": "Table areas",
          "tw": "桌面分區",
          "zh": "桌面分区"
        }
      }
    ],
    "id": "setup",
    "title": {
      "en": "Setup and table",
      "tw": "開局與牌桌",
      "zh": "开局与牌桌"
    }
  },
  {
    "entries": [
      {
        "description": {
          "en": "Without a call, turns run East, South, West, North: draw, decide, then discard.",
          "tw": "未被叫牌時按東、南、西、北順序輪流；一回合通常摸一張、整理、打出一張。",
          "zh": "未被叫牌时按东、南、西、北顺序轮流；一回合通常摸一张、整理、打出一张。"
        },
        "id": "turn",
        "title": {
          "en": "Turn sequence",
          "tw": "摸打順序",
          "zh": "摸打顺序"
        }
      },
      {
        "description": {
          "en": "Normal draws come from the wall head; kong and flower replacements use the tail.",
          "tw": "普通摸牌從牌牆頭取；槓後補牌以及有花時補花從牌尾取。",
          "zh": "普通摸牌从牌墙头取；杠后补牌以及有花时补花从牌尾取。"
        },
        "id": "wall",
        "title": {
          "en": "Wall head and tail",
          "tw": "牆頭與牆尾",
          "zh": "墙头与墙尾"
        }
      },
      {
        "description": {
          "en": "After a chow or pung, discard without a normal draw; then play passes to the caller’s next seat.",
          "tw": "吃或碰後直接打牌，不進行一次普通摸牌；之後輪到叫牌者下家。",
          "zh": "吃或碰后直接打牌，不进行一次普通摸牌；之后轮到叫牌者下家。"
        },
        "id": "call-turn",
        "title": {
          "en": "After a chow or pung",
          "tw": "吃碰後出牌",
          "zh": "吃碰后出牌"
        }
      },
      {
        "description": {
          "en": "Place discards in order in your river, separate from exposed sets and wall.",
          "tw": "棄牌依次放在自己的牌河，不與明牌組合或牌牆混放。",
          "zh": "弃牌依次放在自己的牌河，不与明牌组合或牌墙混放。"
        },
        "id": "river",
        "title": {
          "en": "Discard river",
          "tw": "牌河擺放",
          "zh": "牌河摆放"
        }
      },
      {
        "description": {
          "en": "Do not draw before the previous player discards; check the tile and calls first.",
          "tw": "上家尚未出牌時不能搶先摸牌；下家要先看清棄牌與叫牌機會。",
          "zh": "上家尚未出牌时不能抢先摸牌；下家要先看清弃牌与叫牌机会。"
        },
        "id": "early-draw",
        "title": {
          "en": "Early drawing",
          "tw": "提前摸牌",
          "zh": "提前摸牌"
        }
      },
      {
        "description": {
          "en": "If the last wall draw is followed by an unclaimed discard, the hand is drawn.",
          "tw": "牆頭最後一張摸走、隨後的棄牌也無人胡時流局；流局沒有普通胡牌積分。",
          "zh": "墙头最后一张摸走、随后的弃牌也无人胡时流局；流局没有普通胡牌积分。"
        },
        "id": "last-wall",
        "title": {
          "en": "Drawn-hand condition",
          "tw": "流局條件",
          "zh": "流局条件"
        }
      },
      {
        "description": {
          "en": "The structural count is 14 before discarding, 13 outside your turn; a kong counts as one set structurally.",
          "tw": "出牌前結構計數為十四張，回合外為十三張；已聲明的槓按一組三張計結構數。",
          "zh": "出牌前结构计数为十四张，回合外为十三张；已声明的杠按一组三张计结构数。"
        },
        "id": "count",
        "title": {
          "en": "Tile count in hand",
          "tw": "手牌張數",
          "zh": "手牌张数"
        }
      }
    ],
    "id": "flow",
    "title": {
      "en": "Turn flow and draw",
      "tw": "摸打與流局",
      "zh": "摸打与流局"
    }
  },
  {
    "entries": [
      {
        "description": {
          "en": "Calls concern the latest discard; later play closes the usual opportunity to claim it.",
          "tw": "只能針對最新棄牌叫牌；他家完成後續動作會使舊棄牌不能再取。",
          "zh": "只能针对最新弃牌叫牌；他家完成后续动作会使旧弃牌不能再取。"
        },
        "id": "latest",
        "title": {
          "en": "Latest discard",
          "tw": "最新棄牌",
          "zh": "最新弃牌"
        }
      },
      {
        "description": {
          "en": "A chow uses only the previous player’s latest discard and two suited tiles in sequence.",
          "tw": "吃牌只取上家的最新棄牌，手中兩張數牌須與它組成同門連續三張。",
          "zh": "吃牌只取上家的最新弃牌，手中两张数牌须与它组成同门连续三张。"
        },
        "id": "chow",
        "title": {
          "en": "Source of a chow",
          "tw": "吃牌來源",
          "zh": "吃牌来源"
        }
      },
      {
        "description": {
          "en": "A pung may claim any opponent’s latest discard to join a matching concealed pair.",
          "tw": "碰牌可取任一對手的最新棄牌，與手中一對相同牌組成明刻。",
          "zh": "碰牌可取任一对手的最新弃牌，与手中一对相同牌组成明刻。"
        },
        "id": "pung",
        "title": {
          "en": "Source of a pung",
          "tw": "碰牌來源",
          "zh": "碰牌来源"
        }
      },
      {
        "description": {
          "en": "Show the entire called set and keep it fixed; do not hide the claimed tile in your hand.",
          "tw": "叫牌成功後亮明整組並固定；不能把取來的棄牌混回暗手。",
          "zh": "叫牌成功后亮明整组并固定；不能把取来的弃牌混回暗手。"
        },
        "id": "expose",
        "title": {
          "en": "Exposed sets",
          "tw": "明牌組合",
          "zh": "明牌组合"
        }
      },
      {
        "description": {
          "en": "Concealed, added and exposed kongs have different tile sources and timing.",
          "tw": "暗槓用手中四張；加槓給已有明刻添自己的第四張；大明槓用他家棄牌配手中三張。",
          "zh": "暗杠用手中四张；加杠给已有明刻添自己的第四张；大明杠用他家弃牌配手中三张。"
        },
        "id": "kong-kinds",
        "title": {
          "en": "Three kinds of kong",
          "tw": "三種槓",
          "zh": "三种杠"
        }
      },
      {
        "description": {
          "en": "A concealed or added kong follows your own draw or replacement, not an immediate chow or pung.",
          "tw": "暗槓和加槓只在自己摸牌後或補槓後進行；剛吃或碰後不能同時開槓。",
          "zh": "暗杠和加杠只在自己摸牌后或补杠后进行；刚吃或碰后不能同时开杠。"
        },
        "id": "kong-timing",
        "title": {
          "en": "Kong timing",
          "tw": "開槓時機",
          "zh": "开杠时机"
        }
      },
      {
        "description": {
          "en": "Show and confirm all four kong tiles before tail replacement; concealed-kong tiles remain shown in this reference.",
          "tw": "先公開四張並確認，再從牌尾補牌；本參考的暗槓四張也公開至本局結束。",
          "zh": "先公开四张并确认，再从牌尾补牌；本参考的暗杠四张也公开至本局结束。"
        },
        "id": "kong-confirm",
        "title": {
          "en": "Confirm and replace a kong",
          "tw": "亮槓與補牌",
          "zh": "亮杠与补牌"
        }
      },
      {
        "description": {
          "en": "An opponent’s discard cannot extend your exposed pung; an exposed kong needs three concealed copies.",
          "tw": "他家棄出的第四張不能加到自己已有的明刻；大明槓需要原先三張都在暗手。",
          "zh": "他家弃出的第四张不能加到自己已有的明刻；大明杠需要原先三张都在暗手。"
        },
        "id": "kong-limit",
        "title": {
          "en": "No discard to extend a pung",
          "tw": "明刻不能取棄牌加槓",
          "zh": "明刻不能取弃牌加杠"
        }
      },
      {
        "description": {
          "en": "A valid win outranks pung or exposed kong, which outrank chow; timing of confirmation matters.",
          "tw": "合法胡牌優先於碰和大明槓，後兩者優先於吃；叫牌是否已固定還會影響競爭。",
          "zh": "合法胡牌优先于碰和大明杠，后两者优先于吃；叫牌是否已固定还会影响竞争。"
        },
        "id": "priority",
        "title": {
          "en": "Call priority",
          "tw": "叫牌優先",
          "zh": "叫牌优先"
        }
      },
      {
        "description": {
          "en": "An immediate related discard after a call can be a prohibited tile swap in this reference.",
          "tw": "吃碰後立即打出與剛固定組合有關的禁打牌，可能構成“食換”；先核對再打。",
          "zh": "吃碰后立即打出与刚固定组合有关的禁打牌，可能构成“食换”；先核对再打。"
        },
        "id": "swap",
        "title": {
          "en": "Immediate swap restriction",
          "tw": "食換限制",
          "zh": "食换限制"
        }
      }
    ],
    "id": "calls",
    "title": {
      "en": "Calls and kongs",
      "tw": "叫牌與槓",
      "zh": "叫牌与杠"
    }
  },
  {
    "entries": [
      {
        "description": {
          "en": "Check shape and qualifying faan; the reference has a three-faan minimum and a ten-faan cap.",
          "tw": "先確認牌形，再計成立的番種；本參考三番起胡、十番封頂。",
          "zh": "先确认牌形，再计成立的番种；本参考三番起胡、十番封顶。"
        },
        "id": "minimum",
        "title": {
          "en": "Three-faan minimum",
          "tw": "三番起胡",
          "zh": "三番起胡"
        }
      },
      {
        "description": {
          "en": "Self-draw and discard wins may differ in faan and payments.",
          "tw": "普通胡牌分自摸與取他家棄牌；兩者番數和支付可能不同。",
          "zh": "普通胡牌分自摸与取他家弃牌；两者番数和支付可能不同。"
        },
        "id": "methods",
        "title": {
          "en": "Self-draw and discard wins",
          "tw": "自摸與棄牌胡",
          "zh": "自摸与弃牌胡"
        }
      },
      {
        "description": {
          "en": "After passing a winning discard, you cannot win on the repeated tile before your next draw; this is not Japanese furiten.",
          "tw": "錯過一次可胡的棄牌後，在自己下一次摸牌前不能衚衕種跟張；這不是日麻的永久振聽。",
          "zh": "错过一次可胡的弃牌后，在自己下一次摸牌前不能胡同种跟张；这不是日麻的永久振听。"
        },
        "id": "same-cycle",
        "title": {
          "en": "Repeated tile in the same cycle",
          "tw": "同巡跟張",
          "zh": "同巡跟张"
        }
      },
      {
        "description": {
          "en": "Normally an added kong can be robbed; Thirteen Orphans has a concealed-kong exception.",
          "tw": "通常可搶他家加槓，十三幺有搶暗槓例外；大明槓遇合法胡牌按叫牌優先處理。",
          "zh": "通常可抢他家加杠，十三幺有抢暗杠例外；大明杠遇合法胡牌按叫牌优先处理。"
        },
        "id": "rob-kong",
        "title": {
          "en": "Robbing a kong",
          "tw": "搶槓",
          "zh": "抢杠"
        }
      },
      {
        "description": {
          "en": "Preserve the table after declaring a win; reveal the shape and confirm scoring before mixing tiles.",
          "tw": "宣佈胡牌後保留整桌原狀，展示牌形並讓各家核對，再確認記分與洗牌。",
          "zh": "宣布胡牌后保留整桌原状，展示牌形并让各家核对，再确认记分与洗牌。"
        },
        "id": "verify-win",
        "title": {
          "en": "Verify before mixing",
          "tw": "胡牌後核對",
          "zh": "胡牌后核对"
        }
      }
    ],
    "id": "win",
    "title": {
      "en": "Winning and restrictions",
      "tw": "胡牌與禁例",
      "zh": "胡牌与禁例"
    }
  },
  {
    "entries": [
      {
        "description": {
          "en": "Qualifying patterns generally stack; use the highest valid reading of an ambiguous hand.",
          "tw": "符合多個番種時通常疊加；同一牌形有多種解釋時採用番數較高者。",
          "zh": "符合多个番种时通常叠加；同一牌形有多种解释时采用番数较高者。"
        },
        "id": "stack",
        "title": {
          "en": "Stacking faan",
          "tw": "番數疊加",
          "zh": "番数叠加"
        }
      },
      {
        "description": {
          "en": "A normal discard win is paid by the discarder; on self-draw each opponent pays half that amount.",
          "tw": "普通棄牌胡由出牌者獨付；普通自摸由三家各付對應棄牌分的一半。",
          "zh": "普通弃牌胡由出牌者独付；普通自摸由三家各付对应弃牌分的一半。"
        },
        "id": "ordinary",
        "title": {
          "en": "Ordinary settlement",
          "tw": "普通支付",
          "zh": "普通支付"
        }
      },
      {
        "description": {
          "en": "The supplier of a fourth exposed set may bear all self-draw points under four-exposed-set liability.",
          "tw": "第四組公開面子的供牌者可能承擔“十二章包”：胡牌者自摸時由其付三家總額。",
          "zh": "第四组公开面子的供牌者可能承担“十二章包”：胡牌者自摸时由其付三家总额。"
        },
        "id": "twelve",
        "title": {
          "en": "Fourth exposed-set liability",
          "tw": "第四組明章包牌",
          "zh": "第四组明章包牌"
        }
      },
      {
        "description": {
          "en": "Supplying the third exposed dragon set may create liability; a concealed third kong has no supplier.",
          "tw": "第三組三元明刻或明槓的供牌者可能承擔大三元包；若第三組為暗槓則無該供牌者。",
          "zh": "第三组三元明刻或明杠的供牌者可能承担大三元包；若第三组为暗杠则无该供牌者。"
        },
        "id": "dragons",
        "title": {
          "en": "Big Three Dragons liability",
          "tw": "大三元包牌",
          "zh": "大三元包牌"
        }
      },
      {
        "description": {
          "en": "When liabilities overlap, the later one governs; a discard win remains paid by its discarder.",
          "tw": "多個包牌條件先後成立時，以後成立的責任為准；棄牌胡仍由實際出牌者支付。",
          "zh": "多个包牌条件先后成立时，以后成立的责任为准；弃牌胡仍由实际出牌者支付。"
        },
        "id": "later",
        "title": {
          "en": "Later liability prevails",
          "tw": "較後責任優先",
          "zh": "较后责任优先"
        }
      },
      {
        "description": {
          "en": "Robbing a kong adds a faan as a discard claim, but the kong player pays the full self-draw total.",
          "tw": "搶槓按出槓者出牌計一番，但支付按包自摸，由該玩家承擔三家份額。",
          "zh": "抢杠按出杠者出牌计一番，但支付按包自摸，由该玩家承担三家份额。"
        },
        "id": "rob-payment",
        "title": {
          "en": "Payment for robbed kong",
          "tw": "搶槓支付",
          "zh": "抢杠支付"
        }
      }
    ],
    "id": "score",
    "title": {
      "en": "Faan and payments",
      "tw": "番數與支付",
      "zh": "番数与支付"
    }
  },
  {
    "entries": [
      {
        "description": {
          "en": "Show a drawn flower and replace from the tail; keep flowers separate from exposed sets.",
          "tw": "普通摸到花牌要亮花並從牌尾補牌；花牌和固定面子分區擺放。",
          "zh": "普通摸到花牌要亮花并从牌尾补牌；花牌和固定面子分区摆放。"
        },
        "id": "flower-replace",
        "title": {
          "en": "Flower replacement",
          "tw": "補花",
          "zh": "补花"
        }
      },
      {
        "description": {
          "en": "A flower matching your seat can score; a full flower or season set can add faan.",
          "tw": "與門風編號相應的花牌可計正花；集齊四季或四花另有番數。",
          "zh": "与门风编号相应的花牌可计正花；集齐四季或四花另有番数。"
        },
        "id": "seat-flower",
        "title": {
          "en": "Seat and complete flower sets",
          "tw": "正花與一台花",
          "zh": "正花与一台花"
        }
      },
      {
        "description": {
          "en": "No Flowers scores only at a flower-enabled table, not in the no-flower learning route.",
          "tw": "啟用花牌但自己沒有花可計“無花”；純無花主線不能另加這一番。",
          "zh": "启用花牌但自己没有花可计“无花”；纯无花主线不能另加这一番。"
        },
        "id": "no-flower",
        "title": {
          "en": "No-Flowers faan",
          "tw": "無花計番",
          "zh": "无花计番"
        }
      },
      {
        "description": {
          "en": "Seven and eight flowers have special wins; seven flowers score three self-draw faan without the ordinary Self-Draw addition.",
          "tw": "摸得七花是小花胡、八花是大花胡；七花三番自摸不另加普通自摸一番。",
          "zh": "摸得七花是小花胡、八花是大花胡；七花三番自摸不另加普通自摸一番。"
        },
        "id": "seven-eight",
        "title": {
          "en": "Seven and eight flowers",
          "tw": "七花與八花",
          "zh": "七花与八花"
        }
      },
      {
        "description": {
          "en": "Flower-win eligibility depends on declaration timing; replacing the flower may forfeit that chance.",
          "tw": "花胡的聲明與補花先後有關；普通補花後不能回頭聲明剛才的花胡。",
          "zh": "花胡的声明与补花先后有关；普通补花后不能回头声明刚才的花胡。"
        },
        "id": "flower-timing",
        "title": {
          "en": "Flower-win timing",
          "tw": "花胡聲明時機",
          "zh": "花胡声明时机"
        }
      }
    ],
    "id": "flowers",
    "title": {
      "en": "When flowers are enabled",
      "tw": "啟用花牌時",
      "zh": "启用花牌时"
    }
  },
  {
    "entries": [
      {
        "description": {
          "en": "Early draws, wrong-wall draws or missed replacements may draw competition penalties.",
          "tw": "搶先摸牌、摸錯位置或漏摸補牌，在協會賽事中可能產生黃牌或更重處理。",
          "zh": "抢先摸牌、摸错位置或漏摸补牌，在协会赛事中可能产生黄牌或更重处理。"
        },
        "id": "early",
        "title": {
          "en": "Early or wrong draw",
          "tw": "提前或錯誤摸牌",
          "zh": "提前或错误摸牌"
        }
      },
      {
        "description": {
          "en": "Incorrect, cancelled or silent calls have different competition outcomes; pause for the referee.",
          "tw": "錯誤叫牌、公開錯誤組合、叫牌卻取消或無聲叫牌都有專門處理；暫停並請裁判核對。",
          "zh": "错误叫牌、公开错误组合、叫牌却取消或无声叫牌都有专门处理；暂停并请裁判核对。"
        },
        "id": "wrong-call",
        "title": {
          "en": "Incorrect call",
          "tw": "錯誤叫牌",
          "zh": "错误叫牌"
        }
      },
      {
        "description": {
          "en": "A prohibited tile swap may or may not be correctable depending on subsequent play.",
          "tw": "食換的具體更正機會與下家是否已摸牌有關；不要以為可隨意收回棄牌。",
          "zh": "食换的具体更正机会与下家是否已摸牌有关；不要以为可随意收回弃牌。"
        },
        "id": "swap-penalty",
        "title": {
          "en": "Correcting a tile swap",
          "tw": "食換更正",
          "zh": "食换更正"
        }
      },
      {
        "description": {
          "en": "A structurally short or long hand loses ordinary winning eligibility; count a kong as one set.",
          "tw": "手牌結構少張或多張稱相公，本局通常失去胡牌資格；槓按一組計數。",
          "zh": "手牌结构少张或多张称相公，本局通常失去胡牌资格；杠按一组计数。"
        },
        "id": "short-long",
        "title": {
          "en": "Short or long hand",
          "tw": "相公",
          "zh": "相公"
        }
      },
      {
        "description": {
          "en": "A false win or withdrawn declaration can carry a serious competition penalty.",
          "tw": "未達到牌形或番數就推牌可能構成詐胡；只宣佈後撤回也有處罰。",
          "zh": "未达到牌形或番数就推牌可能构成诈胡；只宣布后撤回也有处罚。"
        },
        "id": "false-win",
        "title": {
          "en": "False win and withdrawal",
          "tw": "詐胡與空胡",
          "zh": "诈胡与空胡"
        }
      },
      {
        "description": {
          "en": "Exposed concealed tiles or a disturbed table can affect fairness and verification.",
          "tw": "誤露手牌及把牌桌弄亂會影響公平和核對；應保持桌面可辨。",
          "zh": "误露手牌及把牌桌弄乱会影响公平和核对；应保持桌面可辨。"
        },
        "id": "exposure",
        "title": {
          "en": "Exposed concealed tiles",
          "tw": "誤露手牌",
          "zh": "误露手牌"
        }
      },
      {
        "description": {
          "en": "The winner states faan, all players verify before shuffling; see the official text for adjudication details.",
          "tw": "胡牌者負責報番，各家確認後才洗牌；賽事裁判記分及處罰細節見協會原文。",
          "zh": "胡牌者负责报番，各家确认后才洗牌；赛事裁判记分及处罚细节见协会原文。"
        },
        "id": "score-confirm",
        "title": {
          "en": "Confirming the score",
          "tw": "記分確認",
          "zh": "记分确认"
        }
      }
    ],
    "id": "penalties",
    "title": {
      "en": "Competition errors and checks",
      "tw": "賽事犯規與核對",
      "zh": "赛事犯规与核对"
    }
  }
];
g.MahjongHKRulebook=data;
if(typeof module!=="undefined"&&module.exports)module.exports=data;
})(globalThis);
