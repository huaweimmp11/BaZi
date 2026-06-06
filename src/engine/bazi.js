/* ============================================
   八字引擎 · 基于 lunar-javascript 万年历
   数据源：lunar-javascript (6tail)
   ============================================ */

import { Solar, Lunar } from "lunar-javascript";

const STEMS = ["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"];
const BRANCHES = ["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"];
const WUXING = ["木","木","火","火","土","土","金","金","水","水"];
const HIDDEN_STEMS = [
  ["癸"],["己","癸","辛"],["甲","丙","戊"],["乙"],
  ["戊","乙","癸"],["丙","庚","戊"],["丁","己"],["己","丁","乙"],
  ["庚","壬","戊"],["辛"],["戊","辛","丁"],["壬","甲"]
];
const NAYIN = [
  "海中金","炉中火","大林木","路旁土","剑锋金","山头火",
  "涧下水","城头土","白蜡金","杨柳木","泉中水","屋上土",
  "霹雳火","松柏木","长流水","砂石金","山下火","平地木",
  "壁上土","金箔金","覆灯火","天河水","大驿土","钗钏金",
  "桑柘木","大溪水","沙中土","天上火","石榴木","大海水"
];

function getNaYin(si, bi) { return NAYIN[Math.floor(((si - bi + 60) % 60) / 2)]; }

function calcShiShen(dsi, osi) {
  const cy = ["木","火","土","金","水"];
  const dW = cy.indexOf(WUXING[dsi]), oW = cy.indexOf(WUXING[osi]);
  const rel = ((oW - dW) % 5 + 5) % 5;
  const yy = (dsi % 2 === 0) === (osi % 2 === 0);
  return {0:yy?"比肩":"劫财",1:yy?"食神":"伤官",2:yy?"偏财":"正财",3:yy?"七杀":"正官",4:yy?"偏印":"正印"}[rel];
}

function hiddenSS(bi, dsi) {
  return HIDDEN_STEMS[bi].map(s => { const si = STEMS.indexOf(s); return { stem: s, stemIdx: si, shiShen: calcShiShen(dsi, si) }; });
}

function getHourBranch(h) {
  if (h >= 23 || h < 1) return 0; if (h < 3) return 1; if (h < 5) return 2;
  if (h < 7) return 3; if (h < 9) return 4; if (h < 11) return 5;
  if (h < 13) return 6; if (h < 15) return 7; if (h < 17) return 8;
  if (h < 19) return 9; if (h < 21) return 10; return 11;
}

function calcDaYun(gender, yearGZ, monthGZ, birthYear, birthMonth, birthDay, birthHour) {
  const ypStemIdx = STEMS.indexOf(yearGZ[0]);
  const ypBranchIdx = BRANCHES.indexOf(yearGZ[1]);
  const mpStemIdx = STEMS.indexOf(monthGZ[0]);
  const mpBranchIdx = BRANCHES.indexOf(monthGZ[1]);
  const fwd = (gender === "male" && ypStemIdx % 2 === 0) || (gender === "female" && ypStemIdx % 2 === 1);
  // 最近节：直接用 lunar-javascript
  const birth = new Date(birthYear, birthMonth - 1, birthDay, birthHour, 0, 0);
  const solar = Solar.fromYmdHms(birthYear, birthMonth, birthDay, birthHour, 0, 0);
  const lunar = solar.getLunar();
  let target = null;
  // 顺排找下一个节，逆排找上一个节
  if (fwd) {
    // 下一个节气中的"节"
    let dt = new Date(birth.getTime() + 86400000);
    for (let i = 0; i < 60; i++) {
      const s = Solar.fromYmd(dt.getFullYear(), dt.getMonth() + 1, dt.getDate());
      const jq = s.getLunar().getJieQi();
      if (jq) { target = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate(), 0, 0, 0); break; }
      dt = new Date(dt.getTime() + 86400000);
    }
  } else {
    let dt = new Date(birth.getTime() - 86400000);
    for (let i = 0; i < 60; i++) {
      const s = Solar.fromYmd(dt.getFullYear(), dt.getMonth() + 1, dt.getDate());
      const jq = s.getLunar().getJieQi();
      if (jq) { target = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate(), 0, 0, 0); break; }
      dt = new Date(dt.getTime() - 86400000);
    }
  }
  const dd = target ? Math.abs(target - birth) / 86400000 : 3;
  const sa = Math.round(dd / 3 * 10) / 10;
  const luck = [];
  for (let i = 0; i < 8; i++) {
    const s = fwd ? i + 1 : -(i + 1);
    const si = ((mpStemIdx + s) % 10 + 10) % 10, bi = ((mpBranchIdx + s) % 12 + 12) % 12;
    const as = Math.floor(sa) + i * 10;
    luck.push({ stem: STEMS[si], branch: BRANCHES[bi], ageStart: as, ageEnd: as + 9, shiShen: calcShiShen(mpStemIdx, si) });
  }
  return { forward: fwd, startAge: Math.floor(sa), luckPillars: luck };
}

export function calculate(birthYear, birthMonth, birthDay, birthHour, gender) {
  const solar = Solar.fromYmdHms(birthYear, birthMonth, birthDay, birthHour, 0, 0);
  const ec = solar.getLunar().getEightChar();
  const yg = ec.getYear(), mg = ec.getMonth(), dg = ec.getDay(), tg = ec.getTime();
  const yi = STEMS.indexOf(yg[0]), ybi = BRANCHES.indexOf(yg[1]);
  const mi = STEMS.indexOf(mg[0]), mbi = BRANCHES.indexOf(mg[1]);
  const di = STEMS.indexOf(dg[0]), dbi = BRANCHES.indexOf(dg[1]);
  const ti = STEMS.indexOf(tg[0]), tbi = BRANCHES.indexOf(tg[1]);
  const yp = { stem: yg[0], branch: yg[1], stemIdx: yi, branchIdx: ybi, wuxing: WUXING[yi], naYin: getNaYin(yi, ybi) };
  const mp = { stem: mg[0], branch: mg[1], stemIdx: mi, branchIdx: mbi, wuxing: WUXING[mi], naYin: getNaYin(mi, mbi) };
  const dp = { stem: dg[0], branch: dg[1], stemIdx: di, branchIdx: dbi, wuxing: WUXING[di], naYin: getNaYin(di, dbi) };
  const hp = { stem: tg[0], branch: tg[1], stemIdx: ti, branchIdx: tbi, wuxing: WUXING[ti], naYin: getNaYin(ti, tbi) };
  const pillars = [yp, mp, dp, hp];
  const dsi = di;
  const ss = [calcShiShen(dsi, yi), calcShiShen(dsi, mi), "比肩", calcShiShen(dsi, ti)];
  const hs = pillars.map(p => hiddenSS(p.branchIdx, dsi));
  const dy = calcDaYun(gender, [yg[0],yg[1]], [mg[0],mg[1]], birthYear, birthMonth, birthDay, birthHour);
  return { yearPillar: yp, monthPillar: mp, dayPillar: dp, hourPillar: hp, pillars, shiShenPillars: ss, hiddenStems: hs, dayStem: dg[0], daYun: dy, source: "lunar-javascript" };
}

export { STEMS, BRANCHES, calcShiShen, getHourBranch };
