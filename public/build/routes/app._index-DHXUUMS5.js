import {
  require_shopify
} from "/build/_shared/chunk-SU66BP3D.js";
import {
  ProductListData_default
} from "/build/_shared/chunk-MPZL4KL4.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  init_esm,
  useActionData,
  useLoaderData,
  useNavigation,
  useSubmit
} from "/build/_shared/chunk-PKXTLM7J.js";
import {
  Badge,
  Box,
  Button,
  Card,
  Divider,
  HorizontalStack,
  IndexTable,
  Layout,
  LegacyCard,
  Link,
  List,
  Page,
  Text,
  VerticalStack,
  init_esm as init_esm2,
  useIndexResourceState
} from "/build/_shared/chunk-PEJJE5LV.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  createHotContext,
  init_remix_hmr
} from "/build/_shared/chunk-PQTP4IOJ.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/app._index.jsx
init_remix_hmr();
var import_react = __toESM(require_react());
var import_node = __toESM(require_node());
init_esm();
init_esm2();
var import_shopify = __toESM(require_shopify());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\app._index.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\app._index.jsx"
  );
  import.meta.hot.lastModified = "1693549702459.9114";
}
function Index() {
  var _a;
  _s();
  const nav = useNavigation();
  const {
    shop
  } = useLoaderData();
  const actionData = useActionData();
  const submit = useSubmit();
  console.log(nav);
  const isLoading = ["loading", "submitting"].includes(nav.state) && nav.formMethod === "POST";
  const productId = (_a = actionData == null ? void 0 : actionData.product) == null ? void 0 : _a.id.replace("gid://shopify/Product/", "");
  (0, import_react.useEffect)(() => {
    if (productId) {
      shopify.toast.show("Product created");
    }
  }, [productId]);
  const generateProduct = () => submit({}, {
    replace: true,
    method: "POST"
  });
  const orders = [{
    id: "1020",
    order: "#1020",
    date: "Jul 20 at 4:34pm",
    customer: "Jaydon Stanton",
    total: "$969.44",
    paymentStatus: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, { progress: "complete", children: "Paid" }, void 0, false, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 111,
      columnNumber: 20
    }, this),
    fulfillmentStatus: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, { progress: "incomplete", children: "Unfulfilled" }, void 0, false, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 112,
      columnNumber: 24
    }, this)
  }, {
    id: "1019",
    order: "#1019",
    date: "Jul 20 at 3:46pm",
    customer: "Ruben Westerfelt",
    total: "$701.19",
    paymentStatus: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, { progress: "partiallyComplete", children: "Partially paid" }, void 0, false, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 119,
      columnNumber: 20
    }, this),
    fulfillmentStatus: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, { progress: "incomplete", children: "Unfulfilled" }, void 0, false, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 120,
      columnNumber: 24
    }, this)
  }, {
    id: "1018",
    order: "#1018",
    date: "Jul 20 at 3.44pm",
    customer: "Leo Carder",
    total: "$798.24",
    paymentStatus: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, { progress: "complete", children: "Paid" }, void 0, false, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 127,
      columnNumber: 20
    }, this),
    fulfillmentStatus: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, { progress: "incomplete", children: "Unfulfilled" }, void 0, false, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 128,
      columnNumber: 24
    }, this)
  }];
  const resourceName = {
    singular: "order",
    plural: "orders"
  };
  const {
    selectedResources,
    allResourcesSelected,
    handleSelectionChange
  } = useIndexResourceState(orders);
  const rowMarkup = orders.map(({
    id,
    order,
    date,
    customer,
    total,
    paymentStatus,
    fulfillmentStatus
  }, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable.Row, { id, selected: selectedResources.includes(id), position: index, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "bodyMd", fontWeight: "bold", as: "span", children: order }, void 0, false, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 149,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 148,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable.Cell, { children: date }, void 0, false, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 153,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable.Cell, { children: customer }, void 0, false, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 154,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable.Cell, { children: total }, void 0, false, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 155,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable.Cell, { children: paymentStatus }, void 0, false, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 156,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable.Cell, { children: fulfillmentStatus }, void 0, false, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 157,
      columnNumber: 11
    }, this)
  ] }, id, true, {
    fileName: "app/routes/app._index.jsx",
    lineNumber: 147,
    columnNumber: 16
  }, this));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Page, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ui-title-bar", { title: "Product List", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { variant: "primary", onClick: generateProduct, children: [
      "Generate a product",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductListData_default, {}, void 0, false, {
        fileName: "app/routes/app._index.jsx",
        lineNumber: 163,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 161,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 160,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VerticalStack, { gap: "5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VerticalStack, { gap: "5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VerticalStack, { gap: "2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "h2", variant: "headingMd", children: "Congrats on creating a new Shopify app \u{1F389} Hey This is the start point. I don't know how I go forward" }, void 0, false, {
            fileName: "app/routes/app._index.jsx",
            lineNumber: 174,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "bodyMd", as: "p", children: [
            "This embedded app template uses",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { url: "https://shopify.dev/docs/apps/tools/app-bridge", target: "_blank", children: "App Bridge" }, void 0, false, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 182,
              columnNumber: 21
            }, this),
            " ",
            "interface examples like an",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { url: "/app/additional", children: "additional page in the app nav" }, void 0, false, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 186,
              columnNumber: 21
            }, this),
            ", as well as an",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { url: "https://shopify.dev/docs/api/admin-graphql", target: "_blank", children: "Admin GraphQL" }, void 0, false, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 190,
              columnNumber: 21
            }, this),
            " ",
            "mutation demo, to provide a starting point for app development."
          ] }, void 0, true, {
            fileName: "app/routes/app._index.jsx",
            lineNumber: 180,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app._index.jsx",
          lineNumber: 173,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VerticalStack, { gap: "2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "h3", variant: "headingMd", children: "Get started with products" }, void 0, false, {
            fileName: "app/routes/app._index.jsx",
            lineNumber: 198,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "p", variant: "bodyMd", children: [
            "Generate a product with GraphQL and get the JSON output for that product. Learn more about the",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { url: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/productCreate", target: "_blank", children: "productCreate" }, void 0, false, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 204,
              columnNumber: 21
            }, this),
            " ",
            "mutation in our API references."
          ] }, void 0, true, {
            fileName: "app/routes/app._index.jsx",
            lineNumber: 201,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app._index.jsx",
          lineNumber: 197,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HorizontalStack, { gap: "3", align: "end", children: [
          (actionData == null ? void 0 : actionData.product) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { url: `https://admin.shopify.com/store/${shop}/admin/products/${productId}`, target: "_blank", children: "View product" }, void 0, false, {
            fileName: "app/routes/app._index.jsx",
            lineNumber: 211,
            columnNumber: 43
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { loading: isLoading, primary: true, onClick: generateProduct, children: "Generate a product" }, void 0, false, {
            fileName: "app/routes/app._index.jsx",
            lineNumber: 214,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app._index.jsx",
          lineNumber: 210,
          columnNumber: 17
        }, this),
        (actionData == null ? void 0 : actionData.product) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { padding: "4", background: "bg-subdued", borderColor: "border", borderWidth: "1", borderRadius: "2", overflowX: "scroll", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("pre", { style: {
          margin: 0
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { children: JSON.stringify(actionData.product, null, 2) }, void 0, false, {
          fileName: "app/routes/app._index.jsx",
          lineNumber: 222,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/routes/app._index.jsx",
          lineNumber: 219,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/app._index.jsx",
          lineNumber: 218,
          columnNumber: 41
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app._index.jsx",
        lineNumber: 172,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/app._index.jsx",
        lineNumber: 171,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/app._index.jsx",
        lineNumber: 170,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { secondary: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VerticalStack, { gap: "5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VerticalStack, { gap: "2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "h2", variant: "headingMd", children: "App template specs" }, void 0, false, {
            fileName: "app/routes/app._index.jsx",
            lineNumber: 233,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VerticalStack, { gap: "2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Divider, {}, void 0, false, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 237,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HorizontalStack, { align: "space-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "span", variant: "bodyMd", children: "Framework" }, void 0, false, {
                fileName: "app/routes/app._index.jsx",
                lineNumber: 239,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { url: "https://remix.run", target: "_blank", children: "Remix" }, void 0, false, {
                fileName: "app/routes/app._index.jsx",
                lineNumber: 242,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 238,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Divider, {}, void 0, false, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 246,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HorizontalStack, { align: "space-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "span", variant: "bodyMd", children: "Database" }, void 0, false, {
                fileName: "app/routes/app._index.jsx",
                lineNumber: 248,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { url: "https://www.prisma.io/", target: "_blank", children: "Prisma" }, void 0, false, {
                fileName: "app/routes/app._index.jsx",
                lineNumber: 251,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 247,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Divider, {}, void 0, false, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 255,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HorizontalStack, { align: "space-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "span", variant: "bodyMd", children: "Interface" }, void 0, false, {
                fileName: "app/routes/app._index.jsx",
                lineNumber: 257,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { url: "https://polaris.shopify.com", target: "_blank", children: "Polaris" }, void 0, false, {
                  fileName: "app/routes/app._index.jsx",
                  lineNumber: 261,
                  columnNumber: 25
                }, this),
                ", ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { url: "https://shopify.dev/docs/apps/tools/app-bridge", target: "_blank", children: "App Bridge" }, void 0, false, {
                  fileName: "app/routes/app._index.jsx",
                  lineNumber: 265,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/app._index.jsx",
                lineNumber: 260,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 256,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Divider, {}, void 0, false, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 270,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HorizontalStack, { align: "space-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "span", variant: "bodyMd", children: "API" }, void 0, false, {
                fileName: "app/routes/app._index.jsx",
                lineNumber: 272,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { url: "https://shopify.dev/docs/api/admin-graphql", target: "_blank", children: "GraphQL API" }, void 0, false, {
                fileName: "app/routes/app._index.jsx",
                lineNumber: 275,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 271,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app._index.jsx",
            lineNumber: 236,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app._index.jsx",
          lineNumber: 232,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/app._index.jsx",
          lineNumber: 231,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VerticalStack, { gap: "2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "h2", variant: "headingMd", children: "Next steps" }, void 0, false, {
            fileName: "app/routes/app._index.jsx",
            lineNumber: 284,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { spacing: "extraTight", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List.Item, { children: [
              "Build an",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { url: "https://shopify.dev/docs/apps/getting-started/build-app-example", target: "_blank", children: [
                " ",
                "example app"
              ] }, void 0, true, {
                fileName: "app/routes/app._index.jsx",
                lineNumber: 290,
                columnNumber: 23
              }, this),
              " ",
              "to get started"
            ] }, void 0, true, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 288,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List.Item, { children: [
              "Explore Shopify\u2019s API with",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { url: "https://shopify.dev/docs/apps/tools/graphiql-admin-api", target: "_blank", children: "GraphiQL" }, void 0, false, {
                fileName: "app/routes/app._index.jsx",
                lineNumber: 298,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 296,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app._index.jsx",
            lineNumber: 287,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app._index.jsx",
          lineNumber: 283,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/app._index.jsx",
          lineNumber: 282,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app._index.jsx",
        lineNumber: 230,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/app._index.jsx",
        lineNumber: 229,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 169,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 168,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VerticalStack, { gap: "5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LegacyCard, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable, { resourceName, itemCount: orders.length, selectedItemsCount: allResourcesSelected ? "All" : selectedResources.length, onSelectionChange: handleSelectionChange, headings: [{
      title: "Product"
    }, {
      title: "Status"
    }, {
      title: "Vendor"
    }, {
      title: "Price",
      alignment: "start"
    }, {
      title: "Inventory"
    }, {
      title: "Type"
    }], children: rowMarkup }, void 0, false, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 313,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 312,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 311,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 310,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 309,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app._index.jsx",
    lineNumber: 159,
    columnNumber: 10
  }, this);
}
_s(Index, "zNnkApiBnj9Uz7JsHXaJ7SxKO20=", false, function() {
  return [useNavigation, useLoaderData, useActionData, useSubmit, useIndexResourceState];
});
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default
};
//# sourceMappingURL=/build/routes/app._index-DHXUUMS5.js.map
