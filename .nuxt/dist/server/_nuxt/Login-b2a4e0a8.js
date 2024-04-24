import { ref, mergeProps, withCtx, createVNode, createTextVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import axios from "axios";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { V as VContainer } from "./VContainer-d5a4162f.js";
import { V as VRow, a as VCol } from "./VRow-1c38f8b7.js";
import { V as VCard, a as VCardTitle, b as VCardText } from "./VCard-42565dd5.js";
import { V as VForm } from "./VForm-0992621c.js";
import { V as VTextField } from "./VTextField-97fb35c9.js";
import { V as VBtn } from "./VBtn-991b44d5.js";
/* empty css                */import "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "@vue/devtools-api";
import "destr";
import "devalue";
import "klona";
import "h3";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "defu";
import "./VAvatar-efb97b93.js";
import "./index-d9ac0006.js";
const Login_vue_vue_type_style_index_0_scoped_8487c4b4_lang = "";
const _sfc_main = {
  __name: "Login",
  __ssrInlineRender: true,
  setup(__props) {
    const username = ref("");
    const password = ref("");
    const login = () => {
      axios.post("http://127.0.0.1:8000/login", {
        username: username.value,
        password: password.value
      }).then((res) => {
        console.log("Login ==> ", res);
        if (res.data.statusCode === 200) {
          const request = indexedDB.open("iris", 3);
          request.onupgradeneeded = (event) => {
            const db = event.target.result;
            const objectStore = db.createObjectStore("user", {
              keyPath: "user_id"
            });
            objectStore.createIndex("username", "username", {
              unique: true
            });
            objectStore.createIndex("token", "token", {
              unique: true
            });
            objectStore.transaction.oncomplete = async (event2) => {
              const userObjectStore = db.transaction("user", "readwrite").objectStore("user");
              await userObjectStore.add(res.data.data);
              location.href = "/";
            };
          };
        }
      }).catch((err) => {
        throw new Error(err);
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, mergeProps({
        fluid: "",
        class: "h-100 bg-cover"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, {
              justify: "center",
              align: "center",
              class: "h-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "8",
                    md: "4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCard, { class: "bg-primary" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCardTitle, { class: "headline" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<h3 class="my-3 text-center" data-v-8487c4b4${_scopeId5}>EIR AOI - Iris</h3>`);
                                  } else {
                                    return [
                                      createVNode("h3", { class: "my-3 text-center" }, "EIR AOI - Iris")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCardText, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VForm, { onSubmit: login }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextField, {
                                            modelValue: username.value,
                                            "onUpdate:modelValue": ($event) => username.value = $event,
                                            label: "Username",
                                            variant: "outlined",
                                            class: "mb-2",
                                            required: ""
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VTextField, {
                                            modelValue: password.value,
                                            "onUpdate:modelValue": ($event) => password.value = $event,
                                            label: "Password",
                                            variant: "outlined",
                                            type: "password",
                                            required: ""
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VBtn, {
                                            type: "submit",
                                            class: "my-2",
                                            block: "",
                                            color: "success"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`GO`);
                                              } else {
                                                return [
                                                  createTextVNode("GO")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextField, {
                                              modelValue: username.value,
                                              "onUpdate:modelValue": ($event) => username.value = $event,
                                              label: "Username",
                                              variant: "outlined",
                                              class: "mb-2",
                                              required: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(VTextField, {
                                              modelValue: password.value,
                                              "onUpdate:modelValue": ($event) => password.value = $event,
                                              label: "Password",
                                              variant: "outlined",
                                              type: "password",
                                              required: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(VBtn, {
                                              type: "submit",
                                              class: "my-2",
                                              block: "",
                                              color: "success"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("GO")
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
                                      createVNode(VForm, {
                                        onSubmit: withModifiers(login, ["prevent"])
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: username.value,
                                            "onUpdate:modelValue": ($event) => username.value = $event,
                                            label: "Username",
                                            variant: "outlined",
                                            class: "mb-2",
                                            required: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(VTextField, {
                                            modelValue: password.value,
                                            "onUpdate:modelValue": ($event) => password.value = $event,
                                            label: "Password",
                                            variant: "outlined",
                                            type: "password",
                                            required: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(VBtn, {
                                            type: "submit",
                                            class: "my-2",
                                            block: "",
                                            color: "success"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("GO")
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
                            } else {
                              return [
                                createVNode(VCardTitle, { class: "headline" }, {
                                  default: withCtx(() => [
                                    createVNode("h3", { class: "my-3 text-center" }, "EIR AOI - Iris")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardText, null, {
                                  default: withCtx(() => [
                                    createVNode(VForm, {
                                      onSubmit: withModifiers(login, ["prevent"])
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: username.value,
                                          "onUpdate:modelValue": ($event) => username.value = $event,
                                          label: "Username",
                                          variant: "outlined",
                                          class: "mb-2",
                                          required: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(VTextField, {
                                          modelValue: password.value,
                                          "onUpdate:modelValue": ($event) => password.value = $event,
                                          label: "Password",
                                          variant: "outlined",
                                          type: "password",
                                          required: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(VBtn, {
                                          type: "submit",
                                          class: "my-2",
                                          block: "",
                                          color: "success"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("GO")
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCard, { class: "bg-primary" }, {
                            default: withCtx(() => [
                              createVNode(VCardTitle, { class: "headline" }, {
                                default: withCtx(() => [
                                  createVNode("h3", { class: "my-3 text-center" }, "EIR AOI - Iris")
                                ]),
                                _: 1
                              }),
                              createVNode(VCardText, null, {
                                default: withCtx(() => [
                                  createVNode(VForm, {
                                    onSubmit: withModifiers(login, ["prevent"])
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: username.value,
                                        "onUpdate:modelValue": ($event) => username.value = $event,
                                        label: "Username",
                                        variant: "outlined",
                                        class: "mb-2",
                                        required: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(VTextField, {
                                        modelValue: password.value,
                                        "onUpdate:modelValue": ($event) => password.value = $event,
                                        label: "Password",
                                        variant: "outlined",
                                        type: "password",
                                        required: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(VBtn, {
                                        type: "submit",
                                        class: "my-2",
                                        block: "",
                                        color: "success"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("GO")
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
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      sm: "8",
                      md: "4"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCard, { class: "bg-primary" }, {
                          default: withCtx(() => [
                            createVNode(VCardTitle, { class: "headline" }, {
                              default: withCtx(() => [
                                createVNode("h3", { class: "my-3 text-center" }, "EIR AOI - Iris")
                              ]),
                              _: 1
                            }),
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createVNode(VForm, {
                                  onSubmit: withModifiers(login, ["prevent"])
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: username.value,
                                      "onUpdate:modelValue": ($event) => username.value = $event,
                                      label: "Username",
                                      variant: "outlined",
                                      class: "mb-2",
                                      required: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(VTextField, {
                                      modelValue: password.value,
                                      "onUpdate:modelValue": ($event) => password.value = $event,
                                      label: "Password",
                                      variant: "outlined",
                                      type: "password",
                                      required: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(VBtn, {
                                      type: "submit",
                                      class: "my-2",
                                      block: "",
                                      color: "success"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("GO")
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
                        })
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
              createVNode(VRow, {
                justify: "center",
                align: "center",
                class: "h-100"
              }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    sm: "8",
                    md: "4"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCard, { class: "bg-primary" }, {
                        default: withCtx(() => [
                          createVNode(VCardTitle, { class: "headline" }, {
                            default: withCtx(() => [
                              createVNode("h3", { class: "my-3 text-center" }, "EIR AOI - Iris")
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(VForm, {
                                onSubmit: withModifiers(login, ["prevent"])
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: username.value,
                                    "onUpdate:modelValue": ($event) => username.value = $event,
                                    label: "Username",
                                    variant: "outlined",
                                    class: "mb-2",
                                    required: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(VTextField, {
                                    modelValue: password.value,
                                    "onUpdate:modelValue": ($event) => password.value = $event,
                                    label: "Password",
                                    variant: "outlined",
                                    type: "password",
                                    required: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(VBtn, {
                                    type: "submit",
                                    class: "my-2",
                                    block: "",
                                    color: "success"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("GO")
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
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8487c4b4"]]);
export {
  Login as default
};
//# sourceMappingURL=Login-b2a4e0a8.js.map
