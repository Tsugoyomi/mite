import { _ as _sfc_main$1 } from "./Snackbars-3b06ae01.js";
import { ref, resolveComponent, mergeProps, withCtx, unref, createTextVNode, createVNode, withModifiers, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, withKeys, useSSRContext } from "vue";
import "vue-router";
import "hookable";
import { a4 as useRoute, a5 as useRouter } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import moment from "moment";
import io from "socket.io-client";
import axios from "axios";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { V as VCard, a as VCardTitle, b as VCardText, c as VCardActions } from "./VCard-42565dd5.js";
import { A as VIcon } from "./VAvatar-efb97b93.js";
import { V as VMenu } from "./VMenu-a1a800dd.js";
import { a as VList, V as VListItem, b as VListItemTitle } from "./VList-449af631.js";
import { V as VBtn } from "./VBtn-991b44d5.js";
import { V as VDivider } from "./VDivider-3859fda3.js";
import { V as VTextField } from "./VTextField-97fb35c9.js";
import { V as VDialog } from "./VDialog-76d504ed.js";
import { V as VToolbar } from "./VToolbar-592ba451.js";
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
import "./index-d9ac0006.js";
const _id__vue_vue_type_style_index_0_scoped_59187ee7_lang = "";
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    var _a;
    const socket = io("ws://127.0.0.1:8000", { transports: ["websocket", "polling", "long-polling"], secure: true, reconnection: true });
    const route = useRoute();
    const router = useRouter();
    const userId = ref(null);
    const username = ref("");
    const newMessage = ref("");
    const messages = ref([]);
    const typing = ref(false);
    const typingMessage = ref("Someone is typing...");
    const flagAlert = ref("");
    const textAlert = ref("");
    const showAlert = ref(false);
    const dataRoom = (_a = route.params.id) == null ? void 0 : _a.split("$");
    atob(dataRoom[0]);
    const room = ref({});
    const members = ref([]);
    const dialogMembers = ref(false);
    const sendMessage = () => {
      if (newMessage.value.trim() !== "") {
        messages.value.push({
          id: Date.now(),
          sender: username.value,
          text: newMessage.value,
          time: moment(/* @__PURE__ */ new Date()).format("H:mm")
        });
        socket.emit("sendMessage", {
          roomCode: route.params.id,
          userId: userId.value,
          sender: username.value,
          message: newMessage.value
        });
        newMessage.value = "";
        setTimeout(() => {
          let out = document.getElementById("listChat");
          out.scrollTop = out.scrollHeight;
        }, 50);
      }
    };
    const toShowMembers = async () => {
      const payload = {
        code: route.params.id
      };
      await axios.post("http://127.0.0.1:8000/room/members", payload).then((res) => {
        members.value = res.data.data;
      }).catch((err) => {
        throw new Error(err);
      }).finally(() => {
        dialogMembers.value = true;
      });
    };
    const toCopyCode = () => {
      navigator.clipboard.writeText(route.params.id).then(() => {
        flagAlert.value = "success";
        textAlert.value = "Success copied to clipboard";
        showAlert.value = true;
        setTimeout(() => {
          showAlert.value = false;
        }, 1e3);
      });
    };
    socket.on("receivedMessage", (data) => {
      console.log("Receive Message => ", data);
      if (data.message.trim() !== "") {
        messages.value.push({
          id: Date.now(),
          sender: data.sender,
          text: data.message,
          time: moment(/* @__PURE__ */ new Date()).format("H:mm")
        });
        setTimeout(() => {
          let out = document.getElementById("listChat");
          out.scrollTop = out.scrollHeight;
        }, 50);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_list_item_group = resolveComponent("v-list-item-group");
      const _component_v_list_item_content = resolveComponent("v-list-item-content");
      const _component_Snackbars = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "containerz" }, _attrs))} data-v-59187ee7>`);
      _push(ssrRenderComponent(VCard, { class: "elevation-12 chatbox" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardTitle, {
              class: "headline text-white bg-primary d-flex",
              style: { "align-items": "center" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, {
                    class: "icon-back",
                    onClick: ($event) => unref(router).back()
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`mdi-arrow-left-bold`);
                      } else {
                        return [
                          createTextVNode("mdi-arrow-left-bold")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<img${ssrRenderAttr("src", room.value.img)} alt="" class="room-img mr-2" data-v-59187ee7${_scopeId2}><b style="${ssrRenderStyle({ "flex": "auto" })}" data-v-59187ee7${_scopeId2}>${ssrInterpolate(room.value.name)}</b>`);
                  _push3(ssrRenderComponent(VMenu, null, {
                    activator: withCtx(({ props }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, mergeProps({ class: "icon-menus" }, props), {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`mdi-dots-vertical`);
                            } else {
                              return [
                                createTextVNode("mdi-dots-vertical")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VIcon, mergeProps({ class: "icon-menus" }, props), {
                            default: withCtx(() => [
                              createTextVNode("mdi-dots-vertical")
                            ]),
                            _: 2
                          }, 1040)
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VList, { class: "py-0" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VListItem, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VListItemTitle, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VBtn, {
                                            text: "",
                                            block: "",
                                            onClick: ($event) => toShowMembers()
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Members`);
                                              } else {
                                                return [
                                                  createTextVNode("Members")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VBtn, {
                                              text: "",
                                              block: "",
                                              onClick: withModifiers(($event) => toShowMembers(), ["prevent"])
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Members")
                                              ]),
                                              _: 1
                                            }, 8, ["onClick"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VListItemTitle, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VBtn, {
                                            text: "",
                                            block: "",
                                            onClick: ($event) => toCopyCode()
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Invite`);
                                              } else {
                                                return [
                                                  createTextVNode("Invite")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VBtn, {
                                              text: "",
                                              block: "",
                                              onClick: withModifiers(($event) => toCopyCode(), ["prevent"])
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Invite")
                                              ]),
                                              _: 1
                                            }, 8, ["onClick"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VListItemTitle, null, {
                                        default: withCtx(() => [
                                          createVNode(VBtn, {
                                            text: "",
                                            block: "",
                                            onClick: withModifiers(($event) => toShowMembers(), ["prevent"])
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Members")
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VListItemTitle, null, {
                                        default: withCtx(() => [
                                          createVNode(VBtn, {
                                            text: "",
                                            block: "",
                                            onClick: withModifiers(($event) => toCopyCode(), ["prevent"])
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Invite")
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"])
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
                                createVNode(VListItem, null, {
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, null, {
                                      default: withCtx(() => [
                                        createVNode(VBtn, {
                                          text: "",
                                          block: "",
                                          onClick: withModifiers(($event) => toShowMembers(), ["prevent"])
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Members")
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VListItemTitle, null, {
                                      default: withCtx(() => [
                                        createVNode(VBtn, {
                                          text: "",
                                          block: "",
                                          onClick: withModifiers(($event) => toCopyCode(), ["prevent"])
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Invite")
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"])
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
                          createVNode(VList, { class: "py-0" }, {
                            default: withCtx(() => [
                              createVNode(VListItem, null, {
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, null, {
                                    default: withCtx(() => [
                                      createVNode(VBtn, {
                                        text: "",
                                        block: "",
                                        onClick: withModifiers(($event) => toShowMembers(), ["prevent"])
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Members")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VListItemTitle, null, {
                                    default: withCtx(() => [
                                      createVNode(VBtn, {
                                        text: "",
                                        block: "",
                                        onClick: withModifiers(($event) => toCopyCode(), ["prevent"])
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Invite")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"])
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
                    createVNode(VIcon, {
                      class: "icon-back",
                      onClick: ($event) => unref(router).back()
                    }, {
                      default: withCtx(() => [
                        createTextVNode("mdi-arrow-left-bold")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode("img", {
                      src: room.value.img,
                      alt: "",
                      class: "room-img mr-2"
                    }, null, 8, ["src"]),
                    createVNode("b", { style: { "flex": "auto" } }, toDisplayString(room.value.name), 1),
                    createVNode(VMenu, null, {
                      activator: withCtx(({ props }) => [
                        createVNode(VIcon, mergeProps({ class: "icon-menus" }, props), {
                          default: withCtx(() => [
                            createTextVNode("mdi-dots-vertical")
                          ]),
                          _: 2
                        }, 1040)
                      ]),
                      default: withCtx(() => [
                        createVNode(VList, { class: "py-0" }, {
                          default: withCtx(() => [
                            createVNode(VListItem, null, {
                              default: withCtx(() => [
                                createVNode(VListItemTitle, null, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, {
                                      text: "",
                                      block: "",
                                      onClick: withModifiers(($event) => toShowMembers(), ["prevent"])
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Members")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VListItemTitle, null, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, {
                                      text: "",
                                      block: "",
                                      onClick: withModifiers(($event) => toCopyCode(), ["prevent"])
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Invite")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
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
            _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, {
              class: "body-chat",
              id: "listChat"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (messages.value.length > 0) {
                    _push3(ssrRenderComponent(VList, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(messages.value, (message, index) => {
                            _push4(ssrRenderComponent(_component_v_list_item_group, { key: index }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(VListItem, null, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<div class="${ssrRenderClass([{ "float-end": message.sender === username.value }, "bubble-chat"])}" data-v-59187ee7${_scopeId5}><h5 className="mb-1" data-v-59187ee7${_scopeId5}>${ssrInterpolate(message.sender)}</h5><p className="bubble-chat-text" data-v-59187ee7${_scopeId5}>${ssrInterpolate(message.text)}</p><span className="bubble-chat-time" data-v-59187ee7${_scopeId5}>${ssrInterpolate(message.time)}</span></div>`);
                                      } else {
                                        return [
                                          createVNode("div", {
                                            class: ["bubble-chat", { "float-end": message.sender === username.value }]
                                          }, [
                                            createVNode("h5", { className: "mb-1" }, toDisplayString(message.sender), 1),
                                            createVNode("p", { className: "bubble-chat-text" }, toDisplayString(message.text), 1),
                                            createVNode("span", { className: "bubble-chat-time" }, toDisplayString(message.time), 1)
                                          ], 2)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(VListItem, null, {
                                      default: withCtx(() => [
                                        createVNode("div", {
                                          class: ["bubble-chat", { "float-end": message.sender === username.value }]
                                        }, [
                                          createVNode("h5", { className: "mb-1" }, toDisplayString(message.sender), 1),
                                          createVNode("p", { className: "bubble-chat-text" }, toDisplayString(message.text), 1),
                                          createVNode("span", { className: "bubble-chat-time" }, toDisplayString(message.time), 1)
                                        ], 2)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList(messages.value, (message, index) => {
                              return openBlock(), createBlock(_component_v_list_item_group, { key: index }, {
                                default: withCtx(() => [
                                  createVNode(VListItem, null, {
                                    default: withCtx(() => [
                                      createVNode("div", {
                                        class: ["bubble-chat", { "float-end": message.sender === username.value }]
                                      }, [
                                        createVNode("h5", { className: "mb-1" }, toDisplayString(message.sender), 1),
                                        createVNode("p", { className: "bubble-chat-text" }, toDisplayString(message.text), 1),
                                        createVNode("span", { className: "bubble-chat-time" }, toDisplayString(message.time), 1)
                                      ], 2)
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
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (typing.value) {
                    _push3(ssrRenderComponent(VListItem, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_list_item_content, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VListItemTitle, { class: "caption" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(typingMessage.value)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(typingMessage.value), 1)
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VListItemTitle, { class: "caption" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(typingMessage.value), 1)
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
                            createVNode(_component_v_list_item_content, null, {
                              default: withCtx(() => [
                                createVNode(VListItemTitle, { class: "caption" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(typingMessage.value), 1)
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
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    messages.value.length > 0 ? (openBlock(), createBlock(VList, { key: 0 }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(messages.value, (message, index) => {
                          return openBlock(), createBlock(_component_v_list_item_group, { key: index }, {
                            default: withCtx(() => [
                              createVNode(VListItem, null, {
                                default: withCtx(() => [
                                  createVNode("div", {
                                    class: ["bubble-chat", { "float-end": message.sender === username.value }]
                                  }, [
                                    createVNode("h5", { className: "mb-1" }, toDisplayString(message.sender), 1),
                                    createVNode("p", { className: "bubble-chat-text" }, toDisplayString(message.text), 1),
                                    createVNode("span", { className: "bubble-chat-time" }, toDisplayString(message.time), 1)
                                  ], 2)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    typing.value ? (openBlock(), createBlock(VListItem, { key: 1 }, {
                      default: withCtx(() => [
                        createVNode(_component_v_list_item_content, null, {
                          default: withCtx(() => [
                            createVNode(VListItemTitle, { class: "caption" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(typingMessage.value), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardActions, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VTextField, {
                    modelValue: newMessage.value,
                    "onUpdate:modelValue": ($event) => newMessage.value = $event,
                    label: "Type a message...",
                    "hide-details": "",
                    onKeydown: sendMessage
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, {
                    onClick: sendMessage,
                    disabled: newMessage.value.trim() === "",
                    icon: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`mdi-send`);
                            } else {
                              return [
                                createTextVNode("mdi-send")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VIcon, null, {
                            default: withCtx(() => [
                              createTextVNode("mdi-send")
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
                    createVNode(VTextField, {
                      modelValue: newMessage.value,
                      "onUpdate:modelValue": ($event) => newMessage.value = $event,
                      label: "Type a message...",
                      "hide-details": "",
                      onKeydown: withKeys(sendMessage, ["enter"])
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(VBtn, {
                      onClick: sendMessage,
                      disabled: newMessage.value.trim() === "",
                      icon: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, null, {
                          default: withCtx(() => [
                            createTextVNode("mdi-send")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["disabled"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardTitle, {
                class: "headline text-white bg-primary d-flex",
                style: { "align-items": "center" }
              }, {
                default: withCtx(() => [
                  createVNode(VIcon, {
                    class: "icon-back",
                    onClick: ($event) => unref(router).back()
                  }, {
                    default: withCtx(() => [
                      createTextVNode("mdi-arrow-left-bold")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode("img", {
                    src: room.value.img,
                    alt: "",
                    class: "room-img mr-2"
                  }, null, 8, ["src"]),
                  createVNode("b", { style: { "flex": "auto" } }, toDisplayString(room.value.name), 1),
                  createVNode(VMenu, null, {
                    activator: withCtx(({ props }) => [
                      createVNode(VIcon, mergeProps({ class: "icon-menus" }, props), {
                        default: withCtx(() => [
                          createTextVNode("mdi-dots-vertical")
                        ]),
                        _: 2
                      }, 1040)
                    ]),
                    default: withCtx(() => [
                      createVNode(VList, { class: "py-0" }, {
                        default: withCtx(() => [
                          createVNode(VListItem, null, {
                            default: withCtx(() => [
                              createVNode(VListItemTitle, null, {
                                default: withCtx(() => [
                                  createVNode(VBtn, {
                                    text: "",
                                    block: "",
                                    onClick: withModifiers(($event) => toShowMembers(), ["prevent"])
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Members")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ]),
                                _: 1
                              }),
                              createVNode(VListItemTitle, null, {
                                default: withCtx(() => [
                                  createVNode(VBtn, {
                                    text: "",
                                    block: "",
                                    onClick: withModifiers(($event) => toCopyCode(), ["prevent"])
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Invite")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
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
              }),
              createVNode(VDivider),
              createVNode(VCardText, {
                class: "body-chat",
                id: "listChat"
              }, {
                default: withCtx(() => [
                  messages.value.length > 0 ? (openBlock(), createBlock(VList, { key: 0 }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(messages.value, (message, index) => {
                        return openBlock(), createBlock(_component_v_list_item_group, { key: index }, {
                          default: withCtx(() => [
                            createVNode(VListItem, null, {
                              default: withCtx(() => [
                                createVNode("div", {
                                  class: ["bubble-chat", { "float-end": message.sender === username.value }]
                                }, [
                                  createVNode("h5", { className: "mb-1" }, toDisplayString(message.sender), 1),
                                  createVNode("p", { className: "bubble-chat-text" }, toDisplayString(message.text), 1),
                                  createVNode("span", { className: "bubble-chat-time" }, toDisplayString(message.time), 1)
                                ], 2)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  typing.value ? (openBlock(), createBlock(VListItem, { key: 1 }, {
                    default: withCtx(() => [
                      createVNode(_component_v_list_item_content, null, {
                        default: withCtx(() => [
                          createVNode(VListItemTitle, { class: "caption" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(typingMessage.value), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                _: 1
              }),
              createVNode(VDivider),
              createVNode(VCardActions, null, {
                default: withCtx(() => [
                  createVNode(VTextField, {
                    modelValue: newMessage.value,
                    "onUpdate:modelValue": ($event) => newMessage.value = $event,
                    label: "Type a message...",
                    "hide-details": "",
                    onKeydown: withKeys(sendMessage, ["enter"])
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(VBtn, {
                    onClick: sendMessage,
                    disabled: newMessage.value.trim() === "",
                    icon: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(VIcon, null, {
                        default: withCtx(() => [
                          createTextVNode("mdi-send")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VDialog, {
        modelValue: dialogMembers.value,
        "onUpdate:modelValue": ($event) => dialogMembers.value = $event,
        transition: "dialog-bottom-transition",
        width: "20%"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VToolbar, {
                    color: "primary",
                    title: "Member's List"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, { class: "py-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<ul data-v-59187ee7${_scopeId3}><!--[-->`);
                        ssrRenderList(members.value, (item, i) => {
                          _push4(`<li class="ml-4" data-v-59187ee7${_scopeId3}>${ssrInterpolate(item.username)}</li>`);
                        });
                        _push4(`<!--]--></ul>`);
                      } else {
                        return [
                          createVNode("ul", null, [
                            (openBlock(true), createBlock(Fragment, null, renderList(members.value, (item, i) => {
                              return openBlock(), createBlock("li", {
                                key: i,
                                class: "ml-4"
                              }, toDisplayString(item.username), 1);
                            }), 128))
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardActions, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          color: "warning",
                          variant: "outlined",
                          class: "mr-3",
                          onClick: ($event) => dialogMembers.value = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Close`);
                            } else {
                              return [
                                createTextVNode("Close")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            color: "warning",
                            variant: "outlined",
                            class: "mr-3",
                            onClick: ($event) => dialogMembers.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Close")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VToolbar, {
                      color: "primary",
                      title: "Member's List"
                    }),
                    createVNode(VCardText, { class: "py-4" }, {
                      default: withCtx(() => [
                        createVNode("ul", null, [
                          (openBlock(true), createBlock(Fragment, null, renderList(members.value, (item, i) => {
                            return openBlock(), createBlock("li", {
                              key: i,
                              class: "ml-4"
                            }, toDisplayString(item.username), 1);
                          }), 128))
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(VCardActions, null, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          color: "warning",
                          variant: "outlined",
                          class: "mr-3",
                          onClick: ($event) => dialogMembers.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Close")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
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
                    title: "Member's List"
                  }),
                  createVNode(VCardText, { class: "py-4" }, {
                    default: withCtx(() => [
                      createVNode("ul", null, [
                        (openBlock(true), createBlock(Fragment, null, renderList(members.value, (item, i) => {
                          return openBlock(), createBlock("li", {
                            key: i,
                            class: "ml-4"
                          }, toDisplayString(item.username), 1);
                        }), 128))
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(VCardActions, null, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        color: "warning",
                        variant: "outlined",
                        class: "mr-3",
                        onClick: ($event) => dialogMembers.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Close")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
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
        flag: flagAlert.value,
        text: textAlert.value,
        modelValue: showAlert.value,
        "onUpdate:modelValue": ($event) => showAlert.value = $event
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/iris/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-59187ee7"]]);
export {
  _id_ as default
};
//# sourceMappingURL=_id_-e6b2d263.js.map
