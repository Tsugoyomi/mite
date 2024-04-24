import { _ as _sfc_main$1 } from "./Snackbars-3b06ae01.js";
import { defineComponent, ref, reactive, mergeProps, withCtx, unref, createTextVNode, createVNode, withModifiers, toDisplayString, openBlock, createBlock, Fragment, renderList, isRef, useSSRContext } from "vue";
import "vue-router";
import "hookable";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import axios from "axios";
import { V as VRow, a as VCol } from "./VRow-1c38f8b7.js";
import { V as VCard, a as VCardTitle, b as VCardText } from "./VCard-42565dd5.js";
import { V as VTooltip } from "./VTooltip-29d37d17.js";
import { A as VIcon } from "./VAvatar-efb97b93.js";
import { V as VDivider } from "./VDivider-3859fda3.js";
import { V as VBtn, a as VBtnToggle } from "./VBtn-991b44d5.js";
import { V as VDialog } from "./VDialog-76d504ed.js";
import { V as VToolbar } from "./VToolbar-592ba451.js";
import { V as VForm } from "./VForm-0992621c.js";
import { V as VTextField } from "./VTextField-97fb35c9.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "./VOverlay-3b671092.js";
import "../server.mjs";
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
/* empty css                */import "./index-d9ac0006.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const userId = ref(null);
    const room = ref([]);
    const dialogCreate = ref(false);
    const formInput = ref();
    const form = reactive({
      name: "",
      img: "",
      type: "GROUP"
    });
    const formJoin = reactive({
      code: ""
    });
    const rules = ref([
      (value) => {
        if (value)
          return true;
        return "Requred.";
      }
    ]);
    const flagAlert = ref("");
    const textAlert = ref("");
    const showAlert = ref(false);
    const toggleCreate = ref(1);
    const getListRoom = async () => {
      const payload = {
        userId: userId.value
      };
      await axios.post("http://127.0.0.1:8000/room/list", payload).then((res) => {
        room.value = res.data.data;
      }).catch((err) => {
        throw new Error(err);
      });
    };
    const toCreateGroup = async (type) => {
      var _a;
      const check = await ((_a = formInput.value) == null ? void 0 : _a.validate());
      if (check.valid)
        if (type === 1) {
          const gen1 = btoa(form.name);
          const gen2 = btoa("--EIR AOI--");
          const gen3 = btoa(form.type);
          const payload = {
            ...form,
            code: `${gen1}$${gen2}$${gen3}`,
            userId: userId.value
          };
          await axios.post("http://127.0.0.1:8000/room/create", payload).then((res) => {
            flagAlert.value = res.data.statusCode === 200 ? "success" : "red";
            textAlert.value = res.data.message;
            showAlert.value = true;
          }).catch((err) => {
            throw new Error(err);
          }).finally(() => {
            dialogCreate.value = false;
            getListRoom();
            form.name = "";
            form.img = "";
            setTimeout(() => {
              showAlert.value = false;
            }, 1e3);
          });
        } else {
          const payload = {
            ...formJoin,
            type: "GROUP",
            userId: userId.value
          };
          await axios.post("http://127.0.0.1:8000/room/join", payload).then((res) => {
            flagAlert.value = res.data.statusCode === 200 ? "success" : "red";
            textAlert.value = res.data.message;
            showAlert.value = true;
          }).catch((err) => {
            throw new Error(err);
          }).finally(() => {
            dialogCreate.value = false;
            getListRoom();
            formJoin.code = "";
            setTimeout(() => {
              showAlert.value = false;
            }, 1e3);
          });
        }
    };
    const toEnterGroup = (code) => {
      location.href = `/iris/${code}`;
    };
    const toLeaveGroup = async (data) => {
      const payload = {
        name: data.name,
        code: data.code,
        type: data.type,
        userId: data.user_id
      };
      await axios.post("http://127.0.0.1:8000/room/leave", payload).then((res) => {
        flagAlert.value = res.data.statusCode === 200 ? "success" : "red";
        textAlert.value = res.data.message;
        showAlert.value = true;
      }).catch((err) => {
        throw new Error(err);
      }).finally(() => {
        getListRoom();
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Snackbars = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "containerz w-100 py-4",
        style: { "position": "relative" }
      }, _attrs))} data-v-f9048691>`);
      _push(ssrRenderComponent(VRow, { class: "w-100" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(room), (item, i) => {
              _push2(ssrRenderComponent(VCol, {
                cols: "3",
                key: i,
                class: "mb-3 list-group"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VCard, { class: "elevation-3 card-group" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCardTitle, { class: "headline text-primary" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<b data-v-f9048691${_scopeId4}>${ssrInterpolate(item.name)}</b>`);
                                _push5(ssrRenderComponent(VTooltip, { location: "top" }, {
                                  activator: withCtx(({ props }, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VIcon, mergeProps({ class: "icon-exit" }, props, {
                                        onClick: ($event) => toLeaveGroup(item)
                                      }), {
                                        default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`mdi-exit-run`);
                                          } else {
                                            return [
                                              createTextVNode("mdi-exit-run")
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VIcon, mergeProps({ class: "icon-exit" }, props, {
                                          onClick: withModifiers(($event) => toLeaveGroup(item), ["prevent"])
                                        }), {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-exit-run")
                                          ]),
                                          _: 2
                                        }, 1040, ["onClick"])
                                      ];
                                    }
                                  }),
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<span data-v-f9048691${_scopeId5}>Exit</span>`);
                                    } else {
                                      return [
                                        createVNode("span", null, "Exit")
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode("b", null, toDisplayString(item.name), 1),
                                  createVNode(VTooltip, { location: "top" }, {
                                    activator: withCtx(({ props }) => [
                                      createVNode(VIcon, mergeProps({ class: "icon-exit" }, props, {
                                        onClick: withModifiers(($event) => toLeaveGroup(item), ["prevent"])
                                      }), {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-exit-run")
                                        ]),
                                        _: 2
                                      }, 1040, ["onClick"])
                                    ]),
                                    default: withCtx(() => [
                                      createVNode("span", null, "Exit")
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VDivider, null, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VCardText, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<img${ssrRenderAttr("src", item.img)} width="100%" alt="" data-v-f9048691${_scopeId4}>`);
                                _push5(ssrRenderComponent(VBtn, {
                                  class: "mt-2",
                                  block: "",
                                  variant: "outlined",
                                  color: "primary",
                                  onClick: ($event) => toEnterGroup(item.code)
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`Enter`);
                                    } else {
                                      return [
                                        createTextVNode("Enter")
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode("img", {
                                    src: item.img,
                                    width: "100%",
                                    alt: ""
                                  }, null, 8, ["src"]),
                                  createVNode(VBtn, {
                                    class: "mt-2",
                                    block: "",
                                    variant: "outlined",
                                    color: "primary",
                                    onClick: ($event) => toEnterGroup(item.code)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Enter")
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VCardTitle, { class: "headline text-primary" }, {
                              default: withCtx(() => [
                                createVNode("b", null, toDisplayString(item.name), 1),
                                createVNode(VTooltip, { location: "top" }, {
                                  activator: withCtx(({ props }) => [
                                    createVNode(VIcon, mergeProps({ class: "icon-exit" }, props, {
                                      onClick: withModifiers(($event) => toLeaveGroup(item), ["prevent"])
                                    }), {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-exit-run")
                                      ]),
                                      _: 2
                                    }, 1040, ["onClick"])
                                  ]),
                                  default: withCtx(() => [
                                    createVNode("span", null, "Exit")
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(VDivider),
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: item.img,
                                  width: "100%",
                                  alt: ""
                                }, null, 8, ["src"]),
                                createVNode(VBtn, {
                                  class: "mt-2",
                                  block: "",
                                  variant: "outlined",
                                  color: "primary",
                                  onClick: ($event) => toEnterGroup(item.code)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Enter")
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])
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
                      createVNode(VCard, { class: "elevation-3 card-group" }, {
                        default: withCtx(() => [
                          createVNode(VCardTitle, { class: "headline text-primary" }, {
                            default: withCtx(() => [
                              createVNode("b", null, toDisplayString(item.name), 1),
                              createVNode(VTooltip, { location: "top" }, {
                                activator: withCtx(({ props }) => [
                                  createVNode(VIcon, mergeProps({ class: "icon-exit" }, props, {
                                    onClick: withModifiers(($event) => toLeaveGroup(item), ["prevent"])
                                  }), {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-exit-run")
                                    ]),
                                    _: 2
                                  }, 1040, ["onClick"])
                                ]),
                                default: withCtx(() => [
                                  createVNode("span", null, "Exit")
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(VDivider),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("img", {
                                src: item.img,
                                width: "100%",
                                alt: ""
                              }, null, 8, ["src"]),
                              createVNode(VBtn, {
                                class: "mt-2",
                                block: "",
                                variant: "outlined",
                                color: "primary",
                                onClick: ($event) => toEnterGroup(item.code)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Enter")
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
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
              (openBlock(true), createBlock(Fragment, null, renderList(unref(room), (item, i) => {
                return openBlock(), createBlock(VCol, {
                  cols: "3",
                  key: i,
                  class: "mb-3 list-group"
                }, {
                  default: withCtx(() => [
                    createVNode(VCard, { class: "elevation-3 card-group" }, {
                      default: withCtx(() => [
                        createVNode(VCardTitle, { class: "headline text-primary" }, {
                          default: withCtx(() => [
                            createVNode("b", null, toDisplayString(item.name), 1),
                            createVNode(VTooltip, { location: "top" }, {
                              activator: withCtx(({ props }) => [
                                createVNode(VIcon, mergeProps({ class: "icon-exit" }, props, {
                                  onClick: withModifiers(($event) => toLeaveGroup(item), ["prevent"])
                                }), {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-exit-run")
                                  ]),
                                  _: 2
                                }, 1040, ["onClick"])
                              ]),
                              default: withCtx(() => [
                                createVNode("span", null, "Exit")
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(VDivider),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("img", {
                              src: item.img,
                              width: "100%",
                              alt: ""
                            }, null, 8, ["src"]),
                            createVNode(VBtn, {
                              class: "mt-2",
                              block: "",
                              variant: "outlined",
                              color: "primary",
                              onClick: ($event) => toEnterGroup(item.code)
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Enter")
                              ]),
                              _: 2
                            }, 1032, ["onClick"])
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
      _push(ssrRenderComponent(VTooltip, { location: "top" }, {
        activator: withCtx(({ props }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VBtn, mergeProps({
              color: "success",
              class: "icon-add"
            }, props, {
              icon: "mdi-plus",
              onClick: ($event) => dialogCreate.value = true
            }), null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VBtn, mergeProps({
                color: "success",
                class: "icon-add"
              }, props, {
                icon: "mdi-plus",
                onClick: ($event) => dialogCreate.value = true
              }), null, 16, ["onClick"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-f9048691${_scopeId}>Create Group</span>`);
          } else {
            return [
              createVNode("span", null, "Create Group")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VDialog, {
        modelValue: unref(dialogCreate),
        "onUpdate:modelValue": ($event) => isRef(dialogCreate) ? dialogCreate.value = $event : null,
        transition: "dialog-bottom-transition",
        width: "30%"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VToolbar, {
                    color: "primary",
                    title: unref(toggleCreate) === 1 ? "Create Group" : "Join Group"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtnToggle, {
                          modelValue: unref(toggleCreate),
                          "onUpdate:modelValue": ($event) => isRef(toggleCreate) ? toggleCreate.value = $event : null,
                          color: "primary",
                          mandatory: "",
                          density: "compact",
                          class: "mb-4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VBtn, { value: 1 }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Create`);
                                  } else {
                                    return [
                                      createTextVNode("Create")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VBtn, { value: 2 }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Join`);
                                  } else {
                                    return [
                                      createTextVNode("Join")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VBtn, { value: 1 }, {
                                  default: withCtx(() => [
                                    createTextVNode("Create")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, { value: 2 }, {
                                  default: withCtx(() => [
                                    createTextVNode("Join")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VForm, {
                          ref_key: "formInput",
                          ref: formInput,
                          onSubmit: ($event) => toCreateGroup(unref(toggleCreate))
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              if (unref(toggleCreate) === 1) {
                                _push5(`<!--[-->`);
                                _push5(ssrRenderComponent(VTextField, {
                                  modelValue: unref(form).name,
                                  "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                  rules: unref(rules),
                                  label: "Group name",
                                  variant: "outlined",
                                  density: "compact",
                                  class: "mb-6",
                                  "hide-details": ""
                                }, null, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VTextField, {
                                  modelValue: unref(form).img,
                                  "onUpdate:modelValue": ($event) => unref(form).img = $event,
                                  rules: unref(rules),
                                  label: "Group image",
                                  variant: "outlined",
                                  density: "compact",
                                  class: "mb-8",
                                  "hide-details": ""
                                }, null, _parent5, _scopeId4));
                                _push5(`<!--]-->`);
                              } else {
                                _push5(ssrRenderComponent(VTextField, {
                                  modelValue: unref(formJoin).code,
                                  "onUpdate:modelValue": ($event) => unref(formJoin).code = $event,
                                  rules: unref(rules),
                                  label: "Group code",
                                  variant: "outlined",
                                  density: "compact",
                                  class: "mb-6",
                                  "hide-details": ""
                                }, null, _parent5, _scopeId4));
                              }
                              _push5(ssrRenderComponent(VDivider, { class: "mb-4" }, null, _parent5, _scopeId4));
                              _push5(`<div class="text-right" data-v-f9048691${_scopeId4}>`);
                              _push5(ssrRenderComponent(VBtn, {
                                color: "warning",
                                variant: "outlined",
                                class: "mr-3",
                                onClick: ($event) => dialogCreate.value = false
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
                                unref(toggleCreate) === 1 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                  createVNode(VTextField, {
                                    modelValue: unref(form).name,
                                    "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                    rules: unref(rules),
                                    label: "Group name",
                                    variant: "outlined",
                                    density: "compact",
                                    class: "mb-6",
                                    "hide-details": ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                  createVNode(VTextField, {
                                    modelValue: unref(form).img,
                                    "onUpdate:modelValue": ($event) => unref(form).img = $event,
                                    rules: unref(rules),
                                    label: "Group image",
                                    variant: "outlined",
                                    density: "compact",
                                    class: "mb-8",
                                    "hide-details": ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                ], 64)) : (openBlock(), createBlock(VTextField, {
                                  key: 1,
                                  modelValue: unref(formJoin).code,
                                  "onUpdate:modelValue": ($event) => unref(formJoin).code = $event,
                                  rules: unref(rules),
                                  label: "Group code",
                                  variant: "outlined",
                                  density: "compact",
                                  class: "mb-6",
                                  "hide-details": ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])),
                                createVNode(VDivider, { class: "mb-4" }),
                                createVNode("div", { class: "text-right" }, [
                                  createVNode(VBtn, {
                                    color: "warning",
                                    variant: "outlined",
                                    class: "mr-3",
                                    onClick: ($event) => dialogCreate.value = false
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
                          createVNode(VBtnToggle, {
                            modelValue: unref(toggleCreate),
                            "onUpdate:modelValue": ($event) => isRef(toggleCreate) ? toggleCreate.value = $event : null,
                            color: "primary",
                            mandatory: "",
                            density: "compact",
                            class: "mb-4"
                          }, {
                            default: withCtx(() => [
                              createVNode(VBtn, { value: 1 }, {
                                default: withCtx(() => [
                                  createTextVNode("Create")
                                ]),
                                _: 1
                              }),
                              createVNode(VBtn, { value: 2 }, {
                                default: withCtx(() => [
                                  createTextVNode("Join")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(VForm, {
                            ref_key: "formInput",
                            ref: formInput,
                            onSubmit: withModifiers(($event) => toCreateGroup(unref(toggleCreate)), ["prevent"])
                          }, {
                            default: withCtx(() => [
                              unref(toggleCreate) === 1 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                createVNode(VTextField, {
                                  modelValue: unref(form).name,
                                  "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                  rules: unref(rules),
                                  label: "Group name",
                                  variant: "outlined",
                                  density: "compact",
                                  class: "mb-6",
                                  "hide-details": ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                createVNode(VTextField, {
                                  modelValue: unref(form).img,
                                  "onUpdate:modelValue": ($event) => unref(form).img = $event,
                                  rules: unref(rules),
                                  label: "Group image",
                                  variant: "outlined",
                                  density: "compact",
                                  class: "mb-8",
                                  "hide-details": ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                              ], 64)) : (openBlock(), createBlock(VTextField, {
                                key: 1,
                                modelValue: unref(formJoin).code,
                                "onUpdate:modelValue": ($event) => unref(formJoin).code = $event,
                                rules: unref(rules),
                                label: "Group code",
                                variant: "outlined",
                                density: "compact",
                                class: "mb-6",
                                "hide-details": ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])),
                              createVNode(VDivider, { class: "mb-4" }),
                              createVNode("div", { class: "text-right" }, [
                                createVNode(VBtn, {
                                  color: "warning",
                                  variant: "outlined",
                                  class: "mr-3",
                                  onClick: ($event) => dialogCreate.value = false
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
                    createVNode(VToolbar, {
                      color: "primary",
                      title: unref(toggleCreate) === 1 ? "Create Group" : "Join Group"
                    }, null, 8, ["title"]),
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createVNode(VBtnToggle, {
                          modelValue: unref(toggleCreate),
                          "onUpdate:modelValue": ($event) => isRef(toggleCreate) ? toggleCreate.value = $event : null,
                          color: "primary",
                          mandatory: "",
                          density: "compact",
                          class: "mb-4"
                        }, {
                          default: withCtx(() => [
                            createVNode(VBtn, { value: 1 }, {
                              default: withCtx(() => [
                                createTextVNode("Create")
                              ]),
                              _: 1
                            }),
                            createVNode(VBtn, { value: 2 }, {
                              default: withCtx(() => [
                                createTextVNode("Join")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(VForm, {
                          ref_key: "formInput",
                          ref: formInput,
                          onSubmit: withModifiers(($event) => toCreateGroup(unref(toggleCreate)), ["prevent"])
                        }, {
                          default: withCtx(() => [
                            unref(toggleCreate) === 1 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                              createVNode(VTextField, {
                                modelValue: unref(form).name,
                                "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                rules: unref(rules),
                                label: "Group name",
                                variant: "outlined",
                                density: "compact",
                                class: "mb-6",
                                "hide-details": ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                              createVNode(VTextField, {
                                modelValue: unref(form).img,
                                "onUpdate:modelValue": ($event) => unref(form).img = $event,
                                rules: unref(rules),
                                label: "Group image",
                                variant: "outlined",
                                density: "compact",
                                class: "mb-8",
                                "hide-details": ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                            ], 64)) : (openBlock(), createBlock(VTextField, {
                              key: 1,
                              modelValue: unref(formJoin).code,
                              "onUpdate:modelValue": ($event) => unref(formJoin).code = $event,
                              rules: unref(rules),
                              label: "Group code",
                              variant: "outlined",
                              density: "compact",
                              class: "mb-6",
                              "hide-details": ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])),
                            createVNode(VDivider, { class: "mb-4" }),
                            createVNode("div", { class: "text-right" }, [
                              createVNode(VBtn, {
                                color: "warning",
                                variant: "outlined",
                                class: "mr-3",
                                onClick: ($event) => dialogCreate.value = false
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
                  createVNode(VToolbar, {
                    color: "primary",
                    title: unref(toggleCreate) === 1 ? "Create Group" : "Join Group"
                  }, null, 8, ["title"]),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createVNode(VBtnToggle, {
                        modelValue: unref(toggleCreate),
                        "onUpdate:modelValue": ($event) => isRef(toggleCreate) ? toggleCreate.value = $event : null,
                        color: "primary",
                        mandatory: "",
                        density: "compact",
                        class: "mb-4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VBtn, { value: 1 }, {
                            default: withCtx(() => [
                              createTextVNode("Create")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, { value: 2 }, {
                            default: withCtx(() => [
                              createTextVNode("Join")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(VForm, {
                        ref_key: "formInput",
                        ref: formInput,
                        onSubmit: withModifiers(($event) => toCreateGroup(unref(toggleCreate)), ["prevent"])
                      }, {
                        default: withCtx(() => [
                          unref(toggleCreate) === 1 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                            createVNode(VTextField, {
                              modelValue: unref(form).name,
                              "onUpdate:modelValue": ($event) => unref(form).name = $event,
                              rules: unref(rules),
                              label: "Group name",
                              variant: "outlined",
                              density: "compact",
                              class: "mb-6",
                              "hide-details": ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                            createVNode(VTextField, {
                              modelValue: unref(form).img,
                              "onUpdate:modelValue": ($event) => unref(form).img = $event,
                              rules: unref(rules),
                              label: "Group image",
                              variant: "outlined",
                              density: "compact",
                              class: "mb-8",
                              "hide-details": ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                          ], 64)) : (openBlock(), createBlock(VTextField, {
                            key: 1,
                            modelValue: unref(formJoin).code,
                            "onUpdate:modelValue": ($event) => unref(formJoin).code = $event,
                            rules: unref(rules),
                            label: "Group code",
                            variant: "outlined",
                            density: "compact",
                            class: "mb-6",
                            "hide-details": ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])),
                          createVNode(VDivider, { class: "mb-4" }),
                          createVNode("div", { class: "text-right" }, [
                            createVNode(VBtn, {
                              color: "warning",
                              variant: "outlined",
                              class: "mr-3",
                              onClick: ($event) => dialogCreate.value = false
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
      _push(ssrRenderComponent(_component_Snackbars, {
        flag: unref(flagAlert),
        text: unref(textAlert),
        modelValue: unref(showAlert),
        "onUpdate:modelValue": ($event) => isRef(showAlert) ? showAlert.value = $event : null
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_f9048691_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/iris/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f9048691"]]);
export {
  index as default
};
//# sourceMappingURL=index-70befa4c.js.map
