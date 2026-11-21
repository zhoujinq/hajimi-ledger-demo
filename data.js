/*
 * 演示数据（全部虚构）
 * ------------------------------------------------------------------
 * 本文件里的每一个数字都是为了演示而生成的，与任何真实账户无关。
 * 生成规则见 README「数据脱敏说明」：
 *   - 总资产：600,000 ~ 1,000,000 元（本例 872,341）
 *   - 港股个股 <10%、美股个股 <10%、A股个股 <10%
 *   - 美股指数 20%~30%、黄金 <15%、其余为现金
 *   - 每个市场 5 只标的，股数按目标金额与当日价格反算
 * 页面会在加载时用实时行情重算市值；取不到行情则沿用这里的快照价。
 */
window.DEMO = {
  as_of: "2026-11-21",
  currency: "CNY",
  fx: { cnyPerHkd: 1 / 1.175, cnyPerUsd: 6.673 },
  total: 872341,
  liabilities: 1840,
  cash: 313972,
  buckets: [
    { key: "hk",      name: "港股个股",     target: [0, 10],  color: "#1a73e8" },
    { key: "us",      name: "美股个股",     target: [0, 10],  color: "#7c3aed" },
    { key: "cn",      name: "A股个股",      target: [0, 10],  color: "#0f9d58" },
    { key: "usindex", name: "美股指数基金", target: [20, 30], color: "#0891b2" },
    { key: "gold",    name: "黄金",         target: [0, 15],  color: "#e8710a" },
    { key: "cash",    name: "现金",         target: null,     color: "#94a3b8" }
  ],
  positions: {
    hk: [
      { code: "hk02513", symbol: "02513", name: "智谱",         shares: 100,  cost: 336.0,  price: 334.00, cur: "HKD" },
      { code: "hk09988", symbol: "09988", name: "阿里巴巴-W",   shares: 200,  cost: 91.20,  price: 83.35,  cur: "HKD" },
      { code: "hk00981", symbol: "00981", name: "中芯国际",     shares: 300,  cost: 45.80,  price: 49.12,  cur: "HKD" },
      { code: "hk01024", symbol: "01024", name: "快手-W",       shares: 500,  cost: 23.40,  price: 20.42,  cur: "HKD" },
      { code: "hk09660", symbol: "09660", name: "地平线机器人", shares: 2200, cost: 3.48,   price: 3.12,   cur: "HKD" }
    ],
    us: [
      { code: "usNVDA",  symbol: "NVDA",  name: "英伟达",    shares: 30, cost: 121.40, price: 125.53, cur: "USD" },
      { code: "usMU",    symbol: "MU",    name: "美光科技",  shares: 4,  cost: 612.00, price: 594.51, cur: "USD" },
      { code: "usGOOGL", symbol: "GOOGL", name: "谷歌-A",    shares: 9,  cost: 258.30, price: 265.29, cur: "USD" },
      { code: "usANT",   symbol: "ANT",   name: "Anthropic", shares: 21, cost: 93.10,  price: 88.91,  cur: "USD" },
      { code: "usPLTR",  symbol: "PLTR",  name: "Palantir",  shares: 8,  cost: 150.20, price: 143.49, cur: "USD" }
    ],
    cn: [
      { code: "sh688256", symbol: "688256", name: "寒武纪",   shares: 20,  cost: 880.00, price: 920.00, cur: "CNY" },
      { code: "sz300308", symbol: "300308", name: "中际旭创", shares: 40,  cost: 402.60, price: 393.20, cur: "CNY" },
      { code: "sh688041", symbol: "688041", name: "海光信息", shares: 80,  cost: 158.90, price: 164.25, cur: "CNY" },
      { code: "sz300502", symbol: "300502", name: "新易盛",   shares: 60,  cost: 171.50, price: 165.00, cur: "CNY" },
      { code: "sz002230", symbol: "002230", name: "科大讯飞", shares: 200, cost: 36.80,  price: 34.50,  cur: "CNY" }
    ],
    usindex: [
      { code: "sh513100", symbol: "513100", name: "纳指ETF",  shares: 110000, cost: 1.962, price: 2.074, cur: "CNY" }
    ],
    gold: [
      { code: "sh518880", symbol: "518880", name: "黄金ETF",  shares: 16400,  cost: 7.510, price: 7.282, cur: "CNY" }
    ]
  },
  checks: [
    { label: "港股市值勾稽", result: "一致" },
    { label: "美股+货基勾稽", result: "一致" },
    { label: "汇率闭合",     result: "一致（演示）" },
    { label: "现金水位",     result: "高于 20% 底线" }
  ]
};
