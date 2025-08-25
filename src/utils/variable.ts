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
  },
  'x2': {
    bosses: Array(8).fill(0),
    weapon: Array(8).fill(0),
    armor: Array(5).fill(0),
    e: Array(1).fill(0),
    zero: Array(3).fill(0)
  },
  'x3': {
    bosses: Array(8).fill(0),
    weapon: Array(8).fill(0),
    armor: Array(5).fill(0),
    e: Array(1).fill(0),
    subbosses: Array(3).fill(0),
    ridearmor: Array(4).fill(0)
  },
  'miscellaneous': {
    hp: Array(1).fill(0),
    wp: Array(1).fill(0),
    b: Array(1).fill(0),
    ba: Array(1).fill(0),
    br: Array(1).fill(0),
    bd: Array(1).fill(0),
    bc: Array(1).fill(0),
    sigma: Array(1).fill(0),
    d: Array(4).fill(0),
    igf: Array(4).fill(0),
  },
  'title': Array(1).fill(0)
}

export interface X1ImgSource {
  bosses: string[]
  weapon: string[]
  armor: string[]
}
export interface X1ItemStatus {
  bosses: boolean[]
  weapon: boolean[]
  armor: boolean[],
  e: number[],
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
  subbosses: boolean[]
  ridearmor: boolean[]
}

export interface MiscellaneousImgSource {
  sigma: string,
  hp: string,
  wp: string,
  b: string,
  ba: string,
  br: string,
  bd: string,
  bc: string,
  d: string,
  igf: string,
}

export interface MiscellaneousItemStatus {
  sigma: number[],
  hp: number[],
  wp: number[],
  b: number[],
  ba: number[],
  br: number[],
  bd: number[],
  bc: number[],
  igf: number[],
}