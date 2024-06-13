import { CriptoTable } from "@material-tailwind/react";

export function ChipDefault() {
    const TABLE_ROW = [
        {
          img: "/logos/btc.png",
          digitalAsset: "BTC",
          detail: "Bitcoin",
          price: "$46,727.30",
          change: "+2.92%",
          volume: "$45.31B",
          market: "$915.61B",
          color: "green",
          trend: 4,
        },
        {
          img: "/logos/eth.png",
          digitalAsset: "ETH",
          detail: "Ethereum",
          price: "$2,609.30",
          change: "+6.80%",
          volume: "$23.42B",
          market: "$313.58B",
          color: "green",
        },
        {
          img: "/logos/usdt.png",
          digitalAsset: "USDT",
          detail: "TetherUS",
          price: "$1.00",
          change: "-0.01%",
          volume: "$94.37B",
          market: "$40,600",
          color: "red",
        },
        {
          img: "/logos/sol.png",
          digitalAsset: "SOL",
          detail: "Solana",
          price: "$1.00",
          change: "+6.35%",
          volume: "$3.48B",
          market: "$43.26B",
          color: "green",
        },
        {
          img: "/logos/xrp.png",
          digitalAsset: "XRP",
          detail: "Ripple",
          price: "$100.19",
          change: "-0.95%",
          volume: "$1.81B",
          market: "$32.45B",
          color: "red",
        },
      ];
      
      const TABLE_HEAD = [
        {
          head: "Digital Asset",
          customeStyle: "!text-left",
        },
        {
          head: "Price",
          customeStyle: "text-right",
        },
        {
          head: "Change",
          customeStyle: "text-right",
        },
        {
          head: "Volume",
          customeStyle: "text-right",
        },
        {
          head: "Market Cap",
          customeStyle: "text-right",
        },
        {
          head: "Trend",
          customeStyle: "text-right",
        },
        {
          head: "Actions",
          customeStyle: "text-right",
        },
      ];
      
  return <CriptoTable rows={TABLE_ROW} header={TABLE_HEAD} />;
}
