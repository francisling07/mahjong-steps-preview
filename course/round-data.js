(function(g){
const data=[
  {
    "final": {
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
            "en": "Red dragon set",
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
            "en": "Ordinary Self-Draw",
            "tw": "普通自摸",
            "zh": "普通自摸"
          }
        }
      ],
      "fan": 6,
      "scene": {
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
          "p9",
          "p9"
        ],
        "melds": [
          {
            "from": "east",
            "tiles": [
              "z5",
              "z5",
              "z5"
            ],
            "type": "pung"
          }
        ],
        "pending": null,
        "phase": "finished",
        "rivers": {
          "east": [
            "s9"
          ],
          "north": [
            "m8"
          ],
          "south": [
            "z4"
          ],
          "west": [
            "m9"
          ]
        },
        "roundWind": "east",
        "seat": "south",
        "wallRemaining": 79
      },
      "winMode": "selfDraw"
    },
    "guided": true,
    "id": "pung",
    "steps": [
      {
        "expected": {
          "type": "deal"
        },
        "explanation": {
          "en": "The deal is complete. East discarded first; consider a claim.",
          "tw": "配牌完成。東家先出牌，現在輪到你判斷是否叫牌。",
          "zh": "配牌完成。东家先出牌，现在轮到你判断是否叫牌。"
        },
        "hint": {
          "en": "You are South and receive thirteen tiles. East discards first. Opponents’ turns are summarised in this teaching hand.",
          "tw": "你坐南家。配牌後你有13張，東家先打出一張；對手回合在此教學局中簡略展示。",
          "zh": "你坐南家。配牌后你有13张，东家先打出一张；对手回合在此教学局中简略展示。"
        },
        "prompt": {
          "en": "Deal the tiles and observe East’s first discard.",
          "tw": "準備開局：完成配牌，觀察東家首張棄牌。",
          "zh": "准备开局：完成配牌，观察东家首张弃牌。"
        },
        "scene": {
          "hand": [],
          "melds": [],
          "pending": null,
          "phase": "deal",
          "rivers": {
            "east": [],
            "north": [],
            "south": [],
            "west": []
          },
          "roundWind": "east",
          "seat": "south",
          "wallRemaining": 136
        }
      },
      {
        "expected": {
          "tile": "z5",
          "type": "pung"
        },
        "explanation": {
          "en": "The exposed set is fixed. Do not take a normal draw; discard next.",
          "tw": "組合已公開固定。不再摸普通牌，接下來直接出一張。",
          "zh": "组合已公开固定。不再摸普通牌，接下来直接出一张。"
        },
        "hint": {
          "en": "A chow only takes the previous player’s discard; a pung or exposed kong can take another opponent’s. This source and shape qualify.",
          "tw": "吃牌只取上家，碰和大明槓可取其他對手。此處來源與牌型均滿足。",
          "zh": "吃牌只取上家，碰和大明杠可取其他对手。此处来源与牌型均满足。"
        },
        "prompt": {
          "en": "Follow this hand’s target: use your matching red dragons for a pung.",
          "tw": "本局目標：用手中相同的紅中碰牌。",
          "zh": "本局目标：用手中相同的红中碰牌。"
        },
        "scene": {
          "hand": [
            "p1",
            "p2",
            "p3",
            "p4",
            "p5",
            "p6",
            "z5",
            "z5",
            "z2",
            "z2",
            "z2",
            "z4",
            "p9"
          ],
          "melds": [],
          "pending": {
            "seat": "east",
            "tile": "z5"
          },
          "phase": "claim",
          "rivers": {
            "east": [
              "z5"
            ],
            "north": [],
            "south": [],
            "west": []
          },
          "roundWind": "east",
          "seat": "south",
          "wallRemaining": 83
        }
      },
      {
        "expected": {
          "tile": "z4",
          "type": "discard"
        },
        "explanation": {
          "en": "North enters your river. The other three players take their turns before you draw.",
          "tw": "北風進入牌河；其餘三家完成各自摸打，再輪到你。",
          "zh": "北风进入牌河；其余三家完成各自摸打，再轮到你。"
        },
        "hint": {
          "en": "This is a route chosen for teaching. Other legal discards are not necessarily strategic mistakes.",
          "tw": "這是按指定學習目標示範的路線；其他合法出牌並不一定是策略錯誤。",
          "zh": "这是按指定学习目标演示的路线；其他合法出牌并不一定是策略错误。"
        },
        "prompt": {
          "en": "For this teaching route, keep the connected groups and target pair: discard North.",
          "tw": "本局先保留現有組合和目標將牌，請打出北風。",
          "zh": "本局先保留现有组合和目标将牌，请打出北风。"
        },
        "scene": {
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
            "z4",
            "p9"
          ],
          "melds": [
            {
              "from": "east",
              "tiles": [
                "z5",
                "z5",
                "z5"
              ],
              "type": "pung"
            }
          ],
          "pending": null,
          "phase": "discard",
          "rivers": {
            "east": [],
            "north": [],
            "south": [],
            "west": []
          },
          "roundWind": "east",
          "seat": "south",
          "wallRemaining": 83
        }
      },
      {
        "expected": {
          "type": "draw"
        },
        "explanation": {
          "en": "You draw nine dots. Check the complete shape and faan.",
          "tw": "你摸到九筒，現在檢查完整牌型與番數。",
          "zh": "你摸到九筒，现在检查完整牌型与番数。"
        },
        "hint": {
          "en": "This is a new normal turn, not the immediate turn after a chow or pung, so take a draw.",
          "tw": "這是新一輪正常回合，不是剛吃碰之後，因此要先摸一張。",
          "zh": "这是新一轮正常回合，不是刚吃碰之后，因此要先摸一张。"
        },
        "prompt": {
          "en": "It is your normal turn again. Draw first.",
          "tw": "回到你的正常回合，先完成摸牌。",
          "zh": "回到你的正常回合，先完成摸牌。"
        },
        "scene": {
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
            "p9"
          ],
          "melds": [
            {
              "from": "east",
              "tiles": [
                "z5",
                "z5",
                "z5"
              ],
              "type": "pung"
            }
          ],
          "pending": null,
          "phase": "draw",
          "rivers": {
            "east": [
              "s9"
            ],
            "north": [
              "m8"
            ],
            "south": [
              "z4"
            ],
            "west": [
              "m9"
            ]
          },
          "roundWind": "east",
          "seat": "south",
          "wallRemaining": 80
        }
      },
      {
        "expected": {
          "type": "win"
        },
        "explanation": {
          "en": "The win qualifies. Keep the tiles in place and check each opponent’s payment and the total.",
          "tw": "胡牌成立。保留牌面，核對普通自摸的三家支付與總積分。",
          "zh": "胡牌成立。保留牌面，核对普通自摸的三家支付与总积分。"
        },
        "hint": {
          "en": "Here: Half Flush 3, dragon set 1, seat South set 1, Self-Draw 1.",
          "tw": "本例混一色3番，三元刻子1番，門風南刻子1番，自摸1番。",
          "zh": "本例混一色3番，三元刻子1番，门风南刻子1番，自摸1番。"
        },
        "prompt": {
          "en": "Confirm four sets and a pair with enough faan, then declare an ordinary self-draw win.",
          "tw": "核對四組加一對及足夠番數，聲明普通自摸胡牌。",
          "zh": "核对四组加一对及足够番数，声明普通自摸胡牌。"
        },
        "scene": {
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
            "p9",
            "p9"
          ],
          "melds": [
            {
              "from": "east",
              "tiles": [
                "z5",
                "z5",
                "z5"
              ],
              "type": "pung"
            }
          ],
          "pending": null,
          "phase": "win",
          "rivers": {
            "east": [
              "s9"
            ],
            "north": [
              "m8"
            ],
            "south": [
              "z4"
            ],
            "west": [
              "m9"
            ]
          },
          "roundWind": "east",
          "seat": "south",
          "wallRemaining": 79
        }
      }
    ],
    "title": {
      "en": "Pung route",
      "tw": "碰牌路線",
      "zh": "碰牌路线"
    }
  },
  {
    "final": {
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
            "en": "Green dragon set",
            "tw": "發財刻子",
            "zh": "发财刻子"
          }
        },
        {
          "fan": 1,
          "title": {
            "en": "Ordinary Self-Draw",
            "tw": "普通自摸",
            "zh": "普通自摸"
          }
        }
      ],
      "fan": 5,
      "scene": {
        "hand": [
          "p1",
          "p2",
          "p3",
          "p7",
          "p8",
          "p9",
          "z6",
          "z6",
          "z3",
          "z3",
          "z6"
        ],
        "melds": [
          {
            "from": "east",
            "tiles": [
              "p4",
              "p6",
              "p5"
            ],
            "type": "chow"
          }
        ],
        "pending": null,
        "phase": "finished",
        "rivers": {
          "east": [
            "s9"
          ],
          "north": [
            "m8"
          ],
          "south": [
            "z4"
          ],
          "west": [
            "m9"
          ]
        },
        "roundWind": "east",
        "seat": "south",
        "wallRemaining": 79
      },
      "winMode": "selfDraw"
    },
    "guided": false,
    "id": "chow",
    "steps": [
      {
        "expected": {
          "type": "deal"
        },
        "explanation": {
          "en": "The deal is complete. East discarded first; consider a claim.",
          "tw": "配牌完成。東家先出牌，現在輪到你判斷是否叫牌。",
          "zh": "配牌完成。东家先出牌，现在轮到你判断是否叫牌。"
        },
        "hint": {
          "en": "You are South and receive thirteen tiles. East discards first. Opponents’ turns are summarised in this teaching hand.",
          "tw": "你坐南家。配牌後你有13張，東家先打出一張；對手回合在此教學局中簡略展示。",
          "zh": "你坐南家。配牌后你有13张，东家先打出一张；对手回合在此教学局中简略展示。"
        },
        "prompt": {
          "en": "Deal the tiles and observe East’s first discard.",
          "tw": "準備開局：完成配牌，觀察東家首張棄牌。",
          "zh": "准备开局：完成配牌，观察东家首张弃牌。"
        },
        "scene": {
          "hand": [],
          "melds": [],
          "pending": null,
          "phase": "deal",
          "rivers": {
            "east": [],
            "north": [],
            "south": [],
            "west": []
          },
          "roundWind": "east",
          "seat": "south",
          "wallRemaining": 136
        }
      },
      {
        "expected": {
          "tile": "p5",
          "type": "chow"
        },
        "explanation": {
          "en": "The exposed set is fixed. Do not take a normal draw; discard next.",
          "tw": "組合已公開固定。不再摸普通牌，接下來直接出一張。",
          "zh": "组合已公开固定。不再摸普通牌，接下来直接出一张。"
        },
        "hint": {
          "en": "A chow only takes the previous player’s discard; a pung or exposed kong can take another opponent’s. This source and shape qualify.",
          "tw": "吃牌只取上家，碰和大明槓可取其他對手。此處來源與牌型均滿足。",
          "zh": "吃牌只取上家，碰和大明杠可取其他对手。此处来源与牌型均满足。"
        },
        "prompt": {
          "en": "Follow this hand’s target: use four and six dots to chow East’s five dots.",
          "tw": "本局目標：用手中兩張筒牌吃牌。",
          "zh": "本局目标：用手中两张筒牌吃牌。"
        },
        "scene": {
          "hand": [
            "p1",
            "p2",
            "p3",
            "p4",
            "p6",
            "p7",
            "p8",
            "p9",
            "z6",
            "z6",
            "z3",
            "z3",
            "z4"
          ],
          "melds": [],
          "pending": {
            "seat": "east",
            "tile": "p5"
          },
          "phase": "claim",
          "rivers": {
            "east": [
              "p5"
            ],
            "north": [],
            "south": [],
            "west": []
          },
          "roundWind": "east",
          "seat": "south",
          "wallRemaining": 83
        }
      },
      {
        "expected": {
          "tile": "z4",
          "type": "discard"
        },
        "explanation": {
          "en": "North enters your river. The other three players take their turns before you draw.",
          "tw": "北風進入牌河；其餘三家完成各自摸打，再輪到你。",
          "zh": "北风进入牌河；其余三家完成各自摸打，再轮到你。"
        },
        "hint": {
          "en": "This is a route chosen for teaching. Other legal discards are not necessarily strategic mistakes.",
          "tw": "這是按指定學習目標示範的路線；其他合法出牌並不一定是策略錯誤。",
          "zh": "这是按指定学习目标演示的路线；其他合法出牌并不一定是策略错误。"
        },
        "prompt": {
          "en": "For this teaching route, keep the connected groups and target pair: discard North.",
          "tw": "本局先保留現有組合和目標將牌，請打出北風。",
          "zh": "本局先保留现有组合和目标将牌，请打出北风。"
        },
        "scene": {
          "hand": [
            "p1",
            "p2",
            "p3",
            "p7",
            "p8",
            "p9",
            "z6",
            "z6",
            "z3",
            "z3",
            "z4"
          ],
          "melds": [
            {
              "from": "east",
              "tiles": [
                "p4",
                "p6",
                "p5"
              ],
              "type": "chow"
            }
          ],
          "pending": null,
          "phase": "discard",
          "rivers": {
            "east": [],
            "north": [],
            "south": [],
            "west": []
          },
          "roundWind": "east",
          "seat": "south",
          "wallRemaining": 83
        }
      },
      {
        "expected": {
          "type": "draw"
        },
        "explanation": {
          "en": "You draw the green dragon. Check the complete shape and faan.",
          "tw": "你摸到發財，現在檢查完整牌型與番數。",
          "zh": "你摸到发财，现在检查完整牌型与番数。"
        },
        "hint": {
          "en": "This is a new normal turn, not the immediate turn after a chow or pung, so take a draw.",
          "tw": "這是新一輪正常回合，不是剛吃碰之後，因此要先摸一張。",
          "zh": "这是新一轮正常回合，不是刚吃碰之后，因此要先摸一张。"
        },
        "prompt": {
          "en": "It is your normal turn again. Draw first.",
          "tw": "回到你的正常回合，先完成摸牌。",
          "zh": "回到你的正常回合，先完成摸牌。"
        },
        "scene": {
          "hand": [
            "p1",
            "p2",
            "p3",
            "p7",
            "p8",
            "p9",
            "z6",
            "z6",
            "z3",
            "z3"
          ],
          "melds": [
            {
              "from": "east",
              "tiles": [
                "p4",
                "p6",
                "p5"
              ],
              "type": "chow"
            }
          ],
          "pending": null,
          "phase": "draw",
          "rivers": {
            "east": [
              "s9"
            ],
            "north": [
              "m8"
            ],
            "south": [
              "z4"
            ],
            "west": [
              "m9"
            ]
          },
          "roundWind": "east",
          "seat": "south",
          "wallRemaining": 80
        }
      },
      {
        "expected": {
          "type": "win"
        },
        "explanation": {
          "en": "The win qualifies. Keep the tiles in place and check each opponent’s payment and the total.",
          "tw": "胡牌成立。保留牌面，核對普通自摸的三家支付與總積分。",
          "zh": "胡牌成立。保留牌面，核对普通自摸的三家支付与总积分。"
        },
        "hint": {
          "en": "Here: Half Flush 3, dragon set 1, Self-Draw 1.",
          "tw": "本例混一色3番，三元刻子1番，自摸1番。",
          "zh": "本例混一色3番，三元刻子1番，自摸1番。"
        },
        "prompt": {
          "en": "Confirm four sets and a pair with enough faan, then declare an ordinary self-draw win.",
          "tw": "核對四組加一對及足夠番數，聲明普通自摸胡牌。",
          "zh": "核对四组加一对及足够番数，声明普通自摸胡牌。"
        },
        "scene": {
          "hand": [
            "p1",
            "p2",
            "p3",
            "p7",
            "p8",
            "p9",
            "z6",
            "z6",
            "z3",
            "z3",
            "z6"
          ],
          "melds": [
            {
              "from": "east",
              "tiles": [
                "p4",
                "p6",
                "p5"
              ],
              "type": "chow"
            }
          ],
          "pending": null,
          "phase": "win",
          "rivers": {
            "east": [
              "s9"
            ],
            "north": [
              "m8"
            ],
            "south": [
              "z4"
            ],
            "west": [
              "m9"
            ]
          },
          "roundWind": "east",
          "seat": "south",
          "wallRemaining": 79
        }
      }
    ],
    "title": {
      "en": "Chow route",
      "tw": "吃牌路線",
      "zh": "吃牌路线"
    }
  },
  {
    "final": {
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
            "en": "Red dragon set",
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
            "en": "Ordinary Self-Draw",
            "tw": "普通自摸",
            "zh": "普通自摸"
          }
        }
      ],
      "fan": 6,
      "scene": {
        "hand": [
          "p1",
          "p2",
          "p3",
          "p4",
          "p5",
          "p6",
          "z2",
          "z2",
          "p9",
          "z2",
          "p9"
        ],
        "melds": [
          {
            "from": "east",
            "tiles": [
              "z5",
              "z5",
              "z5",
              "z5"
            ],
            "type": "kong"
          }
        ],
        "pending": null,
        "phase": "finished",
        "rivers": {
          "east": [
            "s9"
          ],
          "north": [
            "m8"
          ],
          "south": [
            "z4"
          ],
          "west": [
            "m9"
          ]
        },
        "roundWind": "east",
        "seat": "south",
        "wallRemaining": 78
      },
      "winMode": "selfDraw"
    },
    "guided": false,
    "id": "kong",
    "steps": [
      {
        "expected": {
          "type": "deal"
        },
        "explanation": {
          "en": "The deal is complete. East discarded first; consider a claim.",
          "tw": "配牌完成。東家先出牌，現在輪到你判斷是否叫牌。",
          "zh": "配牌完成。东家先出牌，现在轮到你判断是否叫牌。"
        },
        "hint": {
          "en": "You are South and receive thirteen tiles. East discards first. Opponents’ turns are summarised in this teaching hand.",
          "tw": "你坐南家。配牌後你有13張，東家先打出一張；對手回合在此教學局中簡略展示。",
          "zh": "你坐南家。配牌后你有13张，东家先打出一张；对手回合在此教学局中简略展示。"
        },
        "prompt": {
          "en": "Deal the tiles and observe East’s first discard.",
          "tw": "準備開局：完成配牌，觀察東家首張棄牌。",
          "zh": "准备开局：完成配牌，观察东家首张弃牌。"
        },
        "scene": {
          "hand": [],
          "melds": [],
          "pending": null,
          "phase": "deal",
          "rivers": {
            "east": [],
            "north": [],
            "south": [],
            "west": []
          },
          "roundWind": "east",
          "seat": "south",
          "wallRemaining": 136
        }
      },
      {
        "expected": {
          "tile": "z5",
          "type": "kong"
        },
        "explanation": {
          "en": "The exposed set is fixed. Take the replacement from the tail next.",
          "tw": "組合已公開固定。先從牌尾補牌，不能直接普通出牌。",
          "zh": "组合已公开固定。先从牌尾补牌，不能直接普通出牌。"
        },
        "hint": {
          "en": "A chow only takes the previous player’s discard; a pung or exposed kong can take another opponent’s. This source and shape qualify.",
          "tw": "吃牌只取上家，碰和大明槓可取其他對手。此處來源與牌型均滿足。",
          "zh": "吃牌只取上家，碰和大明杠可取其他对手。此处来源与牌型均满足。"
        },
        "prompt": {
          "en": "Follow this hand’s target: use your matching red dragons for an exposed kong.",
          "tw": "本局目標：用手中相同的紅中開大明槓。",
          "zh": "本局目标：用手中相同的红中开大明杠。"
        },
        "scene": {
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
            "z4",
            "p9"
          ],
          "melds": [],
          "pending": {
            "seat": "east",
            "tile": "z5"
          },
          "phase": "claim",
          "rivers": {
            "east": [
              "z5"
            ],
            "north": [],
            "south": [],
            "west": []
          },
          "roundWind": "east",
          "seat": "south",
          "wallRemaining": 83
        }
      },
      {
        "expected": {
          "type": "replace"
        },
        "explanation": {
          "en": "The replacement is South, completing a triplet. Now finish the turn with a discard.",
          "tw": "補到一張南風。現在南風成刻子，接著完成本回合出牌。",
          "zh": "补到一张南风。现在南风成刻子，接着完成本回合出牌。"
        },
        "hint": {
          "en": "A kong uses an extra physical tile. Replace it from the tail, not from the discards.",
          "tw": "槓多用一張實體牌，需要從牌尾補回；不是從棄牌區補。",
          "zh": "杠多用一张实体牌，需要从牌尾补回；不是从弃牌区补。"
        },
        "prompt": {
          "en": "Confirm the four red dragons, then take the kong replacement.",
          "tw": "確認四張紅中後，完成槓後補牌。",
          "zh": "确认四张红中后，完成杠后补牌。"
        },
        "scene": {
          "hand": [
            "p1",
            "p2",
            "p3",
            "p4",
            "p5",
            "p6",
            "z2",
            "z2",
            "z4",
            "p9"
          ],
          "melds": [
            {
              "from": "east",
              "tiles": [
                "z5",
                "z5",
                "z5",
                "z5"
              ],
              "type": "kong"
            }
          ],
          "pending": null,
          "phase": "replacement",
          "rivers": {
            "east": [],
            "north": [],
            "south": [],
            "west": []
          },
          "roundWind": "east",
          "seat": "south",
          "wallRemaining": 83
        }
      },
      {
        "expected": {
          "tile": "z4",
          "type": "discard"
        },
        "explanation": {
          "en": "North enters your river. The other three players take their turns before you draw.",
          "tw": "北風進入牌河；其餘三家完成各自摸打，再輪到你。",
          "zh": "北风进入牌河；其余三家完成各自摸打，再轮到你。"
        },
        "hint": {
          "en": "This is a route chosen for teaching. Other legal discards are not necessarily strategic mistakes.",
          "tw": "這是按指定學習目標示範的路線；其他合法出牌並不一定是策略錯誤。",
          "zh": "这是按指定学习目标演示的路线；其他合法出牌并不一定是策略错误。"
        },
        "prompt": {
          "en": "For this teaching route, keep the connected groups and target pair: discard North.",
          "tw": "本局先保留現有組合和目標將牌，請打出北風。",
          "zh": "本局先保留现有组合和目标将牌，请打出北风。"
        },
        "scene": {
          "hand": [
            "p1",
            "p2",
            "p3",
            "p4",
            "p5",
            "p6",
            "z2",
            "z2",
            "z4",
            "p9",
            "z2"
          ],
          "melds": [
            {
              "from": "east",
              "tiles": [
                "z5",
                "z5",
                "z5",
                "z5"
              ],
              "type": "kong"
            }
          ],
          "pending": null,
          "phase": "discard",
          "rivers": {
            "east": [],
            "north": [],
            "south": [],
            "west": []
          },
          "roundWind": "east",
          "seat": "south",
          "wallRemaining": 82
        }
      },
      {
        "expected": {
          "type": "draw"
        },
        "explanation": {
          "en": "You draw nine dots. Check the complete shape and faan.",
          "tw": "你摸到九筒，現在檢查完整牌型與番數。",
          "zh": "你摸到九筒，现在检查完整牌型与番数。"
        },
        "hint": {
          "en": "This is a new normal turn, not the immediate turn after a chow or pung, so take a draw.",
          "tw": "這是新一輪正常回合，不是剛吃碰之後，因此要先摸一張。",
          "zh": "这是新一轮正常回合，不是刚吃碰之后，因此要先摸一张。"
        },
        "prompt": {
          "en": "It is your normal turn again. Draw first.",
          "tw": "回到你的正常回合，先完成摸牌。",
          "zh": "回到你的正常回合，先完成摸牌。"
        },
        "scene": {
          "hand": [
            "p1",
            "p2",
            "p3",
            "p4",
            "p5",
            "p6",
            "z2",
            "z2",
            "p9",
            "z2"
          ],
          "melds": [
            {
              "from": "east",
              "tiles": [
                "z5",
                "z5",
                "z5",
                "z5"
              ],
              "type": "kong"
            }
          ],
          "pending": null,
          "phase": "draw",
          "rivers": {
            "east": [
              "s9"
            ],
            "north": [
              "m8"
            ],
            "south": [
              "z4"
            ],
            "west": [
              "m9"
            ]
          },
          "roundWind": "east",
          "seat": "south",
          "wallRemaining": 79
        }
      },
      {
        "expected": {
          "type": "win"
        },
        "explanation": {
          "en": "The win qualifies. Keep the tiles in place and check each opponent’s payment and the total.",
          "tw": "胡牌成立。保留牌面，核對普通自摸的三家支付與總積分。",
          "zh": "胡牌成立。保留牌面，核对普通自摸的三家支付与总积分。"
        },
        "hint": {
          "en": "Here: Half Flush 3, dragon set 1, seat South set 1, Self-Draw 1.",
          "tw": "本例混一色3番，三元刻子1番，門風南刻子1番，自摸1番。",
          "zh": "本例混一色3番，三元刻子1番，门风南刻子1番，自摸1番。"
        },
        "prompt": {
          "en": "Confirm four sets and a pair with enough faan, then declare an ordinary self-draw win.",
          "tw": "核對四組加一對及足夠番數，聲明普通自摸胡牌。",
          "zh": "核对四组加一对及足够番数，声明普通自摸胡牌。"
        },
        "scene": {
          "hand": [
            "p1",
            "p2",
            "p3",
            "p4",
            "p5",
            "p6",
            "z2",
            "z2",
            "p9",
            "z2",
            "p9"
          ],
          "melds": [
            {
              "from": "east",
              "tiles": [
                "z5",
                "z5",
                "z5",
                "z5"
              ],
              "type": "kong"
            }
          ],
          "pending": null,
          "phase": "win",
          "rivers": {
            "east": [
              "s9"
            ],
            "north": [
              "m8"
            ],
            "south": [
              "z4"
            ],
            "west": [
              "m9"
            ]
          },
          "roundWind": "east",
          "seat": "south",
          "wallRemaining": 78
        }
      }
    ],
    "title": {
      "en": "Kong and replacement route",
      "tw": "槓與補牌路線",
      "zh": "杠与补牌路线"
    }
  },
  {
    "final": {
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
            "en": "Win on Kong Replacement",
            "tw": "槓上自摸",
            "zh": "杠上自摸"
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
      "fan": 7,
      "scene": {
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
          "p9",
          "p9"
        ],
        "melds": [
          {
            "tiles": [
              "z5",
              "z5",
              "z5",
              "z5"
            ],
            "type": "kong"
          }
        ],
        "pending": null,
        "phase": "finished",
        "rivers": {
          "east": [],
          "north": [],
          "south": [],
          "west": []
        },
        "roundWind": "east",
        "seat": "south",
        "wallRemaining": 82
      },
      "winMode": "selfDraw"
    },
    "guided": false,
    "id": "kong-replacement",
    "steps": [
      {
        "expected": {
          "type": "deal"
        },
        "explanation": {
          "en": "South receives 13 tiles; other turns are condensed.",
          "tw": "南家配牌十三張；本局其他玩家的回合會簡要帶過。",
          "zh": "南家配牌十三张；本局其他玩家的回合会简要带过。"
        },
        "hint": {
          "en": "Count the tiles and identify useful groups.",
          "tw": "先數牌，再按本局目標整理組合。",
          "zh": "先数牌，再按本局目标整理组合。"
        },
        "prompt": {
          "en": "Win directly on kong replacement: Deal and inspect your concealed tiles.",
          "tw": "槓後補牌立即胡牌：配牌，先看暗手與本局目標。",
          "zh": "杠后补牌立即胡牌：配牌，先看暗手与本局目标。"
        },
        "scene": {
          "hand": [],
          "melds": [],
          "pending": null,
          "phase": "deal",
          "rivers": {
            "east": [],
            "north": [],
            "south": [],
            "west": []
          },
          "roundWind": "east",
          "seat": "south",
          "wallRemaining": 136
        }
      },
      {
        "expected": {
          "tile": "z5",
          "type": "kong"
        },
        "explanation": {
          "en": "Three concealed copies join the discard; expose all four before replacement.",
          "tw": "手中三張配棄牌成槓，先亮四張，再從牌尾補牌。",
          "zh": "手中三张配弃牌成杠，先亮四张，再从牌尾补牌。"
        },
        "hint": {
          "en": "Confirm you have three matching concealed tiles.",
          "tw": "確認手中三張完全相同，且棄牌為第四張。",
          "zh": "确认手中三张完全相同，且弃牌为第四张。"
        },
        "prompt": {
          "en": "Win directly on kong replacement: An opponent discarded: choose Exposed Kong.",
          "tw": "槓後補牌立即胡牌：對手剛棄牌，選擇大明槓。",
          "zh": "杠后补牌立即胡牌：对手刚弃牌，选择大明杠。"
        },
        "scene": {
          "hand": [
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
          ],
          "melds": [],
          "pending": {
            "seat": "east",
            "tile": "z5"
          },
          "phase": "claim",
          "rivers": {
            "east": [
              "z5"
            ],
            "north": [],
            "south": [],
            "west": []
          },
          "roundWind": "east",
          "seat": "south",
          "wallRemaining": 83
        }
      },
      {
        "expected": {
          "type": "replace"
        },
        "explanation": {
          "en": "Replacement restores the structural count; an immediate win can add Kong Replacement.",
          "tw": "補牌恢複結構張數；如果補牌立即成胡，才可計槓上自摸。",
          "zh": "补牌恢复结构张数；如果补牌立即成胡，才可计杠上自摸。"
        },
        "hint": {
          "en": "Draw from the wall tail before any discard.",
          "tw": "從牌尾補牌，不能先打後補。",
          "zh": "从牌尾补牌，不能先打后补。"
        },
        "prompt": {
          "en": "Win directly on kong replacement: The kong is confirmed: draw a tail replacement.",
          "tw": "槓後補牌立即胡牌：槓已確認，從牌尾補一張。",
          "zh": "杠后补牌立即胡牌：杠已确认，从牌尾补一张。"
        },
        "scene": {
          "hand": [
            "p1",
            "p2",
            "p3",
            "p4",
            "p5",
            "p6",
            "z2",
            "z2",
            "p9",
            "p9"
          ],
          "melds": [
            {
              "tiles": [
                "z5",
                "z5",
                "z5",
                "z5"
              ],
              "type": "kong"
            }
          ],
          "pending": null,
          "phase": "replacement",
          "rivers": {
            "east": [],
            "north": [],
            "south": [],
            "west": []
          },
          "roundWind": "east",
          "seat": "south",
          "wallRemaining": 83
        }
      },
      {
        "expected": {
          "type": "win"
        },
        "explanation": {
          "en": "Show the winning shape and faan; confirm points before shuffling.",
          "tw": "胡牌後展示牌形和番數，確認積分後再洗牌。",
          "zh": "胡牌后展示牌形和番数，确认积分后再洗牌。"
        },
        "hint": {
          "en": "Check four sets and a pair, or a listed special shape, and at least three faan.",
          "tw": "四組一對或列明的特殊形，還須達到三番。",
          "zh": "四组一对或列明的特殊形，还须达到三番。"
        },
        "prompt": {
          "en": "Win directly on kong replacement: Check the complete hand and faan, then declare a win.",
          "tw": "槓後補牌立即胡牌：核對完整牌形與番數，再宣佈胡牌。",
          "zh": "杠后补牌立即胡牌：核对完整牌形与番数，再宣布胡牌。"
        },
        "scene": {
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
            "p9",
            "p9"
          ],
          "melds": [
            {
              "tiles": [
                "z5",
                "z5",
                "z5",
                "z5"
              ],
              "type": "kong"
            }
          ],
          "pending": null,
          "phase": "win",
          "rivers": {
            "east": [],
            "north": [],
            "south": [],
            "west": []
          },
          "roundWind": "east",
          "seat": "south",
          "wallRemaining": 82
        }
      }
    ],
    "title": {
      "en": "Win on a kong replacement",
      "tw": "槓上自摸",
      "zh": "杠上自摸"
    }
  },
  {
    "final": {
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
            "en": "No-flower Concealed Hand",
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
      "fan": 9,
      "scene": {
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
        "melds": [],
        "pending": null,
        "phase": "finished",
        "rivers": {
          "east": [
            "s9",
            "m9"
          ],
          "north": [
            "s8"
          ],
          "south": [
            "z4"
          ],
          "west": [
            "m8"
          ]
        },
        "roundWind": "east",
        "seat": "south",
        "wallRemaining": 78
      },
      "winMode": "selfDraw"
    },
    "guided": false,
    "id": "full-flush",
    "steps": [
      {
        "expected": {
          "type": "deal"
        },
        "explanation": {
          "en": "South receives 13 tiles; other turns are condensed.",
          "tw": "南家配牌十三張；本局其他玩家的回合會簡要帶過。",
          "zh": "南家配牌十三张；本局其他玩家的回合会简要带过。"
        },
        "hint": {
          "en": "Count the tiles and identify useful groups.",
          "tw": "先數牌，再按本局目標整理組合。",
          "zh": "先数牌，再按本局目标整理组合。"
        },
        "prompt": {
          "en": "Complete a full flush by self-draw: Deal and inspect your concealed tiles.",
          "tw": "一門數牌自摸成清一色：配牌，先看暗手與本局目標。",
          "zh": "一门数牌自摸成清一色：配牌，先看暗手与本局目标。"
        },
        "scene": {
          "hand": [],
          "melds": [],
          "pending": null,
          "phase": "deal",
          "rivers": {
            "east": [],
            "north": [],
            "south": [],
            "west": []
          },
          "roundWind": "east",
          "seat": "south",
          "wallRemaining": 136
        }
      },
      {
        "expected": {
          "type": "draw"
        },
        "explanation": {
          "en": "A normal draw comes from the wall head; check shape before claiming a win.",
          "tw": "普通摸牌從牆頭取；這一步還不能直接宣佈胡牌。",
          "zh": "普通摸牌从墙头取；这一步还不能直接宣布胡牌。"
        },
        "hint": {
          "en": "Check the tile you draw before discarding.",
          "tw": "觀察摸到的牌，再決定是否出牌。",
          "zh": "观察摸到的牌，再决定是否出牌。"
        },
        "prompt": {
          "en": "Complete a full flush by self-draw: Draw from the wall head on your turn.",
          "tw": "一門數牌自摸成清一色：輪到你，從牌牆頭摸一張。",
          "zh": "一门数牌自摸成清一色：轮到你，从牌墙头摸一张。"
        },
        "scene": {
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
            "m5",
            "m5"
          ],
          "melds": [],
          "pending": null,
          "phase": "draw",
          "rivers": {
            "east": [
              "s9"
            ],
            "north": [],
            "south": [],
            "west": []
          },
          "roundWind": "east",
          "seat": "south",
          "wallRemaining": 83
        }
      },
      {
        "expected": {
          "tile": "z4",
          "type": "discard"
        },
        "explanation": {
          "en": "After discarding, the concealed count returns to 13; exposed sets stay fixed.",
          "tw": "出牌後暗手回到十三張；已固定的明牌組合不再拆開。",
          "zh": "出牌后暗手回到十三张；已固定的明牌组合不再拆开。"
        },
        "hint": {
          "en": "Discard the isolated North wind and keep the target sets.",
          "tw": "把孤立的北風打出，保留目標組合。",
          "zh": "把孤立的北风打出，保留目标组合。"
        },
        "prompt": {
          "en": "Complete a full flush by self-draw: Choose a discard that preserves the target sets.",
          "tw": "一門數牌自摸成清一色：選擇一張牌打出，保留本局目標組合。",
          "zh": "一门数牌自摸成清一色：选择一张牌打出，保留本局目标组合。"
        },
        "scene": {
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
            "m5",
            "m5",
            "z4"
          ],
          "melds": [],
          "pending": null,
          "phase": "discard",
          "rivers": {
            "east": [
              "s9"
            ],
            "north": [],
            "south": [],
            "west": []
          },
          "roundWind": "east",
          "seat": "south",
          "wallRemaining": 82
        }
      },
      {
        "expected": {
          "type": "draw"
        },
        "explanation": {
          "en": "A normal draw comes from the wall head; check shape before claiming a win.",
          "tw": "普通摸牌從牆頭取；這一步還不能直接宣佈胡牌。",
          "zh": "普通摸牌从墙头取；这一步还不能直接宣布胡牌。"
        },
        "hint": {
          "en": "Check the tile you draw before discarding.",
          "tw": "觀察摸到的牌，再決定是否出牌。",
          "zh": "观察摸到的牌，再决定是否出牌。"
        },
        "prompt": {
          "en": "Complete a full flush by self-draw: Draw from the wall head on your turn.",
          "tw": "一門數牌自摸成清一色：輪到你，從牌牆頭摸一張。",
          "zh": "一门数牌自摸成清一色：轮到你，从牌墙头摸一张。"
        },
        "scene": {
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
            "m5",
            "m5"
          ],
          "melds": [],
          "pending": null,
          "phase": "draw",
          "rivers": {
            "east": [
              "s9",
              "m9"
            ],
            "north": [
              "s8"
            ],
            "south": [
              "z4"
            ],
            "west": [
              "m8"
            ]
          },
          "roundWind": "east",
          "seat": "south",
          "wallRemaining": 79
        }
      },
      {
        "expected": {
          "type": "win"
        },
        "explanation": {
          "en": "Show the winning shape and faan; confirm points before shuffling.",
          "tw": "胡牌後展示牌形和番數，確認積分後再洗牌。",
          "zh": "胡牌后展示牌形和番数，确认积分后再洗牌。"
        },
        "hint": {
          "en": "Check four sets and a pair, or a listed special shape, and at least three faan.",
          "tw": "四組一對或列明的特殊形，還須達到三番。",
          "zh": "四组一对或列明的特殊形，还须达到三番。"
        },
        "prompt": {
          "en": "Complete a full flush by self-draw: Check the complete hand and faan, then declare a win.",
          "tw": "一門數牌自摸成清一色：核對完整牌形與番數，再宣佈胡牌。",
          "zh": "一门数牌自摸成清一色：核对完整牌形与番数，再宣布胡牌。"
        },
        "scene": {
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
          "melds": [],
          "pending": null,
          "phase": "win",
          "rivers": {
            "east": [
              "s9",
              "m9"
            ],
            "north": [
              "s8"
            ],
            "south": [
              "z4"
            ],
            "west": [
              "m8"
            ]
          },
          "roundWind": "east",
          "seat": "south",
          "wallRemaining": 78
        }
      }
    ],
    "title": {
      "en": "Concealed full flush",
      "tw": "門清清一色",
      "zh": "门清清一色"
    }
  },
  {
    "final": {
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
            "en": "No-flower Concealed Hand",
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
      "fan": 10,
      "scene": {
        "hand": [
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
        ],
        "melds": [],
        "pending": null,
        "phase": "finished",
        "rivers": {
          "east": [
            "s9",
            "m9"
          ],
          "north": [
            "s8"
          ],
          "south": [
            "z4"
          ],
          "west": [
            "m8"
          ]
        },
        "roundWind": "east",
        "seat": "south",
        "wallRemaining": 78
      },
      "winMode": "selfDraw"
    },
    "guided": false,
    "id": "all-triplets",
    "steps": [
      {
        "expected": {
          "type": "deal"
        },
        "explanation": {
          "en": "South receives 13 tiles; other turns are condensed.",
          "tw": "南家配牌十三張；本局其他玩家的回合會簡要帶過。",
          "zh": "南家配牌十三张；本局其他玩家的回合会简要带过。"
        },
        "hint": {
          "en": "Count the tiles and identify useful groups.",
          "tw": "先數牌，再按本局目標整理組合。",
          "zh": "先数牌，再按本局目标整理组合。"
        },
        "prompt": {
          "en": "Keep four triplets and apply the cap: Deal and inspect your concealed tiles.",
          "tw": "保持四組刻子並計算封頂：配牌，先看暗手與本局目標。",
          "zh": "保持四组刻子并计算封顶：配牌，先看暗手与本局目标。"
        },
        "scene": {
          "hand": [],
          "melds": [],
          "pending": null,
          "phase": "deal",
          "rivers": {
            "east": [],
            "north": [],
            "south": [],
            "west": []
          },
          "roundWind": "east",
          "seat": "south",
          "wallRemaining": 136
        }
      },
      {
        "expected": {
          "type": "draw"
        },
        "explanation": {
          "en": "A normal draw comes from the wall head; check shape before claiming a win.",
          "tw": "普通摸牌從牆頭取；這一步還不能直接宣佈胡牌。",
          "zh": "普通摸牌从墙头取；这一步还不能直接宣布胡牌。"
        },
        "hint": {
          "en": "Check the tile you draw before discarding.",
          "tw": "觀察摸到的牌，再決定是否出牌。",
          "zh": "观察摸到的牌，再决定是否出牌。"
        },
        "prompt": {
          "en": "Keep four triplets and apply the cap: Draw from the wall head on your turn.",
          "tw": "保持四組刻子並計算封頂：輪到你，從牌牆頭摸一張。",
          "zh": "保持四组刻子并计算封顶：轮到你，从牌墙头摸一张。"
        },
        "scene": {
          "hand": [
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
          ],
          "melds": [],
          "pending": null,
          "phase": "draw",
          "rivers": {
            "east": [
              "s9"
            ],
            "north": [],
            "south": [],
            "west": []
          },
          "roundWind": "east",
          "seat": "south",
          "wallRemaining": 83
        }
      },
      {
        "expected": {
          "tile": "z4",
          "type": "discard"
        },
        "explanation": {
          "en": "After discarding, the concealed count returns to 13; exposed sets stay fixed.",
          "tw": "出牌後暗手回到十三張；已固定的明牌組合不再拆開。",
          "zh": "出牌后暗手回到十三张；已固定的明牌组合不再拆开。"
        },
        "hint": {
          "en": "Discard the isolated North wind and keep the target sets.",
          "tw": "把孤立的北風打出，保留目標組合。",
          "zh": "把孤立的北风打出，保留目标组合。"
        },
        "prompt": {
          "en": "Keep four triplets and apply the cap: Choose a discard that preserves the target sets.",
          "tw": "保持四組刻子並計算封頂：選擇一張牌打出，保留本局目標組合。",
          "zh": "保持四组刻子并计算封顶：选择一张牌打出，保留本局目标组合。"
        },
        "scene": {
          "hand": [
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
            "z4"
          ],
          "melds": [],
          "pending": null,
          "phase": "discard",
          "rivers": {
            "east": [
              "s9"
            ],
            "north": [],
            "south": [],
            "west": []
          },
          "roundWind": "east",
          "seat": "south",
          "wallRemaining": 82
        }
      },
      {
        "expected": {
          "type": "draw"
        },
        "explanation": {
          "en": "A normal draw comes from the wall head; check shape before claiming a win.",
          "tw": "普通摸牌從牆頭取；這一步還不能直接宣佈胡牌。",
          "zh": "普通摸牌从墙头取；这一步还不能直接宣布胡牌。"
        },
        "hint": {
          "en": "Check the tile you draw before discarding.",
          "tw": "觀察摸到的牌，再決定是否出牌。",
          "zh": "观察摸到的牌，再决定是否出牌。"
        },
        "prompt": {
          "en": "Keep four triplets and apply the cap: Draw from the wall head on your turn.",
          "tw": "保持四組刻子並計算封頂：輪到你，從牌牆頭摸一張。",
          "zh": "保持四组刻子并计算封顶：轮到你，从牌墙头摸一张。"
        },
        "scene": {
          "hand": [
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
          ],
          "melds": [],
          "pending": null,
          "phase": "draw",
          "rivers": {
            "east": [
              "s9",
              "m9"
            ],
            "north": [
              "s8"
            ],
            "south": [
              "z4"
            ],
            "west": [
              "m8"
            ]
          },
          "roundWind": "east",
          "seat": "south",
          "wallRemaining": 79
        }
      },
      {
        "expected": {
          "type": "win"
        },
        "explanation": {
          "en": "Show the winning shape and faan; confirm points before shuffling.",
          "tw": "胡牌後展示牌形和番數，確認積分後再洗牌。",
          "zh": "胡牌后展示牌形和番数，确认积分后再洗牌。"
        },
        "hint": {
          "en": "Check four sets and a pair, or a listed special shape, and at least three faan.",
          "tw": "四組一對或列明的特殊形，還須達到三番。",
          "zh": "四组一对或列明的特殊形，还须达到三番。"
        },
        "prompt": {
          "en": "Keep four triplets and apply the cap: Check the complete hand and faan, then declare a win.",
          "tw": "保持四組刻子並計算封頂：核對完整牌形與番數，再宣佈胡牌。",
          "zh": "保持四组刻子并计算封顶：核对完整牌形与番数，再宣布胡牌。"
        },
        "scene": {
          "hand": [
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
          ],
          "melds": [],
          "pending": null,
          "phase": "win",
          "rivers": {
            "east": [
              "s9",
              "m9"
            ],
            "north": [
              "s8"
            ],
            "south": [
              "z4"
            ],
            "west": [
              "m8"
            ]
          },
          "roundWind": "east",
          "seat": "south",
          "wallRemaining": 78
        }
      }
    ],
    "title": {
      "en": "Concealed all triplets",
      "tw": "門清對對胡",
      "zh": "门清对对胡"
    }
  },
  {
    "final": {
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
            "en": "Round South set",
            "tw": "圈風南刻子",
            "zh": "圈风南刻子"
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
            "en": "No-flower Concealed Hand",
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
      "fan": 8,
      "scene": {
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
        "melds": [],
        "pending": null,
        "phase": "finished",
        "rivers": {
          "east": [
            "s9",
            "m9"
          ],
          "north": [
            "s8"
          ],
          "south": [
            "z4"
          ],
          "west": [
            "m8"
          ]
        },
        "roundWind": "south",
        "seat": "south",
        "wallRemaining": 78
      },
      "winMode": "selfDraw"
    },
    "guided": false,
    "id": "double-wind",
    "steps": [
      {
        "expected": {
          "type": "deal"
        },
        "explanation": {
          "en": "South receives 13 tiles; other turns are condensed.",
          "tw": "南家配牌十三張；本局其他玩家的回合會簡要帶過。",
          "zh": "南家配牌十三张；本局其他玩家的回合会简要带过。"
        },
        "hint": {
          "en": "Count the tiles and identify useful groups.",
          "tw": "先數牌，再按本局目標整理組合。",
          "zh": "先数牌，再按本局目标整理组合。"
        },
        "prompt": {
          "en": "Count seat and round wind separately: Deal and inspect your concealed tiles.",
          "tw": "門風與圈風同時計分：配牌，先看暗手與本局目標。",
          "zh": "门风与圈风同时计分：配牌，先看暗手与本局目标。"
        },
        "scene": {
          "hand": [],
          "melds": [],
          "pending": null,
          "phase": "deal",
          "rivers": {
            "east": [],
            "north": [],
            "south": [],
            "west": []
          },
          "roundWind": "east",
          "seat": "south",
          "wallRemaining": 136
        }
      },
      {
        "expected": {
          "type": "draw"
        },
        "explanation": {
          "en": "A normal draw comes from the wall head; check shape before claiming a win.",
          "tw": "普通摸牌從牆頭取；這一步還不能直接宣佈胡牌。",
          "zh": "普通摸牌从墙头取；这一步还不能直接宣布胡牌。"
        },
        "hint": {
          "en": "Check the tile you draw before discarding.",
          "tw": "觀察摸到的牌，再決定是否出牌。",
          "zh": "观察摸到的牌，再决定是否出牌。"
        },
        "prompt": {
          "en": "Count seat and round wind separately: Draw from the wall head on your turn.",
          "tw": "門風與圈風同時計分：輪到你，從牌牆頭摸一張。",
          "zh": "门风与圈风同时计分：轮到你，从牌墙头摸一张。"
        },
        "scene": {
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
            "p9"
          ],
          "melds": [],
          "pending": null,
          "phase": "draw",
          "rivers": {
            "east": [
              "s9"
            ],
            "north": [],
            "south": [],
            "west": []
          },
          "roundWind": "south",
          "seat": "south",
          "wallRemaining": 83
        }
      },
      {
        "expected": {
          "tile": "z4",
          "type": "discard"
        },
        "explanation": {
          "en": "After discarding, the concealed count returns to 13; exposed sets stay fixed.",
          "tw": "出牌後暗手回到十三張；已固定的明牌組合不再拆開。",
          "zh": "出牌后暗手回到十三张；已固定的明牌组合不再拆开。"
        },
        "hint": {
          "en": "Discard the isolated North wind and keep the target sets.",
          "tw": "把孤立的北風打出，保留目標組合。",
          "zh": "把孤立的北风打出，保留目标组合。"
        },
        "prompt": {
          "en": "Count seat and round wind separately: Choose a discard that preserves the target sets.",
          "tw": "門風與圈風同時計分：選擇一張牌打出，保留本局目標組合。",
          "zh": "门风与圈风同时计分：选择一张牌打出，保留本局目标组合。"
        },
        "scene": {
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
            "z4"
          ],
          "melds": [],
          "pending": null,
          "phase": "discard",
          "rivers": {
            "east": [
              "s9"
            ],
            "north": [],
            "south": [],
            "west": []
          },
          "roundWind": "south",
          "seat": "south",
          "wallRemaining": 82
        }
      },
      {
        "expected": {
          "type": "draw"
        },
        "explanation": {
          "en": "A normal draw comes from the wall head; check shape before claiming a win.",
          "tw": "普通摸牌從牆頭取；這一步還不能直接宣佈胡牌。",
          "zh": "普通摸牌从墙头取；这一步还不能直接宣布胡牌。"
        },
        "hint": {
          "en": "Check the tile you draw before discarding.",
          "tw": "觀察摸到的牌，再決定是否出牌。",
          "zh": "观察摸到的牌，再决定是否出牌。"
        },
        "prompt": {
          "en": "Count seat and round wind separately: Draw from the wall head on your turn.",
          "tw": "門風與圈風同時計分：輪到你，從牌牆頭摸一張。",
          "zh": "门风与圈风同时计分：轮到你，从牌墙头摸一张。"
        },
        "scene": {
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
            "p9"
          ],
          "melds": [],
          "pending": null,
          "phase": "draw",
          "rivers": {
            "east": [
              "s9",
              "m9"
            ],
            "north": [
              "s8"
            ],
            "south": [
              "z4"
            ],
            "west": [
              "m8"
            ]
          },
          "roundWind": "south",
          "seat": "south",
          "wallRemaining": 79
        }
      },
      {
        "expected": {
          "type": "win"
        },
        "explanation": {
          "en": "Show the winning shape and faan; confirm points before shuffling.",
          "tw": "胡牌後展示牌形和番數，確認積分後再洗牌。",
          "zh": "胡牌后展示牌形和番数，确认积分后再洗牌。"
        },
        "hint": {
          "en": "Check four sets and a pair, or a listed special shape, and at least three faan.",
          "tw": "四組一對或列明的特殊形，還須達到三番。",
          "zh": "四组一对或列明的特殊形，还须达到三番。"
        },
        "prompt": {
          "en": "Count seat and round wind separately: Check the complete hand and faan, then declare a win.",
          "tw": "門風與圈風同時計分：核對完整牌形與番數，再宣佈胡牌。",
          "zh": "门风与圈风同时计分：核对完整牌形与番数，再宣布胡牌。"
        },
        "scene": {
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
          "melds": [],
          "pending": null,
          "phase": "win",
          "rivers": {
            "east": [
              "s9",
              "m9"
            ],
            "north": [
              "s8"
            ],
            "south": [
              "z4"
            ],
            "west": [
              "m8"
            ]
          },
          "roundWind": "south",
          "seat": "south",
          "wallRemaining": 78
        }
      }
    ],
    "title": {
      "en": "South seat in South round",
      "tw": "南圈南家雙風",
      "zh": "南圈南家双风"
    }
  },
  {
    "final": {
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
            "en": "No-flower Concealed Hand",
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
        },
        {
          "fan": 1,
          "title": {
            "en": "Last-Tile Self-Draw",
            "tw": "海底撈月",
            "zh": "海底捞月"
          }
        }
      ],
      "fan": 8,
      "scene": {
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
        "melds": [],
        "pending": null,
        "phase": "finished",
        "rivers": {
          "east": [
            "s9",
            "m9"
          ],
          "north": [
            "s8"
          ],
          "south": [
            "z4"
          ],
          "west": [
            "m8"
          ]
        },
        "roundWind": "east",
        "seat": "south",
        "wallRemaining": 0
      },
      "winMode": "selfDraw"
    },
    "guided": false,
    "id": "last-wall",
    "steps": [
      {
        "expected": {
          "type": "deal"
        },
        "explanation": {
          "en": "South receives 13 tiles; other turns are condensed.",
          "tw": "南家配牌十三張；本局其他玩家的回合會簡要帶過。",
          "zh": "南家配牌十三张；本局其他玩家的回合会简要带过。"
        },
        "hint": {
          "en": "Count the tiles and identify useful groups.",
          "tw": "先數牌，再按本局目標整理組合。",
          "zh": "先数牌，再按本局目标整理组合。"
        },
        "prompt": {
          "en": "Check a win on the last wall tile: Deal and inspect your concealed tiles.",
          "tw": "觀察最後一張是否能胡：配牌，先看暗手與本局目標。",
          "zh": "观察最后一张是否能胡：配牌，先看暗手与本局目标。"
        },
        "scene": {
          "hand": [],
          "melds": [],
          "pending": null,
          "phase": "deal",
          "rivers": {
            "east": [],
            "north": [],
            "south": [],
            "west": []
          },
          "roundWind": "east",
          "seat": "south",
          "wallRemaining": 136
        }
      },
      {
        "expected": {
          "type": "draw"
        },
        "explanation": {
          "en": "A normal draw comes from the wall head; check shape before claiming a win.",
          "tw": "普通摸牌從牆頭取；這一步還不能直接宣佈胡牌。",
          "zh": "普通摸牌从墙头取；这一步还不能直接宣布胡牌。"
        },
        "hint": {
          "en": "Check the tile you draw before discarding.",
          "tw": "觀察摸到的牌，再決定是否出牌。",
          "zh": "观察摸到的牌，再决定是否出牌。"
        },
        "prompt": {
          "en": "Check a win on the last wall tile: Draw from the wall head on your turn.",
          "tw": "觀察最後一張是否能胡：輪到你，從牌牆頭摸一張。",
          "zh": "观察最后一张是否能胡：轮到你，从牌墙头摸一张。"
        },
        "scene": {
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
            "p9"
          ],
          "melds": [],
          "pending": null,
          "phase": "draw",
          "rivers": {
            "east": [
              "s9"
            ],
            "north": [],
            "south": [],
            "west": []
          },
          "roundWind": "east",
          "seat": "south",
          "wallRemaining": 5
        }
      },
      {
        "expected": {
          "tile": "z4",
          "type": "discard"
        },
        "explanation": {
          "en": "After discarding, the concealed count returns to 13; exposed sets stay fixed.",
          "tw": "出牌後暗手回到十三張；已固定的明牌組合不再拆開。",
          "zh": "出牌后暗手回到十三张；已固定的明牌组合不再拆开。"
        },
        "hint": {
          "en": "Discard the isolated North wind and keep the target sets.",
          "tw": "把孤立的北風打出，保留目標組合。",
          "zh": "把孤立的北风打出，保留目标组合。"
        },
        "prompt": {
          "en": "Check a win on the last wall tile: Choose a discard that preserves the target sets.",
          "tw": "觀察最後一張是否能胡：選擇一張牌打出，保留本局目標組合。",
          "zh": "观察最后一张是否能胡：选择一张牌打出，保留本局目标组合。"
        },
        "scene": {
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
            "z4"
          ],
          "melds": [],
          "pending": null,
          "phase": "discard",
          "rivers": {
            "east": [
              "s9"
            ],
            "north": [],
            "south": [],
            "west": []
          },
          "roundWind": "east",
          "seat": "south",
          "wallRemaining": 4
        }
      },
      {
        "expected": {
          "type": "draw"
        },
        "explanation": {
          "en": "A normal draw comes from the wall head; check shape before claiming a win.",
          "tw": "普通摸牌從牆頭取；這一步還不能直接宣佈胡牌。",
          "zh": "普通摸牌从墙头取；这一步还不能直接宣布胡牌。"
        },
        "hint": {
          "en": "Check the tile you draw before discarding.",
          "tw": "觀察摸到的牌，再決定是否出牌。",
          "zh": "观察摸到的牌，再决定是否出牌。"
        },
        "prompt": {
          "en": "Check a win on the last wall tile: Draw from the wall head on your turn.",
          "tw": "觀察最後一張是否能胡：輪到你，從牌牆頭摸一張。",
          "zh": "观察最后一张是否能胡：轮到你，从牌墙头摸一张。"
        },
        "scene": {
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
            "p9"
          ],
          "melds": [],
          "pending": null,
          "phase": "draw",
          "rivers": {
            "east": [
              "s9",
              "m9"
            ],
            "north": [
              "s8"
            ],
            "south": [
              "z4"
            ],
            "west": [
              "m8"
            ]
          },
          "roundWind": "east",
          "seat": "south",
          "wallRemaining": 1
        }
      },
      {
        "expected": {
          "type": "win"
        },
        "explanation": {
          "en": "Show the winning shape and faan; confirm points before shuffling.",
          "tw": "胡牌後展示牌形和番數，確認積分後再洗牌。",
          "zh": "胡牌后展示牌形和番数，确认积分后再洗牌。"
        },
        "hint": {
          "en": "Check four sets and a pair, or a listed special shape, and at least three faan.",
          "tw": "四組一對或列明的特殊形，還須達到三番。",
          "zh": "四组一对或列明的特殊形，还须达到三番。"
        },
        "prompt": {
          "en": "Check a win on the last wall tile: Check the complete hand and faan, then declare a win.",
          "tw": "觀察最後一張是否能胡：核對完整牌形與番數，再宣佈胡牌。",
          "zh": "观察最后一张是否能胡：核对完整牌形与番数，再宣布胡牌。"
        },
        "scene": {
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
          "melds": [],
          "pending": null,
          "phase": "win",
          "rivers": {
            "east": [
              "s9",
              "m9"
            ],
            "north": [
              "s8"
            ],
            "south": [
              "z4"
            ],
            "west": [
              "m8"
            ]
          },
          "roundWind": "east",
          "seat": "south",
          "wallRemaining": 0
        }
      }
    ],
    "title": {
      "en": "Last wall tile self-draw",
      "tw": "最後一張自摸",
      "zh": "最后一张自摸"
    }
  },
  {
    "final": {
      "breakdown": [
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
            "en": "Green Dragon set",
            "tw": "發財刻子",
            "zh": "发财刻子"
          }
        },
        {
          "fan": 1,
          "title": {
            "en": "No-flower Concealed Hand",
            "tw": "無花門前清",
            "zh": "无花门前清"
          }
        }
      ],
      "fan": 3,
      "scene": {
        "hand": [
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
          "z6",
          "z2",
          "z2"
        ],
        "melds": [],
        "pending": null,
        "phase": "finished",
        "rivers": {
          "east": [
            "s9",
            "m9",
            "z6"
          ],
          "north": [
            "s8"
          ],
          "south": [
            "z4"
          ],
          "west": [
            "m8"
          ]
        },
        "roundWind": "east",
        "seat": "south",
        "wallRemaining": 78
      },
      "winMode": "discard"
    },
    "guided": false,
    "id": "two-dragons-discard",
    "steps": [
      {
        "expected": {
          "type": "deal"
        },
        "explanation": {
          "en": "South receives 13 tiles; other turns are condensed.",
          "tw": "南家配牌十三張；本局其他玩家的回合會簡要帶過。",
          "zh": "南家配牌十三张；本局其他玩家的回合会简要带过。"
        },
        "hint": {
          "en": "Count the tiles and identify useful groups.",
          "tw": "先數牌，再按本局目標整理組合。",
          "zh": "先数牌，再按本局目标整理组合。"
        },
        "prompt": {
          "en": "Meet three faan on an opponent discard: Deal and inspect your concealed tiles.",
          "tw": "核對三番門檻並胡他家棄牌：配牌，先看暗手與本局目標。",
          "zh": "核对三番门槛并胡他家弃牌：配牌，先看暗手与本局目标。"
        },
        "scene": {
          "hand": [],
          "melds": [],
          "pending": null,
          "phase": "deal",
          "rivers": {
            "east": [],
            "north": [],
            "south": [],
            "west": []
          },
          "roundWind": "east",
          "seat": "south",
          "wallRemaining": 136
        }
      },
      {
        "expected": {
          "type": "draw"
        },
        "explanation": {
          "en": "A normal draw comes from the wall head; check shape before claiming a win.",
          "tw": "普通摸牌從牆頭取；這一步還不能直接宣佈胡牌。",
          "zh": "普通摸牌从墙头取；这一步还不能直接宣布胡牌。"
        },
        "hint": {
          "en": "Check the tile you draw before discarding.",
          "tw": "觀察摸到的牌，再決定是否出牌。",
          "zh": "观察摸到的牌，再决定是否出牌。"
        },
        "prompt": {
          "en": "Meet three faan on an opponent discard: Draw from the wall head on your turn.",
          "tw": "核對三番門檻並胡他家棄牌：輪到你，從牌牆頭摸一張。",
          "zh": "核对三番门槛并胡他家弃牌：轮到你，从牌墙头摸一张。"
        },
        "scene": {
          "hand": [
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
          ],
          "melds": [],
          "pending": null,
          "phase": "draw",
          "rivers": {
            "east": [
              "s9"
            ],
            "north": [],
            "south": [],
            "west": []
          },
          "roundWind": "east",
          "seat": "south",
          "wallRemaining": 83
        }
      },
      {
        "expected": {
          "tile": "z4",
          "type": "discard"
        },
        "explanation": {
          "en": "After discarding, the concealed count returns to 13; exposed sets stay fixed.",
          "tw": "出牌後暗手回到十三張；已固定的明牌組合不再拆開。",
          "zh": "出牌后暗手回到十三张；已固定的明牌组合不再拆开。"
        },
        "hint": {
          "en": "Discard the isolated North wind and keep the target sets.",
          "tw": "把孤立的北風打出，保留目標組合。",
          "zh": "把孤立的北风打出，保留目标组合。"
        },
        "prompt": {
          "en": "Meet three faan on an opponent discard: Choose a discard that preserves the target sets.",
          "tw": "核對三番門檻並胡他家棄牌：選擇一張牌打出，保留本局目標組合。",
          "zh": "核对三番门槛并胡他家弃牌：选择一张牌打出，保留本局目标组合。"
        },
        "scene": {
          "hand": [
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
            "z2",
            "z4"
          ],
          "melds": [],
          "pending": null,
          "phase": "discard",
          "rivers": {
            "east": [
              "s9"
            ],
            "north": [],
            "south": [],
            "west": []
          },
          "roundWind": "east",
          "seat": "south",
          "wallRemaining": 82
        }
      },
      {
        "expected": {
          "type": "wait"
        },
        "explanation": {
          "en": "Only the latest discard can complete this win; check shape and minimum faan.",
          "tw": "只有最新棄牌可用於胡牌；先核對牌形和起胡番數。",
          "zh": "只有最新弃牌可用于胡牌；先核对牌形和起胡番数。"
        },
        "hint": {
          "en": "Watch East’s latest discard.",
          "tw": "看看東家的最新一張棄牌。",
          "zh": "看看东家的最新一张弃牌。"
        },
        "prompt": {
          "en": "Meet three faan on an opponent discard: Watch for an opponent’s winning discard.",
          "tw": "核對三番門檻並胡他家棄牌：觀察對手出牌，等待可胡的最新棄牌。",
          "zh": "核对三番门槛并胡他家弃牌：观察对手出牌，等待可胡的最新弃牌。"
        },
        "scene": {
          "hand": [
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
          ],
          "melds": [],
          "pending": null,
          "phase": "wait",
          "rivers": {
            "east": [
              "s9",
              "m9"
            ],
            "north": [
              "s8"
            ],
            "south": [
              "z4"
            ],
            "west": [
              "m8"
            ]
          },
          "roundWind": "east",
          "seat": "south",
          "wallRemaining": 79
        }
      },
      {
        "expected": {
          "type": "win"
        },
        "explanation": {
          "en": "Show the winning shape and faan; confirm points before shuffling.",
          "tw": "胡牌後展示牌形和番數，確認積分後再洗牌。",
          "zh": "胡牌后展示牌形和番数，确认积分后再洗牌。"
        },
        "hint": {
          "en": "Check four sets and a pair, or a listed special shape, and at least three faan.",
          "tw": "四組一對或列明的特殊形，還須達到三番。",
          "zh": "四组一对或列明的特殊形，还须达到三番。"
        },
        "prompt": {
          "en": "Meet three faan on an opponent discard: Check the complete hand and faan, then declare a win.",
          "tw": "核對三番門檻並胡他家棄牌：核對完整牌形與番數，再宣佈胡牌。",
          "zh": "核对三番门槛并胡他家弃牌：核对完整牌形与番数，再宣布胡牌。"
        },
        "scene": {
          "hand": [
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
          ],
          "melds": [],
          "pending": {
            "seat": "east",
            "tile": "z6"
          },
          "phase": "win",
          "rivers": {
            "east": [
              "s9",
              "m9",
              "z6"
            ],
            "north": [
              "s8"
            ],
            "south": [
              "z4"
            ],
            "west": [
              "m8"
            ]
          },
          "roundWind": "east",
          "seat": "south",
          "wallRemaining": 79
        }
      }
    ],
    "title": {
      "en": "Two dragons on a discard",
      "tw": "雙三元棄牌胡",
      "zh": "双三元弃牌胡"
    }
  },
  {
    "final": {
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
            "en": "No-flower Concealed Hand",
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
      "fan": 3,
      "scene": {
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
        "melds": [],
        "pending": null,
        "phase": "finished",
        "rivers": {
          "east": [
            "s9",
            "m9"
          ],
          "north": [
            "s8"
          ],
          "south": [
            "z4"
          ],
          "west": [
            "m8"
          ]
        },
        "roundWind": "east",
        "seat": "south",
        "wallRemaining": 78
      },
      "winMode": "selfDraw"
    },
    "guided": false,
    "id": "all-sequences",
    "steps": [
      {
        "expected": {
          "type": "deal"
        },
        "explanation": {
          "en": "South receives 13 tiles; other turns are condensed.",
          "tw": "南家配牌十三張；本局其他玩家的回合會簡要帶過。",
          "zh": "南家配牌十三张；本局其他玩家的回合会简要带过。"
        },
        "hint": {
          "en": "Count the tiles and identify useful groups.",
          "tw": "先數牌，再按本局目標整理組合。",
          "zh": "先数牌，再按本局目标整理组合。"
        },
        "prompt": {
          "en": "Keep four sequences and self-draw to three faan: Deal and inspect your concealed tiles.",
          "tw": "保留四順一對並自摸湊足三番：配牌，先看暗手與本局目標。",
          "zh": "保留四顺一对并自摸凑足三番：配牌，先看暗手与本局目标。"
        },
        "scene": {
          "hand": [],
          "melds": [],
          "pending": null,
          "phase": "deal",
          "rivers": {
            "east": [],
            "north": [],
            "south": [],
            "west": []
          },
          "roundWind": "east",
          "seat": "south",
          "wallRemaining": 136
        }
      },
      {
        "expected": {
          "type": "draw"
        },
        "explanation": {
          "en": "A normal draw comes from the wall head; check shape before claiming a win.",
          "tw": "普通摸牌從牆頭取；這一步還不能直接宣佈胡牌。",
          "zh": "普通摸牌从墙头取；这一步还不能直接宣布胡牌。"
        },
        "hint": {
          "en": "Check the tile you draw before discarding.",
          "tw": "觀察摸到的牌，再決定是否出牌。",
          "zh": "观察摸到的牌，再决定是否出牌。"
        },
        "prompt": {
          "en": "Keep four sequences and self-draw to three faan: Draw from the wall head on your turn.",
          "tw": "保留四順一對並自摸湊足三番：輪到你，從牌牆頭摸一張。",
          "zh": "保留四顺一对并自摸凑足三番：轮到你，从牌墙头摸一张。"
        },
        "scene": {
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
            "z7"
          ],
          "melds": [],
          "pending": null,
          "phase": "draw",
          "rivers": {
            "east": [
              "s9"
            ],
            "north": [],
            "south": [],
            "west": []
          },
          "roundWind": "east",
          "seat": "south",
          "wallRemaining": 83
        }
      },
      {
        "expected": {
          "tile": "z4",
          "type": "discard"
        },
        "explanation": {
          "en": "After discarding, the concealed count returns to 13; exposed sets stay fixed.",
          "tw": "出牌後暗手回到十三張；已固定的明牌組合不再拆開。",
          "zh": "出牌后暗手回到十三张；已固定的明牌组合不再拆开。"
        },
        "hint": {
          "en": "Discard the isolated North wind and keep the target sets.",
          "tw": "把孤立的北風打出，保留目標組合。",
          "zh": "把孤立的北风打出，保留目标组合。"
        },
        "prompt": {
          "en": "Keep four sequences and self-draw to three faan: Choose a discard that preserves the target sets.",
          "tw": "保留四順一對並自摸湊足三番：選擇一張牌打出，保留本局目標組合。",
          "zh": "保留四顺一对并自摸凑足三番：选择一张牌打出，保留本局目标组合。"
        },
        "scene": {
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
            "z4"
          ],
          "melds": [],
          "pending": null,
          "phase": "discard",
          "rivers": {
            "east": [
              "s9"
            ],
            "north": [],
            "south": [],
            "west": []
          },
          "roundWind": "east",
          "seat": "south",
          "wallRemaining": 82
        }
      },
      {
        "expected": {
          "type": "draw"
        },
        "explanation": {
          "en": "A normal draw comes from the wall head; check shape before claiming a win.",
          "tw": "普通摸牌從牆頭取；這一步還不能直接宣佈胡牌。",
          "zh": "普通摸牌从墙头取；这一步还不能直接宣布胡牌。"
        },
        "hint": {
          "en": "Check the tile you draw before discarding.",
          "tw": "觀察摸到的牌，再決定是否出牌。",
          "zh": "观察摸到的牌，再决定是否出牌。"
        },
        "prompt": {
          "en": "Keep four sequences and self-draw to three faan: Draw from the wall head on your turn.",
          "tw": "保留四順一對並自摸湊足三番：輪到你，從牌牆頭摸一張。",
          "zh": "保留四顺一对并自摸凑足三番：轮到你，从牌墙头摸一张。"
        },
        "scene": {
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
            "z7"
          ],
          "melds": [],
          "pending": null,
          "phase": "draw",
          "rivers": {
            "east": [
              "s9",
              "m9"
            ],
            "north": [
              "s8"
            ],
            "south": [
              "z4"
            ],
            "west": [
              "m8"
            ]
          },
          "roundWind": "east",
          "seat": "south",
          "wallRemaining": 79
        }
      },
      {
        "expected": {
          "type": "win"
        },
        "explanation": {
          "en": "Show the winning shape and faan; confirm points before shuffling.",
          "tw": "胡牌後展示牌形和番數，確認積分後再洗牌。",
          "zh": "胡牌后展示牌形和番数，确认积分后再洗牌。"
        },
        "hint": {
          "en": "Check four sets and a pair, or a listed special shape, and at least three faan.",
          "tw": "四組一對或列明的特殊形，還須達到三番。",
          "zh": "四组一对或列明的特殊形，还须达到三番。"
        },
        "prompt": {
          "en": "Keep four sequences and self-draw to three faan: Check the complete hand and faan, then declare a win.",
          "tw": "保留四順一對並自摸湊足三番：核對完整牌形與番數，再宣佈胡牌。",
          "zh": "保留四顺一对并自摸凑足三番：核对完整牌形与番数，再宣布胡牌。"
        },
        "scene": {
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
          "melds": [],
          "pending": null,
          "phase": "win",
          "rivers": {
            "east": [
              "s9",
              "m9"
            ],
            "north": [
              "s8"
            ],
            "south": [
              "z4"
            ],
            "west": [
              "m8"
            ]
          },
          "roundWind": "east",
          "seat": "south",
          "wallRemaining": 78
        }
      }
    ],
    "title": {
      "en": "Three-faan All Sequences",
      "tw": "平胡三番",
      "zh": "平胡三番"
    }
  },
  {
    "final": {
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
            "en": "Self-Draw",
            "tw": "自摸",
            "zh": "自摸"
          }
        }
      ],
      "fan": 8,
      "scene": {
        "hand": [
          "p4",
          "p5",
          "p6",
          "p7",
          "p8",
          "p9",
          "p9",
          "p9",
          "p9",
          "p5",
          "p5"
        ],
        "melds": [
          {
            "tiles": [
              "p1",
              "p2",
              "p3"
            ],
            "type": "chow"
          }
        ],
        "pending": null,
        "phase": "finished",
        "rivers": {
          "east": [
            "m9"
          ],
          "north": [
            "s8"
          ],
          "south": [
            "z4"
          ],
          "west": [
            "m8"
          ]
        },
        "roundWind": "east",
        "seat": "south",
        "wallRemaining": 79
      },
      "winMode": "selfDraw"
    },
    "guided": false,
    "id": "open-full-flush",
    "steps": [
      {
        "expected": {
          "type": "deal"
        },
        "explanation": {
          "en": "South receives 13 tiles; other turns are condensed.",
          "tw": "南家配牌十三張；本局其他玩家的回合會簡要帶過。",
          "zh": "南家配牌十三张；本局其他玩家的回合会简要带过。"
        },
        "hint": {
          "en": "Count the tiles and identify useful groups.",
          "tw": "先數牌，再按本局目標整理組合。",
          "zh": "先数牌，再按本局目标整理组合。"
        },
        "prompt": {
          "en": "Keep one suit after an exposed chow: Deal and inspect your concealed tiles.",
          "tw": "吃牌後保持一門數牌：配牌，先看暗手與本局目標。",
          "zh": "吃牌后保持一门数牌：配牌，先看暗手与本局目标。"
        },
        "scene": {
          "hand": [],
          "melds": [],
          "pending": null,
          "phase": "deal",
          "rivers": {
            "east": [],
            "north": [],
            "south": [],
            "west": []
          },
          "roundWind": "east",
          "seat": "south",
          "wallRemaining": 136
        }
      },
      {
        "expected": {
          "tile": "p3",
          "type": "chow"
        },
        "explanation": {
          "en": "Only the previous player’s latest discard can be chowed; then discard without drawing.",
          "tw": "吃牌只用上家的最新棄牌，明順固定後直接出牌。",
          "zh": "吃牌只用上家的最新弃牌，明顺固定后直接出牌。"
        },
        "hint": {
          "en": "Use two concealed suited tiles with the previous discard.",
          "tw": "手中兩張與上家棄牌組成同門順子。",
          "zh": "手中两张与上家弃牌组成同门顺子。"
        },
        "prompt": {
          "en": "Keep one suit after an exposed chow: The previous player discarded: choose Chow.",
          "tw": "吃牌後保持一門數牌：上家剛棄牌，選擇吃牌。",
          "zh": "吃牌后保持一门数牌：上家刚弃牌，选择吃牌。"
        },
        "scene": {
          "hand": [
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
          ],
          "melds": [],
          "pending": {
            "seat": "east",
            "tile": "p3"
          },
          "phase": "claim",
          "rivers": {
            "east": [
              "p3"
            ],
            "north": [],
            "south": [],
            "west": []
          },
          "roundWind": "east",
          "seat": "south",
          "wallRemaining": 83
        }
      },
      {
        "expected": {
          "tile": "z4",
          "type": "discard"
        },
        "explanation": {
          "en": "After discarding, the concealed count returns to 13; exposed sets stay fixed.",
          "tw": "出牌後暗手回到十三張；已固定的明牌組合不再拆開。",
          "zh": "出牌后暗手回到十三张；已固定的明牌组合不再拆开。"
        },
        "hint": {
          "en": "Discard the isolated North wind and keep the target sets.",
          "tw": "把孤立的北風打出，保留目標組合。",
          "zh": "把孤立的北风打出，保留目标组合。"
        },
        "prompt": {
          "en": "Keep one suit after an exposed chow: Choose a discard that preserves the target sets.",
          "tw": "吃牌後保持一門數牌：選擇一張牌打出，保留本局目標組合。",
          "zh": "吃牌后保持一门数牌：选择一张牌打出，保留本局目标组合。"
        },
        "scene": {
          "hand": [
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
            "z4"
          ],
          "melds": [
            {
              "tiles": [
                "p1",
                "p2",
                "p3"
              ],
              "type": "chow"
            }
          ],
          "pending": null,
          "phase": "discard",
          "rivers": {
            "east": [],
            "north": [],
            "south": [],
            "west": []
          },
          "roundWind": "east",
          "seat": "south",
          "wallRemaining": 83
        }
      },
      {
        "expected": {
          "type": "draw"
        },
        "explanation": {
          "en": "A normal draw comes from the wall head; check shape before claiming a win.",
          "tw": "普通摸牌從牆頭取；這一步還不能直接宣佈胡牌。",
          "zh": "普通摸牌从墙头取；这一步还不能直接宣布胡牌。"
        },
        "hint": {
          "en": "Check the tile you draw before discarding.",
          "tw": "觀察摸到的牌，再決定是否出牌。",
          "zh": "观察摸到的牌，再决定是否出牌。"
        },
        "prompt": {
          "en": "Keep one suit after an exposed chow: Draw from the wall head on your turn.",
          "tw": "吃牌後保持一門數牌：輪到你，從牌牆頭摸一張。",
          "zh": "吃牌后保持一门数牌：轮到你，从牌墙头摸一张。"
        },
        "scene": {
          "hand": [
            "p4",
            "p6",
            "p7",
            "p8",
            "p9",
            "p9",
            "p9",
            "p9",
            "p5",
            "p5"
          ],
          "melds": [
            {
              "tiles": [
                "p1",
                "p2",
                "p3"
              ],
              "type": "chow"
            }
          ],
          "pending": null,
          "phase": "draw",
          "rivers": {
            "east": [
              "m9"
            ],
            "north": [
              "s8"
            ],
            "south": [
              "z4"
            ],
            "west": [
              "m8"
            ]
          },
          "roundWind": "east",
          "seat": "south",
          "wallRemaining": 80
        }
      },
      {
        "expected": {
          "type": "win"
        },
        "explanation": {
          "en": "Show the winning shape and faan; confirm points before shuffling.",
          "tw": "胡牌後展示牌形和番數，確認積分後再洗牌。",
          "zh": "胡牌后展示牌形和番数，确认积分后再洗牌。"
        },
        "hint": {
          "en": "Check four sets and a pair, or a listed special shape, and at least three faan.",
          "tw": "四組一對或列明的特殊形，還須達到三番。",
          "zh": "四组一对或列明的特殊形，还须达到三番。"
        },
        "prompt": {
          "en": "Keep one suit after an exposed chow: Check the complete hand and faan, then declare a win.",
          "tw": "吃牌後保持一門數牌：核對完整牌形與番數，再宣佈胡牌。",
          "zh": "吃牌后保持一门数牌：核对完整牌形与番数，再宣布胡牌。"
        },
        "scene": {
          "hand": [
            "p4",
            "p5",
            "p6",
            "p7",
            "p8",
            "p9",
            "p9",
            "p9",
            "p9",
            "p5",
            "p5"
          ],
          "melds": [
            {
              "tiles": [
                "p1",
                "p2",
                "p3"
              ],
              "type": "chow"
            }
          ],
          "pending": null,
          "phase": "win",
          "rivers": {
            "east": [
              "m9"
            ],
            "north": [
              "s8"
            ],
            "south": [
              "z4"
            ],
            "west": [
              "m8"
            ]
          },
          "roundWind": "east",
          "seat": "south",
          "wallRemaining": 79
        }
      }
    ],
    "title": {
      "en": "Exposed full flush",
      "tw": "明吃清一色",
      "zh": "明吃清一色"
    }
  },
  {
    "final": {
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
      "fan": 9,
      "scene": {
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
        "pending": null,
        "phase": "finished",
        "rivers": {
          "east": [
            "m9"
          ],
          "north": [
            "s8"
          ],
          "south": [
            "z4"
          ],
          "west": [
            "m8"
          ]
        },
        "roundWind": "east",
        "seat": "south",
        "wallRemaining": 79
      },
      "winMode": "selfDraw"
    },
    "guided": false,
    "id": "open-triplets",
    "steps": [
      {
        "expected": {
          "type": "deal"
        },
        "explanation": {
          "en": "South receives 13 tiles; other turns are condensed.",
          "tw": "南家配牌十三張；本局其他玩家的回合會簡要帶過。",
          "zh": "南家配牌十三张；本局其他玩家的回合会简要带过。"
        },
        "hint": {
          "en": "Count the tiles and identify useful groups.",
          "tw": "先數牌，再按本局目標整理組合。",
          "zh": "先数牌，再按本局目标整理组合。"
        },
        "prompt": {
          "en": "Count All Triplets and Half Flush after a pung: Deal and inspect your concealed tiles.",
          "tw": "碰牌後計算對對胡與混一色：配牌，先看暗手與本局目標。",
          "zh": "碰牌后计算对对胡与混一色：配牌，先看暗手与本局目标。"
        },
        "scene": {
          "hand": [],
          "melds": [],
          "pending": null,
          "phase": "deal",
          "rivers": {
            "east": [],
            "north": [],
            "south": [],
            "west": []
          },
          "roundWind": "east",
          "seat": "south",
          "wallRemaining": 136
        }
      },
      {
        "expected": {
          "tile": "z5",
          "type": "pung"
        },
        "explanation": {
          "en": "Pung fixes an exposed triplet; discard without a normal draw.",
          "tw": "碰牌固定一組明刻，隨即打牌；無需普通摸牌。",
          "zh": "碰牌固定一组明刻，随即打牌；无需普通摸牌。"
        },
        "hint": {
          "en": "You hold a matching pair.",
          "tw": "手中已有相同的兩張牌。",
          "zh": "手中已有相同的两张牌。"
        },
        "prompt": {
          "en": "Count All Triplets and Half Flush after a pung: An opponent discarded: choose Pung.",
          "tw": "碰牌後計算對對胡與混一色：對手剛棄牌，選擇碰牌。",
          "zh": "碰牌后计算对对胡与混一色：对手刚弃牌，选择碰牌。"
        },
        "scene": {
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
            "z5",
            "z5",
            "z4"
          ],
          "melds": [],
          "pending": {
            "seat": "east",
            "tile": "z5"
          },
          "phase": "claim",
          "rivers": {
            "east": [
              "z5"
            ],
            "north": [],
            "south": [],
            "west": []
          },
          "roundWind": "east",
          "seat": "south",
          "wallRemaining": 83
        }
      },
      {
        "expected": {
          "tile": "z4",
          "type": "discard"
        },
        "explanation": {
          "en": "After discarding, the concealed count returns to 13; exposed sets stay fixed.",
          "tw": "出牌後暗手回到十三張；已固定的明牌組合不再拆開。",
          "zh": "出牌后暗手回到十三张；已固定的明牌组合不再拆开。"
        },
        "hint": {
          "en": "Discard the isolated North wind and keep the target sets.",
          "tw": "把孤立的北風打出，保留目標組合。",
          "zh": "把孤立的北风打出，保留目标组合。"
        },
        "prompt": {
          "en": "Count All Triplets and Half Flush after a pung: Choose a discard that preserves the target sets.",
          "tw": "碰牌後計算對對胡與混一色：選擇一張牌打出，保留本局目標組合。",
          "zh": "碰牌后计算对对胡与混一色：选择一张牌打出，保留本局目标组合。"
        },
        "scene": {
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
            "z4"
          ],
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
          "pending": null,
          "phase": "discard",
          "rivers": {
            "east": [],
            "north": [],
            "south": [],
            "west": []
          },
          "roundWind": "east",
          "seat": "south",
          "wallRemaining": 83
        }
      },
      {
        "expected": {
          "type": "draw"
        },
        "explanation": {
          "en": "A normal draw comes from the wall head; check shape before claiming a win.",
          "tw": "普通摸牌從牆頭取；這一步還不能直接宣佈胡牌。",
          "zh": "普通摸牌从墙头取；这一步还不能直接宣布胡牌。"
        },
        "hint": {
          "en": "Check the tile you draw before discarding.",
          "tw": "觀察摸到的牌，再決定是否出牌。",
          "zh": "观察摸到的牌，再决定是否出牌。"
        },
        "prompt": {
          "en": "Count All Triplets and Half Flush after a pung: Draw from the wall head on your turn.",
          "tw": "碰牌後計算對對胡與混一色：輪到你，從牌牆頭摸一張。",
          "zh": "碰牌后计算对对胡与混一色：轮到你，从牌墙头摸一张。"
        },
        "scene": {
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
            "p9"
          ],
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
          "pending": null,
          "phase": "draw",
          "rivers": {
            "east": [
              "m9"
            ],
            "north": [
              "s8"
            ],
            "south": [
              "z4"
            ],
            "west": [
              "m8"
            ]
          },
          "roundWind": "east",
          "seat": "south",
          "wallRemaining": 80
        }
      },
      {
        "expected": {
          "type": "win"
        },
        "explanation": {
          "en": "Show the winning shape and faan; confirm points before shuffling.",
          "tw": "胡牌後展示牌形和番數，確認積分後再洗牌。",
          "zh": "胡牌后展示牌形和番数，确认积分后再洗牌。"
        },
        "hint": {
          "en": "Check four sets and a pair, or a listed special shape, and at least three faan.",
          "tw": "四組一對或列明的特殊形，還須達到三番。",
          "zh": "四组一对或列明的特殊形，还须达到三番。"
        },
        "prompt": {
          "en": "Count All Triplets and Half Flush after a pung: Check the complete hand and faan, then declare a win.",
          "tw": "碰牌後計算對對胡與混一色：核對完整牌形與番數，再宣佈胡牌。",
          "zh": "碰牌后计算对对胡与混一色：核对完整牌形与番数，再宣布胡牌。"
        },
        "scene": {
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
          "pending": null,
          "phase": "win",
          "rivers": {
            "east": [
              "m9"
            ],
            "north": [
              "s8"
            ],
            "south": [
              "z4"
            ],
            "west": [
              "m8"
            ]
          },
          "roundWind": "east",
          "seat": "south",
          "wallRemaining": 79
        }
      }
    ],
    "title": {
      "en": "Exposed all triplets",
      "tw": "明碰對對胡",
      "zh": "明碰对对胡"
    }
  }
];
g.MahjongRoundData=data;
if(typeof module!=="undefined"&&module.exports)module.exports=data;
})(globalThis);
