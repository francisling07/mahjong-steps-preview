/* Visual tile example hands for Faan & Pattern References across all four Mahjong styles:
   - HK (30 reference entries: '0'..'29')
   - MCR (all 81 official fans: 1..81, strictly using '和' terminology)
   - Sichuan Blood Battle (core patterns, extras & kong types)
   - American Mah Jongg (original teaching card lines & Joker rules)
   Dual-loaded: browser global `MahjongFanExamples` + Node CommonJS `module.exports`. */
(function (g) {
  'use strict';

  const T = (zh, tw, en) => ({ zh, tw, en });
  const ex = (groups, winTile, tag) => {
    const out = { groups };
    if (winTile) out.winTile = winTile;
    if (tag) out.tag = tag;
    return out;
  };

  // Hong Kong Reference (30 entries matching course/reference-data.js ids '0'..'29')
  const hk = {
    '0': ex([['m1', 'm2', 'm3'], ['p2', 'p3', 'p4'], ['s5', 's6', 's7'], ['m7', 'm8', 'm9'], ['z1', 'z1']]),
    '1': ex([['m2', 'm3', 'm4'], ['p3', 'p4', 'p5'], ['s6', 's7', 's8'], ['z5', 'z5', 'z5'], ['p9', 'p9']], 'p9', T('自摸胡牌张', '自摸胡牌張', 'Self-drawn winning tile')),
    '2': ex([['z5', 'z5', 'z5'], ['m2', 'm3', 'm4'], ['p4', 'p5', 'p6'], ['s6', 's7', 's8'], ['m9', 'm9']], null, T('红中刻子 +1 番（发/白同）', '紅中刻子 +1 番（發/白同）', 'Red Dragon set +1 faan (Green/White same)')),
    '3': ex([['z1', 'z1', 'z1'], ['m1', 'm2', 'm3'], ['p4', 'p5', 'p6'], ['s7', 's8', 's9'], ['p2', 'p2']], null, T('东圈东家：东风刻计两番', '東圈東家：東風刻計兩番', 'East round & seat: East pung adds 2')),
    '4': ex([['m2', 'm3', 'm4'], ['m6', 'm7', 'm8'], ['p3', 'p4', 'p5'], ['s5', 's6', 's7'], ['s9', 's9']], null, T('全程无吃、碰、杠', '全程無吃、碰、槓', 'No chows, pungs or kongs')),
    '5': ex([['m1', 'm1', 'm1'], ['p9', 'p9', 'p9'], ['s1', 's1', 's1'], ['z1', 'z1', 'z1'], ['z5', 'z5']]),
    '6': ex([['m1', 'm2', 'm3'], ['p2', 'p3', 'p4'], ['s4', 's5', 's6'], ['z6', 'z6', 'z6'], ['m5', 'm5']], 'm5', T('抢他家五万加杠成胡', '搶他家五萬加槓成胡', 'Robbing an added kong of 5 Crak')),
    '7': ex([['m8', 'm8', 'm8', 'm8'], ['p2', 'p3', 'p4'], ['s3', 's4', 's5'], ['z5', 'z5', 'z5'], ['p7', 'p7']], 'p7', T('开杠补牌即自摸七筒', '開槓補牌即自摸七筒', 'Self-draw 7 Dot directly after kong')),
    '8': ex([['m3', 'm4', 'm5'], ['p5', 'p6', 'p7'], ['s2', 's3', 's4'], ['z7', 'z7', 'z7'], ['s8', 's8']], 's8', T('摸起牌墙最后一张成胡', '摸起牌牆最後一張成胡', 'Drawn from the final wall tile')),
    '9': ex([['p1', 'p2', 'p3'], ['p4', 'p5', 'p6'], ['p7', 'p8', 'p9'], ['z5', 'z5', 'z5'], ['z1', 'z1']]),
    '10': ex([['m2', 'm2', 'm2'], ['p5', 'p5', 'p5'], ['s8', 's8', 's8'], ['z2', 'z2', 'z2'], ['m7', 'm7']]),
    '11': ex([['z5', 'z5', 'z5'], ['z6', 'z6', 'z6'], ['m2', 'm3', 'm4'], ['p6', 'p7', 'p8'], ['z7', 'z7']]),
    '12': ex([['z5', 'z5', 'z5'], ['z6', 'z6', 'z6'], ['z7', 'z7', 'z7'], ['m3', 'm4', 'm5'], ['p8', 'p8']]),
    '13': ex([['m1', 'm2', 'm3'], ['m4', 'm5', 'm6'], ['m7', 'm8', 'm9'], ['m2', 'm2', 'm2'], ['m5', 'm5']]),
    '14': ex([['z1', 'z1', 'z1'], ['z2', 'z2', 'z2'], ['z5', 'z5', 'z5'], ['z6', 'z6', 'z6'], ['z7', 'z7']]),
    '15': ex([['z1', 'z1', 'z1'], ['z2', 'z2', 'z2'], ['z3', 'z3', 'z3'], ['m4', 'm5', 'm6'], ['z4', 'z4']]),
    '16': ex([['z1', 'z1', 'z1'], ['z2', 'z2', 'z2'], ['z3', 'z3', 'z3'], ['z4', 'z4', 'z4'], ['p5', 'p5']]),
    '17': ex([['m3', 'm3', 'm3'], ['p6', 'p6', 'p6'], ['s2', 's2', 's2'], ['z5', 'z5', 'z5'], ['m9', 'm9']], 'm9', T('四组皆暗刻无碰杠', '四組皆暗刻無碰槓', 'All four triplets concealed')),
    '18': ex([['m1', 'm1', 'm1', 'm1'], ['p4', 'p4', 'p4', 'p4'], ['s7', 's7', 's7', 's7'], ['z5', 'z5', 'z5', 'z5'], ['m9', 'm9']]),
    '19': ex([['m1', 'm1', 'm1'], ['m9', 'm9', 'm9'], ['p1', 'p1', 'p1'], ['s9', 's9', 's9'], ['p9', 'p9']]),
    '20': ex([['m1', 'm2', 'm3'], ['p4', 'p5', 'p6'], ['s7', 's8', 's9'], ['z1', 'z1', 'z1'], ['m5', 'm5']], null, T('庄家起手 14 张直接胡', '莊家起手 14 張直接胡', 'Dealer wins immediately on initial 14 tiles')),
    '21': ex([['m2', 'm3', 'm4'], ['p5', 'p6', 'p7'], ['s3', 's4', 's5'], ['z6', 'z6', 'z6'], ['p8', 'p8']], 'p8', T('闲家胡东家首张弃牌', '閒家胡東家首張棄牌', 'Non-dealer wins on East’s very first discard')),
    '22': ex([['m1', 'm9', 'p1', 'p9', 's1', 's9'], ['z1', 'z2', 'z3', 'z4', 'z5', 'z6', 'z7'], ['z7']]),
    '23': ex([['m2', 'm2', 'm2', 'm2'], ['p5', 'p5', 'p5', 'p5'], ['s3', 's4', 's5'], ['z5', 'z5', 'z5'], ['s9', 's9']], 's9', T('连续两杠后补牌自摸', '連續兩槓後補牌自摸', 'Win on second consecutive kong replacement')),
    '24': ex([['m1', 'm1', 'm1', 'm2', 'm3', 'm4', 'm5', 'm6', 'm7', 'm8', 'm9', 'm9', 'm9'], ['m5']], 'm5'),
    '25': ex([['f1'], ['f5']], null, T('东家正花：春（1）、梅（1）', '東家正花：春（1）、梅（1）', 'East seat flowers: Spring (1) & Plum (1)')),
    '26': ex([['m1', 'm2', 'm3'], ['p4', 'p5', 'p6'], ['s7', 's8', 's9'], ['z5', 'z5', 'z5'], ['m8', 'm8']], null, T('有花牌桌下花区为 0 张', '有花牌桌下花區為 0 張', 'Zero flowers collected on a flower-enabled table')),
    '27': ex([['f1', 'f2', 'f3', 'f4']], null, T('集齐春夏秋冬（或梅兰竹菊）', '集齊春夏秋冬（或梅蘭竹菊）', 'All four seasons (or all four flowers)')),
    '28': ex([['f1', 'f2', 'f3', 'f4'], ['f5', 'f6', 'f7']], null, T('集齐任意七张花牌', '集齊任意七張花牌', 'Any seven flower/season tiles')),
    '29': ex([['f1', 'f2', 'f3', 'f4'], ['f5', 'f6', 'f7', 'f8']], null, T('集齐全部八张花牌', '集齊全部八張花牌', 'All eight flower and season tiles'))
  };

  // Chinese Official MCR (all 81 official fans: 1..81, strictly '和' terminology)
  const mcr = {
    1: ex([['z1', 'z1', 'z1'], ['z2', 'z2', 'z2'], ['z3', 'z3', 'z3'], ['z4', 'z4', 'z4'], ['m5', 'm5']]),
    2: ex([['z5', 'z5', 'z5'], ['z6', 'z6', 'z6'], ['z7', 'z7', 'z7'], ['m2', 'm3', 'm4'], ['p8', 'p8']]),
    3: ex([['s2', 's3', 's4'], ['s2', 's3', 's4'], ['s6', 's6', 's6'], ['s8', 's8', 's8'], ['z6', 'z6']]),
    4: ex([['m1', 'm1', 'm1', 'm2', 'm3', 'm4', 'm5', 'm6', 'm7', 'm8', 'm9', 'm9', 'm9'], ['m5']], 'm5'),
    5: ex([['m2', 'm2', 'm2', 'm2'], ['p5', 'p5', 'p5', 'p5'], ['s8', 's8', 's8', 's8'], ['z5', 'z5', 'z5', 'z5'], ['m9', 'm9']]),
    6: ex([['p2', 'p2'], ['p3', 'p3'], ['p4', 'p4'], ['p5', 'p5'], ['p6', 'p6'], ['p7', 'p7'], ['p8', 'p8']]),
    7: ex([['m1', 'm9', 'p1', 'p9', 's1', 's9'], ['z1', 'z2', 'z3', 'z4', 'z5', 'z6', 'z7'], ['m1']]),
    8: ex([['m1', 'm1', 'm1'], ['m9', 'm9', 'm9'], ['p1', 'p1', 'p1'], ['s9', 's9', 's9'], ['p9', 'p9']]),
    9: ex([['z1', 'z1', 'z1'], ['z2', 'z2', 'z2'], ['z3', 'z3', 'z3'], ['p4', 'p5', 'p6'], ['z4', 'z4']]),
    10: ex([['z5', 'z5', 'z5'], ['z6', 'z6', 'z6'], ['m3', 'm4', 'm5'], ['s6', 's7', 's8'], ['z7', 'z7']]),
    11: ex([['z1', 'z1', 'z1'], ['z2', 'z2', 'z2'], ['z5', 'z5', 'z5'], ['z6', 'z6', 'z6'], ['z7', 'z7']]),
    12: ex([['m2', 'm2', 'm2'], ['p4', 'p4', 'p4'], ['s7', 's7', 's7'], ['z5', 'z5', 'z5'], ['m9', 'm9']], 'm9', T('四副皆为暗刻', '四副皆為暗刻', 'All four pungs concealed')),
    13: ex([['m1', 'm2', 'm3'], ['m1', 'm2', 'm3'], ['m7', 'm8', 'm9'], ['m7', 'm8', 'm9'], ['m5', 'm5']]),
    14: ex([['m2', 'm3', 'm4'], ['m2', 'm3', 'm4'], ['m2', 'm3', 'm4'], ['m2', 'm3', 'm4'], ['p5', 'p5']]),
    15: ex([['p3', 'p3', 'p3'], ['p4', 'p4', 'p4'], ['p5', 'p5', 'p5'], ['p6', 'p6', 'p6'], ['z1', 'z1']]),
    16: ex([['m1', 'm2', 'm3'], ['m2', 'm3', 'm4'], ['m3', 'm4', 'm5'], ['m4', 'm5', 'm6'], ['z5', 'z5']]),
    17: ex([['m1', 'm1', 'm1', 'm1'], ['p4', 'p4', 'p4', 'p4'], ['s7', 's7', 's7', 's7'], ['m5', 'm6', 'm7'], ['z2', 'z2']]),
    18: ex([['m1', 'm1', 'm1'], ['p9', 'p9', 'p9'], ['s1', 's1', 's1'], ['z1', 'z1', 'z1'], ['z5', 'z5']]),
    19: ex([['m2', 'm2'], ['m5', 'm5'], ['p3', 'p3'], ['p8', 'p8'], ['s4', 's4'], ['s7', 's7'], ['z1', 'z1']]),
    20: ex([['m1', 'm4', 'm7'], ['p2', 'p5'], ['s3', 's6'], ['z1', 'z2', 'z3', 'z4', 'z5', 'z6', 'z7']]),
    21: ex([['m2', 'm2', 'm2'], ['p4', 'p4', 'p4'], ['s6', 's6', 's6'], ['m8', 'm8', 'm8'], ['p6', 'p6']]),
    22: ex([['s1', 's2', 's3'], ['s4', 's5', 's6'], ['s7', 's8', 's9'], ['s2', 's2', 's2'], ['s5', 's5']]),
    23: ex([['p4', 'p5', 'p6'], ['p4', 'p5', 'p6'], ['p4', 'p5', 'p6'], ['m2', 'm3', 'm4'], ['z6', 'z6']]),
    24: ex([['s5', 's5', 's5'], ['s6', 's6', 's6'], ['s7', 's7', 's7'], ['m2', 'm3', 'm4'], ['p9', 'p9']]),
    25: ex([['m7', 'm8', 'm9'], ['p7', 'p8', 'p9'], ['s7', 's8', 's9'], ['m8', 'm8', 'm8'], ['p7', 'p7']]),
    26: ex([['m4', 'm5', 'm6'], ['p4', 'p5', 'p6'], ['s4', 's5', 's6'], ['m5', 'm5', 'm5'], ['p6', 'p6']]),
    27: ex([['m1', 'm2', 'm3'], ['p1', 'p2', 'p3'], ['s1', 's2', 's3'], ['m2', 'm2', 'm2'], ['p3', 'p3']]),
    28: ex([['m1', 'm2', 'm3'], ['m4', 'm5', 'm6'], ['m7', 'm8', 'm9'], ['p3', 'p4', 'p5'], ['s8', 's8']]),
    29: ex([['m1', 'm2', 'm3'], ['m7', 'm8', 'm9'], ['p1', 'p2', 'p3'], ['p7', 'p8', 'p9'], ['s5', 's5']]),
    30: ex([['m2', 'm3', 'm4'], ['m3', 'm4', 'm5'], ['m4', 'm5', 'm6'], ['p7', 'p8', 'p9'], ['z5', 'z5']]),
    31: ex([['m3', 'm4', 'm5'], ['p4', 'p5', 'p6'], ['s5', 's6', 's7'], ['m5', 'm5', 'm5'], ['p5', 'p5']]),
    32: ex([['m6', 'm6', 'm6'], ['p6', 'p6', 'p6'], ['s6', 's6', 's6'], ['m2', 'm3', 'm4'], ['z1', 'z1']]),
    33: ex([['m3', 'm3', 'm3'], ['p5', 'p5', 'p5'], ['s8', 's8', 's8'], ['m4', 'm5', 'm6'], ['p2', 'p2']], null, T('三副暗刻不靠碰牌', '三副暗刻不靠碰牌', 'Three concealed pungs')),
    34: ex([['m1', 'm4', 'm7'], ['p2', 'p5', 'p8'], ['s3', 's6', 's9'], ['z1', 'z2', 'z3', 'z5', 'z6']]),
    35: ex([['m1', 'm4', 'm7'], ['p2', 'p5', 'p8'], ['s3', 's6', 's9'], ['m5', 'm5', 'm5'], ['z6', 'z6']]),
    36: ex([['m6', 'm7', 'm8'], ['p7', 'p8', 'p9'], ['s6', 's7', 's8'], ['m9', 'm9', 'm9'], ['p6', 'p6']]),
    37: ex([['m1', 'm2', 'm3'], ['p2', 'p3', 'p4'], ['s1', 's2', 's3'], ['m4', 'm4', 'm4'], ['p1', 'p1']]),
    38: ex([['z1', 'z1', 'z1'], ['z2', 'z2', 'z2'], ['z3', 'z3', 'z3'], ['m4', 'm5', 'm6'], ['p7', 'p7']]),
    39: ex([['m1', 'm2', 'm3'], ['p4', 'p5', 'p6'], ['s7', 's8', 's9'], ['p2', 'p3', 'p4'], ['z5', 'z5']]),
    40: ex([['p1', 'p2', 'p3'], ['p2', 'p3', 'p4'], ['s4', 's5', 's6'], ['p8', 'p8', 'p8'], ['z7', 'z7']]),
    41: ex([['m3', 'm4', 'm5'], ['p3', 'p4', 'p5'], ['s3', 's4', 's5'], ['m7', 'm8', 'm9'], ['z2', 'z2']]),
    42: ex([['m4', 'm4', 'm4'], ['p5', 'p5', 'p5'], ['s6', 's6', 's6'], ['m1', 'm2', 'm3'], ['p8', 'p8']]),
    43: ex([['m1', 'm2', 'm3'], ['p4', 'p5', 'p6'], ['s5', 's5', 's5'], ['s6', 's7', 's8'], ['z2', 'z2']], 's6', T('明副露+非自摸，数不出其他番', '明副露+非自摸，數不出其他番', 'Exposed meld + discard win with zero other fans')),
    44: ex([['m2', 'm3', 'm4'], ['p5', 'p6', 'p7'], ['s3', 's4', 's5'], ['z5', 'z5', 'z5'], ['m8', 'm8']], 'm8', T('自摸牌墙最后一张成和', '自摸牌牆最後一張成和', 'Self-draw on the very last wall tile')),
    45: ex([['m2', 'm3', 'm4'], ['p5', 'p6', 'p7'], ['s3', 's4', 's5'], ['z6', 'z6', 'z6'], ['p9', 'p9']], 'p9', T('和摸尽牌墙后最后一张弃牌', '和摸盡牌牆後最後一張棄牌', 'Claiming the final discard after wall exhaustion')),
    46: ex([['m7', 'm7', 'm7', 'm7'], ['p2', 'p3', 'p4'], ['s4', 's5', 's6'], ['z5', 'z5', 'z5'], ['m3', 'm3']], 'm3', T('开杠补牌即成和', '開槓補牌即成和', 'Winning directly on the kong replacement tile')),
    47: ex([['m1', 'm2', 'm3'], ['p3', 'p4', 'p5'], ['s6', 's7', 's8'], ['z7', 'z7', 'z7'], ['m5', 'm5']], 'm5', T('抢他家加杠的五万成和', '搶他家加槓的五萬成和', 'Robbing another player’s added kong')),
    48: ex([['m3', 'm3', 'm3', 'm3'], ['p6', 'p6', 'p6', 'p6'], ['s2', 's3', 's4'], ['m7', 'm8', 'm9'], ['z1', 'z1']], null, T('两个暗杠', '兩個暗槓', 'Two concealed kongs')),
    49: ex([['m2', 'm2', 'm2'], ['p4', 'p4', 'p4'], ['s7', 's7', 's7'], ['z5', 'z5', 'z5'], ['m9', 'm9']]),
    50: ex([['m1', 'm2', 'm3'], ['m4', 'm5', 'm6'], ['m7', 'm8', 'm9'], ['z1', 'z1', 'z1'], ['z5', 'z5']]),
    51: ex([['m2', 'm3', 'm4'], ['p3', 'p4', 'p5'], ['s4', 's5', 's6'], ['m8', 'm8', 'm8'], ['z7', 'z7']]),
    52: ex([['m2', 'm3', 'm4'], ['p5', 'p6', 'p7'], ['s3', 's4', 's5'], ['z1', 'z1', 'z1'], ['z5', 'z5']]),
    53: ex([['m2', 'm3', 'm4'], ['p5', 'p6', 'p7'], ['s4', 's4', 's4'], ['z6', 'z6', 'z6'], ['m8', 'm8']], 'm8', T('四副全靠吃碰明杠，单和弃牌作将', '四副全靠吃碰明槓，單和棄牌作將', 'All four melds exposed; win on discard for the pair')),
    54: ex([['z5', 'z5', 'z5'], ['z6', 'z6', 'z6'], ['m2', 'm3', 'm4'], ['p5', 'p6', 'p7'], ['s8', 's8']]),
    55: ex([['m1', 'm2', 'm3'], ['p7', 'p8', 'p9'], ['s1', 's1', 's1'], ['z5', 'z5', 'z5'], ['z1', 'z1']]),
    56: ex([['m2', 'm3', 'm4'], ['p3', 'p4', 'p5'], ['s6', 's7', 's8'], ['m8', 'm8', 'm8'], ['z2', 'z2']], 'z2', T('全程门前清并自摸成和', '全程門前清並自摸成和', 'Fully concealed hand finished by self-draw')),
    57: ex([['m4', 'm4', 'm4', 'm4'], ['s7', 's7', 's7', 's7'], ['p2', 'p3', 'p4'], ['m6', 'm7', 'm8'], ['z3', 'z3']], null, T('两个明杠', '兩個明槓', 'Two exposed kongs')),
    58: ex([['m2', 'm3', 'm4'], ['p3', 'p4', 'p5'], ['s5', 's6', 's7'], ['z5', 'z5', 'z5'], ['m9', 'm9']], 'm9', T('桌面已亮明三张九万，和第四张', '桌面已亮明三張九萬，和第四張', 'Winning on the 4th and final visible copy')),
    59: ex([['z5', 'z5', 'z5'], ['m2', 'm3', 'm4'], ['p5', 'p6', 'p7'], ['s3', 's4', 's5'], ['m8', 'm8']]),
    60: ex([['z1', 'z1', 'z1'], ['m2', 'm3', 'm4'], ['p5', 'p6', 'p7'], ['s6', 's7', 's8'], ['p3', 'p3']], null, T('东圈时有东风刻子', '東圈時有東風刻子', 'East pung during East round')),
    61: ex([['z2', 'z2', 'z2'], ['m2', 'm3', 'm4'], ['p5', 'p6', 'p7'], ['s6', 's7', 's8'], ['p3', 'p3']], null, T('南家有南风刻子', '南家有南風刻子', 'South pung when sitting South')),
    62: ex([['m2', 'm3', 'm4'], ['p4', 'p5', 'p6'], ['s6', 's7', 's8'], ['m7', 'm7', 'm7'], ['z3', 'z3']], 'z3', T('无吃碰明杠，和别家弃牌', '無吃碰明槓，和別家棄牌', 'No exposed calls, winning on a discard')),
    63: ex([['m1', 'm2', 'm3'], ['p3', 'p4', 'p5'], ['s6', 's7', 's8'], ['m5', 'm6', 'm7'], ['p8', 'p8']]),
    64: ex([['m4', 'm4', 'm4'], ['m3', 'm4', 'm5'], ['p2', 'p3', 'p4'], ['s6', 's7', 's8'], ['z1', 'z1']], null, T('四张四万分属刻子与顺子（非杠）', '四張四萬分屬刻子與順子（非槓）', 'All four 4 Craks used in pung + chow (not a kong)')),
    65: ex([['m5', 'm5', 'm5'], ['p5', 'p5', 'p5'], ['s2', 's3', 's4'], ['m7', 'm8', 'm9'], ['z2', 'z2']]),
    66: ex([['m4', 'm4', 'm4'], ['p7', 'p7', 'p7'], ['s2', 's3', 's4'], ['m6', 'm7', 'm8'], ['z3', 'z3']], null, T('两副暗刻', '兩副暗刻', 'Two concealed pungs')),
    67: ex([['m6', 'm6', 'm6', 'm6'], ['p2', 'p3', 'p4'], ['s5', 's6', 's7'], ['m1', 'm2', 'm3'], ['z4', 'z4']], null, T('自抓四张扣下开暗杠', '自抓四張扣下開暗槓', 'One concealed kong')),
    68: ex([['m2', 'm3', 'm4'], ['p3', 'p4', 'p5'], ['s6', 's7', 's8'], ['m6', 'm6', 'm6'], ['p7', 'p7']]),
    69: ex([['m3', 'm4', 'm5'], ['m3', 'm4', 'm5'], ['p6', 'p7', 'p8'], ['s2', 's3', 's4'], ['z1', 'z1']]),
    70: ex([['m4', 'm5', 'm6'], ['p4', 'p5', 'p6'], ['s2', 's3', 's4'], ['m8', 'm8', 'm8'], ['z2', 'z2']]),
    71: ex([['m2', 'm3', 'm4'], ['m5', 'm6', 'm7'], ['p3', 'p4', 'p5'], ['s7', 's7', 's7'], ['z3', 'z3']]),
    72: ex([['p1', 'p2', 'p3'], ['p7', 'p8', 'p9'], ['m4', 'm5', 'm6'], ['s5', 's5', 's5'], ['z4', 'z4']]),
    73: ex([['m1', 'm1', 'm1'], ['p3', 'p4', 'p5'], ['s6', 's7', 's8'], ['m4', 'm5', 'm6'], ['p7', 'p7']]),
    74: ex([['p8', 'p8', 'p8', 'p8'], ['m2', 'm3', 'm4'], ['s4', 's5', 's6'], ['m7', 'm8', 'm9'], ['z2', 'z2']], null, T('一个明杠', '一個明槓', 'One exposed kong')),
    75: ex([['m2', 'm3', 'm4'], ['m6', 'm7', 'm8'], ['p3', 'p4', 'p5'], ['z5', 'z5', 'z5'], ['p9', 'p9']], null, T('不含条子（缺一门）', '不含條子（缺一門）', 'Missing bamboo suit')),
    76: ex([['m2', 'm3', 'm4'], ['p5', 'p6', 'p7'], ['s3', 's4', 's5'], ['s8', 's8', 's8'], ['m6', 'm6']]),
    77: ex([['m1', 'm2', 'm3'], ['p4', 'p5', 'p6'], ['s2', 's3', 's4'], ['z5', 'z5', 'z5'], ['p8', 'p8']], 'm3', T('一二万单等边张 三万', '一二萬單等邊張 三萬', '1–2 Crak waiting solely on edge 3 Crak')),
    78: ex([['m4', 'm5', 'm6'], ['p2', 'p3', 'p4'], ['s7', 's8', 's9'], ['z6', 'z6', 'z6'], ['m2', 'm2']], 'm5', T('四六万单等坎张 五万', '四六萬單等坎張 五萬', '4–6 Crak waiting solely on middle 5 Crak')),
    79: ex([['m2', 'm3', 'm4'], ['p5', 'p6', 'p7'], ['s3', 's4', 's5'], ['z7', 'z7', 'z7'], ['p9', 'p9']], 'p9', T('单钓九筒成将', '單釣九筒成將', 'Single wait completing the 9 Dot pair')),
    80: ex([['m2', 'm3', 'm4'], ['p4', 'p5', 'p6'], ['s6', 's7', 's8'], ['m9', 'm9', 'm9'], ['p3', 'p3']], 'p3', T('自己摸进成和张', '自己摸進成和張', 'Self-drawn winning tile')),
    81: ex([['f1', 'f2', 'f5']], null, T('和牌后每张花牌另加 1 分', '和牌後每張花牌另加 1 分', 'Each flower adds 1 point after qualifying'))
  };

  // Sichuan Blood Battle reference cards (T/TFMJ 01-2024 teaching subset)
  const sichuan = [
    {
      id: 'sc-ordinary',
      title: T('平和（基本胡）', '平和（基本胡）', 'Ordinary Win'),
      value: T('1 分（0 番）', '1 分（0 番）', '1 pt (0 fan)'),
      description: T('已打缺定缺花色，由四组顺子/刻子加一对将组成的基础胡牌。', '已打缺定缺花色，由四組順子/刻子加一對將組成的基礎胡牌。', 'Missing suit cleared; four standard melds plus a pair.'),
      example: ex([['m2', 'm3', 'm4'], ['m6', 'm7', 'm8'], ['p3', 'p4', 'p5'], ['p7', 'p7', 'p7'], ['m9', 'm9']], null, T('例：定缺条子', '例：定缺條子', 'Example: Bamboo voided'))
    },
    {
      id: 'sc-all-triplets',
      title: T('大对子（碰碰胡）', '大對子（碰碰胡）', 'All Triplets'),
      value: T('2 分（1 番）', '2 分（1 番）', '2 pts (1 fan)'),
      description: T('四组全部由刻子或杠组成，加一对将，不含顺子。', '四組全部由刻子或槓組成，加一對將，不含順子。', 'Four pungs or kongs plus a pair, with no sequences.'),
      example: ex([['m2', 'm2', 'm2'], ['m7', 'm7', 'm7'], ['p3', 'p3', 'p3'], ['p8', 'p8', 'p8'], ['m5', 'm5']])
    },
    {
      id: 'sc-full-flush',
      title: T('清一色', '清一色', 'Full Flush'),
      value: T('4 分（2 番）', '4 分（2 番）', '4 pts (2 fan)'),
      description: T('整副胡牌全部属于同一门数牌（万、筒或条）。', '整副胡牌全部屬於同一門數牌（萬、筒或條）。', 'All tiles in the winning hand belong to a single suit.'),
      example: ex([['p1', 'p2', 'p3'], ['p4', 'p5', 'p6'], ['p7', 'p8', 'p9'], ['p2', 'p2', 'p2'], ['p5', 'p5']])
    },
    {
      id: 'sc-seven-pairs',
      title: T('七对', '七對', 'Seven Pairs'),
      value: T('4 分（2 番）', '4 分（2 番）', '4 pts (2 fan)'),
      description: T('无明牌，由七个对子组成的特殊胡牌形。', '無明牌，由七個對子組成的特殊胡牌形。', 'Concealed hand made of seven pairs.'),
      example: ex([['m1', 'm1'], ['m4', 'm4'], ['m7', 'm7'], ['p2', 'p2'], ['p5', 'p5'], ['p8', 'p8'], ['p9', 'p9']])
    },
    {
      id: 'sc-root',
      title: T('带根（含暗杠/明杠/四张同牌）', '帶根（含暗槓/明槓/四張同牌）', 'With Root (4 identical tiles)'),
      value: T('每根 ×2（+1 番）', '每根 ×2（+1 番）', '×2 per root (+1 fan)'),
      description: T('暗手与明牌合计每有 4 张相同牌记 1 根；每根令基本分翻倍（3 番封顶 8 分）。', '暗手與明牌合計每有 4 張相同牌記 1 根；每根令基本分翻倍（3 番封頂 8 分）。', 'Each set of 4 identical tiles (kong or in-hand) doubles base points up to the 8-point cap.'),
      example: ex([['m4', 'm4', 'm4'], ['m3', 'm4', 'm5'], ['p2', 'p3', 'p4'], ['p6', 'p7', 'p8'], ['m8', 'm8']], null, T('四张四万计 1 根', '四張四萬計 1 根', 'Four 4 Craks = 1 root'))
    },
    {
      id: 'sc-dragon-seven',
      title: T('龙七对（七对 + 带根）', '龍七對（七對 + 帶根）', 'Dragon Seven Pairs'),
      value: T('8 分（3 番封顶）', '8 分（3 番封頂）', '8 pts (capped)'),
      description: T('七对牌型中含有 4 张相同牌作两对（即七对 4 分 × 带根 2 = 8 分封顶）。', '七對牌型中含有 4 張相同牌作兩對（即七對 4 分 × 帶根 2 = 8 分封頂）。', 'Seven Pairs containing four identical tiles (4 × 2 = 8-point cap).'),
      example: ex([['m3', 'm3', 'm3', 'm3'], ['m6', 'm6'], ['p2', 'p2'], ['p4', 'p4'], ['p7', 'p7'], ['p9', 'p9']])
    },
    {
      id: 'sc-golden-hook',
      title: T('金钩钓', '金鉤釣', 'Golden Hook'),
      value: T('×2（+1 番）', '×2（+1 番）', '×2 (+1 fan)'),
      description: T('四组牌全部碰/杠公开，手里只剩一张单钓成将。', '四組牌全部碰/槓公開，手裡只剩一張單釣成將。', 'All four melds exposed; single tile waiting to complete the pair.'),
      example: ex([['m2', 'm2', 'm2'], ['m8', 'm8', 'm8'], ['p4', 'p4', 'p4'], ['p7', 'p7', 'p7'], ['p5', 'p5']], 'p5', T('四副全明牌，单钓五筒', '四副全明牌，單釣五筒', 'All four melds exposed, single wait on 5 Dot'))
    },
    {
      id: 'sc-kong-win',
      title: T('杠上花 / 杠上炮 / 抢杠 / 海底', '槓上花 / 槓上炮 / 搶槓 / 海底', 'Kong Win / Rob Kong / Last Tile'),
      value: T('每项 ×2（+1 番）', '每項 ×2（+1 番）', '×2 each (+1 fan)'),
      description: T('杠后补牌自摸、杠后弃牌点炮、抢他家绕杠或摸/胡牌墙最后一张各乘 2，封顶 8 分。', '槓後補牌自摸、槓後棄牌點炮、搶他家繞槓或摸/胡牌牆最後一張各乘 2，封頂 8 分。', 'Kong replacement draw, discard after kong, robbing an added kong, or last wall tile each double up to 8.'),
      example: ex([['s6', 's6', 's6', 's6'], ['m2', 'm3', 'm4'], ['m5', 'm6', 'm7'], ['s2', 's3', 's4'], ['m9', 'm9']], 'm9', T('开杠补摸九万即胡', '開槓補摸九萬即胡', 'Win directly on kong replacement'))
    },
    {
      id: 'sc-kong-pay',
      title: T('暗杠 / 引杠 / 绕杠 杠分', '暗槓 / 引槓 / 繞槓 槓分', 'Kong Payments'),
      value: T('暗2×各家 · 引2×点杠 · 绕1×各家', '暗2×各家 · 引2×點槓 · 繞1×各家', 'Concealed 2×all · Melded 2×1 · Added 1×all'),
      description: T('杠牌即时向未胡对手结算：暗杠每家付 2、引杠放杠者付 2、绕杠每家付 1。', '槓牌即時向未胡對手結算：暗槓每家付 2、引槓放槓者付 2、繞槓每家付 1。', 'Settled immediately with active opponents: concealed 2 each, discard-kong 2 from discarder, added 1 each.'),
      example: ex([['m5', 'm5', 'm5', 'm5'], ['p8', 'p8', 'p8', 'p8']], null, T('四张同牌成杠', '四張同牌成槓', 'Four identical tiles form a kong'))
    }
  ];

  // American Mah Jongg original teaching card lines (non-NMJL original examples)
  const american = [
    {
      id: 'am-pungs-pair',
      title: T('原创卡 A · 四组三张加一对', '原創卡 A · 四組三張加一對', 'Original A · Four Pungs & a Pair'),
      value: T('25 分（无 Joker ×2）', '25 分（無 Joker ×2）', '25 pts (×2 Jokerless)'),
      description: T('四组三张同牌（可用 Joker 替代）加一组自然对子（对子不可用 Joker）。可叫牌公开三张组。', '四組三張同牌（可用 Joker 替代）加一組自然對子（對子不可用 Joker）。可叫牌公開三張組。', 'Four pungs (jokers allowed) plus one natural pair (no jokers in pairs). Exposures allowed.'),
      example: ex([['m2', 'm2', 'm2'], ['p5', 'p5', 'j1'], ['s8', 's8', 's8'], ['z5', 'z5', 'z5'], ['m9', 'm9']])
    },
    {
      id: 'am-kongs-pungs',
      title: T('原创卡 B · 两组四张加两组三张', '原創卡 B · 兩組四張加兩組三張', 'Original B · Two Kongs & Two Pungs'),
      value: T('30 分（无 Joker ×2）', '30 分（無 Joker ×2）', '30 pts (×2 Jokerless)'),
      description: T('两组四张（Kong）配两组三张（Pung），共 14 张，无单张或对子；四张组与三张组均可用 Joker。', '兩組四張（Kong）配兩組三張（Pung），共 14 張，無單張或對子；四張組與三張組均可用 Joker。', 'Two kongs and two pungs (14 tiles total, no pair); jokers may substitute in any group.'),
      example: ex([['m4', 'm4', 'm4', 'j1'], ['p7', 'p7', 'p7', 'p7'], ['s3', 's3', 's3'], ['z6', 'z6', 'z6']])
    },
    {
      id: 'am-quint-pungs',
      title: T('原创卡 C · 一组五张加三组三张', '原創卡 C · 一組五張加三組三張', 'Original C · One Quint & Three Pungs'),
      value: T('35 分（含 Joker 必备）', '35 分（含 Joker 必備）', '35 pts (Quint uses Joker)'),
      description: T('五张同牌（Quint，因普通牌仅 4 张故必含至少 1 张 Joker）配三组三张，共 14 张。', '五張同牌（Quint，因普通牌僅 4 張故必含至少 1 張 Joker）配三組三張，共 14 張。', 'One 5-of-a-kind quint (requires at least one Joker) plus three pungs (14 tiles total).'),
      example: ex([['m8', 'm8', 'm8', 'm8', 'j1'], ['p2', 'p2', 'p2'], ['s6', 's6', 's6'], ['f1', 'f2', 'f3']], null, T('花牌在美式练习中可归入同花组', '花牌在美式練習中可歸入同花組', 'Any Flowers match together as Flower tiles'))
    },
    {
      id: 'am-seven-pairs',
      title: T('原创卡 D · 七对自然牌（暗手）', '原創卡 D · 七對自然牌（暗手）', 'Original D · Seven Natural Pairs (Concealed)'),
      value: T('50 分（限暗手无 Joker）', '50 分（限暗手無 Joker）', '50 pts (Concealed, no Jokers)'),
      description: T('七组自然对子，全程不可叫牌公开，且不能使用任何 Joker（Joker 只能用于 3 张及以上组）。', '七組自然對子，全程不可叫牌公開，且不能使用任何 Joker（Joker 只能用於 3 張及以上組）。', 'Seven natural pairs, fully concealed with zero exposures and zero jokers.'),
      example: ex([['m1', 'm1'], ['m6', 'm6'], ['p3', 'p3'], ['p8', 'p8'], ['s2', 's2'], ['s9', 's9'], ['z5', 'z5']])
    },
    {
      id: 'am-joker-swap',
      title: T('Joker 交换机制', 'Joker 交換機制', 'Joker Exchange'),
      value: T('轮到自己时可用自然牌换回', '輪到自己時可用自然牌換回', 'Swap with natural tile on your turn'),
      description: T('桌面任意一家（含自己）公开牌组里若有 Joker，轮到你出牌时可用对应自然牌换出该 Joker。', '桌面任意一家（含自己）公開牌組裡若有 Joker，輪到你出牌時可用對應自然牌換出該 Joker。', 'On your turn, exchange a matching natural tile from your hand for an exposed Joker in any meld.'),
      example: ex([['p5', 'p5', 'p5', 'j1'], ['p5']], null, T('手牌五筒可换出公开杠里的 Joker', '手牌五筒可換出公開槓裡的 Joker', '5 Dot in hand swaps for the exposed Joker'))
    }
  ];

  // Shared helper to render a static grouped tile example cleanly across all course UIs
  function renderExampleHtml(example, lang, tileFn, escFn) {
    if (!example || !Array.isArray(example.groups) || !example.groups.length) return '';
    const esc = escFn || (v => String(v ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])));
    let winMarked = false;
    const winLabel = lang === 'en' ? 'Win' : '和';
    const groupsHtml = example.groups.map(group =>
      '<span class="fan-ex-group">' + group.map(id => {
        const isWin = !winMarked && example.winTile && id === example.winTile;
        if (isWin) winMarked = true;
        return '<span class="fan-ex-tile' + (isWin ? ' is-win' : '') + '">' + tileFn(id) + (isWin ? '<small class="fan-ex-win">' + winLabel + '</small>' : '') + '</span>';
      }).join('') + '</span>'
    ).join('');
    const tagText = example.tag ? (example.tag[lang] || example.tag.zh || '') : '';
    return '<div class="fan-example"><div class="fan-ex-groups">' + groupsHtml + '</div>' + (tagText ? '<p class="fan-ex-note">' + esc(tagText) + '</p>' : '') + '</div>';
  }

  const api = { hk, mcr, sichuan, american, renderExampleHtml };
  g.MahjongFanExamples = api;
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = api;
  }
})(typeof globalThis !== 'undefined' ? globalThis : window);
