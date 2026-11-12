/* American Mahjong course, part 1: chapters 1-3. Original teaching samples; no NMJL card hands are copied. */
(function(g){const data={
  "chapters": [
    {
      "id": "am-1",
      "title": {
        "zh": "牌集与美式差异",
        "tw": "牌集與美式差異",
        "en": "The Tile Set and American Differences"
      },
      "desc": {
        "zh": "认识美式麻将牌集：三门数牌、字牌、花牌与八张 Joker，并理解胡牌标准由年度卡决定。",
        "tw": "認識美式麻將牌集：三門數牌、字牌、花牌與八張 Joker，並理解胡牌標準由年度卡決定。",
        "en": "Learn the American tile set—numbers, honors, flowers, and eight jokers—and see why the yearly card defines winning."
      },
      "lessons": [
        {
          "id": "am-1-1",
          "title": {
            "zh": "数牌与字牌",
            "tw": "數牌與字牌",
            "en": "Numbered and Honor Tiles"
          },
          "intro": {
            "zh": "美式牌集包含万、筒、条三门数牌（各 1-9），以及风牌（东南西北）和箭牌（中发白）。先看图案区分三门数牌与字牌。",
            "tw": "美式牌集包含萬、筒、條三門數牌（各 1-9），以及風牌（東南西北）與箭牌（中發白）。先看圖案區分三門數牌與字牌。",
            "en": "The American set has three number suits—characters, dots, bamboo (1-9)—plus winds and dragons. Start by telling them apart by artwork."
          },
          "questions": [
            {
              "id": "am-1-1-a",
              "type": "choice",
              "tiles": ["s5", "p5", "m5"],
              "prompt": {
                "zh": "图中展示了三张都标着数字 5 的牌，哪一张是「五条」（条子）？",
                "tw": "圖中展示了三張都標著數字 5 的牌，哪一張是「五條」（條子）？",
                "en": "The tiles shown are three tiles all marked 5. Which one is five bamboo?"
              },
              "options": [
                {"id": "a", "tile": "s5", "label": {"zh": "画着竹节图案的牌", "tw": "畫著竹節圖案的牌", "en": "The tile drawn with bamboo stalks"}},
                {"id": "b", "tile": "p5", "label": {"zh": "画着圆圈图案的牌", "tw": "畫著圓圈圖案的牌", "en": "The tile drawn with circles"}},
                {"id": "c", "tile": "m5", "label": {"zh": "带「萬」字的牌", "tw": "帶「萬」字的牌", "en": "The tile bearing the 萬 character"}}
              ],
              "answerId": "a",
              "explanation": {
                "zh": "条子（bamboo）用竹节图案表示数字；圆圈是筒子，「萬」字是万子。",
                "tw": "條子（bamboo）用竹節圖案表示數字；圓圈是筒子，「萬」字是萬子。",
                "en": "Bamboo suits show their number with bamboo stalks; circles are the dots suit, and the 萬 character marks the characters suit."
              }
            },
            {
              "id": "am-1-1-b",
              "type": "choice",
              "tiles": ["z1", "z5", "f1"],
              "prompt": {
                "zh": "图中的三张牌里，哪一张属于风牌（winds）？",
                "tw": "圖中的三張牌裡，哪一張屬於風牌（winds）？",
                "en": "Among the tiles shown, which one is a wind tile?"
              },
              "options": [
                {"id": "a", "tile": "z1", "label": {"zh": "写着「東」的牌", "tw": "寫著「東」的牌", "en": "The tile marked 東 (east)"}},
                {"id": "b", "tile": "z5", "label": {"zh": "写着红色「中」的牌", "tw": "寫著紅色「中」的牌", "en": "The red 中 (red dragon) tile"}},
                {"id": "c", "tile": "f1", "label": {"zh": "画着花卉并标注 FLOWER 的牌", "tw": "畫著花卉並標註 FLOWER 的牌", "en": "The floral tile labelled FLOWER"}}
              ],
              "answerId": "a",
              "explanation": {
                "zh": "风牌只有四种：东、南、西、北。「中」是箭牌（dragon），花卉图案的是花牌。",
                "tw": "風牌只有四種：東、南、西、北。「中」是箭牌（dragon），花卉圖案的是花牌。",
                "en": "Winds are only east, south, west, and north. 中 is a dragon, and the floral picture is a flower tile."
              }
            },
            {
              "id": "am-1-1-c",
              "type": "tile-pick",
              "tiles": ["m2", "m2", "m2", "p6", "s9", "z5", "z7", "f2"],
              "context": {
                "zh": "三张完全相同的牌组成一组（美式叫 pung）。",
                "tw": "三張完全相同的牌組成組（美式叫 pung）。",
                "en": "Three identical tiles form a group called a pung."
              },
              "prompt": {
                "zh": "这手牌中恰好有一组三张相同的牌，请选出那 3 张。",
                "tw": "這手牌中恰好有一組三張相同的牌，請選出那 3 張。",
                "en": "This hand contains exactly one set of three identical tiles. Pick those 3 tiles."
              },
              "selectionCount": 3,
              "answerIndexes": [0, 1, 2],
              "explanation": {
                "zh": "只有三张二万完全相同；筒、条、字牌各只出现一次，花牌只有一张。",
                "tw": "只有三張二萬完全相同；筒、條、字牌各只出現一次，花牌只有一張。",
                "en": "Only the three 2-character tiles are identical; every other tile appears once."
              }
            }
          ]
        },
        {
          "id": "am-1-2",
          "title": {
            "zh": "花牌与 Joker",
            "tw": "花牌與 Joker",
            "en": "Flowers and Jokers"
          },
          "intro": {
            "zh": "标准美式牌集使用 8 张花牌（f1-f8，含花卉与四季）和 8 张 Joker。花牌留在手牌中，用于年度卡要求的花牌位置；不补花。",
            "tw": "標準美式牌集使用 8 張花牌（f1-f8，含花卉與四季）與 8 張 Joker。花牌留在手牌中，用於年度卡要求的花牌位置；不補花。",
            "en": "A standard American set uses 8 flowers (including seasons) and 8 jokers. Flowers stay in your hand for flower positions on the card; they are not replaced after a draw."
          },
          "questions": [
            {
              "id": "am-1-2-a",
              "type": "choice",
              "prompt": {
                "zh": "一套标准美式麻将牌通常额外加入多少张 Joker？",
                "tw": "一套標準美式麻將牌通常額外加入多少張 Joker？",
                "en": "How many joker tiles does a standard American set add?"
              },
              "options": [
                {"id": "a", "label": {"zh": "4 张", "tw": "4 張", "en": "4"}},
                {"id": "b", "label": {"zh": "8 张", "tw": "8 張", "en": "8"}},
                {"id": "c", "label": {"zh": "0 张，美式没有 Joker", "tw": "0 張，美式沒有 Joker", "en": "None; American play has no jokers"}}
              ],
              "answerId": "b",
              "explanation": {
                "zh": "美式牌集配备 8 张 Joker 和 8 张花牌，这是它区别于其他玩法的标志性配置。",
                "tw": "美式牌集配備 8 張 Joker 與 8 張花牌，這是它有別於其他玩法的標誌性配置。",
                "en": "An American set carries 8 jokers and 8 flowers—a signature difference from other variants."
              }
            },
            {
              "id": "am-1-2-b",
              "type": "tile-pick",
              "tiles": ["f1", "f4", "f6", "m5", "j1", "s3", "p8"],
              "context": {
                "zh": "花牌包括花卉（plum、orchid 等）与四季（spring 等），牌面标有 FLOWER 或 SEASON。",
                "tw": "花牌包括花卉（plum、orchid 等）與四季（spring 等），牌面標有 FLOWER 或 SEASON。",
                "en": "Flowers include the four plants and four seasons, labelled FLOWER or SEASON."
              },
              "prompt": {
                "zh": "请从手牌中选出全部 3 张花牌。",
                "tw": "請從手牌中選出全部 3 張花牌。",
                "en": "Pick all 3 flower tiles in this hand."
              },
              "selectionCount": 3,
              "answerIndexes": [0, 1, 2],
              "explanation": {
                "zh": "三张带花卉/季节图案的牌是花牌；Joker 是笑脸百搭牌，不是花牌。",
                "tw": "三張帶花卉/季節圖案的牌是花牌；Joker 是笑臉百搭牌，不是花牌。",
                "en": "The three floral/season tiles are flowers; the smiling joker is a wildcard, not a flower."
              }
            },
            {
              "id": "am-1-2-c",
              "type": "choice",
              "tiles": ["j1", "f1", "z7"],
              "prompt": {
                "zh": "图中的三张牌里，哪一张是 Joker（百搭牌）？",
                "tw": "圖中的三張牌裡，哪一張是 Joker（百搭牌）？",
                "en": "Which of the tiles shown is the joker (wildcard)?"
              },
              "options": [
                {"id": "a", "tile": "j1", "label": {"zh": "画着笑脸并标注 JOKER 的牌", "tw": "畫著笑臉並標註 JOKER 的牌", "en": "The smiling tile labelled JOKER"}},
                {"id": "b", "tile": "f1", "label": {"zh": "画着花卉的牌", "tw": "畫著花卉的牌", "en": "The floral tile"}},
                {"id": "c", "tile": "z7", "label": {"zh": "只有边框的白板", "tw": "只有邊框的白板", "en": "The blank-framed white dragon"}}
              ],
              "answerId": "a",
              "explanation": {
                "zh": "Joker 是笑脸图案的百搭牌；花卉图案的是花牌，空白边框的是白板（白）。",
                "tw": "Joker 是笑臉圖案的百搭牌；花卉圖案的是花牌，空白邊框的是白板（白）。",
                "en": "The joker is the smiling wildcard; the flower picture is a flower tile, and the empty frame is the white dragon."
              }
            }
          ]
        },
        {
          "id": "am-1-3",
          "title": {
            "zh": "胡牌看年度卡",
            "tw": "胡牌看年度卡",
            "en": "Winning Follows the Yearly Card"
          },
          "intro": {
            "zh": "美式麻将的胡牌标准不是「四组一对」，而是手牌完整匹配当年年度卡上的某一整行牌型。本章所有牌型示例均为原创教学样例，非官方年度牌型。",
            "tw": "美式麻將的胡牌標準不是「四組一對」，而是手牌完整匹配當年年度卡上的某一整行牌型。本章所有牌型示例均為原創教學樣例，非官方年度牌型。",
            "en": "American winning is not \"four sets and a pair\"—the hand must fully match one line of the current year's card. All patterns here are original teaching samples, not official card hands."
          },
          "questions": [
            {
              "id": "am-1-3-a",
              "type": "choice",
              "prompt": {
                "zh": "美式麻将判定胡牌（Mah Jongg）的依据是什么？",
                "tw": "美式麻將判定胡牌（Mah Jongg）的依據是什麼？",
                "en": "What determines a winning hand (Mah Jongg) in American Mahjong?"
              },
              "options": [
                {"id": "a", "label": {"zh": "手牌完整匹配当年年度卡上的一整行牌型", "tw": "手牌完整匹配當年年度卡上的一整行牌型", "en": "The hand exactly matches one full line on the current year's card"}},
                {"id": "b", "label": {"zh": "凑齐任意四组加一对即可", "tw": "湊齊任意四組加一對即可", "en": "Any four sets plus a pair is enough"}},
                {"id": "c", "label": {"zh": "手中对子数量最多者获胜", "tw": "手中對子數量最多者獲勝", "en": "Whoever holds the most pairs wins"}}
              ],
              "answerId": "a",
              "explanation": {
                "zh": "美式胡牌必须逐张对应年度卡上某个牌型的完整一行；「四组一对」是其他玩法的通则，不适用于美式。",
                "tw": "美式胡牌必須逐張對應年度卡上某個牌型的完整一行；「四組一對」是其他玩法的通則，不適用於美式。",
                "en": "Every tile must line up with a full row on the yearly card; \"four sets and a pair\" is a rule of other variants, not of American play."
              }
            },
            {
              "id": "am-1-3-b",
              "type": "choice",
              "tiles": ["m3", "m3", "m3", "p5", "p5", "p5", "s2", "s2", "s2", "z7", "z7", "z7", "f1", "f1"],
              "prompt": {
                "zh": "图中这 14 张牌组成原创教学样例「四个三张组加一对」。仅凭这一形状，能否在美式牌桌上直接叫 Mah Jongg？",
                "tw": "圖中這 14 張牌組成原創教學樣例「四個三張組加一對」。僅憑這一形狀，能否在美式牌桌上直接叫 Mah Jongg？",
                "en": "The 14 tiles shown form an original teaching sample: four triplets plus a pair. Can this shape alone be declared Mah Jongg?"
              },
              "options": [
                {"id": "a", "label": {"zh": "不一定：还要看当年年度卡上是否存在完全一致的行", "tw": "不一定：還要看當年年度卡上是否存在完全一致的行", "en": "Not necessarily: the yearly card must contain a line matching it exactly"}},
                {"id": "b", "label": {"zh": "一定能：四组一对在任何年份都算胡", "tw": "一定能：四組一對在任何年份都算胡", "en": "Yes: four sets and a pair always win, in any year"}},
                {"id": "c", "label": {"zh": "一定能：只要包含花牌就算胡", "tw": "一定能：只要包含花牌就算胡", "en": "Yes: including flowers is enough to win"}}
              ],
              "answerId": "a",
              "explanation": {
                "zh": "形状本身不产生胡牌；只有当年度卡的某一行与此 14 张逐张对应时才可宣布。这是易错点：不要用其他玩法的通则代替年度卡。",
                "tw": "形狀本身不產生胡牌；只有當年度卡的某一行與此 14 張逐張對應時才可宣布。這是易錯點：不要用其他玩法的通則代替年度卡。",
                "en": "The shape itself never wins; only a card line matching all 14 tiles does. Common mistake: importing the generic four-sets-plus-pair rule."
              }
            },
            {
              "id": "am-1-3-c",
              "type": "tile-pick",
              "tiles": ["s7", "s7", "s7", "m4", "p1", "p9", "z3", "f5", "j1"],
              "context": {
                "zh": "年度卡上的基本组成包括单张（single）、对子（pair）、三张组（pung）与四张组（kong）。",
                "tw": "年度卡上的基本組成包括單張（single）、對子（pair）、三張組（pung）與四張組（kong）。",
                "en": "Basic card components are singles, pairs, pungs (three-of-a-kind), and kongs (four-of-a-kind)."
              },
              "prompt": {
                "zh": "卡样第一组需要一个三张相同牌组（pung）。请从手牌中选出那 3 张（手牌中只有一组）。",
                "tw": "卡樣第一組需要一個三張相同牌組（pung）。請從手牌中選出那 3 張（手牌中只有一組）。",
                "en": "The sample line needs one pung. Pick those 3 tiles from the hand (there is only one)."
              },
              "selectionCount": 3,
              "answerIndexes": [0, 1, 2],
              "explanation": {
                "zh": "只有三张七条完全相同，可以组成 pung；其余牌各只有一张，Joker 与花牌也不算。",
                "tw": "只有三張七條完全相同，可以組成 pung；其餘牌各只有一張，Joker 與花牌也不算。",
                "en": "Only the three 7-bamboo tiles are identical; all other tiles appear once, and jokers or flowers don't count here."
              }
            }
          ]
        },
        {
          "id": "am-1-4",
          "title": {
            "zh": "牌集回顾测验",
            "tw": "牌集回顧測驗",
            "en": "Tile Set Review Quiz"
          },
          "intro": {
            "zh": "复习本章要点：区分数牌、风牌、箭牌、花牌与 Joker，并记住胡牌以年度卡为准。",
            "tw": "复习本章要点：區分数牌、風牌、箭牌、花牌與 Joker，並記住胡牌以年度卡為準。",
            "en": "Review the chapter: numbers, winds, dragons, flowers, jokers, and the rule that the yearly card defines winning."
          },
          "questions": [
            {
              "id": "am-1-4-a",
              "type": "tile-pick",
              "tiles": ["f2", "f7", "m8", "s5", "j1", "p3", "f8"],
              "context": {
                "zh": "标准牌集中有 8 张花牌（f1-f8）；它们留在手牌中，可以满足年度卡上的花牌位置。",
                "tw": "標準牌集中有 8 張花牌（f1-f8）；它們留在手牌中，可以滿足年度卡上的花牌位置。",
                "en": "The standard set has 8 flowers (f1-f8). Keep them in your hand for flower positions on the card."
              },
              "prompt": {
                "zh": "请从手牌中选出全部 3 张花牌。",
                "tw": "請從手牌中選出全部 3 張花牌。",
                "en": "Pick all 3 flower tiles in this hand."
              },
              "selectionCount": 3,
              "answerIndexes": [0, 1, 6],
              "explanation": {
                "zh": "三张花卉/季节图案的牌是花牌；Joker 虽然图案鲜艳，但它是百搭牌，不是花牌。",
                "tw": "三張花卉/季節圖案的牌是花牌；Joker 雖然圖案鮮豔，但它是百搭牌，不是花牌。",
                "en": "The three floral/season tiles are flowers; the colorful joker is a wildcard, not a flower."
              }
            },
            {
              "id": "am-1-4-b",
              "type": "choice",
              "tiles": ["z7", "z5", "z6"],
              "prompt": {
                "zh": "图中三张箭牌（dragons）里，哪一张是白板（white dragon）？",
                "tw": "圖中三張箭牌（dragons）裡，哪一張是白板（white dragon）？",
                "en": "Of the three dragon tiles shown, which is the white dragon?"
              },
              "options": [
                {"id": "a", "tile": "z7", "label": {"zh": "只有一个空边框、没有文字的牌", "tw": "只有一個空邊框、沒有文字的牌", "en": "The empty frame with no character"}},
                {"id": "b", "tile": "z5", "label": {"zh": "红色「中」字牌", "tw": "紅色「中」字牌", "en": "The red 中 tile"}},
                {"id": "c", "tile": "z6", "label": {"zh": "绿色「發」字牌", "tw": "綠色「發」字牌", "en": "The green 發 tile"}}
              ],
              "answerId": "a",
              "explanation": {
                "zh": "白板（白）通常只画边框；红中与绿发带有各自颜色的汉字。",
                "tw": "白板（白）通常只畫邊框；紅中與綠發帶有各自顏色的漢字。",
                "en": "The white dragon is just a frame; the red and green dragons carry their colored characters."
              }
            },
            {
              "id": "am-1-4-c",
              "type": "choice",
              "prompt": {
                "zh": "Joker 在美式麻将中的作用是什么？",
                "tw": "Joker 在美式麻將中的作用是什麼？",
                "en": "What is the role of a joker in American Mahjong?"
              },
              "options": [
                {"id": "a", "label": {"zh": "代替其他牌完成牌型中的组（使用受卡上规则限制）", "tw": "代替其他牌完成牌型中的組（使用受卡上規則限制）", "en": "It substitutes for other tiles to complete groups, within the card's rules"}},
                {"id": "b", "label": {"zh": "摸到即可直接宣布胡牌", "tw": "摸到即可直接宣布胡牌", "en": "Drawing it lets you declare a win at once"}},
                {"id": "c", "label": {"zh": "它只是装饰，没有实际作用", "tw": "它只是裝飾，沒有實際作用", "en": "It is decorative and has no function"}}
              ],
              "answerId": "a",
              "explanation": {
                "zh": "Joker 是百搭牌，用来代替牌型中缺的牌；但具体哪些位置能用受年度卡规则限制，不能凭空宣布胡牌。",
                "tw": "Joker 是百搭牌，用來代替牌型中缺的牌；但具體哪些位置能用受年度卡規則限制，不能憑空宣布胡牌。",
                "en": "A joker stands in for missing tiles, but the card's rules limit where it may be used; it is no instant win."
              }
            }
          ]
        }
      ]
    },
    {
      "id": "am-2",
      "title": {
        "zh": "读懂年度牌型卡",
        "tw": "讀懂年度牌型卡",
        "en": "Reading the Yearly Card"
      },
      "desc": {
        "zh": "学习卡面记号：pung、kong、对子、单张；颜色分门；字母与花牌；C 隐手与整行 14 张匹配。所有示例为原创教学样例。",
        "tw": "學習卡面記號：pung、kong、對子、單張；顏色分門；字母與花牌；C 隱手與整行 14 張匹配。所有示例為原創教學樣例。",
        "en": "Learn the card's symbols: pungs, kongs, pairs, singles; color-coded suits; letters and flowers; C for concealed; full-line 14-tile matching. All examples are original teaching samples."
      },
      "lessons": [
        {
          "id": "am-2-1",
          "title": {
            "zh": "牌型分组名称",
            "tw": "牌型分組名稱",
            "en": "Names of Card Groups"
          },
          "intro": {
            "zh": "年度卡用固定词汇描述牌型：single（单张）、pair（对子）、pung（三张相同）、kong（四张相同）、quint（五张相同）。本节示例均为原创教学样例。",
            "tw": "年度卡用固定詞彙描述牌型：single（單張）、pair（對子）、pung（三張相同）、kong（四張相同）、quint（五張相同）。本節示例均為原創教學樣例。",
            "en": "The card uses fixed terms: single, pair, pung (three alike), kong (four alike), quint (five alike). All samples here are original teaching examples."
          },
          "questions": [
            {
              "id": "am-2-1-a",
              "type": "choice",
              "prompt": {
                "zh": "卡面上的「quint」指的是什么？",
                "tw": "卡面上的「quint」指的是什麼？",
                "en": "What does \"quint\" on the card mean?"
              },
              "options": [
                {"id": "a", "label": {"zh": "五张完全相同的牌", "tw": "五張完全相同的牌", "en": "Five identical tiles"}},
                {"id": "b", "label": {"zh": "两张相同的牌", "tw": "兩張相同的牌", "en": "Two identical tiles"}},
                {"id": "c", "label": {"zh": "任意一张单牌", "tw": "任意一張單牌", "en": "Any single tile"}}
              ],
              "answerId": "a",
              "explanation": {
                "zh": "quint=五张相同（可用 Joker 补足），pair=两张相同，single=单张。注意普通牌每种只有 4 张，第 5 张要靠 Joker。",
                "tw": "quint=五張相同（可用 Joker 補足），pair=兩張相同，single=單張。注意普通牌每種只有 4 張，第 5 張要靠 Joker。",
                "en": "A quint is five alike (jokers can supply extras); pair is two alike, single is one tile. Only 4 copies of each tile exist, so the 5th needs a joker."
              }
            },
            {
              "id": "am-2-1-b",
              "type": "choice",
              "tiles": ["m6", "m6", "m6", "p2", "s8"],
              "prompt": {
                "zh": "图中的三张相同的六万，在卡面上称为什么？",
                "tw": "圖中的三張相同的六萬，在卡面上稱為什麼？",
                "en": "What is the card term for the three identical 6-character tiles shown?"
              },
              "options": [
                {"id": "a", "label": {"zh": "pung（三张相同组）", "tw": "pung（三張相同組）", "en": "Pung (three alike)"}},
                {"id": "b", "label": {"zh": "single（单张）", "tw": "single（單張）", "en": "Single"}},
                {"id": "c", "label": {"zh": "pair（对子）", "tw": "pair（對子）", "en": "Pair"}}
              ],
              "answerId": "a",
              "explanation": {
                "zh": "三张相同是 pung；四张相同是 kong，两张是 pair，一张是 single。",
                "tw": "三張相同是 pung；四張相同是 kong，兩張是 pair，一張是 single。",
                "en": "Three alike is a pung; four alike is a kong, two is a pair, one is a single."
              }
            },
            {
              "id": "am-2-1-c",
              "type": "tile-pick",
              "tiles": ["s2", "s2", "s2", "p7", "p7", "m1", "z4", "j1"],
              "context": {
                "zh": "本题考 pung：三张一模一样的牌。对子（如两张七筒）不算。",
                "tw": "本題考 pung：三張一模一樣的牌。對子（如兩張七筒）不算。",
                "en": "This question tests the pung: three identical tiles. A pair (like the two 7-dots) does not count."
              },
              "prompt": {
                "zh": "卡样要求一个 pung。请从手牌中选出 3 张完全相同的牌（手牌中只有一组）。",
                "tw": "卡樣要求一個 pung。請從手牌中選出 3 張完全相同的牌（手牌中只有一組）。",
                "en": "The sample line needs a pung. Pick the 3 identical tiles (there is only one such set)."
              },
              "selectionCount": 3,
              "answerIndexes": [0, 1, 2],
              "explanation": {
                "zh": "三张二条是唯一的一组三张相同；七筒只是对子，差一张才成 pung——这正是易混点。",
                "tw": "三張二條是唯一的一組三張相同；七筒只是對子，差一張才成 pung——這正是易混點。",
                "en": "The three 2-bamboo tiles are the only pung; the 7-dots are just a pair, one tile short—exactly the trap here."
              }
            }
          ]
        },
        {
          "id": "am-2-2",
          "title": {
            "zh": "颜色与门的分组",
            "tw": "顏色與門的分組",
            "en": "Colors and Suit Grouping"
          },
          "intro": {
            "zh": "教学卡样惯例：同一颜色的符号通常表示同一门的牌，不同颜色通常表示不同门。这是原创教学总结，具体仍须以你所持年度卡的图例为准。",
            "tw": "教學卡樣慣例：同一顏色的符號通常表示同一門的牌，不同顏色通常表示不同門。這是原創教學總結，具體仍須以你所持年度卡的圖例為準。",
            "en": "Teaching-card convention: same-color symbols usually mean one suit, different colors different suits. This is an original summary—always check your card's own legend."
          },
          "questions": [
            {
              "id": "am-2-2-a",
              "type": "choice",
              "prompt": {
                "zh": "教学卡样里，各组符号使用不同颜色，通常提示什么？",
                "tw": "教學卡樣裡，各组符號使用不同顏色，通常提示什麼？",
                "en": "On the teaching card, groups shown in different colors usually indicate what?"
              },
              "options": [
                {"id": "a", "label": {"zh": "各组对应使用不同门（花色）的牌", "tw": "各組對應使用不同門（花色）的牌", "en": "Each group uses a different suit"}},
                {"id": "b", "label": {"zh": "颜色只是装饰，没有含义", "tw": "顏色只是裝飾，沒有含義", "en": "Colors are purely decorative"}},
                {"id": "c", "label": {"zh": "所有组必须用同一门的牌", "tw": "所有組必須用同一門的牌", "en": "All groups must use the same suit"}}
              ],
              "answerId": "a",
              "explanation": {
                "zh": "颜色帮助读卡：同色同门、异色异门是常见惯例，最终以卡上图例为准。",
                "tw": "顏色幫助讀卡：同色同門、異色異門是常見慣例，最終以卡上圖例為準。",
                "en": "Colors guide reading: same color means one suit, different colors mean different suits—always confirm with the card's legend."
              }
            },
            {
              "id": "am-2-2-b",
              "type": "tile-pick",
              "tiles": ["s1", "s2", "s3", "p5", "p9", "f4", "j1"],
              "context": {
                "zh": "此原创教学样例要求同一门的 1、2、3 各一张；这三张不是美式麻将可任意鸣牌的顺子。",
                "tw": "此原創教學樣例要求同一門的 1、2、3 各一張；這三張不是美式麻雀可任意鳴牌的順子。",
                "en": "This original practice line asks for one each of 1, 2 and 3 in one suit. These are not a freely callable sequence in American Mah Jongg."
              },
              "prompt": {
                "zh": "原创教学卡样需要一条、二条、三条各一张。请选出这三张牌。",
                "tw": "原創教學卡樣需要一條、二條、三條各一張。請選出這三張牌。",
                "en": "The original practice card asks for 1, 2 and 3 bamboo, one of each. Select those three tiles."
              },
              "selectionCount": 3,
              "answerIndexes": [0, 1, 2],
              "explanation": {
                "zh": "这三张正好是教学卡样指定的条子数字；五筒、九筒不是条子。",
                "tw": "這三張正好是教學卡樣指定的條子數字；五筒、九筒不是條子。",
                "en": "These three are exactly the bamboo numbers on the practice card; the 5 and 9 dots are a different suit."
              }
            },
            {
              "id": "am-2-2-c",
              "type": "choice",
              "tiles": ["m8", "m8", "m8", "p3", "p3", "p3", "s6", "s6", "s6"],
              "prompt": {
                "zh": "图示为原创教学样例（非官方年度牌型）：三个 pung 分别用万、筒、条。若卡样用三种颜色的符号写这三组，它表达的是？",
                "tw": "圖示為原創教學樣例（非官方年度牌型）：三個 pung 分別用萬、筒、條。若卡樣用三種顏色的符號寫這三組，它表達的是？",
                "en": "The tiles form an original sample: three pungs in characters, dots, and bamboo. If the card wrote these groups in three colors, that means—"
              },
              "options": [
                {"id": "a", "label": {"zh": "三组各自使用不同的一门", "tw": "三組各自使用不同的一門", "en": "Each group uses its own suit"}},
                {"id": "b", "label": {"zh": "三组必须换成同一门", "tw": "三組必須換成同一門", "en": "All three groups must switch to one suit"}},
                {"id": "c", "label": {"zh": "只需要其中一组的牌", "tw": "只需要其中一組的牌", "en": "Only one of the groups is required"}}
              ],
              "answerId": "a",
              "explanation": {
                "zh": "异色分组对应异门：万一组、筒一组、条一组。读卡时先看颜色，再数牌。",
                "tw": "異色分組對應異門：萬一組、筒一組、條一組。讀卡時先看顏色，再數牌。",
                "en": "Different colors mean different suits: one character pung, one dot pung, one bamboo pung. Read colors first, then count tiles."
              }
            }
          ]
        },
        {
          "id": "am-2-3",
          "title": {
            "zh": "字母与花牌记号",
            "tw": "字母與花牌記號",
            "en": "Letters and Flower Symbols"
          },
          "intro": {
            "zh": "卡面常用字母（如 NEWS 类记号）代表符合特定条件的一类牌，花朵符号代表花牌位置。本课只讲通用读法，不复制任何具体年度卡牌型。",
            "tw": "卡面常用字母（如 NEWS 類記號）代表符合特定條件的一類牌，花朵符號代表花牌位置。本課只講通用讀法，不複製任何具體年度卡牌型。",
            "en": "Cards often use letters (such as NEWS-style symbols) for tiles meeting certain conditions, and flower marks for flower positions. This lesson covers general reading only and copies no specific card hands."
          },
          "questions": [
            {
              "id": "am-2-3-a",
              "type": "choice",
              "prompt": {
                "zh": "卡样某组位置标注为花朵符号（花）时，什么牌可以满足它？",
                "tw": "卡樣某組位置標註為花朵符號（花）時，什麼牌可以滿足它？",
                "en": "When a position on the sample card is marked with a flower symbol, which tiles satisfy it?"
              },
              "options": [
                {"id": "a", "label": {"zh": "花牌（花卉或季节牌）", "tw": "花牌（花卉或季節牌）", "en": "Flower tiles (flowers or seasons)"}},
                {"id": "b", "label": {"zh": "必须是编号 f1 的花牌", "tw": "必須是編號 f1 的花牌", "en": "Only the tile f1"}},
                {"id": "c", "label": {"zh": "任意数牌", "tw": "任意數牌", "en": "Any number tile"}}
              ],
              "answerId": "a",
              "explanation": {
                "zh": "花朵记号代表花牌位置，花牌（含季节牌）可满足；不必是某一张特定的花。",
                "tw": "花朵記號代表花牌位置，花牌（含季節牌）可滿足；不必是某一張特定的花。",
                "en": "Flower marks stand for flower positions; any flower or season tile fits, not one specific tile."
              }
            },
            {
              "id": "am-2-3-b",
              "type": "tile-pick",
              "tiles": ["f2", "f2", "z1", "m6", "p9", "f7", "s4"],
              "context": {
                "zh": "某些原创卡样的花牌位置会要求相同或不同花朵，本题只挑出全部花牌。",
                "tw": "某些原創卡樣的花牌位置會要求相同或不同花朵，本題只挑出全部花牌。",
                "en": "Some sample lines ask for matching or mixed flowers; this question just asks you to find every flower."
              },
              "prompt": {
                "zh": "请从手牌中选出全部 3 张花牌。",
                "tw": "請從手牌中選出全部 3 張花牌。",
                "en": "Pick all 3 flower tiles in this hand."
              },
              "selectionCount": 3,
              "answerIndexes": [0, 1, 5],
              "explanation": {
                "zh": "两张二花与一张七花共 3 张是花牌；東是风牌，不是花。",
                "tw": "兩張二花與一張七花共 3 張是花牌；東是風牌，不是花。",
                "en": "The two 2-flowers and the 7-flower are the flowers; the east wind is not."
              }
            },
            {
              "id": "am-2-3-c",
              "type": "choice",
              "tiles": ["z1", "z2", "z3", "z4"],
              "prompt": {
                "zh": "牌型卡常用 N、E、W、S 分别表示北、东、西、南风。图中四张牌属于哪一类？",
                "tw": "牌型卡常用 N、E、W、S 分別表示北、東、西、南風。圖中四張牌屬於哪一類？",
                "en": "A card can use N, E, W and S for the four winds. What kind of tiles are the four pictured tiles?"
              },
              "options": [
                {"id": "a", "label": {"zh": "风牌：东、南、西、北", "tw": "風牌：東、南、西、北", "en": "Winds: east, south, west, north"}},
                {"id": "b", "label": {"zh": "箭牌：中、发、白", "tw": "箭牌：中、發、白", "en": "Dragons: red, green, white"}},
                {"id": "c", "label": {"zh": "数牌：三门数字牌", "tw": "數牌：三門數字牌", "en": "Number tiles of the three suits"}}
              ],
              "answerId": "a",
              "explanation": {
                "zh": "图中正是东南西北四张风牌。字母记号以卡上图例为准，读卡时先确认字母对应的牌类。",
                "tw": "圖中正是東南西北四張風牌。字母記號以卡上圖例為準，讀卡時先確認字母對應的牌類。",
                "en": "Shown are exactly the four winds. Letter marks follow the card's legend—check what each letter stands for before reading."
              }
            }
          ]
        },
        {
          "id": "am-2-4",
          "title": {
            "zh": "C 隐手与整行匹配",
            "tw": "C 隱手與整行匹配",
            "en": "Concealed \"C\" and Full-Line Matching"
          },
          "intro": {
            "zh": "卡上标注 C 的牌型要求隐手：不能鸣别家的弃牌。宣布 Mah Jongg 前，胜利牌入手后的整手 14 张必须与卡上某一整行逐张对应。",
            "tw": "卡上標註 C 的牌型要求隱手：不能鳴別家的棄牌。宣布 Mah Jongg 前，勝利牌入手後的整手 14 張必須與卡上某一個整行逐張對應。",
            "en": "Lines marked C must be played concealed—no claiming discards. Before declaring Mah Jongg, all 14 tiles including the winning tile must match one full line tile for tile."
          },
          "questions": [
            {
              "id": "am-2-4-a",
              "type": "choice",
              "prompt": {
                "zh": "卡上某行标有 C（concealed），这要求什么？",
                "tw": "卡上某行標有 C（concealed），這要求什麼？",
                "en": "A card line is marked C (concealed). What does that require?"
              },
              "options": [
                {"id": "a", "label": {"zh": "整手保持隐手，不能鸣（收集）其他玩家的弃牌", "tw": "整手保持隱手，不能鳴（收集）其他玩家的棄牌", "en": "The hand stays concealed; you may not claim other players' discards"}},
                {"id": "b", "label": {"zh": "必须先亮出三组再打", "tw": "必須先亮出三組再打", "en": "You must expose three groups first"}},
                {"id": "c", "label": {"zh": "必须让所有人看到你的手牌", "tw": "必須讓所有人看到你的手牌", "en": "Everyone must see your tiles"}}
              ],
              "answerId": "a",
              "explanation": {
                "zh": "C 表示该行牌型只能靠自摸完成、保持 concealed；鸣牌（exposure）会使这行失效。",
                "tw": "C 表示該行牌型只能靠自摸完成、保持 concealed；鳴牌（exposure）會使這行失效。",
                "en": "C means the line must be built concealed by self-draw only; any exposure voids it."
              }
            },
            {
              "id": "am-2-4-b",
              "type": "choice",
              "tiles": ["m1", "m1", "m1", "p4", "p4", "p4", "s7", "s7", "s7", "z1", "z1", "z1", "f1"],
              "prompt": {
                "zh": "图示 13 张是原创教学样例的一行雏形（非官方年度牌型）。摸到胜利牌后，整手共 14 张。宣布 Mah Jongg 的条件是？",
                "tw": "圖示 13 張是原創教學樣例的一行雛形（非官方年度牌型）。摸到勝利牌後，整手共 14 張。宣布 Mah Jongg 的條件是？",
                "en": "These 13 tiles are a draft line from an original teaching sample (not an official card hand). After the winning tile gives you 14, you may declare Mah Jongg when—"
              },
              "options": [
                {"id": "a", "label": {"zh": "14 张与当年卡上某一行逐张完全匹配", "tw": "14 張與當年卡上某一行逐張完全匹配", "en": "All 14 tiles match one line of the current card exactly"}},
                {"id": "b", "label": {"zh": "14 张凑成四组加一对即可", "tw": "14 張湊成四組加一對即可", "en": "The 14 tiles form four sets and a pair"}},
                {"id": "c", "label": {"zh": "手里花牌数量最多即可", "tw": "手裡花牌數量最多即可", "en": "You hold the most flowers"}}
              ],
              "answerId": "a",
              "explanation": {
                "zh": "美式胡牌要求整手 14 张与卡上一整行完全一致，一张都不能多或少；「四组一对」不是美式标准。",
                "tw": "美式胡牌要求整手 14 張與卡上一整行完全一致，一張都不能多或少；「四組一對」不是美式標準。",
                "en": "American winning matches the whole 14-tile hand to one full card line—no tile over or under; \"four sets plus a pair\" is not the American standard."
              }
            },
            {
              "id": "am-2-4-c",
              "type": "tile-pick",
              "tiles": ["p7", "p7", "p7", "m7", "m7", "s7", "f1"],
              "context": {
                "zh": "读卡练习：卡样要求万、筒、条各自分组成不同的组，先按要求找出其中一组。",
                "tw": "讀卡練習：卡樣要求萬、筒、條各自分組成不同的組，先按要求找出其中一組。",
                "en": "Card-reading drill: the sample line splits characters, dots, and bamboo into separate groups—find one group as specified."
              },
              "prompt": {
                "zh": "卡样第一组要求筒子（dots）门的 pung（三张相同）。请从手牌中选出那 3 张（其他门是干扰张）。",
                "tw": "卡樣第一組要求筒子（dots）門的 pung（三張相同）。請從手牌中選出那 3 張（其他門是干擾張）。",
                "en": "The first group needs a pung in dots. Pick those 3 tiles (the other suits are decoys)."
              },
              "selectionCount": 3,
              "answerIndexes": [0, 1, 2],
              "explanation": {
                "zh": "筒子门的三张七筒正是要求的 pung；六万只有两张、七条只有一张，都不符合该组颜色/门的要求。",
                "tw": "筒子門的三張七筒正是要求的 pung；六萬只有兩張、七條只有一張，都不符合該組顏色/門的要求。",
                "en": "The three 7-dots are the requested pung; the 6-characters are only a pair and the 7-bamboo a single—wrong suits for this group."
              }
            }
          ]
        }
      ]
    },
    {
      "id": "am-3",
      "title": {
        "zh": "Charleston 换牌",
        "tw": "Charleston 換牌",
        "en": "The Charleston"
      },
      "desc": {
        "zh": "掌握开局换牌流程：首轮右→对家→左；第二轮需全桌同意且方向相反；盲传、courtesy pass 与 Joker 禁传规则。",
        "tw": "掌握開局換牌流程：首輪右→對家→左；第二輪需全桌同意且方向相反；盲傳、courtesy pass 與 Joker 禁傳規則。",
        "en": "Master the opening tile exchange: first round right, opposite, left; a second round needs unanimous agreement and runs left, opposite, right; blind pass, courtesy pass, and the joker ban."
      },
      "lessons": [
        {
          "id": "am-3-1",
          "title": {
            "zh": "首轮 Charleston 路线",
            "tw": "首輪 Charleston 路線",
            "en": "First-Round Charleston Route"
          },
          "intro": {
            "zh": "发牌后，玩家进行第一次 Charleston：每次传 3 张，方向依次是右、对家、左。花牌留在手牌中；Joker 永远不能传出。",
            "tw": "發牌後，玩家進行第一次 Charleston：每次傳 3 張，方向依次是右、對家、左。花牌留在手牌中；Joker 永遠不能傳出去。",
            "en": "After the deal, the first Charleston passes three tiles at a time: right, opposite, then left. Flowers stay in the hand; jokers may never be passed."
          },
          "questions": [
            {
              "id": "am-3-1-a",
              "type": "sequence",
              "prompt": {
                "zh": "将第一次 Charleston 的三个步骤按实际顺序排列。",
                "tw": "將第一次 Charleston 的三個步驟按實際順序排列。",
                "en": "Put the three steps of the first Charleston in the correct order."
              },
              "options": [
                {"id": "a", "label": {"zh": "把 3 张牌扣着传给右边的玩家", "tw": "把 3 張牌扣著傳給右邊的玩家", "en": "Pass 3 tiles face down to the player on your right"}},
                {"id": "b", "label": {"zh": "把 3 张牌传给对面的玩家", "tw": "把 3 張牌傳給對面的玩家", "en": "Pass 3 tiles across to the opposite player"}},
                {"id": "c", "label": {"zh": "把 3 张牌传给左边的玩家", "tw": "把 3 張牌傳給左邊的玩家", "en": "Pass 3 tiles to the player on your left"}}
              ],
              "answerOrder": ["a", "b", "c"],
              "explanation": {
                "zh": "首轮顺序固定为右→对家→左；每一步都是同时进行的 3 张。第二轮（若有）方向相反：左→对家→右。",
                "tw": "首輪順序固定為右→對家→左；每一步都是同時進行的 3 張。第二輪（若有）方向相反：左→對家→右。",
                "en": "Round one runs right, opposite, left—always 3 tiles, all at once. The second round (if played) reverses it: left, opposite, right."
              }
            },
            {
              "id": "am-3-1-b",
              "type": "choice",
              "tiles": ["m2", "p6", "s9"],
              "prompt": {
                "zh": "第一次 Charleston 中，每一步要传出多少张牌（如图中选出的一组）？",
                "tw": "第一次 Charleston 中，每一步要傳出多少張牌（如圖中選出的一組）？",
                "en": "In the first Charleston, how many tiles do you pass at each step (as in the sample group shown)?"
              },
              "options": [
                {"id": "a", "label": {"zh": "固定 3 张", "tw": "固定 3 張", "en": "Exactly 3"}},
                {"id": "b", "label": {"zh": "固定 1 张", "tw": "固定 1 張", "en": "Exactly 1"}},
                {"id": "c", "label": {"zh": "自行决定 0-3 张", "tw": "自行決定 0-3 張", "en": "Freely chosen, 0 to 3"}}
              ],
              "answerId": "a",
              "explanation": {
                "zh": "Charleston 每一步都是 3 张，一次传完整组；自由 0-3 张只适用于对家间的 courtesy pass。",
                "tw": "Charleston 每一步都是 3 張，一次傳完整組；自由 0-3 張只適用於對家間的 courtesy pass。",
                "en": "Every Charleston step passes exactly 3 tiles at once; the free 0-3 count belongs only to the courtesy pass between opposites."
              }
            },
            {
              "id": "am-3-1-c",
              "type": "tile-pick",
              "tiles": ["m5", "p8", "s3", "z2", "f1", "j1"],
              "context": {
                "zh": "规则：Joker 不能通过任何 Charleston 步骤传出或换入。",
                "tw": "規則：Joker 不能通過任何 Charleston 步驟傳出或換入。",
                "en": "Rule: jokers may not be passed in or out through any Charleston step."
              },
              "prompt": {
                "zh": "你正在为 Charleston 挑 3 张要传的牌。图中哪一张绝对不能传出去？",
                "tw": "你正在為 Charleston 挑 3 張要傳的牌。圖中哪一張絕對不能傳出去？",
                "en": "You are choosing 3 tiles to pass in the Charleston. Which tile shown can never be passed?"
              },
              "selectionCount": 1,
              "answerIndexes": [5],
              "explanation": {
                "zh": "Joker 不允许在 Charleston 中传递；数牌、风牌、花牌都可以传。",
                "tw": "Joker 不允許在 Charleston 中傳遞；數牌、風牌、花牌都可以傳。",
                "en": "Jokers never travel through the Charleston; number tiles, winds, and flowers may all be passed."
              }
            }
          ]
        },
        {
          "id": "am-3-2",
          "title": {
            "zh": "第二轮与盲传",
            "tw": "第二輪與盲傳",
            "en": "The Second Round and Blind Pass"
          },
          "intro": {
            "zh": "第一次 Charleston 结束后，只有全桌一致同意才进行第二次，方向改为左、对家、右。最后一步可以盲传（不看牌扣传），但仍传总计 3 张。",
            "tw": "第一次 Charleston 結束後，只有全桌一致同意才進行第二次，方向改為左、對家、右。最後一步可以盲傳（不看牌扣傳），但仍傳總計 3 張。",
            "en": "After the first Charleston, a second runs only if all four players agree, going left, opposite, right. The final step may be passed blind (face down, unseen), still 3 tiles in total."
          },
          "questions": [
            {
              "id": "am-3-2-a",
              "type": "sequence",
              "prompt": {
                "zh": "若全桌同意进行第二次 Charleston，将它的三个步骤按正确顺序排列。",
                "tw": "若全桌同意進行第二次 Charleston，將它的三個步驟按正確順序排列。",
                "en": "If all agree to a second Charleston, order its three steps correctly."
              },
              "options": [
                {"id": "a", "label": {"zh": "把 3 张牌传给左边的玩家", "tw": "把 3 張牌傳給左邊的玩家", "en": "Pass 3 tiles to the player on your left"}},
                {"id": "b", "label": {"zh": "把 3 张牌传给对面的玩家", "tw": "把 3 張牌傳給對面的玩家", "en": "Pass 3 tiles across to the opposite player"}},
                {"id": "c", "label": {"zh": "把 3 张牌传给右边的玩家", "tw": "把 3 張牌傳給右邊的玩家", "en": "Pass 3 tiles to the player on your right"}}
              ],
              "answerOrder": ["a", "b", "c"],
              "explanation": {
                "zh": "第二轮方向与首轮相反：左→对家→右。首轮是右→对家→左，两者别混淆。",
                "tw": "第二輪方向與首輪相反：左→對家→右。首輪是右→對家→左，兩者別混淆。",
                "en": "The second round reverses the first: left, opposite, right versus the first round's right, opposite, left."
              }
            },
            {
              "id": "am-3-2-b",
              "type": "choice",
              "tiles": ["m9", "m9", "p1"],
              "prompt": {
                "zh": "第二次 Charleston 得以进行的条件是？（图中是一例准备传出的 3 张牌）",
                "tw": "第二次 Charleston 得以進行的條件是？（圖中是一例準備傳出的 3 張牌）",
                "en": "What allows a second Charleston to take place? (The tiles shown are a sample set of 3 to pass.)"
              },
              "options": [
                {"id": "a", "label": {"zh": "四位玩家全部同意进行", "tw": "四位玩家全部同意進行", "en": "All four players agree to it"}},
                {"id": "b", "label": {"zh": "庄家一人决定即可", "tw": "莊家一人決定即可", "en": "The dealer alone decides"}},
                {"id": "c", "label": {"zh": "每一局都必须进行", "tw": "每一局都必須進行", "en": "It is always mandatory"}}
              ],
              "answerId": "a",
              "explanation": {
                "zh": "第二轮不是强制的，需要全桌一致同意；任何一人拒绝，就跳过第二轮。",
                "tw": "第二輪不是強制性的，需要全桌一致同意；任何一人拒絕，就跳過第二輪。",
                "en": "The second round is optional and requires unanimous agreement; one \"no\" skips it."
              }
            },
            {
              "id": "am-3-2-c",
              "type": "choice",
              "tiles": ["s4", "s5", "f3"],
              "prompt": {
                "zh": "Charleston 的最后一步你决定盲传（blind pass），像图中这样不看牌扣下传出。下列说法正确的是？",
                "tw": "Charleston 的最後一步你決定盲傳（blind pass），像圖中這樣不看牌扣下傳出去。下列說法正確的是？",
                "en": "At the final Charleston step you choose a blind pass, laying 3 tiles face down without looking, as shown. Which statement is correct?"
              },
              "options": [
                {"id": "a", "label": {"zh": "盲传仍传总计 3 张，只是不看；且只允许在盲传这一步不查看地传", "tw": "盲傳仍傳總計 3 張，只是不看；且只允許在這一步不查看地傳", "en": "A blind pass still sends exactly 3 tiles unseen, and it is allowed only at this final step"}},
                {"id": "b", "label": {"zh": "盲传可以不传牌，直接跳过", "tw": "盲傳可以不傳牌，直接跳過", "en": "A blind pass skips the exchange entirely"}},
                {"id": "c", "label": {"zh": "盲传时可以随意传 1-2 张", "tw": "盲傳時可以隨意傳 1-2 張", "en": "A blind pass may send just 1 or 2 tiles"}}
              ],
              "answerId": "a",
              "explanation": {
                "zh": "盲传只发生在最后一步，且传出的仍是 3 张——只是不看牌。它不是跳过，也不是随意张数。",
                "tw": "盲傳只發生在最後一步，且傳出的仍是 3 張——只是不看牌。它不是跳過，也不是隨意張數。",
                "en": "Blind passing applies only to the final step and still passes a full 3 tiles—just unseen. It is neither a skip nor a free count."
              }
            }
          ]
        },
        {
          "id": "am-3-3",
          "title": {
            "zh": "Courtesy pass 与 Joker",
            "tw": "Courtesy pass 與 Joker",
            "en": "Courtesy Pass and Jokers"
          },
          "intro": {
            "zh": "Charleston 完全结束后，对家之间可以协商 courtesy pass：双方同意才交换，张数 0-3 张。任何传递（包括 courtesy pass）都不能传 Joker。",
            "tw": "Charleston 完全結束後，對家之間可以協商 courtesy pass：雙方同意才交換，張數 0-3 張。任何傳遞（包括 courtesy pass）都不能傳 Joker。",
            "en": "After the Charleston ends, opposite players may negotiate a courtesy pass: exchange only by mutual agreement, 0 to 3 tiles. No pass of any kind—including the courtesy pass—may move a joker."
          },
          "questions": [
            {
              "id": "am-3-3-a",
              "type": "choice",
              "prompt": {
                "zh": "关于 courtesy pass（ courtesy 换牌），哪种说法正确？",
                "tw": "關於 courtesy pass（courtesy 換牌），哪種說法正確？",
                "en": "Which statement about the courtesy pass is correct?"
              },
              "options": [
                {"id": "a", "label": {"zh": "在 Charleston 结束后，对家双方协商一致，交换 0-3 张", "tw": "在 Charleston 結束後，對家雙方協商一致，交換 0-3 張", "en": "After the Charleston, opposites may swap 0-3 tiles by mutual agreement"}},
                {"id": "b", "label": {"zh": "相邻两家之间强制交换 3 张", "tw": "相鄰兩家之間強制交換 3 張", "en": "Adjacent players must swap 3 tiles"}},
                {"id": "c", "label": {"zh": "任何一家都可以单方面向对家要牌", "tw": "任何一家都可以單方面向對家要牌", "en": "Either side may demand tiles unilaterally"}}
              ],
              "answerId": "a",
              "explanation": {
                "zh": "courtesy pass 只发生在对家之间、发生在 Charleston 之后，双方自愿，张数 0-3 张均可。",
                "tw": "courtesy pass 只發生在對家之間、發生在 Charleston 之後，雙方自願，張數 0-3 張皆可。",
                "en": "The courtesy pass happens only between opposites, only after the Charleston, only by mutual choice, with 0-3 tiles."
              }
            },
            {
              "id": "am-3-3-b",
              "type": "choice",
              "tiles": ["s9", "f3", "j1"],
              "prompt": {
                "zh": "你想和对面玩家 courtesy pass 换牌。图中哪一张不能通过 courtesy pass 交给对方？",
                "tw": "你想和對面玩家 courtesy pass 換牌。圖中哪一張不能通過 courtesy pass 交給對方？",
                "en": "You want to courtesy-pass with the opposite player. Which tile shown cannot go to them by courtesy pass?"
              },
              "options": [
                {"id": "a", "tile": "j1", "label": {"zh": "Joker", "tw": "Joker", "en": "The joker"}},
                {"id": "b", "tile": "f3", "label": {"zh": "花牌", "tw": "花牌", "en": "A flower"}},
                {"id": "c", "tile": "s9", "label": {"zh": "九条", "tw": "九條", "en": "The 9 of bamboo"}}
              ],
              "answerId": "a",
              "explanation": {
                "zh": "Joker 不参与任何形式的传递，courtesy pass 同样不能交换 Joker；花牌和数牌都可以。",
                "tw": "Joker 不参与任何形式的傳遞，courtesy pass 同樣不能交換 Joker；花牌和數牌都可以。",
                "en": "Jokers never move through any pass, including the courtesy pass; flowers and number tiles are fine."
              }
            },
            {
              "id": "am-3-3-c",
              "type": "tile-pick",
              "tiles": ["s2", "s5", "s8", "f1", "j1", "p9"],
              "context": {
                "zh": "练习：courtesy pass 的牌必须不含 Joker。",
                "tw": "練習：courtesy pass 的牌必須不含 Joker。",
                "en": "Drill: tiles offered in a courtesy pass must not include a joker."
              },
              "prompt": {
                "zh": "你和对面的玩家已谈好交换 3 张。请从手牌中选出那 3 张条子（手牌中只有这三张条子）作为传出的牌。",
                "tw": "你和對面的玩家已談好交換 3 張。請從手牌中選出那 3 張條子（手牌中只有這三張條子）作為傳出的牌。",
                "en": "You and the opposite player agreed to swap 3 tiles. Pick the 3 bamboo tiles shown (they are the only bamboos) to pass over."
              },
              "selectionCount": 3,
              "answerIndexes": [0, 1, 2],
              "explanation": {
                "zh": "二条、五条、八条是手牌中仅有的三张条子，且不含 Joker，符合交换要求。",
                "tw": "二條、五條、八條是手牌中僅有的三張條子，且不含 Joker，符合交換要求。",
                "en": "The 2, 5, and 8 of bamboo are the only bamboos and contain no joker, so they are a legal offer."
              }
            }
          ]
        },
        {
          "id": "am-3-4",
          "title": {
            "zh": "综合情境与择牌",
            "tw": "綜合情境與擇牌",
            "en": "Combined Scenarios and Tile Choice"
          },
          "intro": {
            "zh": "本课把流程与择牌合起来练：第二轮的否决、传牌的取舍，以及每一步传牌张数的巩固。",
            "tw": "本課把流程與擇牌合起來練：第二輪的否決、傳牌的取捨，以及每一步傳牌張數的鞏固。",
            "en": "Combine procedure with tile choice: vetoing the second round, choosing what to pass, and reinforcing the fixed pass count."
          },
          "questions": [
            {
              "id": "am-3-4-a",
              "type": "choice",
              "prompt": {
                "zh": "第一次 Charleston 刚结束，你想进行第二轮，但有一位玩家表示不愿意。接下来应该？",
                "tw": "第一次 Charleston 剛結束，你想進行第二輪，但有一位玩家表示不願意。接下來應該？",
                "en": "The first Charleston has just ended. You want a second round, but one player declines. What happens next?"
              },
              "options": [
                {"id": "a", "label": {"zh": "第二轮取消，随后进行 courtesy pass（对家协商），再开始正常摸打", "tw": "第二輪取消，隨後進行 courtesy pass（對家協商），再開始正常摸打", "en": "Skip the second round; then any courtesy pass between opposites, and normal play begins"}},
                {"id": "b", "label": {"zh": "由庄家裁定是否继续", "tw": "由莊家裁定是否繼續", "en": "The dealer rules on whether it continues"}},
                {"id": "c", "label": {"zh": "仍进行第二轮，但只传 1 张", "tw": "仍進行第二輪，但只傳 1 張", "en": "Still run the second round, passing only 1 tile"}}
              ],
              "answerId": "a",
              "explanation": {
                "zh": "第二轮需要全桌同意，一人拒绝即取消；随后进入对家间的 courtesy pass 协商，然后正式开始摸打。",
                "tw": "第二輪需要全桌同意，一人拒絕即取消；隨後進入對家間的 courtesy pass 協商，然後正式開始摸打。",
                "en": "The second round needs unanimity; one decline cancels it. The courtesy pass negotiation follows, then normal draw-and-discard begins."
              }
            },
            {
              "id": "am-3-4-b",
              "type": "tile-pick",
              "tiles": ["m3", "m3", "p6", "p6", "s1", "s4", "s9", "f1"],
              "context": {
                "zh": "教学策略：Charleston 传出的牌通常是与自己目标无关的单张；保留对子（yearly 卡上 pair 常用）。",
                "tw": "教學策略：Charleston 傳出的牌通常是與自己目標無關的單張；保留對子（年度卡上 pair 常用）。",
                "en": "Teaching strategy: pass isolated, unrelated tiles and keep pairs, which many card hands require."
              },
              "prompt": {
                "zh": "这手牌里只有万、筒各一对，其余都是单张。首轮 Charleston 你要传 3 张：请选出 3 张条子单张（保留两对）。",
                "tw": "這手牌裡只有萬、筒各一對，其餘都是單張。首輪 Charleston 你要傳 3 張：請選出 3 張條子單張（保留兩對）。",
                "en": "This hand holds one pair each in characters and dots; everything else is isolated. For the first pass, pick the 3 single bamboo tiles (keep both pairs)."
              },
              "selectionCount": 3,
              "answerIndexes": [4, 5, 6],
              "explanation": {
                "zh": "一、四、九条是三张互不相关的单张，最先传出的合理候选；两张三万与两张六筒是对子要留下。",
                "tw": "一、四、九條是三張互不相關的單張，最先傳出的合理候選；兩张三萬與兩張六筒是對子要留下。",
                "en": "The 1, 4, and 9 of bamboo are three unrelated singles—the natural first candidates to pass; the 3-character and 6-dot pairs stay."
              }
            },
            {
              "id": "am-3-4-c",
              "type": "choice",
              "tiles": ["j1", "f2", "m8"],
              "prompt": {
                "zh": "关于完成整两轮 Charleston 时各步传牌张数与内容，正确的是？",
                "tw": "關於完成整兩輪 Charleston 時各步傳牌張數與內容，正確的是？",
                "en": "About the tile count and content of each step of a full two-round Charleston, which is correct?"
              },
              "options": [
                {"id": "a", "label": {"zh": "每一步都恰好传 3 张，且任何一步都不含 Joker", "tw": "每一步都恰好傳 3 張，且任何一步都不含 Joker", "en": "Every step passes exactly 3 tiles, and no step may include a joker"}},
                {"id": "b", "label": {"zh": "只有首轮每步 3 张，第二轮张数随意", "tw": "只有首輪每步 3 張，第二輪張數隨意", "en": "Only the first round fixed at 3; the second round passes freely"}},
                {"id": "c", "label": {"zh": "手里 Joker 太多时，可以在盲传那一步夹带 Joker", "tw": "手裡 Joker 太多時，可以在盲傳那一步夾帶 Joker", "en": "Extra jokers may ride along in the blind pass"}}
              ],
              "answerId": "a",
              "explanation": {
                "zh": "两轮共六步，每步固定 3 张；Joker 在任何一步（含盲传）都不能主动传出。易错点正是「盲传可以偷带 Joker」。",
                "tw": "兩輪共六步，每步固定 3 張；Joker 在任何一步（含盲傳）都不能主動傳出。易錯點正是「盲傳可以偷帶 Joker」。",
                "en": "Six steps across two rounds, always exactly 3 tiles; a joker never goes out on purpose, blind step included. The trap is thinking a blind pass may smuggle one."
              }
            }
          ]
        }
      ]
    }
  ]
};g.MahjongAmericanPart1=data;if(typeof module!=='undefined'&&module.exports)module.exports=data;})(typeof globalThis!=='undefined'?globalThis:window);
