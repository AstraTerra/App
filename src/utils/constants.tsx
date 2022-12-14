export const NETWORKS = {
  mainnet: {
    chainId: 1,
    hexChainId: "0x1",
    name: "mainnet",
    eth: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    weth: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    dai: "0x6b175474e89094c44da98b954eedeac495271d0f",
    ethPool: "0xa87e2c5d5964955242989b954474ff2eb08dd2f5",
    ethUniPool: "0x3436d87664964df8a1825f826f127dec13117b0b",
    daiPool: "",
    ctxPool: "0x2a93167ed63a31f35ca4788e2eb9fbd9fa6089d0",
    lpUrl: "https://app.sushi.com",
    infuraRpcUrl: "https://mainnet.infura.io/v3/".concat(process.env.REACT_APP_INFURA_ID || ""),
    infuraFortmaticRpcUrl: "https://mainnet.infura.io/v3/".concat(
      process.env.REACT_APP_FORTMATIC_INFURA_ID || ""
    ),
  },
  rinkeby: {
    chainId: 4,
    hexChainId: "0x4",
    name: "rinkeby",
    eth: "0x5D3E425A099c2863224d6D63b330Df0F22B299b9",
    weth: "0x5D3E425A099c2863224d6D63b330Df0F22B299b9",
    dai: "0x118a4238E4086FAE2621D0336C0E6cdC1257BE82",
    ethPool: "0x7d7db1ba4bc85f7d4ea43bad63acece407364aff",
    ethUniPool: "0x3436d87664964df8a1825f826f127dec13117b0b",
    daiPool: "0xb9625c0ec3dd89b00d20d1e3ea03d5b4072f03b4",
    ctxPool: "0x9c4438470b1593cf4efe0f85108e7416c3b582f8",
    infuraRpcUrl: "https://rinkeby.infura.io/v3/".concat(process.env.REACT_APP_INFURA_ID || ""),
    infuraFortmaticRpcUrl: "https://rinkeby.infura.io/v3/".concat(
      process.env.REACT_APP_FORTMATIC_INFURA_ID || ""
    ),
  },
  okovan: {
    chainId: 69,
    hexChainId: "0x45",
    name: "opt-kovan",
    eth: "0x13fcDc22A2C9E558f21d17B688C38B2B5E2B4eF6",
    weth: "0x13fcDc22A2C9E558f21d17B688C38B2B5E2B4eF6",
    dai: "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1",
  },
  polygon: {
    chainId: 137,
    hexChainId: "0x89",
    name: "matic",
    eth: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
    weth: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
    dai: "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
    matic: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
  },
};

export const API_ENDPOINT = "https://api.cryptex.finance";

export const GRAPHQL_ENDPOINT = {
  mainnet: "https://api.thegraph.com/subgraphs/name/jdestephen/tcap-demo-2",
  rinkeby: "https://api.thegraph.com/subgraphs/name/cryptexfinance/tcap-rinkeby-two",
  okovan: "https://api.thegraph.com/subgraphs/name/jdestephen/tcap-demo",
  polygon: "https://api.thegraph.com/subgraphs/name/cryptexfinance/tcap-polygon",
};

export const FEATURES = {
  KEEPERS_API: false,
  NEW_VAULTS: false,
  OPTIMISM: false,
  POLYGON: false,
};
