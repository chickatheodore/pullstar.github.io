import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      text: "Retail",
      icon: "book",
      prefix: "retail/",
      children: [
        "",
        {
          text: "Penjualan",
          icon: "lightbulb",
          prefix: "sales/",
          link: "sales/",
          children: [
            "",
            "Preparation",
            "POS",
            "CustomOrder",
            "CreditNote",
            "EndOfDay",
            "POSRegister"
          ]
        },
        {
          text: "Kontak",
          icon: "lightbulb",
          prefix: "contacts/",
          link: "contacts/",
          children: [
            "Customer",
            "Supplier",
          ]
        }
      ],
    },
  ],
});
