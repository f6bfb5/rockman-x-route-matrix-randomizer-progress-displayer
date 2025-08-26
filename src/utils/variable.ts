export const imgBasePath = './progress_tracker_assets/'
export const recordFilePath = './progress_report.txt'
export const imgSourceObject = {
  'x1': {
    'bosses': [
      'x1_bosses_lo.png',
      'x1_bosses_sc.png',
      'x1_bosses_aa.png',
      'x1_bosses_fm.png',
      'x1_bosses_se.png',
      'x1_bosses_sm.png',
      'x1_bosses_bk.png',
      'x1_bosses_cp.png',
    ],
    'weapon': [
      'x1_weapon_lo.png',
      'x1_weapon_sc.png',
      'x1_weapon_aa.png',
      'x1_weapon_fm.png',
      'x1_weapon_se.png',
      'x1_weapon_sm.png',
      'x1_weapon_bk.png',
      'x1_weapon_cp.png',
    ],
    'armor': [
      'x1_x_head.png',
      'x1_x_arm.png',
      'x1_x_body.png',
      'x1_x_foot.png',
      'x1_x_hadouken.png'
    ],
  },
  'x2': {
    'bosses': [
      'x2_bosses_mm.png',
      'x2_bosses_ws.png',
      'x2_bosses_bc.png',
      'x2_bosses_fs.png',
      'x2_bosses_mc.png',
      'x2_bosses_cs.png',
      'x2_bosses_oo.png',
      'x2_bosses_wg.png',
    ],
    'weapon': [
      'x2_weapon_mm.png',
      'x2_weapon_ws.png',
      'x2_weapon_bc.png',
      'x2_weapon_fs.png',
      'x2_weapon_mc.png',
      'x2_weapon_cs.png',
      'x2_weapon_oo.png',
      'x2_weapon_wg.png',
    ],
    'armor': [
      'x2_x_head.png',
      'x2_x_arm.png',
      'x2_x_body.png',
      'x2_x_foot.png',
      'x2_x_shoryuken.png'
    ],
    'zero': [
      'x2_zero_head.ico',
      'x2_zero_body.ico',
      'x2_zero_foot.ico',
    ]
  },
  'x3': {
    'bosses': [
      'x3_bosses_bh.png',
      'x3_bosses_bb.png',
      'x3_bosses_gb.png',
      'x3_bosses_ts.png',
      'x3_bosses_vc.png',
      'x3_bosses_cc.png',
      'x3_bosses_tr.png',
      'x3_bosses_nt.png',
    ],
    'weapon': [
      'x3_weapon_bh.png',
      'x3_weapon_bb.png',
      'x3_weapon_gb.png',
      'x3_weapon_ts.png',
      'x3_weapon_vc.png',
      'x3_weapon_cc.png',
      'x3_weapon_tr.png',
      'x3_weapon_nt.png',
    ],
    'armor': [
      'x3_x_head.png',
      'x3_x_arm.png',
      'x3_x_body.png',
      'x3_x_foot.png',
      'x3_x_saber.png'
    ],
    'subbosses': [
      'x3_subbosses_bff.png',
      'x3_subbosses_mbb.png',
      'x3_subbosses_vava.png'
    ],
    'ridearmor': [
      'x3_ridearmor_f.png',
      'x3_ridearmor_h.png',
      'x3_ridearmor_k.png',
      'x3_ridearmor_n.png'
    ],
  },
  'miscellaneous': {
    'hp': 'heart.png',
    'wp': 'energy.png',
    'b': 'buster.png',
    'ba': 'buster_atk.png',
    'bd': 'buster_dash.png',
    'br': 'buster_rate.png',
    'bc': 'buster_charge.gif',
    'e': 'etank.png',
    'd': 'deaths.png',
    'igf': 'igf.png',
    'sigma': 'sigma.png',
  },
  'title': {
    'x1': 'title_x1.ico',
    'x2': 'title_x2.ico',
    'x3': 'title_x3.ico',
  }
}

export const initItemStatus = {
  'x1': {
    bosses: Array(8).fill(0),
    weapon: Array(8).fill(0),
    armor: Array(5).fill(0),
    e: Array(1).fill(0),
    b: Array(5).fill(0),
  },
  'x2': {
    bosses: Array(8).fill(0),
    weapon: Array(8).fill(0),
    armor: Array(5).fill(0),
    e: Array(1).fill(0),
    b: Array(5).fill(0),
    zero: Array(3).fill(0)
  },
  'x3': {
    bosses: Array(8).fill(0),
    weapon: Array(8).fill(0),
    armor: Array(5).fill(0),
    e: Array(1).fill(0),
    b: Array(5).fill(0),
    subbosses: Array(3).fill(0),
    ridearmor: Array(4).fill(0)
  },
  'miscellaneous': {
    hp: Array(1).fill(0),
    wp: Array(1).fill(0),
    sigma: Array(1).fill(0),
    d: Array(1).fill(0),
    igf: Array(1).fill(0),
    title: Array(1).fill(0),
  },
}
export const addressMapping = {
  'x1': {
    'bosses': [
      // unlocked, beaten, changed
      // lo
      ['1ItKeyLO', '1ChLOClear'],
      // sc
      ['1ItKeySC', '1ChSCClear', '1ItStageVariedSC'],
      // aa
      ['1ItKeyAA', '1ChAAClear'],
      // bn/fm
      ['1ItKeyBN', '1ChBNClear', '1ItStageVariedBN'],
      // se
      ['1ItKeySE', '1ChSEClear'],
      // sm
      ['1ItKeySM', '1ChSMClear', '1ItStageVariedSM'],
      // bk
      ['1ItKeyBK', '1ChBKClear'],
      // ip/cp
      ['1ItKeyIP', '1ChIPClear']
    ],
    'weapon': [
      // lo
      ['1ItWeaponLO'],
      // sc
      ['1ItWeaponSC'],
      // aa
      ['1ItWeaponAA'],
      // bn/fm
      ['1ItWeaponBN'],
      // se
      ['1ItWeaponSE'],
      // sm
      ['1ItWeaponSM'],
      // bk
      ['1ItWeaponBK'],
      // ip/cp
      ['1ItWeaponIP']
    ],
    'armor': [
      // head
      ['1ItHeadPart', '', '', '1ItHeadChip'],
      // arm
      ['1ItArmPart', '', '', '1ItArmChip'],
      // body
      ['1ItBodyPart', '', '', '1ItBodyChip'],
      // foot
      ['1ItFootPart', '', '', '1ItFootChip'],
      // hadou
      ['1ItHadouken']
    ],
    'e': [
      [['1ItSubtank1', '1ItSubtank2', '1ItSubtank3', '1ItSubtank4']]
    ],
    'b': [
      [['1ItBusterAmmo1', '1ItBusterAmmo2', '1ItBusterAmmo3', '1ItBusterAmmo4', '1ItBusterAmmo5',]],
      [['1ItBusterAttack100', '1ItBusterAttack150',]],
      [['1ItBusterFireRate3', '1ItBusterFireRate4', '1ItBusterFireRate5', '1ItBusterFireRate6', '1ItBusterFireRate30', '1ItBusterFireRate60',]],
      [['1ItBusterDashShot1', '1ItBusterDashShotUnlimited',]],
      [['1ItCharge75', '1ItCharge100', '1ItCharge125', '1ItCharge150',]],
    ],
  },
  'x2': {
    'bosses': [
      // mm
      ['2ItKeyMM', '2ChMMClear'],
      // wh/ws
      ['2ItKeyWH', '2ChWHClear'],
      // bc
      ['2ItKeyBC', '2ChBCClear'],
      // fs
      ['2ItKeyFS', '2ChFSClear'],
      // mh/mc
      ['2ItKeyMH', '2ChMHClear'],
      // cm/cs
      ['2ItKeyCM', '2ChCMClear'],
      // so,oo
      ['2ItKeySO', '2ChSOClear'],
      // wa/wg
      ['2ItKeyWA', '2ChWAClear'],
    ],
    'weapon': [
      // mm
      ['2ItWeaponMM'],
      // wh/ws
      ['2ItWeaponWH'],
      // bc
      ['2ItWeaponBC'],
      // fs
      ['2ItWeaponFS'],
      // mh/mc
      ['2ItWeaponMH'],
      // cm/cs
      ['2ItWeaponCM'],
      // so,oo
      ['2ItWeaponSO'],
      // wa/wg
      ['2ItWeaponWA'],
    ],
    'armor': [
      // head
      ['2ItHeadPart', '', '', '2ItHeadChip'],
      // arm
      ['2ItArmPart', '', '', '2ItArmChip'],
      // body
      ['2ItBodyPart', '', '', '2ItBodyChip'],
      // foot
      ['2ItFootPart', '', '', '2ItFootChip'],
      // shoryu
      ['2ItShoryuken'],
    ],
    'e': [
      [['2ItSubtank1', '2ItSubtank2', '2ItSubtank3', '2ItSubtank4']]
    ],
    'b': [
      [['2ItBusterAmmo1', '2ItBusterAmmo2', '2ItBusterAmmo3', '2ItBusterAmmo4', '2ItBusterAmmo5',]],
      [['2ItBusterAttack100', '2ItBusterAttack150',]],
      [['2ItBusterFireRate3', '2ItBusterFireRate4', '2ItBusterFireRate5', '2ItBusterFireRate6', '2ItBusterFireRate30', '2ItBusterFireRate60',]],
      [['2ItBusterDashShot1', '2ItBusterDashShotUnlimited',]],
      [['2ItCharge75', '2ItCharge100', '2ItCharge125', '2ItCharge150',]],
    ],
    'zero': [
      // head
      ['2ItZeroFHead'],
      // body
      ['2ItZeroBody'],
      // foot
      ['2ItZeroFoot'],
    ]
  },
  'x3': {
    'bosses': [
      // eh/bh
      ['3ItKeyEH', '3ChEHClear', '3ItStageVariedEH'],
      // fb/bb
      ['3ItKeyFB', '3ChFBClear', '3ItStageVariedFB'],
      // gb
      ['3ItKeyGB', '3ChGBClear', '3ItStageVariedGB'],
      // as/ts
      ['3ItKeyAS', '3ChASClear'],
      // en/vc
      ['3ItKeyEN', '3ChENClear'],
      // ss/cc
      ['3ItKeySS', '3ChSSClear'],
      // sm/tr
      ['3ItKeySM', '3ChSMClear'],
      // st/nt
      ['3ItKeyST', '3ChSTClear'],
    ],
    'weapon': [
      // eh/bh
      ['3ItWeaponEH'],
      // fb/bb
      ['3ItWeaponFB'],
      // gb
      ['3ItWeaponGB'],
      // as/ts
      ['3ItWeaponAS'],
      // en/vc
      ['3ItWeaponEN'],
      // ss/cc
      ['3ItWeaponSS'],
      // sm/tr
      ['3ItWeaponSM'],
      // st/nt
      ['3ItWeaponST'],
    ],
    'armor': [
      // head
      ['3ItHeadPart', '', '', '3ItHeadChip'],
      // arm
      ['3ItArmPart', '', '', '3ItArmChip'],
      // body
      ['3ItBodyPart', '', '', '3ItBodyChip'],
      // foot
      ['3ItFootPart', '', '', '3ItFootChip'],
      // saber
      ['3ItSaber'],
    ],
    'e': [
      [['3ItSubtank1', '3ItSubtank2', '3ItSubtank3', '3ItSubtank4']]
    ],
    'b': [
      [['3ItBusterAmmo1', '3ItBusterAmmo2', '3ItBusterAmmo3', '3ItBusterAmmo4', '3ItBusterAmmo5',]],
      [['3ItBusterAttack100', '3ItBusterAttack150',]],
      [['3ItBusterFireRate3', '3ItBusterFireRate4', '3ItBusterFireRate5', '3ItBusterFireRate6', '3ItBusterFireRate30', '3ItBusterFireRate60',]],
      [['3ItBusterDashShot1', '3ItBusterDashShotUnlimited',]],
      [['3ItCharge75', '3ItCharge100', '3ItCharge125', '3ItCharge150',]],
    ],
    'subbosses': [
      // vff/bit
      ['3ItKeyVajurila'],
      // mbb/byte
      ['3ItKeyMandarela'],
      // vava
      ['3ItKeyVava'],
    ],
    'ridearmor': [
      // f
      ['3ItRideArmorF'],
      // h
      ['3ItRideArmorH'],
      // k
      ['3ItRideArmorK'],
      // n
      ['3ItRideArmorN'],
    ],
  },
  'miscellaneous': {
    'hp': [
      [[
        '1ItLifeUp1', '1ItLifeUp2', '1ItLifeUp3', '1ItLifeUp4', '1ItLifeUp5', '1ItLifeUp6', '1ItLifeUp7', '1ItLifeUp8',
        '1ItLifeUpD1', '1ItLifeUpD2', '1ItLifeUpD3', '1ItLifeUpD4', '1ItLifeUpD5', '1ItLifeUpD6',
        '2ItLifeUp1', '2ItLifeUp2', '2ItLifeUp3', '2ItLifeUp4', '2ItLifeUp5', '2ItLifeUp6', '2ItLifeUp7', '2ItLifeUp8',
        '2ItLifeUpD1', '2ItLifeUpD2', '2ItLifeUpD3', '2ItLifeUpD4', '2ItLifeUpD5', '2ItLifeUpD6',
        '3ItLifeUp1', '3ItLifeUp2', '3ItLifeUp3', '3ItLifeUp4', '3ItLifeUp5', '3ItLifeUp6', '3ItLifeUp7', '3ItLifeUp8',
        '3ItLifeUpD1', '3ItLifeUpD2', '3ItLifeUpD3', '3ItLifeUpD4', '3ItLifeUpD5', '3ItLifeUpD6',
      ]],
    ],
    'wp': [
      [[
        '1ItEnergyUp1', '1ItEnergyUp2', '1ItEnergyUp3', '1ItEnergyUp4', '1ItEnergyUp5', '1ItEnergyUp6', '1ItEnergyUp7', '1ItEnergyUp8', '1ItEnergyUp9', '1ItEnergyUp10', '1ItEnergyUp11', '1ItEnergyUp12', '1ItEnergyUp13', '1ItEnergyUp14',
        '2ItEnergyUp1', '2ItEnergyUp2', '2ItEnergyUp3', '2ItEnergyUp4', '2ItEnergyUp5', '2ItEnergyUp6', '2ItEnergyUp7', '2ItEnergyUp8', '2ItEnergyUp9', '2ItEnergyUp10', '2ItEnergyUp11', '2ItEnergyUp12', '2ItEnergyUp13', '2ItEnergyUp14',
        '3ItEnergyUp1', '3ItEnergyUp2', '3ItEnergyUp3', '3ItEnergyUp4', '3ItEnergyUp5', '3ItEnergyUp6', '3ItEnergyUp7', '3ItEnergyUp8', '3ItEnergyUp9', '3ItEnergyUp10', '3ItEnergyUp11', '3ItEnergyUp12', '3ItEnergyUp13', '3ItEnergyUp14',
      ]]
    ],
    'sigma': [
      [[
        '1ItKeyS1', '1ItKeyS2', '1ItKeyS3', '1ItKeyS4', '1ItKeyS5', '1ItKeyS6', '1ItKeyS7', '1ItKeyS8', '1ItKeyS9', '1ItKeyS10', '1ItKeyS11', '1ItKeyS12', '1ItKeyS13',
        '2ItKeyS1', '2ItKeyS2', '2ItKeyS3', '2ItKeyS4', '2ItKeyS5', '2ItKeyS6', '2ItKeyS7', '2ItKeyS8', '2ItKeyS9', '2ItKeyS10', '2ItKeyS11', '2ItKeyS12', '2ItKeyS13',
        '3ItKeyS1', '3ItKeyS2', '3ItKeyS3', '3ItKeyS4', '3ItKeyS5', '3ItKeyS6', '3ItKeyS7', '3ItKeyS8', '3ItKeyS9', '3ItKeyS10', '3ItKeyS11', '3ItKeyS12', '3ItKeyS13', '3ItKeyS14',
      ]]
    ],
    'd': [],
    'igf': [['SIfg']],
    'title': [['SCurrentGame']],
  },
}
// export const addressMapping = {
//   'x1': {
//     'bosses': [
//       // lo
//       ['0x030'],
//       // sc
//       ['0x031', '0x039'],
//       // aa
//       ['0x032'],
//       // fm
//       ['0x033', '0x03B'],
//       // se
//       ['0x034'],
//       // sm
//       ['0x035', '0x03D'],
//       // bk
//       ['0x036'],
//       // cp
//       ['0x037']
//     ],
//     'weapon': [
//       // lo
//       ['0x028'],
//       // sc
//       ['0x029'],
//       // aa
//       ['0x02A'],
//       // fm
//       ['0x02B'],
//       // se
//       ['0x02C'],
//       // sm
//       ['0x02D'],
//       // bk
//       ['0x02E'],
//       // cp
//       ['0x02F']
//     ],
//     'armor': [
//       // head
//       ['0x058'],
//       // arm
//       ['0x05A'],
//       // body
//       ['0x05C'],
//       // foot
//       ['0x05E'],
//       // hadou
//       ['0x050']
//     ],
//   },
//   'x2': {
//     'bosses': [
//       // mm
//       ['0x130'],
//       // ws
//       ['0x131'],
//       // bc
//       ['0x132'],
//       // fs
//       ['0x133'],
//       // mc
//       ['0x134'],
//       // cs
//       ['0x135'],
//       // oo
//       ['0x136'],
//       // wg
//       ['0x137'],
//     ],
//     'weapon': [
//       // mm
//       ['0x128'],
//       // ws
//       ['0x129'],
//       // bc
//       ['0x12A'],
//       // fs
//       ['0x12B'],
//       // mc
//       ['0x12C'],
//       // cs
//       ['0x12D'],
//       // oo
//       ['0x12E'],
//       // wg
//       ['0x12F'],
//     ],
//     'armor': [
//       // head
//       ['0x158'],
//       // arm
//       ['0x15A'],
//       // body
//       ['0x15C'],
//       // foot
//       ['0x15E'],
//       // shoryu
//       ['0x150'],
//     ],
//     'zero': [
//       // head
//       ['0x139'],
//       // body
//       ['0x13A'],
//       // foot
//       ['0x138'],
//     ]
//   },
//   'x3': {
//     'bosses': [
//       // bh
//       ['0x230', '0x238'],
//       // bb
//       ['0x231', '0x239'],
//       // gb
//       ['0x232', '0x23A'],
//       // ts
//       ['0x233'],
//       // vc
//       ['0x234'],
//       // cc
//       ['0x235'],
//       // tr
//       ['0x236'],
//       // nt
//       ['0x237'],
//     ],
//     'weapon': [
//       // bh
//       ['0x228'],
//       // bb
//       ['0x229'],
//       // gb
//       ['0x22A'],
//       // ts
//       ['0x22B'],
//       // vc
//       ['0x22C'],
//       // cc
//       ['0x22D'],
//       // tr
//       ['0x22E'],
//       // nt
//       ['0x22F'],
//     ],
//     'armor': [
//       // head
//       ['0x258'],
//       // arm
//       ['0x25A'],
//       // body
//       ['0x25C'],
//       // foot
//       ['0x25E'],
//       // saber
//       ['0x250'],
//     ],
//     'subbosses': [
//       // bff
//       ['0x23D'],
//       // mbb
//       ['0x23E'],
//       // vava
//       ['0x23C', '0x23F'],
//     ],
//     'ridearmor': [
//       // f
//       ['0x257'],
//       // h
//       ['0x256'],
//       // k
//       ['0x255'],
//       // n
//       ['0x254'],
//     ],
//   },
//   'miscellaneous': {
//     'hp': [
//       ['0x000', '0x100', '0x200', '0x300'],
//     ],
//     'wp': [
//       ['0x010', '0x110', '0x210', '0x310']
//     ],
//     'b': [
//       ['0x060', '0x160', '0x260', '0x360']
//     ],
//     'ba': [
//       ['0x065', '0x165', '0x265', '0x365',]
//     ],
//     'br': [
//       ['0x068', '0x168', '0x268', '0x368',]
//     ],
//     'bd': [
//       ['0x06E', '0x16E', '0x26E', '0x36E',]
//     ],
//     'bc': [
//       ['0x070', '0x170', '0x270', '0x370',]
//     ],
//     'e': [
//       ['0x024', '0x124', '0x224', '0x324',]
//     ],
//     'd': [],
//     'igf': [],
//     'sigma': [
//       ['0x040', '0x140', '0x240', '0x340']
//     ]
//     ,
//   },
//   'title': ['']
// }

// TODO
export const translationMapping = {
  'x1': {
    'bosses': [
      // unlocked, beaten, changed
      // lo
      ['1ItKeyLO', '1ChLOClear'],
      // sc
      ['1ItKeySC', '1ChSCClear', '1ItStageVariedSC'],
      // aa
      ['1ItKeyAA', '1ChAAClear'],
      // bn/fm
      ['1ItKeyBN', '1ChBNClear', '1ItStageVariedBN'],
      // se
      ['1ItKeySE', '1ChSEClear'],
      // sm
      ['1ItKeySM', '1ChSMClear', '1ItStageVariedSM'],
      // bk
      ['1ItKeyBK', '1ChBKClear'],
      // ip/cp
      ['1ItKeyIP', '1ChIPClear']
    ],
    'weapon': [
      // lo
      ['1ItWeaponLO'],
      // sc
      ['1ItWeaponSC'],
      // aa
      ['1ItWeaponAA'],
      // bn/fm
      ['1ItWeaponBN'],
      // se
      ['1ItWeaponSE'],
      // sm
      ['1ItWeaponSM'],
      // bk
      ['1ItWeaponBK'],
      // ip/cp
      ['1ItWeaponIP']
    ],
    'armor': [
      // head
      ['1ItHeadPart', '', '', '1ItHeadChip'],
      // arm
      ['1ItArmPart', '', '', '1ItArmChip'],
      // body
      ['1ItBodyPart', '', '', '1ItBodyChip'],
      // foot
      ['1ItFootPart', '', '', '1ItFootChip'],
      // hadou
      ['1ItHadouken']
    ],
    'e': [
      [['1ItSubtank1', '1ItSubtank2', '1ItSubtank3', '1ItSubtank4']]
    ],
    'b': [
      [['1ItBusterAmmo1', '1ItBusterAmmo2', '1ItBusterAmmo3', '1ItBusterAmmo4', '1ItBusterAmmo5',]],
      [['1ItBusterAttack100', '1ItBusterAttack150',]],
      [['1ItBusterFireRate3', '1ItBusterFireRate4', '1ItBusterFireRate5', '1ItBusterFireRate6', '1ItBusterFireRate30', '1ItBusterFireRate60',]],
      [['1ItBusterDashShot1', '1ItBusterDashShotUnlimited',]],
      [['1ItCharge75', '1ItCharge100', '1ItCharge125', '1ItCharge150',]],
    ],
  },
  'x2': {
    'bosses': [
      // mm
      ['2ItKeyMM', '2ChMMClear'],
      // wh/ws
      ['2ItKeyWH', '2ChWHClear'],
      // bc
      ['2ItKeyBC', '2ChBCClear'],
      // fs
      ['2ItKeyFS', '2ChFSClear'],
      // mh/mc
      ['2ItKeyMH', '2ChMHClear'],
      // cm/cs
      ['2ItKeyCM', '2ChCMClear'],
      // so,oo
      ['2ItKeySO', '2ChSOClear'],
      // wa/wg
      ['2ItKeyWA', '2ChWAClear'],
    ],
    'weapon': [
      // mm
      ['2ItWeaponMM'],
      // wh/ws
      ['2ItWeaponWH'],
      // bc
      ['2ItWeaponBC'],
      // fs
      ['2ItWeaponFS'],
      // mh/mc
      ['2ItWeaponMH'],
      // cm/cs
      ['2ItWeaponCM'],
      // so,oo
      ['2ItWeaponSO'],
      // wa/wg
      ['2ItWeaponWA'],
    ],
    'armor': [
      // head
      ['2ItHeadPart', '', '', '2ItHeadChip'],
      // arm
      ['2ItArmPart', '', '', '2ItArmChip'],
      // body
      ['2ItBodyPart', '', '', '2ItBodyChip'],
      // foot
      ['2ItFootPart', '', '', '2ItFootChip'],
      // shoryu
      ['2ItShoryuken'],
    ],
    'e': [
      [['2ItSubtank1', '2ItSubtank2', '2ItSubtank3', '2ItSubtank4']]
    ],
    'b': [
      [['2ItBusterAmmo1', '2ItBusterAmmo2', '2ItBusterAmmo3', '2ItBusterAmmo4', '2ItBusterAmmo5',]],
      [['2ItBusterAttack100', '2ItBusterAttack150',]],
      [['2ItBusterFireRate3', '2ItBusterFireRate4', '2ItBusterFireRate5', '2ItBusterFireRate6', '2ItBusterFireRate30', '2ItBusterFireRate60',]],
      [['2ItBusterDashShot1', '2ItBusterDashShotUnlimited',]],
      [['2ItCharge75', '2ItCharge100', '2ItCharge125', '2ItCharge150',]],
    ],
    'zero': [
      // head
      ['2ItZeroFHead'],
      // body
      ['2ItZeroBody'],
      // foot
      ['2ItZeroFoot'],
    ]
  },
  'x3': {
    'bosses': [
      // eh/bh
      ['3ItKeyEH', '3ChEHClear', '3ItStageVariedEH'],
      // fb/bb
      ['3ItKeyFB', '3ChFBClear', '3ItStageVariedFB'],
      // gb
      ['3ItKeyGB', '3ChGBClear', '3ItStageVariedGB'],
      // as/ts
      ['3ItKeyAS', '3ChASClear'],
      // en/vc
      ['3ItKeyEN', '3ChENClear'],
      // ss/cc
      ['3ItKeySS', '3ChSSClear'],
      // sm/tr
      ['3ItKeySM', '3ChSMClear'],
      // st/nt
      ['3ItKeyST', '3ChSTClear'],
    ],
    'weapon': [
      // eh/bh
      ['3ItWeaponEH'],
      // fb/bb
      ['3ItWeaponFB'],
      // gb
      ['3ItWeaponGB'],
      // as/ts
      ['3ItWeaponAS'],
      // en/vc
      ['3ItWeaponEN'],
      // ss/cc
      ['3ItWeaponSS'],
      // sm/tr
      ['3ItWeaponSM'],
      // st/nt
      ['3ItWeaponST'],
    ],
    'armor': [
      // head
      ['3ItHeadPart', '', '', '3ItHeadChip'],
      // arm
      ['3ItArmPart', '', '', '3ItArmChip'],
      // body
      ['3ItBodyPart', '', '', '3ItBodyChip'],
      // foot
      ['3ItFootPart', '', '', '3ItFootChip'],
      // saber
      ['3ItSaber'],
    ],
    'e': [
      [['3ItSubtank1', '3ItSubtank2', '3ItSubtank3', '3ItSubtank4']]
    ],
    'b': [
      [['3ItBusterAmmo1', '3ItBusterAmmo2', '3ItBusterAmmo3', '3ItBusterAmmo4', '3ItBusterAmmo5',]],
      [['3ItBusterAttack100', '3ItBusterAttack150',]],
      [['3ItBusterFireRate3', '3ItBusterFireRate4', '3ItBusterFireRate5', '3ItBusterFireRate6', '3ItBusterFireRate30', '3ItBusterFireRate60',]],
      [['3ItBusterDashShot1', '3ItBusterDashShotUnlimited',]],
      [['3ItCharge75', '3ItCharge100', '3ItCharge125', '3ItCharge150',]],
    ],
    'subbosses': [
      // vff/bit
      ['3ItKeyVajurila'],
      // mbb/byte
      ['3ItKeyMandarela'],
      // vava
      ['3ItKeyVava'],
    ],
    'ridearmor': [
      // f
      ['3ItRideArmorF'],
      // h
      ['3ItRideArmorH'],
      // k
      ['3ItRideArmorK'],
      // n
      ['3ItRideArmorN'],
    ],
  },
  'miscellaneous': {
    'hp': [
      [[
        '1ItLifeUp1', '1ItLifeUp2', '1ItLifeUp3', '1ItLifeUp4', '1ItLifeUp5', '1ItLifeUp6', '1ItLifeUp7', '1ItLifeUp8',
        '1ItLifeUpD1', '1ItLifeUpD2', '1ItLifeUpD3', '1ItLifeUpD4', '1ItLifeUpD5', '1ItLifeUpD6',
        '2ItLifeUp1', '2ItLifeUp2', '2ItLifeUp3', '2ItLifeUp4', '2ItLifeUp5', '2ItLifeUp6', '2ItLifeUp7', '2ItLifeUp8',
        '2ItLifeUpD1', '2ItLifeUpD2', '2ItLifeUpD3', '2ItLifeUpD4', '2ItLifeUpD5', '2ItLifeUpD6',
        '3ItLifeUp1', '3ItLifeUp2', '3ItLifeUp3', '3ItLifeUp4', '3ItLifeUp5', '3ItLifeUp6', '3ItLifeUp7', '3ItLifeUp8',
        '3ItLifeUpD1', '3ItLifeUpD2', '3ItLifeUpD3', '3ItLifeUpD4', '3ItLifeUpD5', '3ItLifeUpD6',
      ]],
    ],
    'wp': [
      [[
        '1ItEnergyUp1', '1ItEnergyUp2', '1ItEnergyUp3', '1ItEnergyUp4', '1ItEnergyUp5', '1ItEnergyUp6', '1ItEnergyUp7', '1ItEnergyUp8', '1ItEnergyUp9', '1ItEnergyUp10', '1ItEnergyUp11', '1ItEnergyUp12', '1ItEnergyUp13', '1ItEnergyUp14',
        '2ItEnergyUp1', '2ItEnergyUp2', '2ItEnergyUp3', '2ItEnergyUp4', '2ItEnergyUp5', '2ItEnergyUp6', '2ItEnergyUp7', '2ItEnergyUp8', '2ItEnergyUp9', '2ItEnergyUp10', '2ItEnergyUp11', '2ItEnergyUp12', '2ItEnergyUp13', '2ItEnergyUp14',
        '3ItEnergyUp1', '3ItEnergyUp2', '3ItEnergyUp3', '3ItEnergyUp4', '3ItEnergyUp5', '3ItEnergyUp6', '3ItEnergyUp7', '3ItEnergyUp8', '3ItEnergyUp9', '3ItEnergyUp10', '3ItEnergyUp11', '3ItEnergyUp12', '3ItEnergyUp13', '3ItEnergyUp14',
      ]]
    ],
    'sigma': [
      [[
        '1ItKeyS1', '1ItKeyS2', '1ItKeyS3', '1ItKeyS4', '1ItKeyS5', '1ItKeyS6', '1ItKeyS7', '1ItKeyS8', '1ItKeyS9', '1ItKeyS10', '1ItKeyS11', '1ItKeyS12', '1ItKeyS13',
        '2ItKeyS1', '2ItKeyS2', '2ItKeyS3', '2ItKeyS4', '2ItKeyS5', '2ItKeyS6', '2ItKeyS7', '2ItKeyS8', '2ItKeyS9', '2ItKeyS10', '2ItKeyS11', '2ItKeyS12', '2ItKeyS13',
        '3ItKeyS1', '3ItKeyS2', '3ItKeyS3', '3ItKeyS4', '3ItKeyS5', '3ItKeyS6', '3ItKeyS7', '3ItKeyS8', '3ItKeyS9', '3ItKeyS10', '3ItKeyS11', '3ItKeyS12', '3ItKeyS13', '3ItKeyS14',
      ]]
    ],
    'd': [],
    'igf': [['SIfg']],
    'title': [['SCurrentGame']],
  },
}

export interface X1ImgSource {
  bosses: string[]
  weapon: string[]
  armor: string[]
}
export interface X1ItemStatus {
  bosses: boolean[]
  weapon: boolean[]
  armor: boolean[]
  e: number[]
  b: number[]
}

export interface X2ImgSource {
  bosses: string[]
  weapon: string[]
  armor: string[]
  zero: string[]
}
export interface X2ItemStatus {
  bosses: boolean[]
  weapon: boolean[]
  armor: boolean[]
  e: number[]
  b: number[]
  zero: boolean[]
}

export interface X3ImgSource {
  bosses: string[]
  weapon: string[]
  armor: string[]
  subbosses: string[]
  ridearmor: string[]
}
export interface X3ItemStatus {
  bosses: boolean[]
  weapon: boolean[]
  armor: boolean[]
  e: number[]
  b: number[]
  subbosses: boolean[]
  ridearmor: boolean[]
}

export interface MiscellaneousImgSource {
  sigma: string,
  hp: string,
  wp: string,
  b: string,
  d: string,
  igf: string,
}
export interface MiscellaneousItemStatus {
  sigma: number[],
  hp: number[],
  wp: number[],
  d: number[],
  igf: number[],
}