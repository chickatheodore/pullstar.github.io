import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      text: "Kasir",
      icon: "book",
      prefix: "guide/",
      children: [
        "",
        "Dashboard",
        {
          text: "Penjualan",
          icon: "lightbulb",
          prefix: "sales/",
          link: "sales/",
          children: [
            "",
            "Preparation",
            "POS",
            "DepositCustom",
            "DepositCustomPayment",
            "CreditNote"
          ]
        },
        "EndOfDay"
      ],
    },
  ],
});
