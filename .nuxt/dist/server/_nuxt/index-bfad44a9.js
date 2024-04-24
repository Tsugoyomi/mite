import { computed, ref, shallowRef, watchEffect, watch, nextTick, createVNode, mergeProps, Fragment, withDirectives, resolveDirective, vModelText, defineComponent, withCtx, unref, toDisplayString, createTextVNode, openBlock, createBlock, createCommentVNode, renderList, isRef, withModifiers, useSSRContext } from "vue";
import "vue-router";
import "hookable";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import draggable from "vuedraggable";
import { V as VRow, a as VCol } from "./VRow-1c38f8b7.js";
import { V as VCard, b as VCardText, a as VCardTitle } from "./VCard-42565dd5.js";
import { I as Intersect, A as VIcon } from "./VAvatar-efb97b93.js";
import { V as VBtn } from "./VBtn-991b44d5.js";
import { V as VDialog } from "./VDialog-76d504ed.js";
import { a as makeVInputProps, b as makeVFieldProps, u as useFocus, f as forwardRefs, d as VInput, e as filterFieldProps, g as VField, h as VCounter, V as VTextField } from "./VTextField-97fb35c9.js";
import { V as VForm } from "./VForm-0992621c.js";
import { p as propsFactory, g as genericComponent, h as useProxiedModel, a as useRender, n as convertToUnit, s as filterInputAttrs, t as callEvent, N as clamp } from "../server.mjs";
import { V as VDivider } from "./VDivider-3859fda3.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
/* empty css                */import "./index-d9ac0006.js";
import "./VOverlay-3b671092.js";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "@vue/devtools-api";
import "h3";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "ufo";
import "defu";
const VTextarea$1 = "";
const makeVTextareaProps = propsFactory({
  autoGrow: Boolean,
  autofocus: Boolean,
  counter: [Boolean, Number, String],
  counterValue: Function,
  prefix: String,
  placeholder: String,
  persistentPlaceholder: Boolean,
  persistentCounter: Boolean,
  noResize: Boolean,
  rows: {
    type: [Number, String],
    default: 5,
    validator: (v) => !isNaN(parseFloat(v))
  },
  maxRows: {
    type: [Number, String],
    validator: (v) => !isNaN(parseFloat(v))
  },
  suffix: String,
  modelModifiers: Object,
  ...makeVInputProps(),
  ...makeVFieldProps()
}, "VTextarea");
const VTextarea = genericComponent()({
  name: "VTextarea",
  directives: {
    Intersect
  },
  inheritAttrs: false,
  props: makeVTextareaProps(),
  emits: {
    "click:control": (e) => true,
    "mousedown:control": (e) => true,
    "update:focused": (focused) => true,
    "update:modelValue": (val) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const model = useProxiedModel(props, "modelValue");
    const {
      isFocused,
      focus,
      blur
    } = useFocus(props);
    const counterValue = computed(() => {
      return typeof props.counterValue === "function" ? props.counterValue(model.value) : (model.value || "").toString().length;
    });
    const max = computed(() => {
      if (attrs.maxlength)
        return attrs.maxlength;
      if (!props.counter || typeof props.counter !== "number" && typeof props.counter !== "string")
        return void 0;
      return props.counter;
    });
    function onIntersect(isIntersecting, entries) {
      var _a, _b;
      if (!props.autofocus || !isIntersecting)
        return;
      (_b = (_a = entries[0].target) == null ? void 0 : _a.focus) == null ? void 0 : _b.call(_a);
    }
    const vInputRef = ref();
    const vFieldRef = ref();
    const controlHeight = shallowRef("");
    const textareaRef = ref();
    const isActive = computed(() => props.persistentPlaceholder || isFocused.value || props.active);
    function onFocus() {
      var _a;
      if (textareaRef.value !== document.activeElement) {
        (_a = textareaRef.value) == null ? void 0 : _a.focus();
      }
      if (!isFocused.value)
        focus();
    }
    function onControlClick(e) {
      onFocus();
      emit("click:control", e);
    }
    function onControlMousedown(e) {
      emit("mousedown:control", e);
    }
    function onClear(e) {
      e.stopPropagation();
      onFocus();
      nextTick(() => {
        model.value = "";
        callEvent(props["onClick:clear"], e);
      });
    }
    function onInput(e) {
      var _a;
      const el = e.target;
      model.value = el.value;
      if ((_a = props.modelModifiers) == null ? void 0 : _a.trim) {
        const caretPosition = [el.selectionStart, el.selectionEnd];
        nextTick(() => {
          el.selectionStart = caretPosition[0];
          el.selectionEnd = caretPosition[1];
        });
      }
    }
    const sizerRef = ref();
    const rows = ref(+props.rows);
    const isPlainOrUnderlined = computed(() => ["plain", "underlined"].includes(props.variant));
    watchEffect(() => {
      if (!props.autoGrow)
        rows.value = +props.rows;
    });
    function calculateInputHeight() {
      if (!props.autoGrow)
        return;
      nextTick(() => {
        if (!sizerRef.value || !vFieldRef.value)
          return;
        const style = getComputedStyle(sizerRef.value);
        const fieldStyle = getComputedStyle(vFieldRef.value.$el);
        const padding = parseFloat(style.getPropertyValue("--v-field-padding-top")) + parseFloat(style.getPropertyValue("--v-input-padding-top")) + parseFloat(style.getPropertyValue("--v-field-padding-bottom"));
        const height = sizerRef.value.scrollHeight;
        const lineHeight = parseFloat(style.lineHeight);
        const minHeight = Math.max(parseFloat(props.rows) * lineHeight + padding, parseFloat(fieldStyle.getPropertyValue("--v-input-control-height")));
        const maxHeight = parseFloat(props.maxRows) * lineHeight + padding || Infinity;
        const newHeight = clamp(height ?? 0, minHeight, maxHeight);
        rows.value = Math.floor((newHeight - padding) / lineHeight);
        controlHeight.value = convertToUnit(newHeight);
      });
    }
    watch(model, calculateInputHeight);
    watch(() => props.rows, calculateInputHeight);
    watch(() => props.maxRows, calculateInputHeight);
    watch(() => props.density, calculateInputHeight);
    let observer;
    watch(sizerRef, (val) => {
      if (val) {
        observer = new ResizeObserver(calculateInputHeight);
        observer.observe(sizerRef.value);
      } else {
        observer == null ? void 0 : observer.disconnect();
      }
    });
    useRender(() => {
      const hasCounter = !!(slots.counter || props.counter || props.counterValue);
      const hasDetails = !!(hasCounter || slots.details);
      const [rootAttrs, inputAttrs] = filterInputAttrs(attrs);
      const {
        modelValue: _,
        ...inputProps
      } = VInput.filterProps(props);
      const fieldProps = filterFieldProps(props);
      return createVNode(VInput, mergeProps({
        "ref": vInputRef,
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "class": ["v-textarea v-text-field", {
          "v-textarea--prefixed": props.prefix,
          "v-textarea--suffixed": props.suffix,
          "v-text-field--prefixed": props.prefix,
          "v-text-field--suffixed": props.suffix,
          "v-textarea--auto-grow": props.autoGrow,
          "v-textarea--no-resize": props.noResize || props.autoGrow,
          "v-input--plain-underlined": isPlainOrUnderlined.value
        }, props.class],
        "style": props.style
      }, rootAttrs, inputProps, {
        "centerAffix": rows.value === 1 && !isPlainOrUnderlined.value,
        "focused": isFocused.value
      }), {
        ...slots,
        default: (_ref2) => {
          let {
            id,
            isDisabled,
            isDirty,
            isReadonly,
            isValid
          } = _ref2;
          return createVNode(VField, mergeProps({
            "ref": vFieldRef,
            "style": {
              "--v-textarea-control-height": controlHeight.value
            },
            "onClick": onControlClick,
            "onMousedown": onControlMousedown,
            "onClick:clear": onClear,
            "onClick:prependInner": props["onClick:prependInner"],
            "onClick:appendInner": props["onClick:appendInner"]
          }, fieldProps, {
            "id": id.value,
            "active": isActive.value || isDirty.value,
            "centerAffix": rows.value === 1 && !isPlainOrUnderlined.value,
            "dirty": isDirty.value || props.dirty,
            "disabled": isDisabled.value,
            "focused": isFocused.value,
            "error": isValid.value === false
          }), {
            ...slots,
            default: (_ref3) => {
              let {
                props: {
                  class: fieldClass,
                  ...slotProps
                }
              } = _ref3;
              return createVNode(Fragment, null, [props.prefix && createVNode("span", {
                "class": "v-text-field__prefix"
              }, [props.prefix]), withDirectives(createVNode("textarea", mergeProps({
                "ref": textareaRef,
                "class": fieldClass,
                "value": model.value,
                "onInput": onInput,
                "autofocus": props.autofocus,
                "readonly": isReadonly.value,
                "disabled": isDisabled.value,
                "placeholder": props.placeholder,
                "rows": props.rows,
                "name": props.name,
                "onFocus": onFocus,
                "onBlur": blur
              }, slotProps, inputAttrs), null), [[resolveDirective("intersect"), {
                handler: onIntersect
              }, null, {
                once: true
              }]]), props.autoGrow && withDirectives(createVNode("textarea", {
                "class": [fieldClass, "v-textarea__sizer"],
                "id": `${slotProps.id}-sizer`,
                "onUpdate:modelValue": ($event) => model.value = $event,
                "ref": sizerRef,
                "readonly": true,
                "aria-hidden": "true"
              }, null), [[vModelText, model.value]]), props.suffix && createVNode("span", {
                "class": "v-text-field__suffix"
              }, [props.suffix])]);
            }
          });
        },
        details: hasDetails ? (slotProps) => {
          var _a;
          return createVNode(Fragment, null, [(_a = slots.details) == null ? void 0 : _a.call(slots, slotProps), hasCounter && createVNode(Fragment, null, [createVNode("span", null, null), createVNode(VCounter, {
            "active": props.persistentCounter || isFocused.value,
            "value": counterValue.value,
            "max": max.value
          }, slots.counter)])]);
        } : void 0
      });
    });
    return forwardRefs({}, vInputRef, vFieldRef, textareaRef);
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    ref(false);
    const dragOptions = ref({
      animation: 250,
      group: "people",
      disabled: false,
      ghostClass: "ghost"
    });
    const board = ref([
      { title: "Pending", list: [] },
      { title: "In Progress", list: [] },
      { title: "Ready For Testing", list: [] },
      { title: "Testing", list: [] },
      { title: "Review", list: [] },
      { title: "Done", list: [] }
    ]);
    const dialogCard = ref(false);
    const tempCardId = ref(0);
    const addCard = (e) => {
      const idBoard = e.srcElement.id && e.srcElement.id !== "" ? e.srcElement.id : e.srcElement.offsetParent.id;
      const split = idBoard.split("-");
      tempCardId.value = parseInt(split[1]);
      dialogCard.value = true;
    };
    const reorder = (e) => {
    };
    const toCreateCard = (e) => {
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "containerz w-100 py-4",
        style: { "position": "relative" }
      }, _attrs))} data-v-0d10414f>`);
      _push(ssrRenderComponent(VRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(board), (item, i) => {
              _push2(ssrRenderComponent(VCol, {
                cols: "12",
                md: "2",
                key: i
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VRow, { class: "bg-primary text-center" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCol, { cols: "12" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<h5 class="mb-0" data-v-0d10414f${_scopeId4}>${ssrInterpolate(item.title)}</h5>`);
                              } else {
                                return [
                                  createVNode("h5", { class: "mb-0" }, toDisplayString(item.title), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VCol, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode("h5", { class: "mb-0" }, toDisplayString(item.title), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VRow, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCol, { cols: "12" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(draggable), mergeProps({
                                  list: item.list,
                                  group: "tsugoyomi"
                                }, unref(dragOptions), {
                                  "item-key": "title",
                                  onChange: reorder
                                }), {
                                  item: withCtx(({ element }, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div data-v-0d10414f${_scopeId5}>`);
                                      _push6(ssrRenderComponent(VCard, { class: "elevation-6 card-board mb-2" }, {
                                        default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VCardText, { class: "pt-3" }, {
                                              default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<h4 class="mb-1" data-v-0d10414f${_scopeId7}>${ssrInterpolate(element.name)}</h4><div class="d-flex" data-v-0d10414f${_scopeId7}>`);
                                                  if (element.dueDate) {
                                                    _push8(`<div class="due-date-sign bg-success" data-v-0d10414f${_scopeId7}>`);
                                                    _push8(ssrRenderComponent(VIcon, null, {
                                                      default: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(`mdi-clock-time-nine-outline`);
                                                        } else {
                                                          return [
                                                            createTextVNode("mdi-clock-time-nine-outline")
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                    _push8(`<span class="ml-1" data-v-0d10414f${_scopeId7}>May 26, 2024</span></div>`);
                                                  } else {
                                                    _push8(`<!---->`);
                                                  }
                                                  if (element.attachment) {
                                                    _push8(`<div class="attachment-sign ml-1" data-v-0d10414f${_scopeId7}>`);
                                                    _push8(ssrRenderComponent(VIcon, null, {
                                                      default: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(`mdi-paperclip`);
                                                        } else {
                                                          return [
                                                            createTextVNode("mdi-paperclip")
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                    _push8(`<span data-v-0d10414f${_scopeId7}>1</span></div>`);
                                                  } else {
                                                    _push8(`<!---->`);
                                                  }
                                                  _push8(`</div>`);
                                                } else {
                                                  return [
                                                    createVNode("h4", { class: "mb-1" }, toDisplayString(element.name), 1),
                                                    createVNode("div", { class: "d-flex" }, [
                                                      element.dueDate ? (openBlock(), createBlock("div", {
                                                        key: 0,
                                                        class: "due-date-sign bg-success"
                                                      }, [
                                                        createVNode(VIcon, null, {
                                                          default: withCtx(() => [
                                                            createTextVNode("mdi-clock-time-nine-outline")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode("span", { class: "ml-1" }, "May 26, 2024")
                                                      ])) : createCommentVNode("", true),
                                                      element.attachment ? (openBlock(), createBlock("div", {
                                                        key: 1,
                                                        class: "attachment-sign ml-1"
                                                      }, [
                                                        createVNode(VIcon, null, {
                                                          default: withCtx(() => [
                                                            createTextVNode("mdi-paperclip")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode("span", null, "1")
                                                      ])) : createCommentVNode("", true)
                                                    ])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VCardText, { class: "pt-3" }, {
                                                default: withCtx(() => [
                                                  createVNode("h4", { class: "mb-1" }, toDisplayString(element.name), 1),
                                                  createVNode("div", { class: "d-flex" }, [
                                                    element.dueDate ? (openBlock(), createBlock("div", {
                                                      key: 0,
                                                      class: "due-date-sign bg-success"
                                                    }, [
                                                      createVNode(VIcon, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode("mdi-clock-time-nine-outline")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode("span", { class: "ml-1" }, "May 26, 2024")
                                                    ])) : createCommentVNode("", true),
                                                    element.attachment ? (openBlock(), createBlock("div", {
                                                      key: 1,
                                                      class: "attachment-sign ml-1"
                                                    }, [
                                                      createVNode(VIcon, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode("mdi-paperclip")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode("span", null, "1")
                                                    ])) : createCommentVNode("", true)
                                                  ])
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(`</div>`);
                                    } else {
                                      return [
                                        createVNode("div", null, [
                                          createVNode(VCard, { class: "elevation-6 card-board mb-2" }, {
                                            default: withCtx(() => [
                                              createVNode(VCardText, { class: "pt-3" }, {
                                                default: withCtx(() => [
                                                  createVNode("h4", { class: "mb-1" }, toDisplayString(element.name), 1),
                                                  createVNode("div", { class: "d-flex" }, [
                                                    element.dueDate ? (openBlock(), createBlock("div", {
                                                      key: 0,
                                                      class: "due-date-sign bg-success"
                                                    }, [
                                                      createVNode(VIcon, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode("mdi-clock-time-nine-outline")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode("span", { class: "ml-1" }, "May 26, 2024")
                                                    ])) : createCommentVNode("", true),
                                                    element.attachment ? (openBlock(), createBlock("div", {
                                                      key: 1,
                                                      class: "attachment-sign ml-1"
                                                    }, [
                                                      createVNode(VIcon, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode("mdi-paperclip")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode("span", null, "1")
                                                    ])) : createCommentVNode("", true)
                                                  ])
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ])
                                      ];
                                    }
                                  }),
                                  footer: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VBtn, {
                                        block: "",
                                        variant: "outlined",
                                        id: `add-${i}`,
                                        role: "group",
                                        key: "footer",
                                        color: "primary",
                                        density: "compact",
                                        class: "mt-2",
                                        onClick: addCard
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VIcon, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`mdi-plus`);
                                                } else {
                                                  return [
                                                    createTextVNode("mdi-plus")
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(` Add a card `);
                                          } else {
                                            return [
                                              createVNode(VIcon, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-plus")
                                                ]),
                                                _: 1
                                              }),
                                              createTextVNode(" Add a card ")
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VBtn, {
                                          block: "",
                                          variant: "outlined",
                                          id: `add-${i}`,
                                          role: "group",
                                          key: "footer",
                                          color: "primary",
                                          density: "compact",
                                          class: "mt-2",
                                          onClick: addCard
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, null, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-plus")
                                              ]),
                                              _: 1
                                            }),
                                            createTextVNode(" Add a card ")
                                          ]),
                                          _: 2
                                        }, 1032, ["id"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(draggable), mergeProps({
                                    list: item.list,
                                    group: "tsugoyomi"
                                  }, unref(dragOptions), {
                                    "item-key": "title",
                                    onChange: reorder
                                  }), {
                                    item: withCtx(({ element }) => [
                                      createVNode("div", null, [
                                        createVNode(VCard, { class: "elevation-6 card-board mb-2" }, {
                                          default: withCtx(() => [
                                            createVNode(VCardText, { class: "pt-3" }, {
                                              default: withCtx(() => [
                                                createVNode("h4", { class: "mb-1" }, toDisplayString(element.name), 1),
                                                createVNode("div", { class: "d-flex" }, [
                                                  element.dueDate ? (openBlock(), createBlock("div", {
                                                    key: 0,
                                                    class: "due-date-sign bg-success"
                                                  }, [
                                                    createVNode(VIcon, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode("mdi-clock-time-nine-outline")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode("span", { class: "ml-1" }, "May 26, 2024")
                                                  ])) : createCommentVNode("", true),
                                                  element.attachment ? (openBlock(), createBlock("div", {
                                                    key: 1,
                                                    class: "attachment-sign ml-1"
                                                  }, [
                                                    createVNode(VIcon, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode("mdi-paperclip")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode("span", null, "1")
                                                  ])) : createCommentVNode("", true)
                                                ])
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ])
                                    ]),
                                    footer: withCtx(() => [
                                      createVNode(VBtn, {
                                        block: "",
                                        variant: "outlined",
                                        id: `add-${i}`,
                                        role: "group",
                                        key: "footer",
                                        color: "primary",
                                        density: "compact",
                                        class: "mt-2",
                                        onClick: addCard
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, null, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-plus")
                                            ]),
                                            _: 1
                                          }),
                                          createTextVNode(" Add a card ")
                                        ]),
                                        _: 2
                                      }, 1032, ["id"])
                                    ]),
                                    _: 2
                                  }, 1040, ["list"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VCol, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(unref(draggable), mergeProps({
                                  list: item.list,
                                  group: "tsugoyomi"
                                }, unref(dragOptions), {
                                  "item-key": "title",
                                  onChange: reorder
                                }), {
                                  item: withCtx(({ element }) => [
                                    createVNode("div", null, [
                                      createVNode(VCard, { class: "elevation-6 card-board mb-2" }, {
                                        default: withCtx(() => [
                                          createVNode(VCardText, { class: "pt-3" }, {
                                            default: withCtx(() => [
                                              createVNode("h4", { class: "mb-1" }, toDisplayString(element.name), 1),
                                              createVNode("div", { class: "d-flex" }, [
                                                element.dueDate ? (openBlock(), createBlock("div", {
                                                  key: 0,
                                                  class: "due-date-sign bg-success"
                                                }, [
                                                  createVNode(VIcon, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-clock-time-nine-outline")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode("span", { class: "ml-1" }, "May 26, 2024")
                                                ])) : createCommentVNode("", true),
                                                element.attachment ? (openBlock(), createBlock("div", {
                                                  key: 1,
                                                  class: "attachment-sign ml-1"
                                                }, [
                                                  createVNode(VIcon, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-paperclip")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode("span", null, "1")
                                                ])) : createCommentVNode("", true)
                                              ])
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ])
                                  ]),
                                  footer: withCtx(() => [
                                    createVNode(VBtn, {
                                      block: "",
                                      variant: "outlined",
                                      id: `add-${i}`,
                                      role: "group",
                                      key: "footer",
                                      color: "primary",
                                      density: "compact",
                                      class: "mt-2",
                                      onClick: addCard
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, null, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-plus")
                                          ]),
                                          _: 1
                                        }),
                                        createTextVNode(" Add a card ")
                                      ]),
                                      _: 2
                                    }, 1032, ["id"])
                                  ]),
                                  _: 2
                                }, 1040, ["list"])
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VRow, { class: "bg-primary text-center" }, {
                        default: withCtx(() => [
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode("h5", { class: "mb-0" }, toDisplayString(item.title), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(unref(draggable), mergeProps({
                                list: item.list,
                                group: "tsugoyomi"
                              }, unref(dragOptions), {
                                "item-key": "title",
                                onChange: reorder
                              }), {
                                item: withCtx(({ element }) => [
                                  createVNode("div", null, [
                                    createVNode(VCard, { class: "elevation-6 card-board mb-2" }, {
                                      default: withCtx(() => [
                                        createVNode(VCardText, { class: "pt-3" }, {
                                          default: withCtx(() => [
                                            createVNode("h4", { class: "mb-1" }, toDisplayString(element.name), 1),
                                            createVNode("div", { class: "d-flex" }, [
                                              element.dueDate ? (openBlock(), createBlock("div", {
                                                key: 0,
                                                class: "due-date-sign bg-success"
                                              }, [
                                                createVNode(VIcon, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-clock-time-nine-outline")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode("span", { class: "ml-1" }, "May 26, 2024")
                                              ])) : createCommentVNode("", true),
                                              element.attachment ? (openBlock(), createBlock("div", {
                                                key: 1,
                                                class: "attachment-sign ml-1"
                                              }, [
                                                createVNode(VIcon, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-paperclip")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode("span", null, "1")
                                              ])) : createCommentVNode("", true)
                                            ])
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ])
                                ]),
                                footer: withCtx(() => [
                                  createVNode(VBtn, {
                                    block: "",
                                    variant: "outlined",
                                    id: `add-${i}`,
                                    role: "group",
                                    key: "footer",
                                    color: "primary",
                                    density: "compact",
                                    class: "mt-2",
                                    onClick: addCard
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, null, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-plus")
                                        ]),
                                        _: 1
                                      }),
                                      createTextVNode(" Add a card ")
                                    ]),
                                    _: 2
                                  }, 1032, ["id"])
                                ]),
                                _: 2
                              }, 1040, ["list"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(board), (item, i) => {
                return openBlock(), createBlock(VCol, {
                  cols: "12",
                  md: "2",
                  key: i
                }, {
                  default: withCtx(() => [
                    createVNode(VRow, { class: "bg-primary text-center" }, {
                      default: withCtx(() => [
                        createVNode(VCol, { cols: "12" }, {
                          default: withCtx(() => [
                            createVNode("h5", { class: "mb-0" }, toDisplayString(item.title), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        createVNode(VCol, { cols: "12" }, {
                          default: withCtx(() => [
                            createVNode(unref(draggable), mergeProps({
                              list: item.list,
                              group: "tsugoyomi"
                            }, unref(dragOptions), {
                              "item-key": "title",
                              onChange: reorder
                            }), {
                              item: withCtx(({ element }) => [
                                createVNode("div", null, [
                                  createVNode(VCard, { class: "elevation-6 card-board mb-2" }, {
                                    default: withCtx(() => [
                                      createVNode(VCardText, { class: "pt-3" }, {
                                        default: withCtx(() => [
                                          createVNode("h4", { class: "mb-1" }, toDisplayString(element.name), 1),
                                          createVNode("div", { class: "d-flex" }, [
                                            element.dueDate ? (openBlock(), createBlock("div", {
                                              key: 0,
                                              class: "due-date-sign bg-success"
                                            }, [
                                              createVNode(VIcon, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-clock-time-nine-outline")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode("span", { class: "ml-1" }, "May 26, 2024")
                                            ])) : createCommentVNode("", true),
                                            element.attachment ? (openBlock(), createBlock("div", {
                                              key: 1,
                                              class: "attachment-sign ml-1"
                                            }, [
                                              createVNode(VIcon, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-paperclip")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode("span", null, "1")
                                            ])) : createCommentVNode("", true)
                                          ])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ])
                              ]),
                              footer: withCtx(() => [
                                createVNode(VBtn, {
                                  block: "",
                                  variant: "outlined",
                                  id: `add-${i}`,
                                  role: "group",
                                  key: "footer",
                                  color: "primary",
                                  density: "compact",
                                  class: "mt-2",
                                  onClick: addCard
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, null, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-plus")
                                      ]),
                                      _: 1
                                    }),
                                    createTextVNode(" Add a card ")
                                  ]),
                                  _: 2
                                }, 1032, ["id"])
                              ]),
                              _: 2
                            }, 1040, ["list"])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VDialog, {
        modelValue: unref(dialogCard),
        "onUpdate:modelValue": ($event) => isRef(dialogCard) ? dialogCard.value = $event : null,
        transition: "dialog-bottom-transition",
        width: "70%"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, { class: "pl-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          density: "compact",
                          variant: "outline",
                          "prepend-inner-icon": "mdi-archive",
                          "single-line": "",
                          "hide-details": "",
                          class: "mt-3 text-primary"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            density: "compact",
                            variant: "outline",
                            "prepend-inner-icon": "mdi-archive",
                            "single-line": "",
                            "hide-details": "",
                            class: "mt-3 text-primary"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VForm, {
                          ref: "formInput",
                          onSubmit: ($event) => toCreateCard()
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VRow, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCol, { cols: "9" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextarea, {
                                            "auto-grow": "",
                                            label: "Description",
                                            variant: "outlined",
                                            rows: "4",
                                            shaped: ""
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextarea, {
                                              "auto-grow": "",
                                              label: "Description",
                                              variant: "outlined",
                                              rows: "4",
                                              shaped: ""
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, { cols: "3" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCard, { class: "elevation-4 mb-3" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VCardText, { class: "py-2 d-flex card-side-items" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VIcon, { class: "mr-2" }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`mdi-account-clock`);
                                                          } else {
                                                            return [
                                                              createTextVNode("mdi-account-clock")
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(` Due Date `);
                                                    } else {
                                                      return [
                                                        createVNode(VIcon, { class: "mr-2" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("mdi-account-clock")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createTextVNode(" Due Date ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VCardText, { class: "py-2 d-flex card-side-items" }, {
                                                    default: withCtx(() => [
                                                      createVNode(VIcon, { class: "mr-2" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("mdi-account-clock")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createTextVNode(" Due Date ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCard, { class: "elevation-4 mb-3" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VCardText, { class: "py-2 d-flex card-side-items" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VIcon, { class: "mr-2" }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`mdi-paperclip`);
                                                          } else {
                                                            return [
                                                              createTextVNode("mdi-paperclip")
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(` Attachments `);
                                                    } else {
                                                      return [
                                                        createVNode(VIcon, { class: "mr-2" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("mdi-paperclip")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createTextVNode(" Attachments ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VCardText, { class: "py-2 d-flex card-side-items" }, {
                                                    default: withCtx(() => [
                                                      createVNode(VIcon, { class: "mr-2" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("mdi-paperclip")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createTextVNode(" Attachments ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCard, { class: "elevation-4 mb-3" }, {
                                              default: withCtx(() => [
                                                createVNode(VCardText, { class: "py-2 d-flex card-side-items" }, {
                                                  default: withCtx(() => [
                                                    createVNode(VIcon, { class: "mr-2" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("mdi-account-clock")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createTextVNode(" Due Date ")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCard, { class: "elevation-4 mb-3" }, {
                                              default: withCtx(() => [
                                                createVNode(VCardText, { class: "py-2 d-flex card-side-items" }, {
                                                  default: withCtx(() => [
                                                    createVNode(VIcon, { class: "mr-2" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("mdi-paperclip")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createTextVNode(" Attachments ")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCol, { cols: "9" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextarea, {
                                            "auto-grow": "",
                                            label: "Description",
                                            variant: "outlined",
                                            rows: "4",
                                            shaped: ""
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "3" }, {
                                        default: withCtx(() => [
                                          createVNode(VCard, { class: "elevation-4 mb-3" }, {
                                            default: withCtx(() => [
                                              createVNode(VCardText, { class: "py-2 d-flex card-side-items" }, {
                                                default: withCtx(() => [
                                                  createVNode(VIcon, { class: "mr-2" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-account-clock")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createTextVNode(" Due Date ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCard, { class: "elevation-4 mb-3" }, {
                                            default: withCtx(() => [
                                              createVNode(VCardText, { class: "py-2 d-flex card-side-items" }, {
                                                default: withCtx(() => [
                                                  createVNode(VIcon, { class: "mr-2" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-paperclip")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createTextVNode(" Attachments ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VDivider, { class: "mb-4" }, null, _parent5, _scopeId4));
                              _push5(`<div class="text-right" data-v-0d10414f${_scopeId4}>`);
                              _push5(ssrRenderComponent(VBtn, {
                                color: "warning",
                                variant: "outlined",
                                class: "mr-3",
                                onClick: ($event) => dialogCard.value = false
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Close`);
                                  } else {
                                    return [
                                      createTextVNode("Close")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VBtn, {
                                color: "success",
                                variant: "outlined",
                                type: "submit"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Submit`);
                                  } else {
                                    return [
                                      createTextVNode("Submit")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, { cols: "9" }, {
                                      default: withCtx(() => [
                                        createVNode(VTextarea, {
                                          "auto-grow": "",
                                          label: "Description",
                                          variant: "outlined",
                                          rows: "4",
                                          shaped: ""
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "3" }, {
                                      default: withCtx(() => [
                                        createVNode(VCard, { class: "elevation-4 mb-3" }, {
                                          default: withCtx(() => [
                                            createVNode(VCardText, { class: "py-2 d-flex card-side-items" }, {
                                              default: withCtx(() => [
                                                createVNode(VIcon, { class: "mr-2" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-account-clock")
                                                  ]),
                                                  _: 1
                                                }),
                                                createTextVNode(" Due Date ")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCard, { class: "elevation-4 mb-3" }, {
                                          default: withCtx(() => [
                                            createVNode(VCardText, { class: "py-2 d-flex card-side-items" }, {
                                              default: withCtx(() => [
                                                createVNode(VIcon, { class: "mr-2" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-paperclip")
                                                  ]),
                                                  _: 1
                                                }),
                                                createTextVNode(" Attachments ")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VDivider, { class: "mb-4" }),
                                createVNode("div", { class: "text-right" }, [
                                  createVNode(VBtn, {
                                    color: "warning",
                                    variant: "outlined",
                                    class: "mr-3",
                                    onClick: ($event) => dialogCard.value = false
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Close")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"]),
                                  createVNode(VBtn, {
                                    color: "success",
                                    variant: "outlined",
                                    type: "submit"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Submit")
                                    ]),
                                    _: 1
                                  })
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VForm, {
                            ref: "formInput",
                            onSubmit: withModifiers(($event) => toCreateCard(), ["prevent"])
                          }, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, { cols: "9" }, {
                                    default: withCtx(() => [
                                      createVNode(VTextarea, {
                                        "auto-grow": "",
                                        label: "Description",
                                        variant: "outlined",
                                        rows: "4",
                                        shaped: ""
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "3" }, {
                                    default: withCtx(() => [
                                      createVNode(VCard, { class: "elevation-4 mb-3" }, {
                                        default: withCtx(() => [
                                          createVNode(VCardText, { class: "py-2 d-flex card-side-items" }, {
                                            default: withCtx(() => [
                                              createVNode(VIcon, { class: "mr-2" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-account-clock")
                                                ]),
                                                _: 1
                                              }),
                                              createTextVNode(" Due Date ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCard, { class: "elevation-4 mb-3" }, {
                                        default: withCtx(() => [
                                          createVNode(VCardText, { class: "py-2 d-flex card-side-items" }, {
                                            default: withCtx(() => [
                                              createVNode(VIcon, { class: "mr-2" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-paperclip")
                                                ]),
                                                _: 1
                                              }),
                                              createTextVNode(" Attachments ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VDivider, { class: "mb-4" }),
                              createVNode("div", { class: "text-right" }, [
                                createVNode(VBtn, {
                                  color: "warning",
                                  variant: "outlined",
                                  class: "mr-3",
                                  onClick: ($event) => dialogCard.value = false
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Close")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode(VBtn, {
                                  color: "success",
                                  variant: "outlined",
                                  type: "submit"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Submit")
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            _: 1
                          }, 8, ["onSubmit"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardTitle, { class: "pl-2" }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          density: "compact",
                          variant: "outline",
                          "prepend-inner-icon": "mdi-archive",
                          "single-line": "",
                          "hide-details": "",
                          class: "mt-3 text-primary"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createVNode(VForm, {
                          ref: "formInput",
                          onSubmit: withModifiers(($event) => toCreateCard(), ["prevent"])
                        }, {
                          default: withCtx(() => [
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                createVNode(VCol, { cols: "9" }, {
                                  default: withCtx(() => [
                                    createVNode(VTextarea, {
                                      "auto-grow": "",
                                      label: "Description",
                                      variant: "outlined",
                                      rows: "4",
                                      shaped: ""
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "3" }, {
                                  default: withCtx(() => [
                                    createVNode(VCard, { class: "elevation-4 mb-3" }, {
                                      default: withCtx(() => [
                                        createVNode(VCardText, { class: "py-2 d-flex card-side-items" }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, { class: "mr-2" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-account-clock")
                                              ]),
                                              _: 1
                                            }),
                                            createTextVNode(" Due Date ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCard, { class: "elevation-4 mb-3" }, {
                                      default: withCtx(() => [
                                        createVNode(VCardText, { class: "py-2 d-flex card-side-items" }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, { class: "mr-2" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-paperclip")
                                              ]),
                                              _: 1
                                            }),
                                            createTextVNode(" Attachments ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VDivider, { class: "mb-4" }),
                            createVNode("div", { class: "text-right" }, [
                              createVNode(VBtn, {
                                color: "warning",
                                variant: "outlined",
                                class: "mr-3",
                                onClick: ($event) => dialogCard.value = false
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Close")
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode(VBtn, {
                                color: "success",
                                variant: "outlined",
                                type: "submit"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Submit")
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          _: 1
                        }, 8, ["onSubmit"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCard, null, {
                default: withCtx(() => [
                  createVNode(VCardTitle, { class: "pl-2" }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        density: "compact",
                        variant: "outline",
                        "prepend-inner-icon": "mdi-archive",
                        "single-line": "",
                        "hide-details": "",
                        class: "mt-3 text-primary"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createVNode(VForm, {
                        ref: "formInput",
                        onSubmit: withModifiers(($event) => toCreateCard(), ["prevent"])
                      }, {
                        default: withCtx(() => [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, { cols: "9" }, {
                                default: withCtx(() => [
                                  createVNode(VTextarea, {
                                    "auto-grow": "",
                                    label: "Description",
                                    variant: "outlined",
                                    rows: "4",
                                    shaped: ""
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "3" }, {
                                default: withCtx(() => [
                                  createVNode(VCard, { class: "elevation-4 mb-3" }, {
                                    default: withCtx(() => [
                                      createVNode(VCardText, { class: "py-2 d-flex card-side-items" }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, { class: "mr-2" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-account-clock")
                                            ]),
                                            _: 1
                                          }),
                                          createTextVNode(" Due Date ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCard, { class: "elevation-4 mb-3" }, {
                                    default: withCtx(() => [
                                      createVNode(VCardText, { class: "py-2 d-flex card-side-items" }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, { class: "mr-2" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-paperclip")
                                            ]),
                                            _: 1
                                          }),
                                          createTextVNode(" Attachments ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VDivider, { class: "mb-4" }),
                          createVNode("div", { class: "text-right" }, [
                            createVNode(VBtn, {
                              color: "warning",
                              variant: "outlined",
                              class: "mr-3",
                              onClick: ($event) => dialogCard.value = false
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Close")
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(VBtn, {
                              color: "success",
                              variant: "outlined",
                              type: "submit"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Submit")
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        _: 1
                      }, 8, ["onSubmit"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_0d10414f_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ignite/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0d10414f"]]);
export {
  index as default
};
//# sourceMappingURL=index-bfad44a9.js.map
