(function(g){
const data={
  "chapters": [
    {
      "id": "hk-1",
      "lessons": [
        {
          "example": {
            "caption": {
              "en": "Three characters, three dots, three bamboo: same number, different suits.",
              "tw": "三萬、三筒、三條：數字相同，花色不同。",
              "zh": "三万、三筒、三条：数字相同，花色不同。"
            },
            "tiles": [
              "m3",
              "p3",
              "s3"
            ]
          },
          "id": "hk-1-1",
          "intro": {
            "en": "Look at the pictures: characters use 萬, dots use circles, and bamboo uses bamboo stalks.",
            "tw": "先看圖案：萬子帶有「萬」字，筒子畫圓圈，條子畫竹節。",
            "zh": "先看图案：万子带有「萬」字，筒子画圆圈，条子画竹节。"
          },
          "questions": [
            {
              "answerId": "a",
              "explanation": {
                "en": "萬 identifies the characters suit; 七 means seven.",
                "tw": "「萬」字說明它是萬子；上面的「七」表示七。",
                "zh": "「萬」字说明它是万子；上面的「七」表示七。"
              },
              "id": "hk-1-1-a",
              "options": [
                {
                  "id": "a",
                  "tile": "m7"
                },
                {
                  "id": "b",
                  "tile": "p7"
                },
                {
                  "id": "c",
                  "tile": "s7"
                }
              ],
              "prompt": {
                "en": "Find seven characters.",
                "tw": "找出七萬。",
                "zh": "找出七万。"
              },
              "type": "choice"
            },
            {
              "answerId": "b",
              "explanation": {
                "en": "Four dots has four circles, rather than bamboo stalks or characters.",
                "tw": "四筒有四個圓圈，圖案與竹節、萬字不同。",
                "zh": "四筒有四个圆圈，图案与竹节、万字不同。"
              },
              "id": "hk-1-1-b",
              "options": [
                {
                  "id": "a",
                  "tile": "s4"
                },
                {
                  "id": "b",
                  "tile": "p4"
                },
                {
                  "id": "c",
                  "tile": "m4"
                }
              ],
              "prompt": {
                "en": "Find four dots.",
                "tw": "找出四筒。",
                "zh": "找出四筒。"
              },
              "type": "choice"
            },
            {
              "answerId": "c",
              "explanation": {
                "en": "Six bamboo has six bamboo stalks.",
                "tw": "六條畫著六根竹節。",
                "zh": "六条画着六根竹节。"
              },
              "id": "hk-1-1-c",
              "options": [
                {
                  "id": "a",
                  "tile": "p6"
                },
                {
                  "id": "b",
                  "tile": "m6"
                },
                {
                  "id": "c",
                  "tile": "s6"
                }
              ],
              "prompt": {
                "en": "Find six bamboo.",
                "tw": "找出六條。",
                "zh": "找出六条。"
              },
              "type": "choice"
            }
          ],
          "title": {
            "en": "Meet the three suits",
            "tw": "認出萬、筒、條",
            "zh": "认出万、筒、条"
          }
        },
        {
          "example": {
            "caption": {
              "en": "Honours are not numbered tiles; their order does not make a sequence.",
              "tw": "字牌不是數牌，不能按字面順序組成順子。",
              "zh": "字牌不是数牌，不能按字面顺序组成顺子。"
            },
            "tiles": [
              "z1",
              "z2",
              "z3",
              "z4",
              "z5",
              "z6",
              "z7"
            ]
          },
          "id": "hk-1-2",
          "intro": {
            "en": "East, South, West and North are winds. Red, green and white dragons are the other honours.",
            "tw": "東、南、西、北是風牌，中、發、白是三元牌；它們都屬於字牌。",
            "zh": "东、南、西、北是风牌，中、发、白是三元牌；它们都属于字牌。"
          },
          "questions": [
            {
              "answerId": "b",
              "explanation": {
                "en": "東 is East; 中 is the red dragon.",
                "tw": "「東」是東風，「中」是紅中。",
                "zh": "「東」是东风，「中」是红中。"
              },
              "id": "hk-1-2-a",
              "options": [
                {
                  "id": "a",
                  "tile": "z5"
                },
                {
                  "id": "b",
                  "tile": "z1"
                },
                {
                  "id": "c",
                  "tile": "z4"
                }
              ],
              "prompt": {
                "en": "Find East.",
                "tw": "找出東風。",
                "zh": "找出东风。"
              },
              "type": "choice"
            },
            {
              "answerId": "a",
              "explanation": {
                "en": "The green 發 is the green dragon.",
                "tw": "綠色的「發」是發財。",
                "zh": "绿色的「發」是发财。"
              },
              "id": "hk-1-2-b",
              "options": [
                {
                  "id": "a",
                  "tile": "z6"
                },
                {
                  "id": "b",
                  "tile": "z2"
                },
                {
                  "id": "c",
                  "tile": "z5"
                }
              ],
              "prompt": {
                "en": "Find the green dragon.",
                "tw": "找出發財。",
                "zh": "找出发财。"
              },
              "type": "choice"
            },
            {
              "answerId": "c",
              "explanation": {
                "en": "East, South, West and North are winds; red, green and white are dragons.",
                "tw": "東、南、西、北是風牌；中、發、白是三元牌。",
                "zh": "东、南、西、北是风牌；中、发、白是三元牌。"
              },
              "id": "hk-1-2-c",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "East, red, green",
                    "tw": "東、中、發",
                    "zh": "东、中、发"
                  },
                  "tiles": [
                    "z1",
                    "z5",
                    "z6"
                  ]
                },
                {
                  "id": "b",
                  "label": {
                    "en": "Red, green, white",
                    "tw": "中、發、白",
                    "zh": "中、发、白"
                  },
                  "tiles": [
                    "z5",
                    "z6",
                    "z7"
                  ]
                },
                {
                  "id": "c",
                  "label": {
                    "en": "East, South, West",
                    "tw": "東、南、西",
                    "zh": "东、南、西"
                  },
                  "tiles": [
                    "z1",
                    "z2",
                    "z3"
                  ]
                }
              ],
              "prompt": {
                "en": "Which group contains only winds?",
                "tw": "哪一組全是風牌？",
                "zh": "哪一组全是风牌？"
              },
              "type": "choice"
            }
          ],
          "title": {
            "en": "Winds and dragons",
            "tw": "風牌與三元牌",
            "zh": "风牌与三元牌"
          }
        },
        {
          "example": {
            "caption": {
              "en": "Start with recognition; each ruleset gives these tiles its own role.",
              "tw": "這裡先認識圖案，不把不同玩法的用途混在一起。",
              "zh": "这里先认识图案，不把不同玩法的用途混在一起。"
            },
            "tiles": [
              "s1",
              "z7",
              "f1",
              "j1"
            ]
          },
          "id": "hk-1-3",
          "intro": {
            "en": "One bamboo is often a bird. The white dragon may be blank or framed. Flowers and jokers depend on the style of play.",
            "tw": "一條常畫成鳥；白板可能是空白或邊框。花牌和 Joker 的使用取決於玩法。",
            "zh": "一条常画成鸟；白板可能是空白或边框。花牌和 Joker 的使用取决于玩法。"
          },
          "questions": [
            {
              "answerId": "b",
              "explanation": {
                "en": "The bird is one bamboo, not a flower.",
                "tw": "鳥形圖案是一條，不是花牌。",
                "zh": "鸟形图案是一条，不是花牌。"
              },
              "id": "hk-1-3-a",
              "options": [
                {
                  "id": "a",
                  "tile": "f1"
                },
                {
                  "id": "b",
                  "tile": "s1"
                },
                {
                  "id": "c",
                  "tile": "p1"
                }
              ],
              "prompt": {
                "en": "Which is one bamboo?",
                "tw": "哪張是一條？",
                "zh": "哪张是一条？"
              },
              "type": "choice"
            },
            {
              "answerId": "a",
              "explanation": {
                "en": "This set uses a blue frame for the white dragon, an honour tile.",
                "tw": "這套牌用藍色邊框表示白板；它屬於字牌。",
                "zh": "这套牌用蓝色边框表示白板；它属于字牌。"
              },
              "id": "hk-1-3-b",
              "options": [
                {
                  "id": "a",
                  "tile": "z7"
                },
                {
                  "id": "b",
                  "tile": "p1"
                },
                {
                  "id": "c",
                  "tile": "z5"
                }
              ],
              "prompt": {
                "en": "Find the white dragon.",
                "tw": "找出白板。",
                "zh": "找出白板。"
              },
              "type": "choice"
            },
            {
              "answerId": "c",
              "explanation": {
                "en": "The joker has its own picture and name. Do not assume it is a wild tile in every ruleset.",
                "tw": "Joker 有專門圖案和名稱；不要把它當作所有玩法通用的萬能牌。",
                "zh": "Joker 有专门图案和名称；不要把它当作所有玩法通用的万能牌。"
              },
              "id": "hk-1-3-c",
              "options": [
                {
                  "id": "a",
                  "tile": "f4"
                },
                {
                  "id": "b",
                  "tile": "z6"
                },
                {
                  "id": "c",
                  "tile": "j1"
                }
              ],
              "prompt": {
                "en": "Which is the joker?",
                "tw": "哪張是 Joker？",
                "zh": "哪张是 Joker？"
              },
              "type": "choice"
            }
          ],
          "title": {
            "en": "Tiles that look different",
            "tw": "容易認錯的牌",
            "zh": "容易认错的牌"
          }
        }
      ],
      "summary": {
        "en": "Recognise suits, honours and special pictures.",
        "tw": "辨認花色、字牌和特別圖案。",
        "zh": "辨认花色、字牌和特别图案。"
      },
      "title": {
        "en": "Know your tiles",
        "tw": "認識牌",
        "zh": "认识牌"
      }
    },
    {
      "id": "hk-2",
      "lessons": [
        {
          "example": {
            "caption": {
              "en": "Two, three and four dots make a sequence.",
              "tw": "二筒、三筒、四筒是一組順子。",
              "zh": "二筒、三筒、四筒是一组顺子。"
            },
            "tiles": [
              "p2",
              "p3",
              "p4"
            ]
          },
          "id": "hk-2-1",
          "intro": {
            "en": "A sequence is three consecutive numbered tiles in the same suit. Honours cannot form a sequence.",
            "tw": "同一花色的三張連續數牌組成順子；字牌不能組成順子。",
            "zh": "同一花色的三张连续数牌组成顺子；字牌不能组成顺子。"
          },
          "questions": [
            {
              "count": 3,
              "explanation": {
                "en": "A sequence is three consecutive numbered tiles in the same suit. Honours cannot form a sequence.",
                "tw": "同一花色的三張連續數牌組成順子；字牌不能組成順子。",
                "zh": "同一花色的三张连续数牌组成顺子；字牌不能组成顺子。"
              },
              "id": "hk-2-1-a",
              "meld": "sequence",
              "prompt": {
                "en": "Select three tiles to make a sequence.",
                "tw": "選三張牌，組成順子。",
                "zh": "选三张牌，组成顺子。"
              },
              "tiles": [
                "m2",
                "m3",
                "m4",
                "p2"
              ],
              "type": "pick"
            },
            {
              "answerId": "b",
              "explanation": {
                "en": "A sequence is three consecutive numbered tiles in the same suit. Honours cannot form a sequence.",
                "tw": "同一花色的三張連續數牌組成順子；字牌不能組成順子。",
                "zh": "同一花色的三张连续数牌组成顺子；字牌不能组成顺子。"
              },
              "id": "hk-2-1-b",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "Three consecutive tiles in one suit",
                    "tw": "同一門連續三張",
                    "zh": "同一门连续三张"
                  },
                  "tiles": [
                    "p4",
                    "p5",
                    "p6"
                  ]
                },
                {
                  "id": "b",
                  "label": {
                    "en": "Consecutive numbers across suits",
                    "tw": "數字連續但跨花色",
                    "zh": "数字连续但跨花色"
                  },
                  "tiles": [
                    "m2",
                    "p3",
                    "s4"
                  ]
                },
                {
                  "id": "c",
                  "label": {
                    "en": "Seven, eight, nine bamboo",
                    "tw": "七、八、九條",
                    "zh": "七、八、九条"
                  },
                  "tiles": [
                    "s7",
                    "s8",
                    "s9"
                  ]
                }
              ],
              "prompt": {
                "en": "Which group is not a sequence?",
                "tw": "哪一組不是順子？",
                "zh": "哪一组不是顺子？"
              },
              "type": "choice"
            },
            {
              "count": 3,
              "explanation": {
                "en": "A sequence is three consecutive numbered tiles in the same suit. Honours cannot form a sequence.",
                "tw": "同一花色的三張連續數牌組成順子；字牌不能組成順子。",
                "zh": "同一花色的三张连续数牌组成顺子；字牌不能组成顺子。"
              },
              "id": "hk-2-1-c",
              "meld": "sequence",
              "prompt": {
                "en": "Build another sequence.",
                "tw": "再選一組順子。",
                "zh": "再选一组顺子。"
              },
              "tiles": [
                "s7",
                "s9",
                "z1",
                "s8"
              ],
              "type": "pick"
            }
          ],
          "title": {
            "en": "Build a sequence",
            "tw": "組成順子",
            "zh": "组成顺子"
          }
        },
        {
          "example": {
            "caption": {
              "en": "Three red dragons make a triplet. Honours can form triplets.",
              "tw": "三張紅中是一組刻子，字牌也能組成刻子。",
              "zh": "三张红中是一组刻子，字牌也能组成刻子。"
            },
            "tiles": [
              "z5",
              "z5",
              "z5"
            ]
          },
          "id": "hk-2-2",
          "intro": {
            "en": "A triplet is three identical tiles. Equal numbers in different suits are different tiles.",
            "tw": "三張完全相同的牌組成刻子。相同數字、不同花色的牌並不相同。",
            "zh": "三张完全相同的牌组成刻子。相同数字、不同花色的牌并不相同。"
          },
          "questions": [
            {
              "count": 3,
              "explanation": {
                "en": "A triplet is three identical tiles. Equal numbers in different suits are different tiles.",
                "tw": "三張完全相同的牌組成刻子。相同數字、不同花色的牌並不相同。",
                "zh": "三张完全相同的牌组成刻子。相同数字、不同花色的牌并不相同。"
              },
              "id": "hk-2-2-a",
              "meld": "triplet",
              "prompt": {
                "en": "Select three identical tiles for a triplet.",
                "tw": "選三張相同的牌，組成刻子。",
                "zh": "选三张相同的牌，组成刻子。"
              },
              "tiles": [
                "s5",
                "s5",
                "s6",
                "s5"
              ],
              "type": "pick"
            },
            {
              "answerId": "a",
              "explanation": {
                "en": "A triplet is three identical tiles. Equal numbers in different suits are different tiles.",
                "tw": "三張完全相同的牌組成刻子。相同數字、不同花色的牌並不相同。",
                "zh": "三张完全相同的牌组成刻子。相同数字、不同花色的牌并不相同。"
              },
              "id": "hk-2-2-b",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "Three identical character tiles",
                    "tw": "三、三、三萬",
                    "zh": "三、三、三万"
                  },
                  "tiles": [
                    "m3",
                    "m3",
                    "m3"
                  ]
                },
                {
                  "id": "b",
                  "label": {
                    "en": "One, two, three characters",
                    "tw": "一、二、三萬",
                    "zh": "一、二、三万"
                  },
                  "tiles": [
                    "m1",
                    "m2",
                    "m3"
                  ]
                },
                {
                  "id": "c",
                  "label": {
                    "en": "Same number, different suits",
                    "tw": "三萬、三筒、三條",
                    "zh": "三万、三筒、三条"
                  },
                  "tiles": [
                    "m3",
                    "p3",
                    "s3"
                  ]
                }
              ],
              "prompt": {
                "en": "Which group is a triplet?",
                "tw": "哪一組是刻子？",
                "zh": "哪一组是刻子？"
              },
              "type": "choice"
            },
            {
              "count": 3,
              "explanation": {
                "en": "A triplet is three identical tiles. Equal numbers in different suits are different tiles.",
                "tw": "三張完全相同的牌組成刻子。相同數字、不同花色的牌並不相同。",
                "zh": "三张完全相同的牌组成刻子。相同数字、不同花色的牌并不相同。"
              },
              "id": "hk-2-2-c",
              "meld": "triplet",
              "prompt": {
                "en": "Build a triplet of honours.",
                "tw": "用字牌組成刻子。",
                "zh": "用字牌组成刻子。"
              },
              "tiles": [
                "z5",
                "z1",
                "z5",
                "z5"
              ],
              "type": "pick"
            }
          ],
          "title": {
            "en": "Build a triplet",
            "tw": "組成刻子",
            "zh": "组成刻子"
          }
        },
        {
          "example": {
            "caption": {
              "en": "A pair of six dots has two tiles, not three.",
              "tw": "一對六筒：只有兩張，不是刻子。",
              "zh": "一对六筒：只有两张，不是刻子。"
            },
            "tiles": [
              "p6",
              "p6"
            ]
          },
          "id": "hk-2-3",
          "intro": {
            "en": "A pair is two identical tiles. One pair serves as the eyes in this basic hand shape.",
            "tw": "兩張完全相同的牌組成對子；基礎牌型中選作將牌的就是其中一對。",
            "zh": "两张完全相同的牌组成对子；基础牌型中选作将牌的就是其中一对。"
          },
          "questions": [
            {
              "count": 2,
              "explanation": {
                "en": "A pair is two identical tiles. One pair serves as the eyes in this basic hand shape.",
                "tw": "兩張完全相同的牌組成對子；基礎牌型中選作將牌的就是其中一對。",
                "zh": "两张完全相同的牌组成对子；基础牌型中选作将牌的就是其中一对。"
              },
              "id": "hk-2-3-a",
              "meld": "pair",
              "prompt": {
                "en": "Select two tiles to make a pair.",
                "tw": "選兩張牌組成對子。",
                "zh": "选两张牌组成对子。"
              },
              "tiles": [
                "p6",
                "p7",
                "p6",
                "s6"
              ],
              "type": "pick"
            },
            {
              "answerId": "c",
              "explanation": {
                "en": "A pair is two identical tiles. One pair serves as the eyes in this basic hand shape.",
                "tw": "兩張完全相同的牌組成對子；基礎牌型中選作將牌的就是其中一對。",
                "zh": "两张完全相同的牌组成对子；基础牌型中选作将牌的就是其中一对。"
              },
              "id": "hk-2-3-b",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "A sequence",
                    "tw": "順子",
                    "zh": "顺子"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "A triplet",
                    "tw": "刻子",
                    "zh": "刻子"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "en": "A pair",
                    "tw": "對子",
                    "zh": "对子"
                  }
                }
              ],
              "prompt": {
                "en": "What do these two tiles make?",
                "tw": "下面這兩張牌是甚麼組合？",
                "zh": "下面这两张牌是什么组合？"
              },
              "tiles": [
                "z7",
                "z7"
              ],
              "type": "choice"
            },
            {
              "count": 2,
              "explanation": {
                "en": "A pair is two identical tiles. One pair serves as the eyes in this basic hand shape.",
                "tw": "兩張完全相同的牌組成對子；基礎牌型中選作將牌的就是其中一對。",
                "zh": "两张完全相同的牌组成对子；基础牌型中选作将牌的就是其中一对。"
              },
              "id": "hk-2-3-c",
              "meld": "pair",
              "prompt": {
                "en": "Find a pair in a new set of tiles.",
                "tw": "在新牌面中再找一對。",
                "zh": "在新牌面中再找一对。"
              },
              "tiles": [
                "m8",
                "p8",
                "m9",
                "m8"
              ],
              "type": "pick"
            }
          ],
          "title": {
            "en": "Pairs and eyes",
            "tw": "找到對子和將牌",
            "zh": "找到对子和将牌"
          }
        }
      ],
      "summary": {
        "en": "Make sequences, triplets and pairs.",
        "tw": "動手組成順子、刻子和對子。",
        "zh": "动手组成顺子、刻子和对子。"
      },
      "title": {
        "en": "Build your groups",
        "tw": "認識組合",
        "zh": "认识组合"
      }
    },
    {
      "id": "hk-3",
      "lessons": [
        {
          "example": {
            "caption": {
              "en": "This hand can be divided into four sets and a pair. A complete basic shape still needs to meet the other conditions of the ruleset to be a legal win.",
              "tw": "這手牌可以拆成四組面子和一對將。這只說明基礎結構完整；實際胡牌還需要滿足所學規則的其他條件。",
              "zh": "这手牌可以拆成四组面子和一对将。这只说明基础结构完整；实际胡牌还需要满足所学规则的其他条件。"
            },
            "tiles": [
              "m1",
              "m2",
              "m3",
              "p1",
              "p2",
              "p3",
              "s1",
              "s2",
              "s3",
              "m7",
              "m8",
              "m9",
              "p5",
              "p5"
            ]
          },
          "id": "hk-3-1",
          "intro": {
            "en": "Practise a common basic shape without kongs: four sequences or triplets and a pair. Special hands come later.",
            "tw": "先練一種不含槓的常見基礎結構：四組順子或刻子，加一對將。特殊牌型稍後學習。",
            "zh": "先练一种不含杠的常见基础结构：四组顺子或刻子，加一对将。特殊牌型稍后学习。"
          },
          "questions": [
            {
              "answerId": "a",
              "explanation": {
                "en": "This hand can be divided into four sets and a pair. A complete basic shape still needs to meet the other conditions of the ruleset to be a legal win.",
                "tw": "這手牌可以拆成四組面子和一對將。這只說明基礎結構完整；實際胡牌還需要滿足所學規則的其他條件。",
                "zh": "这手牌可以拆成四组面子和一对将。这只说明基础结构完整；实际胡牌还需要满足所学规则的其他条件。"
              },
              "id": "hk-3-1-a",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "Four sets and a pair",
                    "tw": "四組面子和一對將",
                    "zh": "四组面子和一对将"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "Three sets and two pairs",
                    "tw": "三組面子和兩對",
                    "zh": "三组面子和两对"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "en": "Only four sets",
                    "tw": "只有四組面子",
                    "zh": "只有四组面子"
                  }
                }
              ],
              "prompt": {
                "en": "What makes this basic shape?",
                "tw": "這個基礎結構由甚麼組成？",
                "zh": "这个基础结构由什么组成？"
              },
              "type": "choice"
            },
            {
              "answerId": "b",
              "explanation": {
                "en": "Four sets of three are twelve tiles, plus a pair makes fourteen. This example has no kongs.",
                "tw": "四組三張牌是十二張，再加一對兩張牌，共十四張；這裡沒有槓。",
                "zh": "四组三张牌是十二张，再加一对两张牌，共十四张；这里没有杠。"
              },
              "id": "hk-3-1-b",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "12 tiles",
                    "tw": "12 張",
                    "zh": "12 张"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "14 tiles",
                    "tw": "14 張",
                    "zh": "14 张"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "en": "16 tiles",
                    "tw": "16 張",
                    "zh": "16 张"
                  }
                }
              ],
              "prompt": {
                "en": "How many tiles are in this example?",
                "tw": "這副示例牌有多少張？",
                "zh": "这副示例牌有多少张？"
              },
              "tiles": [
                "m1",
                "m2",
                "m3",
                "p1",
                "p2",
                "p3",
                "s1",
                "s2",
                "s3",
                "m7",
                "m8",
                "m9",
                "p5",
                "p5"
              ],
              "type": "choice"
            },
            {
              "answerId": "b",
              "explanation": {
                "en": "This hand can be divided into four sets and a pair. A complete basic shape still needs to meet the other conditions of the ruleset to be a legal win.",
                "tw": "這手牌可以拆成四組面子和一對將。這只說明基礎結構完整；實際胡牌還需要滿足所學規則的其他條件。",
                "zh": "这手牌可以拆成四组面子和一对将。这只说明基础结构完整；实际胡牌还需要满足所学规则的其他条件。"
              },
              "id": "hk-3-1-c",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "Always",
                    "tw": "一定可以",
                    "zh": "一定可以"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "Other ruleset conditions must also be met",
                    "tw": "還要檢查所學規則的其他條件",
                    "zh": "还要检查所学规则的其他条件"
                  }
                }
              ],
              "prompt": {
                "en": "Does this basic shape always mean a legal win?",
                "tw": "湊出這個基礎結構，是否一定可以胡牌？",
                "zh": "凑出这个基础结构，是否一定可以胡牌？"
              },
              "type": "choice"
            }
          ],
          "title": {
            "en": "Four sets and a pair",
            "tw": "四組加一對",
            "zh": "四组加一对"
          }
        },
        {
          "example": {
            "caption": {
              "en": "There are four sequences here. The five dots still needs a partner.",
              "tw": "這手牌已有四個順子，剩下五筒還沒有搭配。",
              "zh": "这手牌已有四个顺子，剩下五筒还没有搭配。"
            },
            "tiles": [
              "m1",
              "m2",
              "m3",
              "p1",
              "p2",
              "p3",
              "s1",
              "s2",
              "s3",
              "m7",
              "m8",
              "m9",
              "p5"
            ]
          },
          "id": "hk-3-2",
          "intro": {
            "en": "With thirteen tiles, look at the completed groups and what is left. Find a tile that completes the shape.",
            "tw": "手裡有十三張牌時，觀察已經成組的牌和剩下的牌，找出能補全結構的一張。",
            "zh": "手里有十三张牌时，观察已经成组的牌和剩下的牌，找出能补全结构的一张。"
          },
          "questions": [
            {
              "explanation": {
                "en": "This hand can be divided into four sets and a pair. A complete basic shape still needs to meet the other conditions of the ruleset to be a legal win.",
                "tw": "這手牌可以拆成四組面子和一對將。這只說明基礎結構完整；實際胡牌還需要滿足所學規則的其他條件。",
                "zh": "这手牌可以拆成四组面子和一对将。这只说明基础结构完整；实际胡牌还需要满足所学规则的其他条件。"
              },
              "hand": [
                "m1",
                "m2",
                "m3",
                "p1",
                "p2",
                "p3",
                "s1",
                "s2",
                "s3",
                "m7",
                "m8",
                "m9",
                "p5"
              ],
              "id": "hk-3-2-a",
              "options": [
                {
                  "id": "0",
                  "tile": "p5"
                },
                {
                  "id": "1",
                  "tile": "s8"
                },
                {
                  "id": "2",
                  "tile": "m2"
                }
              ],
              "prompt": {
                "en": "Choose a tile to complete four sets and a pair.",
                "tw": "選一張牌，補成四組面子加一對將。",
                "zh": "选一张牌，补成四组面子加一对将。"
              },
              "type": "complete"
            },
            {
              "explanation": {
                "en": "This hand can be divided into four sets and a pair. A complete basic shape still needs to meet the other conditions of the ruleset to be a legal win.",
                "tw": "這手牌可以拆成四組面子和一對將。這只說明基礎結構完整；實際胡牌還需要滿足所學規則的其他條件。",
                "zh": "这手牌可以拆成四组面子和一对将。这只说明基础结构完整；实际胡牌还需要满足所学规则的其他条件。"
              },
              "hand": [
                "m2",
                "m2",
                "m2",
                "p4",
                "p5",
                "p6",
                "s6",
                "s7",
                "s8",
                "z5",
                "z5",
                "z5",
                "z1"
              ],
              "id": "hk-3-2-b",
              "options": [
                {
                  "id": "0",
                  "tile": "z2"
                },
                {
                  "id": "1",
                  "tile": "p9"
                },
                {
                  "id": "2",
                  "tile": "z1"
                }
              ],
              "prompt": {
                "en": "Choose a tile to complete four sets and a pair.",
                "tw": "選一張牌，補成四組面子加一對將。",
                "zh": "选一张牌，补成四组面子加一对将。"
              },
              "type": "complete"
            },
            {
              "explanation": {
                "en": "This hand can be divided into four sets and a pair. A complete basic shape still needs to meet the other conditions of the ruleset to be a legal win.",
                "tw": "這手牌可以拆成四組面子和一對將。這只說明基礎結構完整；實際胡牌還需要滿足所學規則的其他條件。",
                "zh": "这手牌可以拆成四组面子和一对将。这只说明基础结构完整；实际胡牌还需要满足所学规则的其他条件。"
              },
              "hand": [
                "s1",
                "s2",
                "s3",
                "s4",
                "s5",
                "s6",
                "p7",
                "p8",
                "p9",
                "z1",
                "z1",
                "z1",
                "m8"
              ],
              "id": "hk-3-2-c",
              "options": [
                {
                  "id": "0",
                  "tile": "p8"
                },
                {
                  "id": "1",
                  "tile": "m8"
                },
                {
                  "id": "2",
                  "tile": "s8"
                }
              ],
              "prompt": {
                "en": "Choose a tile to complete four sets and a pair.",
                "tw": "選一張牌，補成四組面子加一對將。",
                "zh": "选一张牌，补成四组面子加一对将。"
              },
              "type": "complete"
            }
          ],
          "title": {
            "en": "Find the missing tile",
            "tw": "補上最後一張",
            "zh": "补上最后一张"
          }
        },
        {
          "example": {
            "caption": {
              "en": "Sequences and triplets can both be sets in this basic shape.",
              "tw": "順子和刻子都能用作這個基礎結構中的面子。",
              "zh": "顺子和刻子都能用作这个基础结构中的面子。"
            },
            "tiles": [
              "m3",
              "m4",
              "m5",
              "z6",
              "z6",
              "z6"
            ]
          },
          "id": "hk-3-3",
          "intro": {
            "en": "Try a new set of tiles. Hints are available, and practice keeps track of what needs review.",
            "tw": "換一副牌再試試。需要時可以查看提示；練習會記錄哪些知識點需要複習。",
            "zh": "换一副牌再试试。需要时可以查看提示；练习会记录哪些知识点需要复习。"
          },
          "questions": [
            {
              "explanation": {
                "en": "This hand can be divided into four sets and a pair. A complete basic shape still needs to meet the other conditions of the ruleset to be a legal win.",
                "tw": "這手牌可以拆成四組面子和一對將。這只說明基礎結構完整；實際胡牌還需要滿足所學規則的其他條件。",
                "zh": "这手牌可以拆成四组面子和一对将。这只说明基础结构完整；实际胡牌还需要满足所学规则的其他条件。"
              },
              "hand": [
                "m3",
                "m4",
                "m5",
                "p6",
                "p7",
                "p8",
                "s2",
                "s3",
                "s4",
                "z6",
                "z6",
                "z6",
                "p2"
              ],
              "id": "hk-3-3-a",
              "options": [
                {
                  "id": "0",
                  "tile": "m2"
                },
                {
                  "id": "1",
                  "tile": "p2"
                },
                {
                  "id": "2",
                  "tile": "z1"
                }
              ],
              "prompt": {
                "en": "Choose a tile to complete four sets and a pair.",
                "tw": "選一張牌，補成四組面子加一對將。",
                "zh": "选一张牌，补成四组面子加一对将。"
              },
              "type": "complete"
            },
            {
              "count": 3,
              "explanation": {
                "en": "A sequence is three consecutive numbered tiles in the same suit. Honours cannot form a sequence.",
                "tw": "同一花色的三張連續數牌組成順子；字牌不能組成順子。",
                "zh": "同一花色的三张连续数牌组成顺子；字牌不能组成顺子。"
              },
              "hideLabels": true,
              "id": "hk-3-3-b",
              "meld": "sequence",
              "prompt": {
                "en": "Without corner labels, select a sequence.",
                "tw": "不要看角標，選三張牌組成順子。",
                "zh": "不要看角标，选三张牌组成顺子。"
              },
              "tiles": [
                "p6",
                "p8",
                "m7",
                "p7"
              ],
              "type": "pick"
            },
            {
              "answerId": "b",
              "explanation": {
                "en": "A pair is two identical tiles. One pair serves as the eyes in this basic hand shape.",
                "tw": "兩張完全相同的牌組成對子；基礎牌型中選作將牌的就是其中一對。",
                "zh": "两张完全相同的牌组成对子；基础牌型中选作将牌的就是其中一对。"
              },
              "id": "hk-3-3-c",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "Yes, matching numbers are enough",
                    "tw": "能，數字相同就可以",
                    "zh": "能，数字相同就可以"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "No, they are different suits",
                    "tw": "不能，花色不同",
                    "zh": "不能，花色不同"
                  }
                }
              ],
              "prompt": {
                "en": "Do these tiles make a pair?",
                "tw": "這兩張牌能否組成對子？",
                "zh": "这两张牌能否组成对子？"
              },
              "tiles": [
                "m5",
                "p5"
              ],
              "type": "choice"
            }
          ],
          "title": {
            "en": "Try it on your own",
            "tw": "獨立小測",
            "zh": "独立小测"
          }
        }
      ],
      "summary": {
        "en": "Connect the groups and complete four sets and a pair.",
        "tw": "把組合串起來，獨立補成四組一對。",
        "zh": "把组合串起来，独立补成四组一对。"
      },
      "title": {
        "en": "Complete a basic hand",
        "tw": "拼出基礎牌型",
        "zh": "拼出基础牌型"
      }
    },
    {
      "id": "hk-4",
      "lessons": [
        {
          "example": {
            "caption": {
              "en": "Normal turns run East, South, West, North. Claims can interrupt that order.",
              "tw": "正常摸打按東、南、西、北的順序輪轉；叫牌可能改變次序。",
              "zh": "正常摸打按东、南、西、北的顺序轮转；叫牌可能改变次序。"
            },
            "tiles": [
              "z1",
              "z2",
              "z3",
              "z4"
            ]
          },
          "id": "hk-4-1",
          "intro": {
            "en": "East is the dealer. After the deal, East has fourteen tiles and each other player thirteen. East discards first.",
            "tw": "東家是莊家。配牌完成後，東家有十四張，其餘三家各十三張；先由東家出牌。",
            "zh": "东家是庄家。配牌完成后，东家有十四张，其余三家各十三张；先由东家出牌。"
          },
          "questions": [
            {
              "answerId": "a",
              "explanation": {
                "en": "East already received the extra tile during the deal, so East discards first.",
                "tw": "東家先出牌，因為配牌時東家已多取了一張。",
                "zh": "东家先出牌，因为配牌时东家已多取了一张。"
              },
              "id": "hk-4-1-a",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "East",
                    "tw": "東家",
                    "zh": "东家"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "South",
                    "tw": "南家",
                    "zh": "南家"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "en": "Whoever sorts first",
                    "tw": "誰先整理好就誰出",
                    "zh": "谁先整理好就谁出"
                  }
                }
              ],
              "prompt": {
                "en": "Who discards first after the deal?",
                "tw": "配牌剛完成，誰先出牌？",
                "zh": "配牌刚完成，谁先出牌？"
              },
              "type": "choice"
            },
            {
              "answerId": "b",
              "explanation": {
                "en": "Without a claim, South takes the next draw.",
                "tw": "無人叫牌時，輪到東家的下家南家摸牌。",
                "zh": "无人叫牌时，轮到东家的下家南家摸牌。"
              },
              "id": "hk-4-1-b",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "North",
                    "tw": "北家",
                    "zh": "北家"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "South",
                    "tw": "南家",
                    "zh": "南家"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "en": "East draws again",
                    "tw": "東家繼續摸",
                    "zh": "东家继续摸"
                  }
                }
              ],
              "prompt": {
                "en": "East discards and nobody claims. Who plays next?",
                "tw": "東家出牌且無人叫牌，輪到誰？",
                "zh": "东家出牌且无人叫牌，轮到谁？"
              },
              "type": "choice"
            },
            {
              "answerId": "c",
              "explanation": {
                "en": "Each non-dealer gets thirteen and normally draws before discarding.",
                "tw": "其餘三家各十三張，輪到自己時通常先摸一張再出牌。",
                "zh": "其余三家各十三张，轮到自己时通常先摸一张再出牌。"
              },
              "id": "hk-4-1-c",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "12",
                    "tw": "12 張",
                    "zh": "12 张"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "14",
                    "tw": "14 張",
                    "zh": "14 张"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "en": "13",
                    "tw": "13 張",
                    "zh": "13 张"
                  }
                }
              ],
              "prompt": {
                "en": "How many concealed tiles does a non-dealer receive?",
                "tw": "普通開局配牌後，非莊家有多少張暗牌？",
                "zh": "普通开局配牌后，非庄家有多少张暗牌？"
              },
              "type": "choice"
            }
          ],
          "title": {
            "en": "Seats and the first discard",
            "tw": "座位與開局",
            "zh": "座位与开局"
          }
        },
        {
          "example": {
            "caption": {
              "en": "Normally count fourteen before discarding and thirteen after. A kong counts as one three-tile set for this check.",
              "tw": "出牌前通常按十四張計算，出牌後回到十三張；槓按一個三張組合折算。",
              "zh": "出牌前通常按十四张计算，出牌后回到十三张；杠按一个三张组合折算。"
            },
            "tiles": [
              "m1",
              "m2",
              "m3",
              "p4",
              "p5",
              "p6",
              "s2",
              "s3",
              "s4",
              "z5",
              "z5",
              "z5",
              "p9"
            ]
          },
          "id": "hk-4-2",
          "intro": {
            "en": "On a normal turn without a claim, replacement or win, draw from the head of the wall and discard into the river.",
            "tw": "沒有叫牌、補牌或胡牌時，自己的回合是先從牌牆頭摸一張，再打出一張到牌河。",
            "zh": "没有叫牌、补牌或胡牌时，自己的回合是先从牌墙头摸一张，再打出一张到牌河。"
          },
          "questions": [
            {
              "answerId": "b",
              "explanation": {
                "en": "Observe the discard and possible claims before taking your draw.",
                "tw": "先看清上一張棄牌和叫牌情況，再進行自己的摸牌。",
                "zh": "先看清上一张弃牌和叫牌情况，再进行自己的摸牌。"
              },
              "id": "hk-4-2-a",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "Draw early",
                    "tw": "提前摸牌",
                    "zh": "提前摸牌"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "Wait for the discard and claim window",
                    "tw": "等上家出牌並確認叫牌機會",
                    "zh": "等上家出牌并确认叫牌机会"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "en": "Discard first",
                    "tw": "先丟一張",
                    "zh": "先丢一张"
                  }
                }
              ],
              "prompt": {
                "en": "The previous player has not discarded. What should you do?",
                "tw": "上家還沒出牌，你應該怎樣做？",
                "zh": "上家还没出牌，你应该怎么做？"
              },
              "type": "choice"
            },
            {
              "answerId": "c",
              "explanation": {
                "en": "A normal draw is followed by a discard, keeping the tile count correct.",
                "tw": "正常回合摸一張後需要打出一張，避免手牌張數不符。",
                "zh": "正常回合摸一张后需要打出一张，避免手牌张数不符。"
              },
              "id": "hk-4-2-b",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "Draw another",
                    "tw": "再摸一張",
                    "zh": "再摸一张"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "Expose your hand",
                    "tw": "把暗牌全部公開",
                    "zh": "把暗牌全部公开"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "en": "Discard one tile",
                    "tw": "打出一張牌",
                    "zh": "打出一张牌"
                  }
                }
              ],
              "prompt": {
                "en": "You drew a tile and are not winning or declaring a kong. What next?",
                "tw": "你剛摸到一張牌，未胡牌也不開槓，下一步是甚麼？",
                "zh": "你刚摸到一张牌，未胡牌也不开杠，下一步是什么？"
              },
              "type": "choice"
            },
            {
              "answerId": "a",
              "explanation": {
                "en": "Keep discards in order in the river, separate from the wall and fixed exposed sets.",
                "tw": "棄牌放入牌河，保留出牌順序，不能混回牌牆或固定的明牌組合。",
                "zh": "弃牌放入牌河，保留出牌顺序，不能混回牌墙或固定的明牌组合。"
              },
              "id": "hk-4-2-c",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "Into your ordered discard area",
                    "tw": "按次序放入自己面前的牌河",
                    "zh": "按次序放入自己面前的牌河"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "Back into the wall",
                    "tw": "放回牌牆裡",
                    "zh": "放回牌墙里"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "en": "Into an exposed pung",
                    "tw": "混進已碰出的牌",
                    "zh": "混进已碰出的牌"
                  }
                }
              ],
              "prompt": {
                "en": "Where does a discarded tile go?",
                "tw": "打出的牌放在哪裡？",
                "zh": "打出的牌放在哪里？"
              },
              "type": "choice"
            }
          ],
          "title": {
            "en": "Draw, then discard",
            "tw": "摸一張，再出一張",
            "zh": "摸一张，再出一张"
          }
        },
        {
          "example": {
            "caption": {
              "en": "Flowers have their own scoring and flower-win exceptions. Confirm the table rules first.",
              "tw": "花牌有另行計番與花胡例外；切換牌桌前先確認採用的規則。",
              "zh": "花牌有另行计番与花胡例外；切换牌桌前先确认采用的规则。"
            },
            "tiles": [
              "f1",
              "f5"
            ]
          },
          "id": "hk-4-3",
          "intro": {
            "en": "The teaching rounds use no flowers. With flowers in use, normally expose a drawn flower and replace it from the tail. The hand is drawn if the wall ends and nobody wins on the last discard.",
            "tw": "主線教學局採用無花規則。有花牌桌上，摸到花後通常亮出花牌並從牌尾補牌。牌牆耗盡且最後棄牌無人胡時流局。",
            "zh": "主线教学局采用无花规则。有花牌桌上，摸到花后通常亮出花牌并从牌尾补牌。牌墙耗尽且最后弃牌无人胡时流局。"
          },
          "questions": [
            {
              "answerId": "b",
              "explanation": {
                "en": "Ordinary flower replacement separates the flower and draws from the tail; flower wins have special rules.",
                "tw": "普通補花把花與手牌分開，從牌尾補回；特殊花胡情況另按花牌規則。",
                "zh": "普通补花把花与手牌分开，从牌尾补回；特殊花胡情况另按花牌规则。"
              },
              "id": "hk-4-3-a",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "Use it in a sequence",
                    "tw": "把花當作順子的一張",
                    "zh": "把花当作顺子的一张"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "Expose it and replace from the tail",
                    "tw": "亮出花牌，從牌尾補牌",
                    "zh": "亮出花牌，从牌尾补牌"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "en": "Continue one tile short",
                    "tw": "少一張也繼續出牌",
                    "zh": "少一张也继续出牌"
                  }
                }
              ],
              "prompt": {
                "en": "Under flower rules, what normally follows drawing a flower?",
                "tw": "有花牌規則下，普通摸花後通常怎樣做？",
                "zh": "有花牌规则下，普通摸花后通常怎么做？"
              },
              "type": "choice"
            },
            {
              "answerId": "a",
              "explanation": {
                "en": "The hand ends drawn; discards do not become a new wall. Under this reference, a drawn hand does not retain the dealer.",
                "tw": "本局以流局結束，不把棄牌重新當牌牆；協會規則流局不連莊。",
                "zh": "本局以流局结束，不把弃牌重新当牌墙；协会规则流局不连庄。"
              },
              "id": "hk-4-3-b",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "The hand is drawn",
                    "tw": "流局",
                    "zh": "流局"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "East wins automatically",
                    "tw": "自動判莊家贏",
                    "zh": "自动判庄家赢"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "en": "Draw from the discards",
                    "tw": "從棄牌重新摸",
                    "zh": "从弃牌重新摸"
                  }
                }
              ],
              "prompt": {
                "en": "The last tile is drawn and nobody wins on the following discard. What happens?",
                "tw": "最後一張牌摸走後，隨後棄牌也無人胡，會怎樣？",
                "zh": "最后一张牌摸走后，随后弃牌也无人胡，会怎样？"
              },
              "type": "choice"
            },
            {
              "answerId": "c",
              "explanation": {
                "en": "Preserve the table until the win and score are checked, then begin the next hand.",
                "tw": "先保留原狀，核對是否成立和分數，再開始下一局。",
                "zh": "先保留原状，核对是否成立和分数，再开始下一局。"
              },
              "id": "hk-4-3-c",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "Immediately after the call",
                    "tw": "一喊胡就立刻洗牌",
                    "zh": "一喊胡就立刻洗牌"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "After your own quick look",
                    "tw": "自己看一眼就夠",
                    "zh": "自己看一眼就够"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "en": "After everyone confirms the hand and score",
                    "tw": "四家確認牌型與計分後",
                    "zh": "四家确认牌型与计分后"
                  }
                }
              ],
              "prompt": {
                "en": "When may the table be mixed after a win declaration?",
                "tw": "別人宣佈胡牌後，甚麼時候可以推亂牌？",
                "zh": "别人宣布胡牌后，什么时候可以推乱牌？"
              },
              "type": "choice"
            }
          ],
          "title": {
            "en": "Flowers, drawn hands and checks",
            "tw": "補花、流局與核對",
            "zh": "补花、流局与核对"
          }
        }
      ],
      "summary": {
        "en": "From the deal to drawing, discarding and ending a hand.",
        "tw": "從配牌到摸打、補花和流局。",
        "zh": "从配牌到摸打、补花和流局。"
      },
      "title": {
        "en": "Follow the flow of play",
        "tw": "理解一輪怎樣進行",
        "zh": "理解一轮怎么进行"
      }
    },
    {
      "id": "hk-5",
      "lessons": [
        {
          "example": {
            "caption": {
              "en": "If the previous player discards three dots, two and four dots can form a chow.",
              "tw": "上家打出三筒，二筒和四筒可以用來吃牌。",
              "zh": "上家打出三筒，二筒和四筒可以用来吃牌。"
            },
            "tiles": [
              "p2",
              "p4"
            ]
          },
          "id": "hk-5-1",
          "intro": {
            "en": "A chow uses the previous player’s latest discard with two tiles from your hand for a same-suit sequence. Then discard without taking a draw.",
            "tw": "吃牌在香港也叫「上牌」。只有上家剛打出的牌，才能配合自己兩張數牌組成同花色順子；吃後不再摸牌，直接出牌。",
            "zh": "吃牌在香港也叫「上牌」。只有上家刚打出的牌，才能配合自己两张数牌组成同花色顺子；吃后不再摸牌，直接出牌。"
          },
          "questions": [
            {
              "answerId": "b",
              "explanation": {
                "en": "A valid sequence shape is not enough: the discard must come from the previous player.",
                "tw": "順子形狀合適還不夠；來源也必須是上家。",
                "zh": "顺子形状合适还不够；来源也必须是上家。"
              },
              "id": "hk-5-1-a",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "Yes, a sequence is enough",
                    "tw": "能，湊順子就行",
                    "zh": "能，凑顺子就行"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "No, a chow only takes the previous player’s discard",
                    "tw": "不能，吃牌只能取上家棄牌",
                    "zh": "不能，吃牌只能取上家弃牌"
                  }
                }
              ],
              "prompt": {
                "en": "You hold two and four dots. The opposite player discards three dots. May you chow?",
                "tw": "你有二筒和四筒，對家打三筒，能吃嗎？",
                "zh": "你有二筒和四筒，对家打三筒，能吃吗？"
              },
              "tiles": [
                "p2",
                "p4",
                "p3"
              ],
              "type": "choice"
            },
            {
              "answerId": "a",
              "explanation": {
                "en": "Expose the fixed sequence, then discard. Do not take an extra normal draw.",
                "tw": "亮出固定的順子後直接出牌。這裡不再補一次普通摸牌。",
                "zh": "亮出固定的顺子后直接出牌。这里不再补一次普通摸牌。"
              },
              "id": "hk-5-1-b",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "Discard one legal tile",
                    "tw": "直接打出一張合法牌",
                    "zh": "直接打出一张合法牌"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "Draw first",
                    "tw": "先摸一張",
                    "zh": "先摸一张"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "en": "Hide the chow again",
                    "tw": "把吃來的順子收回暗牌",
                    "zh": "把吃来的顺子收回暗牌"
                  }
                }
              ],
              "prompt": {
                "en": "After completing a chow, what comes next?",
                "tw": "吃牌完成後，下一步是甚麼？",
                "zh": "吃牌完成后，下一步是什么？"
              },
              "type": "choice"
            },
            {
              "claimTile": "p3",
              "count": 2,
              "explanation": {
                "en": "Two, three and four dots form a same-suit sequence.",
                "tw": "二筒、三筒、四筒組成同一花色的順子。",
                "zh": "二筒、三筒、四筒组成同一花色的顺子。"
              },
              "id": "hk-5-1-c",
              "meld": "chow-support",
              "prompt": {
                "en": "The previous player just discarded three dots. Select two tiles for a chow.",
                "tw": "上家剛出三筒，請選手中兩張牌配合它吃牌。",
                "zh": "上家刚出三筒，请选手中两张牌配合它吃牌。"
              },
              "tiles": [
                "p2",
                "p4",
                "s2",
                "z1"
              ],
              "type": "pick"
            }
          ],
          "title": {
            "en": "Chow: only from the previous player",
            "tw": "吃牌：只取上家的牌",
            "zh": "吃牌：只取上家的牌"
          }
        },
        {
          "example": {
            "caption": {
              "en": "After a pung, discard without drawing. You may decline a pung, but a declared valid call is binding.",
              "tw": "碰後直接出牌；能碰不代表必須碰，但正式叫碰後不能隨意反悔。",
              "zh": "碰后直接出牌；能碰不代表必须碰，但正式叫碰后不能随意反悔。"
            },
            "tiles": [
              "z5",
              "z5",
              "z5"
            ]
          },
          "id": "hk-5-2",
          "intro": {
            "en": "A pung takes any opponent’s latest discard with your matching pair. In competing calls before confirmation, a win takes priority over pung or exposed kong, which take priority over chow.",
            "tw": "碰牌可以取任一對手剛打出的牌，與自己的兩張相同牌組成明刻。尚未落實的同時叫牌中，胡牌優先於碰或大明槓，後者優先於吃。",
            "zh": "碰牌可以取任一对手刚打出的牌，与自己的两张相同牌组成明刻。尚未落实的同时叫牌中，胡牌优先于碰或大明杠，后者优先于吃。"
          },
          "questions": [
            {
              "answerId": "a",
              "explanation": {
                "en": "Subject to timing and other conditions, a pung can take any opponent’s latest discard.",
                "tw": "只要滿足時機等條件，碰可取任一對手的最新棄牌。",
                "zh": "只要满足时机等条件，碰可取任一对手的最新弃牌。"
              },
              "id": "hk-5-2-a",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "Yes, a pung is not limited to the previous player",
                    "tw": "可以，碰不限於上家",
                    "zh": "可以，碰不限于上家"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "No, only from the previous player",
                    "tw": "不可以，只能碰上家",
                    "zh": "不可以，只能碰上家"
                  }
                }
              ],
              "prompt": {
                "en": "You hold two red dragons and the next player discards one. Can you pung?",
                "tw": "你有兩張紅中，下家剛打紅中，可以碰嗎？",
                "zh": "你有两张红中，下家刚打红中，可以碰吗？"
              },
              "type": "choice"
            },
            {
              "answerId": "b",
              "explanation": {
                "en": "A legal win takes priority in competing claims. At the real table, make the call promptly.",
                "tw": "比較尚未落實的合法叫牌時，胡牌優先。實際現場應及時出聲叫牌。",
                "zh": "比较尚未落实的合法叫牌时，胡牌优先。实际现场应及时出声叫牌。"
              },
              "id": "hk-5-2-b",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "Pung",
                    "tw": "碰牌",
                    "zh": "碰牌"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "The legal win",
                    "tw": "合法胡牌",
                    "zh": "合法胡牌"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "en": "Whoever has more tiles",
                    "tw": "由手牌最多的人決定",
                    "zh": "由手牌最多的人决定"
                  }
                }
              ],
              "prompt": {
                "en": "One player has a legal win and another calls pung on the same discard. Which has priority?",
                "tw": "同一張牌有人合法胡牌、有人碰，哪一個優先？",
                "zh": "同一张牌有人合法胡牌、有人碰，哪一个优先？"
              },
              "type": "choice"
            },
            {
              "answerId": "c",
              "explanation": {
                "en": "Claimed groups remain exposed and separate; they cannot be hidden and rearranged.",
                "tw": "吃碰槓形成的組合要公開並保持獨立，不能收回暗手重新組合。",
                "zh": "吃碰杠形成的组合要公开并保持独立，不能收回暗手重新组合。"
              },
              "id": "hk-5-2-c",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "Yes, until you win",
                    "tw": "能，只要還沒胡",
                    "zh": "能，只要还没胡"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "Yes, at a one-faan cost",
                    "tw": "能，付一番就可以",
                    "zh": "能，付一番就可以"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "en": "No, exposed groups are fixed",
                    "tw": "不能，明牌組合已固定",
                    "zh": "不能，明牌组合已固定"
                  }
                }
              ],
              "prompt": {
                "en": "Can an exposed pung later be split into a sequence?",
                "tw": "碰出的刻子以後能拆開改順子嗎？",
                "zh": "碰出的刻子以后能拆开改顺子吗？"
              },
              "type": "choice"
            }
          ],
          "title": {
            "en": "Pung and claim priority",
            "tw": "碰牌與叫牌優先",
            "zh": "碰牌与叫牌优先"
          }
        },
        {
          "example": {
            "caption": {
              "en": "In this reference, even a concealed kong shows all four tiles. A chow or pung does not immediately allow another concealed or added kong.",
              "tw": "協會參考規則下，暗槓也公開四張；吃碰後不能立即另開暗槓或加槓。",
              "zh": "协会参考规则下，暗杠也公开四张；吃碰后不能立即另开暗杠或加杠。"
            },
            "tiles": [
              "z5",
              "z5",
              "z5",
              "z5"
            ]
          },
          "id": "hk-5-3",
          "intro": {
            "en": "A kong requires four identical tiles and a declaration. Concealed and added kongs occur after your draw; three matching tiles plus a discard make an exposed kong. Reveal the four before replacing from the tail.",
            "tw": "四張相同牌經聲明才能作為槓。暗槓、加槓在自己的摸牌後處理；別人棄牌配手中三張叫大明槓。確認四張後從牌尾補一張。",
            "zh": "四张相同牌经声明才能作为杠。暗杠、加杠在自己的摸牌后处理；别人弃牌配手中三张叫大明杠。确认四张后从牌尾补一张。"
          },
          "questions": [
            {
              "answerId": "b",
              "explanation": {
                "en": "A kong uses an extra physical tile, so replace it before continuing.",
                "tw": "槓額外用了一張實體牌，需補回一張；先補牌後繼續操作。",
                "zh": "杠额外用了一张实体牌，需补回一张；先补牌后继续操作。"
              },
              "id": "hk-5-3-a",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "Take another discard",
                    "tw": "再向牌河拿一張",
                    "zh": "再向牌河拿一张"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "Take a replacement from the tail, then consider winning or discarding",
                    "tw": "從牌尾補一張，再判斷胡牌或出牌",
                    "zh": "从牌尾补一张，再判断胡牌或出牌"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "en": "Dismantle the kong",
                    "tw": "馬上把槓拆回手中",
                    "zh": "马上把杠拆回手中"
                  }
                }
              ],
              "prompt": {
                "en": "After declaring a kong and confirming its four tiles, what next?",
                "tw": "開槓並確認四張牌後，應當做甚麼？",
                "zh": "开杠并确认四张牌后，应当做什么？"
              },
              "type": "choice"
            },
            {
              "answerId": "a",
              "explanation": {
                "en": "An exposed pung cannot take a discard for an added kong. An exposed kong from a discard requires three concealed matching tiles.",
                "tw": "已有明刻不能用別人的棄牌加槓；大明槓須原先三張都在暗手。",
                "zh": "已有明刻不能用别人的弃牌加杠；大明杠须原先三张都在暗手。"
              },
              "id": "hk-5-3-b",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "No, an added kong uses the fourth tile in your own concealed hand",
                    "tw": "不可以，加槓使用自己暗手中的第四張",
                    "zh": "不可以，加杠使用自己暗手中的第四张"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "Yes, any fourth copy works",
                    "tw": "可以，任何第四張都行",
                    "zh": "可以，任何第四张都行"
                  }
                }
              ],
              "prompt": {
                "en": "You exposed a red-dragon pung. May you take another player’s fourth red dragon to add a kong?",
                "tw": "已有明刻三張紅中，他家打出第四張紅中，可以拿來加槓嗎？",
                "zh": "已有明刻三张红中，他家打出第四张红中，可以拿来加杠吗？"
              },
              "type": "choice"
            },
            {
              "answerId": "c",
              "explanation": {
                "en": "Ordinary hands can rob an added kong. Thirteen Orphans has a concealed-kong exception; declare promptly.",
                "tw": "一般牌型可搶加槓，十三幺另有搶暗槓例外；需要及時聲明。",
                "zh": "一般牌型可抢加杠，十三幺另有抢暗杠例外；需要及时声明。"
              },
              "id": "hk-5-3-c",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "Any concealed kong",
                    "tw": "任意暗槓",
                    "zh": "任意暗杠"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "A kong from the previous hand",
                    "tw": "已經結束的上一局的槓",
                    "zh": "已经结束的上一局的杠"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "en": "An added kong being declared",
                    "tw": "他家正在聲明的加槓",
                    "zh": "他家正在声明的加杠"
                  }
                }
              ],
              "prompt": {
                "en": "Which kong can an ordinary hand rob for a win?",
                "tw": "一般牌型可以搶哪一種槓？",
                "zh": "一般牌型可以抢哪一种杠？"
              },
              "type": "choice"
            }
          ],
          "title": {
            "en": "Three kongs and replacement draws",
            "tw": "三種槓與補牌",
            "zh": "三种杠与补牌"
          }
        }
      ],
      "summary": {
        "en": "Understand discard sources, exposed groups and replacements.",
        "tw": "看懂牌的來源、公開組合與補牌時機。",
        "zh": "看懂牌的来源、公开组合与补牌时机。"
      },
      "title": {
        "en": "Learn chow, pung and kong",
        "tw": "學會吃、碰、槓",
        "zh": "学会吃、碰、杠"
      }
    },
    {
      "id": "hk-6",
      "lessons": [
        {
          "example": {
            "caption": {
              "en": "Three and four dots can take two or five dots for a sequence, but the whole hand still matters.",
              "tw": "三、四筒可能由二筒或五筒組成順子，仍需結合整手牌判斷。",
              "zh": "三、四筒可能由二筒或五筒组成顺子，仍需结合整手牌判断。"
            },
            "tiles": [
              "p3",
              "p4"
            ]
          },
          "id": "hk-6-1",
          "intro": {
            "en": "Being one tile from a complete shape is often called ready. First find the shape’s waits, then check faan and available copies.",
            "tw": "只差一張便能組成牌型，常稱聽牌或叫胡。先找形狀上的等待牌，再核對番數和剩餘牌。",
            "zh": "只差一张便能组成牌型，常称听牌或叫胡。先找形状上的等待牌，再核对番数和剩余牌。"
          },
          "questions": [
            {
              "explanation": {
                "en": "Try each candidate and check for four sets and a pair. Tile types that complete a shape are different from copies still available.",
                "tw": "把候選牌逐張加入，檢查能否拆成四組加一對。等待牌的種類和實際剩餘張數是兩件事。",
                "zh": "把候选牌逐张加入，检查能否拆成四组加一对。等待牌的种类和实际剩余张数是两件事。"
              },
              "hand": [
                "m1",
                "m2",
                "m3",
                "s4",
                "s5",
                "s6",
                "z5",
                "z5",
                "z5",
                "p3",
                "p4",
                "z2",
                "z2"
              ],
              "id": "hk-6-1-a",
              "options": [
                {
                  "id": "0",
                  "tile": "p2"
                },
                {
                  "id": "1",
                  "tile": "p5"
                },
                {
                  "id": "2",
                  "tile": "p1"
                },
                {
                  "id": "3",
                  "tile": "z1"
                }
              ],
              "prompt": {
                "en": "Select every candidate that completes the basic shape; ignore faan for now.",
                "tw": "選出所有能補成基礎牌型的候選牌；暫不檢查番數。",
                "zh": "选出所有能补成基础牌型的候选牌；暂不检查番数。"
              },
              "type": "waits"
            },
            {
              "explanation": {
                "en": "Try each candidate and check for four sets and a pair. Tile types that complete a shape are different from copies still available.",
                "tw": "把候選牌逐張加入，檢查能否拆成四組加一對。等待牌的種類和實際剩餘張數是兩件事。",
                "zh": "把候选牌逐张加入，检查能否拆成四组加一对。等待牌的种类和实际剩余张数是两件事。"
              },
              "hand": [
                "m1",
                "m2",
                "m3",
                "p4",
                "p5",
                "p6",
                "s6",
                "s7",
                "s8",
                "z5",
                "z5",
                "z5",
                "z2"
              ],
              "id": "hk-6-1-b",
              "options": [
                {
                  "id": "0",
                  "tile": "z2"
                },
                {
                  "id": "1",
                  "tile": "z3"
                },
                {
                  "id": "2",
                  "tile": "p8"
                }
              ],
              "prompt": {
                "en": "Select every candidate that completes the basic shape; ignore faan for now.",
                "tw": "選出所有能補成基礎牌型的候選牌；暫不檢查番數。",
                "zh": "选出所有能补成基础牌型的候选牌；暂不检查番数。"
              },
              "type": "waits"
            },
            {
              "answerId": "b",
              "explanation": {
                "en": "A ready shape does not guarantee enough faan or that winning copies remain in the wall.",
                "tw": "聽牌形狀成立，不代表滿足最低胡牌番數，也不保證所需牌仍在牌牆。",
                "zh": "听牌形状成立，不代表满足最低胡牌番数，也不保证所需牌仍在牌墙。"
              },
              "id": "hk-6-1-c",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "Yes, no need to check faan",
                    "tw": "可以，不用再看番數",
                    "zh": "可以，不用再看番数"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "No, faan and other restrictions still apply",
                    "tw": "不可以，還要核對番數與禁例等條件",
                    "zh": "不可以，还要核对番数与禁例等条件"
                  }
                }
              ],
              "prompt": {
                "en": "After finding a shape’s waits, is a legal win guaranteed?",
                "tw": "找出等待牌後，能否直接認定可以胡牌？",
                "zh": "找出等待牌后，能否直接认定可以胡牌？"
              },
              "type": "choice"
            },
            {
              "explanation": {
                "en": "Keep the three complete sequences and inspect the seven-eight characters link.",
                "tw": "先保留三組現成順子，觀察七八萬兩面搭子。",
                "zh": "先保留三组现成顺子，观察七八万两面搭子。"
              },
              "hand": [
                "m1",
                "m2",
                "m3",
                "p1",
                "p2",
                "p3",
                "s1",
                "s2",
                "s3",
                "m7",
                "m8",
                "p5",
                "p5"
              ],
              "id": "hk-6-1-d",
              "options": [
                {
                  "id": "0",
                  "tile": "m6"
                },
                {
                  "id": "1",
                  "tile": "m9"
                },
                {
                  "id": "2",
                  "tile": "m5"
                },
                {
                  "id": "3",
                  "tile": "z1"
                }
              ],
              "prompt": {
                "en": "Which candidate tiles complete four sets and a pair?",
                "tw": "這手十三張缺哪幾種牌可組成四組一對？",
                "zh": "这手十三张缺哪几种牌可组成四组一对？"
              },
              "type": "waits"
            }
          ],
          "title": {
            "en": "Find your waits",
            "tw": "看懂等待牌",
            "zh": "看懂等待牌"
          }
        },
        {
          "example": {
            "caption": {
              "en": "These exercises compare shapes for a stated goal, rather than a universally best discard.",
              "tw": "這裡比較的是結構和學習目標，不聲稱存在適用於所有牌局的唯一最佳出牌。",
              "zh": "这里比较的是结构和学习目标，不声称存在适用于所有牌局的唯一最佳出牌。"
            },
            "tiles": [
              "m1",
              "m2",
              "m3",
              "p4",
              "p5",
              "s6",
              "s6",
              "z4"
            ]
          },
          "id": "hk-6-2",
          "intro": {
            "en": "Find completed sets, pairs and connected tiles. A discard recommendation needs a goal; visible tiles, faan and opponents can change it.",
            "tw": "先找已有面子、對子和有連接的數牌。出牌建議必須說明目標；不同牌池、番數和對手會改變選擇。",
            "zh": "先找已有面子、对子和有连接的数牌。出牌建议必须说明目标；不同牌池、番数和对手会改变选择。"
          },
          "questions": [
            {
              "answerId": "c",
              "explanation": {
                "en": "Four-five dots takes three or six; one-two characters only takes three, and four-six dots only five.",
                "tw": "四、五筒可接三筒或六筒；一、二萬只接三萬，四、六筒只接五筒。",
                "zh": "四、五筒可接三筒或六筒；一、二万只接三万，四、六筒只接五筒。"
              },
              "id": "hk-6-2-a",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "One and two characters",
                    "tw": "一、二萬",
                    "zh": "一、二万"
                  },
                  "tiles": [
                    "m1",
                    "m2"
                  ]
                },
                {
                  "id": "b",
                  "label": {
                    "en": "Four and six dots",
                    "tw": "四、六筒",
                    "zh": "四、六筒"
                  },
                  "tiles": [
                    "p4",
                    "p6"
                  ]
                },
                {
                  "id": "c",
                  "label": {
                    "en": "Four and five dots",
                    "tw": "四、五筒",
                    "zh": "四、五筒"
                  },
                  "tiles": [
                    "p4",
                    "p5"
                  ]
                }
              ],
              "prompt": {
                "en": "Ignoring faan and defence, which two-tile shape accepts two tile types for a sequence?",
                "tw": "暫不考慮番數和防守，哪組兩張牌能接受兩種牌補成順子？",
                "zh": "暂不考虑番数和防守，哪组两张牌能接受两种牌补成顺子？"
              },
              "type": "choice"
            },
            {
              "answerId": "a",
              "explanation": {
                "en": "A pair needs two identical tiles; matching numbers across suits do not pair.",
                "tw": "對子必須是兩張完全相同的牌；同數字跨花色不能配對。",
                "zh": "对子必须是两张完全相同的牌；同数字跨花色不能配对。"
              },
              "id": "hk-6-2-b",
              "options": [
                {
                  "id": "a",
                  "tile": "s6"
                },
                {
                  "id": "b",
                  "tile": "p6"
                },
                {
                  "id": "c",
                  "tile": "s7"
                }
              ],
              "prompt": {
                "en": "To form eyes with six bamboo, which tile matches it?",
                "tw": "為了盡快補成將牌，哪張應與已有的六條配對？",
                "zh": "为了尽快补成将牌，哪张应与已有的六条配对？"
              },
              "type": "choice"
            },
            {
              "answerId": "b",
              "explanation": {
                "en": "An honour may matter for faan or defence. Shape efficiency is evidence, not an unconditional rule.",
                "tw": "例如字牌可能關係到番數或防守。基礎效率是線索，不是無條件的命令。",
                "zh": "例如字牌可能关系到番数或防守。基础效率是线索，不是无条件的命令。"
              },
              "id": "hk-6-2-c",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "Isolated tiles can never be discarded",
                    "tw": "孤張永遠不能打",
                    "zh": "孤张永远不能打"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "The target hand, visible tiles and opponent risks matter",
                    "tw": "還要結合胡牌方向、可見牌和對手風險",
                    "zh": "还要结合胡牌方向、可见牌和对手风险"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "en": "Every tile always has equal value",
                    "tw": "所有牌價值完全相同",
                    "zh": "所有牌价值完全相同"
                  }
                }
              ],
              "prompt": {
                "en": "Why is an isolated tile not always an automatic discard?",
                "tw": "為甚麼不能只憑一張孤張就斷言必須打掉？",
                "zh": "为什么不能只凭一张孤张就断言必须打掉？"
              },
              "type": "choice"
            },
            {
              "answerId": "a",
              "explanation": {
                "en": "Adjacent suited tiles can extend to a sequence; faan and risk still affect the final choice.",
                "tw": "相鄰數牌可以向順子發展；具體出牌仍受番數和風險影響。",
                "zh": "相邻数牌可以向顺子发展；具体出牌仍受番数和风险影响。"
              },
              "id": "hk-6-2-d",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "Two adjacent suited tiles",
                    "tw": "兩張相鄰的同門數牌",
                    "zh": "两张相邻的同门数牌"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "An isolated honour",
                    "tw": "單張沒有配搭的字牌",
                    "zh": "单张没有配搭的字牌"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "en": "Two same-number tiles in different suits",
                    "tw": "任意兩張不同花色同數字牌",
                    "zh": "任意两张不同花色同数字牌"
                  }
                }
              ],
              "prompt": {
                "en": "To preserve ready sequences and a pair, what should you keep before considering the rivers?",
                "tw": "若目標是盡量保留現成順子與一組對子，暫不看牌河，應先保留什麼？",
                "zh": "若目标是尽量保留现成顺子与一组对子，暂不看牌河，应先保留什么？"
              },
              "type": "choice"
            }
          ],
          "title": {
            "en": "Keep useful connections",
            "tw": "保留組合與改進手牌",
            "zh": "保留组合与改进手牌"
          }
        },
        {
          "example": {
            "caption": {
              "en": "If an opponent exposed two dragon sets, the third dragon deserves attention; it does not prove they are ready.",
              "tw": "對手已公開兩組三元牌時，第三種三元牌值得特別留意；這不是對方必然聽牌的證明。",
              "zh": "对手已公开两组三元牌时，第三种三元牌值得特别留意；这不是对方必然听牌的证明。"
            },
            "tiles": [
              "z5",
              "z5",
              "z5",
              "z6",
              "z6",
              "z6"
            ]
          },
          "id": "hk-6-3",
          "intro": {
            "en": "Claims fix groups and can affect concealment or your target hand. Exposures and discards give risk clues; do not import riichi-specific absolute safety rules into Hong Kong play.",
            "tw": "叫牌會固定組合，並可能影響門前清或胡牌方向。觀察對手明牌與牌河能提供風險線索，但香港規則不能套用日麻的絕對安全牌結論。",
            "zh": "叫牌会固定组合，并可能影响门前清或胡牌方向。观察对手明牌与牌河能提供风险线索，但香港规则不能套用日麻的绝对安全牌结论。"
          },
          "questions": [
            {
              "answerId": "b",
              "explanation": {
                "en": "Compare the trade-off. This reference also excludes every kong from Concealed Hand; other tables may differ.",
                "tw": "是否叫牌取決於目標；本參考規則的門前清還排除所有開槓，不能直接套別的桌規。",
                "zh": "是否叫牌取决于目标；本参考规则的门前清还排除所有开杠，不能直接套别的桌规。"
              },
              "id": "hk-6-3-a",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "Always",
                    "tw": "一定要碰",
                    "zh": "一定要碰"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "Compare speed with losing Concealed Hand",
                    "tw": "要比較速度與失去門前清的影響",
                    "zh": "要比较速度与失去门前清的影响"
                  }
                }
              ],
              "prompt": {
                "en": "Under no-flower rules, should you always pung while aiming for Concealed Hand faan?",
                "tw": "無花路線下，以門前清爭取番數時，能碰就一定要碰嗎？",
                "zh": "无花路线下，以门前清争取番数时，能碰就一定要碰吗？"
              },
              "type": "choice"
            },
            {
              "answerId": "c",
              "explanation": {
                "en": "This is a risk clue. Liability depends on the actual third exposed set and who supplied it, not a guess.",
                "tw": "這是風險線索；是否構成包牌還要看實際第三副明刻、明槓及供牌來源，不能僅憑猜測結算。",
                "zh": "这是风险线索；是否构成包牌还要看实际第三副明刻、明杠及供牌来源，不能仅凭猜测结算。"
              },
              "id": "hk-6-3-b",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "No observation is needed",
                    "tw": "完全不用觀察",
                    "zh": "完全不用观察"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "They have definitely won",
                    "tw": "對方肯定已經胡牌",
                    "zh": "对方肯定已经胡牌"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "en": "A Big Three Dragons target and possible liability",
                    "tw": "大三元方向及可能的包牌責任",
                    "zh": "大三元方向及可能的包牌责任"
                  }
                }
              ],
              "prompt": {
                "en": "An opponent exposed red and green dragons. Before discarding white, consider what?",
                "tw": "對手已碰出紅中和發財，你準備打白板，先考慮甚麼？",
                "zh": "对手已碰出红中和发财，你准备打白板，先考虑什么？"
              },
              "type": "choice"
            },
            {
              "answerId": "a",
              "explanation": {
                "en": "Do not import another style’s furiten. This reference restricts claiming a repeated winning discard in the same cycle after passing a win.",
                "tw": "不能把其他玩法的振聽結論搬過來；本參考規則有錯過胡牌後同巡不能胡跟張的限制。",
                "zh": "不能把其他玩法的振听结论搬过来；本参考规则有错过胡牌后同巡不能胡跟张的限制。"
              },
              "id": "hk-6-3-c",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "No; Hong Kong’s same-cycle and other rules must be checked",
                    "tw": "不保證；要按香港的同巡等限制判斷",
                    "zh": "不保证；要按香港的同巡等限制判断"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "Yes, all mahjong styles work alike",
                    "tw": "保證，所有麻將都一樣",
                    "zh": "保证，所有麻将都一样"
                  }
                }
              ],
              "prompt": {
                "en": "Does a player’s earlier discard guarantee they can never win on that tile type later?",
                "tw": "某人之前打過一張牌，就保證以後不會衚衕種牌嗎？",
                "zh": "某人之前打过一张牌，就保证以后不会胡同种牌吗？"
              },
              "type": "choice"
            },
            {
              "answerId": "b",
              "explanation": {
                "en": "Before a call is fixed, valid pung outranks chow; call clearly and allow the response window.",
                "tw": "尚未固定的叫牌按優先順序處理；及時明確叫牌並給他家合理回應時間。",
                "zh": "尚未固定的叫牌按优先顺序处理；及时明确叫牌并给他家合理回应时间。"
              },
              "id": "hk-6-3-d",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "Yes",
                    "tw": "可以",
                    "zh": "可以"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "No",
                    "tw": "不可以",
                    "zh": "不可以"
                  }
                }
              ],
              "prompt": {
                "en": "The previous player discards a tile you can chow, but another player is about to make a valid pung. Is your chow already certain?",
                "tw": "上家剛打出可吃的牌，但他家也正準備合法碰牌；你是否一定已經吃牌成功？",
                "zh": "上家刚打出可吃的牌，但他家也正准备合法碰牌；你是否一定已经吃牌成功？"
              },
              "type": "choice"
            }
          ],
          "title": {
            "en": "Claims and basic defence",
            "tw": "叫牌取捨與基礎防守",
            "zh": "叫牌取舍与基础防守"
          }
        },
        {
          "example": {
            "caption": {
              "en": "Locate three completed sets and the pair, then inspect the adjacent tiles.",
              "tw": "先找已經完成的三組和將，再看兩張相鄰數牌。",
              "zh": "先找已经完成的三组和将，再看两张相邻数牌。"
            },
            "tiles": [
              "m1",
              "m2",
              "m3",
              "p1",
              "p2",
              "p3",
              "s1",
              "s2",
              "s3",
              "m7",
              "m8",
              "p5",
              "p5"
            ]
          },
          "id": "hk-6-4",
          "intro": {
            "en": "A link may wait on one, two or many tiles. Find structural waits first, then consider availability and faan.",
            "tw": "不同搭子可能有單面、兩面或多面等待。先算所有結構上的等待牌，再看剩餘實體和番數。",
            "zh": "不同搭子可能有单面、两面或多面等待。先算所有结构上的等待牌，再看剩余实体和番数。"
          },
          "questions": [
            {
              "explanation": {
                "en": "Seven-eight characters can take six or nine.",
                "tw": "七八萬可接六萬或九萬，不能只選一個。",
                "zh": "七八万可接六万或九万，不能只选一个。"
              },
              "hand": [
                "m1",
                "m2",
                "m3",
                "p1",
                "p2",
                "p3",
                "s1",
                "s2",
                "s3",
                "m7",
                "m8",
                "p5",
                "p5"
              ],
              "id": "hk-6-4-a",
              "options": [
                {
                  "id": "0",
                  "tile": "m6"
                },
                {
                  "id": "1",
                  "tile": "m9"
                },
                {
                  "id": "2",
                  "tile": "z1"
                },
                {
                  "id": "3",
                  "tile": "m5"
                }
              ],
              "prompt": {
                "en": "Select every structural wait.",
                "tw": "選出全部結構等待牌。",
                "zh": "选出全部结构等待牌。"
              },
              "type": "waits"
            },
            {
              "explanation": {
                "en": "Test whether each candidate makes four sets and a pair.",
                "tw": "先驗證每個候選能否拆出四組一對，別憑外形猜。",
                "zh": "先验证每个候选能否拆出四组一对，别凭外形猜。"
              },
              "hand": [
                "p1",
                "p2",
                "p3",
                "p4",
                "p5",
                "p6",
                "z5",
                "z5",
                "z5",
                "z2",
                "z2",
                "p9",
                "p9"
              ],
              "id": "hk-6-4-b",
              "options": [
                {
                  "id": "0",
                  "tile": "p9"
                },
                {
                  "id": "1",
                  "tile": "z2"
                },
                {
                  "id": "2",
                  "tile": "m1"
                },
                {
                  "id": "3",
                  "tile": "z7"
                }
              ],
              "prompt": {
                "en": "Keep the complete sets and find every structural wait.",
                "tw": "保留完成組合，找出全部結構等待牌。",
                "zh": "保留完成组合，找出全部结构等待牌。"
              },
              "type": "waits"
            },
            {
              "explanation": {
                "en": "With all thirteen unique Orphans, any one can form the pair.",
                "tw": "十三幺全種單張時，任一幺九或字牌都可作對子。",
                "zh": "十三幺全种单张时，任一幺九或字牌都可作对子。"
              },
              "hand": [
                "m1",
                "m9",
                "p1",
                "p9",
                "s1",
                "s9",
                "z1",
                "z2",
                "z3",
                "z4",
                "z5",
                "z6",
                "z7"
              ],
              "id": "hk-6-4-c",
              "options": [
                {
                  "id": "0",
                  "tile": "m1"
                },
                {
                  "id": "1",
                  "tile": "m9"
                },
                {
                  "id": "2",
                  "tile": "p1"
                },
                {
                  "id": "3",
                  "tile": "p9"
                },
                {
                  "id": "4",
                  "tile": "s1"
                },
                {
                  "id": "5",
                  "tile": "s9"
                },
                {
                  "id": "6",
                  "tile": "z1"
                },
                {
                  "id": "7",
                  "tile": "z2"
                },
                {
                  "id": "8",
                  "tile": "z3"
                },
                {
                  "id": "9",
                  "tile": "z4"
                },
                {
                  "id": "10",
                  "tile": "z5"
                },
                {
                  "id": "11",
                  "tile": "z6"
                },
                {
                  "id": "12",
                  "tile": "z7"
                },
                {
                  "id": "13",
                  "tile": "m2"
                },
                {
                  "id": "14",
                  "tile": "p2"
                }
              ],
              "prompt": {
                "en": "Thirteen distinct Orphans: select every structural wait.",
                "tw": "十三幺十三種各一張，選出全部結構等待牌。",
                "zh": "十三幺十三种各一张，选出全部结构等待牌。"
              },
              "type": "waits"
            },
            {
              "explanation": {
                "en": "Four sets are complete; South wind must pair.",
                "tw": "四組已經齊全，最後的南風必須成對。",
                "zh": "四组已经齐全，最后的南风必须成对。"
              },
              "hand": [
                "m1",
                "m2",
                "m3",
                "p4",
                "p5",
                "p6",
                "s7",
                "s8",
                "s9",
                "z5",
                "z5",
                "z5",
                "z2"
              ],
              "id": "hk-6-4-d",
              "options": [
                {
                  "id": "0",
                  "tile": "z2"
                },
                {
                  "id": "1",
                  "tile": "m9"
                },
                {
                  "id": "2",
                  "tile": "p9"
                }
              ],
              "prompt": {
                "en": "This hand needs a pair: select every wait.",
                "tw": "這手牌只差一張將牌，選出全部等待。",
                "zh": "这手牌只差一张将牌，选出全部等待。"
              },
              "type": "waits"
            }
          ],
          "title": {
            "en": "Count every wait",
            "tw": "數清等待牌",
            "zh": "数清等待牌"
          }
        },
        {
          "example": {
            "caption": {
              "en": "Three sequences, a pair and a seven-eight link; compare the isolated East.",
              "tw": "三組順子、一組將和七八萬搭子；單張東風是本題的比較對象。",
              "zh": "三组顺子、一组将和七八万搭子；单张东风是本题的比较对象。"
            },
            "tiles": [
              "m1",
              "m2",
              "m3",
              "p4",
              "p5",
              "p6",
              "s7",
              "s8",
              "s9",
              "m7",
              "m8",
              "p5",
              "p5",
              "z1"
            ]
          },
          "id": "hk-6-5",
          "intro": {
            "en": "Under a stated goal, choose a discard and explain what remains; it is not universal best play.",
            "tw": "給定本局目標，說明打哪張、保留什麼；這不是脫離牌河和對手的絕對最佳打法。",
            "zh": "给定本局目标，说明打哪张、保留什么；这不是脱离牌河和对手的绝对最佳打法。"
          },
          "questions": [
            {
              "answerId": "a",
              "explanation": {
                "en": "Discard East to keep the two-sided link and pair; actual play also depends on faan and safety.",
                "tw": "打東風保留七八萬兩面與五筒將；真實對局仍須考慮番數和安全。",
                "zh": "打东风保留七八万两面与五筒将；真实对局仍须考虑番数和安全。"
              },
              "id": "hk-6-5-a",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "East wind",
                    "tw": "東風",
                    "zh": "东风"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "Seven characters",
                    "tw": "七萬",
                    "zh": "七万"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "en": "Five dots",
                    "tw": "五筒",
                    "zh": "五筒"
                  }
                }
              ],
              "prompt": {
                "en": "For shape efficiency only, which discard keeps three sequences, a five-dots pair and a seven-eight link?",
                "tw": "僅按結構效率，打哪張能留下三組順子、五筒將和七八萬搭子？",
                "zh": "仅按结构效率，打哪张能留下三组顺子、五筒将和七八万搭子？"
              },
              "tiles": [
                "m1",
                "m2",
                "m3",
                "p4",
                "p5",
                "p6",
                "s7",
                "s8",
                "s9",
                "m7",
                "m8",
                "p5",
                "p5",
                "z1"
              ],
              "type": "choice"
            },
            {
              "answerId": "a",
              "explanation": {
                "en": "Half Flush keeps one numbered suit and honours; an isolated other suit fits less well.",
                "tw": "混一色要保留一門數牌和字牌；孤立的其他花色牌更不貼近目標。",
                "zh": "混一色要保留一门数牌和字牌；孤立的其他花色牌更不贴近目标。"
              },
              "id": "hk-6-5-b",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "An isolated bamboo tile",
                    "tw": "孤立的條牌",
                    "zh": "孤立的条牌"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "One red dragon from a pair",
                    "tw": "紅中對子的一張",
                    "zh": "红中对子的一张"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "en": "The middle tile of a completed dot sequence",
                    "tw": "已完成的筒牌順子中張",
                    "zh": "已完成的筒牌顺子中张"
                  }
                }
              ],
              "prompt": {
                "en": "You aim for Half Flush with dots and honours. Which discard better fits that goal?",
                "tw": "你爭取混一色：筒牌與字牌已成組，哪種棄牌通常更符合目標？",
                "zh": "你争取混一色：筒牌与字牌已成组，哪种弃牌通常更符合目标？"
              },
              "type": "choice"
            },
            {
              "answerId": "a",
              "explanation": {
                "en": "A call can complete a set but changes concealment, waits and the plan.",
                "tw": "叫牌能加快三張成組，但會改變門清、等待與策略，先算清目標。",
                "zh": "叫牌能加快三张成组，但会改变门清、等待与策略，先算清目标。"
              },
              "id": "hk-6-5-c",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "A pung fixes a set and may change waits or faan",
                    "tw": "碰牌會固定結構，可能改動等待與番數",
                    "zh": "碰牌会固定结构，可能改动等待与番数"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "A normal draw follows every pung",
                    "tw": "碰後可立即普通摸牌",
                    "zh": "碰后可立即普通摸牌"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "en": "A pung can later return to the concealed hand",
                    "tw": "碰牌可隨時收回暗手",
                    "zh": "碰牌可随时收回暗手"
                  }
                }
              ],
              "prompt": {
                "en": "You have exposed red dragons and three concealed sequences. Why not pung every possible tile?",
                "tw": "已碰出紅中，暗手有三組順子；為什麼不能無條件再碰一組？",
                "zh": "已碰出红中，暗手有三组顺子；为什么不能无条件再碰一组？"
              },
              "type": "choice"
            },
            {
              "answerId": "a",
              "explanation": {
                "en": "Exposed sets and rivers provide clues, not an absolute safety guarantee.",
                "tw": "對手明牌與牌河提供風險線索，但不能推出絕對安全牌。",
                "zh": "对手明牌与牌河提供风险线索，但不能推出绝对安全牌。"
              },
              "id": "hk-6-5-d",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "Use it as a risk clue alongside your own hand",
                    "tw": "把風險當線索，結合自己牌形再決定",
                    "zh": "把风险当线索，结合自己牌形再决定"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "Any tile they discarded earlier is always safe",
                    "tw": "對手以前打過的同種牌永遠安全",
                    "zh": "对手以前打过的同种牌永远安全"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "en": "Completed sequences remove all need to observe opponents",
                    "tw": "只要有順子就無需看對手",
                    "zh": "只要有顺子就无需看对手"
                  }
                }
              ],
              "prompt": {
                "en": "An opponent’s exposed sets and discards suggest Full Flush. Which statement is sound?",
                "tw": "對手牌河與明牌顯示強烈清一色傾向時，哪句話最合適？",
                "zh": "对手牌河与明牌显示强烈清一色倾向时，哪句话最合适？"
              },
              "type": "choice"
            }
          ],
          "title": {
            "en": "Discards and useful groups",
            "tw": "捨牌與保留組合",
            "zh": "舍牌与保留组合"
          }
        },
        {
          "example": {
            "caption": {
              "en": "With two dragon pairs, watch who supplies a third exposed dragon set.",
              "tw": "看到中、發兩組搭子時，觀察第三組三元牌的來源。",
              "zh": "看到中、发两组搭子时，观察第三组三元牌的来源。"
            },
            "tiles": [
              "z5",
              "z5",
              "z6",
              "z6",
              "z7",
              "p2",
              "p3",
              "p4",
              "m3",
              "m4",
              "m5",
              "s7",
              "s8"
            ]
          },
          "id": "hk-6-6",
          "intro": {
            "en": "Practise call priority, the repeated-discard restriction and exposed sets that may create liability.",
            "tw": "練習叫牌優先、錯過胡牌後的跟張限制，以及可能觸發包牌的明牌組合。",
            "zh": "练习叫牌优先、错过胡牌后的跟张限制，以及可能触发包牌的明牌组合。"
          },
          "questions": [
            {
              "answerId": "a",
              "explanation": {
                "en": "Among competing calls not yet fixed, a valid win has priority.",
                "tw": "未固定的競爭叫牌中，合法胡牌優先。",
                "zh": "未固定的竞争叫牌中，合法胡牌优先。"
              },
              "id": "hk-6-6-a",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "A valid win",
                    "tw": "合法胡牌",
                    "zh": "合法胡牌"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "Pung",
                    "tw": "碰牌",
                    "zh": "碰牌"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "en": "Chow",
                    "tw": "吃牌",
                    "zh": "吃牌"
                  }
                }
              ],
              "prompt": {
                "en": "For one discard, another player can win, one can pung, and you can chow. Which has priority?",
                "tw": "同一張棄牌有人合法胡牌、有人碰、你能吃，先處理哪一個？",
                "zh": "同一张弃牌有人合法胡牌、有人碰、你能吃，先处理哪一个？"
              },
              "type": "choice"
            },
            {
              "answerId": "b",
              "explanation": {
                "en": "This reference restricts a repeated winning discard in the same cycle, not permanently.",
                "tw": "本參考同巡不能胡跟張；不是其他玩法的永久振聽。",
                "zh": "本参考同巡不能胡跟张；不是其他玩法的永久振听。"
              },
              "id": "hk-6-6-b",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "Yes",
                    "tw": "可以",
                    "zh": "可以"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "No",
                    "tw": "不可以",
                    "zh": "不可以"
                  }
                }
              ],
              "prompt": {
                "en": "You pass a winning red dragon. Before your next draw another player discards red dragon. May you claim that repeated tile?",
                "tw": "你剛錯過一張可胡的紅中，在自己下次摸牌前，另一家又打紅中；可直接胡這張跟張嗎？",
                "zh": "你刚错过一张可胡的红中，在自己下次摸牌前，另一家又打红中；可直接胡这张跟张吗？"
              },
              "type": "choice"
            },
            {
              "answerId": "b",
              "explanation": {
                "en": "That immediate related discard can be a prohibited tile swap.",
                "tw": "這種緊接的關聯棄牌可能構成食換，不能隨意假設合法。",
                "zh": "这种紧接的关联弃牌可能构成食换，不能随意假设合法。"
              },
              "id": "hk-6-6-c",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "Yes",
                    "tw": "可以",
                    "zh": "可以"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "No",
                    "tw": "不可以",
                    "zh": "不可以"
                  }
                }
              ],
              "prompt": {
                "en": "After exposing a red-dragon pung, is immediately discarding a fourth red dragon automatically allowed?",
                "tw": "碰出紅中後立刻打出手中第四張紅中，在協會規則下是否一定合規？",
                "zh": "碰出红中后立刻打出手中第四张红中，在协会规则下是否一定合规？"
              },
              "type": "choice"
            },
            {
              "answerId": "a",
              "explanation": {
                "en": "Supplying a third exposed dragon set can create liability; the source matters.",
                "tw": "第三組三元明牌的供牌者可能承擔大三元包，應觀察實際來源。",
                "zh": "第三组三元明牌的供牌者可能承担大三元包，应观察实际来源。"
              },
              "id": "hk-6-6-d",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "Whether it supplies a third exposed dragon set and liability",
                    "tw": "是否會供出第三組三元明牌並觸發包牌",
                    "zh": "是否会供出第三组三元明牌并触发包牌"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "Whether white dragon is automatically safe",
                    "tw": "白板一定是絕對安全牌",
                    "zh": "白板一定是绝对安全牌"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "en": "Whether the exposed pungs can be broken apart",
                    "tw": "是否可以把對手明牌拆開",
                    "zh": "是否可以把对手明牌拆开"
                  }
                }
              ],
              "prompt": {
                "en": "An opponent has exposed red and green dragon pungs; what should you check before discarding white dragon?",
                "tw": "對手已明碰中和發，你手裡有白板；最應先核對什麼？",
                "zh": "对手已明碰中和发，你手里有白板；最应先核对什么？"
              },
              "type": "choice"
            }
          ],
          "title": {
            "en": "Calls, timing and caution",
            "tw": "叫牌與防守取捨",
            "zh": "叫牌与防守取舍"
          }
        }
      ],
      "summary": {
        "en": "Compare shape, faan targets, claims and risk.",
        "tw": "比較結構、番數方向、叫牌收益與風險。",
        "zh": "比较结构、番数方向、叫牌收益与风险。"
      },
      "title": {
        "en": "Waits and better decisions",
        "tw": "等待牌與出牌思路",
        "zh": "等待牌与出牌思路"
      }
    },
    {
      "id": "hk-7",
      "lessons": [
        {
          "example": {
            "caption": {
              "en": "With no flowers, calls or kongs: All Sequences (1) plus Concealed Hand (1) is only two on a discard; Self-Draw adds the third.",
              "tw": "此例無花、無叫牌或槓：平胡一番＋門前清一番；棄牌胡仍只有兩番，自摸再加一番才到三番。",
              "zh": "此例无花、无叫牌或杠：平胡一番＋门前清一番；弃牌胡仍只有两番，自摸再加一番才到三番。"
            },
            "tiles": [
              "m1",
              "m2",
              "m3",
              "p2",
              "p3",
              "p4",
              "s4",
              "s5",
              "s6",
              "m7",
              "m8",
              "m9",
              "p5",
              "p5"
            ]
          },
          "id": "hk-7-1",
          "intro": {
            "en": "This reference uses a three-faan minimum and ten-faan cap. Check the shape, qualifying faan and restrictions. In the no-flower route, Concealed Hand adds one faan.",
            "tw": "採用協會參考的三番起胡、十番封頂。先核對牌型，再計算成立的番種，還要檢查同巡等禁例。無花路線下，門前清可計一番。",
            "zh": "采用协会参考的三番起胡、十番封顶。先核对牌型，再计算成立的番种，还要检查同巡等禁例。无花路线下，门前清可计一番。"
          },
          "questions": [
            {
              "answerId": "b",
              "context": {
                "en": "No flowers, calls or kongs. Four sequences and a five-dots pair, with no other special conditions.",
                "tw": "無花路線，無吃碰和槓；四個順子加五筒對子。沒有其他特殊條件。",
                "zh": "无花路线，无吃碰和杠；四个顺子加五筒对子。没有其他特殊条件。"
              },
              "explanation": {
                "en": "All Sequences and Concealed Hand total two, below this route’s winning minimum.",
                "tw": "平胡一番和門前清一番合計兩番，還未達到本路線最低番數。",
                "zh": "平胡一番和门前清一番合计两番，还未达到本路线最低番数。"
              },
              "id": "hk-7-1-a",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "Yes, the shape is enough",
                    "tw": "可以，結構完整就行",
                    "zh": "可以，结构完整就行"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "No, it is below three faan",
                    "tw": "不可以，未達三番",
                    "zh": "不可以，未达三番"
                  }
                }
              ],
              "prompt": {
                "en": "No flowers, calls or kongs: four sequences and a five-dots pair total two faan on a discard. May you win?",
                "tw": "無花、無叫牌無槓、四個順子加五筒對子，棄牌胡共兩番，能胡嗎？",
                "zh": "无花、无叫牌无杠、四个顺子加五筒对子，弃牌胡共两番，能胡吗？"
              },
              "tiles": [
                "m1",
                "m2",
                "m3",
                "p2",
                "p3",
                "p4",
                "s4",
                "s5",
                "s6",
                "m7",
                "m8",
                "m9",
                "p5",
                "p5"
              ],
              "type": "choice"
            },
            {
              "answerId": "a",
              "context": {
                "en": "No flowers, calls or kongs. Four sequences and a five-dots pair, with no other special conditions.",
                "tw": "無花路線，無吃碰和槓；四個順子加五筒對子。沒有其他特殊條件。",
                "zh": "无花路线，无吃碰和杠；四个顺子加五筒对子。没有其他特殊条件。"
              },
              "explanation": {
                "en": "All Sequences (1), no-flower Concealed Hand (1), and Self-Draw (1) total three, with no other conditions.",
                "tw": "平胡一、無花門前清一、自摸一，共三番；假設沒有其他特殊條件。",
                "zh": "平胡一、无花门前清一、自摸一，共三番；假设没有其他特殊条件。"
              },
              "id": "hk-7-1-b",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "3 faan",
                    "tw": "3 番",
                    "zh": "3 番"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "2 faan",
                    "tw": "2 番",
                    "zh": "2 番"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "en": "7 faan",
                    "tw": "7 番",
                    "zh": "7 番"
                  }
                }
              ],
              "prompt": {
                "en": "How many faan does this hand score on an ordinary self-draw?",
                "tw": "這手牌普通自摸時，合計多少番？",
                "zh": "这手牌普通自摸时，合计多少番？"
              },
              "tiles": [
                "m1",
                "m2",
                "m3",
                "p2",
                "p3",
                "p4",
                "s4",
                "s5",
                "s6",
                "m7",
                "m8",
                "m9",
                "p5",
                "p5"
              ],
              "type": "choice"
            },
            {
              "answerId": "c",
              "explanation": {
                "en": "Do not import Seven Pairs from another ruleset. Some seven-pair arrangements also split into a basic hand; judge the actual shape.",
                "tw": "不要把其他規則的七對直接套入。部分七對外形可能另能拆成基本牌型，需按實際結構判斷。",
                "zh": "不要把其他规则的七对直接套入。部分七对外形可能另能拆成基本牌型，需按实际结构判断。"
              },
              "id": "hk-7-1-c",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "Yes, all styles allow it",
                    "tw": "正確，所有地區都允許",
                    "zh": "正确，所有地区都允许"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "Yes, fourteen tiles are enough",
                    "tw": "正確，湊足十四張就行",
                    "zh": "正确，凑足十四张就行"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "en": "No; Thirteen Orphans is the listed special shape here",
                    "tw": "不正確；本參考特別列出的特殊結構是十三幺",
                    "zh": "不正确；本参考特别列出的特殊结构是十三幺"
                  }
                }
              ],
              "prompt": {
                "en": "Is Seven Pairs a separate special winning shape in this reference?",
                "tw": "把七對當作本路線的獨立特殊胡牌型，是否正確？",
                "zh": "把七对当作本路线的独立特殊胡牌型，是否正确？"
              },
              "type": "choice"
            },
            {
              "breakdown": [
                {
                  "fan": 1,
                  "title": {
                    "en": "All Sequences",
                    "tw": "平胡",
                    "zh": "平胡"
                  }
                },
                {
                  "fan": 1,
                  "title": {
                    "en": "Concealed Hand",
                    "tw": "無花門前清",
                    "zh": "无花门前清"
                  }
                },
                {
                  "fan": 1,
                  "title": {
                    "en": "Self-Draw",
                    "tw": "自摸",
                    "zh": "自摸"
                  }
                }
              ],
              "context": {
                "en": "Four sequences, a white-dragon pair, no calls or kongs.",
                "tw": "四組順子、白板將，無吃碰槓。",
                "zh": "四组顺子、白板将，无吃碰杠。"
              },
              "explanation": {
                "en": "All Sequences 1 + Concealed Hand 1 + Self-Draw 1 = 3 faan.",
                "tw": "平胡1＋無花門前清1＋自摸1＝3番。",
                "zh": "平胡1＋无花门前清1＋自摸1＝3番。"
              },
              "hand": [
                "m1",
                "m2",
                "m3",
                "m4",
                "m5",
                "m6",
                "p4",
                "p5",
                "p6",
                "s7",
                "s8",
                "s9",
                "z7",
                "z7"
              ],
              "id": "hk-7-1-d",
              "melds": [],
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "2 faan",
                    "tw": "2 番",
                    "zh": "2 番"
                  },
                  "value": 2
                },
                {
                  "id": "b",
                  "label": {
                    "en": "3 faan",
                    "tw": "3 番",
                    "zh": "3 番"
                  },
                  "value": 3
                },
                {
                  "id": "c",
                  "label": {
                    "en": "5 faan",
                    "tw": "5 番",
                    "zh": "5 番"
                  },
                  "value": 5
                }
              ],
              "prompt": {
                "en": "How many faan for this no-flower self-draw?",
                "tw": "這手無花普通自摸，合計多少番？",
                "zh": "这手无花普通自摸，合计多少番？"
              },
              "type": "faan"
            }
          ],
          "title": {
            "en": "Shape and the winning minimum",
            "tw": "胡牌要同時過兩關",
            "zh": "胡牌要同时过两关"
          }
        },
        {
          "example": {
            "caption": {
              "en": "South in East round, exposed red-dragon pung, ordinary self-draw: Half Flush 3 + red dragon 1 + seat South 1 + Self-Draw 1 = 6.",
              "tw": "南家、東圈、明碰紅中、普通自摸：混一色3＋紅中1＋門風南1＋自摸1＝6番。",
              "zh": "南家、东圈、明碰红中、普通自摸：混一色3＋红中1＋门风南1＋自摸1＝6番。"
            },
            "tiles": [
              "p1",
              "p2",
              "p3",
              "p4",
              "p5",
              "p6",
              "p9",
              "p9",
              "z2",
              "z2",
              "z2",
              "z5",
              "z5",
              "z5"
            ]
          },
          "id": "hk-7-2",
          "intro": {
            "en": "All Sequences, dragon sets and Self-Draw can each add one. Half Flush and All Triplets each give three; Full Flush seven. A wind matching both seat and round can count twice.",
            "tw": "平胡、三元刻子、自摸各可有一番；混一色和對對胡各三番，清一色七番。風牌要看門風和圈風；同一風同時符合兩者時可計兩番。",
            "zh": "平胡、三元刻子、自摸各可有一番；混一色和对对胡各三番，清一色七番。风牌要看门风和圈风；同一风同时符合两者时可计两番。"
          },
          "questions": [
            {
              "answerId": "b",
              "context": {
                "en": "You are South in East round. The last three red dragons are an exposed pung; the rest are concealed. Ordinary self-draw, no kong or other special conditions.",
                "tw": "你是南家，目前為東圈。最後三張紅中為已碰出的明刻，其餘為暗手；普通自摸，未開槓，無其他特殊條件。",
                "zh": "你是南家，当前为东圈。最后三张红中为已碰出的明刻，其余为暗手；普通自摸，未开杠，无其他特殊条件。"
              },
              "explanation": {
                "en": "It has one suit with honours, but not four triplets. The exposed pung also rules out Concealed Hand.",
                "tw": "這手有一門筒牌和字牌，沒有四個刻子，因此不計對對胡；已經明碰，也不計門前清。",
                "zh": "这手有一门筒牌和字牌，没有四个刻子，因此不计对对胡；已经明碰，也不计门前清。"
              },
              "id": "hk-7-2-a",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "3",
                    "tw": "3 番",
                    "zh": "3 番"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "6",
                    "tw": "6 番",
                    "zh": "6 番"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "en": "10",
                    "tw": "10 番",
                    "zh": "10 番"
                  }
                }
              ],
              "prompt": {
                "en": "How many faan does this hand score?",
                "tw": "這手牌合計多少番？",
                "zh": "这手牌合计多少番？"
              },
              "tiles": [
                "p1",
                "p2",
                "p3",
                "p4",
                "p5",
                "p6",
                "p9",
                "p9",
                "z2",
                "z2",
                "z2",
                "z5",
                "z5",
                "z5"
              ],
              "type": "choice"
            },
            {
              "answerId": "a",
              "explanation": {
                "en": "The East triplet matches both seat and round, one faan for each.",
                "tw": "同一組東風同時符合門風與圈風，分別計一番。",
                "zh": "同一组东风同时符合门风与圈风，分别计一番。"
              },
              "id": "hk-7-2-b",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "2",
                    "tw": "2 番",
                    "zh": "2 番"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "0",
                    "tw": "0 番",
                    "zh": "0 番"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "en": "Only 1; they cannot overlap",
                    "tw": "只計1番，不能重疊",
                    "zh": "只计1番，不能重叠"
                  }
                }
              ],
              "prompt": {
                "en": "In East round, how many faan does East’s East-wind triplet give?",
                "tw": "東圈、東家的一組東風刻子，在此參考中計多少番？",
                "zh": "东圈、东家的一组东风刻子，在此参考中计多少番？"
              },
              "type": "choice"
            },
            {
              "answerId": "c",
              "explanation": {
                "en": "Under this reference Big Three Dragons is not automatically a ten-faan limit hand: five plus three is eight.",
                "tw": "本協會參考中大三元不是直接十番例牌；五加三為八，不能套用其他桌規。",
                "zh": "本协会参考中大三元不是直接十番例牌；五加三为八，不能套用其他桌规。"
              },
              "id": "hk-7-2-c",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "Only 5",
                    "tw": "只計5番",
                    "zh": "只计5番"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "Always 10",
                    "tw": "必定10番",
                    "zh": "必定10番"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "en": "8; other qualifying faan may add, subject to the cap",
                    "tw": "8 番；其他成立條件再另計並封頂",
                    "zh": "8 番；其他成立条件再另计并封顶"
                  }
                }
              ],
              "prompt": {
                "en": "Big Three Dragons gives five base faan plus its three dragon sets. What is that total?",
                "tw": "普通大三元的基礎五番，再加三組三元刻子，合計多少番？",
                "zh": "普通大三元的基础五番，再加三组三元刻子，合计多少番？"
              },
              "type": "choice"
            },
            {
              "breakdown": [
                {
                  "fan": 3,
                  "title": {
                    "en": "Half Flush",
                    "tw": "混一色",
                    "zh": "混一色"
                  }
                },
                {
                  "fan": 1,
                  "title": {
                    "en": "Red Dragon set",
                    "tw": "紅中刻子",
                    "zh": "红中刻子"
                  }
                },
                {
                  "fan": 1,
                  "title": {
                    "en": "Seat South set",
                    "tw": "門風南刻子",
                    "zh": "门风南刻子"
                  }
                },
                {
                  "fan": 1,
                  "title": {
                    "en": "Self-Draw",
                    "tw": "自摸",
                    "zh": "自摸"
                  }
                }
              ],
              "context": {
                "en": "You are South in East round; the red-dragon pung is exposed.",
                "tw": "你是南家、東圈；紅中三張為已明碰，其他十一張為暗手。",
                "zh": "你是南家、东圈；红中三张为已明碰，其他十一张为暗手。"
              },
              "explanation": {
                "en": "Half Flush 3 + Red Dragon set 1 + Seat South set 1 + Self-Draw 1 = 6 faan.",
                "tw": "混一色3＋紅中刻子1＋門風南刻子1＋自摸1＝6番。",
                "zh": "混一色3＋红中刻子1＋门风南刻子1＋自摸1＝6番。"
              },
              "hand": [
                "p1",
                "p2",
                "p3",
                "p4",
                "p5",
                "p6",
                "p9",
                "p9",
                "z2",
                "z2",
                "z2"
              ],
              "id": "hk-7-2-d",
              "melds": [
                {
                  "tiles": [
                    "z5",
                    "z5",
                    "z5"
                  ],
                  "type": "pung"
                }
              ],
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "5 faan",
                    "tw": "5 番",
                    "zh": "5 番"
                  },
                  "value": 5
                },
                {
                  "id": "b",
                  "label": {
                    "en": "6 faan",
                    "tw": "6 番",
                    "zh": "6 番"
                  },
                  "value": 6
                },
                {
                  "id": "c",
                  "label": {
                    "en": "8 faan",
                    "tw": "8 番",
                    "zh": "8 番"
                  },
                  "value": 8
                }
              ],
              "prompt": {
                "en": "How many faan after this exposed red-dragon pung and self-draw?",
                "tw": "明碰紅中後普通自摸，這手一共多少番？",
                "zh": "明碰红中后普通自摸，这手一共多少番？"
              },
              "type": "faan"
            }
          ],
          "title": {
            "en": "Common faan and combinations",
            "tw": "常見番種與疊加",
            "zh": "常见番种与叠加"
          }
        },
        {
          "example": {
            "caption": {
              "en": "At three faan, an ordinary discard win pays 32; self-draw pays 16 from each opponent, total 48.",
              "tw": "積分示例：三番棄牌胡由出牌者付32；三番自摸每家付16，合共48。",
              "zh": "积分示例：三番弃牌胡由出牌者付32；三番自摸每家付16，合共48。"
            },
            "tiles": [
              "m1",
              "m9",
              "p1",
              "p9",
              "s1",
              "s9",
              "z1",
              "z2",
              "z3",
              "z4",
              "z5",
              "z6",
              "z7",
              "z1"
            ]
          },
          "id": "hk-7-3",
          "intro": {
            "en": "Thirteen Orphans uses the six numbered terminals and seven honours, plus one matching duplicate. It is a ten-faan limit hand. Settlement then depends on the winning method and any special liability.",
            "tw": "十三幺由三門一、九和七種字牌各一張，再有其中一種作對子，屬於十番例牌。計分先看番，再區分普通棄牌胡、自摸及包牌等特殊結算。",
            "zh": "十三幺由三门一、九和七种字牌各一张，再有其中一种作对子，属于十番例牌。计分先看番，再区分普通弃牌胡、自摸及包牌等特殊结算。"
          },
          "questions": [
            {
              "answerId": "c",
              "explanation": {
                "en": "The name does not mean thirteen faan. This reference scores limit hands at ten; more are in the faan reference.",
                "tw": "名稱有「十三」不代表十三番；此參考的例牌按十番處理。更多例牌可在番種速查中查看。",
                "zh": "名称有“十三”不代表十三番；此参考的例牌按十番处理。更多例牌可在番种速查中查看。"
              },
              "id": "hk-7-3-a",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "7",
                    "tw": "7 番",
                    "zh": "7 番"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "13",
                    "tw": "13 番",
                    "zh": "13 番"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "en": "A 10-faan limit hand",
                    "tw": "10 番例牌",
                    "zh": "10 番例牌"
                  }
                }
              ],
              "prompt": {
                "en": "What is this Thirteen Orphans hand worth in this reference?",
                "tw": "這手十三幺在本參考中是多少番？",
                "zh": "这手十三幺在本参考中是多少番？"
              },
              "tiles": [
                "m1",
                "m9",
                "p1",
                "p9",
                "s1",
                "s9",
                "z1",
                "z2",
                "z3",
                "z4",
                "z5",
                "z6",
                "z7",
                "z1"
              ],
              "type": "choice"
            },
            {
              "context": {
                "en": "Use the association’s half-laak points table. Ordinary settlement, with no liability or robbing a kong.",
                "tw": "使用協會公佈的半辣上積分表；普通結算，無包牌或搶槓。",
                "zh": "使用协会公布的半辣上积分表；普通结算，无包牌或抢杠。"
              },
              "explanation": {
                "en": "Check faan and winning method first. In ordinary self-draw settlement each opponent pays; for a discard win the discarder pays.",
                "tw": "先確認番數和胡牌方式，再查對應積分；普通自摸由其餘三家分別支付，棄牌胡由出牌者支付。",
                "zh": "先确认番数和胡牌方式，再查对应积分；普通自摸由其余三家分别支付，弃牌胡由出牌者支付。"
              },
              "fan": 3,
              "id": "hk-7-3-b",
              "options": [
                {
                  "id": "0",
                  "label": {
                    "en": "16 points",
                    "tw": "16 積分",
                    "zh": "16 积分"
                  },
                  "value": 16
                },
                {
                  "id": "1",
                  "label": {
                    "en": "32 points",
                    "tw": "32 積分",
                    "zh": "32 积分"
                  },
                  "value": 32
                },
                {
                  "id": "2",
                  "label": {
                    "en": "48 points",
                    "tw": "48 積分",
                    "zh": "48 积分"
                  },
                  "value": 48
                }
              ],
              "prompt": {
                "en": "For 3 faan, how many points does the discarder pay on an ordinary discard win?",
                "tw": "3番普通棄牌胡時，出牌者支付多少積分？",
                "zh": "3番普通弃牌胡时，出牌者支付多少积分？"
              },
              "type": "score",
              "winMode": "discard"
            },
            {
              "context": {
                "en": "Use the association’s half-laak points table. Ordinary settlement, with no liability or robbing a kong.",
                "tw": "使用協會公佈的半辣上積分表；普通結算，無包牌或搶槓。",
                "zh": "使用协会公布的半辣上积分表；普通结算，无包牌或抢杠。"
              },
              "explanation": {
                "en": "Check faan and winning method first. In ordinary self-draw settlement each opponent pays; for a discard win the discarder pays.",
                "tw": "先確認番數和胡牌方式，再查對應積分；普通自摸由其餘三家分別支付，棄牌胡由出牌者支付。",
                "zh": "先确认番数和胡牌方式，再查对应积分；普通自摸由其余三家分别支付，弃牌胡由出牌者支付。"
              },
              "fan": 6,
              "id": "hk-7-3-c",
              "options": [
                {
                  "id": "0",
                  "label": {
                    "en": "64 points",
                    "tw": "64 積分",
                    "zh": "64 积分"
                  },
                  "value": 64
                },
                {
                  "id": "1",
                  "label": {
                    "en": "128 points",
                    "tw": "128 積分",
                    "zh": "128 积分"
                  },
                  "value": 128
                },
                {
                  "id": "2",
                  "label": {
                    "en": "192 points",
                    "tw": "192 積分",
                    "zh": "192 积分"
                  },
                  "value": 192
                }
              ],
              "prompt": {
                "en": "For 6 faan, what is the winner’s total on an ordinary self-draw?",
                "tw": "6番普通自摸時，胡牌者共收多少積分？",
                "zh": "6番普通自摸时，胡牌者共收多少积分？"
              },
              "type": "score",
              "winMode": "selfDraw"
            },
            {
              "context": {
                "en": "Ordinary settlement only: no liability, robbing a kong or flower win.",
                "tw": "只計算普通支付，無包牌、搶槓或花胡。",
                "zh": "只计算普通支付，无包牌、抢杠或花胡。"
              },
              "explanation": {
                "en": "10 faan self-draw: each opponent pays 256, total 768.",
                "tw": "10番普通自摸：每家付256，三家合共768。",
                "zh": "10番普通自摸：每家付256，三家合共768。"
              },
              "fan": 10,
              "id": "hk-7-3-d",
              "options": [
                {
                  "id": "0",
                  "label": {
                    "en": "256 points",
                    "tw": "256 積分",
                    "zh": "256 积分"
                  },
                  "value": 256
                },
                {
                  "id": "1",
                  "label": {
                    "en": "512 points",
                    "tw": "512 積分",
                    "zh": "512 积分"
                  },
                  "value": 512
                },
                {
                  "id": "2",
                  "label": {
                    "en": "768 points",
                    "tw": "768 積分",
                    "zh": "768 积分"
                  },
                  "value": 768
                }
              ],
              "prompt": {
                "en": "For an ordinary 10-faan self-draw, what do the three opponents pay in total?",
                "tw": "十番普通自摸，三家合共支付多少積分？",
                "zh": "十番普通自摸，三家合共支付多少积分？"
              },
              "type": "score",
              "winMode": "selfDraw"
            }
          ],
          "title": {
            "en": "Special hands and settlement",
            "tw": "特殊牌型與積分結算",
            "zh": "特殊牌型与积分结算"
          }
        },
        {
          "example": {
            "caption": {
              "en": "No flowers, concealed, ordinary self-draw; an honour pair can still qualify for All Sequences.",
              "tw": "無花、門清、普通自摸；字牌作將不妨礙此例平胡。",
              "zh": "无花、门清、普通自摸；字牌作将不妨碍此例平胡。"
            },
            "tiles": [
              "m1",
              "m2",
              "m3",
              "m4",
              "m5",
              "m6",
              "p4",
              "p5",
              "p6",
              "s7",
              "s8",
              "s9",
              "z7",
              "z7"
            ]
          },
          "id": "hk-7-4",
          "intro": {
            "en": "All Sequences, Concealed Hand, Self-Draw, dragons and winds may stack. Count qualifying parts before checking the minimum.",
            "tw": "平胡、門前清、自摸、三元和門圈風可疊加。先計算成立項，再核對三番門檻。",
            "zh": "平胡、门前清、自摸、三元和门圈风可叠加。先计算成立项，再核对三番门槛。"
          },
          "questions": [
            {
              "breakdown": [
                {
                  "fan": 1,
                  "title": {
                    "en": "All Sequences",
                    "tw": "平胡",
                    "zh": "平胡"
                  }
                },
                {
                  "fan": 1,
                  "title": {
                    "en": "Concealed Hand",
                    "tw": "門前清",
                    "zh": "门前清"
                  }
                },
                {
                  "fan": 1,
                  "title": {
                    "en": "Self-Draw",
                    "tw": "自摸",
                    "zh": "自摸"
                  }
                }
              ],
              "context": {
                "en": "No flowers or kongs; ordinary self-draw.",
                "tw": "無花、無槓，普通自摸。",
                "zh": "无花、无杠，普通自摸。"
              },
              "explanation": {
                "en": "All Sequences 1 + Concealed Hand 1 + Self-Draw 1 = 3 faan.",
                "tw": "平胡1＋門前清1＋自摸1＝3番。",
                "zh": "平胡1＋门前清1＋自摸1＝3番。"
              },
              "hand": [
                "m1",
                "m2",
                "m3",
                "m4",
                "m5",
                "m6",
                "p4",
                "p5",
                "p6",
                "s7",
                "s8",
                "s9",
                "z7",
                "z7"
              ],
              "id": "hk-7-4-a",
              "melds": [],
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "2 faan",
                    "tw": "2 番",
                    "zh": "2 番"
                  },
                  "value": 2
                },
                {
                  "id": "b",
                  "label": {
                    "en": "3 faan",
                    "tw": "3 番",
                    "zh": "3 番"
                  },
                  "value": 3
                },
                {
                  "id": "c",
                  "label": {
                    "en": "5 faan",
                    "tw": "5 番",
                    "zh": "5 番"
                  },
                  "value": 5
                }
              ],
              "prompt": {
                "en": "How many faan does this hand make?",
                "tw": "這手合計多少番？",
                "zh": "这手合计多少番？"
              },
              "type": "faan"
            },
            {
              "answerId": "b",
              "explanation": {
                "en": "Seat and round wind each add one, even for the same South set.",
                "tw": "門風和圈風分別加一番，即使是同一組南風。",
                "zh": "门风和圈风分别加一番，即使是同一组南风。"
              },
              "id": "hk-7-4-b",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "One faan",
                    "tw": "一番",
                    "zh": "一番"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "Two faan",
                    "tw": "兩番",
                    "zh": "两番"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "en": "Three faan",
                    "tw": "三番",
                    "zh": "三番"
                  }
                }
              ],
              "prompt": {
                "en": "How many faan does South’s South-wind set earn in South round?",
                "tw": "南圈南家的南風刻子，門風與圈風共計多少番？",
                "zh": "南圈南家的南风刻子，门风与圈风共计多少番？"
              },
              "type": "choice"
            },
            {
              "context": {
                "en": "Ordinary settlement only: no liability, robbing a kong or flower win.",
                "tw": "只計算普通支付，無包牌、搶槓或花胡。",
                "zh": "只计算普通支付，无包牌、抢杠或花胡。"
              },
              "explanation": {
                "en": "4 faan discard win: the discarder pays 64.",
                "tw": "4番普通棄牌胡：出牌者獨付64。",
                "zh": "4番普通弃牌胡：出牌者独付64。"
              },
              "fan": 4,
              "id": "hk-7-4-c",
              "options": [
                {
                  "id": "0",
                  "label": {
                    "en": "64 points",
                    "tw": "64 積分",
                    "zh": "64 积分"
                  },
                  "value": 64
                },
                {
                  "id": "1",
                  "label": {
                    "en": "96 points",
                    "tw": "96 積分",
                    "zh": "96 积分"
                  },
                  "value": 96
                },
                {
                  "id": "2",
                  "label": {
                    "en": "32 points",
                    "tw": "32 積分",
                    "zh": "32 积分"
                  },
                  "value": 32
                }
              ],
              "prompt": {
                "en": "For an ordinary four-faan discard win, how much does the discarder pay?",
                "tw": "四番普通棄牌胡，出牌者支付多少？",
                "zh": "四番普通弃牌胡，出牌者支付多少？"
              },
              "type": "score",
              "winMode": "discard"
            },
            {
              "answerId": "b",
              "explanation": {
                "en": "A complete shape still falls below three faan; an ordinary self-draw can add one.",
                "tw": "形狀完整不代表達到三番；普通自摸才可能再添一番。",
                "zh": "形状完整不代表达到三番；普通自摸才可能再添一番。"
              },
              "id": "hk-7-4-d",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "Yes",
                    "tw": "可以",
                    "zh": "可以"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "No",
                    "tw": "不可以",
                    "zh": "不可以"
                  }
                }
              ],
              "prompt": {
                "en": "No-flower Concealed Hand plus All Sequences is two faan. Is a discard win eligible?",
                "tw": "無花門清、平胡合計兩番，若只胡他家棄牌，已滿足最低番數嗎？",
                "zh": "无花门清、平胡合计两番，若只胡他家弃牌，已满足最低番数吗？"
              },
              "type": "choice"
            }
          ],
          "title": {
            "en": "One-faan patterns and minimum",
            "tw": "一番項目與三番門檻",
            "zh": "一番项目与三番门槛"
          }
        },
        {
          "example": {
            "caption": {
              "en": "Dots with honours, four triplets, South self-draw and concealed.",
              "tw": "一門筒牌加字牌，四個刻子，南家自摸且門清。",
              "zh": "一门筒牌加字牌，四个刻子，南家自摸且门清。"
            },
            "tiles": [
              "p2",
              "p2",
              "p2",
              "p5",
              "p5",
              "p5",
              "z5",
              "z5",
              "z5",
              "z2",
              "z2",
              "z2",
              "p9",
              "p9"
            ]
          },
          "id": "hk-7-5",
          "intro": {
            "en": "A hand may combine one suit, triplets, dragons and winds. List each valid part before applying the cap.",
            "tw": "同一牌形可能同時滿足一門花色、刻子、三元和風牌條件，先逐項列出再封頂。",
            "zh": "同一牌形可能同时满足一门花色、刻子、三元和风牌条件，先逐项列出再封顶。"
          },
          "questions": [
            {
              "breakdown": [
                {
                  "fan": 3,
                  "title": {
                    "en": "Half Flush",
                    "tw": "混一色",
                    "zh": "混一色"
                  }
                },
                {
                  "fan": 1,
                  "title": {
                    "en": "Seat South set",
                    "tw": "門風南刻子",
                    "zh": "门风南刻子"
                  }
                },
                {
                  "fan": 1,
                  "title": {
                    "en": "Red Dragon set",
                    "tw": "紅中刻子",
                    "zh": "红中刻子"
                  }
                },
                {
                  "fan": 1,
                  "title": {
                    "en": "Concealed Hand",
                    "tw": "門前清",
                    "zh": "门前清"
                  }
                },
                {
                  "fan": 1,
                  "title": {
                    "en": "Self-Draw",
                    "tw": "自摸",
                    "zh": "自摸"
                  }
                }
              ],
              "context": {
                "en": "Only dots and honours; no calls or kongs.",
                "tw": "全手只有筒牌和字牌，無吃碰槓。",
                "zh": "全手只有筒牌和字牌，无吃碰杠。"
              },
              "explanation": {
                "en": "Half Flush 3 + Seat South set 1 + Red Dragon set 1 + Concealed Hand 1 + Self-Draw 1 = 7 faan.",
                "tw": "混一色3＋門風南刻子1＋紅中刻子1＋門前清1＋自摸1＝7番。",
                "zh": "混一色3＋门风南刻子1＋红中刻子1＋门前清1＋自摸1＝7番。"
              },
              "hand": [
                "p1",
                "p2",
                "p3",
                "p4",
                "p5",
                "p6",
                "z2",
                "z2",
                "z2",
                "z5",
                "z5",
                "z5",
                "p9",
                "p9"
              ],
              "id": "hk-7-5-a",
              "melds": [],
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "6 faan",
                    "tw": "6 番",
                    "zh": "6 番"
                  },
                  "value": 6
                },
                {
                  "id": "b",
                  "label": {
                    "en": "7 faan",
                    "tw": "7 番",
                    "zh": "7 番"
                  },
                  "value": 7
                },
                {
                  "id": "c",
                  "label": {
                    "en": "9 faan",
                    "tw": "9 番",
                    "zh": "9 番"
                  },
                  "value": 9
                }
              ],
              "prompt": {
                "en": "South in East round, no-flower self-draw: how many faan?",
                "tw": "南家、東圈、無花自摸，合計多少番？",
                "zh": "南家、东圈、无花自摸，合计多少番？"
              },
              "type": "faan"
            },
            {
              "breakdown": [
                {
                  "fan": 3,
                  "title": {
                    "en": "All Triplets",
                    "tw": "對對胡",
                    "zh": "对对胡"
                  }
                },
                {
                  "fan": 3,
                  "title": {
                    "en": "Half Flush",
                    "tw": "混一色",
                    "zh": "混一色"
                  }
                },
                {
                  "fan": 1,
                  "title": {
                    "en": "Red Dragon set",
                    "tw": "紅中刻子",
                    "zh": "红中刻子"
                  }
                },
                {
                  "fan": 1,
                  "title": {
                    "en": "Seat South set",
                    "tw": "門風南刻子",
                    "zh": "门风南刻子"
                  }
                },
                {
                  "fan": 1,
                  "title": {
                    "en": "Self-Draw",
                    "tw": "自摸",
                    "zh": "自摸"
                  }
                }
              ],
              "context": {
                "en": "East round, no flowers; all four sets are triplets and red dragon is exposed.",
                "tw": "東圈、無花；四組均為刻子，紅中是明碰。",
                "zh": "东圈、无花；四组均为刻子，红中是明碰。"
              },
              "explanation": {
                "en": "All Triplets 3 + Half Flush 3 + Red Dragon set 1 + Seat South set 1 + Self-Draw 1 = 9 faan.",
                "tw": "對對胡3＋混一色3＋紅中刻子1＋門風南刻子1＋自摸1＝9番。",
                "zh": "对对胡3＋混一色3＋红中刻子1＋门风南刻子1＋自摸1＝9番。"
              },
              "hand": [
                "p2",
                "p2",
                "p2",
                "p5",
                "p5",
                "p5",
                "z2",
                "z2",
                "z2",
                "p9",
                "p9"
              ],
              "id": "hk-7-5-b",
              "melds": [
                {
                  "tiles": [
                    "z5",
                    "z5",
                    "z5"
                  ],
                  "type": "pung"
                }
              ],
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "8 faan",
                    "tw": "8 番",
                    "zh": "8 番"
                  },
                  "value": 8
                },
                {
                  "id": "b",
                  "label": {
                    "en": "9 faan",
                    "tw": "9 番",
                    "zh": "9 番"
                  },
                  "value": 9
                },
                {
                  "id": "c",
                  "label": {
                    "en": "11 faan",
                    "tw": "11 番",
                    "zh": "11 番"
                  },
                  "value": 11
                }
              ],
              "prompt": {
                "en": "South self-draw after exposing red dragons: how many faan?",
                "tw": "南家明碰紅中後自摸，這手計多少番？",
                "zh": "南家明碰红中后自摸，这手计多少番？"
              },
              "type": "faan"
            },
            {
              "breakdown": [
                {
                  "fan": 7,
                  "title": {
                    "en": "Full Flush",
                    "tw": "清一色",
                    "zh": "清一色"
                  }
                },
                {
                  "fan": 1,
                  "title": {
                    "en": "Concealed Hand",
                    "tw": "門前清",
                    "zh": "门前清"
                  }
                },
                {
                  "fan": 1,
                  "title": {
                    "en": "Self-Draw",
                    "tw": "自摸",
                    "zh": "自摸"
                  }
                }
              ],
              "context": {
                "en": "No flowers or kongs; every tile is a character.",
                "tw": "無花、無槓，整手只有萬子。",
                "zh": "无花、无杠，整手只有万子。"
              },
              "explanation": {
                "en": "Full Flush 7 + Concealed Hand 1 + Self-Draw 1 = 9 faan.",
                "tw": "清一色7＋門前清1＋自摸1＝9番。",
                "zh": "清一色7＋门前清1＋自摸1＝9番。"
              },
              "hand": [
                "m1",
                "m2",
                "m3",
                "m3",
                "m4",
                "m5",
                "m6",
                "m7",
                "m8",
                "m9",
                "m9",
                "m9",
                "m5",
                "m5"
              ],
              "id": "hk-7-5-c",
              "melds": [],
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "8 faan",
                    "tw": "8 番",
                    "zh": "8 番"
                  },
                  "value": 8
                },
                {
                  "id": "b",
                  "label": {
                    "en": "9 faan",
                    "tw": "9 番",
                    "zh": "9 番"
                  },
                  "value": 9
                },
                {
                  "id": "c",
                  "label": {
                    "en": "11 faan",
                    "tw": "11 番",
                    "zh": "11 番"
                  },
                  "value": 11
                }
              ],
              "prompt": {
                "en": "Concealed characters self-draw: how many faan?",
                "tw": "門清萬子普通自摸，合計多少番？",
                "zh": "门清万子普通自摸，合计多少番？"
              },
              "type": "faan"
            },
            {
              "answerId": "b",
              "explanation": {
                "en": "Five plus three is eight; other valid faan may add, subject to the cap.",
                "tw": "五加三為八；其他成立番種可再疊加並受十番上限限制。",
                "zh": "五加三为八；其他成立番种可再叠加并受十番上限限制。"
              },
              "id": "hk-7-5-d",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "Five",
                    "tw": "五番",
                    "zh": "五番"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "Eight",
                    "tw": "八番",
                    "zh": "八番"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "en": "Ten",
                    "tw": "十番",
                    "zh": "十番"
                  }
                }
              ],
              "prompt": {
                "en": "Big Three Dragons gives five base faan plus one for each dragon set. What is the subtotal?",
                "tw": "大三元基礎五番，三組三元刻子又各一番，暫無其他條件時是多少番？",
                "zh": "大三元基础五番，三组三元刻子又各一番，暂无其他条件时是多少番？"
              },
              "type": "choice"
            }
          ],
          "title": {
            "en": "Flushes, triplets and stacked faan",
            "tw": "混清一色與刻子疊加",
            "zh": "混清一色与刻子叠加"
          }
        },
        {
          "example": {
            "caption": {
              "en": "Thirteen Orphans is a listed special shape; the name does not mean thirteen faan.",
              "tw": "十三幺為列明的特殊結構；牌名中的“十三”不等於十三番。",
              "zh": "十三幺为列明的特殊结构；牌名中的“十三”不等于十三番。"
            },
            "tiles": [
              "m1",
              "m9",
              "p1",
              "p9",
              "s1",
              "s9",
              "z1",
              "z2",
              "z3",
              "z4",
              "z5",
              "z6",
              "z7",
              "z1"
            ]
          },
          "id": "hk-7-6",
          "intro": {
            "en": "Limit hands count ten faan, but waits, concealment and discard eligibility differ.",
            "tw": "例牌按十番處理，但具體等待、是否門清及可否取棄牌有區別。",
            "zh": "例牌按十番处理，但具体等待、是否门清及可否取弃牌有区别。"
          },
          "questions": [
            {
              "breakdown": [
                {
                  "fan": 10,
                  "title": {
                    "en": "Thirteen Orphans limit",
                    "tw": "十三幺例牌",
                    "zh": "十三幺例牌"
                  }
                }
              ],
              "context": {
                "en": "All thirteen terminal and honour types, with a second East as the pair.",
                "tw": "十三種幺九和字牌各一張，再有一張東風成對。",
                "zh": "十三种幺九和字牌各一张，再有一张东风成对。"
              },
              "explanation": {
                "en": "Thirteen Orphans limit 10 = 10 faan.",
                "tw": "十三幺例牌10＝10番。",
                "zh": "十三幺例牌10＝10番。"
              },
              "hand": [
                "m1",
                "m9",
                "p1",
                "p9",
                "s1",
                "s9",
                "z1",
                "z2",
                "z3",
                "z4",
                "z5",
                "z6",
                "z7",
                "z1"
              ],
              "id": "hk-7-6-a",
              "melds": [],
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "9 faan",
                    "tw": "9 番",
                    "zh": "9 番"
                  },
                  "value": 9
                },
                {
                  "id": "b",
                  "label": {
                    "en": "10 faan",
                    "tw": "10 番",
                    "zh": "10 番"
                  },
                  "value": 10
                },
                {
                  "id": "c",
                  "label": {
                    "en": "12 faan",
                    "tw": "12 番",
                    "zh": "12 番"
                  },
                  "value": 12
                }
              ],
              "prompt": {
                "en": "How many faan for this Thirteen Orphans?",
                "tw": "這手十三幺按本參考計多少番？",
                "zh": "这手十三幺按本参考计多少番？"
              },
              "type": "faan"
            },
            {
              "answerId": "b",
              "explanation": {
                "en": "Three plus two dragon faan is five before other qualifying patterns.",
                "tw": "小三元三番加兩組三元刻子各一，共五番，再核對其他成立條件。",
                "zh": "小三元三番加两组三元刻子各一，共五番，再核对其他成立条件。"
              },
              "id": "hk-7-6-b",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "Three",
                    "tw": "三番",
                    "zh": "三番"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "Five",
                    "tw": "五番",
                    "zh": "五番"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "en": "Ten",
                    "tw": "十番",
                    "zh": "十番"
                  }
                }
              ],
              "prompt": {
                "en": "Little Three Dragons: two dragon sets and a third-dragon pair. Three base plus two dragon faan total what?",
                "tw": "小三元：兩組三元刻子、第三種三元作將；基礎三番加兩組三元各一番，共多少？",
                "zh": "小三元：两组三元刻子、第三种三元作将；基础三番加两组三元各一番，共多少？"
              },
              "type": "choice"
            },
            {
              "answerId": "b",
              "explanation": {
                "en": "The reference requires the original nine-sided wait for a discard win.",
                "tw": "協會參考的棄牌胡要求原先為九面等待；自摸條件不同。",
                "zh": "协会参考的弃牌胡要求原先为九面等待；自摸条件不同。"
              },
              "id": "hk-7-6-c",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "Yes",
                    "tw": "可以",
                    "zh": "可以"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "No",
                    "tw": "不可以",
                    "zh": "不可以"
                  }
                }
              ],
              "prompt": {
                "en": "For a Nine Gates discard win, can you ignore the original wait and check only the final 14 tiles?",
                "tw": "九子連環若要胡他家棄牌，只需最後成1112345678999再加任意同門一張，完全不看原等待嗎？",
                "zh": "九子连环若要胡他家弃牌，只需最后成1112345678999再加任意同门一张，完全不看原等待吗？"
              },
              "type": "choice"
            },
            {
              "answerId": "b",
              "explanation": {
                "en": "A double-pair wait must self-draw; a single pair wait may claim a discard.",
                "tw": "四暗刻對碰等待須自摸；單釣將牌才可取棄牌。",
                "zh": "四暗刻对碰等待须自摸；单钓将牌才可取弃牌。"
              },
              "id": "hk-7-6-d",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "Yes",
                    "tw": "可以",
                    "zh": "可以"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "No",
                    "tw": "不可以",
                    "zh": "不可以"
                  }
                }
              ],
              "prompt": {
                "en": "With four concealed triplets and a double-pair wait, may you claim a discard?",
                "tw": "四暗刻無槓、對碰等待時，可以直接胡他家棄牌嗎？",
                "zh": "四暗刻无杠、对碰等待时，可以直接胡他家弃牌吗？"
              },
              "type": "choice"
            }
          ],
          "title": {
            "en": "Limit hands and special conditions",
            "tw": "例牌與特殊限制",
            "zh": "例牌与特殊限制"
          }
        },
        {
          "example": {
            "caption": {
              "en": "If all dragon sets are exposed, the supplier of the third matters.",
              "tw": "三元牌若都成為公開組合，要回看第三組由誰供牌。",
              "zh": "三元牌若都成为公开组合，要回看第三组由谁供牌。"
            },
            "tiles": [
              "z5",
              "z5",
              "z5",
              "z6",
              "z6",
              "z6",
              "z7",
              "z7",
              "z7",
              "p1",
              "p2",
              "p3",
              "p9",
              "p9"
            ]
          },
          "id": "hk-7-7",
          "intro": {
            "en": "The ordinary calculator does not cover special payments. Determine liability and winning method first.",
            "tw": "普通積分計算器只在沒有特殊支付時適用。先判斷誰負責支付，再查對應番數。",
            "zh": "普通积分计算器只在没有特殊支付时适用。先判断谁负责支付，再查对应番数。"
          },
          "questions": [
            {
              "answerId": "a",
              "explanation": {
                "en": "Four-exposed-set liability may make the supplier pay the entire self-draw amount.",
                "tw": "十二章包可能由第四組明章的供牌者獨付自摸總額。",
                "zh": "十二章包可能由第四组明章的供牌者独付自摸总额。"
              },
              "id": "hk-7-7-a",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "West",
                    "tw": "西家",
                    "zh": "西家"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "Only the winner",
                    "tw": "只有胡牌者自己",
                    "zh": "只有胡牌者自己"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "en": "Always each opponent",
                    "tw": "仍必由三家各付",
                    "zh": "仍必由三家各付"
                  }
                }
              ],
              "prompt": {
                "en": "West supplies a fourth exposed set, then its owner self-draws. Who may bear all three shares?",
                "tw": "第四組公開面子由西家棄牌促成，胡牌者隨後自摸；可能由誰承擔三家總積分？",
                "zh": "第四组公开面子由西家弃牌促成，胡牌者随后自摸；可能由谁承担三家总积分？"
              },
              "type": "choice"
            },
            {
              "answerId": "a",
              "explanation": {
                "en": "The supplier of a third exposed dragon set may pay the full self-draw total; a concealed-kong exception applies.",
                "tw": "第三組公開三元牌的供牌者可能包付自摸總額；暗槓例外。",
                "zh": "第三组公开三元牌的供牌者可能包付自摸总额；暗杠例外。"
              },
              "id": "hk-7-7-b",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "Big Three Dragons liability",
                    "tw": "大三元包",
                    "zh": "大三元包"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "All Sequences",
                    "tw": "必須是平胡",
                    "zh": "必须是平胡"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "en": "Seven Flowers",
                    "tw": "七花小花胡",
                    "zh": "七花小花胡"
                  }
                }
              ],
              "prompt": {
                "en": "North supplies the third exposed dragon set, then the hand self-draws. Which liability should be checked?",
                "tw": "第三組三元明刻由北家供牌促成大三元，之後自摸；先核對哪種責任？",
                "zh": "第三组三元明刻由北家供牌促成大三元，之后自摸；先核对哪种责任？"
              },
              "type": "choice"
            },
            {
              "answerId": "a",
              "explanation": {
                "en": "Robbing a kong adds its faan as a discard claim but the kong player pays the self-draw total.",
                "tw": "搶槓按開槓者出銃加番，支付方式卻按包自摸。",
                "zh": "抢杠按开杠者出铳加番，支付方式却按包自摸。"
              },
              "id": "hk-7-7-c",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "No; the kong player pays the full self-draw total",
                    "tw": "不；開槓者按包自摸付三家總額",
                    "zh": "不；开杠者按包自摸付三家总额"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "Yes, always only one discard share",
                    "tw": "是；永遠只收棄牌胡一份",
                    "zh": "是；永远只收弃牌胡一份"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "en": "No; every player pays the full total",
                    "tw": "不；四家都付三家總額",
                    "zh": "不；四家都付三家总额"
                  }
                }
              ],
              "prompt": {
                "en": "You win by robbing an added kong. Do you collect only the ordinary one-discarder amount?",
                "tw": "搶他家加槓成功，支付時直接按普通棄牌胡一人份收取嗎？",
                "zh": "抢他家加杠成功，支付时直接按普通弃牌胡一人份收取吗？"
              },
              "type": "choice"
            },
            {
              "answerId": "a",
              "explanation": {
                "en": "The special flower rule excludes the ordinary Self-Draw addition and has timing conditions.",
                "tw": "協會花胡特別規則明確七花不另加普通自摸一番，聲明時機也要核對。",
                "zh": "协会花胡特别规则明确七花不另加普通自摸一番，声明时机也要核对。"
              },
              "id": "hk-7-7-d",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "No; Seven Flowers is three-faan self-draw",
                    "tw": "不加；小花胡按三番自摸",
                    "zh": "不加；小花胡按三番自摸"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "Yes; it becomes four faan",
                    "tw": "加一番，必成四番",
                    "zh": "加一番，必成四番"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "en": "Seven Flowers is always ten faan",
                    "tw": "七花一定是十番",
                    "zh": "七花一定是十番"
                  }
                }
              ],
              "prompt": {
                "en": "With flowers enabled, you declare Seven Flowers at the proper time. Add ordinary Self-Draw faan?",
                "tw": "啟用花牌時摸齊七花並按時聲明小花胡，是否再加普通自摸一番？",
                "zh": "启用花牌时摸齐七花并按时声明小花胡，是否再加普通自摸一番？"
              },
              "type": "choice"
            }
          ],
          "title": {
            "en": "Liability, robbed kongs and flowers",
            "tw": "包牌、搶槓與花胡",
            "zh": "包牌、抢杠与花胡"
          }
        }
      ],
      "summary": {
        "en": "Check qualifying faan, the three-faan minimum and settlement.",
        "tw": "按協會參考核對番種、三番門檻與積分。",
        "zh": "按协会参考核对番种、三番门槛与积分。"
      },
      "title": {
        "en": "Winning conditions and scoring",
        "tw": "香港胡牌條件與計番",
        "zh": "香港胡牌条件与计番"
      }
    },
    {
      "id": "hk-8",
      "lessons": [
        {
          "example": {
            "caption": {
              "en": "No flowers; you are South in East round, with a three-faan minimum and ten-faan cap.",
              "tw": "本局無花；你坐南家，圈風為東；採用三番起胡與十番封頂。",
              "zh": "本局无花；你坐南家，圈风为东；采用三番起胡与十番封顶。"
            },
            "tiles": [
              "z2",
              "p1",
              "p2",
              "p3",
              "z5"
            ]
          },
          "id": "hk-8-1",
          "intro": {
            "en": "Follow the hints through the deal, pung, discard, draw and win. The arranged tile order makes each step easy to explain and review.",
            "tw": "先看提示，按本局目標完成開局、碰牌、出牌、摸牌與胡牌。牌序經過編排，便於逐步解釋和複盤。",
            "zh": "先看提示，按本局目标完成开局、碰牌、出牌、摸牌与胡牌。牌序经过编排，便于逐步解释和复盘。"
          },
          "questions": [
            {
              "answerId": "a",
              "explanation": {
                "en": "Hong Kong tables vary. Agreeing on rules reduces incorrect calls and scoring disputes.",
                "tw": "香港牌也有桌規差異；先確認能減少誤叫與計分爭議。",
                "zh": "香港牌也有桌规差异；先确认能减少误叫与计分争议。"
              },
              "id": "hk-8-1-a",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "Ruleset, flowers, minimum faan and scoring",
                    "tw": "玩法版本、花牌、最低番數和計分約定",
                    "zh": "玩法版本、花牌、最低番数和计分约定"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "Assume your usual rules apply",
                    "tw": "把自己的所有經驗直接套上",
                    "zh": "把自己的所有经验直接套上"
                  }
                }
              ],
              "prompt": {
                "en": "What should you confirm at a new table?",
                "tw": "來到新牌桌，最先確認甚麼？",
                "zh": "来到新牌桌，最先确认什么？"
              },
              "type": "choice"
            },
            {
              "answerId": "b",
              "explanation": {
                "en": "After a pung, discard without taking a normal draw; play then moves to your next player.",
                "tw": "碰後不再普通摸牌，完成出牌後輪到下家。",
                "zh": "碰后不再普通摸牌，完成出牌后轮到下家。"
              },
              "id": "hk-8-1-b",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "Take a normal draw",
                    "tw": "再摸一次普通牌",
                    "zh": "再摸一次普通牌"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "Discard one legal tile",
                    "tw": "打出一張合法牌",
                    "zh": "打出一张合法牌"
                  }
                }
              ],
              "prompt": {
                "en": "You just punged. What comes next?",
                "tw": "你剛碰牌，本局的下一步是甚麼？",
                "zh": "你刚碰牌，本局的下一步是什么？"
              },
              "type": "choice"
            },
            {
              "explanation": {
                "en": "You connected claims, discards, draws, a win and settlement. Review the course or try again with fewer hints.",
                "tw": "你已把叫牌、出牌、摸牌和胡牌結算串起來。可以回目錄複習，或再次挑戰並減少提示。",
                "zh": "你已把叫牌、出牌、摸牌和胡牌结算串起来。可以回目录复习，或再次挑战并减少提示。"
              },
              "id": "hk-8-1-c",
              "prompt": {
                "en": "Complete this teaching hand at the table.",
                "tw": "在牌桌中完成這一局教學對局。",
                "zh": "在牌桌中完成这一局教学对局。"
              },
              "scenarioId": "pung",
              "type": "round"
            }
          ],
          "title": {
            "en": "Finish a guided hand",
            "tw": "跟著提示打完一局",
            "zh": "跟着提示打完一局"
          }
        },
        {
          "example": {
            "caption": {
              "en": "No flowers; you are South in East round, with a three-faan minimum and ten-faan cap.",
              "tw": "本局無花；你坐南家，圈風為東；採用三番起胡與十番封頂。",
              "zh": "本局无花；你坐南家，圈风为东；采用三番起胡与十番封顶。"
            },
            "tiles": [
              "z2",
              "p1",
              "p2",
              "p3",
              "z5"
            ]
          },
          "id": "hk-8-2",
          "intro": {
            "en": "Connect the chow source with discarding without a draw. Hints start collapsed but remain available. Check the faan before settlement.",
            "tw": "把吃牌來源與直接出牌串起來。提示預設收起，需要時可以展開；結算前核對番種。",
            "zh": "把吃牌来源与直接出牌串起来。提示默认收起，需要时可以展开；结算前核对番种。"
          },
          "questions": [
            {
              "answerId": "b",
              "explanation": {
                "en": "The three tiles remain an exposed group and cannot be exchanged with concealed tiles.",
                "tw": "已經吃出的三張牌保持為一組，不再與暗牌互換。",
                "zh": "已经吃出的三张牌保持为一组，不再与暗牌互换。"
              },
              "id": "hk-8-2-a",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "Yes, freely",
                    "tw": "能，自由調整",
                    "zh": "能，自由调整"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "No, the exposed set is fixed",
                    "tw": "不能，明牌組合固定",
                    "zh": "不能，明牌组合固定"
                  }
                }
              ],
              "prompt": {
                "en": "Can a confirmed chow later be rearranged?",
                "tw": "吃牌組合固定後，能否以後拆開換另一組？",
                "zh": "吃牌组合固定后，能否以后拆开换另一组？"
              },
              "type": "choice"
            },
            {
              "answerId": "a",
              "explanation": {
                "en": "Three plus one plus one is five. The exposed chow rules out Concealed Hand.",
                "tw": "三加一加一是五番；本例已有明吃，不計門前清。",
                "zh": "三加一加一是五番；本例已有明吃，不计门前清。"
              },
              "id": "hk-8-2-b",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "5",
                    "tw": "5 番",
                    "zh": "5 番"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "3",
                    "tw": "3 番",
                    "zh": "3 番"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "en": "10",
                    "tw": "10 番",
                    "zh": "10 番"
                  }
                }
              ],
              "prompt": {
                "en": "Half Flush 3 + green-dragon pung 1 + ordinary Self-Draw 1 totals how many faan?",
                "tw": "混一色3番＋發財刻子1番＋普通自摸1番，共多少番？",
                "zh": "混一色3番＋发财刻子1番＋普通自摸1番，共多少番？"
              },
              "type": "choice"
            },
            {
              "explanation": {
                "en": "You connected claims, discards, draws, a win and settlement. Review the course or try again with fewer hints.",
                "tw": "你已把叫牌、出牌、摸牌和胡牌結算串起來。可以回目錄複習，或再次挑戰並減少提示。",
                "zh": "你已把叫牌、出牌、摸牌和胡牌结算串起来。可以回目录复习，或再次挑战并减少提示。"
              },
              "id": "hk-8-2-c",
              "prompt": {
                "en": "Complete this teaching hand at the table.",
                "tw": "在牌桌中完成這一局教學對局。",
                "zh": "在牌桌中完成这一局教学对局。"
              },
              "scenarioId": "chow",
              "type": "round"
            }
          ],
          "title": {
            "en": "Fewer hints: the chow route",
            "tw": "減少提示：吃牌路線",
            "zh": "减少提示：吃牌路线"
          }
        },
        {
          "example": {
            "caption": {
              "en": "No flowers; you are South in East round, with a three-faan minimum and ten-faan cap.",
              "tw": "本局無花；你坐南家，圈風為東；採用三番起胡與十番封頂。",
              "zh": "本局无花；你坐南家，圈风为东；采用三番起胡与十番封顶。"
            },
            "tiles": [
              "z2",
              "p1",
              "p2",
              "p3",
              "z5"
            ]
          },
          "id": "hk-8-3",
          "intro": {
            "en": "Complete an arranged hand with an exposed kong and replacement. Keep the tile count correct and declare a win only when the conditions are met.",
            "tw": "獨立完成一局含大明槓和補牌的教學對局。保持張數正確，等真正達到胡牌條件時再聲明胡牌。",
            "zh": "独立完成一局含大明杠和补牌的教学对局。保持张数正确，等真正达到胡牌条件时再声明胡牌。"
          },
          "questions": [
            {
              "answerId": "c",
              "explanation": {
                "en": "One kong adds a physical tile: fifteen tiles still represent four sets and a pair.",
                "tw": "槓多用一張實體牌，因此補牌後完整手牌有十五張；結構上仍是四組加一對。",
                "zh": "杠多用一张实体牌，因此补牌后完整手牌有十五张；结构上仍是四组加一对。"
              },
              "id": "hk-8-3-a",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "Always 14",
                    "tw": "始終14張",
                    "zh": "始终14张"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "13",
                    "tw": "13張",
                    "zh": "13张"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "en": "15; the kong still counts as one set",
                    "tw": "15張；槓按一組面子折算",
                    "zh": "15张；杠按一组面子折算"
                  }
                }
              ],
              "prompt": {
                "en": "How many physical tiles are in a complete basic hand with one kong?",
                "tw": "有一個槓的完整基本牌型，實體牌數通常是多少？",
                "zh": "有一个杠的完整基本牌型，实体牌数通常是多少？"
              },
              "type": "choice"
            },
            {
              "answerId": "a",
              "explanation": {
                "en": "Preserve the table and verify the rules before making an uncertain win declaration.",
                "tw": "保留桌面狀態並核對規則，比在不確定時貿然宣佈胡牌更可靠。",
                "zh": "保留桌面状态并核对规则，比在不确定时贸然宣布胡牌更可靠。"
              },
              "id": "hk-8-3-b",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "Check shape, faan and restrictions; ask about unclear rules",
                    "tw": "先核對牌型、番數和限制，有疑問請教規則",
                    "zh": "先核对牌型、番数和限制，有疑问请教规则"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "Expose everything first",
                    "tw": "先推倒手牌再說",
                    "zh": "先推倒手牌再说"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "en": "Use a different style’s rules",
                    "tw": "用其他地區的規則替代",
                    "zh": "用其他地区的规则替代"
                  }
                }
              ],
              "prompt": {
                "en": "If you are unsure whether you can win, what is the sound learning habit?",
                "tw": "拿不準是否能胡牌時，正確的學習習慣是甚麼？",
                "zh": "拿不准是否能胡牌时，正确的学习习惯是什么？"
              },
              "type": "choice"
            },
            {
              "explanation": {
                "en": "You connected claims, discards, draws, a win and settlement. Review the course or try again with fewer hints.",
                "tw": "你已把叫牌、出牌、摸牌和胡牌結算串起來。可以回目錄複習，或再次挑戰並減少提示。",
                "zh": "你已把叫牌、出牌、摸牌和胡牌结算串起来。可以回目录复习，或再次挑战并减少提示。"
              },
              "id": "hk-8-3-c",
              "prompt": {
                "en": "Complete this teaching hand at the table.",
                "tw": "在牌桌中完成這一局教學對局。",
                "zh": "在牌桌中完成这一局教学对局。"
              },
              "scenarioId": "kong",
              "type": "round"
            }
          ],
          "title": {
            "en": "Final practice: kong and replacement",
            "tw": "綜合過關：槓與補牌",
            "zh": "综合过关：杠与补牌"
          }
        },
        {
          "example": {
            "caption": {
              "en": "Starting concealed tiles for this round; subsequent actions and settlement are interactive.",
              "tw": "這是本局開端的暗手示意；完整對局中會繼續摸打、叫牌與核對積分。",
              "zh": "这是本局开端的暗手示意；完整对局中会继续摸打、叫牌与核对积分。"
            },
            "tiles": [
              "p1",
              "p2",
              "p3",
              "p4",
              "p5",
              "p6",
              "z2",
              "z2",
              "p9",
              "p9",
              "z5",
              "z5",
              "z5"
            ]
          },
          "id": "hk-8-4",
          "intro": {
            "en": "Kong replacement win: Win directly on kong replacement: An opponent discarded: choose Exposed Kong.",
            "tw": "槓後補牌立即胡牌：槓後補牌立即胡牌：對手剛棄牌，選擇大明槓。",
            "zh": "杠后补牌立即胡牌：杠后补牌立即胡牌：对手刚弃牌，选择大明杠。"
          },
          "questions": [
            {
              "answerId": "a",
              "explanation": {
                "en": "After confirming a kong, replace from the wall tail.",
                "tw": "槓確認後從牌尾補一張。",
                "zh": "杠确认后从牌尾补一张。"
              },
              "id": "hk-8-4-a",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "Wall tail",
                    "tw": "牌尾",
                    "zh": "牌尾"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "Wall head",
                    "tw": "牌牆頭",
                    "zh": "牌墙头"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "en": "Discard river",
                    "tw": "牌河",
                    "zh": "牌河"
                  }
                }
              ],
              "prompt": {
                "en": "Where do you draw after an exposed kong?",
                "tw": "大明槓後必須從哪裡補牌？",
                "zh": "大明杠后必须从哪里补牌？"
              },
              "type": "choice"
            },
            {
              "answerId": "b",
              "explanation": {
                "en": "Breakdown: Half Flush 3 + Red Dragon set 1 + Seat South set 1 + Win on Kong Replacement 1 + Self-Draw 1; total 7, scored as 7.",
                "tw": "本局番種明細：混一色 3＋紅中刻子 1＋門風南刻子 1＋槓上自摸 1＋自摸 1；合計7，計7番。",
                "zh": "本局番种明细：混一色 3＋红中刻子 1＋门风南刻子 1＋杠上自摸 1＋自摸 1；合计7，计7番。"
              },
              "id": "hk-8-4-b",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "5 faan",
                    "tw": "5番",
                    "zh": "5番"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "7 faan",
                    "tw": "7番",
                    "zh": "7番"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "en": "8 faan",
                    "tw": "8番",
                    "zh": "8番"
                  }
                }
              ],
              "prompt": {
                "en": "Add the target patterns and apply the cap. How many faan?",
                "tw": "本局目標番種逐項相加，封頂後是多少番？",
                "zh": "本局目标番种逐项相加，封顶后是多少番？"
              },
              "type": "choice"
            },
            {
              "explanation": {
                "en": "You followed the target route. Review the steps, faan and payment.",
                "tw": "你已按目標完成牌路。複盤每一步，再核對成立的番種和支付。",
                "zh": "你已按目标完成牌路。复盘每一步，再核对成立的番种和支付。"
              },
              "id": "hk-8-4-c",
              "prompt": {
                "en": "Complete this arranged teaching round.",
                "tw": "在牌桌中完成這局編排教學對局。",
                "zh": "在牌桌中完成这局编排教学对局。"
              },
              "scenarioId": "kong-replacement",
              "type": "round"
            }
          ],
          "title": {
            "en": "Win on a kong replacement",
            "tw": "槓上自摸",
            "zh": "杠上自摸"
          }
        },
        {
          "example": {
            "caption": {
              "en": "Starting concealed tiles for this round; subsequent actions and settlement are interactive.",
              "tw": "這是本局開端的暗手示意；完整對局中會繼續摸打、叫牌與核對積分。",
              "zh": "这是本局开端的暗手示意；完整对局中会继续摸打、叫牌与核对积分。"
            },
            "tiles": [
              "m1",
              "m2",
              "m3",
              "m3",
              "m4",
              "m5",
              "m6",
              "m7",
              "m8",
              "m9",
              "m9",
              "m5",
              "m5"
            ]
          },
          "id": "hk-8-5",
          "intro": {
            "en": "One suit and concealment: Complete a full flush by self-draw: Draw from the wall head on your turn.",
            "tw": "一門數牌與門清：一門數牌自摸成清一色：輪到你，從牌牆頭摸一張。",
            "zh": "一门数牌与门清：一门数牌自摸成清一色：轮到你，从牌墙头摸一张。"
          },
          "questions": [
            {
              "answerId": "a",
              "explanation": {
                "en": "Full Flush uses one numbered suit and no honours.",
                "tw": "清一色只有同一門數牌。",
                "zh": "清一色只有同一门数牌。"
              },
              "id": "hk-8-5-a",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "No",
                    "tw": "不能",
                    "zh": "不能"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "Yes",
                    "tw": "可以",
                    "zh": "可以"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "en": "East wind only",
                    "tw": "僅能含東風",
                    "zh": "仅能含东风"
                  }
                }
              ],
              "prompt": {
                "en": "May Full Flush include honour tiles?",
                "tw": "清一色的手牌可含字牌嗎？",
                "zh": "清一色的手牌可含字牌吗？"
              },
              "type": "choice"
            },
            {
              "answerId": "b",
              "explanation": {
                "en": "Breakdown: Full Flush 7 + No-flower Concealed Hand 1 + Self-Draw 1; total 9, scored as 9.",
                "tw": "本局番種明細：清一色 7＋無花門前清 1＋自摸 1；合計9，計9番。",
                "zh": "本局番种明细：清一色 7＋无花门前清 1＋自摸 1；合计9，计9番。"
              },
              "id": "hk-8-5-b",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "7 faan",
                    "tw": "7番",
                    "zh": "7番"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "9 faan",
                    "tw": "9番",
                    "zh": "9番"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "en": "10 faan",
                    "tw": "10番",
                    "zh": "10番"
                  }
                }
              ],
              "prompt": {
                "en": "Add the target patterns and apply the cap. How many faan?",
                "tw": "本局目標番種逐項相加，封頂後是多少番？",
                "zh": "本局目标番种逐项相加，封顶后是多少番？"
              },
              "type": "choice"
            },
            {
              "explanation": {
                "en": "You followed the target route. Review the steps, faan and payment.",
                "tw": "你已按目標完成牌路。複盤每一步，再核對成立的番種和支付。",
                "zh": "你已按目标完成牌路。复盘每一步，再核对成立的番种和支付。"
              },
              "id": "hk-8-5-c",
              "prompt": {
                "en": "Complete this arranged teaching round.",
                "tw": "在牌桌中完成這局編排教學對局。",
                "zh": "在牌桌中完成这局编排教学对局。"
              },
              "scenarioId": "full-flush",
              "type": "round"
            }
          ],
          "title": {
            "en": "Concealed full flush",
            "tw": "門清清一色",
            "zh": "门清清一色"
          }
        },
        {
          "example": {
            "caption": {
              "en": "Starting concealed tiles for this round; subsequent actions and settlement are interactive.",
              "tw": "這是本局開端的暗手示意；完整對局中會繼續摸打、叫牌與核對積分。",
              "zh": "这是本局开端的暗手示意；完整对局中会继续摸打、叫牌与核对积分。"
            },
            "tiles": [
              "p2",
              "p2",
              "p2",
              "p5",
              "p5",
              "p5",
              "z5",
              "z5",
              "z5",
              "z2",
              "z2",
              "z2",
              "p9"
            ]
          },
          "id": "hk-8-6",
          "intro": {
            "en": "Four triplets and the cap: Keep four triplets and apply the cap: Draw from the wall head on your turn.",
            "tw": "四組刻子與十番封頂：保持四組刻子並計算封頂：輪到你，從牌牆頭摸一張。",
            "zh": "四组刻子与十番封顶：保持四组刻子并计算封顶：轮到你，从牌墙头摸一张。"
          },
          "questions": [
            {
              "answerId": "a",
              "explanation": {
                "en": "All Triplets has no sequences, plus a pair.",
                "tw": "對對胡沒有順子，另有一對將。",
                "zh": "对对胡没有顺子，另有一对将。"
              },
              "id": "hk-8-6-a",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "Triplets or kongs",
                    "tw": "刻子或槓",
                    "zh": "刻子或杠"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "Four sequences",
                    "tw": "四個順子",
                    "zh": "四个顺子"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "en": "Any four sets",
                    "tw": "任意四組",
                    "zh": "任意四组"
                  }
                }
              ],
              "prompt": {
                "en": "What are the four sets in All Triplets?",
                "tw": "對對胡的四組面子應是什麼？",
                "zh": "对对胡的四组面子应是什么？"
              },
              "type": "choice"
            },
            {
              "answerId": "b",
              "explanation": {
                "en": "Breakdown: All Triplets 3 + Half Flush 3 + Red Dragon set 1 + Seat South set 1 + No-flower Concealed Hand 1 + Self-Draw 1; total 10, scored as 10.",
                "tw": "本局番種明細：對對胡 3＋混一色 3＋紅中刻子 1＋門風南刻子 1＋無花門前清 1＋自摸 1；合計10，計10番。",
                "zh": "本局番种明细：对对胡 3＋混一色 3＋红中刻子 1＋门风南刻子 1＋无花门前清 1＋自摸 1；合计10，计10番。"
              },
              "id": "hk-8-6-b",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "8 faan",
                    "tw": "8番",
                    "zh": "8番"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "10 faan",
                    "tw": "10番",
                    "zh": "10番"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "en": "11 faan",
                    "tw": "11番",
                    "zh": "11番"
                  }
                }
              ],
              "prompt": {
                "en": "Add the target patterns and apply the cap. How many faan?",
                "tw": "本局目標番種逐項相加，封頂後是多少番？",
                "zh": "本局目标番种逐项相加，封顶后是多少番？"
              },
              "type": "choice"
            },
            {
              "explanation": {
                "en": "You followed the target route. Review the steps, faan and payment.",
                "tw": "你已按目標完成牌路。複盤每一步，再核對成立的番種和支付。",
                "zh": "你已按目标完成牌路。复盘每一步，再核对成立的番种和支付。"
              },
              "id": "hk-8-6-c",
              "prompt": {
                "en": "Complete this arranged teaching round.",
                "tw": "在牌桌中完成這局編排教學對局。",
                "zh": "在牌桌中完成这局编排教学对局。"
              },
              "scenarioId": "all-triplets",
              "type": "round"
            }
          ],
          "title": {
            "en": "Concealed all triplets",
            "tw": "門清對對胡",
            "zh": "门清对对胡"
          }
        },
        {
          "example": {
            "caption": {
              "en": "Starting concealed tiles for this round; subsequent actions and settlement are interactive.",
              "tw": "這是本局開端的暗手示意；完整對局中會繼續摸打、叫牌與核對積分。",
              "zh": "这是本局开端的暗手示意；完整对局中会继续摸打、叫牌与核对积分。"
            },
            "tiles": [
              "p1",
              "p2",
              "p3",
              "p4",
              "p5",
              "p6",
              "z2",
              "z2",
              "z2",
              "z5",
              "z5",
              "z5",
              "p9"
            ]
          },
          "id": "hk-8-7",
          "intro": {
            "en": "Seat and round winds: Count seat and round wind separately: Draw from the wall head on your turn.",
            "tw": "門風與圈風：門風與圈風同時計分：輪到你，從牌牆頭摸一張。",
            "zh": "门风与圈风：门风与圈风同时计分：轮到你，从牌墙头摸一张。"
          },
          "questions": [
            {
              "answerId": "a",
              "explanation": {
                "en": "Seat and round wind each add one.",
                "tw": "門風、圈風各一番，可重疊。",
                "zh": "门风、圈风各一番，可重叠。"
              },
              "id": "hk-8-7-a",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "Two",
                    "tw": "二番",
                    "zh": "二番"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "One",
                    "tw": "一番",
                    "zh": "一番"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "en": "Zero",
                    "tw": "零番",
                    "zh": "零番"
                  }
                }
              ],
              "prompt": {
                "en": "How many wind faan for South’s South set in South round?",
                "tw": "南家在南圈的一組南風刻子可計幾番風牌？",
                "zh": "南家在南圈的一组南风刻子可计几番风牌？"
              },
              "type": "choice"
            },
            {
              "answerId": "b",
              "explanation": {
                "en": "Breakdown: Half Flush 3 + Seat South set 1 + Round South set 1 + Red Dragon set 1 + No-flower Concealed Hand 1 + Self-Draw 1; total 8, scored as 8.",
                "tw": "本局番種明細：混一色 3＋門風南刻子 1＋圈風南刻子 1＋紅中刻子 1＋無花門前清 1＋自摸 1；合計8，計8番。",
                "zh": "本局番种明细：混一色 3＋门风南刻子 1＋圈风南刻子 1＋红中刻子 1＋无花门前清 1＋自摸 1；合计8，计8番。"
              },
              "id": "hk-8-7-b",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "6 faan",
                    "tw": "6番",
                    "zh": "6番"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "8 faan",
                    "tw": "8番",
                    "zh": "8番"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "en": "9 faan",
                    "tw": "9番",
                    "zh": "9番"
                  }
                }
              ],
              "prompt": {
                "en": "Add the target patterns and apply the cap. How many faan?",
                "tw": "本局目標番種逐項相加，封頂後是多少番？",
                "zh": "本局目标番种逐项相加，封顶后是多少番？"
              },
              "type": "choice"
            },
            {
              "explanation": {
                "en": "You followed the target route. Review the steps, faan and payment.",
                "tw": "你已按目標完成牌路。複盤每一步，再核對成立的番種和支付。",
                "zh": "你已按目标完成牌路。复盘每一步，再核对成立的番种和支付。"
              },
              "id": "hk-8-7-c",
              "prompt": {
                "en": "Complete this arranged teaching round.",
                "tw": "在牌桌中完成這局編排教學對局。",
                "zh": "在牌桌中完成这局编排教学对局。"
              },
              "scenarioId": "double-wind",
              "type": "round"
            }
          ],
          "title": {
            "en": "South seat in South round",
            "tw": "南圈南家雙風",
            "zh": "南圈南家双风"
          }
        },
        {
          "example": {
            "caption": {
              "en": "Starting concealed tiles for this round; subsequent actions and settlement are interactive.",
              "tw": "這是本局開端的暗手示意；完整對局中會繼續摸打、叫牌與核對積分。",
              "zh": "这是本局开端的暗手示意；完整对局中会继续摸打、叫牌与核对积分。"
            },
            "tiles": [
              "p1",
              "p2",
              "p3",
              "p4",
              "p5",
              "p6",
              "z2",
              "z2",
              "z2",
              "z5",
              "z5",
              "z5",
              "p9"
            ]
          },
          "id": "hk-8-8",
          "intro": {
            "en": "Last wall tile and a draw: Check a win on the last wall tile: Draw from the wall head on your turn.",
            "tw": "最後一張牌與流局：觀察最後一張是否能胡：輪到你，從牌牆頭摸一張。",
            "zh": "最后一张牌与流局：观察最后一张是否能胡：轮到你，从牌墙头摸一张。"
          },
          "questions": [
            {
              "answerId": "a",
              "explanation": {
                "en": "A last-tile self-draw can score; the hand draws only after an unclaimed final discard.",
                "tw": "最後一張自摸可計海底撈月；無人胡且隨後棄牌無人取才流局。",
                "zh": "最后一张自摸可计海底捞月；无人胡且随后弃牌无人取才流局。"
              },
              "id": "hk-8-8-a",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "No; first check the self-draw win",
                    "tw": "不；先核對自摸胡牌",
                    "zh": "不；先核对自摸胡牌"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "Yes; the last tile cannot win",
                    "tw": "是；最後一張不能胡",
                    "zh": "是；最后一张不能胡"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "en": "Only inspect opponents",
                    "tw": "只看其他人的牌",
                    "zh": "只看其他人的牌"
                  }
                }
              ],
              "prompt": {
                "en": "The last wall tile completes your hand. Must you discard before considering a draw?",
                "tw": "牆頭最後一張摸來正好胡牌，是否應先打出去再判斷流局？",
                "zh": "墙头最后一张摸来正好胡牌，是否应先打出去再判断流局？"
              },
              "type": "choice"
            },
            {
              "answerId": "b",
              "explanation": {
                "en": "Breakdown: Half Flush 3 + Seat South set 1 + Red Dragon set 1 + No-flower Concealed Hand 1 + Self-Draw 1 + Last-Tile Self-Draw 1; total 8, scored as 8.",
                "tw": "本局番種明細：混一色 3＋門風南刻子 1＋紅中刻子 1＋無花門前清 1＋自摸 1＋海底撈月 1；合計8，計8番。",
                "zh": "本局番种明细：混一色 3＋门风南刻子 1＋红中刻子 1＋无花门前清 1＋自摸 1＋海底捞月 1；合计8，计8番。"
              },
              "id": "hk-8-8-b",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "6 faan",
                    "tw": "6番",
                    "zh": "6番"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "8 faan",
                    "tw": "8番",
                    "zh": "8番"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "en": "9 faan",
                    "tw": "9番",
                    "zh": "9番"
                  }
                }
              ],
              "prompt": {
                "en": "Add the target patterns and apply the cap. How many faan?",
                "tw": "本局目標番種逐項相加，封頂後是多少番？",
                "zh": "本局目标番种逐项相加，封顶后是多少番？"
              },
              "type": "choice"
            },
            {
              "explanation": {
                "en": "You followed the target route. Review the steps, faan and payment.",
                "tw": "你已按目標完成牌路。複盤每一步，再核對成立的番種和支付。",
                "zh": "你已按目标完成牌路。复盘每一步，再核对成立的番种和支付。"
              },
              "id": "hk-8-8-c",
              "prompt": {
                "en": "Complete this arranged teaching round.",
                "tw": "在牌桌中完成這局編排教學對局。",
                "zh": "在牌桌中完成这局编排教学对局。"
              },
              "scenarioId": "last-wall",
              "type": "round"
            }
          ],
          "title": {
            "en": "Last wall tile self-draw",
            "tw": "最後一張自摸",
            "zh": "最后一张自摸"
          }
        },
        {
          "example": {
            "caption": {
              "en": "Starting concealed tiles for this round; subsequent actions and settlement are interactive.",
              "tw": "這是本局開端的暗手示意；完整對局中會繼續摸打、叫牌與核對積分。",
              "zh": "这是本局开端的暗手示意；完整对局中会继续摸打、叫牌与核对积分。"
            },
            "tiles": [
              "m1",
              "m2",
              "m3",
              "p4",
              "p5",
              "p6",
              "z5",
              "z5",
              "z5",
              "z6",
              "z6",
              "z2",
              "z2"
            ]
          },
          "id": "hk-8-9",
          "intro": {
            "en": "Two dragons and the minimum: Meet three faan on an opponent discard: Draw from the wall head on your turn.",
            "tw": "兩組三元與三番門檻：核對三番門檻並胡他家棄牌：輪到你，從牌牆頭摸一張。",
            "zh": "两组三元与三番门槛：核对三番门槛并胡他家弃牌：轮到你，从牌墙头摸一张。"
          },
          "questions": [
            {
              "answerId": "a",
              "explanation": {
                "en": "One plus one plus one reaches the three-faan minimum.",
                "tw": "一加一加一剛好達到三番。",
                "zh": "一加一加一刚好达到三番。"
              },
              "id": "hk-8-9-a",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "Three",
                    "tw": "三番",
                    "zh": "三番"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "Two",
                    "tw": "兩番",
                    "zh": "两番"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "en": "Five",
                    "tw": "五番",
                    "zh": "五番"
                  }
                }
              ],
              "prompt": {
                "en": "Two dragon sets add one each, plus Concealed Hand one. Total?",
                "tw": "這手如果只有兩組三元刻子一番各一，加無花門前清一，共幾番？",
                "zh": "这手如果只有两组三元刻子一番各一，加无花门前清一，共几番？"
              },
              "type": "choice"
            },
            {
              "answerId": "b",
              "explanation": {
                "en": "Breakdown: Red Dragon set 1 + Green Dragon set 1 + No-flower Concealed Hand 1; total 3, scored as 3.",
                "tw": "本局番種明細：紅中刻子 1＋發財刻子 1＋無花門前清 1；合計3，計3番。",
                "zh": "本局番种明细：红中刻子 1＋发财刻子 1＋无花门前清 1；合计3，计3番。"
              },
              "id": "hk-8-9-b",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "1 faan",
                    "tw": "1番",
                    "zh": "1番"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "3 faan",
                    "tw": "3番",
                    "zh": "3番"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "en": "4 faan",
                    "tw": "4番",
                    "zh": "4番"
                  }
                }
              ],
              "prompt": {
                "en": "Add the target patterns and apply the cap. How many faan?",
                "tw": "本局目標番種逐項相加，封頂後是多少番？",
                "zh": "本局目标番种逐项相加，封顶后是多少番？"
              },
              "type": "choice"
            },
            {
              "explanation": {
                "en": "You followed the target route. Review the steps, faan and payment.",
                "tw": "你已按目標完成牌路。複盤每一步，再核對成立的番種和支付。",
                "zh": "你已按目标完成牌路。复盘每一步，再核对成立的番种和支付。"
              },
              "id": "hk-8-9-c",
              "prompt": {
                "en": "Complete this arranged teaching round.",
                "tw": "在牌桌中完成這局編排教學對局。",
                "zh": "在牌桌中完成这局编排教学对局。"
              },
              "scenarioId": "two-dragons-discard",
              "type": "round"
            }
          ],
          "title": {
            "en": "Two dragons on a discard",
            "tw": "雙三元棄牌胡",
            "zh": "双三元弃牌胡"
          }
        },
        {
          "example": {
            "caption": {
              "en": "Starting concealed tiles for this round; subsequent actions and settlement are interactive.",
              "tw": "這是本局開端的暗手示意；完整對局中會繼續摸打、叫牌與核對積分。",
              "zh": "这是本局开端的暗手示意；完整对局中会继续摸打、叫牌与核对积分。"
            },
            "tiles": [
              "m1",
              "m2",
              "m3",
              "m4",
              "m5",
              "m6",
              "p4",
              "p5",
              "p6",
              "s7",
              "s8",
              "s9",
              "z7"
            ]
          },
          "id": "hk-8-10",
          "intro": {
            "en": "Four sequences, concealment, self-draw: Keep four sequences and self-draw to three faan: Draw from the wall head on your turn.",
            "tw": "四順、門清與自摸：保留四順一對並自摸湊足三番：輪到你，從牌牆頭摸一張。",
            "zh": "四顺、门清与自摸：保留四顺一对并自摸凑足三番：轮到你，从牌墙头摸一张。"
          },
          "questions": [
            {
              "answerId": "a",
              "explanation": {
                "en": "Three one-faan parts reach the minimum.",
                "tw": "三個一番疊加才剛好起胡。",
                "zh": "三个一番叠加才刚好起胡。"
              },
              "id": "hk-8-10-a",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "Three",
                    "tw": "三番",
                    "zh": "三番"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "Two",
                    "tw": "兩番",
                    "zh": "两番"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "en": "Four",
                    "tw": "四番",
                    "zh": "四番"
                  }
                }
              ],
              "prompt": {
                "en": "All Sequences, no-flower Concealed Hand and Self-Draw total how much?",
                "tw": "無花門清平胡普通自摸，三個一番項目合計多少？",
                "zh": "无花门清平胡普通自摸，三个一番项目合计多少？"
              },
              "type": "choice"
            },
            {
              "answerId": "b",
              "explanation": {
                "en": "Breakdown: All Sequences 1 + No-flower Concealed Hand 1 + Self-Draw 1; total 3, scored as 3.",
                "tw": "本局番種明細：平胡 1＋無花門前清 1＋自摸 1；合計3，計3番。",
                "zh": "本局番种明细：平胡 1＋无花门前清 1＋自摸 1；合计3，计3番。"
              },
              "id": "hk-8-10-b",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "1 faan",
                    "tw": "1番",
                    "zh": "1番"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "3 faan",
                    "tw": "3番",
                    "zh": "3番"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "en": "4 faan",
                    "tw": "4番",
                    "zh": "4番"
                  }
                }
              ],
              "prompt": {
                "en": "Add the target patterns and apply the cap. How many faan?",
                "tw": "本局目標番種逐項相加，封頂後是多少番？",
                "zh": "本局目标番种逐项相加，封顶后是多少番？"
              },
              "type": "choice"
            },
            {
              "explanation": {
                "en": "You followed the target route. Review the steps, faan and payment.",
                "tw": "你已按目標完成牌路。複盤每一步，再核對成立的番種和支付。",
                "zh": "你已按目标完成牌路。复盘每一步，再核对成立的番种和支付。"
              },
              "id": "hk-8-10-c",
              "prompt": {
                "en": "Complete this arranged teaching round.",
                "tw": "在牌桌中完成這局編排教學對局。",
                "zh": "在牌桌中完成这局编排教学对局。"
              },
              "scenarioId": "all-sequences",
              "type": "round"
            }
          ],
          "title": {
            "en": "Three-faan All Sequences",
            "tw": "平胡三番",
            "zh": "平胡三番"
          }
        },
        {
          "example": {
            "caption": {
              "en": "Starting concealed tiles for this round; subsequent actions and settlement are interactive.",
              "tw": "這是本局開端的暗手示意；完整對局中會繼續摸打、叫牌與核對積分。",
              "zh": "这是本局开端的暗手示意；完整对局中会继续摸打、叫牌与核对积分。"
            },
            "tiles": [
              "p4",
              "p6",
              "p7",
              "p8",
              "p9",
              "p9",
              "p9",
              "p9",
              "p5",
              "p5",
              "p1",
              "p2",
              "z4"
            ]
          },
          "id": "hk-8-11",
          "intro": {
            "en": "Full Flush after a chow: Keep one suit after an exposed chow: The previous player discarded: choose Chow.",
            "tw": "明吃後保持清一色：吃牌後保持一門數牌：上家剛棄牌，選擇吃牌。",
            "zh": "明吃后保持清一色：吃牌后保持一门数牌：上家刚弃牌，选择吃牌。"
          },
          "questions": [
            {
              "answerId": "a",
              "explanation": {
                "en": "The chow removes Concealed Hand but Full Flush may still apply.",
                "tw": "明吃使門前清不成立，清一色仍可能成立。",
                "zh": "明吃使门前清不成立，清一色仍可能成立。"
              },
              "id": "hk-8-11-a",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "No",
                    "tw": "不能",
                    "zh": "不能"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "Yes",
                    "tw": "可以",
                    "zh": "可以"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "en": "Only on self-draw",
                    "tw": "只要自摸便可以",
                    "zh": "只要自摸便可以"
                  }
                }
              ],
              "prompt": {
                "en": "After exposing a dot chow, can you score no-flower Concealed Hand?",
                "tw": "已經明吃一組筒牌，還能計無花門前清嗎？",
                "zh": "已经明吃一组筒牌，还能计无花门前清吗？"
              },
              "type": "choice"
            },
            {
              "answerId": "b",
              "explanation": {
                "en": "Breakdown: Full Flush 7 + Self-Draw 1; total 8, scored as 8.",
                "tw": "本局番種明細：清一色 7＋自摸 1；合計8，計8番。",
                "zh": "本局番种明细：清一色 7＋自摸 1；合计8，计8番。"
              },
              "id": "hk-8-11-b",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "6 faan",
                    "tw": "6番",
                    "zh": "6番"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "8 faan",
                    "tw": "8番",
                    "zh": "8番"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "en": "9 faan",
                    "tw": "9番",
                    "zh": "9番"
                  }
                }
              ],
              "prompt": {
                "en": "Add the target patterns and apply the cap. How many faan?",
                "tw": "本局目標番種逐項相加，封頂後是多少番？",
                "zh": "本局目标番种逐项相加，封顶后是多少番？"
              },
              "type": "choice"
            },
            {
              "explanation": {
                "en": "You followed the target route. Review the steps, faan and payment.",
                "tw": "你已按目標完成牌路。複盤每一步，再核對成立的番種和支付。",
                "zh": "你已按目标完成牌路。复盘每一步，再核对成立的番种和支付。"
              },
              "id": "hk-8-11-c",
              "prompt": {
                "en": "Complete this arranged teaching round.",
                "tw": "在牌桌中完成這局編排教學對局。",
                "zh": "在牌桌中完成这局编排教学对局。"
              },
              "scenarioId": "open-full-flush",
              "type": "round"
            }
          ],
          "title": {
            "en": "Exposed full flush",
            "tw": "明吃清一色",
            "zh": "明吃清一色"
          }
        },
        {
          "example": {
            "caption": {
              "en": "Starting concealed tiles for this round; subsequent actions and settlement are interactive.",
              "tw": "這是本局開端的暗手示意；完整對局中會繼續摸打、叫牌與核對積分。",
              "zh": "这是本局开端的暗手示意；完整对局中会继续摸打、叫牌与核对积分。"
            },
            "tiles": [
              "p2",
              "p2",
              "p2",
              "p5",
              "p5",
              "p5",
              "z2",
              "z2",
              "z2",
              "p9",
              "z5",
              "z5",
              "z4"
            ]
          },
          "id": "hk-8-12",
          "intro": {
            "en": "All Triplets after a pung: Count All Triplets and Half Flush after a pung: An opponent discarded: choose Pung.",
            "tw": "碰牌後疊加對對胡：碰牌後計算對對胡與混一色：對手剛棄牌，選擇碰牌。",
            "zh": "碰牌后叠加对对胡：碰牌后计算对对胡与混一色：对手刚弃牌，选择碰牌。"
          },
          "questions": [
            {
              "answerId": "a",
              "explanation": {
                "en": "All Triplets permits exposed triplets; Concealed Hand does not apply.",
                "tw": "對對胡允許明刻，另核對門前清不能再計。",
                "zh": "对对胡允许明刻，另核对门前清不能再计。"
              },
              "id": "hk-8-12-a",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "Yes",
                    "tw": "可以",
                    "zh": "可以"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "No",
                    "tw": "不可以",
                    "zh": "不可以"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "en": "Only All Sequences",
                    "tw": "只可計平胡",
                    "zh": "只可计平胡"
                  }
                }
              ],
              "prompt": {
                "en": "After an exposed red-dragon pung, can four triplets still count as All Triplets?",
                "tw": "明碰紅中後若四組均為刻子，還能計對對胡嗎？",
                "zh": "明碰红中后若四组均为刻子，还能计对对胡吗？"
              },
              "type": "choice"
            },
            {
              "answerId": "b",
              "explanation": {
                "en": "Breakdown: All Triplets 3 + Half Flush 3 + Red Dragon set 1 + Seat South set 1 + Self-Draw 1; total 9, scored as 9.",
                "tw": "本局番種明細：對對胡 3＋混一色 3＋紅中刻子 1＋門風南刻子 1＋自摸 1；合計9，計9番。",
                "zh": "本局番种明细：对对胡 3＋混一色 3＋红中刻子 1＋门风南刻子 1＋自摸 1；合计9，计9番。"
              },
              "id": "hk-8-12-b",
              "options": [
                {
                  "id": "a",
                  "label": {
                    "en": "7 faan",
                    "tw": "7番",
                    "zh": "7番"
                  }
                },
                {
                  "id": "b",
                  "label": {
                    "en": "9 faan",
                    "tw": "9番",
                    "zh": "9番"
                  }
                },
                {
                  "id": "c",
                  "label": {
                    "en": "10 faan",
                    "tw": "10番",
                    "zh": "10番"
                  }
                }
              ],
              "prompt": {
                "en": "Add the target patterns and apply the cap. How many faan?",
                "tw": "本局目標番種逐項相加，封頂後是多少番？",
                "zh": "本局目标番种逐项相加，封顶后是多少番？"
              },
              "type": "choice"
            },
            {
              "explanation": {
                "en": "You followed the target route. Review the steps, faan and payment.",
                "tw": "你已按目標完成牌路。複盤每一步，再核對成立的番種和支付。",
                "zh": "你已按目标完成牌路。复盘每一步，再核对成立的番种和支付。"
              },
              "id": "hk-8-12-c",
              "prompt": {
                "en": "Complete this arranged teaching round.",
                "tw": "在牌桌中完成這局編排教學對局。",
                "zh": "在牌桌中完成这局编排教学对局。"
              },
              "scenarioId": "open-triplets",
              "type": "round"
            }
          ],
          "title": {
            "en": "Exposed all triplets",
            "tw": "明碰對對胡",
            "zh": "明碰对对胡"
          }
        }
      ],
      "summary": {
        "en": "Three arranged hands, from full hints toward independent play.",
        "tw": "三種編排對局，從完整提示走向獨立操作。",
        "zh": "三种编排对局，从完整提示走向独立操作。"
      },
      "title": {
        "en": "Play your first teaching hands",
        "tw": "完成第一局與綜合練習",
        "zh": "完成第一局与综合练习"
      }
    }
  ],
  "id": "hk-expanded-v3",
  "profile": {
    "checkedAt": "2026-11-06",
    "document": "https://docs.google.com/document/d/1TgdYpE_5Qiht_lBco3BqN_ijZJDRWugwzRzv946raq0/edit",
    "flowers": false,
    "id": "hkma-no-flower-learning",
    "maxFan": 10,
    "minFan": 3,
    "source": "https://www.hkmahjong.org/rules"
  },
  "version": 3
};
g.MahjongCourseData=data;
if(typeof module!=="undefined"&&module.exports)module.exports=data;
})(globalThis);
