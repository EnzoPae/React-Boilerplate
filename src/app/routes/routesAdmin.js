export const routesAdmin = [
  {
    cat: "Cat. 1",
    icon: "pi-file",
    routes: [
      { path: "/item/1", desc: "Item 1", comp: "item_1", d: true },
      { path: "/item/2", desc: "Item 2", comp: "item_2", d: true },
      { path: "/item/2/detalle", desc: "Item 2 Detalles", comp: "item_2_detalle", d: false },
    ],
  },
  {
    noDropdown: true,
    cat: "Cat. 2",
    icon: "pi-file-pdf",
    path: "/item/3",
    routes: [
      { path: "/item/3", comp: "item_3" },
    ],
  },
];
