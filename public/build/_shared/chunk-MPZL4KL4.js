import {
  createHotContext,
  init_remix_hmr
} from "/build/_shared/chunk-PQTP4IOJ.js";

// app/routes/ProductListData.jsx
init_remix_hmr();
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\ProductListData.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\ProductListData.jsx"
  );
  import.meta.hot.lastModified = "1693587004536.1135";
}
function ProductListData() {
  return "vv";
}
_c = ProductListData;
var ProductListData_default = ProductListData;
var _c;
$RefreshReg$(_c, "ProductListData");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  ProductListData_default
};
//# sourceMappingURL=/build/_shared/chunk-MPZL4KL4.js.map
