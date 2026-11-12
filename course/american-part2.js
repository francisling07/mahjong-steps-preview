/* American Mahjong course, part 2: chapters 4-6. Original teaching samples; no NMJL card hands are copied. */
(function(g){const data={
  "chapters": [
    {
      "id": "am-4",
      "title": {
        "zh": "摸打与鸣牌",
        "tw": "摸打與鳴牌",
        "en": "Draw, Discard, and Calling Tiles"
      },
      "desc": {
        "zh": "掌握庄家首弃与逆时针轮转、摸一张打一张的循环，以及美式特有的鸣牌限制：只有符合年度卡目标行的三张及以上同牌组才能叫弃牌，末张成胡是例外。",
        "tw": "掌握莊家首棄與逆時針輪轉、摸一張打一張的循環，以及美式特有的鳴牌限制：只有符合年度卡目標行的三張及以上同牌組才能叫棄牌，末張成胡是例外。",
        "en": "Master the dealer's opening discard and counter-clockwise turns, the draw-one-discard-one cycle, and the American limits on calling: only same-tile sets of three or more from your card line may be claimed, with the winning tile as the exception."
      },
      "lessons": [
        {
          "id": "am-4-1",
          "title": {
            "zh": "庄家开局与轮转",
            "tw": "莊家開局與輪轉",
            "en": "The Dealer and Turn Order"
          },
          "intro": {
            "zh": "开局流程回顾：发牌与 Charleston 结束后，由庄家（东家）打出第一张弃牌，随后行牌按逆时针方向逐位轮转。本章所有牌型示例均为教学样例，不是 NMJL 年度牌型。",
            "tw": "開局流程回顧：發牌與 Charleston 結束後，由莊家（東家）打出第一張棄牌，隨後行牌按逆時針方向逐位輪轉。本章所有牌型示例均為教學樣例，不是 NMJL 年度牌型。",
            "en": "Opening recap: after the deal and the Charleston, the dealer (East) makes the first discard, and play then rotates counter-clockwise one player at a time. All hand examples in this chapter are teaching samples, not NMJL card hands."
          },
          "questions": [
            {
              "id": "am-4-1-a",
              "type": "choice",
              "tiles": [
                "z1",
                "m5",
                "s3"
              ],
              "prompt": {
                "zh": "发牌与 Charleston 都已完成。第一张弃牌应由谁来打？",
                "tw": "發牌與 Charleston 都已結束。第一張棄牌應由誰來打？",
                "en": "The deal and the Charleston are done. Who makes the very first discard?"
              },
              "options": [
                {
                  "id": "a",
                  "label": {
                    "zh": "庄家（东家）先打第一张",
                    "tw": "莊家（東家）先打第一張",
                    "en": "The dealer (East) discards first"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "zh": "上局胜者的下家先打",
                    "tw": "上局勝者的下家先打",
                    "en": "The previous winner's left-hand neighbor discards first"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "zh": "上一局的胜者先打",
                    "tw": "上一局的勝者先打",
                    "en": "The winner of the previous round discards first"
                  }
                }
              ],
              "answerId": "a",
              "explanation": {
                "zh": "美式流程中，Charleston 结束后由庄家打出第一张弃牌，作为本轮行牌的起点。",
                "tw": "美式流程中，Charleston 結束後由莊家打出第一張棄牌，作為本輪行牌的起點。",
                "en": "After the Charleston the dealer opens the round with the first discard, starting the turn rotation."
              }
            },
            {
              "id": "am-4-1-b",
              "type": "choice",
              "tiles": [
                "p2",
                "p8",
                "z4"
              ],
              "prompt": {
                "zh": "庄家弃出第一张后，行牌（摸牌、弃牌）按什么顺序继续？",
                "tw": "莊家棄出第一張後，行牌（摸牌、棄牌）按什麼順序繼續？",
                "en": "After the dealer's opening discard, in what order does play continue?"
              },
              "options": [
                {
                  "id": "a",
                  "label": {
                    "zh": "按顺时针方向逐位进行",
                    "tw": "按順時針方向逐位進行",
                    "en": "Clockwise, one player at a time"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "zh": "按逆时针方向逐位进行",
                    "tw": "按逆時針方向逐位進行",
                    "en": "Counter-clockwise, one player at a time"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "zh": "谁先开口谁先摸，顺序不限",
                    "tw": "誰先開口誰先摸，順序不限",
                    "en": "In any order—whoever speaks first draws"
                  }
                }
              ],
              "answerId": "b",
              "explanation": {
                "zh": "庄家弃牌后，行牌按逆时针方向一位一位轮转；只有轮到自己的回合才能摸牌、弃牌或鸣牌。",
                "tw": "莊家棄牌後，行牌按逆時針方向一位一位輪轉；只有輪到自己的回合才能摸牌、棄牌或鳴牌。",
                "en": "Play rotates counter-clockwise from the dealer's first discard; you may only draw, discard, or call on your own turn."
              }
            },
            {
              "id": "am-4-1-c",
              "type": "tile-pick",
              "tiles": [
                "s2",
                "p4",
                "s2",
                "f3",
                "s2",
                "z6",
                "m9",
                "p9"
              ],
              "context": {
                "zh": "想叫别家的弃牌（鸣牌），你的年度卡目标行里必须有一组『三张及以上相同牌』，而且手里要持有该组其余的牌。（教学样例，不是 NMJL 年度牌型）",
                "tw": "想叫別家的棄牌（鳴牌），你的年度卡目標行裡必須有一組『三張及以上相同牌』，而且手裡要持有該組其餘的牌。（教學樣例，不是 NMJL 年度牌型）",
                "en": "To call a discard, your card line must contain a set of three or more identical tiles and you must hold the rest of that set. (Teaching sample, not an NMJL card hand.)"
              },
              "prompt": {
                "zh": "请从手牌中选出唯一的 3 张相同牌——它们才能与别人弃出的同牌组成可鸣的同牌组。",
                "tw": "請從手牌中選出唯一的 3 張相同牌——它們才能與別人棄出的同牌組成可鳴的同牌組。",
                "en": "Pick the only three identical tiles in this hand—the ones that can join a discarded tile of the same kind."
              },
              "selectionCount": 3,
              "answerIndexes": [
                0,
                2,
                4
              ],
              "explanation": {
                "zh": "只有三张二条互相相同；四条、九筒各只有两张，花牌与字牌无法凑成三张同牌。",
                "tw": "只有三張二條互相相同；四條、九筒各只有兩張，花牌與字牌無法湊成三張同牌。",
                "en": "Only the three 2 bamboo tiles are identical; the 4 dots and 9 characters appear at most twice, and flowers and honors cannot form a set of three."
              }
            }
          ]
        },
        {
          "id": "am-4-2",
          "title": {
            "zh": "摸一张打一张",
            "tw": "摸一張打一張",
            "en": "Draw One, Discard One"
          },
          "intro": {
            "zh": "行牌的基本循环：轮到你时先摸一张，手牌成 14 张；若不胡牌也不鸣牌，就弃出一张，恢复 13 张。鸣牌（明示一组）之后也必须弃一张。花牌始终留在手里，不补花。",
            "tw": "行牌的基本循環：輪到你時先摸一張，手牌成 14 張；若不胡牌也不鳴牌，就棄出一張，恢復 13 張。鳴牌（明示一組）之後也必須棄一張。花牌始終留在手裡，不補花。",
            "en": "The basic cycle: on your turn draw to 14 tiles; unless you win or call, discard one back to 13. After exposing a called set you must also discard. Flowers stay in your hand—there is no flower replacement in American play."
          },
          "questions": [
            {
              "id": "am-4-2-a",
              "type": "choice",
              "tiles": [
                "m2",
                "m4",
                "m7",
                "m7",
                "p1",
                "p5",
                "p9",
                "p9",
                "s3",
                "s6",
                "s8",
                "z2",
                "z4",
                "f1"
              ],
              "prompt": {
                "zh": "轮到你，你刚摸进第 14 张牌（如图，含一张花牌）。既不胡牌也不鸣牌时，接下来必须做什么？",
                "tw": "輪到你，你剛摸進第 14 張牌（如圖，含一張花牌）。既不胡牌也不鳴牌時，接下來必須做什麼？",
                "en": "It is your turn and you have just drawn your 14th tile (shown, including one flower). If you neither win nor call, what must you do next?"
              },
              "options": [
                {
                  "id": "a",
                  "label": {
                    "zh": "把 14 张牌扣下等别人来叫",
                    "tw": "把 14 張牌扣下等別人來叫",
                    "en": "Hold all 14 tiles and wait for someone to call"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "zh": "弃出一张牌，使手牌恢复 13 张",
                    "tw": "棄出一張牌，使手牌恢復 13 張",
                    "en": "Discard one tile, returning your hand to 13"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "zh": "把花牌放到一旁，再摸一张",
                    "tw": "把花牌放到一旁，再摸一張",
                    "en": "Set the flower aside and draw again"
                  }
                }
              ],
              "answerId": "b",
              "explanation": {
                "zh": "美式行牌是摸一打一：弃牌后手牌维持 13 张。注意花牌留在手里——美式不补花，所以 c 的做法是错的。",
                "tw": "美式行牌是摸一打一：棄牌後手牌維持 13 張。注意花牌留在手裡——美式不補花，所以 c 的做法是錯的。",
                "en": "American play is draw-one-discard-one: after discarding, your hand is back to 13. Note the flower stays in your hand—American play has no replacement draw, so option c is wrong."
              }
            },
            {
              "id": "am-4-2-b",
              "type": "choice",
              "tiles": [
                "z5",
                "z5",
                "z7"
              ],
              "prompt": {
                "zh": "你叫了别家弃出的『中』，与图中一对『中』组成三张同牌组并明示。接下来必须？",
                "tw": "你叫了別家棄出的『中』，與圖中一對『中』組成三張同牌組並明示。接下來必須？",
                "en": "You call a discarded red dragon, joining the shown pair to expose a pung. What must you do next?"
              },
              "options": [
                {
                  "id": "a",
                  "label": {
                    "zh": "等下家摸完牌后你再弃",
                    "tw": "等下家摸完牌後你再棄",
                    "en": "Wait for the next player to draw, then discard"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "zh": "再摸一张牌然后弃一张",
                    "tw": "再摸一張牌然後棄一張",
                    "en": "Draw a tile, then discard one"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "zh": "直接从手牌弃出一张，不再摸牌",
                    "tw": "直接從手牌棄出一張，不再摸牌",
                    "en": "Discard straight from your hand—no draw"
                  }
                }
              ],
              "answerId": "c",
              "explanation": {
                "zh": "鸣牌等于消耗了你的摸牌权：明示组后直接从手牌弃一张，手牌重新回到 13 张的循环。",
                "tw": "鳴牌等於消耗了你的摸牌權：明示組後直接從手牌棄一張，手牌重新回到 13 張的循環。",
                "en": "Calling replaces your draw: after exposing the set, discard straight from your hand and return to the 13-tile cycle."
              }
            },
            {
              "id": "am-4-2-c",
              "type": "sequence",
              "prompt": {
                "zh": "把『一个普通回合』（不鸣牌、不胡牌）的三个环节按正确顺序排列。",
                "tw": "把『一個普通回合』（不鳴牌、不胡牌）的三個環節按正確順序排列。",
                "en": "Order the three phases of a normal turn (no call, no win)."
              },
              "options": [
                {
                  "id": "a",
                  "label": {
                    "zh": "弃出一张牌，使手牌回到 13 张",
                    "tw": "棄出一張牌，使手牌回到 13 張",
                    "en": "Discard one tile, returning to 13 tiles"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "zh": "从牌墙摸进一张牌，手牌成 14 张",
                    "tw": "從牌牆摸進一張牌，手牌成 14 張",
                    "en": "Draw from the wall, bringing your hand to 14"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "zh": "检查这 14 张是否已能宣布 Mah Jongg",
                    "tw": "檢查這 14 張是否已能宣佈 Mah Jongg",
                    "en": "Check the 14 tiles for a possible Mah Jongg"
                  }
                }
              ],
              "answerOrder": [
                "b",
                "c",
                "a"
              ],
              "explanation": {
                "zh": "顺序是：摸一张 → 检查（能胡就胡，能鸣则鸣）→ 打一张。摸完先看能否成胡，是每回合的固定动作。",
                "tw": "順序是：摸一張 → 檢查（能胡就胡，能鳴則鳴）→ 打一張。摸完先看能否成胡，是每回合的固定動作。",
                "en": "The order is: draw, check for a win (or a call), then discard. Checking right after the draw is a fixed habit every turn."
              }
            }
          ]
        },
        {
          "id": "am-4-3",
          "title": {
            "zh": "什么弃牌能叫",
            "tw": "什麼棄牌能叫",
            "en": "Which Discards Can Be Called"
          },
          "intro": {
            "zh": "美式鸣牌比中式严格：只有当弃牌能补全你目标行里『三张及以上相同牌』的组（pung、kong、quint）时才能叫，并要立即明示。普通数字连续牌（顺子）不能靠叫弃牌组成。以下牌型均为教学样例，不是 NMJL 年度牌型。",
            "tw": "美式鳴牌比中式嚴格：只有當棄牌能補全你目標行裡『三張及以上相同牌』的組（pung、kong、quint）時才能叫，並要立即明示。普通數字連續牌（順子）不能靠叫棄牌組成。以下牌型均為教學樣例，不是 NMJL 年度牌型。",
            "en": "American calling is stricter: you may call a discard only to complete a set of three or more identical tiles (pung, kong, quint) in your line, exposing at once. Ordinary runs cannot be built by calling discards. All lines below are teaching samples, not NMJL card hands."
          },
          "questions": [
            {
              "id": "am-4-3-a",
              "type": "choice",
              "tiles": [
                "m6",
                "m6",
                "p3",
                "s1"
              ],
              "prompt": {
                "zh": "桌上弃出一张六万。依据美式鸣牌规则，下面哪类叫弃牌是合法的？",
                "tw": "桌上棄出一張六萬。依據美式鳴牌規則，下面哪類叫棄牌是合法的？",
                "en": "A 6 of characters is discarded. Under American calling rules, which kind of claim is legal?"
              },
              "options": [
                {
                  "id": "a",
                  "label": {
                    "zh": "用图中两张六万把它叫成三张同牌组并明示",
                    "tw": "用圖中兩張六萬把它叫成三張同牌組並明示",
                    "en": "Use the two 6 characters shown to call it into an exposed pung"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "zh": "把它与手里两张牌组成连续顺子并明示",
                    "tw": "把它與手裡兩張牌組成連續順子並明示",
                    "en": "Use it with two tiles to expose a run"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "zh": "任何玩家都可把弃牌捡走自行留下",
                    "tw": "任何玩家都可把棄牌撿走自行留下",
                    "en": "Any player may simply pick the discard up to keep"
                  }
                }
              ],
              "answerId": "a",
              "explanation": {
                "zh": "只有能补全三张及以上同牌组的弃牌才允许叫；顺子不能靠叫组成，弃牌也不能随手捡走留用。",
                "tw": "只有能補全三張及以上同牌組的棄牌才允許叫；順子不能靠叫組成，棄牌也不能隨手撿走留用。",
                "en": "Only discards completing a same-tile set may be called; runs can never be claimed, and no one may pocket a discard for later use."
              }
            },
            {
              "id": "am-4-3-b",
              "type": "choice",
              "tiles": [
                "s6",
                "s7",
                "s8"
              ],
              "prompt": {
                "zh": "你手里有图中的六、七、八条。上家弃出五条，你能否叫它来组成『五六七』顺子？",
                "tw": "你的手裡有圖中的六、七、八條。上家棄出五條，你能否叫它來組成『五六七』順子？",
                "en": "You hold the 6, 7, 8 of bamboo shown. May you call a discarded 5 of bamboo to complete a 5-6-7 run?"
              },
              "options": [
                {
                  "id": "a",
                  "label": {
                    "zh": "能，美式的顺子随时可以叫",
                    "tw": "能，美式的順子隨時可以叫",
                    "en": "Yes—American runs may always be called"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "zh": "不能：普通数字连续牌不构成可叫弃牌，顺子只能靠自己摸进",
                    "tw": "不能：普通數字連續牌不構成可叫棄牌，順子只能靠自己摸進",
                    "en": "No—ordinary runs are not claimable; draw them yourself"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "zh": "能，但只有牌局末巡才允许",
                    "tw": "能，但只有牌局末巡才允許",
                    "en": "Yes, but only late in the wall"
                  }
                }
              ],
              "answerId": "b",
              "explanation": {
                "zh": "美式的顺子（run/sequence）不能靠叫弃牌组成，只能自摸；能叫的只有三张及以上同牌组——直到那张弃牌直接让你成胡（下一课讲例外）。",
                "tw": "美式的順子（run/sequence）不能靠叫棄牌組成，只能自摸；能叫的只有三張及以上同牌組——直到那張棄牌直接讓你成胡（下一課講例外）。",
                "en": "American runs must be self-drawn; only same-tile sets may be called—until a discard completes your Mah Jongg outright (the exception, next lesson)."
              }
            },
            {
              "id": "am-4-3-c",
              "type": "tile-pick",
              "tiles": [
                "p1",
                "s9",
                "j1",
                "z5",
                "p1",
                "z5",
                "m3",
                "z5"
              ],
              "context": {
                "zh": "三张相同即组成可鸣的 pung。Joker 虽然也能进同牌组（第 5 章细讲），本题要找的是『全部为真牌』的唯一同牌组。",
                "tw": "三張相同即組成可鳴的 pung。Joker 雖然也能進同牌組（第 5 章細講），本題要找的是『全部為真牌』的唯一同牌組。",
                "en": "Three identical tiles form a callable pung. Jokers may also join such sets (chapter 5), but here find the only all-real identical set."
              },
              "prompt": {
                "zh": "请选出手牌中唯一的三张相同牌。",
                "tw": "請選出手牌中唯一的三張相同牌。",
                "en": "Pick the only three identical tiles in this hand."
              },
              "selectionCount": 3,
              "answerIndexes": [
                3,
                5,
                7
              ],
              "explanation": {
                "zh": "三张『中』完全相同；一条只有两张，Joker 与花牌各一张，都凑不出别的三张同牌。",
                "tw": "三張『中』完全相同；一條只有兩張，Joker 與花牌各一張，都湊不出別的三張同牌。",
                "en": "The three red dragons match; the 1 dots number only two, and the joker and flower appear once each."
              }
            }
          ]
        },
        {
          "id": "am-4-4",
          "title": {
            "zh": "末张成胡的例外",
            "tw": "末張成胡的例外",
            "en": "The Winning-Tile Exception"
          },
          "intro": {
            "zh": "唯一的例外：当某张弃牌正好让整手牌完成年度卡的一整行（Mah Jongg）时，无论它补的是顺子、单张还是对子的槽位，都可以叫；叫胡必须立即宣告并整手明示。示例均为教学样例，不是 NMJL 年度牌型。",
            "tw": "唯一的例外：當某張棄牌正好讓整手牌完成年度卡的一整行（Mah Jongg）時，無論它補的是順子、單張還是對子的槽位，都可以叫；叫胡必須立即宣告並整手明示。示例均為教學樣例，不是 NMJL 年度牌型。",
            "en": "The one exception: when a discard itself completes your entire card line for Mah Jongg, you may call it whatever slot it fills—run, single, or pair—and you must announce and expose immediately. All examples are teaching samples, not NMJL card hands."
          },
          "questions": [
            {
              "id": "am-4-4-a",
              "type": "choice",
              "tiles": [
                "m3",
                "m4",
                "m5"
              ],
              "prompt": {
                "zh": "关于『正好完成 Mah Jongg 的弃牌』，正确的是？",
                "tw": "關於『正好完成 Mah Jongg 的棄牌』，正確的是？",
                "en": "About a discard that would complete your Mah Jongg, which statement is correct?"
              },
              "options": [
                {
                  "id": "a",
                  "label": {
                    "zh": "即使它补的是顺子或单张的槽位，也可以叫",
                    "tw": "即使它補的是順子或單張的槽位，也可以叫",
                    "en": "It may be called even when it fills a run or single slot"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "zh": "仍然只有补三张同牌组的才能叫",
                    "tw": "仍然只有補三張同牌組的才能叫",
                    "en": "Only same-tile sets may still be called, wins included"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "zh": "美式的胡牌必须自摸，弃牌永远不能点炮",
                    "tw": "美式的胡牌必須自摸，棄牌永遠不能點炮",
                    "en": "American hands must be self-drawn; discards can never win"
                  }
                }
              ],
              "answerId": "a",
              "explanation": {
                "zh": "鸣牌限制只约束『搭组』；当这张弃牌当场让你成胡时是例外，叫到即胡。",
                "tw": "鳴牌限制只約束『搭組』；當這張棄牌當場讓你成胡時是例外，叫到即胡。",
                "en": "Call restrictions govern set-building only; the winning tile itself is the exception—call it and win on the spot."
              }
            },
            {
              "id": "am-4-4-b",
              "type": "choice",
              "tiles": [
                "s2",
                "s3",
                "p9"
              ],
              "prompt": {
                "zh": "你还差一张四条补顺、另一处也还没齐。上家弃出四条，你想先叫进明示顺子、等下轮再胡。这样做合法吗？",
                "tw": "你還差一張四條補順、另一處也還沒齊。上家棄出四條，你想先叫進明示順子、等下輪再胡。這樣做合法嗎？",
                "en": "You still need a 4 bamboo for a run and one more piece elsewhere. You want to call the discarded 4, expose the run, and win next turn. Legal?"
              },
              "options": [
                {
                  "id": "a",
                  "label": {
                    "zh": "合法，鸣牌后等自摸胡牌很常见",
                    "tw": "合法，鳴牌後等自摸胡牌很常見",
                    "en": "Legal—calling and waiting to self-draw is normal"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "zh": "不合法：叫牌要么当场成胡，要么只服务于三张及以上同牌组；不能把补顺子的牌『存』下来",
                    "tw": "不合法：叫牌要麼當場成胡，要麼只服務於三張及以上同牌組；不能把補順子的牌『存』下來",
                    "en": "Illegal: a called tile must win on the spot or join a same-tile set—you cannot bank a run tile"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "zh": "合法，只要三家都同意",
                    "tw": "合法，只要三家都同意",
                    "en": "Legal, provided all three opponents agree"
                  }
                }
              ],
              "answerId": "b",
              "explanation": {
                "zh": "叫弃牌不能『存着』：要么这张牌当场完成整行，要么它只能进入可明示的三张同牌组。补顺子又不当场成胡＝不能叫。",
                "tw": "叫棄牌不能『存著』：要麼這張牌當場完成整行，要麼它只能進入可明示的三張同牌組。補順子又不當場成胡＝不能叫。",
                "en": "Called tiles cannot be banked: the tile must complete the win immediately or feed an exposed same-tile set. A run-filling call that does not win is illegal."
              }
            },
            {
              "id": "am-4-4-c",
              "type": "choice",
              "tiles": [
                "z5",
                "z5",
                "z5",
                "f4"
              ],
              "prompt": {
                "zh": "你叫了别家的弃牌并宣告 Mah Jongg，接下来必须做什么？",
                "tw": "你叫了別家的棄牌並宣告 Mah Jongg，接下來必須做什麼？",
                "en": "You call a discard and announce Mah Jongg. What must you do next?"
              },
              "options": [
                {
                  "id": "a",
                  "label": {
                    "zh": "整手推倒明示，与年度卡逐张核对",
                    "tw": "整手推倒明示，與年度卡逐張核對",
                    "en": "Expose the whole hand and verify it tile by tile against the card"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "zh": "只明示刚才叫的那一张，其余留到下局",
                    "tw": "只明示剛纔叫的那一張，其餘留到下局",
                    "en": "Reveal only the called tile and keep the rest for next round"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "zh": "先把花牌放到一旁补摸一张，再明示",
                    "tw": "先把花牌放到一旁補摸一張，再明示",
                    "en": "Set flowers aside with a replacement draw, then reveal"
                  }
                }
              ],
              "answerId": "a",
              "explanation": {
                "zh": "叫胡必须立刻整手明示（图中花牌留在原位——美式不补花），并验证与当年卡的一整行完全一致。",
                "tw": "叫胡必須立刻整手明示（圖中花牌留在原位——美式不補花），並驗證與當年卡的一整行完全一致。",
                "en": "A called win is exposed instantly, whole hand down—flowers stay in place since American play has no replacement draws—and is verified line by line against the card."
              }
            }
          ]
        }
      ]
    },
    {
      "id": "am-5",
      "title": {
        "zh": "Joker 与换 Joker",
        "tw": "Joker 與換 Joker",
        "en": "Jokers and the Joker Exchange"
      },
      "desc": {
        "zh": "Joker 只能进入三张及以上的同牌组，不能用于单张或对子，也不能在 Charleston 中传出；公开组里的 Joker 可在你的回合用对应真牌换回，弃出的 Joker 不能被叫回。示例均为教学样例，不是 NMJL 年度牌型。",
        "tw": "Joker 只能進入三張及以上的同牌組，不能用於單張或對子，也不能在 Charleston 中傳給別家；公開組裡的 Joker 可在你的回合用對應真牌換回，棄出的 Joker 不能被叫回。示例均為教學樣例，不是 NMJL 年度牌型。",
        "en": "Jokers stand only inside sets of three or more identical tiles—never in singles or pairs, never passed in the Charleston. A joker in an exposed set may be exchanged with its real tile on your turn, and a discarded joker cannot be claimed back. All examples are teaching samples, not NMJL card hands."
      },
      "lessons": [
        {
          "id": "am-5-1",
          "title": {
            "zh": "Joker 能代替什么",
            "tw": "Joker 能代替什麼",
            "en": "What a Joker Can Replace"
          },
          "intro": {
            "zh": "Joker 是百搭，但美式规则把它限定在『三张及以上相同牌』的组内：pung、kong、quint 可以含 Joker；单张与对子的槽位必须是真牌。以下牌型均为教学样例，不是 NMJL 年度牌型。",
            "tw": "Joker 是百搭，但美式規則把它限定在『三張及以上相同牌』的組內：pung、kong、quint 可以含 Joker；單張與對子的槽位必須是真牌。以下牌型均為教學樣例，不是 NMJL 年度牌型。",
            "en": "A joker is wild, but American rules confine it to sets of three or more identical tiles: pungs, kongs, and quints may contain jokers; single and pair slots demand real tiles. All examples are teaching samples, not NMJL card hands."
          },
          "questions": [
            {
              "id": "am-5-1-a",
              "type": "choice",
              "tiles": [
                "m6",
                "m6",
                "j1"
              ],
              "prompt": {
                "zh": "目标行（教学样例）要求一组三张六万。你手里是图中的两张六万加一张 Joker。这组算成立吗？",
                "tw": "目標行（教學樣例）要求一組三張六萬。你的手裡是圖中的兩張六萬加一張 Joker。這組算成立嗎？",
                "en": "Your line (teaching sample) needs a pung of 6 characters. You hold the two real 6s and a joker shown. Does the set count?"
              },
              "options": [
                {
                  "id": "a",
                  "label": {
                    "zh": "成立：Joker 在这组里代替第三张六万",
                    "tw": "成立：Joker 在這組裡代替第三張六萬",
                    "en": "Yes—the joker stands for the third 6 of characters"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "zh": "不成立：pung 必须三张都是真牌",
                    "tw": "不成立：pung 必須三張都是真牌",
                    "en": "No—a pung requires three real tiles"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "zh": "不成立：Joker 只能代替花牌",
                    "tw": "不成立：Joker 只能代替花牌",
                    "en": "No—jokers only substitute for flowers"
                  }
                }
              ],
              "answerId": "a",
              "explanation": {
                "zh": "Joker 可以代替同牌组中任意一张牌；成胡核对时，Joker 按它所在组要求的牌来读。",
                "tw": "Joker 可以代替同牌組中任意一張牌；成胡核對時，Joker 按它所在組要求的牌來讀。",
                "en": "A joker stands in for any tile its set requires; at verification it reads as exactly that tile."
              }
            },
            {
              "id": "am-5-1-b",
              "type": "choice",
              "tiles": [
                "s4",
                "s4",
                "j1"
              ],
              "prompt": {
                "zh": "目标行需要一个四条对子（教学样例）。你手里只有一张四条，能否用『一张真牌 + 一张 Joker』充当对子？",
                "tw": "目標行需要一個四條對子（教學樣例）。你的手裡只有一張四條，能否用『一張真牌 + 一張 Joker』充當對子？",
                "en": "Your line needs a pair of 4 bamboo. May you use one real 4 plus a joker as the pair?"
              },
              "options": [
                {
                  "id": "a",
                  "label": {
                    "zh": "可以，Joker 是百搭，哪里都能放",
                    "tw": "可以，Joker 是百搭，哪裡都能放",
                    "en": "Sure—a joker is wild and fits anywhere"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "zh": "不可以：单张与对子的槽位必须真牌，Joker 不能代替",
                    "tw": "不可以：單張與對子的槽位必須真牌，Joker 不能代替",
                    "en": "No—single and pair slots require real tiles"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "zh": "可以，但成胡时要向三家各付一次",
                    "tw": "可以，但成胡時要向三家各付一次",
                    "en": "Yes, but it costs a payment to each player"
                  }
                }
              ],
              "answerId": "b",
              "explanation": {
                "zh": "Joker 只服务三张及以上的同牌组；single 和 pair 永远要求真牌——这是新手最常见的误区。",
                "tw": "Joker 只服務三張及以上的同牌組；single 和 pair 永遠要求真牌——這是新手最常見的誤區。",
                "en": "Jokers serve only sets of three or more; singles and pairs always demand real tiles—the most common beginner mistake."
              }
            },
            {
              "id": "am-5-1-c",
              "type": "choice",
              "tiles": [
                "p8",
                "p8",
                "p8",
                "j1"
              ],
              "prompt": {
                "zh": "图中是一组已经明示的八筒 kong（三张真牌 + 一张 Joker）。关于它的正确说法是？",
                "tw": "圖中是一組已經明示的八筒 kong（三張真牌 + 一張 Joker）。關於它的正確說法是？",
                "en": "Shown is an exposed kong of 8 dots (three real tiles plus a joker). Which statement is correct?"
              },
              "options": [
                {
                  "id": "a",
                  "label": {
                    "zh": "不合法：kong 必须四张真牌",
                    "tw": "不合法：kong 必須四張真牌",
                    "en": "Invalid—a kong needs four real tiles"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "zh": "不合法：Joker 不能进入 kong",
                    "tw": "不合法：Joker 不能進入 kong",
                    "en": "Invalid—jokers never join kongs"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "zh": "合法：Joker 占这组里第四张八筒的位置",
                    "tw": "合法：Joker 佔這組裡第四張八筒的位置",
                    "en": "Legal—the joker fills the fourth 8-dot position"
                  }
                }
              ],
              "answerId": "c",
              "explanation": {
                "zh": "pung、kong、quint 都允许 Joker 参与；这个组由 Joker 顶上第四张八筒的位置，读数仍是四张八筒。",
                "tw": "pung、kong、quint 都允許 Joker 參與；這個組由 Joker 頂上第四張八筒的位置，讀數仍是四張八筒。",
                "en": "Pungs, kongs, and quints all accept jokers; here the joker reads as the fourth 8-dot, so the set remains a kong of 8 dots."
              }
            }
          ]
        },
        {
          "id": "am-5-2",
          "title": {
            "zh": "Joker 不传也不回收",
            "tw": "Joker 不傳也不回收",
            "en": "Jokers Don't Pass or Return"
          },
          "intro": {
            "zh": "两条保护 Joker 的硬规则：任何一轮 Charleston（含盲传与 courtesy pass）都不得主动传出 Joker；Joker 一旦进入弃牌河，其他玩家不能把它叫回。以下牌型均为教学样例，不是 NMJL 年度牌型。",
            "tw": "兩條保護 Joker 的硬規則：任何一輪 Charleston（含盲傳與 courtesy pass）都不得主動傳出 Joker；Joker 一旦進入棄牌河，其他玩家不能把它叫回。以下牌型均為教學樣例，不是 NMJL 年度牌型。",
            "en": "Two hard rules protect jokers: none may be passed in any step of either Charleston round (blind or courtesy pass included), and a joker in the discard pile cannot be called back. All examples are teaching samples, not NMJL card hands."
          },
          "questions": [
            {
              "id": "am-5-2-a",
              "type": "choice",
              "tiles": [
                "j1",
                "j1",
                "m7"
              ],
              "prompt": {
                "zh": "Charleston 你每步要传 3 张。手里能动的牌只剩图中这些（其余都已入组）。关于传 Joker，正确的是？",
                "tw": "Charleston 你每步要傳 3 張。手裡能動的牌只剩圖中這些（其餘都已入組）。關於傳 Joker，正確的是？",
                "en": "Each Charleston step passes 3 tiles, and your spare tiles are those shown. About passing jokers, which is correct?"
              },
              "options": [
                {
                  "id": "a",
                  "label": {
                    "zh": "可以传 1 张 Joker，只要口头声明",
                    "tw": "可以傳 1 張 Joker，只要口頭聲明",
                    "en": "One joker may ride along if you announce it"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "zh": "Joker 在任何一步都不能主动传出",
                    "tw": "Joker 在任何一步都不能主動傳出",
                    "en": "A joker may never be passed on purpose, in any step"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "zh": "只有盲传那一步允许夹带 Joker",
                    "tw": "只有盲傳那一步允許夾帶 Joker",
                    "en": "Only the blind pass may include a joker"
                  }
                }
              ],
              "answerId": "b",
              "explanation": {
                "zh": "两轮共六步（含 courtesy pass）一律不得主动传出 Joker；传不满 3 张非 Jokers 时，宁可调整组型也要留下 Joker。",
                "tw": "兩輪共六步（含 courtesy pass）一律不得主動傳出 Joker；傳不滿 3 張非 Jokers 時，寧可調整組型也要留下 Joker。",
                "en": "All six steps of both rounds—courtesy included—ban passing a joker; reshuffle your spare tiles rather than surrender one."
              }
            },
            {
              "id": "am-5-2-b",
              "type": "choice",
              "tiles": [
                "j1",
                "m2",
                "p5"
              ],
              "prompt": {
                "zh": "你不小心弃出了图中的 Joker，下一家很想要它。他可以？",
                "tw": "你不小心棄出了圖中的 Joker，下一家很想要它。他可以？",
                "en": "You accidentally discard the joker shown, and the next player wants it. What may they do?"
              },
              "options": [
                {
                  "id": "a",
                  "label": {
                    "zh": "不能把它叫回：弃出的 Joker 只能留在弃牌河直到重洗牌",
                    "tw": "不能把它叫回：棄出的 Joker 只能留在棄牌河直到重洗牌",
                    "en": "Nothing—a discarded joker stays in the pool until the tiles are reshuffled"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "zh": "随时喊『拿 Joker』把它取回手",
                    "tw": "隨時喊『拿 Joker』把它取回手",
                    "en": "Call 『joker grab』 and take it back at any time"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "zh": "用它替换任意公开组里的真牌",
                    "tw": "用它替換任意公開組裡的真牌",
                    "en": "Use it to swap out a real tile from any exposed set"
                  }
                }
              ],
              "answerId": "a",
              "explanation": {
                "zh": "弃出的 Joker 不能被叫回；所以每次弃牌前务必检查有没有夹带 Joker。",
                "tw": "棄出的 Joker 不能被叫回；所以每次棄牌前務必檢查有沒有夾帶 Joker。",
                "en": "A discarded joker is locked into the pool—so always check every discard for a stray joker."
              }
            },
            {
              "id": "am-5-2-c",
              "type": "tile-pick",
              "tiles": [
                "p9",
                "m2",
                "j1",
                "s5",
                "m2",
                "z7",
                "f3",
                "p2"
              ],
              "context": {
                "zh": "Joker 只能进入三张及以上的同牌组；花牌不是数牌也不是字牌，单张与对子槽也不能用 Joker。",
                "tw": "Joker 只能進入三張及以上的同牌組；花牌不是數牌也不是字牌，單張與對子槽也不能用 Joker。",
                "en": "A joker joins only sets of three or more identical tiles; flowers are neither number nor honor tiles, and single/pair slots reject jokers."
              },
              "prompt": {
                "zh": "目标行（教学样例）需要一组三张二万。请选出恰好能组成这组、且只含一张 Joker 的 3 张牌。",
                "tw": "目標行（教學樣例）需要一組三張二萬。請選出恰好能組成這組、且只含一張 Joker 的 3 張牌。",
                "en": "Your line (teaching sample) needs a pung of 2 characters. Pick the 3 tiles that form it using exactly one joker."
              },
              "selectionCount": 3,
              "answerIndexes": [
                1,
                2,
                4
              ],
              "explanation": {
                "zh": "两张二万 + 一张 Joker 正好构成三张同牌组；手里没有第三张二万，花牌与单张都代替不了。",
                "tw": "兩張二萬 + 一張 Joker 正好構成三張同牌組；手裡沒有第三張二萬，花牌與單張都代替不了。",
                "en": "Two 2-characters plus the joker complete the pung; there is no third real 2, and flowers or unrelated singles cannot fill in."
              }
            }
          ]
        },
        {
          "id": "am-5-3",
          "title": {
            "zh": "换 Joker 的时机与操作",
            "tw": "換 Joker 的時機與操作",
            "en": "The Joker Exchange"
          },
          "intro": {
            "zh": "公开（已明示）组里的 Joker，你可以在自己的回合用与之完全对应的真牌把它换回手：把真牌放上该组，取走 Joker。交换不是鸣牌，不改变组的构成，也不需要别人同意。示例均为教学样例，不是 NMJL 年度牌型。",
            "tw": "公開（已明示）組裡的 Joker，你可以在自己的回合用與之完全對應的真牌把它換回手：把真牌放上該組，取走 Joker。交換不是鳴牌，不改變組的構成，也不需要別人同意。示例均為教學樣例，不是 NMJL 年度牌型。",
            "en": "A joker in an exposed set may be taken on your turn by placing the exact real tile it represents onto that set. The exchange is not a call, never changes the set's composition, and needs no one's consent. All examples are teaching samples, not NMJL card hands."
          },
          "questions": [
            {
              "id": "am-5-3-a",
              "type": "sequence",
              "prompt": {
                "zh": "把一次合法 Joker 交换的三个步骤按顺序排列。",
                "tw": "把一次合法 Joker 交換的三個步驟按順序排列。",
                "en": "Order the three steps of a legal joker exchange."
              },
              "options": [
                {
                  "id": "a",
                  "label": {
                    "zh": "把对应的那张真牌放到 Joker 所在的组上",
                    "tw": "把對應的那張真牌放到 Joker 所在的組上",
                    "en": "Place the matching real tile onto the joker's set"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "zh": "在自己的回合（通常在摸牌之后）宣布换 Joker",
                    "tw": "在自己的回合（通常在摸牌之後）宣佈換 Joker",
                    "en": "On your own turn (usually after drawing), announce the exchange"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "zh": "把换出的 Joker 收进手牌",
                    "tw": "把換出的 Joker 收進手牌",
                    "en": "Take the freed joker into your hand"
                  }
                }
              ],
              "answerOrder": [
                "b",
                "a",
                "c"
              ],
              "explanation": {
                "zh": "顺序：自己回合宣布 → 放上真牌 → 取走 Joker。在别人回合或自己弃牌之后再动手最容易引发争议。",
                "tw": "順序：自己回合宣佈 → 放上真牌 → 取走 Joker。在別人回合或自己棄牌之後再動手最容易引發爭議。",
                "en": "Your turn, announce, place the tile, take the joker—acting on someone else's turn or after discarding invites disputes."
              }
            },
            {
              "id": "am-5-3-b",
              "type": "choice",
              "tiles": [
                "s7",
                "s7",
                "s7",
                "j1"
              ],
              "prompt": {
                "zh": "你自己早前明示的组是『七条 kong（三真 + Joker）』。现在你摸到一张七条，可以怎么做？",
                "tw": "你自己早前明示的組是『七條 kong（三真 + Joker）』。現在你摸到一張七條，可以怎麼做？",
                "en": "Your own exposed kong of 7 bamboo (three real + joker) sits on the table. You just draw a 7 bamboo. What may you do?"
              },
              "options": [
                {
                  "id": "a",
                  "label": {
                    "zh": "用这张七条换回该组的 Joker；组仍以四张七条 kong 保留",
                    "tw": "用這張七條換回該組的 Joker；組仍以四張七條 kong 保留",
                    "en": "Exchange the 7 for the joker; the set remains a kong of four 7s"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "zh": "换回 Joker 后把这个组拆成 pung 加单张",
                    "tw": "換回 Joker 後把這個組拆成 pung 加單張",
                    "en": "Break the set into a pung plus a single after the exchange"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "zh": "把七条弃掉，Joker 自动回到手里",
                    "tw": "把七條棄掉，Joker 自動回到手裡",
                    "en": "Discard the 7 and the joker returns automatically"
                  }
                }
              ],
              "answerId": "a",
              "explanation": {
                "zh": "换入的真牌必须正好是该组所缺的那张；交换后组的构成与读数完全不变，只是 Joker 换成真牌。已明示的组不能借交换之机重组。",
                "tw": "換入的真牌必須正好是該組所缺的那張；交換後組的構成與讀數完全不變，只是 Joker 換成真牌。已明示的組不能借交換之機重組。",
                "en": "The incoming tile must be exactly the one the joker represents; the set stays intact—exposed sets cannot be rearranged during an exchange."
              }
            },
            {
              "id": "am-5-3-c",
              "type": "choice",
              "tiles": [
                "j1",
                "m3",
                "p6",
                "z2"
              ],
              "prompt": {
                "zh": "关于换 Joker 的时机与条件，正确的是？",
                "tw": "關於換 Joker 的時機與條件，正確的是？",
                "en": "About when and how a joker exchange may happen, which is correct?"
              },
              "options": [
                {
                  "id": "a",
                  "label": {
                    "zh": "任何玩家弃牌后都可以顺手交换",
                    "tw": "任何玩家棄牌後都可以順手交換",
                    "en": "Any player may exchange right after every discard"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "zh": "只有庄家回合允许交换",
                    "tw": "只有莊家回合允許交換",
                    "en": "Only the dealer's turn permits exchanges"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "zh": "只能在自己回合进行，且手里要有该组对应的那张真牌",
                    "tw": "只能在自己回合進行，且手裡要有該組對應的那張真牌",
                    "en": "Only on your own turn, holding the exact real tile the set needs"
                  }
                }
              ],
              "answerId": "c",
              "explanation": {
                "zh": "交换是回合内的个人动作：必须轮到你，并且你持有与 Joker 所在组完全对应的真牌；与别人弃了什么牌无关。",
                "tw": "交換是回合內的個人動作：必須輪到你，並且你持有與 Joker 所在組完全對應的真牌；與別人棄了什麼牌無關。",
                "en": "The exchange is a personal action on your turn, requiring the exact matching tile in hand—what others discarded is irrelevant."
              }
            }
          ]
        },
        {
          "id": "am-5-4",
          "title": {
            "zh": "含 Joker 的综合判断",
            "tw": "含 Joker 的綜合判斷",
            "en": "Working With Jokers"
          },
          "intro": {
            "zh": "把规则合起来用。注意：换 Joker 针对的是『公开组』，与你自己的目标行是否标 C（隐手）无关——即使你在做隐手牌型，也可以在自己回合交换公开组里的 Joker，换回后手牌照常保持隐蔽。示例均为教学样例，不是 NMJL 年度牌型。",
            "tw": "把規則合起來用。注意：換 Joker 針對的是『公開組』，與你自己的目標行是否標 C（隱手）無關——即使你在做隱手牌型，也可以在自己回合交換公開組裡的 Joker，換回後手牌照常保持隱蔽。示例均為教學樣例，不是 NMJL 年度牌型。",
            "en": "Putting the rules together. Note: the joker exchange acts on exposed sets and does not conflict with a concealed (C) target hand—you may exchange a joker on your turn and keep your hand hidden. All examples are teaching samples, not NMJL card hands."
          },
          "questions": [
            {
              "id": "am-5-4-a",
              "type": "choice",
              "tiles": [
                "p5",
                "p5",
                "j1",
                "m5",
                "s8",
                "z4"
              ],
              "prompt": {
                "zh": "目标行（教学样例）还需要：5 筒同牌组（图中已带 Joker 完成）、三张八条、一个五万对子。对家弃出五万，你叫它合法吗？",
                "tw": "目標行（教學樣例）還需要：五筒同牌組（圖中已帶 Joker 完成）、三張八條、一個五萬對子。對家棄出五萬，你叫它合法嗎？",
                "en": "Your line (teaching sample) still needs the 5-dot set (shown complete with joker), three 8 bamboo, and a pair of 5 characters. The opponent discards a 5 character—may you call it?"
              },
              "options": [
                {
                  "id": "a",
                  "label": {
                    "zh": "合法：五万正是目标行需要的牌",
                    "tw": "合法：五萬正是目標行需要的牌",
                    "en": "Yes—it is a tile your line needs"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "zh": "不合法：它只补对子位，又不是让你当场成胡（八条组还差两张）",
                    "tw": "不合法：它只補對子位，又不是讓你當場成胡（八條組還差兩張）",
                    "en": "No—it only fills a pair slot and does not complete the win (the 8-bamboo set is still two tiles short)"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "zh": "合法：手里有 Joker 时叫什么都可以",
                    "tw": "合法：手裡有 Joker 時叫什麼都可以",
                    "en": "Yes—a joker in hand unlocks every call"
                  }
                }
              ],
              "answerId": "b",
              "explanation": {
                "zh": "叫弃牌必须当场完成一个可明示的三张同牌组，或直接完成 Mah Jongg。补对子既不能单独明示、也不成胡，不能叫。",
                "tw": "叫棄牌必須當場完成一個可明示的三張同牌組，或直接完成 Mah Jongg。補對子既不能單獨明示、也不成胡，不能叫。",
                "en": "A call must complete an exposed same-tile set or the whole win on the spot; a pair-filling pickup that wins nothing cannot be called."
              }
            },
            {
              "id": "am-5-4-b",
              "type": "choice",
              "tiles": [
                "j1",
                "s3",
                "s3",
                "s3"
              ],
              "prompt": {
                "zh": "你正在做标 C（隐手）的目标行（教学样例）。上家面前有一个含 Joker 的公开组，你手里恰好有该组对应的真牌。你能否换那个 Joker？",
                "tw": "你正在做標 C（隱手）的目標行（教學樣例）。上家面前有一個含 Joker 的公開組，你的手裡恰好有該組對應的真牌。你能否換那個 Joker？",
                "en": "You are playing a C (concealed) line (teaching sample). The previous player has an exposed set containing a joker, and you hold its real tile. May you take that joker?"
              },
              "options": [
                {
                  "id": "a",
                  "label": {
                    "zh": "不能：做 C 隐手期间完全禁止任何 Joker 交换",
                    "tw": "不能：做 C 隱手期間完全禁止任何 Joker 交換",
                    "en": "No—a concealed hand bans all joker exchanges"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "zh": "能：交换针对公开组进行，在你的回合完成，你的手牌依然保持隐手",
                    "tw": "能：交換針對公開組進行，在你的回合完成，你的手牌依然保持隱手",
                    "en": "Yes—the exchange acts on the exposed set on your turn; your hand stays concealed"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "zh": "能，但交换后必须立刻整手明示",
                    "tw": "能，但交換後必須立刻整手明示",
                    "en": "Yes, but you must expose your whole hand afterwards"
                  }
                }
              ],
              "answerId": "b",
              "explanation": {
                "zh": "Joker 交换只触碰桌上的公开组，不要求你放弃隐手身份；换回的 Joker 收进手牌，C 牌型继续隐蔽直到宣布成胡。",
                "tw": "Joker 交換只觸碰桌上的公開組，不要求你放棄隱手身份；換回的 Joker 收進手牌，C 牌型繼續隱蔽直到宣佈成胡。",
                "en": "The exchange touches only the exposed set; the joker joins your still-concealed hand, and C status lasts until the win is declared."
              }
            },
            {
              "id": "am-5-4-c",
              "type": "tile-pick",
              "tiles": [
                "p7",
                "m4",
                "z6",
                "m3",
                "s1",
                "f2",
                "j1"
              ],
              "context": {
                "zh": "某公开组是三张三万，其中一张是 Joker。换 Joker 必须放上与该组完全对应的真牌，不能用别的牌凑数。",
                "tw": "某公開組是三張三萬，其中一張是 Joker。換 Joker 必須放上與該組完全對應的真牌，不能用別的牌湊數。",
                "en": "An exposed set is a 3-character pung containing a joker; the exchange tile must match that set exactly."
              },
              "prompt": {
                "zh": "你手里有图中 7 张牌，请选出唯一能完成这次交换的一张。",
                "tw": "你的手裡有圖中 7 張牌，請選出唯一能完成這次交換的一張。",
                "en": "From the 7 tiles shown, pick the single tile that can complete this exchange."
              },
              "selectionCount": 1,
              "answerIndexes": [
                3
              ],
              "explanation": {
                "zh": "只有三万能顶上该组 Joker 的位置；四条、七筒等与组不符，Joker 也不能用来换 Joker。",
                "tw": "只有三萬能頂上該組 Joker 的位置；四條、七筒等與組不符，Joker 也不能用來換 Joker。",
                "en": "Only the 3 of characters matches the set; other tiles fail, and a joker cannot buy back another joker."
              }
            }
          ]
        }
      ]
    },
    {
      "id": "am-6",
      "title": {
        "zh": "隐手、单张对子与失效",
        "tw": "隱手、單張對子與失效",
        "en": "Concealed Hands, Singles and Pairs, and Dead Hands"
      },
      "desc": {
        "zh": "标 C 的牌型在成牌前不公开任何组，末张成胡可以叫；单张与对子不能为了普通搭组叫弃牌；判断『失效』必须核对完整信息，别凭猜测武断宣布对手失效。示例均为教学样例，不是 NMJL 年度牌型。",
        "tw": "標 C 的牌型在成牌前不公開任何組，末張成胡可以叫；單張與對子不能為了普通搭組叫棄牌；判斷『失效』必須核對完整資訊，別憑猜測武斷宣佈對手失效。示例均為教學樣例，不是 NMJL 年度牌型。",
        "en": "A C-marked line keeps every set hidden until Mah Jongg, though the final winning discard may still be called; singles and pairs cannot be called for ordinary set-building; and a dead-hand ruling requires complete information, never guesswork. All examples are teaching samples, not NMJL card hands."
      },
      "lessons": [
        {
          "id": "am-6-1",
          "title": {
            "zh": "C 隐手牌型",
            "tw": "C 隱手牌型",
            "en": "The C Concealed Hand"
          },
          "intro": {
            "zh": "年度卡上标注 C 的行表示 concealed：这手牌的所有组在宣布 Mah Jongg 之前都不明示——中途不鸣牌、不展示。唯一例外是最后一张：正好完成整行的弃牌可以叫，叫到立即整手明示。以下牌型均为教学样例，不是 NMJL 年度牌型。",
            "tw": "年度卡上標註 C 的行表示 concealed：這手牌的所有組在宣佈 Mah Jongg 之前都不明示——中途不鳴牌、不展示。唯一例外是最後一張：正好完成整行的棄牌可以叫，叫到立即整手明示。以下牌型均為教學樣例，不是 NMJL 年度牌型。",
            "en": "A line marked C is concealed: none of its sets may be exposed before Mah Jongg—no mid-hand calls or displays. The lone exception is the final tile: a discard that completes the line may be called, exposing the whole hand at once. All examples are teaching samples, not NMJL card hands."
          },
          "questions": [
            {
              "id": "am-6-1-a",
              "type": "choice",
              "tiles": [
                "z2",
                "z2",
                "z2",
                "s5"
              ],
              "prompt": {
                "zh": "年度卡上某行标注 C。它的正确含义是？",
                "tw": "年度卡上某行標註 C。它的正確含義是？",
                "en": "A line on the yearly card is marked C. What does that mean?"
              },
              "options": [
                {
                  "id": "a",
                  "label": {
                    "zh": "宣布 Mah Jongg 之前，这手牌的所有组都不得明示",
                    "tw": "宣佈 Mah Jongg 之前，這手牌的所有組都不得明示",
                    "en": "No set of this hand may be exposed before the win is declared"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "zh": "整手必须全部自摸，连最后一张也不能叫弃牌",
                    "tw": "整手必須全部自摸，連最後一張也不能叫棄牌",
                    "en": "Every tile must be self-drawn; even the last discard cannot be called"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "zh": "可以中途明示 pung，只是不能明示顺子",
                    "tw": "可以中途明示 pung，只是不能明示順子",
                    "en": "Pungs may be exposed mid-hand; only runs must stay hidden"
                  }
                }
              ],
              "answerId": "a",
              "explanation": {
                "zh": "C 限制的是『明示』：中途不鸣牌、不展示。但末张成胡的弃牌仍可叫，叫到立即整手明示——所以 b 把限制说过头了。",
                "tw": "C 限制的是『明示』：中途不鳴牌、不展示。但末張成胡的棄牌仍可叫，叫到立即整手明示——所以 b 把限制說過頭了。",
                "en": "C forbids exposure during play; the final winning discard may still be called, so option b overstates the ban."
              }
            },
            {
              "id": "am-6-1-b",
              "type": "choice",
              "tiles": [
                "m9",
                "m9",
                "p2",
                "s6"
              ],
              "prompt": {
                "zh": "你在做 C 行。刚摸进第三张九万（加上图中两张即成三张）。正确做法是？",
                "tw": "你在做 C 行。剛摸進第三張九萬（加上圖中兩張即成三張）。正確做法是？",
                "en": "You are playing a C hand and have just drawn the third 9 of characters (with the two shown). What is correct?"
              },
              "options": [
                {
                  "id": "a",
                  "label": {
                    "zh": "立即明示九万 pung，让三家看见进度",
                    "tw": "立即明示九萬 pung，讓三家看見進度",
                    "en": "Expose the 9-character pung at once to show progress"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "zh": "保持隐手：组留在手牌里，直到宣布 Mah Jongg 才整手明示",
                    "tw": "保持隱手：組留在手牌裡，直到宣佈 Mah Jongg 才整手明示",
                    "en": "Keep it concealed on the rack until the whole hand is revealed at Mah Jongg"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "zh": "明示 pung 后弃一张，与鸣牌同例",
                    "tw": "明示 pung 後棄一張，與鳴牌同例",
                    "en": "Expose the pung and discard, exactly like a call"
                  }
                }
              ],
              "answerId": "b",
              "explanation": {
                "zh": "C 行的组（包括自摸凑齐的同牌组）一律不明示；一明示就泄露牌路，也破坏了该行『隐手』的条件。",
                "tw": "C 行的組（包括自摸湊齊的同牌組）一律不明示；一明示就洩漏牌路，也破壞了該行『隱手』的條件。",
                "en": "Every set of a C hand—even a self-completed pung—stays hidden; exposing one leaks your line and breaks the concealed condition."
              }
            },
            {
              "id": "am-6-1-c",
              "type": "choice",
              "tiles": [
                "p1",
                "p1",
                "j1",
                "f5"
              ],
              "prompt": {
                "zh": "关于 C 隐手牌与 Joker 交换，下列说法正确的是？",
                "tw": "關於 C 隱手牌與 Joker 交換，下列說法正確的是？",
                "en": "About concealed (C) hands and joker exchanges, which statement is correct?"
              },
              "options": [
                {
                  "id": "a",
                  "label": {
                    "zh": "做 C 期间不能交换任何 Joker，否则隐手失效",
                    "tw": "做 C 期間不能交換任何 Joker，否則隱手失效",
                    "en": "A C hand may never exchange a joker, or it dies"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "zh": "只有庄家可以做 C 行",
                    "tw": "只有莊家可以做 C 行",
                    "en": "Only the dealer may play a C line"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "zh": "C 隐手不妨碍你在自己回合交换公开组里的 Joker——交换只碰别人的明示组，你的手牌照样不出声",
                    "tw": "C 隱手不妨礙你在自己回合交換公開組裡的 Joker——交換只碰別人的明示組，你的手牌照樣不出聲",
                    "en": "C status does not block exchanges: the exchange touches only the exposed set while your hand stays hidden"
                  }
                }
              ],
              "answerId": "c",
              "explanation": {
                "zh": "交换只触碰桌上的公开组；你自己的手牌（包括 C 行的组）仍然不明示。别把『隐手』误读成『禁换 Joker』。",
                "tw": "交換只觸碰桌上的公開組；你自己的手牌（包括 C 行的組）仍然不明示。別把『隱手』誤讀成『禁換 Joker』。",
                "en": "Only exposed sets are touched by an exchange; your concealed hand stays hidden. Do not misread C as a joker-exchange ban."
              }
            }
          ]
        },
        {
          "id": "am-6-2",
          "title": {
            "zh": "单张与对子的叫牌限制",
            "tw": "單張與對子的叫牌限制",
            "en": "Calling for Singles and Pairs"
          },
          "intro": {
            "zh": "单张（single）与对子（pair）是年度卡上的合法槽位，但不能为了搭组而叫弃牌：它们只能靠自己摸进，或来自 Charleston 传来的牌。例外仍是那张直接完成 Mah Jongg 的牌——哪怕它填的正是对子或单张的槽。示例均为教学样例，不是 NMJL 年度牌型。",
            "tw": "單張（single）與對子（pair）是年度卡上的合法槽位，但不能為了搭組而叫棄牌：它們只能靠自己摸進，或來自 Charleston 傳來的牌。例外仍是那張直接完成 Mah Jongg 的牌——哪怕它填的正是對子或單張的槽。示例均為教學樣例，不是 NMJL 年度牌型。",
            "en": "Singles and pairs are valid card slots but cannot be called while building—draw them yourself or take them from the Charleston. The exception remains the tile that completes Mah Jongg directly, even when it fills a single or pair slot. Examples are teaching samples, not NMJL card hands."
          },
          "questions": [
            {
              "id": "am-6-2-a",
              "type": "choice",
              "tiles": [
                "z1",
                "z1",
                "s9"
              ],
              "prompt": {
                "zh": "目标行（教学样例）需要一个东风对子。你手里有一张东风，对家恰好弃出一张东风。你能否喊叫并明示这个对子？",
                "tw": "目標行（教學樣例）需要一個東風對子。你的手裡有一張東風，對家恰好棄出一張東風。你能否喊叫並明示這個對子？",
                "en": "Your line (teaching sample) needs a pair of East winds. You hold one; the opposite player discards one. May you call and expose the pair?"
              },
              "options": [
                {
                  "id": "a",
                  "label": {
                    "zh": "可以，对子也是卡上槽位",
                    "tw": "可以，對子也是卡上槽位",
                    "en": "Yes—a pair is a valid slot on the card"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "zh": "可以，但必须在摸牌之前喊",
                    "tw": "可以，但必須在摸牌之前喊",
                    "en": "Yes, if announced before drawing"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "zh": "不可以：对子与单张不能靠叫弃牌明示；只有当这张牌当场让你成胡时才能叫",
                    "tw": "不可以：對子與單張不能靠叫棄牌明示；只有當這張牌當場讓你成胡時才能叫",
                    "en": "No—pairs and singles are not callable; only a tile that wins on the spot may be claimed"
                  }
                }
              ],
              "answerId": "c",
              "explanation": {
                "zh": "补对子不产生鸣牌资格：鸣牌仅限三张及以上同牌组。末张点胡是另一回事——那时叫的是『Mah Jongg』，不是『对子组』。",
                "tw": "補對子不產生鳴牌資格：鳴牌僅限三張及以上同牌組。末張點胡是另一回事——那時叫的是『Mah Jongg』，不是『對子組』。",
                "en": "Filling a pair grants no call right—only same-tile sets qualify. Winning on the discard is different: you call Mah Jongg itself, not the pair."
              }
            },
            {
              "id": "am-6-2-b",
              "type": "choice",
              "tiles": [
                "s2",
                "s2",
                "s2",
                "p7"
              ],
              "prompt": {
                "zh": "你只差一张七条凑对即可成胡（其余组已完成，教学样例）。上家弃出七条，你该怎么办？",
                "tw": "你只差一張七條湊對即可成胡（其餘組已完成，教學樣例）。上家棄出七條，你該怎麼辦？",
                "en": "You need exactly one more 7 bamboo to pair up and win (everything else is done; teaching sample). The previous player discards a 7 bamboo. What now?"
              },
              "options": [
                {
                  "id": "a",
                  "label": {
                    "zh": "不能叫，只能等自己摸七条",
                    "tw": "不能叫，只能等自己摸七條",
                    "en": "No call—wait to self-draw the 7"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "zh": "立即叫这张七条宣布 Mah Jongg，整手明示",
                    "tw": "立即叫這張七條宣佈 Mah Jongg，整手明示",
                    "en": "Call it, announce Mah Jongg, and expose the whole hand"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "zh": "叫七条并明示对子，等下一轮再胡",
                    "tw": "叫七條並明示對子，等下一輪再胡",
                    "en": "Call and expose the pair, then win next turn"
                  }
                }
              ],
              "answerId": "b",
              "explanation": {
                "zh": "这正是末张例外：这张弃牌当场完成整行，对子槽也照样能叫——叫完必须马上推牌宣告，不能叫了再等。",
                "tw": "這正是末張例外：這張棄牌當場完成整行，對子槽也照樣能叫——叫完必須馬上推牌宣告，不能叫了再等。",
                "en": "This is the winning-tile exception: the pair slot is filled by a call because the tile completes the win—announce and expose on the spot."
              }
            },
            {
              "id": "am-6-2-c",
              "type": "tile-pick",
              "tiles": [
                "m4",
                "p2",
                "z4",
                "j1",
                "p2",
                "s8",
                "f5"
              ],
              "context": {
                "zh": "目标行（教学样例）包含：单张西风 + 二筒对子 + 两个三张同牌组。单张与对子的槽位必须由真牌占据，Joker 帮不上忙。",
                "tw": "目標行（教學樣例）包含：單張西風 + 二筒對子 + 兩個三張同牌組。單張與對子的槽位必須由真牌佔據，Joker 幫不上忙。",
                "en": "The sample line includes a single West wind and a pair of 2 dots among its slots; jokers cannot fill single or pair slots."
              },
              "prompt": {
                "zh": "请选出这手目标行中『必须是真牌、不能用 Joker 代替』的 3 张：题面指定的单张与对子。",
                "tw": "請選出這手目標行中『必須是真牌、不能用 Joker 代替』的 3 張：題面指定的單張與對子。",
                "en": "Pick the 3 tiles—the named single and pair—that must be real tiles."
              },
              "selectionCount": 3,
              "answerIndexes": [
                1,
                2,
                4
              ],
              "explanation": {
                "zh": "西风单张 + 两张二筒 = 三个必须真牌的槽位；只有三张及以上同牌组里的位置才允许 Joker 参与。",
                "tw": "西風單張 + 兩張二筒 = 三個必須真牌的槽位；只有三張及以上同牌組裡的位置才允許 Joker 參與。",
                "en": "The West single plus the two 2-dot pair tiles are the three all-real slots; only same-tile sets accept jokers."
              }
            }
          ]
        },
        {
          "id": "am-6-3",
          "title": {
            "zh": "失效的边界",
            "tw": "失效的邊界",
            "en": "When a Hand Is Dead"
          },
          "intro": {
            "zh": "判断失效要核对可见的明示组、弃牌及牌型卡；成牌时总共应有 14 张，花牌也计入其中。不能仅凭猜测对手的隐蔽手牌宣布失效。示例均为教学样例，不是 NMJL 年度牌型。",
            "tw": "判斷失效要核對可見的明示組、棄牌及牌型卡；成牌時總共應有 14 張，花牌也計入其中。不能僅憑猜測對手的隱蔽手牌宣佈失效。示例均為教學樣例，不是 NMJL 年度牌型。",
            "en": "A dead-hand challenge must rest on visible exposures, discards and the card. A winning hand totals 14 tiles, including flowers. Do not challenge based on guesses about concealed tiles. Examples are teaching samples, not NMJL card hands."
          },
          "questions": [
            {
              "id": "am-6-3-a",
              "type": "sequence",
              "prompt": {
                "zh": "有人喊停、主张对手『失效』。把核实的正确步骤按顺序排列。",
                "tw": "有人喊停、主張對手『失效』。把核實的正確步驟按順序排列。",
                "en": "A player is challenged as dead. Order the correct verification steps."
              },
              "options": [
                {
                  "id": "a",
                  "label": {
                    "zh": "核对该手的目标行与每个明示组、牌数是否一致（含 Joker 的读法）",
                    "tw": "核對該手的目標行與每個明示組、牌數是否一致（含 Joker 的讀法）",
                    "en": "Check the declared line against every exposed set, joker readings, and tile counts"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "zh": "先听完双方陈述，收集全部已明示的信息",
                    "tw": "先聽完雙方陳述，收集全部已明示的資訊",
                    "en": "First hear both sides and gather all exposed information"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "zh": "信息完整且矛盾确实成立时，才按规则判定失效或继续",
                    "tw": "資訊完整且矛盾確實成立時，才按規則判定失效或繼續",
                    "en": "Rule it dead only when the complete picture truly shows a contradiction"
                  }
                }
              ],
              "answerOrder": [
                "b",
                "a",
                "c"
              ],
              "explanation": {
                "zh": "先收集完整信息，再对照核查，最后才下判定。凭半截信息喊失效最容易引发争议，隐手牌局尤其如此。",
                "tw": "先收集完整資訊，再對照核查，最後才下判定。憑半截資訊喊失效最容易引發爭議，隱手牌局尤其如此。",
                "en": "Gather the full picture, compare it against the card, then rule—premature dead calls cause the most fights, especially with concealed hands."
              }
            },
            {
              "id": "am-6-3-b",
              "type": "choice",
              "tiles": [
                "m5",
                "m5",
                "m5",
                "p8",
                "p8",
                "p8"
              ],
              "prompt": {
                "zh": "对手中途明示了图中两组（三张五万、三张八筒）。你背了背卡，觉得『没有这种两组的行』，于是喊他失效。你漏掉了什么？",
                "tw": "對手中途明示了圖中兩組（三張五萬、三張八筒）。你背了背卡，覺得『沒有這種兩組的行』，於是喊他失效。你漏掉了什麼？",
                "en": "Your opponent has exposed the two sets shown. From memory you insist no card line uses both, and call the hand dead. What did you miss?"
              },
              "options": [
                {
                  "id": "a",
                  "label": {
                    "zh": "牌上行数众多，他的目标行你并不知道；信息不完整就喊失效，是把猜测当证据",
                    "tw": "牌上行數眾多，他的目標行你並不知道；資訊不完整就喊失效，是把猜測當證據",
                    "en": "The card holds many lines and you do not know his—ruling on incomplete information is guesswork, not evidence"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "zh": "什么都没漏，桌上的判定即刻生效不可收回",
                    "tw": "什麼都沒漏，桌上的判定即刻生效不可收回",
                    "en": "Nothing—an on-table ruling is final and instant"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "zh": "应该先看庄家是否同意",
                    "tw": "應該先看莊家是否同意",
                    "en": "You should first ask the dealer to approve the challenge"
                  }
                }
              ],
              "answerId": "a",
              "explanation": {
                "zh": "失效判定要求目标行、明示组、Joker 读法与牌数全部对得上。仅凭『我背的行里没有』就喊失效，往往误伤隐手或多行的牌局。",
                "tw": "失效判定要求目標行、明示組、Joker 讀法與牌數全部對得上。僅憑『我背的行裡沒有』就喊失效，往往誤傷隱手或多行的牌局。",
                "en": "A dead ruling needs the declared line, every set, joker readings, and counts—all matched. Memory of a few lines is not evidence."
              }
            },
            {
              "id": "am-6-3-c",
              "type": "choice",
              "tiles": [
                "m3",
                "m4",
                "m4",
                "m4"
              ],
              "prompt": {
                "zh": "玩家声明的目标行（教学样例）要求『三张三万』，但他实际明示的却是图中三张四万。复核时正确的处理是？",
                "tw": "玩家聲明的目標行（教學樣例）要求『三張三萬』，但他實際明示的卻是圖中三張四萬。覆核時正確的處理是？",
                "en": "A player declares a line needing a 3-character pung but exposes the 4-character pung shown. On review, what is correct?"
              },
              "options": [
                {
                  "id": "a",
                  "label": {
                    "zh": "明示组与声明的牌型不兼容，按规则判失效",
                    "tw": "明示組與聲明的牌型不相容，按規則判失效",
                    "en": "The exposed set conflicts with the declared line—the hand is dead per the rules"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "zh": "让他收回四万组，换回手牌重试",
                    "tw": "讓他收回四萬組，換回手牌重試",
                    "en": "Let him take the 4s back and try again"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "zh": "三万与四万相邻，视同满足",
                    "tw": "三萬與四萬相鄰，視同滿足",
                    "en": "3s and 4s are neighbors—close enough counts"
                  }
                }
              ],
              "answerId": "a",
              "explanation": {
                "zh": "明示组与声明的目标行不兼容即失效，事后不能拆组补救；相邻数字也不互相代替，牌型不认近似。",
                "tw": "明示組與聲明的目標行不相容即失效，事後不能拆組補救；相鄰數字也不互相代替，牌型不認近似。",
                "en": "An exposed set incompatible with the declared line kills the hand—no un-exposing afterward, and neighboring numbers never substitute."
              }
            }
          ]
        },
        {
          "id": "am-6-4",
          "title": {
            "zh": "综合情境复盘",
            "tw": "綜合情境復盤",
            "en": "End-of-Hand Review"
          },
          "intro": {
            "zh": "把第 4-6 章合起来复盘：行牌循环、鸣牌资格、Joker 交换、隐手与失效边界。再次强调：花牌留在手里不补花；顺子、单张、对子不能叫弃牌（末张成胡除外）。示例均为教学样例，不是 NMJL 年度牌型。",
            "tw": "把第 4-6 章合起來復盤：行牌循環、鳴牌資格、Joker 交換、隱手與失效邊界。再次強調：花牌留在手裡不補花；順子、單張、對子不能叫棄牌（末張成胡除外）。示例均為教學樣例，不是 NMJL 年度牌型。",
            "en": "Reviewing chapters 4-6 together: turn flow, call rights, joker exchanges, concealment, and dead-hand limits. Remember: flowers are never replaced, and runs, singles, and pairs cannot be called—except by the tile that wins. Examples are teaching samples, not NMJL card hands."
          },
          "questions": [
            {
              "id": "am-6-4-a",
              "type": "choice",
              "tiles": [
                "j1",
                "z6",
                "z6"
              ],
              "prompt": {
                "zh": "对家突然整手推倒喊 Mah Jongg（其目标行标 C，教学样例）。作为对手，你首先应该做什么？",
                "tw": "對家突然整手推倒喊 Mah Jongg（其目標行標 C，教學樣例）。作為對手，你首先應該做什麼？",
                "en": "The opposite player abruptly exposes a Mah Jongg on a C line (teaching sample). As an opponent, what comes first?"
              },
              "options": [
                {
                  "id": "a",
                  "label": {
                    "zh": "立刻按牌桌规则付分",
                    "tw": "立刻按牌桌規則付分",
                    "en": "Pay up immediately per table rules"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "zh": "当场质疑：他整局没鸣过牌，肯定有问题",
                    "tw": "當場質疑：他整局沒鳴過牌，肯定有問題",
                    "en": "Protest: he never exposed anything, so something is wrong"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "zh": "请他把整手牌与卡上一整行逐张核对：行数、每组构成（含 Joker 读法）、隐手条件全部吻合才算成立",
                    "tw": "請他把整手牌與卡上一整行逐張核對：行數、每個組構成（含 Joker 讀法）、隱手條件全部吻合才算成立",
                    "en": "Ask for a tile-by-tile verification against a full card line—set contents, joker readings, and the concealed condition must all match"
                  }
                }
              ],
              "answerId": "c",
              "explanation": {
                "zh": "C 行的明示只发生在推牌一刻，『整局没鸣牌』恰恰是隐手的正常表现。验证永远是逐张核对整行匹配，而不是抓流程的小辫子。",
                "tw": "C 行的明示只發生在推牌一刻，『整局沒鳴牌』恰恰是隱手的正常表現。驗證永遠是逐張核對整行匹配，而不是抓流程的小辮子。",
                "en": "A C hand exposes only at the reveal—total silence all round is exactly right. Verification means matching every tile against the line, not nitpicking procedure."
              }
            },
            {
              "id": "am-6-4-b",
              "type": "choice",
              "tiles": [
                "m1",
                "m2",
                "m3",
                "m4",
                "m5",
                "m6",
                "m7",
                "m8",
                "m9"
              ],
              "prompt": {
                "zh": "宣布 Mah Jongg 并明示整手牌时（花牌也计入），连同最后取得的牌一共应有多少张？",
                "tw": "宣佈 Mah Jongg 並明示整手牌時（花牌也計入），連同最後取得的牌一共應有多少張？",
                "en": "When declaring Mah Jongg, how many tiles are in the complete hand, including flowers and the winning tile?"
              },
              "options": [
                {
                  "id": "a",
                  "label": {
                    "zh": "13 张",
                    "tw": "13 張",
                    "en": "13"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "zh": "14 张",
                    "tw": "14 張",
                    "en": "14"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "zh": "16 张",
                    "tw": "16 張",
                    "en": "16"
                  }
                }
              ],
              "answerId": "b",
              "explanation": {
                "zh": "成胡手牌为原有 13 张加最后取得的第 14 张，花牌也算在这 14 张之内。",
                "tw": "成胡手牌為原有 13 張加最後取得的第 14 張，花牌也算在這 14 張之內。",
                "en": "The winning hand is the original 13 tiles plus the 14th winning tile. Flowers count within those 14 tiles."
              }
            },
            {
              "id": "am-6-4-c",
              "type": "tile-pick",
              "tiles": [
                "m3",
                "p1",
                "j1",
                "s7",
                "m3",
                "z5",
                "f2"
              ],
              "context": {
                "zh": "教学样例目标行（不是 NMJL 年度牌型）需要一组三张三万。同牌组可以含 Joker；换成单张或对子的槽位就不行。",
                "tw": "教學樣例目標行（不是 NMJL 年度牌型）需要一組三張三萬。同牌組可以含 Joker；換成單張或對子的槽位就不行。",
                "en": "The sample line (not an NMJL card hand) needs a 3-character pung; jokers may join same-tile sets but never single or pair slots."
              },
              "prompt": {
                "zh": "请选出手牌中恰好能组成这组三万的 3 张牌。",
                "tw": "請選出手牌中恰好能組成這組三萬的 3 張牌。",
                "en": "Pick the 3 tiles that form the required 3-character pung."
              },
              "selectionCount": 3,
              "answerIndexes": [
                0,
                2,
                4
              ],
              "explanation": {
                "zh": "两张三万 + Joker 正好构成三张同牌组——这是 Joker 的合法用法；同样的 Joker 放进单张或对子槽位则无效。",
                "tw": "兩張三萬 + Joker 正好構成三張同牌組——這是 Joker 的合法用法；同樣的 Joker 放進單張或對子槽位則無效。",
                "en": "Two 3-characters plus the joker form a legal pung—the joker's proper role—whereas the same joker could never sit in a single or pair slot."
              }
            }
          ]
        }
      ]
    }
  ]
};g.MahjongAmericanPart2=data;if(typeof module!=='undefined'&&module.exports)module.exports=data;})(typeof globalThis!=='undefined'?globalThis:window);
