(function(g){const items=[
  {
    "id": "0",
    "title": {
      "zh": "平胡",
      "tw": "平胡",
      "en": "All Sequences"
    },
    "fan": "1",
    "description": {
      "zh": "四个顺子加一对；此参考允许字牌将。",
      "tw": "四個順子加一對；此參考允許字牌將。",
      "en": "Four sequences and a pair; this reference permits an honour pair."
    }
  },
  {
    "id": "1",
    "title": {
      "zh": "自摸",
      "tw": "自摸",
      "en": "Self-Draw"
    },
    "fan": "1",
    "description": {
      "zh": "胡牌张由自己摸得。",
      "tw": "胡牌張由自己摸得。",
      "en": "Draw the winning tile yourself."
    }
  },
  {
    "id": "2",
    "title": {
      "zh": "三元牌",
      "tw": "三元牌",
      "en": "Dragon set"
    },
    "fan": "1",
    "description": {
      "zh": "中、发、白每个成立刻子或杠各计一番。",
      "tw": "中、發、白每個成立刻子或槓各計一番。",
      "en": "Each completed dragon triplet or kong adds one faan."
    }
  },
  {
    "id": "3",
    "title": {
      "zh": "门风／圈风",
      "tw": "門風／圈風",
      "en": "Seat / round wind"
    },
    "fan": "1",
    "description": {
      "zh": "对应风牌刻子或杠各一番；重叠计两番。",
      "tw": "對應風牌刻子或槓各一番；重疊計兩番。",
      "en": "Matching wind sets add one each; a double match adds two."
    }
  },
  {
    "id": "4",
    "title": {
      "zh": "门前清（无花路线）",
      "tw": "門前清（無花路線）",
      "en": "Concealed Hand — no flowers"
    },
    "fan": "1",
    "description": {
      "zh": "胡牌前没有吃、碰或任何杠；只在无花规则计。",
      "tw": "胡牌前沒有吃、碰或任何槓；只在無花規則計。",
      "en": "No chow, pung or any kong; available only in the no-flower rules."
    }
  },
  {
    "id": "5",
    "title": {
      "zh": "花幺",
      "tw": "花么",
      "en": "Mixed Terminals and Honours"
    },
    "fan": "1",
    "description": {
      "zh": "只用一、九和字牌；另外可加对对胡。",
      "tw": "只用一、九和字牌；另外可加對對胡。",
      "en": "Only terminals and honours; All Triplets can also add."
    }
  },
  {
    "id": "6",
    "title": {
      "zh": "抢杠",
      "tw": "搶槓",
      "en": "Robbing a Kong"
    },
    "fan": "1",
    "description": {
      "zh": "一般可抢加杠；十三幺有暗杠例外。支付按特别规则。",
      "tw": "一般可搶加槓；十三么有暗槓例外。支付按特別規則。",
      "en": "Normally rob an added kong; Thirteen Orphans has a concealed-kong exception. Special settlement applies."
    }
  },
  {
    "id": "7",
    "title": {
      "zh": "杠上自摸",
      "tw": "槓上自摸",
      "en": "Win on Kong Replacement"
    },
    "fan": "1",
    "description": {
      "zh": "紧接杠后补牌自摸；补花不是此项。",
      "tw": "緊接槓後補牌自摸；補花不是此項。",
      "en": "Win directly on a kong replacement, not a flower replacement."
    }
  },
  {
    "id": "8",
    "title": {
      "zh": "海底捞月",
      "tw": "海底撈月",
      "en": "Last-Tile Self-Draw"
    },
    "fan": "1",
    "description": {
      "zh": "自摸牌墙最后一张；可另计自摸。",
      "tw": "自摸牌牆最後一張；可另計自摸。",
      "en": "Self-draw the last wall tile; ordinary Self-Draw may also add."
    }
  },
  {
    "id": "9",
    "title": {
      "zh": "混一色",
      "tw": "混一色",
      "en": "Half Flush"
    },
    "fan": "3",
    "description": {
      "zh": "一门数牌加字牌的完整胡牌。",
      "tw": "一門數牌加字牌的完整胡牌。",
      "en": "One numbered suit together with honours."
    }
  },
  {
    "id": "10",
    "title": {
      "zh": "对对胡",
      "tw": "對對胡",
      "en": "All Triplets"
    },
    "fan": "3",
    "description": {
      "zh": "四组刻子或杠加一对，没有顺子。",
      "tw": "四組刻子或槓加一對，沒有順子。",
      "en": "Four triplets or kongs and a pair, with no sequences."
    }
  },
  {
    "id": "11",
    "title": {
      "zh": "小三元",
      "tw": "小三元",
      "en": "Little Three Dragons"
    },
    "fan": "3+2",
    "description": {
      "zh": "两组三元刻子或杠，另一三元牌作将；加两组三元共五番。",
      "tw": "兩組三元刻子或槓，另一三元牌作將；加兩組三元共五番。",
      "en": "Two dragon sets and the third dragon as a pair; the two dragon faan make five in total."
    }
  },
  {
    "id": "12",
    "title": {
      "zh": "大三元",
      "tw": "大三元",
      "en": "Big Three Dragons"
    },
    "fan": "5+3",
    "description": {
      "zh": "三种三元牌均成刻子或杠；基础五加三，共八番再算其他项。",
      "tw": "三種三元牌均成刻子或槓；基礎五加三，共八番再算其他項。",
      "en": "Three dragon sets; base five plus three dragon faan makes eight before other qualifying additions."
    }
  },
  {
    "id": "13",
    "title": {
      "zh": "清一色",
      "tw": "清一色",
      "en": "Full Flush"
    },
    "fan": "7",
    "description": {
      "zh": "完整胡牌只有一门数牌，不含字牌。",
      "tw": "完整胡牌只有一門數牌，不含字牌。",
      "en": "A complete hand in one numbered suit, without honours."
    }
  },
  {
    "id": "14",
    "title": {
      "zh": "全字牌",
      "tw": "全字牌",
      "en": "All Honours"
    },
    "fan": "10",
    "description": {
      "zh": "完整胡牌全部由字牌组成。",
      "tw": "完整胡牌全部由字牌組成。",
      "en": "A complete hand made only of honours."
    }
  },
  {
    "id": "15",
    "title": {
      "zh": "小四喜",
      "tw": "小四喜",
      "en": "Little Four Winds"
    },
    "fan": "10",
    "description": {
      "zh": "三种风牌成刻子或杠，第四种风牌作将。",
      "tw": "三種風牌成刻子或槓，第四種風牌作將。",
      "en": "Three wind sets with the fourth wind as the pair."
    }
  },
  {
    "id": "16",
    "title": {
      "zh": "大四喜",
      "tw": "大四喜",
      "en": "Big Four Winds"
    },
    "fan": "10",
    "description": {
      "zh": "四种风牌都成刻子或杠。",
      "tw": "四種風牌都成刻子或槓。",
      "en": "A set in each of the four winds."
    }
  },
  {
    "id": "17",
    "title": {
      "zh": "四暗刻",
      "tw": "四暗刻",
      "en": "Four Concealed Triplets"
    },
    "fan": "10",
    "description": {
      "zh": "无杠的四暗刻；单钓可胡弃牌，对碰等待须自摸。",
      "tw": "無槓的四暗刻；單吊可胡棄牌，對碰等待須自摸。",
      "en": "Four concealed triplets, no kong. A single-tile pair wait may claim a discard; a double-pair wait must self-draw."
    }
  },
  {
    "id": "18",
    "title": {
      "zh": "十八罗汉",
      "tw": "十八羅漢",
      "en": "Four Kongs"
    },
    "fan": "10",
    "description": {
      "zh": "完整胡牌含四个已声明的杠。",
      "tw": "完整胡牌含四個已聲明的槓。",
      "en": "A complete hand with four declared kongs."
    }
  },
  {
    "id": "19",
    "title": {
      "zh": "清幺九",
      "tw": "清么九",
      "en": "All Terminals"
    },
    "fan": "10",
    "description": {
      "zh": "完整胡牌全部是一或九的数牌，不含字牌。",
      "tw": "完整胡牌全部是一或九的數牌，不含字牌。",
      "en": "A complete hand using only numbered terminals, with no honours."
    }
  },
  {
    "id": "20",
    "title": {
      "zh": "天胡",
      "tw": "天胡",
      "en": "Heavenly Hand"
    },
    "fan": "10",
    "description": {
      "zh": "庄家配牌后直接胡牌；先暗杠不算。",
      "tw": "莊家配牌後直接胡牌；先暗槓不算。",
      "en": "East wins directly from the deal, without first declaring a concealed kong."
    }
  },
  {
    "id": "21",
    "title": {
      "zh": "地胡",
      "tw": "地胡",
      "en": "Earthly Hand"
    },
    "fan": "10",
    "description": {
      "zh": "闲家起手已听，胡东家首张弃牌；东家先暗杠不算。",
      "tw": "閒家起手已聽，胡東家首張棄牌；東家先暗槓不算。",
      "en": "A non-dealer ready from the deal wins on East’s first discard, with no preceding concealed kong by East."
    }
  },
  {
    "id": "22",
    "title": {
      "zh": "十三幺",
      "tw": "十三么",
      "en": "Thirteen Orphans"
    },
    "fan": "10",
    "description": {
      "zh": "三门一九和七种字牌各一张，加其中一种成对。",
      "tw": "三門一九和七種字牌各一張，加其中一種成對。",
      "en": "All six numbered terminals and seven honours, plus one matching duplicate."
    }
  },
  {
    "id": "23",
    "title": {
      "zh": "杠上杠自摸",
      "tw": "槓上槓自摸",
      "en": "Consecutive Kong Replacements"
    },
    "fan": "10",
    "description": {
      "zh": "连续开两杠后胡牌；补花会重置相关状态。",
      "tw": "連續開兩槓後胡牌；補花會重置相關狀態。",
      "en": "Win after consecutive kongs; a flower draw resets the relevant replacement sequence."
    }
  },
  {
    "id": "24",
    "title": {
      "zh": "九莲宝灯",
      "tw": "九子連環",
      "en": "Nine Gates"
    },
    "fan": "10",
    "description": {
      "zh": "门清同门1112345678999再加同门一张；胡弃牌须原先为九面等待。",
      "tw": "門清同門1112345678999再加同門一張；胡棄牌須原先為九面等待。",
      "en": "Concealed 1112345678999 plus a same-suit tile; a discard win requires the original nine-sided wait."
    }
  },
  {
    "id": "25",
    "title": {
      "zh": "正花（有花）",
      "tw": "正花（有花）",
      "en": "Seat Flower — flowers enabled"
    },
    "fan": "1",
    "description": {
      "zh": "对应门风编号的花牌，每张计一番。",
      "tw": "對應門風編號的花牌，每張計一番。",
      "en": "Each flower numbered for your seat adds one faan."
    }
  },
  {
    "id": "26",
    "title": {
      "zh": "无花（有花牌桌）",
      "tw": "無花（有花牌桌）",
      "en": "No Flowers — flowers enabled"
    },
    "fan": "1",
    "description": {
      "zh": "牌桌有花，但你没有花牌；不要在无花主线额外加此项。",
      "tw": "牌桌有花，但你沒有花牌；不要在無花主線額外加此項。",
      "en": "The table uses flowers but you hold none. Do not add this in the no-flower teaching route."
    }
  },
  {
    "id": "27",
    "title": {
      "zh": "一台花（有花）",
      "tw": "一台花（有花）",
      "en": "Full Flower / Season Set"
    },
    "fan": "1",
    "description": {
      "zh": "集齐四季或四种花，另外可计其中正花。",
      "tw": "集齊四季或四種花，另外可計其中正花。",
      "en": "All four seasons or flowers; the included seat flower may also score."
    }
  },
  {
    "id": "28",
    "title": {
      "zh": "小花胡（有花）",
      "tw": "小花糊（有花）",
      "en": "Seven Flowers"
    },
    "fan": "3",
    "description": {
      "zh": "七花按三番自摸，不再加自摸一番；声明和补花有特别时机。",
      "tw": "七花按三番自摸，不再加自摸一番；聲明和補花有特別時機。",
      "en": "Seven flowers settle as three-faan self-draw without adding ordinary Self-Draw; special declaration timing applies."
    }
  },
  {
    "id": "29",
    "title": {
      "zh": "大花胡（有花）",
      "tw": "大花糊（有花）",
      "en": "Eight Flowers"
    },
    "fan": "10",
    "description": {
      "zh": "集齐八花；这是花胡特别结构，按花牌规则处理。",
      "tw": "集齊八花；這是花糊特別結構，按花牌規則處理。",
      "en": "Collect all eight flowers; follow the special flower-win rules."
    }
  }
];g.MahjongHKReference=items;if(typeof module!=="undefined"&&module.exports)module.exports=items;})(typeof globalThis!=="undefined"?globalThis:window);
