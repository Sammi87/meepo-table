import { defineComponent as N, openBlock as b, createElementBlock as k, createElementVNode as O, normalizeClass as F, inject as A, computed as $, toDisplayString as z, createVNode as Y, Transition as fe, withCtx as q, createBlock as L, createCommentVNode as V, pushScopeId as re, popScopeId as ce, renderSlot as ue, ref as R, onMounted as oe, onUnmounted as De, useCssVars as $e, isRef as Le, resolveComponent as Ue, unref as x, Fragment as M, renderList as ae, resolveDynamicComponent as he, TransitionGroup as Ve, mergeProps as be, normalizeProps as Ne, guardReactiveProps as Oe, normalizeStyle as de, createTextVNode as Te, Teleport as Me, watch as ne, reactive as ze, provide as K, withDirectives as pe, vModelCheckbox as We, withKeys as G, vModelText as we, withModifiers as xe, markRaw as U } from "vue";
var W = /* @__PURE__ */ ((e) => (e.LEFT = "left", e.CENTER = "center", e.RIGHT = "right", e))(W || {}), le = /* @__PURE__ */ ((e) => (e.TEXT = "text", e.NUMBER = "number", e.SEARCH = "search", e.DATE = "date", e.EMAIL = "email", e.TEL = "tel", e.SELECT = "select", e.MULTISELECT = "multi-select", e))(le || {}), _e = /* @__PURE__ */ ((e) => (e.DISABLED = "disabled", e.ERROR = "error", e.OK = "ok", e.SUCCESS = "success", e))(_e || {}), X = /* @__PURE__ */ ((e) => (e.ASCEND = "ascend", e.DESCEND = "descend", e))(X || {}), Be = /* @__PURE__ */ ((e) => (e.PAGE = "page", e.TABLE = "table", e))(Be || {}), me = /* @__PURE__ */ ((e) => (e.FADEUP = "fade-up", e.NONE = "none", e.OPACITY = "opacity", e))(me || {}), He = /* @__PURE__ */ ((e) => (e.FOLD = "fold", e.CHECKBOX = "checkbox", e.TEXT = "text", e.NUMBER = "number", e.DATE = "date", e.CHIP = "chip", e.CONTEXTBUTTON = "contextbutton", e))(He || {}), Ke = /* @__PURE__ */ ((e) => (e.TEXTINPUT = "text", e.NUMBERINPUT = "number", e.DATEINPUT = "date", e.CHIPINPUT = "chip", e.CONTEXT_MENU = "context-menu", e.SELECTINPUT = "select", e.MULTISELECT = "multi-select", e))(Ke || {}), D = /* @__PURE__ */ ((e) => (e.OPTIONS = "options", e.ROWS = "rows", e.SUBSTORES = "subStores", e.COLUMNS = "columns", e.DATA = "data", e.RAWDATA = "raw-data", e.CONTROL = "control", e.TABLESERVICE = "table-service", e.READY = "ready", e))(D || {});
const Ge = (e, t = "sv", a, i, s) => {
  const o = a.findIndex((l) => (l == null ? void 0 : l.sortable) && l.columnId === e);
  if (typeof o == "number")
    return e === s.activeColumn ? s.sortingDirection = s.sortingDirection === X.ASCEND ? X.DESCEND : X.ASCEND : (s.activeColumn = e, s.sortingDirection = X.DESCEND), s.sortedRows = i.sort((l, n) => l.cells[o].value.toString().toLocaleUpperCase().localeCompare(n.cells[o].value.toString().toLocaleUpperCase(), t, { sensitivity: "base" }) * (s.sortingDirection === X.DESCEND ? 1 : -1)).map((l) => l.rowId), { columnId: e, direction: s.sortingDirection };
}, ve = (e, t, a) => {
  var r;
  const i = t.findIndex((u) => {
    var m;
    return u.columnId === ((m = a.initialSorting) == null ? void 0 : m.column);
  }), s = t.findIndex((u) => u == null ? void 0 : u.sortable), o = i > 0 ? i : s > 0 ? s : -1;
  if (typeof o != "number" || o < 0)
    return e.map((u) => u.rowId);
  const l = ((r = a.initialSorting) == null ? void 0 : r.direction) ?? X.DESCEND, n = a.locale ?? "sv";
  return e.sort((u, m) => u.cells[o].value.toString().toLocaleUpperCase().localeCompare(m.cells[o].value.toString().toLocaleUpperCase(), n, { sensitivity: "base" }) * (l ? 1 : -1)).map((u) => u.rowId);
}, Xe = (e, t, a, i, s, o) => s && i && o ? [...ve(e, t, a), ...ve(i, s, o)] : [...ve(e, t, a)], Ye = {
  class: "sort-icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16"
}, qe = /* @__PURE__ */ N({
  __name: "SortIcon",
  props: {
    direction: {}
  },
  setup(e) {
    return (t, a) => (b(), k("svg", Ye, [
      O("path", {
        class: F(["path", t.direction]),
        fill: "transparent",
        "stroke-width": "2",
        "stroke-linejoin": "round"
      }, null, 2)
    ]));
  }
}), B = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [i, s] of t)
    a[i] = s;
  return a;
}, Ze = /* @__PURE__ */ B(qe, [["__scopeId", "data-v-ef58c882"]]), je = (e) => (re("data-v-990eee38"), e = e(), ce(), e), Je = ["data-id", "data-hand-held-header"], Qe = { class: "column-header" }, et = {
  key: 0,
  class: "svg-ellipsis",
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 16 16"
}, tt = /* @__PURE__ */ je(() => /* @__PURE__ */ O("path", { class: "ellipsis" }, null, -1)), at = [
  tt
], ot = /* @__PURE__ */ N({
  __name: "headerCell",
  props: {
    columnId: {},
    gridSpace: {},
    tableId: {},
    type: {},
    align: {},
    editable: { type: Boolean },
    header: {},
    index: {},
    searchable: { type: Boolean },
    sortable: { type: Boolean },
    minimize: { type: Boolean },
    externalAttributes: {}
  },
  setup(e) {
    const t = e, { columns: a, rows: i, options: s, control: o, updatePages: l } = A(D.TABLESERVICE), n = (m) => o.activeColumn === m, r = $(
      () => n(t.columnId) ? o.sortingDirection : void 0
    ), u = (m) => {
      var y;
      m.preventDefault(), !t.minimize && t.sortable && (Ge(t.columnId.toString(), s == null ? void 0 : s.locale, a, i.value, o), ((y = s.initialSorting) == null ? void 0 : y.sortingType) !== Be.PAGE && l());
    };
    return (m, y) => (b(), k("th", {
      class: F([
        "ez-th",
        m.align,
        m.type,
        t.columnId,
        r.value,
        m.sortable,
        { minimized: t.minimize },
        { active: n(t.columnId) },
        { sortable: m.sortable }
      ]),
      "data-id": t.columnId,
      "data-hand-held-header": m.header,
      onClick: u
    }, [
      O("span", Qe, z(m.header), 1),
      Y(fe, { name: "sort" }, {
        default: q(() => [
          n(t.columnId) ? (b(), L(Ze, {
            key: 0,
            direction: r.value
          }, null, 8, ["direction"])) : V("", !0)
        ]),
        _: 1
      }),
      Y(fe, { name: "minimize" }, {
        default: q(() => [
          m.minimize ? (b(), k("svg", et, at)) : V("", !0)
        ]),
        _: 1
      })
    ], 10, Je));
  }
}), nt = /* @__PURE__ */ B(ot, [["__scopeId", "data-v-990eee38"]]), st = {}, lt = { class: "ez-base-btn" };
function it(e, t) {
  return b(), k("button", lt, [
    ue(e.$slots, "default")
  ]);
}
const rt = /* @__PURE__ */ B(st, [["render", it]]), J = (() => {
  const e = R(), t = R(), a = R(me.FADEUP);
  return { componentProps: e, parent: t, transition: a, set: (o, l) => {
    e.value = o, l && (a.value = l);
  }, close: () => {
    e.value = void 0;
  } };
})(), ct = (e, t, a = 8, i = W.LEFT) => {
  const s = e.left + e.width / 2 - t.width / 2, o = e.y + e.height;
  return { x: `${s}px`, y: `${o}px` };
}, Ie = () => document.activeElement ?? null, Q = (e) => e.focus(), ye = (e) => e == null ? void 0 : e.getBoundingClientRect(), ut = () => Date.now().toString(36) + Math.random().toString(36).substr(2), Re = (e, t = "sv-SE") => new Intl.DateTimeFormat(t).format(e), ie = (e) => getComputedStyle(document.body).getPropertyValue(e), dt = (e) => {
  const t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
  return t ? {
    r: parseInt(t[1], 16),
    g: parseInt(t[2], 16),
    b: parseInt(t[3], 16)
  } : { r: 128, g: 128, b: 128 };
}, pt = (e, t, a) => Math.sqrt(0.299 * e * e + 0.587 * t * t + 0.114 * a * a) / 255, ge = (e, t) => {
  let a = null;
  return function(...i) {
    a !== null && clearTimeout(a), a = setTimeout(() => {
      e(...i);
    }, t);
  };
}, mt = (e, t) => {
  var l;
  const i = Array.from(document.querySelectorAll('a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'));
  let o = i.indexOf(e) + t;
  o >= i.length && (o = 0), (l = i[o]) == null || l.focus();
}, vt = (e) => e.subStores !== void 0 ? e.subStores : void 0, ft = /* @__PURE__ */ N({
  __name: "CellButton",
  props: {
    rowId: {},
    cellProps: {},
    cellData: {},
    onRowClick: { type: Function }
  },
  setup(e) {
    const t = e, a = R(), i = () => {
      var s, o, l, n, r, u, m, y;
      parseInt(ie("--mobile-max-width") ?? "0") > window.innerWidth || ((s = t.cellProps) != null && s.onClick ? t.cellProps.onClick({ columnId: t.cellData.columnId, rowId: t.rowId }) : (o = t.cellData) != null && o.onClick ? typeof ((l = t.cellData) == null ? void 0 : l.onClick) == "boolean" && t.cellData.onClick && a.value ? J.set({
        type: t.cellData.type,
        rowId: t.rowId,
        columnId: t.cellData.columnId,
        positionData: ye(a.value.$el),
        value: t.cellProps.value,
        placeholder: t.cellProps.placeholder,
        validation: (n = t.cellProps) == null ? void 0 : n.validation
      }) : typeof ((r = t.cellData) == null ? void 0 : r.onClick) == "function" && ((m = (u = t.cellData) == null ? void 0 : u.onClick) == null || m.call(u, { columnId: t.cellData.columnId, rowId: t.rowId })) : (y = t.onRowClick) == null || y.call(t, t.rowId));
    };
    return (s, o) => {
      var l, n;
      return (l = t.cellProps) != null && l.onClick || (n = t.cellData) != null && n.onClick || t.onRowClick ? (b(), L(rt, {
        key: 0,
        ref_key: "cellRef",
        ref: a,
        class: "ez-cell-button",
        onClick: i
      }, null, 512)) : V("", !0);
    };
  }
}), ht = /* @__PURE__ */ B(ft, [["__scopeId", "data-v-e9069396"]]), gt = (e, t, a) => {
  if (!a || !e.value)
    return;
  const i = 5, s = 300, o = [], l = [];
  let n = e.value.scrollWidth, r = e.value.clientWidth;
  const u = (w, f) => {
    n = e.value.scrollWidth, r = e.value.clientWidth;
    for (const h in (w || e.value).children[0].children)
      if (parseInt(h) >= 0) {
        const C = parseInt(h), I = a[C];
        f ? l.push({
          id: I.columnId,
          width: e.value.children[0].children[h].clientWidth,
          prio: I.priority,
          hidden: !1
        }) : l[C].width = e.value.children[0].children[h].clientWidth;
      }
  };
  u(void 0, !0);
  const m = (w) => {
    const f = l.filter((C) => C.prio).length, h = l.filter((C) => C.hidden).length;
    if (f > h && r + i < n) {
      const C = l.filter((S) => !S.hidden && S.prio).sort((S, P) => S.prio < P.prio ? 1 : -1).pop(), I = l.find((S) => S.id === (C == null ? void 0 : C.id));
      C && I && (I.width = C.width, I.hidden = !0, o.push(n), t.value.push(C.id), w && (u(), p()), setTimeout(() => {
        u(), p();
      }, s));
    }
  }, y = () => {
    if (t.value.length > 0) {
      const w = l.find((f) => f.id === t.value[t.value.length - 1]);
      w && r > o[o.length - 1] && (l.find((f) => f.id === w.id).hidden = !1, o.pop(), t.value.pop(), setTimeout(() => {
        u(), _();
      }, s));
    }
  }, p = ge(() => m(!1), s), _ = ge(() => y(), s), v = new ResizeObserver((w) => {
    for (let f of w)
      u(f.target, !1), p(), _();
  });
  e.value && v.observe(e.value), oe(() => m(!0)), De(() => {
    v.disconnect();
  });
}, bt = {
  key: 0,
  class: "ez-thead"
}, wt = ["data-tooltip", "data-hand-held-header", "data-id"], _t = {
  key: 0,
  class: "ez-sub-row"
}, It = {
  key: 0,
  class: "ez-tr"
}, yt = /* @__PURE__ */ N({
  __name: "TableSection",
  props: {
    activeColumn: {},
    columns: {},
    data: {},
    options: {},
    rows: {},
    tableId: {},
    subStores: {}
  },
  emits: ["update:allSelected", "update:selected"],
  setup(e, { emit: t }) {
    $e((f) => ({
      "129fb47c": u.value,
      "1fdf3f16": m.value
    }));
    const a = e, i = a.subStores, { control: s, createCellId: o } = A(D.TABLESERVICE), l = s.subTablesVisible.has(a.tableId), n = vt(a), r = $(() => parseInt(ie("--mobile-max-width") ?? "0") > window.innerWidth), u = $(() => a.columns.filter((f) => f.visible).map((f) => p.value.length > 0 && f.gridSpace === "auto" ? p.value.includes(f.columnId) ? "var(--td-height)" : "minmax(min-content, 100%)" : f.gridSpace).join(" ")), m = $(() => r.value ? "1fr" : `1 / ${a.columns.length + 1}`), y = $(() => r.value ? "1fr" : `1 / ${a.columns.length}`), p = R([]), _ = R(), v = $(() => {
      const f = s.sortedRows.filter((h) => s.filteredRows.has(h) && (!l && s.activePage.size ? s.activePage.has(h) : !0));
      return (Le(a.rows) ? a.rows.value : a.rows).filter((h) => f.includes(h.rowId));
    }), w = (f) => {
      var C, I, S, P, c;
      const h = a.data.get(f);
      (C = a.options) != null && C.onRowClick && h && (n ? (S = (I = a.options).onRowClick) == null || S.call(I, h) : (c = (P = a.options).onRowClick) == null || c.call(P, h));
    };
    return oe(() => {
      var f;
      (f = a.options) != null && f.accordion && _.value && gt(_, p, a.columns);
    }), (f, h) => {
      var I, S, P;
      const C = Ue("TableSection", !0);
      return a.columns ? (b(), k("table", {
        key: 0,
        ref_key: "table",
        ref: _,
        class: F(["ez-table", { "has-sub-table": x(n) }, { "sub-table": a.tableId !== x(s).tableId }])
      }, [
        (I = a.options) != null && I.hideHeaderCells ? V("", !0) : (b(), k("thead", bt, [
          (b(!0), k(M, null, ae(f.columns, (c, T) => {
            var g;
            return b(), k(M, {
              key: c.columnId
            }, [
              c.visible ? (b(), L(he((c == null ? void 0 : c.headerComponent) ?? nt), {
                key: 0,
                align: c.align,
                type: c.type,
                columnId: c.columnId,
                editable: !!(c != null && c.onClick),
                gridSpace: c.gridSpace,
                header: (g = c.header) == null ? void 0 : g.value,
                index: T,
                searchable: c.searchable,
                sortable: c.sortable,
                tableId: f.tableId,
                minimize: p.value.includes(c.columnId)
              }, null, 8, ["align", "type", "columnId", "editable", "gridSpace", "header", "index", "searchable", "sortable", "tableId", "minimize"])) : V("", !0)
            ], 64);
          }), 128))
        ])),
        O("tbody", {
          class: F(["ez-tbody", { "input-borders": (S = a.options) == null ? void 0 : S.inputBorders }])
        }, [
          (b(!0), k(M, null, ae(v.value, (c) => {
            var T;
            return b(), L(Ve, {
              key: c.rowId,
              name: "table",
              tag: "tr",
              "data-id": c.rowId,
              class: F([
                "ez-tr",
                { clickable: (T = f.options) == null ? void 0 : T.onRowClick }
              ])
            }, {
              default: q(() => {
                var g, d;
                return [
                  (b(!0), k(M, null, ae(f.columns, (E, H) => {
                    var ee, te;
                    return b(), k(M, {
                      key: `${c.rowId}${E.columnId}`
                    }, [
                      E.visible ? (b(), k("td", {
                        key: 0,
                        class: F([
                          "ez-td",
                          E.columnId,
                          E.type,
                          E == null ? void 0 : E.align,
                          typeof E.classes == "string" ? E.classes : Array.isArray(E.classes) ? E.classes.join(" ") : "",
                          { minimized: p.value.includes(E.columnId) },
                          { editable: E.onClick }
                        ]),
                        "data-tooltip": E == null ? void 0 : E.tooltip,
                        "data-hand-held-header": (ee = E.header) == null ? void 0 : ee.value,
                        "data-id": x(o)(c.rowId, E.columnId)
                      }, [
                        E.type !== "fold" || E.type === "fold" && x(i) && ((te = x(i)) != null && te.has(c.rowId)) ? (b(), L(ht, {
                          key: 0,
                          "cell-data": E,
                          "cell-props": c.cells[H],
                          "on-row-click": w,
                          "row-id": c.rowId
                        }, null, 8, ["cell-data", "cell-props", "row-id"])) : V("", !0),
                        (b(), L(he(E.component), be({
                          key: `${c.rowId}-${E.columnId}`
                        }, c.cells[H], { "table-id": f.tableId }), null, 16, ["table-id"]))
                      ], 10, wt)) : V("", !0)
                    ], 64);
                  }), 128)),
                  (g = x(s).subTablesVisible) != null && g.has(c.rowId) && ((d = x(i)) != null && d.has(c.rowId)) ? (b(), k("td", _t, [
                    Y(C, Ne(Oe(x(i).get(c.rowId))), null, 16)
                  ])) : V("", !0)
                ];
              }),
              _: 2
            }, 1032, ["data-id", "class"]);
          }), 128)),
          !v.value.length && ((P = f.options) != null && P.tableEmptyMessage) ? (b(), k("tr", It, [
            O("td", {
              class: "ez-td empty-row",
              style: de({ "grid-column": y.value })
            }, z(typeof f.options.tableEmptyMessage == "string" ? f.options.tableEmptyMessage : f.options.tableEmptyMessage.value), 5)
          ])) : V("", !0)
        ], 2)
      ], 2)) : V("", !0);
    };
  }
}), Ct = /* @__PURE__ */ B(yt, [["__scopeId", "data-v-518d74ab"]]), Et = ["disabled", "onClick"], kt = {
  key: 0,
  viewBox: "0 0 16 16",
  class: "arrow",
  xmlns: "http://www.w3.org/2000/svg"
}, St = /* @__PURE__ */ N({
  __name: "Pagination",
  setup(e) {
    var y, p, _, v;
    const { control: t } = A(D.CONTROL), { options: a } = A(D.OPTIONS), i = ((y = a.pagination) == null ? void 0 : y.align) ?? W.RIGHT, s = ((p = a.pagination) == null ? void 0 : p.pagesToShow) ?? 5, o = ((_ = a.pagination) == null ? void 0 : _.goToFirstLast) ?? !0, l = ((v = a.pagination) == null ? void 0 : v.goToPrevNext) ?? !0, n = R(), r = $(() => [...t.paginationPages.values()]), u = (w, f) => {
      var C, I;
      w == null || w.preventDefault(), t.activePageNumber = f;
      const h = (I = (C = t.paginationPages) == null ? void 0 : C.get(f)) == null ? void 0 : I.page;
      h && (t.activePage = new Set(h)), setTimeout(() => {
        var S, P;
        (P = (S = n.value.getElementsByClassName("active")) == null ? void 0 : S[0]) == null || P.focus();
      }, 300);
    }, m = $(() => {
      const w = r.value.length;
      if (s > w)
        return r.value.map((f, h) => ({
          id: f.id,
          type: "page",
          fn: (C) => u(C, h),
          value: (h + 1).toString(),
          active: t.activePageNumber === h
        }));
      {
        const f = Math.ceil(s / 2);
        let h = t.activePageNumber - f, C = t.activePageNumber + f + (h < 0 ? Math.abs(h) : 0);
        return h -= C > r.value.length - 1 ? C - r.value.length - 1 : 0, r.value.reduce((I, S, P) => {
          var c;
          return h < P && C >= P ? I.push({ id: S.id, type: "page", fn: (T) => u(T, P), value: (P + 1).toString(), active: t.activePageNumber === P }) : ((c = I == null ? void 0 : I[I.length - 1]) == null ? void 0 : c.type) !== "truncate" && I.push({ id: "truncate", type: "truncate" }), I;
        }, []).reduce((I, S, P, c) => (I.push(S), P === 0 && t.activePageNumber !== 0 && l && I.unshift({ id: "back", type: "back", fn: (T) => u(T, t.activePageNumber - 1) }), P === 0 && t.activePageNumber > 1 && o && I.unshift({ id: "first", type: "first", fn: (T) => u(T, 0) }), P === c.length - 1 && t.activePageNumber !== r.value.length - 1 && l && I.push({ id: "next", type: "next", fn: (T) => u(T, t.activePageNumber + 1) }), P === c.length - 1 && t.activePageNumber < r.value.length - 2 && o && I.push({ id: "last", type: "last", fn: (T) => u(T, r.value.length - 1) }), I), []);
      }
    });
    return oe(() => {
      u(void 0, t.activePageNumber);
    }), (w, f) => (b(), k("div", {
      ref_key: "paginationGroup",
      ref: n,
      class: F(["pagination", x(i)])
    }, [
      Y(Ve, {
        name: "page-btn",
        appear: ""
      }, {
        default: q(() => [
          (b(!0), k(M, null, ae(m.value, (h) => (b(), k("button", {
            key: h.id,
            class: F(["pagination-btn", h.type, h.active ? "active" : ""]),
            disabled: h.type === "truncate",
            onClick: h.fn
          }, [
            h.type !== "page" && h.type !== "truncate" ? (b(), k("svg", kt, [
              O("path", {
                class: F([h.type === "first" || h.type === "back" ? "arrow-left" : "arrow-right", h.type === "first" || h.type === "last" ? "double-arrow-path" : "arrow-path"]),
                d: "M4 0, 12 8, 4 16"
              }, null, 2)
            ])) : V("", !0),
            h.type === "truncate" ? (b(), k(M, { key: 1 }, [
              Te(" ... ")
            ], 64)) : V("", !0),
            h.type === "page" ? (b(), k(M, { key: 2 }, [
              Te(z(h.value), 1)
            ], 64)) : V("", !0)
          ], 10, Et))), 128))
        ]),
        _: 1
      })
    ], 2));
  }
}), Tt = /* @__PURE__ */ B(St, [["__scopeId", "data-v-8386da09"]]), xt = (e) => {
  const t = R(0), a = R(0), i = (s) => {
    e();
  };
  return oe(() => window.addEventListener("resize", i)), De(() => window.removeEventListener("resize", i)), { x: t, y: a };
}, Rt = {
  key: 0,
  class: "overlay-container"
}, Pt = /* @__PURE__ */ N({
  __name: "Overlay",
  props: {
    active: { type: Boolean },
    transition: { default: me.FADEUP },
    teleport: { default: "body" }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const a = e, i = t;
    return xt(() => i("close")), (s, o) => (b(), L(Me, {
      to: a.teleport
    }, [
      Y(fe, {
        name: a.transition
      }, {
        default: q(() => [
          a.active ? (b(), k("div", Rt, [
            O("div", {
              class: "overlay-mask",
              onClick: o[0] || (o[0] = (l) => i("close"))
            }),
            ue(s.$slots, "default")
          ])) : V("", !0)
        ]),
        _: 3
      }, 8, ["name"])
    ], 8, ["to"]));
  }
}), Dt = /* @__PURE__ */ N({
  __name: "CellInputOverlay",
  props: {
    tableId: {},
    columns: {}
  },
  emits: ["update:cellValue"],
  setup(e, { emit: t }) {
    const a = e, { createCellId: i } = A(D.TABLESERVICE), s = t;
    parseInt(ie("--tablet-max-width")) ?? parseInt(ie("--mobile-max-width"));
    const o = R(), l = R(), n = R();
    ne(J.componentProps, (p) => {
      var _;
      l.value = J.componentProps.value ?? void 0, o.value = ((_ = a.columns.find((v) => {
        var w;
        return v.columnId === ((w = J.componentProps.value) == null ? void 0 : w.columnId);
      })) == null ? void 0 : _.editComponent) ?? void 0;
    });
    const r = $(() => {
      var _, v, w;
      if (!l.value)
        return;
      const p = l.value.positionData;
      if (((_ = l.value) == null ? void 0 : _.type) === "contextbutton" && ((v = o.value) != null && v.$el)) {
        const f = ye((w = o.value) == null ? void 0 : w.$el);
        return ct(p, f);
      }
      return {
        top: `${p.top}px`,
        left: `${p.left + p.width / 2}px`,
        width: `${p.width - p.width / 2}px`,
        height: `${p.height}px`
      };
    }), u = (p) => {
      var w, f;
      const _ = (w = l.value) == null ? void 0 : w.columnId, v = (f = l.value) == null ? void 0 : f.rowId;
      n.value = p, v && _ && s("update:cellValue", { cellId: i(v, _), value: p });
    }, m = ge((p) => y(p), 100), y = (p) => {
      p && u(p), n.value = void 0, o.value = void 0, J.close();
    };
    return (p, _) => p.tableId ? (b(), L(Pt, {
      key: 0,
      teleport: p.tableId,
      transition: x(me).NONE,
      active: !!r.value && !!o.value && !!l.value,
      onClose: x(m)
    }, {
      default: q(() => {
        var v;
        return [
          O("div", {
            class: F(["input-container", { "use-background": ((v = l.value) == null ? void 0 : v.useBackground) ?? !0 }]),
            style: de(r.value),
            onClick: _[1] || (_[1] = //@ts-ignore
            (...w) => x(m) && x(m)(...w))
          }, [
            (b(), L(he(o.value), be({ ref: "child" }, l.value, {
              "onAbort:input": _[0] || (_[0] = () => x(m)()),
              "onClose:input": x(m)
            }), null, 16, ["onClose:input"]))
          ], 6)
        ];
      }),
      _: 1
    }, 8, ["teleport", "transition", "active", "onClose"])) : V("", !0);
  }
}), $t = /* @__PURE__ */ N({
  __name: "Table",
  emits: ["update:allSelected", "update:selected", "update:cellValue"],
  setup(e, { emit: t }) {
    var p;
    const a = t;
    A(D.RAWDATA);
    const { data: i } = A(D.DATA), { rows: s } = A(D.ROWS), { options: o } = A(D.OPTIONS), { columns: l } = A(D.COLUMNS), { subStores: n } = A(D.SUBSTORES), { control: r } = A(D.CONTROL), { ready: u } = A(D.READY), m = A(D.TABLESERVICE), y = R(!1);
    return (p = o.pagination) != null && p.rowsPerPage && m.updatePages(), oe(() => y.value = !0), (_, v) => (b(), k(M, null, [
      Y(Ct, {
        data: x(i),
        rows: x(m).rows,
        columns: x(l),
        "active-column": x(r).activeColumn,
        "table-id": x(r).tableId,
        options: x(o),
        subStores: x(n),
        "onUpdate:allSelected": v[0] || (v[0] = (w) => a("update:allSelected", w)),
        "onUpdate:selected": v[1] || (v[1] = (w) => a("update:selected", w))
      }, null, 8, ["data", "rows", "columns", "active-column", "table-id", "options", "subStores"]),
      x(u) && x(r).paginationPages.size > 1 ? (b(), L(Tt, {
        key: 0,
        activePageNumber: x(r).activePageNumber,
        rows: x(s),
        paginatonPages: x(r).paginationPages
      }, null, 8, ["activePageNumber", "rows", "paginatonPages"])) : V("", !0),
      y.value ? (b(), L(Dt, {
        key: 1,
        columns: x(l),
        tableId: `#${x(r).tableId}`,
        "onUpdate:cellValue": v[2] || (v[2] = (w) => a("update:cellValue", w))
      }, null, 8, ["columns", "tableId"])) : V("", !0)
    ], 64));
  }
}), se = {
  data: (e, t) => {
    const a = /* @__PURE__ */ new Map();
    return e.forEach((i) => a.set(t.setRowId(i), i)), a;
  },
  rows: (e, t, a, i) => t.map((o) => {
    const l = i.setRowId(o);
    return {
      rowId: l,
      cells: a.map((n) => {
        var u;
        const r = typeof (n == null ? void 0 : n.getValue) == "object" ? { [n.getValue.key]: n.getValue.value(o) } : { value: n != null && n.getValue ? n.getValue(o) : [] };
        return {
          tableId: e,
          rowId: l,
          columnId: n.columnId,
          type: n.type,
          ...r,
          ...((u = n == null ? void 0 : n.getProps) == null ? void 0 : u.call(n, o)) ?? {}
        };
      })
    };
  }),
  subStores: (e, t) => {
    var i;
    const a = /* @__PURE__ */ new Map();
    if ((i = e.subTable) != null && i.options && e.subData) {
      const s = e.subTable, o = e.subData;
      return t.forEach((l) => {
        var _, v;
        const n = o(l), r = e.options.setRowId(l), u = s.options, m = s.columns, y = /* @__PURE__ */ new Map();
        n.forEach((w) => y.set(u.setRowId(w), w));
        const p = {
          activeColumn: ((_ = m.find((w) => w.sortable)) == null ? void 0 : _.columnId) ?? "",
          columns: m,
          data: y,
          rows: Vt(r, n, m, u),
          tableId: r,
          options: (v = e.subTable) == null ? void 0 : v.options
        };
        p.rows.length && a.set(r, p);
      }), a;
    }
    return a;
  },
  pages: (e, t, a) => {
    var u, m, y, p, _;
    if (!(e != null && e.pagination))
      return;
    const i = (v) => {
      const w = [];
      if (v != null && v.size) {
        const f = [...v.values()].map((h) => h.rows.map((C) => C.rowId)).flat();
        return [...t.filteredRows].filter((h) => !f.includes(h));
      }
      return w;
    };
    (u = t.paginationPages) == null || u.clear();
    const s = i(a), o = ((m = e.pagination) == null ? void 0 : m.rowsPerPage) ?? 1, l = Math.ceil(s.length / o);
    let n = t.activePageNumber ?? 0;
    t.activePageNumber = n > l - 1 ? l - 1 : n;
    for (let v = 0; v < l; v++) {
      const w = s.slice(v * o, o * (v + 1));
      (y = t.paginationPages) == null || y.set(v, { id: `page${v}`, page: w });
    }
    const r = (_ = (p = t.paginationPages) == null ? void 0 : p.get(t == null ? void 0 : t.activePageNumber)) == null ? void 0 : _.page;
    r && (t.activePage = new Set(r));
  },
  getSubRows: (e) => e ? [...e.values()].map((t) => t.rows).flat() : []
}, Vt = (e, t, a, i) => t.map((o) => {
  const l = i.setRowId(o);
  return {
    rowId: l,
    cells: a.map((n) => {
      var u;
      const r = typeof (n == null ? void 0 : n.getValue) == "object" ? { [n.getValue.key]: n.getValue.value(o) } : { value: n != null && n.getValue ? n.getValue(o) : [] };
      return {
        tableId: e,
        rowId: l,
        columnId: n.columnId,
        type: n.type,
        ...r,
        ...((u = n == null ? void 0 : n.getProps) == null ? void 0 : u.call(n, o)) ?? {}
      };
    })
  };
}), Ae = (e) => (re("data-v-2761e28d"), e = e(), ce(), e), Nt = { class: "field-label" }, Ot = { class: "field" }, Bt = { class: "field-icon-container" }, At = {
  key: 0,
  class: "field-Icon search",
  viewBox: "0 0 16 16"
}, Ft = /* @__PURE__ */ Ae(() => /* @__PURE__ */ O("circle", {
  cx: "7",
  cy: "7",
  r: "6"
}, null, -1)), Lt = /* @__PURE__ */ Ae(() => /* @__PURE__ */ O("path", { d: "M11 11, 15 15" }, null, -1)), Ut = [
  Ft,
  Lt
], Mt = { class: "field-info" }, zt = /* @__PURE__ */ N({
  __name: "InputBase",
  props: {
    type: { default: le.TEXT },
    label: { default: "" },
    status: { default: _e.OK },
    infoText: { default: "" }
  },
  setup(e) {
    return (t, a) => (b(), k("div", {
      class: F(["input-field", t.status])
    }, [
      O("div", Nt, z(t.label), 1),
      O("div", Ot, [
        O("div", Bt, [
          t.type === x(le).SEARCH ? (b(), k("svg", At, Ut)) : V("", !0)
        ]),
        ue(t.$slots, "default", {}, void 0, !0)
      ]),
      O("div", Mt, z(t.infoText), 1)
    ], 2));
  }
}), Wt = /* @__PURE__ */ B(zt, [["__scopeId", "data-v-2761e28d"]]), Ht = (e) => ({ status: _e.OK, msg: "" }), Kt = ["id", "placeholder", "type", "value"], Gt = /* @__PURE__ */ N({
  __name: "TextField",
  props: {
    id: { default: ut() },
    modelValue: { default: "" },
    placeholder: {},
    validation: {},
    type: {},
    label: {},
    status: {},
    infoText: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, i = t, s = $(() => Ht(a.validation));
    return (o, l) => (b(), L(Wt, Ne(Oe({
      type: o.type,
      label: o.label,
      status: s.value.status,
      infoText: s.value.msg
    })), {
      default: q(() => [
        O("input", {
          id: o.id,
          placeholder: o.placeholder,
          type: o.type,
          value: o.modelValue,
          onInput: l[0] || (l[0] = (n) => i("update:modelValue", n.target.value))
        }, null, 40, Kt)
      ]),
      _: 1
    }, 16));
  }
}), Xt = /* @__PURE__ */ B(Gt, [["__scopeId", "data-v-1edccf5a"]]), Pe = (e, t, a, i) => {
  const s = t.map((l) => !!l.searchable);
  let o = !1;
  return a.filter((l) => !!l.cells.find((n, r) => (n.value && s[r] ? n.format ? n.format(n.value) : n.value : "").toString().toLocaleUpperCase().indexOf(e.toLocaleUpperCase()) > -1)).forEach((l) => {
    i.filteredRows.add(l.rowId), o = !!l.rowId;
  }), o;
}, Yt = (e, t, a, i, s) => {
  i.filteredRows.clear(), Pe(e, t, a, i), s == null || s.forEach((o, l) => {
    Pe(e, t, a, i), i.filteredRows.has(o.tableId) && o.rows.forEach((n) => {
      i.filteredRows.add(n.rowId);
    });
  });
}, qt = /* @__PURE__ */ N({
  __name: "FilterRow",
  setup(e) {
    const { columns: t, rows: a, options: i, control: s, subStores: o, updatePages: l } = A(D.TABLESERVICE), n = i.searchFilter ? typeof i.searchFilter == "function" ? i.searchFilter : Yt : !1, r = R(""), u = {
      type: le.SEARCH,
      label: "Search",
      placeholder: "Search..."
    }, m = (y) => {
      n && (n(y, [...t], a.value, s, o == null ? void 0 : o.value), l());
    };
    return (y, p) => x(n) ? (b(), L(Xt, be({
      key: 0,
      id: "table-search"
    }, u, {
      modelValue: r.value,
      "onUpdate:modelValue": [
        p[0] || (p[0] = (_) => r.value = _),
        p[1] || (p[1] = (_) => m(_))
      ]
    }), null, 16, ["modelValue"])) : V("", !0);
  }
}), Zt = (e, t, a, i, s, o, l, n, r) => {
  const u = (g, d) => `${g}@${d}`, m = (g) => {
    const d = g.split("@");
    return { columnId: d[0], rowId: d[1] };
  }, y = (g) => {
    const d = s.value.find((E) => E.rowId === g);
    return d || [...r.value.values()].find((E) => E.rows.find((H) => H.rowId === g));
  }, p = (g) => i.find((d) => d.columnId === g), _ = (g, d) => y(g).cells.find((E) => E.columnId === d), v = (g) => i.map((d) => d.columnId).indexOf(g), w = (g) => s.value.map((d) => d.rowId).indexOf(g), f = () => o.activeColumn ?? "", h = (g) => {
    var d, E;
    return (d = o.rowsSelected) != null && d.has(g) ? o.rowsSelected.delete(g) : (E = o.rowsSelected) == null ? void 0 : E.add(g);
  }, C = (g) => {
    var d, E;
    (d = o.subTablesVisible) != null && d.has(g) ? o.subTablesVisible.delete(g) : (E = o.subTablesVisible) == null || E.add(g);
  }, I = (g) => {
    var d;
    return (d = o.subTablesVisible) == null ? void 0 : d.has(g);
  }, S = (g) => !!(r != null && r.value.has(g)), P = (g) => [...g.values()].map((d) => d.rows).flat(), c = () => {
    if (r != null && r.value.size) {
      const g = P(r.value).map((d) => d.rowId);
      return new Set(o.sortedRows.filter((d) => o.filteredRows.has(d) && !g.includes(d)));
    } else
      return new Set(o.sortedRows.filter((g) => o.filteredRows.has(g)));
  };
  return {
    data: e,
    rawData: t,
    options: a,
    subOptions: l,
    columns: i,
    rows: s,
    subColumns: n,
    subStores: r,
    control: o,
    createCellId: u,
    divideCellId: m,
    checkRow: h,
    getActiveColumn: f,
    getCell: _,
    getColumn: p,
    getColumnIndex: v,
    getRow: y,
    getRowIndex: w,
    getSubRows: P,
    getTopLevelVisibleRowIds: c,
    hasSubRows: S,
    subTableIsOpen: I,
    toggleFold: C,
    updatePages: () => {
      var te, Ce, Ee, ke, Se;
      if (!(a != null && a.pagination))
        return;
      (te = o.paginationPages) == null || te.clear();
      const g = [...c()], d = ((Ce = a.pagination) == null ? void 0 : Ce.rowsPerPage) ?? 1, E = Math.ceil(g.length / d);
      let H = o.activePageNumber ?? 0;
      o.activePageNumber = H > E - 1 ? E - 1 : H;
      for (let j = 0; j < E; j++) {
        const Fe = g.slice(j * d, d * (j + 1));
        (Ee = o.paginationPages) == null || Ee.set(j, { id: `page${j}`, page: Fe });
      }
      const ee = (Se = (ke = o.paginationPages) == null ? void 0 : ke.get(o == null ? void 0 : o.activePageNumber)) == null ? void 0 : Se.page;
      ee && (o.activePage = new Set(ee));
    }
  };
}, jt = ["id"], Ua = /* @__PURE__ */ N({
  __name: "EZTableFacade",
  props: {
    table: {},
    data: {}
  },
  emits: ["update:allSelected", "update:selected", "update:cellValue", "tableService"],
  setup(e, { emit: t }) {
    var m, y, p, _, v, w, f, h;
    const a = e, i = t, s = R(!1), o = $(() => a.data ? se.rows(a.table.tableId, a.data, a.table.columns, a.table.options) : []), l = $(() => {
      var I;
      const C = /* @__PURE__ */ new Map();
      return (I = a.data) == null || I.forEach((S) => C.set(a.table.options.setRowId(S), S)), C;
    }), n = $(() => a.data ? se.subStores(a.table, a.data) : /* @__PURE__ */ new Map()), r = ze({
      tableId: a.table.tableId,
      activeColumn: R(((y = (m = a.table.options) == null ? void 0 : m.initialSorting) == null ? void 0 : y.column) ?? ((p = a.table.columns.find((C) => C.sortable)) == null ? void 0 : p.columnId) ?? ""),
      activePageNumber: R(0),
      activePage: R(/* @__PURE__ */ new Set()),
      filteredRows: R(/* @__PURE__ */ new Set()),
      sortedRows: R([]),
      rowsSelected: R(/* @__PURE__ */ new Set()),
      subTablesVisible: R(/* @__PURE__ */ new Set()),
      paginationPages: R(/* @__PURE__ */ new Map()),
      sortingDirection: ((_ = a.table.options.initialSorting) == null ? void 0 : _.direction) ?? X.DESCEND
    }), u = Zt(l, a.data, a.table.options, a.table.columns, o, r, (v = a.table.subTable) == null ? void 0 : v.options, (w = a.table.subTable) == null ? void 0 : w.columns, n);
    return i("tableService", u), ne(() => a.data, (C, I) => {
      var S, P;
      C && ([...o.value.map((c) => c.rowId), ...n.value ? se.getSubRows(n.value).map((c) => c.rowId) : []].forEach((c) => r.filteredRows.add(c)), r.sortedRows = Xe(o.value, a.table.columns, a.table.options, se.getSubRows(n.value), (S = a.table.subTable) == null ? void 0 : S.columns, (P = a.table.subTable) == null ? void 0 : P.options), u && u.updatePages(), s.value = !0);
    }, {
      immediate: !0,
      deep: !0
    }), K(D.RAWDATA, { rawData: a.data }), K(D.DATA, { data: l }), K(D.OPTIONS, { options: a.table.options, subOption: (f = a.table.subTable) == null ? void 0 : f.options }), K(D.ROWS, { rows: o }), K(D.SUBSTORES, { subStores: n }), K(D.COLUMNS, { columns: a.table.columns, subColumns: (h = a.table.subTable) == null ? void 0 : h.columns }), K(D.CONTROL, { control: r }), K(D.READY, { ready: s }), K(D.TABLESERVICE, u), (C, I) => s.value ? (b(), k("div", {
      key: 0,
      id: a.table.tableId,
      class: "ez-ez"
    }, [
      ue(C.$slots, "filters", {}, () => [
        Y(qt)
      ]),
      Y($t, {
        "onUpdate:cellValue": I[0] || (I[0] = (S) => i("update:cellValue", S)),
        "onUpdate:allSelected": I[1] || (I[1] = (S) => i("update:allSelected", S)),
        "onUpdate:selected": I[2] || (I[2] = (S) => i("update:selected", S))
      })
    ], 8, jt)) : V("", !0);
  }
}), Jt = { class: "chip" }, Qt = /* @__PURE__ */ N({
  __name: "Chip",
  props: {
    type: {},
    value: {},
    statusColor: { default: "hsl(325, 50%, 90%)" },
    columnId: {},
    rowId: {},
    onClick: {}
  },
  setup(e) {
    $e((l) => ({
      "18f7b468": l.statusColor
    }));
    const t = e, { r: a, g: i, b: s } = dt(t.statusColor), o = pt(a, i, s) < 0.5 ? "white" : "black";
    return (l, n) => (b(), k("div", Jt, [
      O("span", {
        class: "chip-text",
        style: de({ color: x(o) })
      }, z(l.value), 5)
    ]));
  }
}), ea = /* @__PURE__ */ B(Qt, [["__scopeId", "data-v-c6bf72bc"]]), ta = { class: "text" }, aa = /* @__PURE__ */ N({
  __name: "Text",
  props: {
    type: { default: "text" },
    value: {},
    format: { type: Function, default: (e) => e },
    align: {},
    columnId: {},
    rowId: {},
    onClick: {}
  },
  setup(e) {
    const t = e, a = $(() => t.format(t.value));
    return (i, s) => (b(), k("span", ta, z(a.value), 1));
  }
}), oa = /* @__PURE__ */ B(aa, [["__scopeId", "data-v-8a9b292a"]]), na = { class: "text" }, sa = /* @__PURE__ */ N({
  __name: "Number",
  props: {
    type: { default: "number" },
    value: {},
    format: { type: Function, default: (e) => e },
    align: {},
    columnId: {},
    rowId: {},
    onClick: {}
  },
  setup(e) {
    const t = e, a = $(() => t.format(t.value));
    return (i, s) => (b(), k("span", na, z(a.value), 1));
  }
}), la = /* @__PURE__ */ B(sa, [["__scopeId", "data-v-58a6ed87"]]), ia = { class: "text" }, ra = /* @__PURE__ */ N({
  __name: "Date",
  props: {
    type: { default: "date" },
    value: {},
    format: { type: Function, default: (e) => e },
    align: {},
    columnId: {},
    rowId: {},
    onClick: {}
  },
  setup(e) {
    const t = e, a = $(() => t.format(t.value));
    return (i, s) => (b(), k("span", ia, z(a.value), 1));
  }
}), ca = /* @__PURE__ */ B(ra, [["__scopeId", "data-v-ecd618ee"]]), ua = (e) => (re("data-v-9f27988a"), e = e(), ce(), e), da = {
  key: 0,
  class: "fold-container"
}, pa = /* @__PURE__ */ ua(() => /* @__PURE__ */ O("path", {
  class: "arrow",
  d: "M4 0, 12 8, 4 16"
}, null, -1)), ma = [
  pa
], va = ["id"], fa = /* @__PURE__ */ N({
  __name: "Fold",
  props: {
    type: { default: "fold" },
    value: { type: Boolean },
    columnId: {},
    rowId: {},
    onClick: {}
  },
  setup(e) {
    const t = e, { hasSubRows: a, subTableIsOpen: i, toggleFold: s, control: o } = A(D.TABLESERVICE), l = a(t.rowId), n = $(() => i(t.rowId)), r = () => {
      s(t.rowId);
    };
    return (u, m) => x(l) ? (b(), k("div", da, [
      (b(), k("svg", {
        viewBox: "0 0 16 16",
        xmlns: "http://www.w3.org/2000/svg",
        class: F({ "fold-out": n.value })
      }, ma, 2)),
      O("input", {
        id: `fold-${u.rowId}`,
        class: "checkbox-input",
        type: "checkbox",
        onChange: r
      }, null, 40, va)
    ])) : V("", !0);
  }
}), ha = /* @__PURE__ */ B(fa, [["__scopeId", "data-v-9f27988a"]]), ga = (e) => (re("data-v-498649c1"), e = e(), ce(), e), ba = { class: "checkbox-container" }, wa = /* @__PURE__ */ ga(() => /* @__PURE__ */ O("path", {
  class: "check",
  d: "M18 8L10 16L6 12",
  "stroke-width": "2",
  "stroke-linejoin": "round"
}, null, -1)), _a = [
  wa
], Ia = ["id"], ya = /* @__PURE__ */ N({
  __name: "Checkbox",
  props: {
    type: {},
    value: { type: Boolean, default: !1 },
    indeterminate: { type: Boolean, default: !1 },
    onUpdate: {},
    columnId: {},
    rowId: {},
    onClick: {}
  },
  setup(e) {
    const t = e, { checkRow: a } = A(D.TABLESERVICE), i = R(t.value), s = () => {
      i.value && a(t.rowId);
    };
    return (o, l) => (b(), k("div", ba, [
      (b(), k("svg", {
        viewBox: "0 0 24 24",
        width: "24",
        heigh: "24",
        xmlns: "http://www.w3.org/2000/svg",
        class: F(["checkbox-visual", { checked: i.value }])
      }, _a, 2)),
      pe(O("input", {
        id: `cb-${o.rowId}`,
        "onUpdate:modelValue": l[0] || (l[0] = (n) => i.value = n),
        class: "checkbox-input",
        type: "checkbox",
        onChange: s
      }, null, 40, Ia), [
        [We, i.value]
      ])
    ]));
  }
}), Ca = /* @__PURE__ */ B(ya, [["__scopeId", "data-v-498649c1"]]), Ea = { viewBox: "0 0 16 16" }, ka = ["d"], Sa = /* @__PURE__ */ N({
  __name: "ContextButton",
  props: {
    type: { default: "context-button" },
    path: { default: "M6 2a2 2 0 1 0 4 0a2 2 0 1 0 -4 0M6 8a2 2 0 1 0 4 0a2 2 0 1 0 -4 0M6 14a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" },
    options: {},
    columnId: {},
    rowId: {},
    onClick: {}
  },
  setup(e) {
    const t = e, a = R(null), i = () => {
      t.options.length === 1 ? t.options[0].action() : a.value && J.set({
        useBackground: !1,
        type: "context-button",
        rowId: t.rowId,
        columnId: t.columnId,
        positionData: a.value.getBoundingClientRect(),
        contextOptions: t.options
      });
    };
    return (s, o) => t.options ? (b(), k("button", {
      key: 0,
      ref_key: "menuRef",
      ref: a,
      class: "icon-options",
      onClick: i
    }, [
      (b(), k("svg", Ea, [
        O("path", { d: s.path }, null, 8, ka)
      ]))
    ], 512)) : V("", !0);
  }
}), Ta = /* @__PURE__ */ B(Sa, [["__scopeId", "data-v-53bf4198"]]), xa = ["placeholder"], Ra = /* @__PURE__ */ N({
  __name: "OverlayTextField",
  props: {
    type: {},
    rowId: {},
    columnId: {},
    positionData: {},
    contextOptions: {},
    placeholder: {},
    useBackground: { type: Boolean },
    validation: { type: Function },
    value: {}
  },
  emits: ["update:modelValue", "close:input", "abort:input"],
  setup(e, { emit: t }) {
    const a = e, i = t, s = Ie(), o = (a == null ? void 0 : a.value) ?? "", l = R(), n = R(a.value ?? ""), r = () => {
      s && Q(s), i("close:input", n.value);
    }, u = (p) => {
      p.target.value = n.value, i("update:modelValue", p.target.value);
    }, m = () => {
      s && Q(s), i("abort:input", o);
    }, y = ne(l, (p) => {
      p == null || p.focus(), y();
    });
    return (p, _) => pe((b(), k("input", {
      ref_key: "inputElement",
      ref: l,
      "onUpdate:modelValue": _[0] || (_[0] = (v) => n.value = v),
      class: "table-input text",
      placeholder: a.placeholder ?? "",
      onInput: u,
      onKeypress: G(r, ["enter"]),
      onKeydown: G(m, ["esc"]),
      onFocusout: r
    }, null, 40, xa)), [
      [we, n.value]
    ]);
  }
}), Pa = /* @__PURE__ */ B(Ra, [["__scopeId", "data-v-83ffb4b5"]]), Da = ["placeholder"], $a = /* @__PURE__ */ N({
  __name: "OverlayNumberField",
  props: {
    type: {},
    rowId: {},
    columnId: {},
    positionData: {},
    contextOptions: {},
    placeholder: {},
    useBackground: { type: Boolean },
    validation: { type: Function },
    value: {}
  },
  emits: ["update:modelValue", "close:input"],
  setup(e, { emit: t }) {
    var p;
    const a = e, i = t, s = Ie(), o = ((p = a.value) == null ? void 0 : p.toString()) ?? "", l = R(), n = R(a.value), r = () => {
      s && Q(s), i("close:input", n.value);
    }, u = (_) => {
      var v;
      _.target.value = ((v = n.value) == null ? void 0 : v.toString()) ?? "", i("update:modelValue", n.value);
    }, m = () => {
      s && Q(s), i("close:input", parseInt(o) ?? void 0);
    }, y = ne(l, (_) => {
      _ == null || _.focus(), y();
    });
    return (_, v) => pe((b(), k("input", {
      ref_key: "inputElement",
      ref: l,
      "onUpdate:modelValue": v[0] || (v[0] = (w) => n.value = w),
      class: "table-input number",
      placeholder: a.placeholder ?? "",
      onInput: u,
      onKeyup: G(r, ["enter"]),
      onKeydown: G(m, ["esc"]),
      onFocusout: r
    }, null, 40, Da)), [
      [
        we,
        n.value,
        void 0,
        { number: !0 }
      ]
    ]);
  }
}), Va = /* @__PURE__ */ B($a, [["__scopeId", "data-v-e6fa435a"]]), Na = /* @__PURE__ */ N({
  __name: "OverlayDateField",
  props: {
    type: {},
    rowId: {},
    columnId: {},
    positionData: {},
    contextOptions: {},
    placeholder: {},
    useBackground: { type: Boolean },
    validation: { type: Function },
    value: {}
  },
  emits: ["update:modelValue", "close:input"],
  setup(e, { emit: t }) {
    const a = e, i = t, s = Ie(), o = a.value ? Re(a.value) : "";
    let l = !1;
    const n = R(), r = R(o), u = R(!1), m = (c) => {
      const T = [
        (d) => parseInt(d) === 1 || parseInt(d) === 2,
        (d) => parseInt(d) === 19 || parseInt(d) === 20,
        (d) => typeof parseInt(d.slice(-1)) == "number",
        (d) => typeof parseInt(d.slice(-1)) == "number"
      ];
      return c.split("").reduce((d, E, H) => T[H](d + E) ? d + E : d, "").length === c.length;
    }, y = (c) => ({ event: c, element: c.target, value: c.target.value.replace(/[^\d-]/g, "") }), p = (c) => c.slice(0, c.length - 1), _ = (c) => {
      const { event: T, element: g, value: d } = y(c);
      d.slice(-1) === "-" && (r.value = p(d));
    }, v = async () => {
      try {
        Re(new Date(r.value)), i("close:input", new Date(r.value));
      } catch {
        await C(), i("close:input", o ? new Date(o) : void 0);
      }
      s && !l && Q(s);
    }, w = (c) => {
      const { event: T, value: g } = y(c);
      if (T.key === "backspace" || T.key === "enter")
        return;
      let d = g.replace(/[^\d-]/g, "").slice(0, 10);
      if (/\d/.test(d.slice(4, 5)) && (d = d.slice(0, 4) + "-" + d.slice(4, d.length)), /\d/.test(d.slice(7, 8)) && (d = d.slice(0, 7) + "-" + d.slice(7, d.length)), r.value.length >= 10 && new Date(r.value).valueOf()) {
        i("update:modelValue", new Date(r.value));
        return;
      } else
        d = d.slice(0, 9);
      r.value = d;
    }, f = (c) => {
      const { event: T, value: g } = y(c);
      if (T.key === "backspace" || T.key === "enter")
        return;
      const d = g.split("-");
      m(d[0]) || (r.value = p(g.slice(0, 4))), parseInt(d[1]) > 12 && (r.value = d[0]);
    }, h = () => {
      s && Q(s), i("close:input", o ? new Date(o) : void 0);
    }, C = async () => {
      u.value = !0, await new Promise((c) => {
        setTimeout(() => u.value = !1, 1), setTimeout(() => c("resolved"), 500);
      });
    }, I = (c, T) => {
      c.preventDefault(), c.stopImmediatePropagation(), l = !0, mt(s, T === "forwards" ? 1 : -1), v();
    }, S = (c) => {
      c.preventDefault(), c.stopImmediatePropagation(), l || v();
    }, P = ne(n, (c) => {
      c == null || c.focus(), P();
    });
    return (c, T) => pe((b(), k("input", {
      ref_key: "inputElement",
      ref: n,
      "onUpdate:modelValue": T[0] || (T[0] = (g) => r.value = g),
      class: F(["table-input date", { error: u.value }]),
      placeholder: "yyyy-mm-dd",
      onInput: w,
      onKeyup: [
        f,
        G(_, ["backspace"]),
        G(v, ["enter"])
      ],
      onKeydown: [
        G(h, ["esc"]),
        T[1] || (T[1] = G(xe((g) => I(g, "forwards"), ["exact"]), ["tab"])),
        T[2] || (T[2] = G(xe((g) => I(g, "backwards"), ["shift"]), ["tab"]))
      ],
      onFocusout: S
    }, null, 34)), [
      [we, r.value]
    ]);
  }
}), Oa = /* @__PURE__ */ B(Na, [["__scopeId", "data-v-1cf4406f"]]), Ba = ["onClick"], Aa = /* @__PURE__ */ N({
  __name: "ContextMenu",
  props: {
    type: {},
    rowId: {},
    columnId: {},
    positionData: {},
    contextOptions: {}
  },
  emits: ["close:input"],
  setup(e, { emit: t }) {
    const a = e, i = t, s = R(), o = (n, r) => {
      n.preventDefault(), n.stopPropagation(), r.action(), i("close:input");
    }, l = $(() => {
      if (!s.value)
        return { x: "-1000px", y: "-1000px" };
      const n = ye(s.value);
      a.positionData.x, a.positionData.y;
      const r = a.positionData.width, u = a.positionData.height;
      n.x, n.y;
      const m = n.width;
      n.height;
      const y = r - m + "px", p = u + 1 + "px";
      return { x: y, y: p };
    });
    return (n, r) => n.contextOptions ? (b(), k("ul", {
      key: 0,
      ref_key: "menuRef",
      ref: s,
      class: "context-menu",
      style: de({ left: l.value.x, top: l.value.y })
    }, [
      (b(!0), k(M, null, ae(n.contextOptions, (u) => (b(), k("li", {
        key: u.label,
        class: "menu-item",
        onClick: (m) => o(m, u)
      }, z(u.label), 9, Ba))), 128))
    ], 4)) : V("", !0);
  }
}), Fa = /* @__PURE__ */ B(Aa, [["__scopeId", "data-v-6fc5aedf"]]), Z = (e) => ({
  visible: !0,
  ...e
}), Ma = (e) => Z({
  classes: "button-cell",
  getValue: (t) => !1,
  header: $(() => ""),
  sortable: !1,
  searchable: !1,
  align: W.CENTER,
  gridSpace: "var(--th-height)",
  ...e,
  type: "fold",
  component: U(ha)
}), za = (e) => Z(
  {
    classes: "button-cell",
    type: "checkbox",
    component: U(Ca),
    getValue: (t) => !1,
    header: $(() => ""),
    sortable: !1,
    searchable: !1,
    align: W.CENTER,
    gridSpace: "var(--th-height)",
    ...e
  }
), Wa = (e) => Z(
  {
    getValue: (t) => "",
    header: $(() => "Text"),
    sortable: !0,
    searchable: !0,
    align: W.LEFT,
    gridSpace: "auto",
    onClick: !1,
    editComponent: U(Pa),
    ...e,
    type: "text",
    component: U(oa)
  }
), Ha = (e) => Z({
  getValue: (t) => {
  },
  header: $(() => "Number"),
  sortable: !0,
  searchable: !0,
  align: W.RIGHT,
  gridSpace: "min-content",
  onClick: !1,
  editComponent: U(Va),
  ...e,
  type: "number",
  component: U(la)
}), Ka = (e) => Z({
  getValue: (t) => {
  },
  header: $(() => "Date"),
  sortable: !0,
  searchable: !0,
  align: W.CENTER,
  gridSpace: "min-content",
  onClick: !1,
  editComponent: U(Oa),
  ...e,
  type: "date",
  component: U(ca)
}), Ga = (e) => Z({
  getValue: (t) => {
  },
  header: $(() => "Chip"),
  sortable: !0,
  searchable: !0,
  align: W.CENTER,
  gridSpace: "min-content",
  onClick: !1,
  ...e,
  type: "chip",
  component: U(ea)
}), Xa = (e) => Z({
  classes: "button-cell",
  getValue: (t) => {
  },
  header: $(() => ""),
  sortable: !1,
  searchable: !1,
  align: W.CENTER,
  gridSpace: "var(--th-height)",
  editComponent: U(Fa),
  ...e,
  onClick: !1,
  type: "context-button",
  component: U(Ta)
});
export {
  W as AlignX,
  He as BaseCell,
  Ua as EZTable,
  D as Injector,
  Ke as InputCellType,
  _e as InputStatus,
  le as InputType,
  Be as SortType,
  X as SortingDirection,
  me as TransitionType,
  za as checkboxColumn,
  Ga as chipColumn,
  Z as columnFn,
  Xa as contextButtonColumn,
  Ka as dateColumn,
  mt as focusAdjcentElement,
  Ma as foldColumn,
  vt as hasSubStore,
  Ha as numberColumn,
  Wa as textColumn
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXotdGFibGUuanMiLCJzb3VyY2VzIjpbIi4uL3NyYy90eXBlcy9lbnVtcy50cyIsIi4uL3NyYy9maWx0ZXJVdGlscy9zb3J0Um93cy50cyIsIi4uL3NyYy9jb21wb25lbnRzL3RhYmxlL2hlYWRlckNlbGwudnVlIiwiLi4vc3JjL2NvbXBvbmVudHMvaW5wdXRzL0Jhc2VCdXR0b24udnVlIiwiLi4vc3JjL3NlcnZpY2VzL292ZXJsYXlTZXJ2aWNlLnRzIiwiLi4vc3JjL3V0aWxzL2dlbmVyYWxVdGlscy50cyIsIi4uL3NyYy9jb21wb25lbnRzL2lucHV0cy9DZWxsQnV0dG9uLnZ1ZSIsIi4uL3NyYy91dGlscy9wYXJ0aWFscy50cyIsIi4uL3NyYy9jb21wb25lbnRzL3RhYmxlL1RhYmxlU2VjdGlvbi52dWUiLCIuLi9zcmMvY29tcG9uZW50cy90YWJsZS9QYWdpbmF0aW9uLnZ1ZSIsIi4uL3NyYy9jb21wb3NhYmxlcy93aW5kb3dSZXNpemUudHMiLCIuLi9zcmMvY29tcG9uZW50cy9vdmVybGF5cy9PdmVybGF5LnZ1ZSIsIi4uL3NyYy9jb21wb25lbnRzL292ZXJsYXlzL0NlbGxJbnB1dE92ZXJsYXkudnVlIiwiLi4vc3JjL2NvbXBvbmVudHMvdGFibGUvVGFibGUudnVlIiwiLi4vc3JjL3V0aWxzL2J1aWxkVXRpbHMudHMiLCIuLi9zcmMvc2VydmljZXMvSW5wdXRWYWxpZGF0aW9uU2VydmljZS50cyIsIi4uL3NyYy9jb21wb25lbnRzL2lucHV0cy9UZXh0RmllbGQudnVlIiwiLi4vc3JjL2ZpbHRlclV0aWxzL3NlYXJjaEZpbHRlci50cyIsIi4uL3NyYy9jb21wb25lbnRzL3RhYmxlL0ZpbHRlclJvdy52dWUiLCIuLi9zcmMvc2VydmljZXMvdGFibGVTZXJ2aWNlLnRzIiwiLi4vc3JjL2NvbXBvbmVudHMvdGFibGUvRVpUYWJsZUZhY2FkZS52dWUiLCIuLi9zcmMvY29tcG9uZW50cy9jZWxscy9DaGlwLnZ1ZSIsIi4uL3NyYy9jb21wb25lbnRzL2NlbGxzL1RleHQudnVlIiwiLi4vc3JjL2NvbXBvbmVudHMvY2VsbHMvTnVtYmVyLnZ1ZSIsIi4uL3NyYy9jb21wb25lbnRzL2NlbGxzL0RhdGUudnVlIiwiLi4vc3JjL2NvbXBvbmVudHMvY2VsbHMvRm9sZC52dWUiLCIuLi9zcmMvY29tcG9uZW50cy9jZWxscy9DaGVja2JveC52dWUiLCIuLi9zcmMvY29tcG9uZW50cy9jZWxscy9Db250ZXh0QnV0dG9uLnZ1ZSIsIi4uL3NyYy9jb21wb25lbnRzL292ZXJsYXlzL092ZXJsYXlUZXh0RmllbGQudnVlIiwiLi4vc3JjL2NvbXBvbmVudHMvb3ZlcmxheXMvT3ZlcmxheU51bWJlckZpZWxkLnZ1ZSIsIi4uL3NyYy9jb21wb25lbnRzL292ZXJsYXlzL092ZXJsYXlEYXRlRmllbGQudnVlIiwiLi4vc3JjL2NvbXBvbmVudHMvb3ZlcmxheXMvQ29udGV4dE1lbnUudnVlIiwiLi4vc3JjL2NvbXBvbmVudHMvdGFibGUvY29sdW1ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBBbGlnblgge1xyXG4gIExFRlQgPSBcImxlZnRcIixcclxuICBDRU5URVIgPSBcImNlbnRlclwiLFxyXG4gIFJJR0hUID0gXCJyaWdodFwiLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBJbnB1dFR5cGUge1xyXG4gIFRFWFQgPSAndGV4dCcsXHJcbiAgTlVNQkVSID0gJ251bWJlcicsXHJcbiAgU0VBUkNIID0gJ3NlYXJjaCcsXHJcbiAgREFURSA9ICdkYXRlJyxcclxuICBFTUFJTCA9ICdlbWFpbCcsXHJcbiAgVEVMID0gJ3RlbCcsXHJcbiAgU0VMRUNUID0gJ3NlbGVjdCcsXHJcbiAgTVVMVElTRUxFQ1QgPSAnbXVsdGktc2VsZWN0J1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBJbnB1dFN0YXR1cyB7XHJcbiAgRElTQUJMRUQgPSAnZGlzYWJsZWQnLFxyXG4gIEVSUk9SID0gJ2Vycm9yJyxcclxuICBPSyA9ICdvaycsXHJcbiAgU1VDQ0VTUyA9ICdzdWNjZXNzJyxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gU29ydGluZ0RpcmVjdGlvbiB7XHJcbiAgQVNDRU5EID0gJ2FzY2VuZCcsXHJcbiAgREVTQ0VORCA9ICdkZXNjZW5kJ1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBTb3J0VHlwZSB7XHJcbiAgUEFHRSA9ICdwYWdlJyxcclxuICBUQUJMRSA9ICd0YWJsZSdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVHJhbnNpdGlvblR5cGUge1xyXG4gIEZBREVVUCA9ICdmYWRlLXVwJyxcclxuICBOT05FID0gJ25vbmUnLFxyXG4gIE9QQUNJVFkgPSAnb3BhY2l0eSdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQmFzZUNlbGwge1xyXG4gIEZPTEQgPSAnZm9sZCcsXHJcbiAgQ0hFQ0tCT1ggPSAnY2hlY2tib3gnLFxyXG4gIFRFWFQgPSAndGV4dCcsXHJcbiAgTlVNQkVSID0gJ251bWJlcicsXHJcbiAgREFURSA9ICdkYXRlJyxcclxuICBDSElQID0gJ2NoaXAnLFxyXG4gIENPTlRFWFRCVVRUT04gPSAnY29udGV4dGJ1dHRvbicsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIElucHV0Q2VsbFR5cGUge1xyXG4gIFRFWFRJTlBVVCA9ICd0ZXh0JyxcclxuICBOVU1CRVJJTlBVVCA9ICdudW1iZXInLFxyXG4gIERBVEVJTlBVVCA9ICdkYXRlJyxcclxuICBDSElQSU5QVVQgPSAnY2hpcCcsXHJcbiAgQ09OVEVYVF9NRU5VID0gJ2NvbnRleHQtbWVudScsXHJcbiAgU0VMRUNUSU5QVVQgPSAnc2VsZWN0JyxcclxuICBNVUxUSVNFTEVDVCA9ICdtdWx0aS1zZWxlY3QnLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBJbmplY3RvciB7XHJcbiBPUFRJT05TID0gJ29wdGlvbnMnLFxyXG4gUk9XUyA9ICdyb3dzJyxcclxuU1VCU1RPUkVTID0gJ3N1YlN0b3JlcycsXHJcbkNPTFVNTlMgPSAnY29sdW1ucycsXHJcbkRBVEEgPSAnZGF0YScsXHJcblJBV0RBVEEgPSAncmF3LWRhdGEnLFxyXG5DT05UUk9MID0gJ2NvbnRyb2wnLFxyXG5UQUJMRVNFUlZJQ0UgPSAndGFibGUtc2VydmljZScsXHJcblJFQURZID0gJ3JlYWR5J1xyXG59IiwiXHJcbmltcG9ydCB7IFJvdywgQ29sdW1uLCBDb250cm9sT2JqZWN0LCBDb2x1bW5JZCwgVGFibGVPcHRpb25zLCBSb3dJZCwgU3ViVGFibGVPcHRpb25zIH0gZnJvbSBcIkAvdHlwZXMvdGFibGVUeXBlc1wiO1xyXG5pbXBvcnQgeyBTb3J0VHlwZSwgU29ydGluZ0RpcmVjdGlvbiB9IGZyb20gXCJAL3R5cGVzL2VudW1zXCI7XHJcbmltcG9ydCB7IENvbW1vblByb3BzIH0gZnJvbSBcIkAvdHlwZXMvY2VsbFR5cGVzXCI7XHJcbmltcG9ydCB7IHVwZGF0ZSB9IGZyb20gXCJAL3V0aWxzL2J1aWxkVXRpbHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBzb3J0Um93cyA9IDxULCBTPihhY3RpdmU6IENvbHVtbklkLCBsb2NhbGU6IHN0cmluZyA9ICdzdicsIGNvbHVtbnM6IENvbHVtbjxDb21tb25Qcm9wcywgVD5bXSwgcm93czogUm93W10sIGNvbnRyb2w6IENvbnRyb2xPYmplY3QpOiB7IGNvbHVtbklkOiBzdHJpbmcsIGRpcmVjdGlvbjogU29ydGluZ0RpcmVjdGlvbiB9IHwgdm9pZCA9PiB7XHJcbiAgXHJcbiAgY29uc3QgaW5kZXggPSBjb2x1bW5zLmZpbmRJbmRleChjID0+IGM/LnNvcnRhYmxlICYmIGMuY29sdW1uSWQgPT09IGFjdGl2ZSk7XHJcbiAgXHJcbiAgaWYgKHR5cGVvZiBpbmRleCAhPT0gJ251bWJlcicpIHJldHVybjtcclxuXHJcbiAgaWYoYWN0aXZlID09PSBjb250cm9sLmFjdGl2ZUNvbHVtbikge1xyXG4gICAgY29udHJvbC5zb3J0aW5nRGlyZWN0aW9uID0gY29udHJvbC5zb3J0aW5nRGlyZWN0aW9uID09PSBTb3J0aW5nRGlyZWN0aW9uLkFTQ0VORCBcclxuICAgID8gU29ydGluZ0RpcmVjdGlvbi5ERVNDRU5EXHJcbiAgICA6IFNvcnRpbmdEaXJlY3Rpb24uQVNDRU5EXHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnRyb2wuYWN0aXZlQ29sdW1uID0gYWN0aXZlO1xyXG4gICAgY29udHJvbC5zb3J0aW5nRGlyZWN0aW9uID0gU29ydGluZ0RpcmVjdGlvbi5ERVNDRU5EO1xyXG4gIH1cclxuXHJcbiAgY29udHJvbC5zb3J0ZWRSb3dzID0gcm93cy5zb3J0KChhOiBSb3csIGI6IFJvdykgPT4ge1xyXG4gICAgcmV0dXJuIGEuY2VsbHNbaW5kZXhdLnZhbHVlLnRvU3RyaW5nKCkudG9Mb2NhbGVVcHBlckNhc2UoKS5sb2NhbGVDb21wYXJlKGIuY2VsbHNbaW5kZXhdLnZhbHVlLnRvU3RyaW5nKCkudG9Mb2NhbGVVcHBlckNhc2UoKSwgbG9jYWxlLCB7IHNlbnNpdGl2aXR5OiAnYmFzZScgfSkgKiAoY29udHJvbC5zb3J0aW5nRGlyZWN0aW9uID09PSBTb3J0aW5nRGlyZWN0aW9uLkRFU0NFTkQgPyAxIDogLTEpO1xyXG4gIH0pLm1hcChyID0+IHIucm93SWQpO1xyXG5cclxuICByZXR1cm4geyBjb2x1bW5JZDogYWN0aXZlLCBkaXJlY3Rpb246IGNvbnRyb2wuc29ydGluZ0RpcmVjdGlvbiB9O1xyXG59O1xyXG5cclxuY29uc3Qgc29ydCA9IDxULCBTPihyb3dzOiBSb3dbXSwgY29sdW1uczogQ29sdW1uPENvbW1vblByb3BzLCBUPltdLCBvcHRpb25zOiBUYWJsZU9wdGlvbnM8VCwgUz4pID0+IHtcclxuICBjb25zdCBpbml0MSA9IGNvbHVtbnMuZmluZEluZGV4KGMgPT4gYy5jb2x1bW5JZCA9PT0gb3B0aW9ucy5pbml0aWFsU29ydGluZz8uY29sdW1uKTtcclxuICBjb25zdCBpbml0MiA9IGNvbHVtbnMuZmluZEluZGV4KGMgPT4gYz8uc29ydGFibGUpXHJcbiAgY29uc3QgaW5kZXggPSBpbml0MSA+IDAgPyBpbml0MSA6IGluaXQyID4gMCA/IGluaXQyIDogLTE7XHJcbiAgXHJcbiAgaWYgKHR5cGVvZiBpbmRleCAhPT0gJ251bWJlcicgfHwgaW5kZXggPCAwKSByZXR1cm4gcm93cy5tYXAociA9PiByLnJvd0lkKTtcclxuICBjb25zdCBkaXI6IFNvcnRpbmdEaXJlY3Rpb24gPSBvcHRpb25zLmluaXRpYWxTb3J0aW5nPy5kaXJlY3Rpb24gPz8gU29ydGluZ0RpcmVjdGlvbi5ERVNDRU5EO1xyXG4gIGNvbnN0IGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlID8/ICdzdic7XHJcblxyXG4gIHJldHVybiByb3dzLnNvcnQoKGE6IFJvdywgYjogUm93KSA9PiB7XHJcbiAgICByZXR1cm4gYS5jZWxsc1tpbmRleF0udmFsdWUudG9TdHJpbmcoKS50b0xvY2FsZVVwcGVyQ2FzZSgpLmxvY2FsZUNvbXBhcmUoYi5jZWxsc1tpbmRleF0udmFsdWUudG9TdHJpbmcoKS50b0xvY2FsZVVwcGVyQ2FzZSgpLCBsb2NhbGUsIHsgc2Vuc2l0aXZpdHk6ICdiYXNlJyB9KSAqIChkaXIgPyAxIDogLTEpO1xyXG4gIH0pLm1hcChyID0+IHIucm93SWQpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFNvcnQgPSA8VCwgUz4ocm93czogUm93W10sIGNvbHVtbnM6IENvbHVtbjxDb21tb25Qcm9wcywgVD5bXSwgb3B0aW9uczogVGFibGVPcHRpb25zPFQsIFM+LCBzdWJSb3dzPzogUm93W10sIHN1YkNvbHVtbnM/OiBDb2x1bW48Q29tbW9uUHJvcHMsIFM+W10sIHN1Yk9wdGlvbnM/OiBTdWJUYWJsZU9wdGlvbnM8Uz4pOiBSb3dJZFtdICA9PiB7XHJcbiByZXR1cm4gc3ViQ29sdW1ucyAmJiBzdWJSb3dzICYmIHN1Yk9wdGlvbnNcclxuICA/IFsuLi5zb3J0KHJvd3MsIGNvbHVtbnMsIG9wdGlvbnMpLCAuLi5zb3J0KHN1YlJvd3MsIHN1YkNvbHVtbnMsIHN1Yk9wdGlvbnMpXVxyXG4gIDogWy4uLnNvcnQocm93cywgY29sdW1ucywgb3B0aW9ucyldXHJcbn0iLCI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiIGdlbmVyaWM9XCJULCBTXCI+XHJcbmltcG9ydCB7IENvbHVtbklkLCBIZWFkZXJDb2x1bW4gfSBmcm9tIFwiQC90eXBlcy90YWJsZVR5cGVzXCI7XHJcbmltcG9ydCB7IEluamVjdG9yLCBTb3J0VHlwZSwgU29ydGluZ0RpcmVjdGlvbiB9IGZyb20gXCJAL3R5cGVzL2VudW1zXCI7XHJcbmltcG9ydCB7IGNvbXB1dGVkLCBpbmplY3QsIHJlZiB9IGZyb20gXCJ2dWVcIjtcclxuaW1wb3J0IHsgc29ydFJvd3MgfSBmcm9tIFwiQC9maWx0ZXJVdGlscy9zb3J0Um93c1wiO1xyXG5pbXBvcnQgU29ydEljb24gZnJvbSBcIkAvYXNzZXRzL3N2Zy9Tb3J0SWNvbi52dWVcIjtcclxuaW1wb3J0IHsgSW5qZWN0U2VydmljZSB9IGZyb20gXCJAL3R5cGVzL2luamVjdFR5cGVzXCI7XHJcblxyXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPEhlYWRlckNvbHVtbj4oKTtcclxuXHJcbmNvbnN0IHsgY29sdW1ucywgcm93cywgb3B0aW9ucywgY29udHJvbCwgdXBkYXRlUGFnZXMgfSA9IGluamVjdChJbmplY3Rvci5UQUJMRVNFUlZJQ0UpIGFzIEluamVjdFNlcnZpY2U8VCwgUz47XHJcbmNvbnN0IGNvbHVtbkFjdGl2ZSA9IChpZDogQ29sdW1uSWQpID0+IGNvbnRyb2wuYWN0aXZlQ29sdW1uID09PSBpZFxyXG5jb25zdCBkaXJlY3Rpb24gPSBjb21wdXRlZDxTb3J0aW5nRGlyZWN0aW9uIHwgdW5kZWZpbmVkPigoKSA9PlxyXG4gIGNvbHVtbkFjdGl2ZShwcm9wcy5jb2x1bW5JZCkgPyBjb250cm9sLnNvcnRpbmdEaXJlY3Rpb24gOiB1bmRlZmluZWQsXHJcbik7XHJcbmNvbnN0IG9uQ2xpY2sgPSAoZXY6IEV2ZW50KSA9PiB7XHJcbiAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICBpZiAoIXByb3BzLm1pbmltaXplICYmIHByb3BzLnNvcnRhYmxlKSB7XHJcbiAgICBzb3J0Um93cyhwcm9wcy5jb2x1bW5JZC50b1N0cmluZygpLCBvcHRpb25zPy5sb2NhbGUsIGNvbHVtbnMsIHJvd3MudmFsdWUsIGNvbnRyb2wpO1xyXG4gICAgaWYob3B0aW9ucy5pbml0aWFsU29ydGluZz8uc29ydGluZ1R5cGUgIT09IFNvcnRUeXBlLlBBR0UpIHVwZGF0ZVBhZ2VzKCk7XHJcbiAgfVxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjx0ZW1wbGF0ZT5cclxuICA8dGhcclxuICAgIDpjbGFzcz1cIltcclxuICAgICAgJ2V6LXRoJyxcclxuICAgICAgYWxpZ24sXHJcbiAgICAgIHR5cGUsXHJcbiAgICAgIHByb3BzLmNvbHVtbklkLFxyXG4gICAgICBkaXJlY3Rpb24sXHJcbiAgICAgIHNvcnRhYmxlLFxyXG4gICAgICB7IG1pbmltaXplZDogcHJvcHMubWluaW1pemUgfSxcclxuICAgICAgeyBhY3RpdmU6IGNvbHVtbkFjdGl2ZShwcm9wcy5jb2x1bW5JZCkgfSxcclxuICAgICAgeyBzb3J0YWJsZTogc29ydGFibGUgfSxcclxuICAgIF1cIlxyXG4gICAgOmRhdGEtaWQ9XCJwcm9wcy5jb2x1bW5JZFwiXHJcbiAgICA6ZGF0YS1oYW5kLWhlbGQtaGVhZGVyPVwiaGVhZGVyXCJcclxuICAgIEBjbGljaz1cIm9uQ2xpY2tcIlxyXG4gID5cclxuICAgIDxzcGFuXHJcbiAgICAgIGNsYXNzPVwiY29sdW1uLWhlYWRlclwiXHJcbiAgICA+e3sgaGVhZGVyIH19PC9zcGFuPlxyXG4gICAgPHRyYW5zaXRpb24gbmFtZT1cInNvcnRcIj5cclxuICAgICAgPFNvcnRJY29uXHJcbiAgICAgICAgdi1pZj1cImNvbHVtbkFjdGl2ZShwcm9wcy5jb2x1bW5JZClcIlxyXG4gICAgICAgIDpkaXJlY3Rpb249XCJkaXJlY3Rpb25cIlxyXG4gICAgICAvPlxyXG4gICAgPC90cmFuc2l0aW9uPlxyXG4gICAgPFRyYW5zaXRpb24gbmFtZT1cIm1pbmltaXplXCI+XHJcbiAgICAgIDxzdmdcclxuICAgICAgICB2LWlmPVwibWluaW1pemVcIlxyXG4gICAgICAgIGNsYXNzPVwic3ZnLWVsbGlwc2lzXCJcclxuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICB3aWR0aD1cIjE2XCJcclxuICAgICAgICBoZWlnaHQ9XCIxNlwiXHJcbiAgICAgICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXHJcbiAgICAgID5cclxuICAgICAgICA8cGF0aCBjbGFzcz1cImVsbGlwc2lzXCIgLz5cclxuICAgICAgPC9zdmc+XHJcbiAgICA8L1RyYW5zaXRpb24+XHJcbiAgPC90aD5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cclxuQGltcG9ydCAnQC9hc3NldHMvc3R5bGVzL3RyYW5zaXRpb25zJztcclxuLmV6LXRoIHtcclxuICB0cmFuc2l0aW9uOiBwYWRkaW5nIDFzICRlYXNlb3V0cXVpbnQ7XHJcbiAgLmNvbHVtbi1oZWFkZXIgeyBcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IG1heC13aWR0aCwgdHJhbnNmb3JtLCBvcGFjaXR5O1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogJGVhc2VvdXRxdWludDtcclxuICB9XHJcbiAgJi5taW5pbWl6ZWQge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC5jb2x1bW4taGVhZGVyIHsgXHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgbWF4LXdpZHRoOiAwJTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7IH1cclxuICB9XHJcbn1cclxuLnNvcnQtY29udGFpbmVyLFxyXG4uc29ydC1pY29uIHtcclxuICBtYXJnaW4tbGVmdDogLjI1cmVtO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbn1cclxuXHJcblxyXG4uc29ydC1lbnRlci1hY3RpdmUsXHJcbi5zb3J0LWxlYXZlLWFjdGl2ZSB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XHJcbn1cclxuXHJcbi5zb3J0LWVudGVyLWZyb20sXHJcbi5zb3J0LWxlYXZlLXRvIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHdpZHRoOiAwO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbn1cclxuXHJcbi5taW5pbWl6ZS1lbnRlci1hY3RpdmUge1xyXG4gIHRyYW5zaXRpb246IGFsbCAuNXMgLjI1cyAkZWFzZW91dHF1aW50O1xyXG59XHJcbi5taW5pbWl6ZS1sZWF2ZS1hY3RpdmUge1xyXG4gIHRyYW5zaXRpb246IGFsbCAuNXMgJGVhc2VvdXRxdWludDtcclxufVxyXG4ubWluaW1pemUtZW50ZXItZnJvbSxcclxuLm1pbmltaXplLWxlYXZlLXRvIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMCkgdHJhbnNsYXRlWCgtNTAlKTtcclxuXHJcbn1cclxuXHJcbi5zdmctZWxsaXBzaXMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGVYKC01MCUpO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcclxufVxyXG4uZWxsaXBzaXMge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XHJcbiAgZmlsbDogdmFyKC0tdGgtZWxsaXBzaXMtZmlsbCk7XHJcbiAgZDogcGF0aCgnTTYgMmEyIDIgMCAxIDAgNCAwYTIgMiAwIDEgMCAtNCAwTTYgOGEyIDIgMCAxIDAgNCAwYTIgMiAwIDEgMCAtNCAwTTYgMTRhMiAyIDAgMSAwIDQgMGEyIDIgMCAxIDAgLTQgMCcpO1xyXG59XHJcblxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGJ1dHRvbiBjbGFzcz1cImV6LWJhc2UtYnRuXCI+XHJcbiAgICA8c2xvdCAvPlxyXG4gIDwvYnV0dG9uPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XHJcbjp3aGVyZSguZXotYmFzZS1idG4pIHtcclxuICBmb250LXNpemU6IHVuc2V0O1xyXG4gIGZvbnQ6IHVuc2V0O1xyXG4gIGNvbG9yOiB1bnNldDtcclxuICB3aWR0aDogdW5zZXQ7XHJcbiAgaGVpZ2h0OiB1bnNldDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IHVuc2V0O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG48L3N0eWxlPlxyXG4iLCJpbXBvcnQgeyBBbGlnblgsIFRyYW5zaXRpb25UeXBlIH0gZnJvbSBcIkAvdHlwZXMvZW51bXNcIjtcclxuaW1wb3J0IHsgQ29udGV4dE9wdGlvbiwgSW5wdXRPdmVybGF5UHJvcHMgfSBmcm9tIFwiQC90eXBlcy9pbnB1dFR5cGVzXCI7XHJcbmltcG9ydCB7IHJlZiB9IGZyb20gXCJ2dWVcIjtcclxuXHJcbi8qXHJcbmNvbnN0IHVzZUNvbnRleHRNZW51U2VydmljZSA9ICgpID0+IHtcclxuICBjb25zdCBwYXJlbnQgPSByZWY8SFRNTEVsZW1lbnQgfCB1bmRlZmluZWQ+KCk7XHJcbiAgY29uc3QgY29udGV4dCA9IHJlZjxDb250ZXh0T3B0aW9uW10+KCk7XHJcblxyXG4gIGNvbnN0IG9wZW4gPSAocGFyZW50RWxlbWVudDogSFRNTEVsZW1lbnQsIG1lbnVDb250ZXh0OiBDb250ZXh0T3B0aW9uW10pID0+IHtcclxuICAgIHBhcmVudC52YWx1ZSA9IHBhcmVudEVsZW1lbnQ7XHJcbiAgICBjb250ZXh0LnZhbHVlID0gbWVudUNvbnRleHQ7XHJcbiAgfVxyXG4gIGNvbnN0IGNsb3NlID0gKCkgPT4ge1xyXG4gICAgcGFyZW50LnZhbHVlID0gdW5kZWZpbmVkO1xyXG4gICAgY29udGV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcclxuICB9XHJcbiAgcmV0dXJuIHsgb3BlbiwgY2xvc2UsIHBhcmVudCwgY29udGV4dCB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjb250ZXh0TWVudVNlcnZpY2UgPSB1c2VDb250ZXh0TWVudVNlcnZpY2UoKTtcclxuKi9cclxuZXhwb3J0IGNvbnN0IGlucHV0T3ZlcmxheVNlcnZpY2UgPSAoPFQgZXh0ZW5kcyBzdHJpbmc+KCkgPT4ge1xyXG4gIGNvbnN0IGNvbXBvbmVudFByb3BzID0gcmVmPElucHV0T3ZlcmxheVByb3BzPFQ+PigpO1xyXG4gIGNvbnN0IHBhcmVudCA9IHJlZjxIVE1MRWxlbWVudCB8IFNWR0VsZW1lbnQ+KCk7XHJcbiAgY29uc3QgdHJhbnNpdGlvbiA9IHJlZjxUcmFuc2l0aW9uVHlwZT4oVHJhbnNpdGlvblR5cGUuRkFERVVQKTtcclxuXHJcbiAgY29uc3Qgc2V0ID0gKGRhdGE6IElucHV0T3ZlcmxheVByb3BzPFQ+LCBfdHJhbnNpdGlvbj86IFRyYW5zaXRpb25UeXBlKTogdm9pZCA9PiB7XHJcbiAgICBjb21wb25lbnRQcm9wcy52YWx1ZSA9IGRhdGE7XHJcbiAgICBpZiAoX3RyYW5zaXRpb24pIHRyYW5zaXRpb24udmFsdWUgPSBfdHJhbnNpdGlvbjtcclxuICB9XHJcbiAgY29uc3QgY2xvc2UgPSAoKSA9PiB7XHJcbiAgICBjb21wb25lbnRQcm9wcy52YWx1ZSA9IHVuZGVmaW5lZDtcclxuICB9XHJcbiAgcmV0dXJuIHsgY29tcG9uZW50UHJvcHMsIHBhcmVudCwgdHJhbnNpdGlvbiwgc2V0LCBjbG9zZSB9XHJcbn0pKClcclxuXHJcbmV4cG9ydCBjb25zdCBwbGFjZU1lbnUgPSAocDogRE9NUmVjdCwgYzogRE9NUmVjdCwgcGFkZGluZzogbnVtYmVyID0gOCwgYWxpZ246IEFsaWduWCA9IEFsaWduWC5MRUZUKTogeyB4OiBzdHJpbmcsIHk6IHN0cmluZyB9ID0+IHtcclxuICBjb25zdCB3ID0ge3g6IHdpbmRvdy5pbm5lcldpZHRoLCB5OiB3aW5kb3cuaW5uZXJIZWlnaHR9XHJcbiAgY29uc3QgeCA9IHAubGVmdCArIHAud2lkdGggLyAyIC0gYy53aWR0aCAvIDI7XHJcbiAgY29uc3QgeSA9IHAueSArIHAuaGVpZ2h0O1xyXG4gIHJldHVybiB7IHg6IGAke3h9cHhgLCB5OiBgJHt5fXB4YCB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRGb2N1c2VkRWxlbWVudCA9ICgpID0+IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQgPz8gbnVsbDtcclxuZXhwb3J0IGNvbnN0IHNldEZvY3VzZWRFbGVtZW50ID0gKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiBlbGVtZW50LmZvY3VzKCk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Qm91bmRpbmdCb3ggPSAocGFyZW50OiBIVE1MRWxlbWVudCB8IFNWR0VsZW1lbnQpOiBET01SZWN0ID0+IHBhcmVudD8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiIsImltcG9ydCB7IFN1YlRhYmxlU3RvcmUsIFRhYmxlU3RvcmUgfSBmcm9tIFwiQC90eXBlcy90YWJsZVR5cGVzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgdWlkID0gKCk6IHN0cmluZyA9PiB7XHJcblx0cmV0dXJuIERhdGUubm93KCkudG9TdHJpbmcoMzYpICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvcm1hdERhdGUgPSAoZGF0ZTogRGF0ZSwgbG9jYWxlOiBzdHJpbmcgPSAnc3YtU0UnKTogc3RyaW5nID0+IHtcclxuXHRyZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG9jYWxlKS5mb3JtYXQoZGF0ZSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZm9ybWF0TnVtYmVyID0gKG51bWJlcjogbnVtYmVyLCBsb2NhbGU6IHN0cmluZyA9ICdzdi1TRScpOiBzdHJpbmcgPT4gbmV3IEludGwuTnVtYmVyRm9ybWF0KGxvY2FsZSkuZm9ybWF0KG51bWJlcik7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q3NzVmFyID0gKHZhcmlhYmxlOiBzdHJpbmcpID0+IGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSkuZ2V0UHJvcGVydHlWYWx1ZSh2YXJpYWJsZSk7XHJcblxyXG5leHBvcnQgY29uc3QgaXNPYmplY3QgPSAoaW5wdXQ6IGFueSk6IGJvb2xlYW4gPT4ge1xyXG4gIGlmICh0eXBlb2YgaW5wdXQgIT09ICdvYmplY3QnIHx8IGlucHV0ID09PSBudWxsKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHJldHVybiBPYmplY3Qua2V5cyhpbnB1dCkubGVuZ3RoID4gMDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGhleFRvUmdiID0gKGhleDogc3RyaW5nKTogeyByOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyIH0gPT4ge1xyXG4gIGNvbnN0IHJlc3VsdCA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpO1xyXG4gIHJldHVybiByZXN1bHQgPyB7XHJcbiAgICAgIHI6IHBhcnNlSW50KHJlc3VsdFsxXSwgMTYpLFxyXG4gICAgICBnOiBwYXJzZUludChyZXN1bHRbMl0sIDE2KSxcclxuICAgICAgYjogcGFyc2VJbnQocmVzdWx0WzNdLCAxNilcclxuICB9IDogeyByOiAxMjgsIGc6IDEyOCwgYjogMTI4IH07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsdW1lbiA9IChyOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyKTogbnVtYmVyID0+IE1hdGguc3FydCgwLjI5OSpyICogciArIDAuNTg3KiBnICogZyArIDAuMTE0ICogYiAqIGIpIC8gMjU1IC8vICgyNTUqMjU1KzI1NSoyNTUrMjU1KjI1NSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZUlucHV0KGV2OiBFdmVudCkge1xyXG4gIGNvbnN0IGV2ZW50ID0gZXYgYXMgS2V5Ym9hcmRFdmVudFxyXG4gIGNvbnN0IHllYXJtb250aCA9IC9eKDF8MikkfF4oMSg/OjkpfDIoPzowKSkkfF4oMSg/OjkpfDIoPzowKVxcZHsxLDJ9KSR8XigxKD86OSl8Mig/OjApXFxkezJ9KSQvXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB0aHJvdHRsZSA9IDxUIGV4dGVuZHMgYW55W10+KGZ1bmM6ICguLi5hcmdzOiBUKSA9PiB2b2lkLCBsaW1pdDogbnVtYmVyKTogKCguLi5hcmdzOiBUKSA9PiB2b2lkKSA9PiB7XHJcbiAgbGV0IGluVGhyb3R0bGU6IGJvb2xlYW47XHJcblxyXG4gIHJldHVybiBmdW5jdGlvbiguLi5hcmdzOiBUKSB7XHJcbiAgICAgIGlmICghaW5UaHJvdHRsZSkge1xyXG4gICAgICAgICAgZnVuYyguLi5hcmdzKTtcclxuICAgICAgICAgIGluVGhyb3R0bGUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGluVGhyb3R0bGUgPSBmYWxzZTtcclxuICAgICAgICAgIH0sIGxpbWl0KTtcclxuICAgICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkZWJvdW5jZSA9IDxUIGV4dGVuZHMgYW55W10+KGZ1bmM6ICguLi5hcmdzOiBUKSA9PiB2b2lkLCBkZWxheTogbnVtYmVyKTogKCguLi5hcmdzOiBUKSA9PiB2b2lkKSA9PiB7XHJcbiAgbGV0IHRpbWVyOiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRUaW1lb3V0PiB8IG51bGwgPSBudWxsO1xyXG5cclxuICByZXR1cm4gZnVuY3Rpb24oLi4uYXJnczogVCkge1xyXG4gICAgICBpZiAodGltZXIgIT09IG51bGwpIHtcclxuICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XHJcbiAgICAgIH1cclxuICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGZ1bmMoLi4uYXJncyk7XHJcbiAgICAgIH0sIGRlbGF5KTtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZm9jdXNBZGpjZW50RWxlbWVudCA9IChlbGVtZW50OiBIVE1MRWxlbWVudCwgdHJhdmVsSW5kZXg6IG51bWJlcikgPT4ge1xyXG5cclxuICBjb25zdCBmb2N1c2FibGVTZWxlY3RvcnMgPSAnYVtocmVmXSwgYnV0dG9uLCB0ZXh0YXJlYSwgaW5wdXQsIHNlbGVjdCwgW3RhYmluZGV4XTpub3QoW3RhYmluZGV4PVwiLTFcIl0pJztcclxuICBjb25zdCBmb2N1c2FibGVFbGVtZW50czogSFRNTEVsZW1lbnRbXSA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChmb2N1c2FibGVTZWxlY3RvcnMpKTtcclxuICBjb25zdCBjdXJyZW50SW5kZXggPSBmb2N1c2FibGVFbGVtZW50cy5pbmRleE9mKGVsZW1lbnQpO1xyXG5cclxuICBsZXQgbmV4dEluZGV4ID0gY3VycmVudEluZGV4ICsgdHJhdmVsSW5kZXg7XHJcblxyXG4gIGlmIChuZXh0SW5kZXggPj0gZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoKSB7XHJcbiAgICBuZXh0SW5kZXggPSAwO1xyXG4gIH1cclxuXHJcbiAgZm9jdXNhYmxlRWxlbWVudHNbbmV4dEluZGV4XT8uZm9jdXMoKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGhhc1N1YlN0b3JlID0gPFQsIFM+KHByb3BzOiBUYWJsZVN0b3JlPFQsIFM+IHwgU3ViVGFibGVTdG9yZTxTPik6IE1hcDxzdHJpbmcsIFN1YlRhYmxlU3RvcmU8Uz4+IHwgdW5kZWZpbmVkID0+IHtcclxuICByZXR1cm4gKHByb3BzIGFzIFRhYmxlU3RvcmU8VCwgUz4pLnN1YlN0b3JlcyAhPT0gdW5kZWZpbmVkID8gKHByb3BzIGFzIFRhYmxlU3RvcmU8VCwgUz4pLnN1YlN0b3JlcyA6IHVuZGVmaW5lZDtcclxufVxyXG4iLCI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiIGdlbmVyaWM9XCJUIGV4dGVuZHMgQ29tbW9uUHJvcHNbJ3R5cGUnXVwiPlxyXG5pbXBvcnQgeyBDZWxsLCBDb21tb25Qcm9wcyB9IGZyb20gJ0AvdHlwZXMvY2VsbFR5cGVzJztcclxuaW1wb3J0IHsgQ29sdW1uLCBSb3dJZCB9IGZyb20gJ0AvdHlwZXMvdGFibGVUeXBlcyc7XHJcbmltcG9ydCBCYXNlQnV0dG9uIGZyb20gJy4vQmFzZUJ1dHRvbi52dWUnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRQdWJsaWNJbnN0YW5jZSwgcmVmIH0gZnJvbSAndnVlJztcclxuaW1wb3J0IHsgZ2V0Qm91bmRpbmdCb3gsIGlucHV0T3ZlcmxheVNlcnZpY2UgfSBmcm9tICdAL3NlcnZpY2VzL292ZXJsYXlTZXJ2aWNlJztcclxuaW1wb3J0IHsgZ2V0Q3NzVmFyIH0gZnJvbSAnQC91dGlscy9nZW5lcmFsVXRpbHMnO1xyXG5cclxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczx7XHJcbiAgcm93SWQ6IFJvd0lkO1xyXG4gIGNlbGxQcm9wczogQ2VsbDxUPjtcclxuICBjZWxsRGF0YTogQ29sdW1uPENvbW1vblByb3BzLCBhbnk+LFxyXG4gIG9uUm93Q2xpY2s/OiAocm93SWQ6IFJvd0lkKSA9PiB2b2lkXHJcbn0+KCk7XHJcblxyXG5jb25zdCBjZWxsUmVmID0gcmVmPENvbXBvbmVudFB1YmxpY0luc3RhbmNlPigpO1xyXG5cclxuY29uc3Qgb25DbGljayA9ICgpID0+IHtcclxuICBpZiAocGFyc2VJbnQoZ2V0Q3NzVmFyKCctLW1vYmlsZS1tYXgtd2lkdGgnKSA/PyAnMCcpID4gd2luZG93LmlubmVyV2lkdGgpIHJldHVybjtcclxuICBpZiAocHJvcHMuY2VsbFByb3BzPy5vbkNsaWNrKSB7XHJcbiAgICBwcm9wcy5jZWxsUHJvcHMub25DbGljayh7Y29sdW1uSWQ6IHByb3BzLmNlbGxEYXRhLmNvbHVtbklkLCByb3dJZDogcHJvcHMucm93SWR9KVxyXG4gIH0gZWxzZSBpZiAocHJvcHMuY2VsbERhdGE/Lm9uQ2xpY2spIHtcclxuICAgIGlmICh0eXBlb2YgcHJvcHMuY2VsbERhdGE/Lm9uQ2xpY2sgPT09ICdib29sZWFuJyAmJiBwcm9wcy5jZWxsRGF0YS5vbkNsaWNrICYmIGNlbGxSZWYudmFsdWUpIHtcclxuICAgICAgaW5wdXRPdmVybGF5U2VydmljZS5zZXQoe1xyXG4gICAgICAgIHR5cGU6IHByb3BzLmNlbGxEYXRhLnR5cGUsXHJcbiAgICAgICAgcm93SWQ6IHByb3BzLnJvd0lkLFxyXG4gICAgICAgIGNvbHVtbklkOiBwcm9wcy5jZWxsRGF0YS5jb2x1bW5JZCxcclxuICAgICAgICBwb3NpdGlvbkRhdGE6IGdldEJvdW5kaW5nQm94KGNlbGxSZWYudmFsdWUuJGVsKSxcclxuICAgICAgICB2YWx1ZTogcHJvcHMuY2VsbFByb3BzLnZhbHVlLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBwcm9wcy5jZWxsUHJvcHMucGxhY2Vob2xkZXIsXHJcbiAgICAgICAgdmFsaWRhdGlvbjogcHJvcHMuY2VsbFByb3BzPy52YWxpZGF0aW9uLFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHByb3BzLmNlbGxEYXRhPy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIHByb3BzLmNlbGxEYXRhPy5vbkNsaWNrPy4oe2NvbHVtbklkOiBwcm9wcy5jZWxsRGF0YS5jb2x1bW5JZCwgcm93SWQ6IHByb3BzLnJvd0lkfSlcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcHJvcHMub25Sb3dDbGljaz8uKHByb3BzLnJvd0lkKTtcclxuICB9XHJcbn1cclxuXHJcbjwvc2NyaXB0PlxyXG5cclxuPHRlbXBsYXRlPlxyXG4gIDxCYXNlQnV0dG9uXHJcbiAgICB2LWlmPVwicHJvcHMuY2VsbFByb3BzPy5vbkNsaWNrIHx8IHByb3BzLmNlbGxEYXRhPy5vbkNsaWNrIHx8IHByb3BzLm9uUm93Q2xpY2tcIlxyXG4gICAgcmVmPVwiY2VsbFJlZlwiXHJcbiAgICBjbGFzcz1cImV6LWNlbGwtYnV0dG9uXCJcclxuICAgIEBjbGljaz1cIm9uQ2xpY2tcIlxyXG4gIC8+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XHJcbi5lei1jZWxsLWJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGluc2V0OiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuPC9zdHlsZT5cclxuIiwiaW1wb3J0IHsgQ29tbW9uUHJvcHMgfSBmcm9tIFwiQC90eXBlcy9jZWxsVHlwZXNcIjtcclxuaW1wb3J0IHsgQ29sdW1uLCBDb2x1bW5JZCB9IGZyb20gXCJAL3R5cGVzL3RhYmxlVHlwZXNcIjtcclxuaW1wb3J0IHsgb25Nb3VudGVkLCBvblVubW91bnRlZCwgUmVmIH0gZnJvbSBcInZ1ZVwiO1xyXG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gXCIuL2dlbmVyYWxVdGlsc1wiO1xyXG5cclxudHlwZSBBY2NvcmRpb25Db2x1bW48VD4gPSB7IGlkOiBDb2x1bW5JZCwgd2lkdGg6IG51bWJlciwgcHJpbzogVCwgaGlkZGVuOiBib29sZWFuIH1cclxuXHJcbmV4cG9ydCBjb25zdCBhY2NvcmRpb25pemVyID0gPFAgZXh0ZW5kcyBDb21tb25Qcm9wcz4odGFibGU6IFJlZjxIVE1MRWxlbWVudD4sIG1pbmltaXplZDogUmVmPENvbHVtbklkW10+LCBjb2x1bW5zOiByZWFkb25seSBDb2x1bW48UCwgYW55PltdKSA9PiB7XHJcbiAgaWYgKCFjb2x1bW5zIHx8ICF0YWJsZS52YWx1ZSkgcmV0dXJuO1xyXG4gIGNvbnN0IGJ1ZmZlciA9IDU7XHJcbiAgY29uc3QgdGltZSA9IDMwMDtcclxuICBjb25zdCBicmVha1dpZHRoczogbnVtYmVyW10gPSBbXTtcclxuICBjb25zdCBhY2NvcmRpb246IEFjY29yZGlvbkNvbHVtbjxudW1iZXIgfCB1bmRlZmluZWQ+W10gPSBbXTtcclxuICBsZXQgc2Nyb2xsV2lkdGggPSB0YWJsZS52YWx1ZS5zY3JvbGxXaWR0aDtcclxuICBsZXQgdGFibGVXaWR0aCA9IHRhYmxlLnZhbHVlLmNsaWVudFdpZHRoO1xyXG5cclxuICBjb25zdCB1cGRhdGVBY2NvcmRpb24gPSAoZW50cnk/OiBIVE1MRWxlbWVudCwgc2V0dXA/OiBib29sZWFuKSA9PiB7XHJcbiAgICBzY3JvbGxXaWR0aCA9IHRhYmxlLnZhbHVlLnNjcm9sbFdpZHRoO1xyXG4gICAgdGFibGVXaWR0aCA9IHRhYmxlLnZhbHVlLmNsaWVudFdpZHRoO1xyXG5cclxuICAgIGZvciAoY29uc3Qgbm9kZSBpbiAoZW50cnkgPyBlbnRyeSA6IHRhYmxlLnZhbHVlKS5jaGlsZHJlblswXS5jaGlsZHJlbikge1xyXG4gICAgICBpZiAocGFyc2VJbnQobm9kZSkgPj0gMCkge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQobm9kZSk7XHJcbiAgICAgICAgY29uc3QgY3VycmVudENvbHVtbiA9IGNvbHVtbnNbaW5kZXhdO1xyXG5cclxuICAgICAgICBzZXR1cCBcclxuICAgICAgICAgID8gYWNjb3JkaW9uLnB1c2goe1xyXG4gICAgICAgICAgICBpZDogY3VycmVudENvbHVtbi5jb2x1bW5JZCxcclxuICAgICAgICAgICAgd2lkdGg6IHRhYmxlLnZhbHVlLmNoaWxkcmVuWzBdLmNoaWxkcmVuW25vZGVdLmNsaWVudFdpZHRoLFxyXG4gICAgICAgICAgICBwcmlvOiBjdXJyZW50Q29sdW1uLnByaW9yaXR5LFxyXG4gICAgICAgICAgICBoaWRkZW46IGZhbHNlLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIDogYWNjb3JkaW9uW2luZGV4XS53aWR0aCA9IHRhYmxlLnZhbHVlLmNoaWxkcmVuWzBdLmNoaWxkcmVuW25vZGVdLmNsaWVudFdpZHRoO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVBY2NvcmRpb24odW5kZWZpbmVkLCB0cnVlKTtcclxuXHJcbiAgY29uc3QgY2hlY2tJZlNob3VsZE1pbml6ZSA9IChsb29wPzogYm9vbGVhbik6IHZvaWQgPT4geyBcclxuICAgIGNvbnN0IHByaW9zID0gYWNjb3JkaW9uLmZpbHRlcihjID0+IGMucHJpbykubGVuZ3RoO1xyXG4gICAgY29uc3QgaGlkZGVuID0gYWNjb3JkaW9uLmZpbHRlcihjID0+IGMuaGlkZGVuKS5sZW5ndGg7XHJcblxyXG4gICAgaWYgKHByaW9zID4gaGlkZGVuICYmICh0YWJsZVdpZHRoICsgYnVmZmVyKSA8IHNjcm9sbFdpZHRoKSB7XHJcbiAgICAgIGNvbnN0IG5leHRBdmFpbGFibGVDb2x1bW4gPSBhY2NvcmRpb24uZmlsdGVyKGMgPT4gIWMuaGlkZGVuICYmIGMucHJpbykuc29ydCgoYSwgYikgPT4gYS5wcmlvISA8IGIucHJpbyEgPyAxIDogLTEpLnBvcCgpO1xyXG4gICAgICBjb25zdCBhY2NvcmRpb25Db2x1bW4gPSBhY2NvcmRpb24uZmluZChjID0+IGMuaWQgPT09IG5leHRBdmFpbGFibGVDb2x1bW4/LmlkKTtcclxuICAgICAgXHJcbiAgICAgIGlmIChuZXh0QXZhaWxhYmxlQ29sdW1uICYmIGFjY29yZGlvbkNvbHVtbikge1xyXG4gICAgICAgIGFjY29yZGlvbkNvbHVtbi53aWR0aCA9IG5leHRBdmFpbGFibGVDb2x1bW4ud2lkdGhcclxuICAgICAgICBhY2NvcmRpb25Db2x1bW4uaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICBicmVha1dpZHRocy5wdXNoKHNjcm9sbFdpZHRoKTtcclxuICAgICAgICBtaW5pbWl6ZWQudmFsdWUucHVzaChuZXh0QXZhaWxhYmxlQ29sdW1uLmlkKTtcclxuICAgICAgICBpZiAobG9vcCkge1xyXG4gICAgICAgICAgdXBkYXRlQWNjb3JkaW9uKCk7XHJcbiAgICAgICAgICBhZGQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IFxyXG4gICAgICAgICAgdXBkYXRlQWNjb3JkaW9uKCk7XHJcbiAgICAgICAgICBhZGQoKTtcclxuICAgICAgICB9LCB0aW1lKTtcclxuICAgICAgfVxyXG4gICAgICAgXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGVja0lmQWRkQmFjayA9ICgpID0+IHtcclxuICAgIGlmIChtaW5pbWl6ZWQudmFsdWUubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCBsYXN0TWluaW1pemVkQ29sdW1uID0gYWNjb3JkaW9uLmZpbmQoYyA9PiBjLmlkID09PSBtaW5pbWl6ZWQudmFsdWVbbWluaW1pemVkLnZhbHVlLmxlbmd0aCAtIDFdKTtcclxuICAgICAgXHJcbiAgICAgIGlmIChsYXN0TWluaW1pemVkQ29sdW1uICYmIHRhYmxlV2lkdGggPiBicmVha1dpZHRoc1ticmVha1dpZHRocy5sZW5ndGgtMV0pIHtcclxuICAgICAgICBhY2NvcmRpb24uZmluZChjID0+IGMuaWQgPT09IGxhc3RNaW5pbWl6ZWRDb2x1bW4uaWQpIS5oaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICBicmVha1dpZHRocy5wb3AoKTtcclxuICAgICAgICBtaW5pbWl6ZWQudmFsdWUucG9wKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IFxyXG4gICAgICAgICAgdXBkYXRlQWNjb3JkaW9uKCk7XHJcbiAgICAgICAgICByZW1vdmUoKTtcclxuICAgICAgICB9LCB0aW1lKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBjb25zdCBhZGQgPSBkZWJvdW5jZSgoKSA9PiBjaGVja0lmU2hvdWxkTWluaXplKGZhbHNlKSwgdGltZSk7XHJcbiAgY29uc3QgcmVtb3ZlID0gZGVib3VuY2UoKCkgPT4gY2hlY2tJZkFkZEJhY2soKSwgdGltZSk7XHJcblxyXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKGVudHJpZXMgPT4ge1xyXG4gICAgZm9yIChsZXQgZW50cnkgb2YgZW50cmllcykge1xyXG4gICAgICB1cGRhdGVBY2NvcmRpb24oZW50cnkudGFyZ2V0IGFzIEhUTUxFbGVtZW50LCBmYWxzZSk7XHJcbiAgICAgIGFkZCgpO1xyXG4gICAgICByZW1vdmUoKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgaWYgKHRhYmxlLnZhbHVlKSB7XHJcbiAgICBvYnNlcnZlci5vYnNlcnZlKHRhYmxlLnZhbHVlKTtcclxuICB9XHJcblxyXG4gIG9uTW91bnRlZCgoKSA9PiBjaGVja0lmU2hvdWxkTWluaXplKHRydWUpKTtcclxuICBvblVubW91bnRlZCgoKSA9PiB7XHJcbiAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgfSk7XHJcbn1cclxuIiwiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIiBnZW5lcmljPVwiVCwgU1wiPlxyXG5pbXBvcnQgeyBDb2x1bW4sIENvbHVtbklkLCBSb3csIFJvd0lkLCBTdG9yZU9wdGlvbnMsIFN1YlN0b3JlT3B0aW9ucywgU3ViVGFibGVTdG9yZSwgVGFibGVJZCwgVGFibGVTdG9yZSB9IGZyb20gXCJAL3R5cGVzL3RhYmxlVHlwZXNcIjtcclxuaW1wb3J0IEhlYWRlckNlbGwgZnJvbSBcIkAvY29tcG9uZW50cy90YWJsZS9oZWFkZXJDZWxsLnZ1ZVwiO1xyXG5pbXBvcnQgQ2VsbEJ1dHRvbiBmcm9tIFwiQC9jb21wb25lbnRzL2lucHV0cy9DZWxsQnV0dG9uLnZ1ZVwiO1xyXG5pbXBvcnQgeyBDb21wdXRlZFJlZiwgUmVmLCBjb21wdXRlZCwgaW5qZWN0LCBpc1JlZiwgb25Nb3VudGVkLCByZWYgfSBmcm9tIFwidnVlXCI7XHJcbmltcG9ydCB7IGFjY29yZGlvbml6ZXIgfSBmcm9tIFwiQC91dGlscy9wYXJ0aWFsc1wiO1xyXG5pbXBvcnQgeyBnZXRDc3NWYXIsIGhhc1N1YlN0b3JlIH0gZnJvbSBcIkAvdXRpbHMvZ2VuZXJhbFV0aWxzXCI7XHJcbmltcG9ydCB7IENvbW1vblByb3BzIH0gZnJvbSBcIkAvdHlwZXMvY2VsbFR5cGVzXCI7XHJcbmltcG9ydCB7IEluamVjdG9yIH0gZnJvbSBcIkAvdHlwZXMvZW51bXNcIjtcclxuaW1wb3J0IHsgSW5qZWN0U2VydmljZSB9IGZyb20gXCJAL3R5cGVzL2luamVjdFR5cGVzXCI7XHJcblxyXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcclxuICAgIGFjdGl2ZUNvbHVtbjogQ29sdW1uSWQgfCB1bmRlZmluZWQ7XHJcbiAgICBjb2x1bW5zOiByZWFkb25seSBDb2x1bW48Q29tbW9uUHJvcHMsIFQ+W107XHJcbiAgICBkYXRhOiBNYXA8Um93SWQsIFQ+O1xyXG4gICAgb3B0aW9uczogU3RvcmVPcHRpb25zPFQsIFM+O1xyXG4gICAgcm93czogQ29tcHV0ZWRSZWY8Um93W10+O1xyXG4gICAgdGFibGVJZDogVGFibGVJZDtcclxuICAgIHN1YlN0b3Jlcz86IE1hcDxzdHJpbmcsIFN1YlRhYmxlU3RvcmU8Uz4+IHwgdW5kZWZpbmVkO1xyXG59IHwge1xyXG4gICAgYWN0aXZlQ29sdW1uOiBDb2x1bW5JZCB8IHVuZGVmaW5lZDtcclxuICAgIGNvbHVtbnM6IHJlYWRvbmx5IENvbHVtbjxDb21tb25Qcm9wcywgUz5bXTtcclxuICAgIGRhdGE6IE1hcDxSb3dJZCwgUz47XHJcbiAgICByb3dzOiBSb3dbXTtcclxuICAgIHRhYmxlSWQ6IFRhYmxlSWQ7XHJcbiAgICBvcHRpb25zPzogU3ViU3RvcmVPcHRpb25zPFM+IHwgdW5kZWZpbmVkO1xyXG59PigpO1xyXG5cclxuY29uc3QgZW1pdCA9IGRlZmluZUVtaXRzPHtcclxuICAoZTogJ3VwZGF0ZTphbGxTZWxlY3RlZCcsIHJvd0lkOiBSb3dJZFtdKTogdm9pZDtcclxuICAoZTogJ3VwZGF0ZTpzZWxlY3RlZCcsIHJvd0lkOiBSb3dJZCk6IHZvaWQ7XHJcbn0+KCk7XHJcblxyXG5jb25zdCBzdWJTdG9yZXMgPSAocHJvcHMgYXMgdW5rbm93biBhcyBUYWJsZVN0b3JlPFQsIFM+KS5zdWJTdG9yZXMgYXMgTWFwPHN0cmluZywgU3ViVGFibGVTdG9yZTxTPj4gfCB1bmRlZmluZWRcclxuXHJcbmNvbnN0IHsgY29udHJvbCwgY3JlYXRlQ2VsbElkIH0gPSBpbmplY3QoSW5qZWN0b3IuVEFCTEVTRVJWSUNFKSBhcyBJbmplY3RTZXJ2aWNlPFQsIFM+O1xyXG5jb25zdCBpc1N1YlRhYmxlID0gY29udHJvbC5zdWJUYWJsZXNWaXNpYmxlLmhhcyhwcm9wcy50YWJsZUlkKVxyXG5jb25zdCBoYXNTdWJzID0gaGFzU3ViU3RvcmU8VCwgUz4ocHJvcHMgYXMgdW5rbm93biBhcyBUYWJsZVN0b3JlPFQsIFM+IHwgU3ViVGFibGVTdG9yZTxTPik7XHJcbi8vIGNvbnN0IHN1YlN0b3JlcyA9IGNvbXB1dGVkKCgpID0+IGhhc1N1YlN0b3JlPFQsIFM+KHByb3BzIGFzIHVua25vd24gYXMgVGFibGVTdG9yZTxULCBTPiB8IFN1YlRhYmxlU3RvcmU8Uz4pKVxyXG5jb25zdCBpc01vYmlsZSA9IGNvbXB1dGVkKCgpID0+IHBhcnNlSW50KGdldENzc1ZhcignLS1tb2JpbGUtbWF4LXdpZHRoJykgPz8gJzAnKSA+IHdpbmRvdy5pbm5lcldpZHRoKTtcclxuXHJcbmNvbnN0IGdyaWQgPSBjb21wdXRlZCgoKSA9PiB7XHJcbiAgcmV0dXJuIHByb3BzLmNvbHVtbnMuZmlsdGVyKChjKSA9PiBjLnZpc2libGUpXHJcbiAgICAubWFwKGMgPT4gXHJcbiAgICAgIG1pbmltaXplZC52YWx1ZS5sZW5ndGggPiAwICYmIGMuZ3JpZFNwYWNlID09PSAnYXV0bycgXHJcbiAgICAgICAgPyBtaW5pbWl6ZWQudmFsdWUuaW5jbHVkZXMoYy5jb2x1bW5JZClcclxuICAgICAgICAgID8gJ3ZhcigtLXRkLWhlaWdodCknIFxyXG4gICAgICAgICAgOiBgbWlubWF4KG1pbi1jb250ZW50LCAxMDAlKWAgXHJcbiAgICAgICAgOiBjLmdyaWRTcGFjZSkuam9pbihcIiBcIik7XHJcbn0pO1xyXG5cclxuY29uc3Qgc3Vicm93ID0gY29tcHV0ZWQoKCkgPT4gaXNNb2JpbGUudmFsdWUgPyAnMWZyJyA6IGAxIC8gJHtwcm9wcy5jb2x1bW5zLmxlbmd0aCArIDF9YCk7XHJcbmNvbnN0IGVtcHR5Um93ID0gY29tcHV0ZWQoKCkgPT4gaXNNb2JpbGUudmFsdWUgPyAnMWZyJyA6IGAxIC8gJHtwcm9wcy5jb2x1bW5zLmxlbmd0aH1gKVxyXG5jb25zdCBtaW5pbWl6ZWQgPSByZWY8Q29sdW1uSWRbXT4oW10pO1xyXG5jb25zdCB0YWJsZSA9IHJlZjxIVE1MRWxlbWVudD4oKTtcclxuXHJcbmNvbnN0IHZpc2libGVSb3dzID0gY29tcHV0ZWQoKCkgPT4ge1xyXG4gICAgY29uc3QgdmlzaWJsZSA9IGNvbnRyb2wuc29ydGVkUm93cy5maWx0ZXIociA9PiB7XHJcbiAgICAgIHJldHVybiAoY29udHJvbC5maWx0ZXJlZFJvd3MuaGFzKHIpICYmICghaXNTdWJUYWJsZSAmJiBjb250cm9sLmFjdGl2ZVBhZ2Uuc2l6ZSA/IGNvbnRyb2wuYWN0aXZlUGFnZS5oYXMocikgOiB0cnVlKSlcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIChpc1JlZihwcm9wcy5yb3dzKSA/IHByb3BzLnJvd3MudmFsdWUgOiBwcm9wcy5yb3dzKS5maWx0ZXIociA9PiB2aXNpYmxlLmluY2x1ZGVzKHIucm93SWQpKTtcclxufSlcclxuXHJcbmNvbnN0IGFjdGlvblJvd0NsaWNrID0gKHJvd0lkOiBSb3dJZCkgPT4ge1xyXG4gIGNvbnN0IHJvd0RhdGEgPSBwcm9wcy5kYXRhLmdldChyb3dJZCk7XHJcbiAgaWYgKHByb3BzLm9wdGlvbnM/Lm9uUm93Q2xpY2sgJiYgcm93RGF0YSkge1xyXG4gICAgaWYgKGhhc1N1YnMpICAocHJvcHMub3B0aW9ucyBhcyBTdG9yZU9wdGlvbnM8VCwgUz4pLm9uUm93Q2xpY2s/Lihyb3dEYXRhIGFzIFQpXHJcbiAgICBlbHNlIChwcm9wcy5vcHRpb25zIGFzIFN1YlN0b3JlT3B0aW9uczxTPikub25Sb3dDbGljaz8uKHJvd0RhdGEgYXMgUylcclxuICB9XHJcbn1cclxuXHJcbm9uTW91bnRlZCgoKSA9PiB7XHJcbiAgaWYgKHByb3BzLm9wdGlvbnM/LmFjY29yZGlvbiAmJiB0YWJsZS52YWx1ZSkgYWNjb3JkaW9uaXplcih0YWJsZSBhcyB1bmtub3duIGFzIFJlZjxIVE1MRWxlbWVudD4sIG1pbmltaXplZCwgcHJvcHMuY29sdW1ucyk7XHJcbn0pO1xyXG5cclxuPC9zY3JpcHQ+XHJcblxyXG48dGVtcGxhdGU+XHJcbiAgPHRhYmxlXHJcbiAgICB2LWlmPVwicHJvcHMuY29sdW1uc1wiXHJcbiAgICByZWY9XCJ0YWJsZVwiXHJcbiAgICA6Y2xhc3M9XCJbJ2V6LXRhYmxlJywgeyAnaGFzLXN1Yi10YWJsZSc6IGhhc1N1YnMgfSwgeyAnc3ViLXRhYmxlJyA6IHByb3BzLnRhYmxlSWQgIT09IGNvbnRyb2wudGFibGVJZH1dXCJcclxuICA+XHJcbiAgICA8dGhlYWRcclxuICAgICAgdi1pZj1cIiFwcm9wcy5vcHRpb25zPy5oaWRlSGVhZGVyQ2VsbHNcIlxyXG4gICAgICBjbGFzcz1cImV6LXRoZWFkXCJcclxuICAgID5cclxuICAgICAgPHRlbXBsYXRlXHJcbiAgICAgICAgdi1mb3I9XCIoY29sdW1uLCBpbmRleCkgaW4gY29sdW1uc1wiXHJcbiAgICAgICAgOmtleT1cImNvbHVtbi5jb2x1bW5JZFwiXHJcbiAgICAgID5cclxuICAgICAgICA8Y29tcG9uZW50XHJcbiAgICAgICAgICA6aXM9XCJjb2x1bW4/LmhlYWRlckNvbXBvbmVudCA/PyBIZWFkZXJDZWxsXCJcclxuICAgICAgICAgIHYtaWY9XCJjb2x1bW4udmlzaWJsZVwiXHJcbiAgICAgICAgICA6YWxpZ249XCJjb2x1bW4uYWxpZ25cIlxyXG4gICAgICAgICAgOnR5cGU9XCJjb2x1bW4udHlwZVwiXHJcbiAgICAgICAgICA6Y29sdW1uSWQ9XCJjb2x1bW4uY29sdW1uSWRcIlxyXG4gICAgICAgICAgOmVkaXRhYmxlPVwiISFjb2x1bW4/Lm9uQ2xpY2tcIlxyXG4gICAgICAgICAgOmdyaWRTcGFjZT1cImNvbHVtbi5ncmlkU3BhY2VcIlxyXG4gICAgICAgICAgOmhlYWRlcj1cImNvbHVtbi5oZWFkZXI/LnZhbHVlXCJcclxuICAgICAgICAgIDppbmRleD1cImluZGV4XCJcclxuICAgICAgICAgIDpzZWFyY2hhYmxlPVwiY29sdW1uLnNlYXJjaGFibGVcIlxyXG4gICAgICAgICAgOnNvcnRhYmxlPVwiY29sdW1uLnNvcnRhYmxlXCJcclxuICAgICAgICAgIDp0YWJsZUlkPVwidGFibGVJZFwiXHJcbiAgICAgICAgICA6bWluaW1pemU9XCJtaW5pbWl6ZWQuaW5jbHVkZXMoY29sdW1uLmNvbHVtbklkKVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC90ZW1wbGF0ZT5cclxuICAgIDwvdGhlYWQ+XHJcbiAgICBcclxuICAgIDx0Ym9keVxyXG4gICAgICA6Y2xhc3M9XCJbJ2V6LXRib2R5JywgeydpbnB1dC1ib3JkZXJzJzogcHJvcHMub3B0aW9ucz8uaW5wdXRCb3JkZXJzfV1cIlxyXG4gICAgPlxyXG4gICAgICA8VHJhbnNpdGlvbkdyb3VwXHJcbiAgICAgICAgdi1mb3I9XCJyb3cgaW4gdmlzaWJsZVJvd3NcIlxyXG4gICAgICAgIDprZXk9XCJyb3cucm93SWRcIlxyXG4gICAgICAgIG5hbWU9XCJ0YWJsZVwiXHJcbiAgICAgICAgdGFnPVwidHJcIlxyXG4gICAgICAgIDpkYXRhLWlkPVwicm93LnJvd0lkXCJcclxuICAgICAgICA6Y2xhc3M9XCJbXHJcbiAgICAgICAgICAnZXotdHInLFxyXG4gICAgICAgICAgeyAnY2xpY2thYmxlJzogb3B0aW9ucz8ub25Sb3dDbGljayB9LFxyXG4gICAgICAgIF1cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHRlbXBsYXRlXHJcbiAgICAgICAgICB2LWZvcj1cIihjZWxsLCBjb2x1bW5JbmRleCkgaW4gY29sdW1uc1wiXHJcbiAgICAgICAgICA6a2V5PVwiYCR7cm93LnJvd0lkfSR7Y2VsbC5jb2x1bW5JZH1gXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImNlbGwudmlzaWJsZVwiPlxyXG4gICAgICAgICAgICA8dGRcclxuICAgICAgICAgICAgICA6Y2xhc3M9XCJbXHJcbiAgICAgICAgICAgICAgICAnZXotdGQnLFxyXG4gICAgICAgICAgICAgICAgY2VsbC5jb2x1bW5JZCxcclxuICAgICAgICAgICAgICAgIGNlbGwudHlwZSxcclxuICAgICAgICAgICAgICAgIGNlbGw/LmFsaWduLFxyXG4gICAgICAgICAgICAgICAgdHlwZW9mIGNlbGwuY2xhc3NlcyA9PT0gJ3N0cmluZycgPyBjZWxsLmNsYXNzZXMgOiBBcnJheS5pc0FycmF5KGNlbGwuY2xhc3NlcykgPyBjZWxsLmNsYXNzZXMuam9pbignICcpIDogJycsXHJcbiAgICAgICAgICAgICAgICB7IG1pbmltaXplZDogbWluaW1pemVkLmluY2x1ZGVzKGNlbGwuY29sdW1uSWQpIH0sXHJcbiAgICAgICAgICAgICAgICB7IGVkaXRhYmxlOiBjZWxsLm9uQ2xpY2sgfVxyXG4gICAgICAgICAgICAgIF1cIlxyXG4gICAgICAgICAgICAgIDpkYXRhLXRvb2x0aXA9XCJjZWxsPy50b29sdGlwXCJcclxuICAgICAgICAgICAgICA6ZGF0YS1oYW5kLWhlbGQtaGVhZGVyPVwiY2VsbC5oZWFkZXI/LnZhbHVlXCJcclxuICAgICAgICAgICAgICA6ZGF0YS1pZD1cImNyZWF0ZUNlbGxJZChyb3cucm93SWQsY2VsbC5jb2x1bW5JZClcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPENlbGxCdXR0b25cclxuICAgICAgICAgICAgICAgIHYtaWY9XCJjZWxsLnR5cGUgIT09ICdmb2xkJyB8fCBjZWxsLnR5cGUgPT09ICdmb2xkJyAmJiBzdWJTdG9yZXMgJiYgc3ViU3RvcmVzPy5oYXMocm93LnJvd0lkKVwiXHJcbiAgICAgICAgICAgICAgICA6Y2VsbC1kYXRhPVwiY2VsbFwiXHJcbiAgICAgICAgICAgICAgICA6Y2VsbC1wcm9wcz1cInJvdy5jZWxsc1tjb2x1bW5JbmRleF1cIlxyXG4gICAgICAgICAgICAgICAgOm9uLXJvdy1jbGljaz1cImFjdGlvblJvd0NsaWNrXCJcclxuICAgICAgICAgICAgICAgIDpyb3ctaWQ9XCJyb3cucm93SWRcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGNvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgOmlzPVwiY2VsbC5jb21wb25lbnRcIlxyXG4gICAgICAgICAgICAgICAgOmtleT1cImAke3Jvdy5yb3dJZH0tJHtjZWxsLmNvbHVtbklkfWBcIlxyXG4gICAgICAgICAgICAgICAgdi1iaW5kPVwicm93LmNlbGxzW2NvbHVtbkluZGV4XVwiXHJcbiAgICAgICAgICAgICAgICA6dGFibGUtaWQ9XCJ0YWJsZUlkXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgIDx0ZFxyXG4gICAgICAgICAgdi1pZj1cImNvbnRyb2wuc3ViVGFibGVzVmlzaWJsZT8uaGFzKHJvdy5yb3dJZCkgJiYgc3ViU3RvcmVzPy5oYXMocm93LnJvd0lkKVwiXHJcbiAgICAgICAgICBjbGFzcz1cImV6LXN1Yi1yb3dcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxUYWJsZVNlY3Rpb24gdi1iaW5kPVwiKHN1YlN0b3Jlcy5nZXQocm93LnJvd0lkKSBhcyBTdWJUYWJsZVN0b3JlPFM+KVwiIC8+XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgPC9UcmFuc2l0aW9uR3JvdXA+XHJcbiAgICAgIDx0clxyXG4gICAgICAgIHYtaWY9XCIhdmlzaWJsZVJvd3MubGVuZ3RoICYmIG9wdGlvbnM/LnRhYmxlRW1wdHlNZXNzYWdlXCJcclxuICAgICAgICBjbGFzcz1cImV6LXRyXCJcclxuICAgICAgPlxyXG4gICAgICAgIDx0ZFxyXG4gICAgICAgICAgY2xhc3M9XCJlei10ZCBlbXB0eS1yb3dcIlxyXG4gICAgICAgICAgOnN0eWxlPVwieyAnZ3JpZC1jb2x1bW4nOiBlbXB0eVJvdyB9XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICB7eyB0eXBlb2Ygb3B0aW9ucy50YWJsZUVtcHR5TWVzc2FnZSA9PT0gJ3N0cmluZycgPyBvcHRpb25zLnRhYmxlRW1wdHlNZXNzYWdlIDogb3B0aW9ucy50YWJsZUVtcHR5TWVzc2FnZS52YWx1ZSB9fVxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgIDwvdHI+XHJcbiAgICA8L3Rib2R5PlxyXG4gIDwvdGFibGU+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XHJcbkBpbXBvcnQgXCJAL2Fzc2V0cy9zdHlsZXMvZXotbWl4aW5zXCI7XHJcbkBpbXBvcnQgXCJAL2Fzc2V0cy9zdHlsZXMvZXotdGFibGV0XCI7XHJcbkBpbXBvcnQgXCJAL2Fzc2V0cy9zdHlsZXMvZXotbW9iaWxlXCI7XHJcbkBpbXBvcnQgJ0AvYXNzZXRzL3N0eWxlcy90cmFuc2l0aW9ucyc7XHJcbiRlYXNlSW5PdXRDdWJpYzogY3ViaWMtYmV6aWVyKDAuNjUsIDAsIDAuMzUsIDEpO1xyXG4uZXotdGFibGUsXHJcbi5lei10aGVhZCxcclxuLmV6LXRib2R5LFxyXG4uZXotdHIsXHJcbi5lei10aCxcclxuLmV6LXRkIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uZXotdGhlYWQsXHJcbi5lei10Ym9keSxcclxuLmV6LXRyIHtcclxuICBkaXNwbGF5OiBjb250ZW50cztcclxufVxyXG5cclxuLmV6LXRhYmxlIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS10ZC1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tdGFibGUtYm9yZGVyLXJhZGl1cyk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGFibGUtYm9yZGVyLWNvbG9yKTtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IGNhbGMoJHRhYmxldC1tYXgtd2lkdGggKyAxcHgpKSB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHYtYmluZChncmlkKTtcclxuICB9XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xyXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiBncmlkLXRlbXBsYXRlLWNvbHVtbnMgLjVzO1xyXG4gICYuc3ViLXRhYmxlIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IHVuc2V0O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogdW5zZXQ7XHJcbiAgICAuZXotdGQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWJyb3ctYmFja2dyb3VuZC1jb2xvcik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5lei10ciB7XHJcbiAgcGFkZGluZzogdmFyKC0tcm93LXBhZGRpbmcpO1xyXG4gICY6bm90KDpsYXN0LWNoaWxkKSB7IGJveC1zaGFkb3c6IDAgMXB4IHZhcigtLXRyLWJvcmRlci1jb2xvcik7IH1cclxufVxyXG4uZXotdGJvZHkuaW5wdXQtYm9yZGVycyAuZXotdHIge1xyXG4gIC5lei10ZC5lZGl0YWJsZSB7XHJcbiAgICBib3gtc2hhZG93OlxyXG4gICAgICAwIC0xcHggdmFyKC0tdGQtYm9yZGVyLWNvbG9yKSBpbnNldCxcclxuICAgICAgLTFweCAwIDAgdmFyKC0tdGQtYm9yZGVyLWNvbG9yKSBpbnNldCxcclxuICAgICAgLTFweCAwIDAgdmFyKC0tdGQtYm9yZGVyLWNvbG9yKTtcclxuICB9XHJcbiAgJjpsYXN0LWNoaWxkIC5lei10ZC5lZGl0YWJsZSB7XHJcbiAgICBib3gtc2hhZG93OlxyXG4gICAgICAtMXB4IDAgMCB2YXIoLS10ZC1ib3JkZXItY29sb3IpIGluc2V0LFxyXG4gICAgICAtMXB4IDAgMCB2YXIoLS10ZC1ib3JkZXItY29sb3IpO1xyXG4gIH1cclxufVxyXG4uZXotdGgsXHJcbi5lei10ZCB7XHJcbiAgXHJcbiAgcGFkZGluZzogMCB2YXIoLS1jZWxsLXBhZGRpbmctaG9yaXpvbnRhbCk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgJi5mb2xkLFxyXG4gICYuY2hlY2tib3gsXHJcbiAgJi5jb250ZXh0LWJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICBzcGFuIHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB9XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogdmFyKC0tZm9jdXMtY29sb3IpIGF1dG8gMXB4O1xyXG4gIH1cclxufVxyXG4uZXotdGgge1xyXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS10aC1mb250LWZhbWlseSk7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tdGgtYmFja2dyb3VuZC1jb2xvcik7XHJcbiAgY29sb3I6IHZhcigtLXRoLWNvbG9yKTtcclxuICBoZWlnaHQ6IHZhcigtLXRoLWhlaWdodCk7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgZm9udC1zaXplOiB2YXIoLS10aC1mb250LXNpemUpO1xyXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS10aC1mb250LXdlaWdodCk7XHJcbiAgYm94LXNoYWRvdzogMCAtMXB4IHZhcigtLXRoLWJvcmRlci1jb2xvcikgaW5zZXQ7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAmLnNvcnRhYmxlIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tdGgtYmFja2dyb3VuZC1jb2xvci1ob3Zlcik7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS10aC1jb2xvci1ob3ZlciwgaW5oZXJpdCk7XHJcbiAgICB9XHJcblxyXG4gICAgLnNvcnQtaWNvbiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMCkgdHJhbnNsYXRlWCgxNnB4KTtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMjRweCA4cHg7XHJcbiAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgIHN0cm9rZTogdmFyKC0tcC00MDApO1xyXG4gICAgICBzdHJva2Utd2lkdGg6IDJweDtcclxuICAgICAgZmlsbDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjE1cyAkZWFzZW91dHF1aW50O1xyXG5cclxuICAgICAgJi5hc2NlbmRpbmcge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZykgdHJhbnNsYXRlWCgxNnB4KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG46d2hlcmUoLmV6LXRhYmxlOm5vdCguc3ViLXRhYmxlKSA+IHRib2R5ID4gLmV6LXRyKTpsYXN0LWNoaWxkIHtcclxuICAuZXotdGQgeyBib3gtc2hhZG93OiAgMCAxcHggdmFyKC0tdGQtYm9yZGVyLWNvbG9yKSBpbnNldDsgfVxyXG4gID4gLmV6LXRkIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG46d2hlcmUoLmV6LXRhYmxlOm5vdCguc3ViLXRhYmxlKSA+IHRib2R5ID4gLmV6LXRyKSB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBjYWxjKCR0YWJsZXQtbWF4LXdpZHRoICsgMXB4KSkge1xyXG4gICAgJi5jbGlja2FibGU6aG92ZXI6bm90KDpoYXMoLmVkaXRhYmxlOmhvdmVyLCAuZXotdGQgKyAuZXotc3ViLXJvdzpob3ZlcikpID4gLmV6LXRkLFxyXG4gICAgPiAuZXotdGQuZWRpdGFibGU6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10ZC1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyKTtcclxuICAgIH1cclxuICB9XHJcbiAgLmV6LXN1Yi1yb3cge1xyXG4gICAgcGFkZGluZzogMDtcclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IGNhbGMoJHRhYmxldC1tYXgtd2lkdGggKyAxcHgpKSB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ncmlkO1xyXG4gICAgICBncmlkLWNvbHVtbjogdi1iaW5kKHN1YnJvdylcclxuICAgIH1cclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBjYWxjKCR0YWJsZXQtbWF4LXdpZHRoICsgMXB4KSkge1xyXG4gIDp3aGVyZSguZXotdGFibGUuc3ViLXRhYmxlID4gdGJvZHkgPiAuZXotdHIpIHtcclxuICAgICYuY2xpY2thYmxlOmhvdmVyID4gLmV6LXRkLFxyXG4gICAgLmV6LXRkLmVkaXRhYmxlOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tc3Vicm93LWJhY2tncm91bmQtY29sb3ItaG92ZXIpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uZXotdGQge1xyXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS10ZC1mb250LWZhbWlseSk7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tdGQtYmFja2dyb3VuZC1jb2xvcik7XHJcbiAgYm94LXNoYWRvdzogMCAtMXB4IHZhcigtLXRkLWJvcmRlci1jb2xvcikgaW5zZXQ7XHJcbiAgaGVpZ2h0OiB2YXIoLS10ZC1oZWlnaHQpO1xyXG4gIGNvbG9yOiB2YXIoLS10ZC1jb2xvcik7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1zaXplOiB2YXIoLS10ZC1mb250LXNpemUpO1xyXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS10ZC1mb250LXdlaWdodCk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDFzICRlYXNlb3V0cXVpbnQsIGJhY2tncm91bmQtY29sb3IgLjI1cztcclxuICAmLmJ1dHRvbi1jZWxsIHtcclxuICAgIHdpZHRoOiB2YXIoLS10ZC1oZWlnaHQpO1xyXG4gICAgaGVpZ2h0OiB2YXIoLS10ZC1oZWlnaHQpO1xyXG4gIH1cclxuICAmLmVtcHR5LXJvdyB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAycmVtICFpbXBvcnRhbnQ7XHJcbiAgICAmOmJlZm9yZSxcclxuICAgICY6YWZ0ZXIgeyBjb250ZW50OiBpbml0aWFsICFpbXBvcnRhbnQ7IH1cclxuICB9XHJcbn1cclxuLmV6LXRoLFxyXG4uZXotdGQge1xyXG4gICY6YWZ0ZXIge1xyXG4gICAgY29udGVudDogYXR0cihkYXRhLXZhbHVlKTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXRkLWJhY2tncm91bmQtY29sb3IpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tdGFibGUtYm9yZGVyLXJhZGl1cyk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggdmFyKC0tdGQtYm9yZGVyLWNvbG9yKTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMjVzICRlYXNlSW5PdXRDdWJpYywgdmlzaWJpbGl0eSAuMjVzIC4yNXM7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcbiAgJi5taW5pbWl6ZWQge1xyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBjYWxjKCR0YWJsZXQtbWF4LXdpZHRoICsgMXB4KSkge1xyXG4gICAgICAmOmhvdmVyOmFmdGVyIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjI1cyAkZWFzZUluT3V0Q3ViaWM7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfVxyXG59XHJcbi5lei10aDphZnRlciB7XHJcbiAgY29udGVudDogYXR0cihkYXRhLWhhbmQtaGVsZC1oZWFkZXIpO1xyXG59XHJcblxyXG5AaW5jbHVkZSBzdWItdGFibGUtdHJhbnNpdGlvbnM7XHJcbkBpbmNsdWRlIGV6LXRhYmxldCg2NDBweCwgMTAyNHB4KTtcclxuQGluY2x1ZGUgZXotbW9iaWxlKDY0MHB4KTtcclxuPC9zdHlsZT5cclxuIiwiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIiBnZW5lcmljPVwiVCwgU1wiPlxyXG5pbXBvcnQgeyBBbGlnblgsIEluamVjdG9yIH0gZnJvbSBcIkAvdHlwZXMvZW51bXNcIjtcclxuaW1wb3J0IHsgSW5qZWN0Q29udHJvbCwgSW5qZWN0T3B0aW9ucyB9IGZyb20gXCJAL3R5cGVzL2luamVjdFR5cGVzXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwiQC90eXBlcy90YWJsZVR5cGVzXCI7XHJcbmltcG9ydCB7IGNvbXB1dGVkLCBpbmplY3QsIG9uTW91bnRlZCwgcmVmIH0gZnJvbSBcInZ1ZVwiO1xyXG5cclxuY29uc3QgeyBjb250cm9sIH0gPSBpbmplY3QoSW5qZWN0b3IuQ09OVFJPTCkgYXMgSW5qZWN0Q29udHJvbDtcclxuY29uc3QgeyBvcHRpb25zIH0gPSBpbmplY3QoSW5qZWN0b3IuT1BUSU9OUykgYXMgSW5qZWN0T3B0aW9uczxULCBTPjtcclxuXHJcbmNvbnN0IGFsaWduID0gb3B0aW9ucy5wYWdpbmF0aW9uPy5hbGlnbiA/PyBBbGlnblguUklHSFQ7XHJcbmNvbnN0IHRydW5rYXRpb24gPSBvcHRpb25zLnBhZ2luYXRpb24/LnBhZ2VzVG9TaG93ID8/IDU7XHJcbmNvbnN0IGdvVG9GaXJzdExhc3QgPSBvcHRpb25zLnBhZ2luYXRpb24/LmdvVG9GaXJzdExhc3QgPz8gdHJ1ZTtcclxuY29uc3QgZ29Ub1ByZXZOZXh0ID0gb3B0aW9ucy5wYWdpbmF0aW9uPy5nb1RvUHJldk5leHQgPz8gdHJ1ZTtcclxuXHJcbmNvbnN0IHBhZ2luYXRpb25Hcm91cCA9IHJlZigpO1xyXG5jb25zdCBwYWdlcyA9IGNvbXB1dGVkKCgpID0+IHtcclxuICByZXR1cm4gWy4uLmNvbnRyb2wucGFnaW5hdGlvblBhZ2VzLnZhbHVlcygpXTtcclxufSk7XHJcblxyXG5jb25zdCBnb3RvUGFnZSA9IChldjogRXZlbnQsIHBhZ2VJbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgZXY/LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29udHJvbC5hY3RpdmVQYWdlTnVtYmVyID0gcGFnZUluZGV4O1xyXG4gIGNvbnN0IHBhZ2UgPSBjb250cm9sLnBhZ2luYXRpb25QYWdlcz8uZ2V0KHBhZ2VJbmRleCk/LnBhZ2U7XHJcbiAgaWYgKHBhZ2UpIGNvbnRyb2wuYWN0aXZlUGFnZSA9IG5ldyBTZXQocGFnZSk7XHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBwYWdpbmF0aW9uR3JvdXAudmFsdWUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWN0aXZlJyk/LlswXT8uZm9jdXMoKVxyXG4gIH0sIDMwMCk7XHJcbn0gXHJcblxyXG5jb25zdCBwYWdlU2VsZWN0aW9uID0gY29tcHV0ZWQoKCkgPT4geyAgXHJcbiAgY29uc3QgbCA9IHBhZ2VzLnZhbHVlLmxlbmd0aDtcclxuXHJcbiAgaWYgKHRydW5rYXRpb24gPiBsKSB7XHJcbiAgICByZXR1cm4gcGFnZXMudmFsdWUubWFwKChwLCBpKSA9PiAoe1xyXG4gICAgICBpZDogcC5pZCxcclxuICAgICAgdHlwZTogJ3BhZ2UnLFxyXG4gICAgICBmbjogKGV2OiBFdmVudCkgPT4gZ290b1BhZ2UoZXYsIGkpLFxyXG4gICAgICB2YWx1ZTogKGkgKyAxKS50b1N0cmluZygpLFxyXG4gICAgICBhY3RpdmU6IGNvbnRyb2wuYWN0aXZlUGFnZU51bWJlciA9PT0gaSxcclxuICAgIH0pKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgcmFuZ2UgPSBNYXRoLmNlaWwodHJ1bmthdGlvbiAvIDIpO1xyXG4gICAgbGV0IGZpcnN0ID0gY29udHJvbC5hY3RpdmVQYWdlTnVtYmVyIC0gcmFuZ2U7XHJcbiAgICBsZXQgbGFzdCA9IGNvbnRyb2wuYWN0aXZlUGFnZU51bWJlciArIHJhbmdlICsgKGZpcnN0IDwgMCA/IE1hdGguYWJzKGZpcnN0KSA6IDApO1xyXG4gICAgZmlyc3QgLT0gbGFzdCA+IHBhZ2VzLnZhbHVlLmxlbmd0aCAtIDEgPyBsYXN0IC0gcGFnZXMudmFsdWUubGVuZ3RoIC0gMSA6IDA7XHJcblxyXG4gICAgcmV0dXJuIHBhZ2VzLnZhbHVlLnJlZHVjZSgocDogUGFnZVtdLCBjLCBpKSA9PiB7XHJcbiAgICAgIGZpcnN0IDwgaSAmJiBsYXN0ID49IGlcclxuICAgICAgPyBwLnB1c2goeyBpZDogYy5pZCwgdHlwZTogJ3BhZ2UnLCBmbjogKGV2KSA9PiBnb3RvUGFnZShldiwgaSksIHZhbHVlOiAoaSArIDEpLnRvU3RyaW5nKCksIGFjdGl2ZTogY29udHJvbC5hY3RpdmVQYWdlTnVtYmVyID09PSBpfSlcclxuICAgICAgOiBwPy5bcC5sZW5ndGggLSAxXT8udHlwZSAhPT0gJ3RydW5jYXRlJ1xyXG4gICAgICA/IHAucHVzaCh7IGlkOiAndHJ1bmNhdGUnLCB0eXBlOiAndHJ1bmNhdGUnIH0pXHJcbiAgICAgIDogcDtcclxuXHJcbiAgICAgIHJldHVybiBwXHJcbiAgICB9LCBbXSlcclxuICAgIC5yZWR1Y2UoKHA6IFBhZ2VbXSwgYywgaSwgYXJyKSA9PiB7XHJcbiAgICAgIHAucHVzaChjKVxyXG4gICAgICBpZiAoaSA9PT0gMCAmJiBjb250cm9sLmFjdGl2ZVBhZ2VOdW1iZXIgIT09IDAgJiYgZ29Ub1ByZXZOZXh0KSBwLnVuc2hpZnQoe2lkOiAnYmFjaycsIHR5cGU6ICdiYWNrJywgZm46IChldikgPT4gZ290b1BhZ2UoZXYsIGNvbnRyb2wuYWN0aXZlUGFnZU51bWJlciAtIDEpIH0pXHJcbiAgICAgIGlmIChpID09PSAwICYmIGNvbnRyb2wuYWN0aXZlUGFnZU51bWJlciA+IDEgJiYgZ29Ub0ZpcnN0TGFzdCkgcC51bnNoaWZ0KHsgaWQ6ICdmaXJzdCcsIHR5cGU6ICdmaXJzdCcsIGZuOiAoZXYpID0+IGdvdG9QYWdlKGV2LCAwKSB9KVxyXG4gICAgICBpZiAoaSA9PT0gYXJyLmxlbmd0aCAtIDEgJiYgY29udHJvbC5hY3RpdmVQYWdlTnVtYmVyICE9PSBwYWdlcy52YWx1ZS5sZW5ndGggLSAxICYmIGdvVG9QcmV2TmV4dCkgcC5wdXNoKCB7IGlkOiAnbmV4dCcsIHR5cGU6ICduZXh0JywgZm46IChldikgPT4gZ290b1BhZ2UoZXYsIGNvbnRyb2wuYWN0aXZlUGFnZU51bWJlciArIDEpIH0pXHJcbiAgICAgIGlmIChpID09PSBhcnIubGVuZ3RoIC0gMSAmJiBjb250cm9sLmFjdGl2ZVBhZ2VOdW1iZXIgPCBwYWdlcy52YWx1ZS5sZW5ndGggLSAyICYmIGdvVG9GaXJzdExhc3QpIHAucHVzaCh7IGlkOiAnbGFzdCcsIHR5cGU6ICdsYXN0JywgZm46IChldikgPT4gZ290b1BhZ2UoZXYsIHBhZ2VzLnZhbHVlLmxlbmd0aCAtIDEpIH0pXHJcblxyXG4gICAgICByZXR1cm4gcFxyXG4gICAgfSwgW10pO1xyXG4gIH1cclxuXHJcbn0pO1xyXG5cclxub25Nb3VudGVkKCgpID0+IHtcclxuICBnb3RvUGFnZSh1bmRlZmluZWQgYXMgdW5rbm93biBhcyBFdmVudCwgY29udHJvbC5hY3RpdmVQYWdlTnVtYmVyKTtcclxufSk7XHJcblxyXG48L3NjcmlwdD5cclxuXHJcbjx0ZW1wbGF0ZT5cclxuICA8ZGl2XHJcbiAgICByZWY9XCJwYWdpbmF0aW9uR3JvdXBcIlxyXG4gICAgOmNsYXNzPVwiWydwYWdpbmF0aW9uJywgYWxpZ25dXCJcclxuICA+XHJcbiAgICA8dHJhbnNpdGlvbi1ncm91cFxyXG4gICAgICBuYW1lPVwicGFnZS1idG5cIlxyXG4gICAgICBhcHBlYXJcclxuICAgID5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIHYtZm9yPVwiaXRlbSBpbiBwYWdlU2VsZWN0aW9uXCJcclxuICAgICAgICA6a2V5PVwiaXRlbS5pZFwiXHJcbiAgICAgICAgOmNsYXNzPVwiWydwYWdpbmF0aW9uLWJ0bicsIGl0ZW0udHlwZSwgaXRlbS5hY3RpdmUgPyAnYWN0aXZlJyA6ICcnXVwiXHJcbiAgICAgICAgOmRpc2FibGVkPVwiaXRlbS50eXBlID09PSAndHJ1bmNhdGUnXCJcclxuICAgICAgICBAY2xpY2s9XCJpdGVtLmZuXCJcclxuICAgICAgPlxyXG4gICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiaXRlbS50eXBlICE9PSAncGFnZScgJiYgaXRlbS50eXBlICE9PSAndHJ1bmNhdGUnXCI+XHJcbiAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImFycm93XCJcclxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgOmNsYXNzPVwiW2l0ZW0udHlwZSA9PT0gJ2ZpcnN0JyB8fCBpdGVtLnR5cGUgPT09ICdiYWNrJyA/ICdhcnJvdy1sZWZ0JyA6ICdhcnJvdy1yaWdodCcsIGl0ZW0udHlwZSA9PT0gJ2ZpcnN0JyB8fCBpdGVtLnR5cGUgPT09ICdsYXN0JyA/ICdkb3VibGUtYXJyb3ctcGF0aCcgOiAnYXJyb3ctcGF0aCddXCJcclxuICAgICAgICAgICAgICBkPVwiTTQgMCwgMTIgOCwgNCAxNlwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiaXRlbS50eXBlID09PSAndHJ1bmNhdGUnXCI+XHJcbiAgICAgICAgICAuLi5cclxuICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiaXRlbS50eXBlID09PSAncGFnZSdcIj5cclxuICAgICAgICAgIHt7IGl0ZW0udmFsdWUgfX1cclxuICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvdHJhbnNpdGlvbi1ncm91cD5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cclxuLnBhZ2luYXRpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiAyLjVyZW07XHJcbiAgJi5sZWZ0IHtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgfVxyXG5cclxuICAmLmNlbnRlciB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICYucmlnaHQge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICB9XHJcbn1cclxuXHJcbi5oaWRkZW4tcGFnZXMsXHJcbi5wYWdpbmF0aW9uLWJ0biB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGNvbG9yOiB2YXIoLS10ZC1jb2xvcik7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIHdpZHRoOiAyLjVyZW07XHJcbiAgaGVpZ2h0OiAyLjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW4tbGVmdDogLjI1cmVtO1xyXG4gICYuaGlkZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgJi5hY3RpdmUsXHJcbiAgJjpub3QoLmhpZGRlbi1wYWdlcyk6aG92ZXIge1xyXG4gICAgY29sb3I6IHZhcigtLXBhZ2luYXRpb24tYWN0aXZlLWNvbG9yKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2luYXRpb24tYmFja2dyb3VuZC1hY3RpdmUtY29sb3IpO1xyXG4gIH1cclxufVxyXG5cclxuLmFycm93IHsgd2lkdGg6IDE2cHg7XHJcbiAgaGVpZ2h0OiAxNnB4O1xyXG4gIHN0cm9rZS13aWR0aDogMnB4O1xyXG4gIHN0cm9rZTogdmFyKC0tcGFnaW5hdGlvbi1hcnJvdy1jb2xvcik7XHJcbiAgZmlsbDogdHJhbnNwYXJlbnQ7XHJcbiAgLmFycm93LXBhdGgge1xyXG4gICAgZDogdmFyKC0tcGFnaW5hdGlvbi1hcnJvdy1wYXRoKTtcclxuICB9XHJcbiAgLmRvdWJsZS1hcnJvdy1wYXRoIHtcclxuICAgIGQ6IHZhcigtLXBhZ2luYXRpb24tZG91YmxlLWFycm93LXBhdGgpO1xyXG4gIH1cclxufVxyXG5cclxuLmFycm93LWxlZnQge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoLTEpO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcclxufVxyXG5cclxuLnBhZ2UtYnRuLWVudGVyLWFjdGl2ZSxcclxuLnBhZ2UtYnRuLWxlYXZlLWFjdGl2ZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGluc2V0OiAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcclxufVxyXG4ucGFnZS1idG4tZW50ZXItZnJvbSB7XHJcbiAgaW5zZXQ6IDEuMjVyZW0gMCAwIC0xLjI1cmVtO1xyXG59XHJcbi5wYWdlLWJ0bi1sZWF2ZS10byB7XHJcbiAgaW5zZXQ6IDEuMjVyZW0gMCAwIDEuMjVyZW07XHJcbn1cclxuLnBhZ2UtYnRuLWVudGVyLWZyb20sXHJcbi5wYWdlLWJ0bi1sZWF2ZS10byB7XHJcbiAgb3BhY2l0eTogMDtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDA7XHJcbiAgbWFyZ2luLWxlZnQ6IDByZW0gIWltcG9ydGFudDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbn1cclxuPC9zdHlsZT5cclxuIiwiaW1wb3J0IHsgcmVmLCBvbk1vdW50ZWQsIG9uVW5tb3VudGVkIH0gZnJvbSAndnVlJ1xyXG5cclxuLy8gYnkgY29udmVudGlvbiwgY29tcG9zYWJsZSBmdW5jdGlvbiBuYW1lcyBzdGFydCB3aXRoIFwidXNlXCJcclxuZXhwb3J0IGRlZmF1bHQgKGNhbGxiYWNrOiAoKCkgPT4gdm9pZCkpID0+IHtcclxuICAvLyBzdGF0ZSBlbmNhcHN1bGF0ZWQgYW5kIG1hbmFnZWQgYnkgdGhlIGNvbXBvc2FibGVcclxuICBjb25zdCB4ID0gcmVmKDApXHJcbiAgY29uc3QgeSA9IHJlZigwKVxyXG5cclxuICAvLyBhIGNvbXBvc2FibGUgY2FuIHVwZGF0ZSBpdHMgbWFuYWdlZCBzdGF0ZSBvdmVyIHRpbWUuXHJcbiAgY29uc3QgdXBkYXRlID0gKGV2ZW50OiB1bmtub3duKSA9PiB7XHJcbiAgICBjYWxsYmFjaygpO1xyXG4gIH1cclxuXHJcbiAgLy8gYSBjb21wb3NhYmxlIGNhbiBhbHNvIGhvb2sgaW50byBpdHMgb3duZXIgY29tcG9uZW50J3NcclxuICAvLyBsaWZlY3ljbGUgdG8gc2V0dXAgYW5kIHRlYXJkb3duIHNpZGUgZWZmZWN0cy5cclxuICBvbk1vdW50ZWQoKCkgPT4gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZSkpXHJcbiAgb25Vbm1vdW50ZWQoKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZSkpXHJcblxyXG4gIC8vIGV4cG9zZSBtYW5hZ2VkIHN0YXRlIGFzIHJldHVybiB2YWx1ZVxyXG4gIHJldHVybiB7IHgsIHkgfVxyXG59IiwiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cclxuaW1wb3J0IHdpblJlc2l6ZSBmcm9tIFwiQC9jb21wb3NhYmxlcy93aW5kb3dSZXNpemVcIjtcclxuaW1wb3J0IHsgVHJhbnNpdGlvblR5cGUgfSBmcm9tIFwiQC90eXBlcy9lbnVtc1wiO1xyXG5cclxuY29uc3QgcHJvcHMgPSB3aXRoRGVmYXVsdHMoXHJcbiAgZGVmaW5lUHJvcHM8e1xyXG4gICAgYWN0aXZlOiBib29sZWFuO1xyXG4gICAgdHJhbnNpdGlvbj86IFRyYW5zaXRpb25UeXBlO1xyXG4gICAgdGVsZXBvcnQ/OiBzdHJpbmc7XHJcbiAgfT4oKSxcclxuICB7XHJcbiAgICB0ZWxlcG9ydDogXCJib2R5XCIsXHJcbiAgICB0cmFuc2l0aW9uOiBUcmFuc2l0aW9uVHlwZS5GQURFVVAsXHJcbiAgfVxyXG4pO1xyXG5cclxuY29uc3QgZW1pdCA9IGRlZmluZUVtaXRzPHtcclxuICAoZTogXCJjbG9zZVwiKTogdm9pZDtcclxufT4oKTtcclxuXHJcbndpblJlc2l6ZSgoKSA9PiBlbWl0KFwiY2xvc2VcIikpO1xyXG48L3NjcmlwdD5cclxuXHJcbjx0ZW1wbGF0ZT5cclxuICA8VGVsZXBvcnQgOnRvPVwicHJvcHMudGVsZXBvcnRcIj5cclxuICAgIDxUcmFuc2l0aW9uIDpuYW1lPVwicHJvcHMudHJhbnNpdGlvblwiPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgdi1pZj1cInByb3BzLmFjdGl2ZVwiXHJcbiAgICAgICAgY2xhc3M9XCJvdmVybGF5LWNvbnRhaW5lclwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzcz1cIm92ZXJsYXktbWFza1wiXHJcbiAgICAgICAgICBAY2xpY2s9XCJlbWl0KCdjbG9zZScpXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxzbG90IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9UcmFuc2l0aW9uPlxyXG4gIDwvVGVsZXBvcnQ+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuQGltcG9ydCAnQC9hc3NldHMvc3R5bGVzL3RyYW5zaXRpb25zJztcclxuLmZhZGUtdXAtZW50ZXItYWN0aXZlLFxyXG4uZmFkZS11cC1sZWF2ZS1hY3RpdmUgeyB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMTVzIGxpbmVhciwgdHJhbnNmb3JtIDAuMjVzICRlYXNlb3V0cXVpbnQ7IH1cclxuLmZhZGUtdXAtZW50ZXItZnJvbSxcclxuLmZhZGUtdXAtbGVhdmUtdG8ge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE2cHgpO1xyXG59XHJcblxyXG4ub3BhY2l0eS1lbnRlci1hY3RpdmUsXHJcbi5vcGFjaXR5LWxlYXZlLWFjdGl2ZSB7IHRyYW5zaXRpb246ICBvcGFjaXR5IDAuMjVzIGxpbmVhciB9XHJcbi5vcGFjaXR5LWVudGVyLWZyb20sXHJcbi5vcGFjaXR5LWxlYXZlLXRvIHsgb3BhY2l0eTogMDsgfVxyXG5cclxuLm92ZXJsYXktY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgaW5zZXQ6IDA7XHJcbn1cclxuLm92ZXJsYXktbWFzayB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGluc2V0OiAwO1xyXG59XHJcbjwvc3R5bGU+XHJcbiIsIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCIgZ2VuZXJpYz1cIlQsIFMsIEMgZXh0ZW5kcyBzdHJpbmcsIFAgZXh0ZW5kcyBDb21tb25Qcm9wcywgRVwiPlxyXG5pbXBvcnQgeyBnZXRCb3VuZGluZ0JveCwgcGxhY2VNZW51IH0gZnJvbSAnQC9zZXJ2aWNlcy9vdmVybGF5U2VydmljZSc7XHJcbmltcG9ydCB7IGNvbXB1dGVkLCBpbmplY3QsIHJlZiwgd2F0Y2ggfSBmcm9tICd2dWUnO1xyXG5pbXBvcnQgeyBJbmplY3RvciwgVHJhbnNpdGlvblR5cGUgfSBmcm9tICdAL3R5cGVzL2VudW1zJ1xyXG5pbXBvcnQgT3ZlcmxheSBmcm9tICdAL2NvbXBvbmVudHMvb3ZlcmxheXMvT3ZlcmxheS52dWUnO1xyXG5pbXBvcnQgeyBpbnB1dE92ZXJsYXlTZXJ2aWNlIH0gZnJvbSAnQC9zZXJ2aWNlcy9vdmVybGF5U2VydmljZSdcclxuaW1wb3J0IHsgQWx0ZXJuYXRpdmVWYWx1ZSwgQ2VsbElkLCBDb2x1bW4sIEVaQ29tcG9uZW50LCBUYWJsZUlkIH0gZnJvbSAnQC90eXBlcy90YWJsZVR5cGVzJztcclxuaW1wb3J0IHsgQ2VsbCwgQ29tbW9uUHJvcHMgfSBmcm9tICdAL3R5cGVzL2NlbGxUeXBlcyc7XHJcbmltcG9ydCB7IElucHV0T3ZlcmxheVByb3BzIH0gZnJvbSAnQC90eXBlcy9pbnB1dFR5cGVzJztcclxuaW1wb3J0IHsgSW5qZWN0U2VydmljZSB9IGZyb20gJ0AvdHlwZXMvaW5qZWN0VHlwZXMnO1xyXG5pbXBvcnQgeyBkZWJvdW5jZSwgZ2V0Q3NzVmFyLCB0aHJvdHRsZSB9IGZyb20gJ0AvdXRpbHMvZ2VuZXJhbFV0aWxzJztcclxuXHJcbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8e1xyXG4gIHRhYmxlSWQ6IFRhYmxlSWQ7XHJcbiAgY29sdW1uczogcmVhZG9ubHkgQ29sdW1uPFAsIEU+W107XHJcbn0+KClcclxuXHJcbmNvbnN0IHsgY3JlYXRlQ2VsbElkIH0gPSBpbmplY3QoSW5qZWN0b3IuVEFCTEVTRVJWSUNFKSBhcyBJbmplY3RTZXJ2aWNlPFQsIFM+O1xyXG5cclxuY29uc3QgZW1pdCA9IGRlZmluZUVtaXRzPHsoZTondXBkYXRlOmNlbGxWYWx1ZScsIHJldHVyblZhbHVlOiB7IGNlbGxJZDogQ2VsbElkLCB2YWx1ZTogIChQWyd2YWx1ZSddIHwgQWx0ZXJuYXRpdmVWYWx1ZTxULCBQLCBzdHJpbmc+KSB9KTogdm9pZH0+KCk7XHJcblxyXG5jb25zdCBoYW5kSGVsZFdpZHRoID0gcGFyc2VJbnQoZ2V0Q3NzVmFyKCctLXRhYmxldC1tYXgtd2lkdGgnKSkgPz8gIHBhcnNlSW50KGdldENzc1ZhcignLS1tb2JpbGUtbWF4LXdpZHRoJykpID8/IDA7XHJcbmNvbnN0IG92ZXJsYXlDb21wb25lbnQgPSByZWY8RVpDb21wb25lbnQ8UD4+KCk7XHJcbmNvbnN0IG92ZXJsYXlDb21wb25lbnRQcm9wcyA9IHJlZjxJbnB1dE92ZXJsYXlQcm9wczxDPj4oKTtcclxuY29uc3QgY2VsbFZhbHVlID0gcmVmPENlbGw8Qz5bJ3ZhbHVlJ10+KCk7XHJcblxyXG53YXRjaChpbnB1dE92ZXJsYXlTZXJ2aWNlLmNvbXBvbmVudFByb3BzLCAocCkgPT4ge1xyXG4gIG92ZXJsYXlDb21wb25lbnRQcm9wcy52YWx1ZSA9IGlucHV0T3ZlcmxheVNlcnZpY2UuY29tcG9uZW50UHJvcHMudmFsdWUgYXMgSW5wdXRPdmVybGF5UHJvcHM8Qz4gPz8gdW5kZWZpbmVkO1xyXG4gIG92ZXJsYXlDb21wb25lbnQudmFsdWUgPSBwcm9wcy5jb2x1bW5zLmZpbmQoYyA9PiBjLmNvbHVtbklkID09PSBpbnB1dE92ZXJsYXlTZXJ2aWNlLmNvbXBvbmVudFByb3BzLnZhbHVlPy5jb2x1bW5JZCk/LmVkaXRDb21wb25lbnQgPz8gdW5kZWZpbmVkO1xyXG59KVxyXG5cclxuY29uc3QgcG9zaXRpb24gPSBjb21wdXRlZCgoKSA9PiB7XHJcbiAgaWYgKCFvdmVybGF5Q29tcG9uZW50UHJvcHMudmFsdWUpIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgY29uc3QgcCA9IG92ZXJsYXlDb21wb25lbnRQcm9wcy52YWx1ZS5wb3NpdGlvbkRhdGE7XHJcbiAgaWYgKG92ZXJsYXlDb21wb25lbnRQcm9wcy52YWx1ZT8udHlwZSA9PT0gJ2NvbnRleHRidXR0b24nICYmIG92ZXJsYXlDb21wb25lbnQudmFsdWU/LiRlbCkge1xyXG4gICAgY29uc3QgYyA9IGdldEJvdW5kaW5nQm94KG92ZXJsYXlDb21wb25lbnQudmFsdWU/LiRlbCk7XHJcbiAgICByZXR1cm4gcGxhY2VNZW51KHAsIGMpO1xyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgdG9wOiBgJHtwLnRvcH1weGAsXHJcbiAgICBsZWZ0OiBgJHtwLmxlZnQgKyAocC53aWR0aCAvMil9cHhgLFxyXG4gICAgd2lkdGg6IGAke3Aud2lkdGggLSAocC53aWR0aCAvMil9cHhgLFxyXG4gICAgaGVpZ2h0OiBgJHtwLmhlaWdodH1weGBcclxuICB9XHJcbn0pO1xyXG5cclxuY29uc3QgdXBkYXRlVmFsdWUgPSAoZXY6IENlbGw8Qz5bJ3ZhbHVlJ10pID0+IHtcclxuICBjb25zdCBjb2xJZCA9IG92ZXJsYXlDb21wb25lbnRQcm9wcy52YWx1ZT8uY29sdW1uSWQ7XHJcbiAgY29uc3Qgcm93SWQgPSBvdmVybGF5Q29tcG9uZW50UHJvcHMudmFsdWU/LnJvd0lkO1xyXG5cclxuICBjZWxsVmFsdWUudmFsdWUgPSBldjtcclxuICBpZihyb3dJZCAmJiBjb2xJZCkgZW1pdCgndXBkYXRlOmNlbGxWYWx1ZScsIHsgY2VsbElkOiBjcmVhdGVDZWxsSWQocm93SWQsIGNvbElkKSwgdmFsdWU6IGV2IH0pO1xyXG59XHJcblxyXG5jb25zdCB0aHJvdHRsZUNsb3NlID0gZGVib3VuY2UoKGV2PzogQ2VsbDxDPlsndmFsdWUnXSkgPT4gY2xvc2UoZXYpLCAxMDApO1xyXG5cclxuY29uc3QgY2xvc2UgPSAoZXY/OiBDZWxsPEM+Wyd2YWx1ZSddKSA9PiB7XHJcbiAgaWYgKGV2KSB1cGRhdGVWYWx1ZShldik7XHJcbiAgY2VsbFZhbHVlLnZhbHVlID0gdW5kZWZpbmVkXHJcbiAgb3ZlcmxheUNvbXBvbmVudC52YWx1ZSA9IHVuZGVmaW5lZDtcclxuICBpbnB1dE92ZXJsYXlTZXJ2aWNlLmNsb3NlKCk7XHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHRlbXBsYXRlPlxyXG4gIDxPdmVybGF5XHJcbiAgICB2LWlmPVwidGFibGVJZFwiXHJcbiAgICA6dGVsZXBvcnQ9XCJ0YWJsZUlkXCJcclxuICAgIDp0cmFuc2l0aW9uPVwiVHJhbnNpdGlvblR5cGUuTk9ORVwiXHJcbiAgICA6YWN0aXZlPVwiISFwb3NpdGlvbiAmJiAhIW92ZXJsYXlDb21wb25lbnQgJiYgISFvdmVybGF5Q29tcG9uZW50UHJvcHNcIlxyXG4gICAgQGNsb3NlPVwidGhyb3R0bGVDbG9zZVwiXHJcbiAgPlxyXG4gICAgPGRpdlxyXG4gICAgICA6Y2xhc3M9XCJbJ2lucHV0LWNvbnRhaW5lcicsIHsgJ3VzZS1iYWNrZ3JvdW5kJyA6IG92ZXJsYXlDb21wb25lbnRQcm9wcz8udXNlQmFja2dyb3VuZCA/PyB0cnVlIH1dXCJcclxuICAgICAgOnN0eWxlPVwicG9zaXRpb25cIlxyXG4gICAgICBAY2xpY2s9XCJ0aHJvdHRsZUNsb3NlXCJcclxuICAgID5cclxuICAgICAgPGNvbXBvbmVudFxyXG4gICAgICAgIDppcz1cIm92ZXJsYXlDb21wb25lbnRcIlxyXG4gICAgICAgIHJlZj1cImNoaWxkXCJcclxuICAgICAgICB2LWJpbmQ9XCJvdmVybGF5Q29tcG9uZW50UHJvcHNcIlxyXG4gICAgICAgIEBhYm9ydDppbnB1dD1cIigpID0+IHRocm90dGxlQ2xvc2UoKVwiXHJcbiAgICAgICAgQGNsb3NlOmlucHV0PVwidGhyb3R0bGVDbG9zZVwiXHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICA8L092ZXJsYXk+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuXHJcbi5pbnB1dC1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICAmLnVzZS1iYWNrZ3JvdW5kOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGQtZWRpdC1hY3RpdmUpO1xyXG4gICAgaW5zZXQ6IC01cHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuPC9zdHlsZT4iLCI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiIGdlbmVyaWM9XCJULCBTXCI+XHJcbmltcG9ydCB7XHJcbiAgQ2VsbElkLFxyXG4gIFJvd0lkLFxyXG4gIFRhYmxlLFxyXG4gIFRhYmxlU2VydmljZSxcclxufSBmcm9tIFwiQC90eXBlcy90YWJsZVR5cGVzXCI7XHJcblxyXG5pbXBvcnQgVGFibGVTZWN0aW9uIGZyb20gXCJAL2NvbXBvbmVudHMvdGFibGUvVGFibGVTZWN0aW9uLnZ1ZVwiO1xyXG5pbXBvcnQgeyBjb21wdXRlZCwgaW5qZWN0LCBvbk1vdW50ZWQsIHJlZiwgd2F0Y2ggfSBmcm9tIFwidnVlXCI7XHJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gXCJAL2NvbXBvbmVudHMvdGFibGUvUGFnaW5hdGlvbi52dWVcIjtcclxuaW1wb3J0IENlbGxJbnB1dE92ZXJsYXkgZnJvbSBcIi4uL292ZXJsYXlzL0NlbGxJbnB1dE92ZXJsYXkudnVlXCI7XHJcbmltcG9ydCB7IEluamVjdERhdGEsIEluamVjdFJvd3MsIEluamVjdFN1YlN0b3JlcywgSW5qZWN0Q29sdW1ucywgSW5qZWN0Q29udHJvbCwgSW5qZWN0T3B0aW9ucywgSW5qZWN0U2VydmljZSwgSW5qZWN0UmF3RGF0YSwgSW5qZWN0UmVhZHkgfSBmcm9tIFwiQC90eXBlcy9pbmplY3RUeXBlc1wiO1xyXG5pbXBvcnQgeyBJbmplY3RvciB9IGZyb20gJ0AvdHlwZXMvZW51bXMnO1xyXG5pbXBvcnQgeyB1cGRhdGVSb3dzRm4gfSBmcm9tIFwiQC91dGlscy9idWlsZFV0aWxzXCI7XHJcblxyXG5jb25zdCBlbWl0ID0gZGVmaW5lRW1pdHM8e1xyXG4gIChlOiAndXBkYXRlOmFsbFNlbGVjdGVkJywgcm93SWQ6IFJvd0lkW10pOiB2b2lkO1xyXG4gIChlOiAndXBkYXRlOnNlbGVjdGVkJywgcm93SWQ6IFJvd0lkKTogdm9pZDtcclxuICAoZTogJ3VwZGF0ZTpjZWxsVmFsdWUnLCByZXR1cm5WYWx1ZTogeyBjZWxsSWQ6IENlbGxJZCwgdmFsdWU6IGFueSB9KTogdm9pZFxyXG59PigpO1xyXG5cclxuY29uc3QgeyByYXdEYXRhIH0gPSBpbmplY3QoSW5qZWN0b3IuUkFXREFUQSkgYXMgSW5qZWN0UmF3RGF0YTxUPjtcclxuY29uc3QgeyBkYXRhIH0gPSBpbmplY3QoSW5qZWN0b3IuREFUQSkgYXMgSW5qZWN0RGF0YTxUPjtcclxuY29uc3QgeyByb3dzIH0gPSBpbmplY3QoSW5qZWN0b3IuUk9XUykgYXMgSW5qZWN0Um93cztcclxuY29uc3QgeyBvcHRpb25zIH0gPSBpbmplY3QoSW5qZWN0b3IuT1BUSU9OUykgYXMgSW5qZWN0T3B0aW9uczxULCBTPjtcclxuY29uc3QgeyBjb2x1bW5zIH0gPSBpbmplY3QoSW5qZWN0b3IuQ09MVU1OUykgYXMgSW5qZWN0Q29sdW1uczxULCBTPjtcclxuY29uc3QgeyBzdWJTdG9yZXMgfSA9IGluamVjdChJbmplY3Rvci5TVUJTVE9SRVMpIGFzIEluamVjdFN1YlN0b3JlczxTPjtcclxuY29uc3QgeyBjb250cm9sIH0gPSBpbmplY3QoSW5qZWN0b3IuQ09OVFJPTCkgYXMgSW5qZWN0Q29udHJvbDtcclxuY29uc3QgeyByZWFkeSB9ID0gaW5qZWN0KEluamVjdG9yLlJFQURZKSBhcyBJbmplY3RSZWFkeTtcclxuY29uc3QgdGFibGVTZXJ2aWNlID0gaW5qZWN0KEluamVjdG9yLlRBQkxFU0VSVklDRSkgYXMgSW5qZWN0U2VydmljZTxULCBTPjtcclxuXHJcbmNvbnN0IG1vdW50ZWQgPSByZWYoZmFsc2UpO1xyXG5cclxuaWYgKG9wdGlvbnMucGFnaW5hdGlvbj8ucm93c1BlclBhZ2UgKSB0YWJsZVNlcnZpY2UudXBkYXRlUGFnZXMoKTtcclxuXHJcbm9uTW91bnRlZCgoKSA9PiBtb3VudGVkLnZhbHVlID0gdHJ1ZSlcclxuPC9zY3JpcHQ+XHJcblxyXG48dGVtcGxhdGU+XHJcbiAgPFRhYmxlU2VjdGlvblxyXG4gICAgOmRhdGE9XCJkYXRhXCJcclxuICAgIDpyb3dzPVwidGFibGVTZXJ2aWNlLnJvd3NcIlxyXG4gICAgOmNvbHVtbnM9XCJjb2x1bW5zXCJcclxuICAgIDphY3RpdmUtY29sdW1uPVwiY29udHJvbC5hY3RpdmVDb2x1bW5cIlxyXG4gICAgOnRhYmxlLWlkPVwiY29udHJvbC50YWJsZUlkXCJcclxuICAgIDpvcHRpb25zPVwib3B0aW9uc1wiXHJcbiAgICA6c3ViU3RvcmVzPVwic3ViU3RvcmVzXCJcclxuICAgIEB1cGRhdGU6YWxsLXNlbGVjdGVkPVwiKHYpID0+IGVtaXQoJ3VwZGF0ZTphbGxTZWxlY3RlZCcsIHYpXCJcclxuICAgIEB1cGRhdGU6c2VsZWN0ZWQ9XCIodikgPT4gZW1pdCgndXBkYXRlOnNlbGVjdGVkJywgdilcIlxyXG4gIC8+XHJcbiAgPFBhZ2luYXRpb25cclxuICAgIHYtaWY9XCJyZWFkeSAmJiBjb250cm9sLnBhZ2luYXRpb25QYWdlcy5zaXplID4gMVwiXHJcbiAgICA6YWN0aXZlUGFnZU51bWJlcj1cImNvbnRyb2wuYWN0aXZlUGFnZU51bWJlclwiXHJcbiAgICA6cm93cz1cInJvd3NcIlxyXG4gICAgOnBhZ2luYXRvblBhZ2VzPVwiY29udHJvbC5wYWdpbmF0aW9uUGFnZXNcIlxyXG4gIC8+XHJcbiAgICBcclxuICA8Q2VsbElucHV0T3ZlcmxheVxyXG4gICAgdi1pZj1cIm1vdW50ZWRcIlxyXG4gICAgOmNvbHVtbnM9XCJjb2x1bW5zXCJcclxuICAgIDp0YWJsZUlkPVwiYCMke2NvbnRyb2wudGFibGVJZH1gXCJcclxuICAgIEB1cGRhdGU6Y2VsbFZhbHVlPVwiKHYpID0+IGVtaXQoJ3VwZGF0ZTpjZWxsVmFsdWUnLCB2KVwiXHJcbiAgLz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcblxyXG4iLCJpbXBvcnQgeyBSb3csIFRhYmxlIH0gZnJvbSBcIkAvdHlwZXMvdGFibGVUeXBlc1wiO1xyXG5pbXBvcnQgeyBDb2x1bW4sIENvbnRyb2xPYmplY3QsIFJvd0lkLCBTdWJUYWJsZVN0b3JlLCBUYWJsZUlkLCBUYWJsZU9wdGlvbnMgfSBmcm9tIFwiQC90eXBlcy90YWJsZVR5cGVzXCI7XHJcbmltcG9ydCB7IENvbW1vblByb3BzIH0gZnJvbSBcIkAvdHlwZXMvY2VsbFR5cGVzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlID0ge1xyXG4gIGRhdGE6IDxULCBTPihyYXdEYXRhOiBUW10sIG9wdGlvbnM6IFRhYmxlT3B0aW9uczxULCBTPikgPT4ge1xyXG4gICAgY29uc3QgZGF0YXNldCA9IG5ldyBNYXAoKTtcclxuICAgIHJhd0RhdGEuZm9yRWFjaCgoZCkgPT4gZGF0YXNldC5zZXQob3B0aW9ucy5zZXRSb3dJZChkKSwgZCkpXHJcbiAgICByZXR1cm4gZGF0YXNldFxyXG4gIH0sXHJcbiAgcm93czogPFQsIFM+KHRhYmxlSWQ6IFRhYmxlSWQsIGRhdGE6IFRbXSwgY29sdW1uczogQ29sdW1uPENvbW1vblByb3BzLCBUPltdLCBvcHRpb25zOiBUYWJsZU9wdGlvbnM8VCwgUz4pOiBSb3dbXSA9PiB7XHJcbiAgICBjb25zdCByb3dzID0gZGF0YS5tYXAoZCA9PiB7XHJcbiAgICAgIGNvbnN0IHJvd0lkID0gb3B0aW9ucy5zZXRSb3dJZChkKTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICByb3dJZCxcclxuICAgICAgICBjZWxsczogY29sdW1ucy5tYXAoKGMpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHZhbHVlID1cclxuICAgICAgICAgICAgdHlwZW9mIGM/LmdldFZhbHVlID09PSAnb2JqZWN0J1xyXG4gICAgICAgICAgICAgID8geyBbYy5nZXRWYWx1ZS5rZXldOiBjLmdldFZhbHVlLnZhbHVlKGQpIH0gXHJcbiAgICAgICAgICAgICAgOiB7IHZhbHVlOiBjPy5nZXRWYWx1ZSA/IGMuZ2V0VmFsdWUoZCkgOiBbXSB9O1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdGFibGVJZDogdGFibGVJZCxcclxuICAgICAgICAgICAgcm93SWQsXHJcbiAgICAgICAgICAgIGNvbHVtbklkOiBjLmNvbHVtbklkLFxyXG4gICAgICAgICAgICB0eXBlOiBjLnR5cGUsXHJcbiAgICAgICAgICAgIC4uLnZhbHVlLFxyXG4gICAgICAgICAgICAuLi4oYz8uZ2V0UHJvcHM/LihkKSA/PyB7fSksXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSksXHJcbiAgICAgIH07XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHJvd3M7XHJcbiAgfSxcclxuICBzdWJTdG9yZXM6IDxULCBTPih0YWJsZTogVGFibGU8VCwgUz4sIHJhd0RhdGE6IFRbXSk6IE1hcDxSb3dJZCwgU3ViVGFibGVTdG9yZTxTPj4gPT4ge1xyXG4gICAgY29uc3Qgc3ViU3RvcmVzOiBNYXA8Um93SWQsIFN1YlRhYmxlU3RvcmU8Uz4+ID0gbmV3IE1hcCgpO1xyXG4gICAgaWYodGFibGUuc3ViVGFibGU/Lm9wdGlvbnMgJiYgdGFibGUuc3ViRGF0YSkge1xyXG4gICAgICBjb25zdCBzdWJUYWJsZSA9IHRhYmxlLnN1YlRhYmxlO1xyXG4gICAgICBjb25zdCBzdWJEYXRhID0gdGFibGUuc3ViRGF0YTtcclxuXHJcbiAgICAgIHJhd0RhdGEuZm9yRWFjaChkID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gc3ViRGF0YShkKTtcclxuICAgICAgICBjb25zdCB0YWJsZUlkID0gdGFibGUub3B0aW9ucy5zZXRSb3dJZChkKTtcclxuICAgICAgICBjb25zdCBvcHRpb25zID0gc3ViVGFibGUub3B0aW9ucztcclxuICAgICAgICBjb25zdCBjb2x1bW5zID0gc3ViVGFibGUuY29sdW1ucztcclxuICAgICAgICBjb25zdCBtYXBwZWREYXRhOiBNYXA8Um93SWQsIFM+ID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGRhdGEuZm9yRWFjaCgoc3ViRGF0YTogUykgPT4gbWFwcGVkRGF0YS5zZXQob3B0aW9ucy5zZXRSb3dJZChzdWJEYXRhKSwgc3ViRGF0YSkpXHJcblxyXG4gICAgICAgIGNvbnN0IHN1YnN0b3JlID0ge1xyXG4gICAgICAgICAgYWN0aXZlQ29sdW1uOiBjb2x1bW5zLmZpbmQoYyA9PiBjLnNvcnRhYmxlKT8uY29sdW1uSWQgPz8gJycsXHJcbiAgICAgICAgICBjb2x1bW5zOiBjb2x1bW5zLFxyXG4gICAgICAgICAgZGF0YTogbWFwcGVkRGF0YSxcclxuICAgICAgICAgIHJvd3M6IHVwZGF0ZVJvd3NGbih0YWJsZUlkLCBkYXRhLCBjb2x1bW5zLCBvcHRpb25zKSxcclxuICAgICAgICAgIHRhYmxlSWQsXHJcbiAgICAgICAgICBvcHRpb25zOiB0YWJsZS5zdWJUYWJsZT8ub3B0aW9uc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKHN1YnN0b3JlLnJvd3MubGVuZ3RoKSAoc3ViU3RvcmVzIGFzIE1hcDxSb3dJZCwgU3ViVGFibGVTdG9yZTxTPj4pLnNldCh0YWJsZUlkLCBzdWJzdG9yZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gc3ViU3RvcmVzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN1YlN0b3JlcztcclxuICB9LFxyXG4gIHBhZ2VzOiA8VCwgUz4ob3B0aW9uczogVGFibGVPcHRpb25zPFQsIFM+LCBjb250cm9sOiBDb250cm9sT2JqZWN0LCBzdWJTdG9yZXM/OiBNYXA8Um93SWQsIFN1YlRhYmxlU3RvcmU8Uz4+IHwgdW5kZWZpbmVkKTogdm9pZCA9PiB7XHJcbiAgICBpZiAoIW9wdGlvbnM/LnBhZ2luYXRpb24pIHJldHVybjtcclxuICBcclxuICAgIGNvbnN0IGdldFRvcExldmVsVmlzaWJsZVJvd0lkcyA9IDxTPihzdWJTdG9yZXM6IE1hcDxSb3dJZCwgU3ViVGFibGVTdG9yZTxTPj4gfCB1bmRlZmluZWQpOiBSb3dJZFtdID0+IHtcclxuICAgICAgY29uc3Qgcm93czogUm93SWRbXSA9IFtdO1xyXG4gICAgICBpZihzdWJTdG9yZXM/LnNpemUpIHtcclxuICAgICAgICBjb25zdCBzdWJUYWJsZVJvd3MgPSBbLi4uc3ViU3RvcmVzLnZhbHVlcygpXS5tYXAodCA9PiB0LnJvd3MubWFwKHIgPT4gci5yb3dJZCkpLmZsYXQoKTtcclxuICAgICAgICByZXR1cm4gWy4uLmNvbnRyb2wuZmlsdGVyZWRSb3dzXS5maWx0ZXIociA9PiAhc3ViVGFibGVSb3dzLmluY2x1ZGVzKHIpKVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByb3dzXHJcbiAgICB9XHJcbiAgICBjb250cm9sLnBhZ2luYXRpb25QYWdlcz8uY2xlYXIoKTtcclxuICAgIGNvbnN0IHJvd0lkcyA9IGdldFRvcExldmVsVmlzaWJsZVJvd0lkcyhzdWJTdG9yZXMpO1xyXG4gICAgY29uc3Qgcm93c1BlclBhZ2UgPSBvcHRpb25zLnBhZ2luYXRpb24/LnJvd3NQZXJQYWdlID8/IDE7XHJcbiAgICBjb25zdCBudW1iZXJPZlBhZ2VzID0gTWF0aC5jZWlsKHJvd0lkcy5sZW5ndGggLyByb3dzUGVyUGFnZSk7XHJcbiAgICBsZXQgaW5kZXggPSBjb250cm9sLmFjdGl2ZVBhZ2VOdW1iZXIgPz8gMDtcclxuXHJcbiAgICBjb250cm9sLmFjdGl2ZVBhZ2VOdW1iZXIgPSBpbmRleCA+IChudW1iZXJPZlBhZ2VzIC0gMSkgPyAobnVtYmVyT2ZQYWdlcyAtIDEpIDogaW5kZXg7XHJcbiAgXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbnVtYmVyT2ZQYWdlczsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHBhZ2UgPSByb3dJZHMuc2xpY2UoaSAqIHJvd3NQZXJQYWdlLCAocm93c1BlclBhZ2UgKiAoaSArIDEpKSk7XHJcbiAgICAgIGNvbnRyb2wucGFnaW5hdGlvblBhZ2VzPy5zZXQoaSwgeyBpZDogYHBhZ2Uke2l9YCwgcGFnZTogcGFnZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwYWdlID0gY29udHJvbC5wYWdpbmF0aW9uUGFnZXM/LmdldChjb250cm9sPy5hY3RpdmVQYWdlTnVtYmVyKT8ucGFnZVxyXG4gICAgaWYgKHBhZ2UpIGNvbnRyb2wuYWN0aXZlUGFnZSA9IG5ldyBTZXQocGFnZSk7XHJcbiAgfSxcclxuICBnZXRTdWJSb3dzOiA8Uz4oc3ViU3RvcmVzPzogTWFwPHN0cmluZywgU3ViVGFibGVTdG9yZTxTPj4pID0+IHN1YlN0b3JlcyA/IFsuLi5zdWJTdG9yZXMudmFsdWVzKCldLm1hcChzID0+IHMucm93cykuZmxhdCgpIDogW10sXHJcbn1cclxuXHJcbi8vIFRhYmxlIHJvd3NcclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVJvd3NGbiA9IDxULCBTPih0YWJsZUlkOiBUYWJsZUlkLCBkYXRhOiBUW10sIGNvbHVtbnM6IENvbHVtbjxDb21tb25Qcm9wcywgVD5bXSwgb3B0aW9uczogVGFibGVPcHRpb25zPFQsIFM+KTogUm93W10gPT4ge1xyXG4gIGNvbnN0IHJvd3MgPSBkYXRhLm1hcChkID0+IHtcclxuICAgIGNvbnN0IHJvd0lkID0gb3B0aW9ucy5zZXRSb3dJZChkKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJvd0lkLFxyXG4gICAgICBjZWxsczogY29sdW1ucy5tYXAoKGMpID0+IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9ICBcclxuICAgICAgICAgIHR5cGVvZiBjPy5nZXRWYWx1ZSA9PT0gJ29iamVjdCdcclxuICAgICAgICAgICAgPyB7IFtjLmdldFZhbHVlLmtleV06IGMuZ2V0VmFsdWUudmFsdWUoZCkgfSBcclxuICAgICAgICAgICAgOiB7IHZhbHVlOiBjPy5nZXRWYWx1ZSA/IGMuZ2V0VmFsdWUoZCkgOiBbXSB9O1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB0YWJsZUlkOiB0YWJsZUlkLFxyXG4gICAgICAgICAgcm93SWQsXHJcbiAgICAgICAgICBjb2x1bW5JZDogYy5jb2x1bW5JZCxcclxuICAgICAgICAgIHR5cGU6IGMudHlwZSxcclxuICAgICAgICAgIC4uLnZhbHVlLFxyXG4gICAgICAgICAgLi4uKGM/LmdldFByb3BzPy4oZCkgPz8ge30pLFxyXG4gICAgICAgIH1cclxuICAgICAgfSksXHJcbiAgICB9O1xyXG59KTtcclxucmV0dXJuIHJvd3M7XHJcbn07XHJcbiIsImltcG9ydCB7IElucHV0U3RhdHVzIH0gZnJvbSBcIkAvdHlwZXMvZW51bXNcIjtcclxuaW1wb3J0IHsgSW5wdXRWYWxpZGF0aW9uIH0gZnJvbSBcIkAvdHlwZXMvaW5wdXRUeXBlc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJ1blZhbGlkYXRpb24gPSAodmFsaWRhdGlvbj86IElucHV0VmFsaWRhdGlvbik6IHsgc3RhdHVzOiBJbnB1dFN0YXR1cywgbXNnOiBzdHJpbmcgfSA9PiB7XHJcbiAgcmV0dXJuIHsgc3RhdHVzOiBJbnB1dFN0YXR1cy5PSywgbXNnOiAnJyB9XHJcbn1cclxuIiwiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cclxuaW1wb3J0IHsgSW5wdXRWYWxpZGF0aW9uIGFzIElucHV0VmFsaWRhdGlvblR5cGUgfSBmcm9tIFwiQC90eXBlcy9pbnB1dFR5cGVzXCI7XHJcbmltcG9ydCBJbnB1dEJhc2UgZnJvbSBcIkAvY29tcG9uZW50cy9pbnB1dHMvSW5wdXRCYXNlLnZ1ZVwiO1xyXG5pbXBvcnQgeyBJbnB1dFN0YXR1cywgSW5wdXRUeXBlIH0gZnJvbSBcIkAvdHlwZXMvZW51bXNcIjtcclxuaW1wb3J0IHsgY29tcHV0ZWQgfSBmcm9tIFwidnVlXCI7XHJcbmltcG9ydCB7IHVpZCB9IGZyb20gXCJAL3V0aWxzL2dlbmVyYWxVdGlsc1wiO1xyXG5pbXBvcnQgeyBydW5WYWxpZGF0aW9uIH0gZnJvbSBcIkAvc2VydmljZXMvSW5wdXRWYWxpZGF0aW9uU2VydmljZVwiO1xyXG5cclxuY29uc3QgcHJvcHMgPSB3aXRoRGVmYXVsdHMoXHJcbiAgZGVmaW5lUHJvcHM8e1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIG1vZGVsVmFsdWU/OiBzdHJpbmc7XHJcbiAgICBwbGFjZWhvbGRlcj86IHN0cmluZztcclxuICAgIHZhbGlkYXRpb24/OiBJbnB1dFZhbGlkYXRpb25UeXBlO1xyXG4gICAgdHlwZT86IElucHV0VHlwZTtcclxuICAgIGxhYmVsPzogc3RyaW5nO1xyXG4gICAgc3RhdHVzPzogSW5wdXRTdGF0dXM7XHJcbiAgICBpbmZvVGV4dD86IHN0cmluZztcclxuICB9PigpLFxyXG4gIHtcclxuICAgIG1vZGVsVmFsdWU6IFwiXCIsXHJcbiAgICBpZDogdWlkKCksXHJcbiAgfVxyXG4pO1xyXG5cclxuY29uc3QgZW1pdCA9IGRlZmluZUVtaXRzPHtcclxuICAoZXZlbnQ6IFwidXBkYXRlOm1vZGVsVmFsdWVcIiwgdmFsdWU6IHN0cmluZyk6IHZvaWQ7XHJcbn0+KCk7XHJcblxyXG5jb25zdCB2YWxpZGF0aW9uID0gY29tcHV0ZWQoKCkgPT4gcnVuVmFsaWRhdGlvbihwcm9wcy52YWxpZGF0aW9uKSk7XHJcbjwvc2NyaXB0PlxyXG5cclxuPHRlbXBsYXRlPlxyXG4gIDxJbnB1dEJhc2VcclxuICAgIHYtYmluZD1cIntcclxuICAgICAgdHlwZSxcclxuICAgICAgbGFiZWwsXHJcbiAgICAgIHN0YXR1czogdmFsaWRhdGlvbi5zdGF0dXMsXHJcbiAgICAgIGluZm9UZXh0OiB2YWxpZGF0aW9uLm1zZyxcclxuICAgIH1cIlxyXG4gID5cclxuICAgIDxpbnB1dFxyXG4gICAgICA6aWQ9XCJpZFwiXHJcbiAgICAgIDpwbGFjZWhvbGRlcj1cInBsYWNlaG9sZGVyXCJcclxuICAgICAgOnR5cGU9XCJ0eXBlXCJcclxuICAgICAgOnZhbHVlPVwibW9kZWxWYWx1ZVwiXHJcbiAgICAgIEBpbnB1dD1cIlxyXG4gICAgICAgIGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgKCRldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUpXHJcbiAgICAgIFwiXHJcbiAgICAvPlxyXG4gIDwvSW5wdXRCYXNlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxyXG5pbnB1dCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogdmFyKC0taW5wdXQtZmllbGQtY29sb3IpO1xyXG4gICZbdHlwZT1cInNlYXJjaFwiXTpmb2N1cy12aXNpYmxlIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG59XHJcbjwvc3R5bGU+XHJcbiIsImltcG9ydCB7IENvbHVtbiwgQ29udHJvbE9iamVjdCwgUm93LCBSb3dJZCwgU3ViVGFibGVTdG9yZSB9IGZyb20gXCJAL3R5cGVzL3RhYmxlVHlwZXNcIjtcclxuaW1wb3J0IHsgQ29tbW9uUHJvcHMgfSBmcm9tIFwiQC90eXBlcy9jZWxsVHlwZXNcIjtcclxuXHJcbmNvbnN0IHNlYXJjaEZuID0gPFQsIFAgZXh0ZW5kcyBDb21tb25Qcm9wcz4oZmlsdGVyOiBzdHJpbmcsIGNvbHVtbnM6IENvbHVtbjxQLCBUPltdLCByb3dzOiBSb3dbXSwgY29udHJvbDogQ29udHJvbE9iamVjdCk6IGJvb2xlYW4gPT4ge1xyXG4gIFxyXG4gIGNvbnN0IHNlYXJjaGFibGVDb2x1bW5zID0gY29sdW1ucy5tYXAoYyA9PiAhIWMuc2VhcmNoYWJsZSlcclxuICBsZXQgcm93c0FkZGVkID0gZmFsc2U7XHJcbiAgcm93c1xyXG4gICAgLmZpbHRlcigocm93OiBSb3cpID0+ICEhcm93LmNlbGxzLmZpbmQoKGMsaSkgPT4gKFxyXG4gICAgICBjLnZhbHVlICYmIHNlYXJjaGFibGVDb2x1bW5zW2ldIFxyXG4gICAgICAgID8gYy5mb3JtYXRcclxuICAgICAgICAgID8gYy5mb3JtYXQoYy52YWx1ZSlcclxuICAgICAgICAgIDogYy52YWx1ZVxyXG4gICAgICAgIDogJycgKS50b1N0cmluZygpLnRvTG9jYWxlVXBwZXJDYXNlKCkuaW5kZXhPZihmaWx0ZXIudG9Mb2NhbGVVcHBlckNhc2UoKSkgPiAtMSkpXHJcbiAgLmZvckVhY2gociA9PiB7XHJcbiAgICBjb250cm9sLmZpbHRlcmVkUm93cy5hZGQoci5yb3dJZCk7XHJcbiAgICByb3dzQWRkZWQgPSAhIXIucm93SWRcclxuICB9KTtcclxuICByZXR1cm4gcm93c0FkZGVkO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCA8VCwgUywgUCBleHRlbmRzIENvbW1vblByb3BzPihmaWx0ZXI6IHN0cmluZywgY29sdW1uczogQ29sdW1uPFAsIFQ+W10sIHJvd3M6IFJvd1tdLCBjb250cm9sOiBDb250cm9sT2JqZWN0LCBzdWJTdG9yZXM/OiAgTWFwPFJvd0lkLCBTdWJUYWJsZVN0b3JlPFM+Pik6IHZvaWQgPT4ge1xyXG4gIGNvbnRyb2wuZmlsdGVyZWRSb3dzLmNsZWFyKCk7XHJcbiAgc2VhcmNoRm4oZmlsdGVyLCBjb2x1bW5zLCByb3dzLCBjb250cm9sKVxyXG4gIHN1YlN0b3Jlcz8uZm9yRWFjaCgocywgcikgPT4ge1xyXG4gICAgICBzZWFyY2hGbihmaWx0ZXIsIGNvbHVtbnMsIHJvd3MsIGNvbnRyb2wpXHJcbiAgICAgIGlmIChjb250cm9sLmZpbHRlcmVkUm93cy5oYXMocy50YWJsZUlkKSkge1xyXG4gICAgICAgIHMucm93cy5mb3JFYWNoKHNyID0+IHtcclxuICAgICAgICAgIGNvbnRyb2wuZmlsdGVyZWRSb3dzLmFkZChzci5yb3dJZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICB9KTtcclxufTtcclxuIiwiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIiBnZW5lcmljPVwiVCwgU1wiPlxyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAL2NvbXBvbmVudHMvaW5wdXRzL1RleHRGaWVsZC52dWVcIjtcclxuaW1wb3J0IHsgVGV4dEZpZWxkUHJvcHMgfSBmcm9tIFwiQC90eXBlcy9pbnB1dFR5cGVzXCI7XHJcbmltcG9ydCB7IEluamVjdG9yLCBJbnB1dFR5cGUgfSBmcm9tIFwiQC90eXBlcy9lbnVtc1wiO1xyXG5pbXBvcnQgeyBpbmplY3QsIHJlZiB9IGZyb20gXCJ2dWVcIjtcclxuaW1wb3J0IHNlYXJjaEZuIGZyb20gXCJAL2ZpbHRlclV0aWxzL3NlYXJjaEZpbHRlclwiO1xyXG5pbXBvcnQgeyBJbmplY3RTZXJ2aWNlIH0gZnJvbSBcIkAvdHlwZXMvaW5qZWN0VHlwZXNcIjtcclxuXHJcbmNvbnN0IHsgY29sdW1ucywgcm93cywgb3B0aW9ucywgY29udHJvbCwgc3ViU3RvcmVzLCB1cGRhdGVQYWdlcyB9ID0gaW5qZWN0KEluamVjdG9yLlRBQkxFU0VSVklDRSkgYXMgSW5qZWN0U2VydmljZTxULCBTPjtcclxuXHJcbmNvbnN0IHNlYXJjaCA9IG9wdGlvbnMuc2VhcmNoRmlsdGVyXHJcbiAgPyB0eXBlb2Ygb3B0aW9ucy5zZWFyY2hGaWx0ZXIgPT09IFwiZnVuY3Rpb25cIlxyXG4gICAgPyBvcHRpb25zLnNlYXJjaEZpbHRlclxyXG4gICAgOiBzZWFyY2hGblxyXG4gIDogZmFsc2U7XHJcbmNvbnN0IHNlYXJjaFZhbHVlID0gcmVmKCcnKTtcclxuY29uc3Qgc2VhcmNoZmllbGQ6IFRleHRGaWVsZFByb3BzID0ge1xyXG4gIHR5cGU6IElucHV0VHlwZS5TRUFSQ0gsXHJcbiAgbGFiZWw6IFwiU2VhcmNoXCIsXHJcbiAgcGxhY2Vob2xkZXI6IFwiU2VhcmNoLi4uXCIsXHJcbn07XHJcblxyXG5jb25zdCBzZWFyY2hVcGRhdGUgPSAoZmlsdGVyOiBzdHJpbmcpID0+IHtcclxuICBpZiAoc2VhcmNoKSB7XHJcbiAgICBzZWFyY2goZmlsdGVyLCBbLi4uY29sdW1uc10sIHJvd3MudmFsdWUsIGNvbnRyb2wsIHN1YlN0b3Jlcz8udmFsdWUpO1xyXG4gICAgdXBkYXRlUGFnZXMoKTtcclxuICB9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHRlbXBsYXRlPlxyXG4gIDxUZXh0RmllbGRcclxuICAgIHYtaWY9XCJzZWFyY2hcIlxyXG4gICAgaWQ9XCJ0YWJsZS1zZWFyY2hcIlxyXG4gICAgdi1iaW5kPVwic2VhcmNoZmllbGRcIlxyXG4gICAgdi1tb2RlbD1cInNlYXJjaFZhbHVlXCJcclxuICAgIEB1cGRhdGU6bW9kZWxWYWx1ZT1cInNlYXJjaFVwZGF0ZSgkZXZlbnQpXCJcclxuICAvPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPjwvc3R5bGU+XHJcblxyXG4iLCJcclxuaW1wb3J0IHsgVGFibGVTZXJ2aWNlLCBDb2x1bW5JZCwgUm93SWQsIENvbHVtbiwgUm93LCBDb250cm9sT2JqZWN0LCBTdWJUYWJsZVN0b3JlLCBDZWxsSWQsIFRhYmxlT3B0aW9ucywgU3ViVGFibGVPcHRpb25zIH0gZnJvbSAnQC90eXBlcy90YWJsZVR5cGVzJztcclxuaW1wb3J0IHsgQ29tcHV0ZWRSZWYgfSBmcm9tICd2dWUnO1xyXG5pbXBvcnQgeyBDZWxsLCBDb21tb25Qcm9wcyB9IGZyb20gJ0AvdHlwZXMvY2VsbFR5cGVzJztcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VUYWJsZVNlcnZpY2UgPSA8VCwgUz4oXHJcbiAgZGF0YTogQ29tcHV0ZWRSZWY8TWFwPHN0cmluZywgVD4+LFxyXG4gIHJhd0RhdGE6IFRbXSxcclxuICBvcHRpb25zOiBUYWJsZU9wdGlvbnM8VCwgUz4sXHJcbiAgY29sdW1uczogQ29sdW1uPENvbW1vblByb3BzLCBUPltdLFxyXG4gIHJvd3M6IENvbXB1dGVkUmVmPFJvd1tdPixcclxuICBjb250cm9sOiBDb250cm9sT2JqZWN0LFxyXG4gIHN1Yk9wdGlvbnM/OiBTdWJUYWJsZU9wdGlvbnM8Uz4sXHJcbiAgc3ViQ29sdW1ucz86IENvbHVtbjxDb21tb25Qcm9wcywgUz5bXSxcclxuICBzdWJTdG9yZXM/OiBDb21wdXRlZFJlZjxNYXA8Um93SWQsIFN1YlRhYmxlU3RvcmU8Uz4+PixcclxuKTogVGFibGVTZXJ2aWNlPFQsIFM+ID0+IHtcclxuXHJcbiAgY29uc3QgY3JlYXRlQ2VsbElkID0gKGNvbHVtbklkOiBDb2x1bW5JZCwgcm93SWQ6IFJvd0lkKTogQ2VsbElkID0+IGAke2NvbHVtbklkfUAke3Jvd0lkfWA7XHJcbiAgY29uc3QgZGl2aWRlQ2VsbElkID0gKGNlbGxJZDogQ2VsbElkKTogeyBjb2x1bW5JZDogQ29sdW1uSWQsIHJvd0lkOiBSb3dJZCB9ID0+IHtcclxuICAgIGNvbnN0IHNwbGl0ID0gY2VsbElkLnNwbGl0KCdAJyk7XHJcbiAgICByZXR1cm4geyBjb2x1bW5JZDogc3BsaXRbMF0sIHJvd0lkOiBzcGxpdFsxXSB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRSb3cgPSAocm93SWQ6IFJvd0lkKTogUm93ID0+IHtcclxuICAgIGNvbnN0IHJvdyA9IHJvd3MudmFsdWUuZmluZChyb3cgPT4gcm93LnJvd0lkID09PSByb3dJZCk7XHJcbiAgICBjb2x1bW5zXHJcbiAgICBpZiAocm93KSByZXR1cm4gcm93O1xyXG4gICAgZWxzZSByZXR1cm4gWy4uLnN1YlN0b3JlcyEudmFsdWUudmFsdWVzKCldLmZpbmQocyA9PiBzLnJvd3MuZmluZChyID0+IHIucm93SWQgPT09IHJvd0lkKSkgYXMgdW5rbm93biBhcyBSb3dcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldENvbHVtbiA9IChjb2x1bW5JZDogQ29sdW1uSWQpID0+IGNvbHVtbnMuZmluZChjID0+IGMuY29sdW1uSWQgPT09IGNvbHVtbklkKSE7XHJcblxyXG4gIGNvbnN0IGdldENlbGwgPSA8QyBleHRlbmRzIENvbHVtbjxDb21tb25Qcm9wcywgVD4+KHJvd0lkOiBSb3dJZCwgY29sdW1uSWQ6IENbJ2NvbHVtbklkJ10pOiBDZWxsPENbJ3R5cGUnXT4gPT4gZ2V0Um93KHJvd0lkKS5jZWxscy5maW5kKGMgPT4gYy5jb2x1bW5JZCA9PT0gY29sdW1uSWQpIVxyXG5cclxuICBjb25zdCBnZXRDb2x1bW5JbmRleCA9IChjb2x1bW5JZDogQ29sdW1uSWQpID0+IGNvbHVtbnMubWFwKGNvbCA9PiBjb2wuY29sdW1uSWQpLmluZGV4T2YoY29sdW1uSWQpO1xyXG5cclxuICBjb25zdCBnZXRSb3dJbmRleCA9IChyb3dJZDogUm93SWQpID0+IHJvd3MudmFsdWUubWFwKHJvdyA9PiByb3cucm93SWQpLmluZGV4T2Yocm93SWQpO1xyXG5cclxuICBjb25zdCBnZXRBY3RpdmVDb2x1bW4gPSAoKSA9PiBjb250cm9sLmFjdGl2ZUNvbHVtbiA/PyAnJztcclxuXHJcbiAgY29uc3QgY2hlY2tSb3cgPSAocm93SWQ6IFJvd0lkKSA9PiBcclxuICAgIGNvbnRyb2wucm93c1NlbGVjdGVkPy5oYXMocm93SWQpID8gY29udHJvbC5yb3dzU2VsZWN0ZWQuZGVsZXRlKHJvd0lkKSA6IGNvbnRyb2wucm93c1NlbGVjdGVkPy5hZGQocm93SWQpO1xyXG5cclxuICBjb25zdCB0b2dnbGVGb2xkID0gKHJvd0lkOiBSb3dJZCkgPT4ge1xyXG4gICAgY29udHJvbC5zdWJUYWJsZXNWaXNpYmxlPy5oYXMocm93SWQpID8gY29udHJvbC5zdWJUYWJsZXNWaXNpYmxlLmRlbGV0ZShyb3dJZCkgOiBjb250cm9sLnN1YlRhYmxlc1Zpc2libGU/LmFkZChyb3dJZCk7XHJcbiAgfVxyXG4gIGNvbnN0IHN1YlRhYmxlSXNPcGVuID0gKHJvd0lkOiBSb3dJZCkgPT4gY29udHJvbC5zdWJUYWJsZXNWaXNpYmxlPy5oYXMocm93SWQpO1xyXG4gIGNvbnN0IGhhc1N1YlJvd3MgPSAocm93SWQ6IFJvd0lkKSA9PiAhIXN1YlN0b3Jlcz8udmFsdWUuaGFzKHJvd0lkKTtcclxuICBjb25zdCBnZXRTdWJSb3dzID0gKHN1YlN0b3JlczogTWFwPHN0cmluZywgU3ViVGFibGVTdG9yZTxTPj4pID0+IFsuLi5zdWJTdG9yZXMudmFsdWVzKCldLm1hcChzID0+IHMucm93cykuZmxhdCgpXHJcbiAgY29uc3QgZ2V0VG9wTGV2ZWxWaXNpYmxlUm93SWRzID0gKCkgPT4ge1xyXG4gICAgaWYoc3ViU3RvcmVzPy52YWx1ZS5zaXplKSB7XHJcbiAgICAgIGNvbnN0IHN1YlRhYmxlUm93cyA9IGdldFN1YlJvd3Moc3ViU3RvcmVzLnZhbHVlKS5tYXAociA9PiByLnJvd0lkKTtcclxuICAgICAgcmV0dXJuIG5ldyBTZXQoY29udHJvbC5zb3J0ZWRSb3dzLmZpbHRlcihyID0+IGNvbnRyb2wuZmlsdGVyZWRSb3dzLmhhcyhyKSAmJiAhc3ViVGFibGVSb3dzLmluY2x1ZGVzKHIpKSlcclxuICAgIH0gZWxzZSByZXR1cm4gbmV3IFNldChjb250cm9sLnNvcnRlZFJvd3MuZmlsdGVyKHIgPT4gY29udHJvbC5maWx0ZXJlZFJvd3MuaGFzKHIpKSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB1cGRhdGVQYWdlcyA9ICgpOiB2b2lkID0+IHtcclxuICAgIGlmICghb3B0aW9ucz8ucGFnaW5hdGlvbikgcmV0dXJuO1xyXG5cclxuICAgIGNvbnRyb2wucGFnaW5hdGlvblBhZ2VzPy5jbGVhcigpO1xyXG4gICAgY29uc3Qgcm93SWRzID0gWy4uLmdldFRvcExldmVsVmlzaWJsZVJvd0lkcygpXTtcclxuICAgIGNvbnN0IHJvd3NQZXJQYWdlID0gb3B0aW9ucy5wYWdpbmF0aW9uPy5yb3dzUGVyUGFnZSA/PyAxO1xyXG4gICAgY29uc3QgbnVtYmVyT2ZQYWdlcyA9IE1hdGguY2VpbChyb3dJZHMubGVuZ3RoIC8gcm93c1BlclBhZ2UpO1xyXG4gICAgbGV0IGluZGV4ID0gY29udHJvbC5hY3RpdmVQYWdlTnVtYmVyID8/IDA7XHJcblxyXG4gICAgY29udHJvbC5hY3RpdmVQYWdlTnVtYmVyID0gaW5kZXggPiAobnVtYmVyT2ZQYWdlcyAtIDEpID8gKG51bWJlck9mUGFnZXMgLSAxKSA6IGluZGV4O1xyXG4gIFxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IG51bWJlck9mUGFnZXM7IGkrKykge1xyXG4gICAgICBjb25zdCBwYWdlID0gcm93SWRzLnNsaWNlKGkgKiByb3dzUGVyUGFnZSwgKHJvd3NQZXJQYWdlICogKGkgKyAxKSkpO1xyXG4gICAgICBjb250cm9sLnBhZ2luYXRpb25QYWdlcz8uc2V0KGksIHsgaWQ6IGBwYWdlJHtpfWAsIHBhZ2U6IHBhZ2UgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcGFnZSA9IGNvbnRyb2wucGFnaW5hdGlvblBhZ2VzPy5nZXQoY29udHJvbD8uYWN0aXZlUGFnZU51bWJlcik/LnBhZ2VcclxuICAgIGlmIChwYWdlKSBjb250cm9sLmFjdGl2ZVBhZ2UgPSBuZXcgU2V0KHBhZ2UpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBkYXRhLFxyXG4gICAgcmF3RGF0YSxcclxuICAgIG9wdGlvbnMsXHJcbiAgICBzdWJPcHRpb25zLFxyXG4gICAgY29sdW1ucyxcclxuICAgIHJvd3MsXHJcbiAgICBzdWJDb2x1bW5zLFxyXG4gICAgc3ViU3RvcmVzLFxyXG4gICAgY29udHJvbCxcclxuICAgIGNyZWF0ZUNlbGxJZCxcclxuICAgIGRpdmlkZUNlbGxJZCxcclxuICAgIGNoZWNrUm93LFxyXG4gICAgZ2V0QWN0aXZlQ29sdW1uLFxyXG4gICAgZ2V0Q2VsbCxcclxuICAgIGdldENvbHVtbixcclxuICAgIGdldENvbHVtbkluZGV4LFxyXG4gICAgZ2V0Um93LFxyXG4gICAgZ2V0Um93SW5kZXgsXHJcbiAgICBnZXRTdWJSb3dzLFxyXG4gICAgZ2V0VG9wTGV2ZWxWaXNpYmxlUm93SWRzLFxyXG4gICAgaGFzU3ViUm93cyxcclxuICAgIHN1YlRhYmxlSXNPcGVuLFxyXG4gICAgdG9nZ2xlRm9sZCxcclxuICAgIHVwZGF0ZVBhZ2VzLFxyXG4gIH1cclxufVxyXG4iLCI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiIGdlbmVyaWM9XCJULCBTXCI+XHJcbmltcG9ydCBUYWJsZUNvbXBvbmVudCBmcm9tICdAL2NvbXBvbmVudHMvdGFibGUvVGFibGUudnVlJztcclxuaW1wb3J0IHsgQ2VsbElkLCBDb2x1bW5JZCwgQ29udHJvbE9iamVjdCwgUm93LCBSb3dJZCwgU3ViVGFibGVTdG9yZSwgVGFibGUsIFRhYmxlU2VydmljZSB9IGZyb20gJ0AvdHlwZXMvdGFibGVUeXBlcyc7XHJcbmltcG9ydCB7IEluamVjdG9yLCBTb3J0aW5nRGlyZWN0aW9uIH0gZnJvbSAnQC90eXBlcy9lbnVtcyc7XHJcbmltcG9ydCB7IHVwZGF0ZSB9IGZyb20gJ0AvdXRpbHMvYnVpbGRVdGlscyc7XHJcbmltcG9ydCB7IENvbXB1dGVkUmVmLCBjb21wdXRlZCwgcHJvdmlkZSwgcmVhY3RpdmUsIHJlZiwgd2F0Y2ggfSBmcm9tICd2dWUnO1xyXG5pbXBvcnQgRmlsdGVyUm93IGZyb20gXCJAL2NvbXBvbmVudHMvdGFibGUvRmlsdGVyUm93LnZ1ZVwiO1xyXG5pbXBvcnQgeyB1c2VUYWJsZVNlcnZpY2UgfSBmcm9tICdAL3NlcnZpY2VzL3RhYmxlU2VydmljZSc7XHJcbmltcG9ydCB7IGluaXRpYWxTb3J0IH0gZnJvbSAnQC9maWx0ZXJVdGlscy9zb3J0Um93cyc7XHJcblxyXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcclxuICB0YWJsZTogVGFibGU8VCwgUz47XHJcbiAgZGF0YTogVFtdIHwgdW5kZWZpbmVkO1xyXG59PigpO1xyXG5cclxuY29uc3QgZW1pdCA9IGRlZmluZUVtaXRzPHtcclxuICAoZTogJ3VwZGF0ZTphbGxTZWxlY3RlZCcsIHJvd0lkOiBSb3dJZFtdKTogdm9pZDtcclxuICAoZTogJ3VwZGF0ZTpzZWxlY3RlZCcsIHJvd0lkOiBSb3dJZCk6IHZvaWQ7XHJcbiAgKGU6ICd1cGRhdGU6Y2VsbFZhbHVlJywgcmV0dXJuVmFsdWU6IHsgY2VsbElkOiBDZWxsSWQsIHZhbHVlOiBhbnkgfSk6IHZvaWRcclxuICAoZTogJ3RhYmxlU2VydmljZScsIHNlcnZpY2U6IFRhYmxlU2VydmljZTxULCBTPik6IHZvaWQ7XHJcbn0+KCk7XHJcblxyXG5jb25zdCByZWFkeSA9IHJlZihmYWxzZSk7XHJcblxyXG5jb25zdCByb3dzID0gY29tcHV0ZWQ8Um93W10+KCgpID0+ICBwcm9wcy5kYXRhID8gdXBkYXRlLnJvd3MocHJvcHMudGFibGUudGFibGVJZCwgcHJvcHMuZGF0YSwgcHJvcHMudGFibGUuY29sdW1ucywgcHJvcHMudGFibGUub3B0aW9ucykgOiBbXSlcclxuXHJcbmNvbnN0IGRhdGE6IENvbXB1dGVkUmVmPE1hcDxSb3dJZCwgVD4+ID0gY29tcHV0ZWQoKCkgPT4ge1xyXG4gIGNvbnN0IGRhdGFzZXQgPSBuZXcgTWFwKCk7XHJcbiAgcHJvcHMuZGF0YT8uZm9yRWFjaCgoZCkgPT4gZGF0YXNldC5zZXQocHJvcHMudGFibGUub3B0aW9ucy5zZXRSb3dJZChkKSwgZCkpXHJcbiAgcmV0dXJuIGRhdGFzZXQgYXMgTWFwPFJvd0lkLCBUPjtcclxufSk7XHJcblxyXG5jb25zdCBzdWJTdG9yZXMgPSBjb21wdXRlZCgoKSA9PiBwcm9wcy5kYXRhID8gdXBkYXRlLnN1YlN0b3Jlcyhwcm9wcy50YWJsZSwgcHJvcHMuZGF0YSkgOiAobmV3IE1hcCgpIGFzIE1hcDxSb3dJZCwgU3ViVGFibGVTdG9yZTxTPj4pKTtcclxuXHJcbmNvbnN0IGNvbnRyb2w6IENvbnRyb2xPYmplY3QgPSByZWFjdGl2ZSh7XHJcbiAgdGFibGVJZDogcHJvcHMudGFibGUudGFibGVJZCxcclxuICBhY3RpdmVDb2x1bW46IHJlZjxDb2x1bW5JZD4ocHJvcHMudGFibGUub3B0aW9ucz8uaW5pdGlhbFNvcnRpbmc/LmNvbHVtbiA/PyBwcm9wcy50YWJsZS5jb2x1bW5zLmZpbmQoYyA9PiBjLnNvcnRhYmxlKT8uY29sdW1uSWQgPz8gJycpLFxyXG4gIGFjdGl2ZVBhZ2VOdW1iZXI6IHJlZigwKSxcclxuICBhY3RpdmVQYWdlOiByZWY8U2V0PFJvd0lkPj4obmV3IFNldCgpKSxcclxuICBmaWx0ZXJlZFJvd3M6IHJlZjxTZXQ8Um93SWQ+PihuZXcgU2V0KCkpLFxyXG4gIHNvcnRlZFJvd3M6IHJlZjxSb3dJZFtdPihbXSksXHJcbiAgcm93c1NlbGVjdGVkOiByZWY8U2V0PFJvd0lkPj4obmV3IFNldCgpKSxcclxuICBzdWJUYWJsZXNWaXNpYmxlOiByZWY8U2V0PFJvd0lkPj4obmV3IFNldCgpKSxcclxuICBwYWdpbmF0aW9uUGFnZXM6IHJlZjxNYXA8bnVtYmVyLCB7IGlkOiBzdHJpbmcsIHBhZ2U6IFJvd0lkW10gfT4+KG5ldyBNYXAoKSksXHJcbiAgc29ydGluZ0RpcmVjdGlvbjogcHJvcHMudGFibGUub3B0aW9ucy5pbml0aWFsU29ydGluZz8uZGlyZWN0aW9uID8/IFNvcnRpbmdEaXJlY3Rpb24uREVTQ0VORCxcclxufSk7XHJcblxyXG5jb25zdCB0YWJsZVNlcnZpY2UgPSB1c2VUYWJsZVNlcnZpY2UoZGF0YSwgcHJvcHMuZGF0YSBhcyBUW10sIHByb3BzLnRhYmxlLm9wdGlvbnMsIHByb3BzLnRhYmxlLmNvbHVtbnMsIHJvd3MsIGNvbnRyb2wsIHByb3BzLnRhYmxlLnN1YlRhYmxlPy5vcHRpb25zLCBwcm9wcy50YWJsZS5zdWJUYWJsZT8uY29sdW1ucywgc3ViU3RvcmVzKTtcclxuXHJcbmVtaXQoJ3RhYmxlU2VydmljZScsIHRhYmxlU2VydmljZSk7XHJcblxyXG53YXRjaCgoKSA9PiBwcm9wcy5kYXRhLCAoZCwgb2QpID0+IHtcclxuICBpZiAoZCkge1xyXG4gICAgWy4uLnJvd3MudmFsdWUubWFwKHIgPT4gci5yb3dJZCksIC4uLihzdWJTdG9yZXMudmFsdWUgPyB1cGRhdGUuZ2V0U3ViUm93cyhzdWJTdG9yZXMudmFsdWUpLm1hcChyID0+IHIucm93SWQpIDogW10pXS5mb3JFYWNoKHMgPT4gY29udHJvbC5maWx0ZXJlZFJvd3MuYWRkKHMpKVxyXG4gICAgY29udHJvbC5zb3J0ZWRSb3dzID0gaW5pdGlhbFNvcnQocm93cy52YWx1ZSwgcHJvcHMudGFibGUuY29sdW1ucywgcHJvcHMudGFibGUub3B0aW9ucywgdXBkYXRlLmdldFN1YlJvd3Moc3ViU3RvcmVzLnZhbHVlKSwgIHByb3BzLnRhYmxlLnN1YlRhYmxlPy5jb2x1bW5zLCAgcHJvcHMudGFibGUuc3ViVGFibGU/Lm9wdGlvbnMpO1xyXG4gICAgaWYodGFibGVTZXJ2aWNlKSB0YWJsZVNlcnZpY2UudXBkYXRlUGFnZXMoKTtcclxuICAgIHJlYWR5LnZhbHVlID0gdHJ1ZTtcclxuICB9XHJcbn0sIHtcclxuICBpbW1lZGlhdGU6IHRydWUsXHJcbiAgZGVlcDogdHJ1ZVxyXG59KTtcclxuXHJcbnByb3ZpZGUoSW5qZWN0b3IuUkFXREFUQSwgeyByYXdEYXRhOiBwcm9wcy5kYXRhIH0pO1xyXG5wcm92aWRlKEluamVjdG9yLkRBVEEsIHsgZGF0YSB9KTtcclxucHJvdmlkZShJbmplY3Rvci5PUFRJT05TLCB7IG9wdGlvbnM6IHByb3BzLnRhYmxlLm9wdGlvbnMsIHN1Yk9wdGlvbjogcHJvcHMudGFibGUuc3ViVGFibGU/Lm9wdGlvbnMgfSk7XHJcbnByb3ZpZGUoSW5qZWN0b3IuUk9XUywgeyByb3dzIH0pO1xyXG5wcm92aWRlKEluamVjdG9yLlNVQlNUT1JFUywgeyBzdWJTdG9yZXMgfSk7XHJcbnByb3ZpZGUoSW5qZWN0b3IuQ09MVU1OUywgeyBjb2x1bW5zOiBwcm9wcy50YWJsZS5jb2x1bW5zLCBzdWJDb2x1bW5zOiBwcm9wcy50YWJsZS5zdWJUYWJsZT8uY29sdW1ucyB9KTtcclxucHJvdmlkZShJbmplY3Rvci5DT05UUk9MLCB7IGNvbnRyb2wgfSk7XHJcbnByb3ZpZGUoSW5qZWN0b3IuUkVBRFksIHsgcmVhZHkgfSk7XHJcbnByb3ZpZGUoSW5qZWN0b3IuVEFCTEVTRVJWSUNFLCB0YWJsZVNlcnZpY2UpO1xyXG5cclxuPC9zY3JpcHQ+XHJcblxyXG48dGVtcGxhdGU+XHJcbiAgPGRpdlxyXG4gICAgdi1pZj1cInJlYWR5XCJcclxuICAgIDppZD1cInByb3BzLnRhYmxlLnRhYmxlSWRcIlxyXG4gICAgY2xhc3M9XCJlei1lelwiXHJcbiAgPlxyXG4gICAgPHNsb3QgbmFtZT1cImZpbHRlcnNcIj5cclxuICAgICAgPEZpbHRlclJvdyAvPlxyXG4gICAgPC9zbG90PlxyXG4gICAgPHRhYmxlLWNvbXBvbmVudFxyXG4gICAgICBAdXBkYXRlOmNlbGwtdmFsdWU9XCIodikgPT4gZW1pdCgndXBkYXRlOmNlbGxWYWx1ZScsIHYpXCJcclxuICAgICAgQHVwZGF0ZTphbGwtc2VsZWN0ZWQ9XCIodikgPT4gZW1pdCgndXBkYXRlOmFsbFNlbGVjdGVkJywgdilcIiBcclxuICAgICAgQHVwZGF0ZTpzZWxlY3RlZD1cIih2KSA9PiBlbWl0KCd1cGRhdGU6c2VsZWN0ZWQnLCB2KVwiXHJcbiAgICAvPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XHJcblxyXG4uZXotZXoge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDFyZW07XHJcblxyXG4gICoge1xyXG4gICAgZm9udC1zeW50aGVzaXM6IG5vbmU7XHJcbiAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5sZWZ0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgfVxyXG4gIC5jZW50ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5yaWdodCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgfVxyXG5cclxuICBbY29udGVudEVkaXRhYmxlXSxcclxuICAub3ZlcmxheS10ZXh0ZmllbGQsXHJcbiAgYnV0dG9uLFxyXG4gIC5lei10ZCB7XHJcbiAgICAvLyAmOmFjdGl2ZSxcclxuICAgIC8vICY6Zm9jdXMsXHJcbiAgICAvLyAmOmZvY3VzLXdpdGhpbixcclxuICAgIC8vICY6dGFyZ2V0LFxyXG4gICAgJjpmb2N1cy13aXRoaW4geyBvdXRsaW5lOiB2YXIoLS1mb2N1cy1jb2xvcikgYXV0byAxcHg7IH1cclxuICAgICY6Zm9jdXMtdmlzaWJsZSB7IG91dGxpbmU6IHZhcigtLWZvY3VzLXZpc2libGUtY29sb3IpIGF1dG8gMXB4OyB9XHJcbiAgfVxyXG59XHJcbjwvc3R5bGU+Q29sdW1uSWQsICwgU29ydGluZ0RpcmVjdGlvbiwgcmVmXHJcbiIsIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XHJcbmltcG9ydCB7IENoaXBQcm9wcyB9IGZyb20gXCJAL3R5cGVzL2NlbGxUeXBlc1wiO1xyXG5pbXBvcnQgeyBoZXhUb1JnYiwgbHVtZW4gfSBmcm9tIFwiQC91dGlscy9nZW5lcmFsVXRpbHNcIjtcclxuXHJcbmNvbnN0IHByb3BzID0gd2l0aERlZmF1bHRzKFxyXG4gIGRlZmluZVByb3BzPENoaXBQcm9wcz4oKSxcclxuICB7XHJcbiAgICBzdGF0dXNDb2xvcjogXCJoc2woMzI1LCA1MCUsIDkwJSlcIixcclxuICB9LFxyXG4pO1xyXG5jb25zdCB7IHIgLCBnLCBiIH0gPSBoZXhUb1JnYihwcm9wcy5zdGF0dXNDb2xvcik7XHJcbmNvbnN0IHRleHRDb2xvciA9ICBsdW1lbihyLCBnLCBiKSA8IC41ID8gJ3doaXRlJyA6ICdibGFjayc7XHJcbjwvc2NyaXB0PlxyXG5cclxuPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJjaGlwXCI+XHJcbiAgICA8c3BhblxyXG4gICAgICBjbGFzcz1cImNoaXAtdGV4dFwiXHJcbiAgICAgIDpzdHlsZT1cIntjb2xvcjogdGV4dENvbG9yIH1cIlxyXG4gICAgPnt7IHZhbHVlIH19PC9zcGFuPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxyXG4uY2hpcCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDJweCAxNnB4IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1wLTQwMCk7XHJcbiAgY29sb3I6IHYtYmluZChzdGF0dXNDb2xvcik7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgQGlmIHZhcmlhYmxlLWV4aXN0cyhtb2JpbGUtbWF4LXdpZHRoKSB7XHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtb2JpbGUtbWF4LXdpZHRoKSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgIHBhZGRpbmc6IDAgOHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuPC9zdHlsZT5cclxuIiwiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cclxuaW1wb3J0IHsgY29tcHV0ZWQgfSBmcm9tIFwidnVlXCI7XHJcbmltcG9ydCB7IFRleHRQcm9wcyB9IGZyb20gXCJAL3R5cGVzL2NlbGxUeXBlc1wiO1xyXG5cclxuY29uc3QgcHJvcHMgPSB3aXRoRGVmYXVsdHMoZGVmaW5lUHJvcHM8VGV4dFByb3BzPigpLCB7XHJcbiAgdHlwZTogJ3RleHQnLFxyXG4gIGZvcm1hdDogKHY6IGFueSkgPT4gdlxyXG59KTtcclxuXHJcbmNvbnN0IGZvcm1hdGVkVmFsdWUgPSBjb21wdXRlZCgoKSA9PiBwcm9wcy5mb3JtYXQocHJvcHMudmFsdWUpKTtcclxuXHJcbjwvc2NyaXB0PlxyXG5cclxuPHRlbXBsYXRlPlxyXG4gIDxzcGFuIGNsYXNzPVwidGV4dFwiPnt7IGZvcm1hdGVkVmFsdWUgfX08L3NwYW4+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XHJcbi50ZXh0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBsaW5lLWhlaWdodDogMS4zNzU7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICYuZWRpdGFibGUge1xyXG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLXRkLWhlaWdodCk7XHJcbiAgICBwYWRkaW5nOiAwIHZhcigtLWNlbGwtcGFkZGluZy1ob3Jpem9udGFsKTtcclxuICAgIG1hcmdpbjogMCBjYWxjKHZhcigtLWNlbGwtcGFkZGluZy1ob3Jpem9udGFsKSAqIC0xKTtcclxuICB9XHJcbn1cclxuLmNlbGwtYnRuIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIGFsbDogdW5zZXQ7XHJcbiAgdG91Y2gtYWN0aW9uOiBhdXRvO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbjwvc3R5bGU+XHJcbiIsIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XHJcbmltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSBcInZ1ZVwiO1xyXG5pbXBvcnQgeyBOdW1iZXJQcm9wcyB9IGZyb20gXCJAL3R5cGVzL2NlbGxUeXBlc1wiO1xyXG5cclxuY29uc3QgcHJvcHMgPSB3aXRoRGVmYXVsdHMoZGVmaW5lUHJvcHM8TnVtYmVyUHJvcHM+KCksIHtcclxuICB0eXBlOiAnbnVtYmVyJyxcclxuICBmb3JtYXQ6ICh2OiBhbnkpID0+IHZcclxufSk7XHJcblxyXG5jb25zdCBmb3JtYXRlZFZhbHVlID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMuZm9ybWF0KHByb3BzLnZhbHVlKSk7XHJcblxyXG48L3NjcmlwdD5cclxuXHJcbjx0ZW1wbGF0ZT5cclxuICA8c3BhbiBjbGFzcz1cInRleHRcIj57eyBmb3JtYXRlZFZhbHVlIH19PC9zcGFuPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxyXG4udGV4dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMzc1O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAmLmVkaXRhYmxlIHtcclxuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS10ZC1oZWlnaHQpO1xyXG4gICAgcGFkZGluZzogMCB2YXIoLS1jZWxsLXBhZGRpbmctaG9yaXpvbnRhbCk7XHJcbiAgICBtYXJnaW46IDAgY2FsYyh2YXIoLS1jZWxsLXBhZGRpbmctaG9yaXpvbnRhbCkgKiAtMSk7XHJcbiAgfVxyXG59XHJcbi5jZWxsLWJ0biB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBhbGw6IHVuc2V0O1xyXG4gIHRvdWNoLWFjdGlvbjogYXV0bztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG48L3N0eWxlPlxyXG4iLCI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxyXG5pbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gXCJ2dWVcIjtcclxuaW1wb3J0IHsgRGF0ZVByb3BzIH0gZnJvbSBcIkAvdHlwZXMvY2VsbFR5cGVzXCI7XHJcblxyXG5jb25zdCBwcm9wcyA9IHdpdGhEZWZhdWx0cyhkZWZpbmVQcm9wczxEYXRlUHJvcHM+KCksIHtcclxuICB0eXBlOiAnZGF0ZScsXHJcbiAgZm9ybWF0OiAodjogYW55KSA9PiB2XHJcbn0pO1xyXG5cclxuY29uc3QgZm9ybWF0ZWRWYWx1ZSA9IGNvbXB1dGVkKCgpID0+IHByb3BzLmZvcm1hdChwcm9wcy52YWx1ZSkpO1xyXG5cclxuPC9zY3JpcHQ+XHJcblxyXG48dGVtcGxhdGU+XHJcbiAgPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+e3sgZm9ybWF0ZWRWYWx1ZSB9fTwvc3Bhbj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cclxuLnRleHQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjM3NTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgJi5lZGl0YWJsZSB7XHJcbiAgICBsaW5lLWhlaWdodDogdmFyKC0tdGQtaGVpZ2h0KTtcclxuICAgIHBhZGRpbmc6IDAgdmFyKC0tY2VsbC1wYWRkaW5nLWhvcml6b250YWwpO1xyXG4gICAgbWFyZ2luOiAwIGNhbGModmFyKC0tY2VsbC1wYWRkaW5nLWhvcml6b250YWwpICogLTEpO1xyXG4gIH1cclxufVxyXG4uY2VsbC1idG4ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgYWxsOiB1bnNldDtcclxuICB0b3VjaC1hY3Rpb246IGF1dG87XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuPC9zdHlsZT5cclxuIiwiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIiBnZW5lcmljPVwiVCwgU1wiPlxyXG5pbXBvcnQgeyBGb2xkUHJvcHMgfSBmcm9tIFwiQC90eXBlcy9jZWxsVHlwZXNcIjtcclxuaW1wb3J0IHsgSW5qZWN0b3IgfSBmcm9tIFwiQC90eXBlcy9lbnVtc1wiO1xyXG5pbXBvcnQgeyBJbmplY3RTZXJ2aWNlIH0gZnJvbSBcIkAvdHlwZXMvaW5qZWN0VHlwZXNcIjtcclxuaW1wb3J0IHsgY29tcHV0ZWQsIGluamVjdCB9IGZyb20gXCJ2dWVcIjtcclxuXHJcbmNvbnN0IHByb3BzID0gd2l0aERlZmF1bHRzKFxyXG4gIGRlZmluZVByb3BzPEZvbGRQcm9wcz4oKSxcclxuICB7XHJcbiAgICB0eXBlOiAnZm9sZCcsXHJcbiAgfSxcclxuKTtcclxuXHJcbmNvbnN0IHsgaGFzU3ViUm93cywgc3ViVGFibGVJc09wZW4sIHRvZ2dsZUZvbGQsIGNvbnRyb2wgfSA9IGluamVjdChJbmplY3Rvci5UQUJMRVNFUlZJQ0UpIGFzIEluamVjdFNlcnZpY2U8VCwgUz47XHJcbmNvbnN0IGhhc1N1YlJvd3NCb29sID0gaGFzU3ViUm93cyhwcm9wcy5yb3dJZCk7XHJcbmNvbnN0IGlzT3BlbiA9IGNvbXB1dGVkKCgpID0+IHN1YlRhYmxlSXNPcGVuKHByb3BzLnJvd0lkKSlcclxuXHJcbmNvbnN0IG9uQ2hhbmdlID0gKCk6IHZvaWQgPT4ge1xyXG4gIHRvZ2dsZUZvbGQocHJvcHMucm93SWQpO1xyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjx0ZW1wbGF0ZT5cclxuICA8ZGl2XHJcbiAgICB2LWlmPVwiaGFzU3ViUm93c0Jvb2xcIlxyXG4gICAgY2xhc3M9XCJmb2xkLWNvbnRhaW5lclwiXHJcbiAgPlxyXG4gICAgPHN2Z1xyXG4gICAgICB2aWV3Qm94PVwiMCAwIDE2IDE2XCJcclxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgIDpjbGFzcz1cInsgJ2ZvbGQtb3V0JzogaXNPcGVuIH1cIlxyXG4gICAgPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGNsYXNzPVwiYXJyb3dcIlxyXG4gICAgICAgIGQ9XCJNNCAwLCAxMiA4LCA0IDE2XCJcclxuICAgICAgLz5cclxuICAgIDwvc3ZnPlxyXG5cclxuICAgIDxpbnB1dFxyXG4gICAgICA6aWQ9XCJgZm9sZC0ke3Jvd0lkfWBcIiBcclxuICAgICAgY2xhc3M9XCJjaGVja2JveC1pbnB1dFwiXHJcbiAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgIEBjaGFuZ2U9XCJvbkNoYW5nZVwiXHJcbiAgICAvPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxyXG5AaW1wb3J0ICdAL2Fzc2V0cy9zdHlsZXMvdHJhbnNpdGlvbnMnO1xyXG4uZm9sZC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IHZhcigtLXRkLWJ1dHRvbi1jZWxsLXNpemUpO1xyXG4gIGhlaWdodDogdmFyKC0tdGQtYnV0dG9uLWNlbGwtc2l6ZSk7XHJcblxyXG4gIHN2ZyB7XHJcbiAgICBmaWxsOiB0cmFuc3BhcmVudDtcclxuICAgIHN0cm9rZTogdmFyKC0tZm9sZC1pY29uLWNvbG9yKTtcclxuICAgIHN0cm9rZS13aWR0aDogdmFyKC0tZm9sZC1pY29uLXN0cm9rZS13aWR0aCk7XHJcbiAgICB3aWR0aDogdmFyKC0tZm9sZC1pY29uLXNpemUpO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgJGVhc2VvdXRxdWludDtcclxuICAgICYuZm9sZC1vdXQge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICB9XHJcbiAgICAuYXJyb3cgeyBkOiB2YXIoLS1mb2xkLWFycm93LXBhdGgpIH1cclxuICB9XHJcblxyXG4gIC5jaGVja2JveC1pbnB1dCB7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaW5zZXQ6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxufVxyXG48L3N0eWxlPlxyXG4iLCI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiIGdlbmVyaWM9XCJULCBTXCI+XHJcbmltcG9ydCB7IENoZWNrYm94UHJvcHMgfSBmcm9tIFwiQC90eXBlcy9jZWxsVHlwZXNcIjtcclxuaW1wb3J0IHsgaW5qZWN0LCByZWYgfSBmcm9tIFwidnVlXCI7XHJcbmltcG9ydCB7IEluamVjdG9yIH0gZnJvbSBcIkAvdHlwZXMvZW51bXNcIjtcclxuaW1wb3J0IHsgSW5qZWN0U2VydmljZSB9IGZyb20gXCJAL3R5cGVzL2luamVjdFR5cGVzXCI7XHJcblxyXG5jb25zdCBwcm9wcyA9IHdpdGhEZWZhdWx0cyhcclxuICBkZWZpbmVQcm9wczxDaGVja2JveFByb3BzPigpLFxyXG4gIHtcclxuICAgIHZhbHVlOiBmYWxzZSxcclxuICAgIGluZGV0ZXJtaW5hdGU6IGZhbHNlLFxyXG4gIH0sXHJcbik7XHJcblxyXG5jb25zdCB7IGNoZWNrUm93IH0gPSBpbmplY3QoSW5qZWN0b3IuVEFCTEVTRVJWSUNFKSBhcyBJbmplY3RTZXJ2aWNlPFQsIFM+O1xyXG5jb25zdCBjaGVja2VkID0gcmVmKHByb3BzLnZhbHVlKTtcclxuXHJcbmNvbnN0IG9uQ2hhbmdlID0gKCkgPT4ge1xyXG4gIGlmIChjaGVja2VkLnZhbHVlKSBjaGVja1Jvdyhwcm9wcy5yb3dJZCk7XHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJjaGVja2JveC1jb250YWluZXJcIj5cclxuICAgIDxzdmdcclxuICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgIHdpZHRoPVwiMjRcIlxyXG4gICAgICBoZWlnaD1cIjI0XCJcclxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgIDpjbGFzcz1cIlsnY2hlY2tib3gtdmlzdWFsJywgeyBjaGVja2VkIH1dXCJcclxuICAgID5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBjbGFzcz1cImNoZWNrXCJcclxuICAgICAgICBkPVwiTTE4IDhMMTAgMTZMNiAxMlwiXHJcbiAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMlwiXHJcbiAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAvPlxyXG4gICAgPC9zdmc+XHJcbiAgICA8IS0tIHByZXR0aWVyLWlnbm9yZSAtLT5cclxuICAgIDxpbnB1dFxyXG4gICAgICA6aWQ9XCJgY2ItJHtyb3dJZH1gXCJcclxuICAgICAgdi1tb2RlbD1cImNoZWNrZWRcIlxyXG4gICAgICBjbGFzcz1cImNoZWNrYm94LWlucHV0XCJcclxuICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgQGNoYW5nZT1cIm9uQ2hhbmdlXCJcclxuICAgID5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cclxuQGltcG9ydCAnQC9hc3NldHMvc3R5bGVzL3RyYW5zaXRpb25zJztcclxuLmNoZWNrYm94LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXgtd2lkdGg6IHZhcigtLXRkLWhlaWdodCk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gICY6aG92ZXIgLmNoZWNrYm94LXZpc3VhbCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10YWJsZS1jaGVja2JveC1ob3Zlci1jb2xvcik7XHJcbiAgfVxyXG59XHJcbi5jaGVja2JveC12aXN1YWwge1xyXG4gIHRyYW5zaXRpb246XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIDAuMzVzICRlYXNlb3V0cXVpbnQsXHJcbiAgICBib3JkZXItY29sb3IgMC4xNXM7XHJcbiAgd2lkdGg6IHZhcigtLXRhYmxlLWNoZWNrYm94LXNpemUpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRhYmxlLWNoZWNrYm94LWNvbG9yKTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS10YWJsZS1jaGVja2JveC1yYWRpdXMpO1xyXG4gIC5jaGVjayB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgJGVhc2VvdXRxdWludDtcclxuICAgIGQ6IHBhdGgoXCJNMjQgMEwxMiAxMkwwIDI0XCIpO1xyXG4gICAgZmlsbDogdHJhbnNwYXJlbnQ7XHJcbiAgICBzdHJva2U6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICAmLmNoZWNrZWQge1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjE1cyAkZWFzZW91dHF1aW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGFibGUtY2hlY2tib3gtY29sb3IpO1xyXG4gICAgLmNoZWNrIHtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIDAuMXMgJGVhc2VvdXRxdWludDtcclxuICAgICAgc3Ryb2tlOiAjZmZmO1xyXG4gICAgICBkOiBwYXRoKFwiTTE4IDhMMTAgMTZMNiAxMlwiKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jaGVja2JveC1pbnB1dCB7XHJcbiAgYXBwZWFyYW5jZTogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaW5zZXQ6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbjwvc3R5bGU+XHJcbiIsIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XHJcbmltcG9ydCB7IFJlZiwgcmVmIH0gZnJvbSBcInZ1ZVwiO1xyXG5pbXBvcnQgeyBpbnB1dE92ZXJsYXlTZXJ2aWNlIH0gZnJvbSBcIkAvc2VydmljZXMvb3ZlcmxheVNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQ29udGV4dEJ1dHRvblByb3BzIH0gZnJvbSBcIkAvdHlwZXMvY2VsbFR5cGVzXCI7XHJcblxyXG5jb25zdCBwcm9wcyA9IHdpdGhEZWZhdWx0cyhcclxuICBkZWZpbmVQcm9wczxDb250ZXh0QnV0dG9uUHJvcHM+KCksXHJcbiAgeyBcclxuICAgIHR5cGU6IFwiY29udGV4dC1idXR0b25cIixcclxuICAgIHBhdGg6ICdNNiAyYTIgMiAwIDEgMCA0IDBhMiAyIDAgMSAwIC00IDBNNiA4YTIgMiAwIDEgMCA0IDBhMiAyIDAgMSAwIC00IDBNNiAxNGEyIDIgMCAxIDAgNCAwYTIgMiAwIDEgMCAtNCAwJyxcclxuICB9LFxyXG4pO1xyXG5cclxuY29uc3QgbWVudVJlZjogUmVmPEhUTUxFbGVtZW50IHwgbnVsbD4gPSByZWYobnVsbCk7XHJcblxyXG5jb25zdCBvcGVuID0gKCkgPT4ge1xyXG4gIHByb3BzLm9wdGlvbnMubGVuZ3RoID09PSAxXHJcbiAgICA/IHByb3BzLm9wdGlvbnNbMF0uYWN0aW9uKClcclxuICAgIDogbWVudVJlZi52YWx1ZSA/IGlucHV0T3ZlcmxheVNlcnZpY2Uuc2V0KHtcclxuICAgICAgdXNlQmFja2dyb3VuZDogZmFsc2UsXHJcbiAgICAgIHR5cGU6ICdjb250ZXh0LWJ1dHRvbicsXHJcbiAgICAgIHJvd0lkOiBwcm9wcy5yb3dJZCxcclxuICAgICAgY29sdW1uSWQ6IHByb3BzLmNvbHVtbklkLFxyXG4gICAgICBwb3NpdGlvbkRhdGE6IG1lbnVSZWYudmFsdWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXHJcbiAgICAgIGNvbnRleHRPcHRpb25zOiBwcm9wcy5vcHRpb25zLFxyXG4gICAgfSkgOiBudWxsO1xyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHRlbXBsYXRlPlxyXG4gIDxidXR0b25cclxuICAgIHYtaWY9XCJwcm9wcy5vcHRpb25zXCJcclxuICAgIHJlZj1cIm1lbnVSZWZcIlxyXG4gICAgY2xhc3M9XCJpY29uLW9wdGlvbnNcIlxyXG4gICAgQGNsaWNrPVwib3BlblwiXHJcbiAgPlxyXG4gICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+XHJcbiAgICAgIDxwYXRoIDpkPVwicGF0aFwiIC8+XHJcbiAgICA8L3N2Zz5cclxuICA8L2J1dHRvbj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cclxuYnV0dG9uIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWF4LXdpZHRoOiB2YXIoLS10ZC1oZWlnaHQpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdXRsaW5lLWNvbG9yOiB2YXIoLS1wLTQwMCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4xNXM7XHJcbiAgc3ZnIHtcclxuICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgZmlsbDogdmFyKC0tdGFibGUtY29udGV4dC1idXR0b24pO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdHJhbnNpdGlvbjogZmlsbCAuMTVzO1xyXG4gIH1cclxuICAmOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDJlbTtcclxuICAgIGhlaWdodDogMmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tdGFibGUtY29udGV4dC1idXR0b24tcmFkaXVzKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhYmxlLWNvbnRleHQtYnV0dG9uLWJrZyk7XHJcbiAgfVxyXG4gICY6aG92ZXIge1xyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YWJsZS1jb250ZXh0LWJ1dHRvbi1ia2ctaG92ZXIpO1xyXG4gICAgfVxyXG4gICAgc3ZnIHsgZmlsbDogdmFyKC0tdGFibGUtY29udGV4dC1idXR0b24taG92ZXIpOyB9XHJcbiAgfVxyXG4gICY6YWN0aXZlIHtcclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGFibGUtY29udGV4dC1idXR0b24tYmtnLWFjdGl2ZSk7XHJcbiAgICB9XHJcbiAgICBzdmcgeyBmaWxsOiB2YXIoLS10YWJsZS1jb250ZXh0LWJ1dHRvbi1hY3RpdmUpOyB9XHJcbiAgfVxyXG59XHJcbjwvc3R5bGU+XHJcbiIsIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XHJcblxyXG5pbXBvcnQgeyBJbnB1dE92ZXJsYXlQcm9wcyB9IGZyb20gJ0AvdHlwZXMvaW5wdXRUeXBlcyc7XHJcbmltcG9ydCBDZWxsSW5wdXRPdmVybGF5IGZyb20gJy4vQ2VsbElucHV0T3ZlcmxheS52dWUnO1xyXG5pbXBvcnQgeyByZWYsIHdhdGNoIH0gZnJvbSAndnVlJztcclxuaW1wb3J0IHsgZ2V0Rm9jdXNlZEVsZW1lbnQsIHNldEZvY3VzZWRFbGVtZW50IH0gZnJvbSAnQC9zZXJ2aWNlcy9vdmVybGF5U2VydmljZSc7XHJcblxyXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPElucHV0T3ZlcmxheVByb3BzPCd0ZXh0Jz4+KCk7XHJcblxyXG5jb25zdCBlbWl0ID0gZGVmaW5lRW1pdHM8e1xyXG4gIChlOid1cGRhdGU6bW9kZWxWYWx1ZScsIHZhbHVlOiBzdHJpbmcgKTogdm9pZCxcclxuICAoZTonY2xvc2U6aW5wdXQnLCB2YWx1ZTogc3RyaW5nICk6IHZvaWRcclxuICAoZTonYWJvcnQ6aW5wdXQnLCB2YWx1ZTogc3RyaW5nICk6IHZvaWRcclxufT4oKTtcclxuXHJcbmNvbnN0IHByZXZpb3VzRm9jdXNlZEVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGdldEZvY3VzZWRFbGVtZW50KCk7XHJcbmNvbnN0IGluaXRpYWxWYWx1ZTogc3RyaW5nID0gcHJvcHM/LnZhbHVlID8/ICcnO1xyXG5jb25zdCBpbnB1dEVsZW1lbnQgPSByZWY8SFRNTElucHV0RWxlbWVudD4oKTtcclxuY29uc3QgbW9kZWxWYWx1ZSA9IHJlZjxzdHJpbmc+KHByb3BzLnZhbHVlID8/ICcnKTtcclxuXHJcbmNvbnN0IHJldHVybkVsZW1lbnRWYWx1ZSA9ICgpOiB2b2lkID0+IHtcclxuICBpZiAocHJldmlvdXNGb2N1c2VkRWxlbWVudCkgc2V0Rm9jdXNlZEVsZW1lbnQocHJldmlvdXNGb2N1c2VkRWxlbWVudCk7XHJcbiAgZW1pdCgnY2xvc2U6aW5wdXQnLCBtb2RlbFZhbHVlLnZhbHVlKTtcclxufTtcclxuY29uc3QgdXBkYXRlVmFsdWUgPSAoZXY6IEV2ZW50KTogdm9pZCA9PiB7XHJcbiAgKGV2LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSA9IG1vZGVsVmFsdWUudmFsdWVcclxuICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIChldi50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUpO1xyXG59XHJcbmNvbnN0IGFib3J0VXBkYXRlID0gKCk6IHZvaWQgPT4ge1xyXG4gIGlmIChwcmV2aW91c0ZvY3VzZWRFbGVtZW50KSBzZXRGb2N1c2VkRWxlbWVudChwcmV2aW91c0ZvY3VzZWRFbGVtZW50KTtcclxuICBlbWl0KCdhYm9ydDppbnB1dCcsIGluaXRpYWxWYWx1ZSk7XHJcbn1cclxuXHJcbmNvbnN0IHVud2F0Y2ggPSB3YXRjaChpbnB1dEVsZW1lbnQsIChjKTogdm9pZCA9PiB7XHJcbiAgYz8uZm9jdXMoKTtcclxuICB1bndhdGNoKCk7XHJcbn0pO1xyXG48L3NjcmlwdD5cclxuXHJcbjx0ZW1wbGF0ZT5cclxuICA8aW5wdXRcclxuICAgIHJlZj1cImlucHV0RWxlbWVudFwiXHJcbiAgICB2LW1vZGVsPVwibW9kZWxWYWx1ZVwiXHJcbiAgICBjbGFzcz1cInRhYmxlLWlucHV0IHRleHRcIlxyXG4gICAgOnBsYWNlaG9sZGVyPVwicHJvcHMucGxhY2Vob2xkZXIgPz8gJydcIlxyXG4gICAgQGlucHV0PVwidXBkYXRlVmFsdWVcIlxyXG4gICAgQGtleXByZXNzLmVudGVyPVwicmV0dXJuRWxlbWVudFZhbHVlXCJcclxuICAgIEBrZXlkb3duLmVzYz1cImFib3J0VXBkYXRlXCJcclxuICAgIEBmb2N1c291dD1cInJldHVybkVsZW1lbnRWYWx1ZVwiXHJcbiAgLz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cclxuICAudGFibGUtaW5wdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMTI1cmVtO1xyXG4gICAgY29sb3I6IHZhcigtLXRkLWNvbG9yKTtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS10ZC1mb250LXNpemUpO1xyXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLXRkLWZvbnQtd2VpZ2h0KTtcclxuICAgIGluc2V0OiAtMXB4O1xyXG4gICAgcGFkZGluZzogMCB2YXIoLS1jZWxsLXBhZGRpbmctaG9yaXpvbnRhbCk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgb3V0bGluZTogMXB4IHNvbGlkIHZhcigpO1xyXG4gICAgfVxyXG4gIH1cclxuPC9zdHlsZT5cclxuIiwiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cclxuXHJcbmltcG9ydCB7IElucHV0T3ZlcmxheVByb3BzIH0gZnJvbSAnQC90eXBlcy9pbnB1dFR5cGVzJztcclxuaW1wb3J0IENlbGxJbnB1dE92ZXJsYXkgZnJvbSAnLi9DZWxsSW5wdXRPdmVybGF5LnZ1ZSc7XHJcbmltcG9ydCB7IHJlZiwgd2F0Y2ggfSBmcm9tICd2dWUnO1xyXG5pbXBvcnQgeyBnZXRGb2N1c2VkRWxlbWVudCwgc2V0Rm9jdXNlZEVsZW1lbnQgfSBmcm9tICdAL3NlcnZpY2VzL292ZXJsYXlTZXJ2aWNlJztcclxuXHJcbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8SW5wdXRPdmVybGF5UHJvcHM8J251bWJlcic+PigpO1xyXG5cclxuY29uc3QgZW1pdCA9IGRlZmluZUVtaXRzPHtcclxuICAoZTondXBkYXRlOm1vZGVsVmFsdWUnLCB2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkICk6IHZvaWQsXHJcbiAgKGU6J2Nsb3NlOmlucHV0JywgdmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCApOiB2b2lkXHJcbn0+KCk7XHJcblxyXG5jb25zdCBwcmV2aW91c0ZvY3VzZWRFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwgPSBnZXRGb2N1c2VkRWxlbWVudCgpO1xyXG5jb25zdCBpbml0aWFsVmFsdWU6IHN0cmluZyA9IHByb3BzLnZhbHVlPy50b1N0cmluZygpID8/ICcnO1xyXG5jb25zdCBpbnB1dEVsZW1lbnQgPSByZWY8SFRNTElucHV0RWxlbWVudD4oKTtcclxuY29uc3QgbW9kZWxWYWx1ZSA9IHJlZjxudW1iZXIgfCB1bmRlZmluZWQ+KHByb3BzLnZhbHVlKVxyXG5cclxuY29uc3QgcmV0dXJuRWxlbWVudFZhbHVlID0gKCk6IHZvaWQgPT4geyBcclxuICBpZiAocHJldmlvdXNGb2N1c2VkRWxlbWVudCkgc2V0Rm9jdXNlZEVsZW1lbnQocHJldmlvdXNGb2N1c2VkRWxlbWVudCk7XHJcbiAgZW1pdCgnY2xvc2U6aW5wdXQnLCBtb2RlbFZhbHVlLnZhbHVlKTtcclxufTtcclxuY29uc3QgdXBkYXRlVmFsdWUgPSAoZXY6IEV2ZW50KTogdm9pZCA9PiB7XHJcbiAgKGV2LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSA9IG1vZGVsVmFsdWUudmFsdWU/LnRvU3RyaW5nKCkgPz8gJyc7XHJcbiAgZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCBtb2RlbFZhbHVlLnZhbHVlKTtcclxufVxyXG5jb25zdCBhYm9ydFVwZGF0ZSA9ICgpOiB2b2lkID0+IHtcclxuICBpZiAocHJldmlvdXNGb2N1c2VkRWxlbWVudCkgc2V0Rm9jdXNlZEVsZW1lbnQocHJldmlvdXNGb2N1c2VkRWxlbWVudCk7XHJcbiAgZW1pdCgnY2xvc2U6aW5wdXQnLCBwYXJzZUludChpbml0aWFsVmFsdWUpID8/IHVuZGVmaW5lZCk7XHJcbn1cclxuY29uc3QgdW53YXRjaCA9IHdhdGNoKGlucHV0RWxlbWVudCwgKGMpOiB2b2lkID0+IHtcclxuICBjPy5mb2N1cygpO1xyXG4gIHVud2F0Y2goKTtcclxufSk7XHJcblxyXG48L3NjcmlwdD5cclxuPHRlbXBsYXRlPlxyXG4gIDxpbnB1dFxyXG4gICAgcmVmPVwiaW5wdXRFbGVtZW50XCJcclxuICAgIHYtbW9kZWwubnVtYmVyPVwibW9kZWxWYWx1ZVwiXHJcbiAgICBjbGFzcz1cInRhYmxlLWlucHV0IG51bWJlclwiXHJcbiAgICA6cGxhY2Vob2xkZXI9XCJwcm9wcy5wbGFjZWhvbGRlciA/PyAnJ1wiXHJcbiAgICBAaW5wdXQ9XCJ1cGRhdGVWYWx1ZVwiXHJcbiAgICBAa2V5dXAuZW50ZXI9XCJyZXR1cm5FbGVtZW50VmFsdWVcIlxyXG4gICAgQGtleWRvd24uZXNjPVwiYWJvcnRVcGRhdGVcIlxyXG4gICAgQGZvY3Vzb3V0PVwicmV0dXJuRWxlbWVudFZhbHVlXCJcclxuICAvPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxyXG4gIC50YWJsZS1pbnB1dCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4xMjVyZW07XHJcbiAgICBjb2xvcjogdmFyKC0tdGQtY29sb3IpO1xyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICBmb250LXNpemU6IHZhcigtLXRkLWZvbnQtc2l6ZSk7XHJcbiAgICBmb250LXdlaWdodDogdmFyKC0tdGQtZm9udC13ZWlnaHQpO1xyXG4gICAgaW5zZXQ6IC0xcHg7XHJcbiAgICBwYWRkaW5nOiAwIHZhcigtLWNlbGwtcGFkZGluZy1ob3Jpem9udGFsKTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBvdXRsaW5lOiAxcHggc29saWQgdmFyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG48L3N0eWxlPlxyXG4iLCI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxyXG5cclxuaW1wb3J0IHsgSW5wdXRPdmVybGF5UHJvcHMgfSBmcm9tICdAL3R5cGVzL2lucHV0VHlwZXMnO1xyXG5pbXBvcnQgeyByZWYsIHdhdGNoIH0gZnJvbSAndnVlJztcclxuaW1wb3J0IHsgZ2V0Rm9jdXNlZEVsZW1lbnQsIHNldEZvY3VzZWRFbGVtZW50IH0gZnJvbSAnQC9zZXJ2aWNlcy9vdmVybGF5U2VydmljZSc7XHJcbmltcG9ydCB7IGZvY3VzQWRqY2VudEVsZW1lbnQsIGZvcm1hdERhdGUgfSBmcm9tICdAL3V0aWxzL2dlbmVyYWxVdGlscyc7XHJcblxyXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPElucHV0T3ZlcmxheVByb3BzPCdkYXRlJz4+KCk7XHJcblxyXG5jb25zdCBlbWl0ID0gZGVmaW5lRW1pdHM8e1xyXG4gIChlOid1cGRhdGU6bW9kZWxWYWx1ZScsIHZhbHVlOiBEYXRlIHwgdW5kZWZpbmVkICk6IHZvaWQsXHJcbiAgKGU6J2Nsb3NlOmlucHV0JywgdmFsdWU6IERhdGUgfCB1bmRlZmluZWQgKTogdm9pZFxyXG59PigpO1xyXG5cclxuY29uc3QgcHJldmlvdXNGb2N1c2VkRWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsID0gZ2V0Rm9jdXNlZEVsZW1lbnQoKTtcclxuY29uc3QgaW5pdGlhbFZhbHVlOiBzdHJpbmcgPSBwcm9wcy52YWx1ZSA/IGZvcm1hdERhdGUocHJvcHMudmFsdWUpIDogJyc7XHJcbmxldCB0YWI6IGJvb2xlYW4gPSBmYWxzZTtcclxuY29uc3QgaW5wdXRFbGVtZW50ID0gcmVmPEhUTUxJbnB1dEVsZW1lbnQ+KCk7XHJcblxyXG5jb25zdCBtb2RlbFZhbHVlID0gcmVmPHN0cmluZz4oaW5pdGlhbFZhbHVlKTtcclxuXHJcbmNvbnN0IGVycm9yID0gcmVmKGZhbHNlKTtcclxuXHJcbmNvbnN0IGNoZWNrWWVhciA9ICh5ZWFyOiBzdHJpbmcpID0+IHtcclxuICBjb25zdCB5ZWFyRm5zID0gW1xyXG4gIChuOiBzdHJpbmcpID0+IHBhcnNlSW50KG4pID09PSAxIHx8IHBhcnNlSW50KG4pID09PSAyLFxyXG4gIChuOiBzdHJpbmcpID0+IHBhcnNlSW50KG4pID09PSAxOSB8fCBwYXJzZUludChuKSA9PT0gMjAsXHJcbiAgKG46IHN0cmluZykgPT4gdHlwZW9mIHBhcnNlSW50KG4uc2xpY2UoLTEpKSA9PT0gJ251bWJlcicsXHJcbiAgKG46IHN0cmluZykgPT4gdHlwZW9mIHBhcnNlSW50KG4uc2xpY2UoLTEpKSA9PT0gJ251bWJlcicsXHJcbl07XHJcbiAgY29uc3QgeSA9IHllYXIuc3BsaXQoJycpLnJlZHVjZSgocCwgYywgaSkgPT4geWVhckZuc1tpXShwICsgYykgPyBwICsgYyA6IHAsICcnKTtcclxuICByZXR1cm4geS5sZW5ndGggPT09IHllYXIubGVuZ3RoO1xyXG59XHJcblxyXG5jb25zdCBnZXRFbGVtQW5kVmFsdWUgPSAoZXY6IEV2ZW50KSA9PiAoe2V2ZW50OiBldiBhcyBLZXlib2FyZEV2ZW50LCBlbGVtZW50OiAoZXYudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLCB2YWx1ZTogKGV2LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZS5yZXBsYWNlKC9bXlxcZC1dL2csICcnKX0pO1xyXG5cclxuY29uc3QgcmVtb3ZlTGFzdCA9ICh2YWx1ZTogc3RyaW5nKSA9PiB2YWx1ZS5zbGljZSgwLCB2YWx1ZS5sZW5ndGgtMSk7XHJcbmNvbnN0IGJhY2tTcGFjZSA9IChldjogRXZlbnQpID0+IHtcclxuICBjb25zdCB7ZXZlbnQsIGVsZW1lbnQsIHZhbHVlIH0gPSBnZXRFbGVtQW5kVmFsdWUoZXYpO1xyXG4gIGlmKHZhbHVlLnNsaWNlKC0xKSA9PT0gJy0nKSBtb2RlbFZhbHVlLnZhbHVlID0gcmVtb3ZlTGFzdCh2YWx1ZSk7XHJcbn1cclxuXHJcbmNvbnN0IGVudGVyID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBmb3JtYXREYXRlKG5ldyBEYXRlKG1vZGVsVmFsdWUudmFsdWUpKVxyXG4gICAgZW1pdCgnY2xvc2U6aW5wdXQnLCBuZXcgRGF0ZShtb2RlbFZhbHVlLnZhbHVlKSk7XHJcbiAgfSBjYXRjaCB7XHJcbiAgICBhd2FpdCBvbkVycm9yKCk7XHJcbiAgICBlbWl0KCdjbG9zZTppbnB1dCcsIGluaXRpYWxWYWx1ZSA/IG5ldyBEYXRlKGluaXRpYWxWYWx1ZSkgOiB1bmRlZmluZWQpO1xyXG4gIH1cclxuICBpZiAocHJldmlvdXNGb2N1c2VkRWxlbWVudCAmJiAhdGFiKSBzZXRGb2N1c2VkRWxlbWVudChwcmV2aW91c0ZvY3VzZWRFbGVtZW50KTtcclxufTtcclxuXHJcbmNvbnN0IG9uSW5wdXQgPSAoZXY6IEV2ZW50KTogdm9pZCA9PiB7XHJcbiAgY29uc3Qge2V2ZW50LCB2YWx1ZX0gPSBnZXRFbGVtQW5kVmFsdWUoZXYpO1xyXG4gIGlmKGV2ZW50LmtleSA9PT0gJ2JhY2tzcGFjZScgfHwgZXZlbnQua2V5ID09PSAnZW50ZXInKSByZXR1cm47XHJcbiAgbGV0IHYgPSB2YWx1ZS5yZXBsYWNlKC9bXlxcZC1dL2csICcnKS5zbGljZSgwLCAxMClcclxuICBpZiAoL1xcZC8udGVzdCh2LnNsaWNlKDQsIDUpKSkgdiA9IHYuc2xpY2UoMCwgNCkgKyAnLScgKyB2LnNsaWNlKDQsIHYubGVuZ3RoKTtcclxuICBpZiAoL1xcZC8udGVzdCh2LnNsaWNlKDcsIDgpKSkgdiA9IHYuc2xpY2UoMCwgNykgKyAnLScgKyB2LnNsaWNlKDcsIHYubGVuZ3RoKTtcclxuICBpZiAobW9kZWxWYWx1ZS52YWx1ZS5sZW5ndGggPj0gMTAgJiYgbmV3IERhdGUobW9kZWxWYWx1ZS52YWx1ZSkudmFsdWVPZigpKSB7XHJcbiAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIG5ldyBEYXRlKG1vZGVsVmFsdWUudmFsdWUpKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdiA9IHYuc2xpY2UoMCwgOSk7XHJcbiAgfVxyXG5cclxuICBtb2RlbFZhbHVlLnZhbHVlID0gdjtcclxufVxyXG5cclxuY29uc3QgdXBkYXRlVmFsdWUgPSAoZXY6IEV2ZW50KTogdm9pZCA9PiB7XHJcbiAgY29uc3QgeyBldmVudCwgdmFsdWUgfSA9IGdldEVsZW1BbmRWYWx1ZShldik7XHJcbiAgaWYoZXZlbnQua2V5ID09PSAnYmFja3NwYWNlJyB8fCBldmVudC5rZXkgPT09ICdlbnRlcicpIHJldHVybjtcclxuICBjb25zdCBwID0gdmFsdWUuc3BsaXQoJy0nKTtcclxuICBpZighY2hlY2tZZWFyKHBbMF0pKSBtb2RlbFZhbHVlLnZhbHVlID0gcmVtb3ZlTGFzdCh2YWx1ZS5zbGljZSgwLDQpKVxyXG4gIGlmKHBhcnNlSW50KHBbMV0pID4gMTIpIG1vZGVsVmFsdWUudmFsdWUgPSBwWzBdO1xyXG59XHJcblxyXG5jb25zdCBhYm9ydFVwZGF0ZSA9ICgpOiB2b2lkID0+IHtcclxuICBpZiAocHJldmlvdXNGb2N1c2VkRWxlbWVudCkgc2V0Rm9jdXNlZEVsZW1lbnQocHJldmlvdXNGb2N1c2VkRWxlbWVudCk7XHJcbiAgZW1pdCgnY2xvc2U6aW5wdXQnLCBpbml0aWFsVmFsdWUgPyBuZXcgRGF0ZShpbml0aWFsVmFsdWUpIDogdW5kZWZpbmVkKTtcclxufVxyXG5cclxuY29uc3Qgb25FcnJvciA9IGFzeW5jICgpID0+IHtcclxuICBlcnJvci52YWx1ZSA9IHRydWU7XHJcbiAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gZXJyb3IudmFsdWUgPSBmYWxzZSwgMSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUoJ3Jlc29sdmVkJyksIDUwMCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IHRhYmtleSA9IChldmVudDogRXZlbnQsIGRpcmVjdGlvbjogJ2ZvcndhcmRzJyB8ICdiYWNrd2FyZHMnKSA9PiB7XHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICB0YWIgPSB0cnVlO1xyXG4gIGZvY3VzQWRqY2VudEVsZW1lbnQocHJldmlvdXNGb2N1c2VkRWxlbWVudCwgZGlyZWN0aW9uID09PSAnZm9yd2FyZHMnID8gMSA6IC0xKTtcclxuICBlbnRlcigpO1xyXG59XHJcblxyXG5jb25zdCBibHVyID0gKGV2ZW50OiBFdmVudCkgPT4ge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgaWYgKCF0YWIpIGVudGVyKCk7XHJcbn1cclxuXHJcbmNvbnN0IHVud2F0Y2ggPSB3YXRjaChpbnB1dEVsZW1lbnQsIChjKTogdm9pZCA9PiB7XHJcbiAgYz8uZm9jdXMoKTtcclxuICB1bndhdGNoKCk7XHJcbn0pO1xyXG5cclxuPC9zY3JpcHQ+XHJcbjx0ZW1wbGF0ZT5cclxuICA8aW5wdXQgXHJcbiAgICByZWY9XCJpbnB1dEVsZW1lbnRcIlxyXG4gICAgdi1tb2RlbD1cIm1vZGVsVmFsdWVcIlxyXG4gICAgY2xhc3M9XCJ0YWJsZS1pbnB1dCBkYXRlXCJcclxuICAgIHBsYWNlaG9sZGVyPVwieXl5eS1tbS1kZFwiXHJcbiAgICA6Y2xhc3M9XCJ7ICdlcnJvcic6IGVycm9yIH1cIlxyXG4gICAgQGlucHV0PVwib25JbnB1dFwiXHJcbiAgICBAa2V5dXA9XCJ1cGRhdGVWYWx1ZVwiXHJcbiAgICBAa2V5dXAuYmFja3NwYWNlPVwiYmFja1NwYWNlXCJcclxuICAgIEBrZXl1cC5lbnRlcj1cImVudGVyXCJcclxuICAgIEBrZXlkb3duLmVzYz1cImFib3J0VXBkYXRlXCJcclxuICAgIEBrZXlkb3duLmV4YWN0LnRhYj1cIihldikgPT4gdGFia2V5KGV2LCAnZm9yd2FyZHMnKVwiXHJcbiAgICBAa2V5ZG93bi5zaGlmdC50YWI9XCIoZXYpID0+IHRhYmtleShldiwgJ2JhY2t3YXJkcycpXCJcclxuICAgIEBmb2N1c291dD1cImJsdXJcIlxyXG4gIC8+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XHJcbiAgLnRhYmxlLWlucHV0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRkLWVkaXQtYWN0aXZlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4xMjVyZW07XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogdmFyKC0tdGQtY29sb3IpO1xyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICBmb250LXNpemU6IHZhcigtLXRkLWZvbnQtc2l6ZSk7XHJcbiAgICBmb250LXdlaWdodDogdmFyKC0tdGQtZm9udC13ZWlnaHQpO1xyXG4gICAgaW5zZXQ6IC0xcHg7XHJcbiAgICBwYWRkaW5nOiAwIHZhcigtLWNlbGwtcGFkZGluZy1ob3Jpem9udGFsKTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC41cyBsaW5lYXI7XHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgb3V0bGluZTogMXB4IHNvbGlkIHZhcigpO1xyXG4gICAgfVxyXG4gICAgJi5lcnJvciB7XHJcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMHMgbGluZWFyO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1lcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG48L3N0eWxlPlxyXG4iLCI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxyXG5pbXBvcnQgeyBjb21wdXRlZCwgb25Nb3VudGVkLCByZWYgfSBmcm9tIFwidnVlXCI7XHJcbmltcG9ydCB7IGlucHV0T3ZlcmxheVNlcnZpY2UsIGdldEJvdW5kaW5nQm94IH0gZnJvbSBcIkAvc2VydmljZXMvb3ZlcmxheVNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQ29udGV4dE9wdGlvbiB9IGZyb20gXCJAL3R5cGVzL2lucHV0VHlwZXNcIjtcclxuaW1wb3J0IHsgQ29sdW1uSWQsIFJvd0lkIH0gZnJvbSBcIkAvdHlwZXMvdGFibGVUeXBlc1wiO1xyXG5cclxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczx7XHJcbiAgdHlwZTogJ2NvbnRleHQtbWVudScsXHJcbiAgcm93SWQ6IFJvd0lkLFxyXG4gIGNvbHVtbklkOiBDb2x1bW5JZCxcclxuICBwb3NpdGlvbkRhdGE6IERPTVJlY3QsXHJcbiAgY29udGV4dE9wdGlvbnM/OiBDb250ZXh0T3B0aW9uW10sXHJcbn0+KCk7XHJcblxyXG5jb25zdCBlbWl0ID0gZGVmaW5lRW1pdHM8eyhlOiAnY2xvc2U6aW5wdXQnKTogdm9pZH0+KCk7XHJcbmNvbnN0IG1lbnVSZWYgPSByZWYoKTtcclxuY29uc3Qgc2VsZWN0ID0gKGV2ZW50OiBFdmVudCwgbzogQ29udGV4dE9wdGlvbikgPT4ge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgby5hY3Rpb24oKTtcclxuICBlbWl0KCdjbG9zZTppbnB1dCcpO1xyXG59O1xyXG5cclxuY29uc3QgcG9zaXRpb24gPSBjb21wdXRlZDx7eDogc3RyaW5nLCB5OiBzdHJpbmd9PigoKSA9PiB7XHJcbiAgaWYgKCFtZW51UmVmLnZhbHVlKSByZXR1cm4ge3g6ICctMTAwMHB4JywgeTogJy0xMDAwcHgnIH1cclxuXHJcbiAgY29uc3QgY2hpbGQgPSBnZXRCb3VuZGluZ0JveChtZW51UmVmLnZhbHVlKTtcclxuICBjb25zdCBweCA9IHByb3BzLnBvc2l0aW9uRGF0YS54O1xyXG4gIGNvbnN0IHB5ID0gcHJvcHMucG9zaXRpb25EYXRhLnk7XHJcbiAgY29uc3QgcHcgPSBwcm9wcy5wb3NpdGlvbkRhdGEud2lkdGg7XHJcbiAgY29uc3QgcGggPSBwcm9wcy5wb3NpdGlvbkRhdGEuaGVpZ2h0O1xyXG4gIGNvbnN0IGN4ID0gY2hpbGQueDtcclxuICBjb25zdCBjeSA9IGNoaWxkLnk7XHJcbiAgY29uc3QgY3cgPSBjaGlsZC53aWR0aDtcclxuICBjb25zdCBjaCA9IGNoaWxkLmhlaWdodDtcclxuXHJcbiAgY29uc3QgeCA9IHB3IC0gY3cgKyAncHgnO1xyXG4gIGNvbnN0IHkgPSBwaCArIDEgKyAncHgnO1xyXG4gIHJldHVybiB7eCwgeSB9XHJcbn0pO1xyXG5cclxuPC9zY3JpcHQ+XHJcblxyXG48dGVtcGxhdGU+XHJcbiAgPHVsXHJcbiAgICB2LWlmPVwiY29udGV4dE9wdGlvbnNcIlxyXG4gICAgcmVmPVwibWVudVJlZlwiXHJcbiAgICBjbGFzcz1cImNvbnRleHQtbWVudVwiXHJcbiAgICA6c3R5bGU9XCJ7IGxlZnQ6IHBvc2l0aW9uLngsIHRvcDogcG9zaXRpb24ueSB9XCJcclxuICA+XHJcbiAgICA8bGlcclxuICAgICAgdi1mb3I9XCJvcHRpb24gaW4gY29udGV4dE9wdGlvbnNcIlxyXG4gICAgICA6a2V5PVwib3B0aW9uLmxhYmVsXCJcclxuICAgICAgY2xhc3M9XCJtZW51LWl0ZW1cIlxyXG4gICAgICBAY2xpY2s9XCIoZXY6IEV2ZW50KSA9PiBzZWxlY3QoZXYsIG9wdGlvbilcIlxyXG4gICAgPlxyXG4gICAgICB7eyBvcHRpb24ubGFiZWwgfX1cclxuICAgIDwvbGk+XHJcbiAgPC91bD5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cclxuLmNvbnRleHQtbWVudSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRleHQtZGVjb3JhdGlvbi1zdHlsZTogdW5zZXQ7XHJcbiAgcGFkZGluZzogdmFyKC0tY29udGV4dC1tZW51LXBhZGRpbmcpO1xyXG4gIG1hcmdpbjogMDtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1jb250ZXh0LW1lbnUtcmFkaXVzKTtcclxuICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZXh0LW1lbnUtYmtnKTtcclxuICBjb2xvcjogdmFyKC0tY29udGV4dC1tZW51LWNvbG9yKTtcclxuICBib3gtc2hhZG93OiB2YXIoLS1jb250ZXh0LW1lbnUtc2hhZG93KTtcclxufVxyXG4ubWVudS1pdGVtIHtcclxuICBwYWRkaW5nOiB2YXIoLS1jb250ZXh0LW1lbnUtaXRlbS1wYWRkaW5nKTtcclxuICBoZWlnaHQ6IHZhcigtLWNvbnRleHQtbWVudS1pdGVtLWhlaWdodCk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGV4dC1tZW51LWl0ZW0tYmtnLWhvdmVyKTtcclxuICB9XHJcbn1cclxuPC9zdHlsZT5cclxuIiwiXHJcbmltcG9ydCBDaGlwIGZyb20gJ0AvY29tcG9uZW50cy9jZWxscy9DaGlwLnZ1ZSc7XHJcbmltcG9ydCBUZXh0IGZyb20gXCJAL2NvbXBvbmVudHMvY2VsbHMvVGV4dC52dWVcIjtcclxuaW1wb3J0IE51bWJlckNvbXBvbmVudCBmcm9tIFwiQC9jb21wb25lbnRzL2NlbGxzL051bWJlci52dWVcIjtcclxuaW1wb3J0IERhdGVDb21wb25lbnQgZnJvbSBcIkAvY29tcG9uZW50cy9jZWxscy9EYXRlLnZ1ZVwiO1xyXG5pbXBvcnQgRm9sZCBmcm9tIFwiQC9jb21wb25lbnRzL2NlbGxzL0ZvbGQudnVlXCI7XHJcbmltcG9ydCBDaGVja2JveCBmcm9tICdAL2NvbXBvbmVudHMvY2VsbHMvQ2hlY2tib3gudnVlJztcclxuaW1wb3J0IENvbnRleHRCdXR0b24gZnJvbSBcIkAvY29tcG9uZW50cy9jZWxscy9Db250ZXh0QnV0dG9uLnZ1ZVwiO1xyXG5pbXBvcnQgeyBBbGlnblggfSBmcm9tICdAL3R5cGVzL2VudW1zJztcclxuaW1wb3J0IHsgdWlkIH0gZnJvbSAnQC91dGlscy9nZW5lcmFsVXRpbHMnO1xyXG5pbXBvcnQgeyBDb2x1bW4sIENvbHVtbklkLCBIZWFkZXJDb2x1bW4sIEhlYWRlckNvbXBvbmVudCwgUGFydGlhbENvbHVtbiwgU3ViVGFibGUgfSBmcm9tICdAL3R5cGVzL3RhYmxlVHlwZXMnO1xyXG5pbXBvcnQgeyBDaGVja2JveFByb3BzLCBDaGlwUHJvcHMsIENvbW1vblByb3BzLCBDb250ZXh0QnV0dG9uUHJvcHMsIERhdGVQcm9wcywgRm9sZFByb3BzLCBOdW1iZXJQcm9wcywgVGV4dFByb3BzIH0gZnJvbSAnQC90eXBlcy9jZWxsVHlwZXMnO1xyXG5pbXBvcnQgeyBjb21wdXRlZCwgbWFya1JhdyB9IGZyb20gJ3Z1ZSc7XHJcbmltcG9ydCBPdmVybGF5VGV4dEZpZWxkIGZyb20gJ0AvY29tcG9uZW50cy9vdmVybGF5cy9PdmVybGF5VGV4dEZpZWxkLnZ1ZSc7XHJcbmltcG9ydCBPdmVybGF5TnVtYmVyRmllbGQgZnJvbSAnQC9jb21wb25lbnRzL292ZXJsYXlzL092ZXJsYXlOdW1iZXJGaWVsZC52dWUnO1xyXG5pbXBvcnQgT3ZlcmxheURhdGVGaWVsZCBmcm9tICdAL2NvbXBvbmVudHMvb3ZlcmxheXMvT3ZlcmxheURhdGVGaWVsZC52dWUnO1xyXG5pbXBvcnQgQ29udGV4dE1lbnUgZnJvbSAnLi4vb3ZlcmxheXMvQ29udGV4dE1lbnUudnVlJztcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbHVtbkZuID0gPEMgZXh0ZW5kcyBDb21tb25Qcm9wcywgVD4ocHJvcHM6IENvbHVtbjxDLCBUPik6IENvbHVtbjxDLCBUPiA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHZpc2libGU6IHRydWUsXHJcbiAgICAuLi5wcm9wc1xyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaGVhZGVyQ29sdW1uRm4gPSA8UCBleHRlbmRzIEhlYWRlckNvbHVtbj4oY29tcG9uZW50OiBIZWFkZXJDb21wb25lbnQ8UD4pOiBIZWFkZXJDb21wb25lbnQ8UD4gPT4gY29tcG9uZW50O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvbGRDb2x1bW4gPSA8VCwgUz4ocHJvcHM6IFBhcnRpYWxDb2x1bW48UywgRm9sZFByb3BzPiAmIHsgc3ViVGFibGU/OiBTdWJUYWJsZTxTPiB9KTogQ29sdW1uPEZvbGRQcm9wcywgUz4gJiB7IHN1YlRhYmxlPzogU3ViVGFibGU8Uz4gfSA9PiBjb2x1bW5Gbih7IFxyXG4gIGNsYXNzZXM6ICdidXR0b24tY2VsbCcsXHJcbiAgZ2V0VmFsdWU6IChwcm9wczogUykgPT4gZmFsc2UsXHJcbiAgaGVhZGVyOiBjb21wdXRlZCgoKSA9PiAnJyksXHJcbiAgc29ydGFibGU6IGZhbHNlLFxyXG4gIHNlYXJjaGFibGU6IGZhbHNlLFxyXG4gIGFsaWduOiBBbGlnblguQ0VOVEVSLFxyXG4gIGdyaWRTcGFjZTogJ3ZhcigtLXRoLWhlaWdodCknLFxyXG4gIC4uLnByb3BzLFxyXG4gIHR5cGU6ICdmb2xkJyxcclxuICBjb21wb25lbnQ6IG1hcmtSYXcoRm9sZCksXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgY2hlY2tib3hDb2x1bW4gPSA8VD4ocHJvcHM6IFBhcnRpYWxDb2x1bW48VCwgQ2hlY2tib3hQcm9wcz4pOiBDb2x1bW48Q2hlY2tib3hQcm9wcywgVD4gID0+IGNvbHVtbkZuKHsgXHJcbiAgICBjbGFzc2VzOiAnYnV0dG9uLWNlbGwnLFxyXG4gICAgdHlwZTogJ2NoZWNrYm94JyxcclxuICAgIGNvbXBvbmVudDogbWFya1JhdyhDaGVja2JveCksXHJcbiAgICBnZXRWYWx1ZTogKHByb3BzOiBUKSA9PiBmYWxzZSxcclxuICAgIGhlYWRlcjogY29tcHV0ZWQoKCkgPT4gJycpLFxyXG4gICAgc29ydGFibGU6IGZhbHNlLFxyXG4gICAgc2VhcmNoYWJsZTogZmFsc2UsXHJcbiAgICBhbGlnbjogQWxpZ25YLkNFTlRFUixcclxuICAgIGdyaWRTcGFjZTogJ3ZhcigtLXRoLWhlaWdodCknLFxyXG4gICAgLi4ucHJvcHNcclxuICB9XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgdGV4dENvbHVtbiA9IDxUPihwcm9wczogUGFydGlhbENvbHVtbjxULCBUZXh0UHJvcHM+KTogQ29sdW1uPFRleHRQcm9wcywgVD4gID0+IGNvbHVtbkZuKHsgXHJcbiAgICBnZXRWYWx1ZTogKHByb3BzOiBUKSA9PiAnJyxcclxuICAgIGhlYWRlcjogIGNvbXB1dGVkKCgpID0+ICdUZXh0JyksXHJcbiAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgIHNlYXJjaGFibGU6IHRydWUsXHJcbiAgICBhbGlnbjogQWxpZ25YLkxFRlQsXHJcbiAgICBncmlkU3BhY2U6ICdhdXRvJyxcclxuICAgIG9uQ2xpY2s6IGZhbHNlLFxyXG4gICAgZWRpdENvbXBvbmVudDogbWFya1JhdyhPdmVybGF5VGV4dEZpZWxkKSxcclxuICAgIC4uLnByb3BzLFxyXG4gICAgdHlwZTogJ3RleHQnLFxyXG4gICAgY29tcG9uZW50OiBtYXJrUmF3KFRleHQpLFxyXG4gIH1cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBudW1iZXJDb2x1bW4gPSA8VD4ocHJvcHM6IFBhcnRpYWxDb2x1bW48VCwgTnVtYmVyUHJvcHM+KTogQ29sdW1uPE51bWJlclByb3BzLCBUPiAgPT4gY29sdW1uRm4oe1xyXG4gICAgZ2V0VmFsdWU6IChwcm9wczogVCkgPT4gdW5kZWZpbmVkLFxyXG4gICAgaGVhZGVyOiAgY29tcHV0ZWQoKCkgPT4gJ051bWJlcicpLFxyXG4gICAgc29ydGFibGU6IHRydWUsXHJcbiAgICBzZWFyY2hhYmxlOiB0cnVlLFxyXG4gICAgYWxpZ246IEFsaWduWC5SSUdIVCxcclxuICAgIGdyaWRTcGFjZTogJ21pbi1jb250ZW50JyxcclxuICAgIG9uQ2xpY2s6IGZhbHNlLFxyXG4gICAgZWRpdENvbXBvbmVudDogbWFya1JhdyhPdmVybGF5TnVtYmVyRmllbGQpLFxyXG4gICAgLi4ucHJvcHMsXHJcbiAgICB0eXBlOiAnbnVtYmVyJyxcclxuICAgIGNvbXBvbmVudDogbWFya1JhdyhOdW1iZXJDb21wb25lbnQpLFxyXG4gIH0pXHJcbiAgXHJcbmV4cG9ydCBjb25zdCBkYXRlQ29sdW1uID0gPFQ+KHByb3BzOiBQYXJ0aWFsQ29sdW1uPFQsIERhdGVQcm9wcz4pOiBDb2x1bW48RGF0ZVByb3BzLCBUPiAgPT4gY29sdW1uRm4oe1xyXG4gICAgZ2V0VmFsdWU6IChwcm9wczogVCkgPT4gdW5kZWZpbmVkLFxyXG4gICAgaGVhZGVyOiAgY29tcHV0ZWQoKCkgPT4gJ0RhdGUnKSxcclxuICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgc2VhcmNoYWJsZTogdHJ1ZSxcclxuICAgIGFsaWduOiBBbGlnblguQ0VOVEVSLFxyXG4gICAgZ3JpZFNwYWNlOiAnbWluLWNvbnRlbnQnLFxyXG4gICAgb25DbGljazogZmFsc2UsXHJcbiAgICBlZGl0Q29tcG9uZW50OiBtYXJrUmF3KE92ZXJsYXlEYXRlRmllbGQpLFxyXG4gICAgLi4ucHJvcHMsXHJcbiAgICB0eXBlOiAnZGF0ZScsXHJcbiAgICBjb21wb25lbnQ6IG1hcmtSYXcoRGF0ZUNvbXBvbmVudCksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNoaXBDb2x1bW4gPSA8VD4ocHJvcHM6IFBhcnRpYWxDb2x1bW48VCwgQ2hpcFByb3BzPik6IENvbHVtbjxDaGlwUHJvcHMsIFQ+ICA9PiBjb2x1bW5Gbih7ICBcclxuICAgIGdldFZhbHVlOiAocHJvcHM6IFQpID0+IHVuZGVmaW5lZCxcclxuICAgIGhlYWRlcjogY29tcHV0ZWQoKCkgPT4gJ0NoaXAnKSxcclxuICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgc2VhcmNoYWJsZTogdHJ1ZSxcclxuICAgIGFsaWduOiBBbGlnblguQ0VOVEVSLFxyXG4gICAgZ3JpZFNwYWNlOiAnbWluLWNvbnRlbnQnLFxyXG4gICAgb25DbGljazogZmFsc2UsXHJcbiAgICAuLi5wcm9wcyxcclxuICAgIHR5cGU6ICdjaGlwJyxcclxuICAgIGNvbXBvbmVudDogbWFya1JhdyhDaGlwKSxcclxuICB9KTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb250ZXh0QnV0dG9uQ29sdW1uID0gPFQ+KHByb3BzOiBQYXJ0aWFsQ29sdW1uPFQsIENvbnRleHRCdXR0b25Qcm9wcz4pOiBDb2x1bW48Q29udGV4dEJ1dHRvblByb3BzLCBUPiAgPT4gY29sdW1uRm4oeyBcclxuICAgIGNsYXNzZXM6ICdidXR0b24tY2VsbCcsXHJcbiAgICBnZXRWYWx1ZTogKHByb3BzOiBUKSA9PiB1bmRlZmluZWQsXHJcbiAgICBoZWFkZXI6IGNvbXB1dGVkKCgpID0+ICcnKSxcclxuICAgIHNvcnRhYmxlOiBmYWxzZSxcclxuICAgIHNlYXJjaGFibGU6IGZhbHNlLFxyXG4gICAgYWxpZ246IEFsaWduWC5DRU5URVIsXHJcbiAgICBncmlkU3BhY2U6ICd2YXIoLS10aC1oZWlnaHQpJyxcclxuICAgIGVkaXRDb21wb25lbnQ6IG1hcmtSYXcoQ29udGV4dE1lbnUpLFxyXG4gICAgLi4ucHJvcHMsXHJcbiAgICBvbkNsaWNrOiBmYWxzZSxcclxuICAgIHR5cGU6ICdjb250ZXh0LWJ1dHRvbicsXHJcbiAgICBjb21wb25lbnQ6IG1hcmtSYXcoQ29udGV4dEJ1dHRvbiksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZUNvbHVtbiA9IDxULCBTPih0eXBlOiBDb2x1bW48Q29tbW9uUHJvcHMsIFQ+Wyd0eXBlJ10sIHByb3BzOiBDb2x1bW48Q29tbW9uUHJvcHMsIFQ+KSA9PiB7XHJcbiAgaWYgKHR5cGUgPT09ICdmb2xkJykgcmV0dXJuIGZvbGRDb2x1bW4ocHJvcHMgYXMgQ29sdW1uPEZvbGRQcm9wcywgVD4gJiB7IHN1YlJvd3M6IFN1YlRhYmxlPFM+IH0pXHJcbiAgaWYgKHR5cGUgPT09ICdjaGVja2JveCcpIHJldHVybiBjaGVja2JveENvbHVtbihwcm9wcyBhcyBDb2x1bW48Q2hlY2tib3hQcm9wcywgVD4pXHJcbiAgaWYgKHR5cGUgPT09ICd0ZXh0JykgdGV4dENvbHVtbihwcm9wcyBhcyBDb2x1bW48VGV4dFByb3BzLCBUPik7XHJcbiAgaWYgKHR5cGUgPT09ICdudW1iZXInKSBudW1iZXJDb2x1bW4ocHJvcHMgYXMgQ29sdW1uPE51bWJlclByb3BzLCBUPik7XHJcbiAgaWYgKHR5cGUgPT09ICdkYXRlJykgZGF0ZUNvbHVtbihwcm9wcyBhcyBDb2x1bW48RGF0ZVByb3BzLCBUPik7XHJcbiAgaWYgKHR5cGUgPT09ICdjaGlwJykgY2hpcENvbHVtbihwcm9wcyBhcyBDb2x1bW48Q2hpcFByb3BzLCBUPik7XHJcbiAgaWYgKHR5cGUgPT09ICdjb250ZXh0LWJ1dHRvbicpICByZXR1cm4gY29udGV4dEJ1dHRvbkNvbHVtbihwcm9wcyBhcyBDb2x1bW48Q29udGV4dEJ1dHRvblByb3BzLCBUPilcclxufVxyXG4iXSwibmFtZXMiOlsiQWxpZ25YIiwiSW5wdXRUeXBlIiwiSW5wdXRTdGF0dXMiLCJTb3J0aW5nRGlyZWN0aW9uIiwiU29ydFR5cGUiLCJUcmFuc2l0aW9uVHlwZSIsIkJhc2VDZWxsIiwiSW5wdXRDZWxsVHlwZSIsIkluamVjdG9yIiwic29ydFJvd3MiLCJhY3RpdmUiLCJsb2NhbGUiLCJjb2x1bW5zIiwicm93cyIsImNvbnRyb2wiLCJpbmRleCIsImMiLCJhIiwiYiIsInIiLCJzb3J0Iiwib3B0aW9ucyIsImluaXQxIiwiX2EiLCJpbml0MiIsImRpciIsImluaXRpYWxTb3J0Iiwic3ViUm93cyIsInN1YkNvbHVtbnMiLCJzdWJPcHRpb25zIiwicHJvcHMiLCJfX3Byb3BzIiwidXBkYXRlUGFnZXMiLCJpbmplY3QiLCJjb2x1bW5BY3RpdmUiLCJpZCIsImRpcmVjdGlvbiIsImNvbXB1dGVkIiwib25DbGljayIsImV2IiwiX3NmY19yZW5kZXIiLCJfY3R4IiwiX2NhY2hlIiwiX29wZW5CbG9jayIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfaG9pc3RlZF8xIiwiaW5wdXRPdmVybGF5U2VydmljZSIsImNvbXBvbmVudFByb3BzIiwicmVmIiwicGFyZW50IiwidHJhbnNpdGlvbiIsImRhdGEiLCJfdHJhbnNpdGlvbiIsInBsYWNlTWVudSIsInAiLCJwYWRkaW5nIiwiYWxpZ24iLCJ4IiwieSIsImdldEZvY3VzZWRFbGVtZW50Iiwic2V0Rm9jdXNlZEVsZW1lbnQiLCJlbGVtZW50IiwiZ2V0Qm91bmRpbmdCb3giLCJ1aWQiLCJmb3JtYXREYXRlIiwiZGF0ZSIsImdldENzc1ZhciIsInZhcmlhYmxlIiwiaGV4VG9SZ2IiLCJoZXgiLCJyZXN1bHQiLCJsdW1lbiIsImciLCJkZWJvdW5jZSIsImZ1bmMiLCJkZWxheSIsInRpbWVyIiwiYXJncyIsImZvY3VzQWRqY2VudEVsZW1lbnQiLCJ0cmF2ZWxJbmRleCIsImZvY3VzYWJsZUVsZW1lbnRzIiwibmV4dEluZGV4IiwiaGFzU3ViU3RvcmUiLCJjZWxsUmVmIiwiX2IiLCJfYyIsIl9kIiwiX2UiLCJfZyIsIl9mIiwiX2giLCJhY2NvcmRpb25pemVyIiwidGFibGUiLCJtaW5pbWl6ZWQiLCJidWZmZXIiLCJ0aW1lIiwiYnJlYWtXaWR0aHMiLCJhY2NvcmRpb24iLCJzY3JvbGxXaWR0aCIsInRhYmxlV2lkdGgiLCJ1cGRhdGVBY2NvcmRpb24iLCJlbnRyeSIsInNldHVwIiwibm9kZSIsImN1cnJlbnRDb2x1bW4iLCJjaGVja0lmU2hvdWxkTWluaXplIiwibG9vcCIsInByaW9zIiwiaGlkZGVuIiwibmV4dEF2YWlsYWJsZUNvbHVtbiIsImFjY29yZGlvbkNvbHVtbiIsImFkZCIsImNoZWNrSWZBZGRCYWNrIiwibGFzdE1pbmltaXplZENvbHVtbiIsInJlbW92ZSIsIm9ic2VydmVyIiwiZW50cmllcyIsIm9uTW91bnRlZCIsIm9uVW5tb3VudGVkIiwic3ViU3RvcmVzIiwiY3JlYXRlQ2VsbElkIiwiaXNTdWJUYWJsZSIsImhhc1N1YnMiLCJpc01vYmlsZSIsImdyaWQiLCJzdWJyb3ciLCJlbXB0eVJvdyIsInZpc2libGVSb3dzIiwidmlzaWJsZSIsImlzUmVmIiwiYWN0aW9uUm93Q2xpY2siLCJyb3dJZCIsInJvd0RhdGEiLCJ0cnVua2F0aW9uIiwiZ29Ub0ZpcnN0TGFzdCIsImdvVG9QcmV2TmV4dCIsInBhZ2luYXRpb25Hcm91cCIsInBhZ2VzIiwiZ290b1BhZ2UiLCJwYWdlSW5kZXgiLCJwYWdlIiwicGFnZVNlbGVjdGlvbiIsImwiLCJpIiwicmFuZ2UiLCJmaXJzdCIsImxhc3QiLCJhcnIiLCJ3aW5SZXNpemUiLCJjYWxsYmFjayIsInVwZGF0ZSIsImV2ZW50IiwiZW1pdCIsIl9fZW1pdCIsIm92ZXJsYXlDb21wb25lbnQiLCJvdmVybGF5Q29tcG9uZW50UHJvcHMiLCJjZWxsVmFsdWUiLCJ3YXRjaCIsInBvc2l0aW9uIiwidXBkYXRlVmFsdWUiLCJjb2xJZCIsInRocm90dGxlQ2xvc2UiLCJjbG9zZSIsInJlYWR5IiwidGFibGVTZXJ2aWNlIiwibW91bnRlZCIsInJhd0RhdGEiLCJkYXRhc2V0IiwiZCIsInRhYmxlSWQiLCJ2YWx1ZSIsInN1YlRhYmxlIiwic3ViRGF0YSIsIm1hcHBlZERhdGEiLCJzdWJzdG9yZSIsInVwZGF0ZVJvd3NGbiIsImdldFRvcExldmVsVmlzaWJsZVJvd0lkcyIsInN1YlRhYmxlUm93cyIsInQiLCJyb3dJZHMiLCJyb3dzUGVyUGFnZSIsIm51bWJlck9mUGFnZXMiLCJzIiwicnVuVmFsaWRhdGlvbiIsInZhbGlkYXRpb24iLCJzZWFyY2hGbiIsImZpbHRlciIsInNlYXJjaGFibGVDb2x1bW5zIiwicm93c0FkZGVkIiwicm93Iiwic2VhcmNoRm4kMSIsInNyIiwic2VhcmNoIiwic2VhcmNoVmFsdWUiLCJzZWFyY2hmaWVsZCIsInNlYXJjaFVwZGF0ZSIsInVzZVRhYmxlU2VydmljZSIsImNvbHVtbklkIiwiZGl2aWRlQ2VsbElkIiwiY2VsbElkIiwic3BsaXQiLCJnZXRSb3ciLCJnZXRDb2x1bW4iLCJnZXRDZWxsIiwiZ2V0Q29sdW1uSW5kZXgiLCJjb2wiLCJnZXRSb3dJbmRleCIsImdldEFjdGl2ZUNvbHVtbiIsImNoZWNrUm93IiwidG9nZ2xlRm9sZCIsInN1YlRhYmxlSXNPcGVuIiwiaGFzU3ViUm93cyIsImdldFN1YlJvd3MiLCJyZWFjdGl2ZSIsIm9kIiwicHJvdmlkZSIsInRleHRDb2xvciIsImZvcm1hdGVkVmFsdWUiLCJoYXNTdWJSb3dzQm9vbCIsImlzT3BlbiIsIm9uQ2hhbmdlIiwiY2hlY2tlZCIsIm1lbnVSZWYiLCJvcGVuIiwicHJldmlvdXNGb2N1c2VkRWxlbWVudCIsImluaXRpYWxWYWx1ZSIsImlucHV0RWxlbWVudCIsIm1vZGVsVmFsdWUiLCJyZXR1cm5FbGVtZW50VmFsdWUiLCJhYm9ydFVwZGF0ZSIsInVud2F0Y2giLCJ0YWIiLCJlcnJvciIsImNoZWNrWWVhciIsInllYXIiLCJ5ZWFyRm5zIiwibiIsImdldEVsZW1BbmRWYWx1ZSIsInJlbW92ZUxhc3QiLCJiYWNrU3BhY2UiLCJlbnRlciIsIm9uRXJyb3IiLCJvbklucHV0IiwidiIsInJlc29sdmUiLCJ0YWJrZXkiLCJibHVyIiwic2VsZWN0IiwibyIsImNoaWxkIiwicHciLCJwaCIsImN3IiwiY29sdW1uRm4iLCJmb2xkQ29sdW1uIiwibWFya1JhdyIsIkZvbGQiLCJjaGVja2JveENvbHVtbiIsIkNoZWNrYm94IiwidGV4dENvbHVtbiIsIk92ZXJsYXlUZXh0RmllbGQiLCJUZXh0IiwibnVtYmVyQ29sdW1uIiwiT3ZlcmxheU51bWJlckZpZWxkIiwiTnVtYmVyQ29tcG9uZW50IiwiZGF0ZUNvbHVtbiIsIk92ZXJsYXlEYXRlRmllbGQiLCJEYXRlQ29tcG9uZW50IiwiY2hpcENvbHVtbiIsIkNoaXAiLCJjb250ZXh0QnV0dG9uQ29sdW1uIiwiQ29udGV4dE1lbnUiLCJDb250ZXh0QnV0dG9uIl0sIm1hcHBpbmdzIjoiO0FBQVksSUFBQUEsc0JBQUFBLE9BQ1ZBLEVBQUEsT0FBTyxRQUNQQSxFQUFBLFNBQVMsVUFDVEEsRUFBQSxRQUFRLFNBSEVBLElBQUFBLEtBQUEsQ0FBQSxDQUFBLEdBTUFDLHVCQUFBQSxPQUNWQSxFQUFBLE9BQU8sUUFDUEEsRUFBQSxTQUFTLFVBQ1RBLEVBQUEsU0FBUyxVQUNUQSxFQUFBLE9BQU8sUUFDUEEsRUFBQSxRQUFRLFNBQ1JBLEVBQUEsTUFBTSxPQUNOQSxFQUFBLFNBQVMsVUFDVEEsRUFBQSxjQUFjLGdCQVJKQSxJQUFBQSxNQUFBLENBQUEsQ0FB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
