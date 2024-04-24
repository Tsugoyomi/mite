import { defineComponent, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext, ref, reactive, unref, isRef, withKeys } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderAttrs } from "vue/server-renderer";
import { V as VRow, a as VCol } from "./VRow-1c38f8b7.js";
import { V as VCard, a as VCardTitle, b as VCardText } from "./VCard-42565dd5.js";
import { A as VIcon } from "./VAvatar-efb97b93.js";
import { V as VDivider } from "./VDivider-3859fda3.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "vue-router";
import axios from "axios";
import { V as VAutocomplete } from "./VAutocomplete-16cab679.js";
import { V as VListItem } from "./VList-449af631.js";
import { V as VTooltip } from "./VTooltip-29d37d17.js";
import { a as VOverlay } from "./VOverlay-3b671092.js";
import { d as VProgressCircular } from "./index-d9ac0006.js";
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
import "ufo";
import "defu";
import "./VTextField-97fb35c9.js";
import "./VMenu-a1a800dd.js";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "detail-anime",
  __ssrInlineRender: true,
  props: {
    data: { default: {} }
  },
  emits: ["back", "toDetailEps"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const toDetailTonton = (data) => {
      emits("toDetailEps", data.url);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VRow, mergeProps({ class: "w-100 mt-4" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, mergeProps({ class: "elevation-3 card-group" }, props, { ripple: false }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "10",
                                class: "headline text-primary pb-2 limit-text"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VIcon, {
                                      color: "primary",
                                      onClick: ($event) => emits("back"),
                                      class: "mb-1 back-to-list"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`mdi-arrow-left-bold`);
                                        } else {
                                          return [
                                            createTextVNode("mdi-arrow-left-bold")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(` <b data-v-5b2149bd${_scopeId5}>${ssrInterpolate(_ctx.data.title)}</b>`);
                                  } else {
                                    return [
                                      createVNode(VIcon, {
                                        color: "primary",
                                        onClick: ($event) => emits("back"),
                                        class: "mb-1 back-to-list"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-arrow-left-bold")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"]),
                                      createTextVNode(),
                                      createVNode("b", null, toDisplayString(_ctx.data.title), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "2",
                                class: "pb-2"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="d-flex rating-point" data-v-5b2149bd${_scopeId5}>`);
                                    _push6(ssrRenderComponent(VIcon, { class: "mr-1" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`mdi-star`);
                                        } else {
                                          return [
                                            createTextVNode("mdi-star")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`<span data-v-5b2149bd${_scopeId5}>${ssrInterpolate(_ctx.data.rate)}</span></div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "d-flex rating-point" }, [
                                        createVNode(VIcon, { class: "mr-1" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-star")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode("span", null, toDisplayString(_ctx.data.rate), 1)
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "10",
                                  class: "headline text-primary pb-2 limit-text"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      color: "primary",
                                      onClick: ($event) => emits("back"),
                                      class: "mb-1 back-to-list"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-arrow-left-bold")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"]),
                                    createTextVNode(),
                                    createVNode("b", null, toDisplayString(_ctx.data.title), 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "2",
                                  class: "pb-2"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "d-flex rating-point" }, [
                                      createVNode(VIcon, { class: "mr-1" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-star")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("span", null, toDisplayString(_ctx.data.rate), 1)
                                    ])
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
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                sm: "10",
                                class: "headline text-primary pb-2 limit-text"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    color: "primary",
                                    onClick: ($event) => emits("back"),
                                    class: "mb-1 back-to-list"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-arrow-left-bold")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"]),
                                  createTextVNode(),
                                  createVNode("b", null, toDisplayString(_ctx.data.title), 1)
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "2",
                                class: "pb-2"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "d-flex rating-point" }, [
                                    createVNode(VIcon, { class: "mr-1" }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-star")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("span", null, toDisplayString(_ctx.data.rate), 1)
                                  ])
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
                  _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "3"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<img${ssrRenderAttr("src", _ctx.data.img)} alt="" width="100%" data-v-5b2149bd${_scopeId5}>`);
                                  } else {
                                    return [
                                      createVNode("img", {
                                        src: _ctx.data.img,
                                        alt: "",
                                        width: "100%"
                                      }, null, 8, ["src"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "9"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VRow, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<!--[-->`);
                                          ssrRenderList(_ctx.data.etc, (item, i) => {
                                            _push7(ssrRenderComponent(VCol, {
                                              cols: "12",
                                              sm: "6",
                                              key: i
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<p data-v-5b2149bd${_scopeId7}>${ssrInterpolate(item)}</p>`);
                                                } else {
                                                  return [
                                                    createVNode("p", null, toDisplayString(item), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          });
                                          _push7(`<!--]-->`);
                                        } else {
                                          return [
                                            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.data.etc, (item, i) => {
                                              return openBlock(), createBlock(VCol, {
                                                cols: "12",
                                                sm: "6",
                                                key: i
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("p", null, toDisplayString(item), 1)
                                                ]),
                                                _: 2
                                              }, 1024);
                                            }), 128))
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.data.etc, (item, i) => {
                                            return openBlock(), createBlock(VCol, {
                                              cols: "12",
                                              sm: "6",
                                              key: i
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("p", null, toDisplayString(item), 1)
                                              ]),
                                              _: 2
                                            }, 1024);
                                          }), 128))
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
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      src: _ctx.data.img,
                                      alt: "",
                                      width: "100%"
                                    }, null, 8, ["src"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "9"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.data.etc, (item, i) => {
                                          return openBlock(), createBlock(VCol, {
                                            cols: "12",
                                            sm: "6",
                                            key: i
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("p", null, toDisplayString(item), 1)
                                            ]),
                                            _: 2
                                          }, 1024);
                                        }), 128))
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
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                sm: "3"
                              }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: _ctx.data.img,
                                    alt: "",
                                    width: "100%"
                                  }, null, 8, ["src"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "9"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.data.etc, (item, i) => {
                                        return openBlock(), createBlock(VCol, {
                                          cols: "12",
                                          sm: "6",
                                          key: i
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("p", null, toDisplayString(item), 1)
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
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
                    createVNode(VCardTitle, null, {
                      default: withCtx(() => [
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              sm: "10",
                              class: "headline text-primary pb-2 limit-text"
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  color: "primary",
                                  onClick: ($event) => emits("back"),
                                  class: "mb-1 back-to-list"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-arrow-left-bold")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createTextVNode(),
                                createVNode("b", null, toDisplayString(_ctx.data.title), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              sm: "2",
                              class: "pb-2"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "d-flex rating-point" }, [
                                  createVNode(VIcon, { class: "mr-1" }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-star")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("span", null, toDisplayString(_ctx.data.rate), 1)
                                ])
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
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              sm: "3"
                            }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: _ctx.data.img,
                                  alt: "",
                                  width: "100%"
                                }, null, 8, ["src"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              sm: "9"
                            }, {
                              default: withCtx(() => [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.data.etc, (item, i) => {
                                      return openBlock(), createBlock(VCol, {
                                        cols: "12",
                                        sm: "6",
                                        key: i
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("p", null, toDisplayString(item), 1)
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128))
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
            _push2(ssrRenderComponent(VCard, { class: "mt-4 elevation-3 card-group" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="d-flex mb-4" data-v-5b2149bd${_scopeId3}><!--[-->`);
                        ssrRenderList(_ctx.data.tags, (item) => {
                          _push4(`<div class="badge-tags mr-2" data-v-5b2149bd${_scopeId3}>${ssrInterpolate(item)}</div>`);
                        });
                        _push4(`<!--]--></div><h3 class="mb-3" data-v-5b2149bd${_scopeId3}>Sinopsis :</h3><p data-v-5b2149bd${_scopeId3}>${ssrInterpolate(_ctx.data.sinopsis)}</p>`);
                      } else {
                        return [
                          createVNode("div", { class: "d-flex mb-4" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.data.tags, (item) => {
                              return openBlock(), createBlock("div", {
                                key: item,
                                class: "badge-tags mr-2"
                              }, toDisplayString(item), 1);
                            }), 128))
                          ]),
                          createVNode("h3", { class: "mb-3" }, "Sinopsis :"),
                          createVNode("p", null, toDisplayString(_ctx.data.sinopsis), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-flex mb-4" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.data.tags, (item) => {
                            return openBlock(), createBlock("div", {
                              key: item,
                              class: "badge-tags mr-2"
                            }, toDisplayString(item), 1);
                          }), 128))
                        ]),
                        createVNode("h3", { class: "mb-3" }, "Sinopsis :"),
                        createVNode("p", null, toDisplayString(_ctx.data.sinopsis), 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCard, { class: "mt-4 mb-2 elevation-3 card-episode" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardText, { class: "py-0 px-3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="w-100" data-v-5b2149bd${_scopeId3}>`);
                        _push4(ssrRenderComponent(VRow, { class: "bg-primary header-episode mb-1" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, { cols: "2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Eps`);
                                  } else {
                                    return [
                                      createTextVNode("Eps")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, { cols: "5" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Judul`);
                                  } else {
                                    return [
                                      createTextVNode("Judul")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, { cols: "5" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Tanggal Rilis`);
                                  } else {
                                    return [
                                      createTextVNode("Tanggal Rilis")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, { cols: "2" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Eps")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "5" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Judul")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "5" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Tanggal Rilis")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<!--[-->`);
                        ssrRenderList(_ctx.data.listEps, (item, i) => {
                          _push4(ssrRenderComponent(VRow, {
                            key: i,
                            class: i % 2 === 0 ? "eps-genap" : "eps-ganjil",
                            onClick: ($event) => toDetailTonton(item)
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VCol, { cols: "2" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(item.eps)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(item.eps), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VCol, { cols: "5" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(item.epsTitle)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(item.epsTitle), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VCol, { cols: "5" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(item.date)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(item.date), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VCol, { cols: "2" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.eps), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(VCol, { cols: "5" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.epsTitle), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(VCol, { cols: "5" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.date), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]--></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "w-100" }, [
                            createVNode(VRow, { class: "bg-primary header-episode mb-1" }, {
                              default: withCtx(() => [
                                createVNode(VCol, { cols: "2" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Eps")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "5" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Judul")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "5" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Tanggal Rilis")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.data.listEps, (item, i) => {
                              return openBlock(), createBlock(VRow, {
                                key: i,
                                class: i % 2 === 0 ? "eps-genap" : "eps-ganjil",
                                onClick: ($event) => toDetailTonton(item)
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCol, { cols: "2" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.eps), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(VCol, { cols: "5" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.epsTitle), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(VCol, { cols: "5" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.date), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1032, ["class", "onClick"]);
                            }), 128))
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardText, { class: "py-0 px-3" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "w-100" }, [
                          createVNode(VRow, { class: "bg-primary header-episode mb-1" }, {
                            default: withCtx(() => [
                              createVNode(VCol, { cols: "2" }, {
                                default: withCtx(() => [
                                  createTextVNode("Eps")
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "5" }, {
                                default: withCtx(() => [
                                  createTextVNode("Judul")
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "5" }, {
                                default: withCtx(() => [
                                  createTextVNode("Tanggal Rilis")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.data.listEps, (item, i) => {
                            return openBlock(), createBlock(VRow, {
                              key: i,
                              class: i % 2 === 0 ? "eps-genap" : "eps-ganjil",
                              onClick: ($event) => toDetailTonton(item)
                            }, {
                              default: withCtx(() => [
                                createVNode(VCol, { cols: "2" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.eps), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(VCol, { cols: "5" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.epsTitle), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(VCol, { cols: "5" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.date), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["class", "onClick"]);
                          }), 128))
                        ])
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
              createVNode(VCard, mergeProps({ class: "elevation-3 card-group" }, props, { ripple: false }), {
                default: withCtx(() => [
                  createVNode(VCardTitle, null, {
                    default: withCtx(() => [
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            sm: "10",
                            class: "headline text-primary pb-2 limit-text"
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                color: "primary",
                                onClick: ($event) => emits("back"),
                                class: "mb-1 back-to-list"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-arrow-left-bold")
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createTextVNode(),
                              createVNode("b", null, toDisplayString(_ctx.data.title), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "2",
                            class: "pb-2"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex rating-point" }, [
                                createVNode(VIcon, { class: "mr-1" }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-star")
                                  ]),
                                  _: 1
                                }),
                                createVNode("span", null, toDisplayString(_ctx.data.rate), 1)
                              ])
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
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            sm: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode("img", {
                                src: _ctx.data.img,
                                alt: "",
                                width: "100%"
                              }, null, 8, ["src"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "9"
                          }, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.data.etc, (item, i) => {
                                    return openBlock(), createBlock(VCol, {
                                      cols: "12",
                                      sm: "6",
                                      key: i
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("p", null, toDisplayString(item), 1)
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
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
              }, 16),
              createVNode(VCard, { class: "mt-4 elevation-3 card-group" }, {
                default: withCtx(() => [
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "d-flex mb-4" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.data.tags, (item) => {
                          return openBlock(), createBlock("div", {
                            key: item,
                            class: "badge-tags mr-2"
                          }, toDisplayString(item), 1);
                        }), 128))
                      ]),
                      createVNode("h3", { class: "mb-3" }, "Sinopsis :"),
                      createVNode("p", null, toDisplayString(_ctx.data.sinopsis), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCard, { class: "mt-4 mb-2 elevation-3 card-episode" }, {
                default: withCtx(() => [
                  createVNode(VCardText, { class: "py-0 px-3" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "w-100" }, [
                        createVNode(VRow, { class: "bg-primary header-episode mb-1" }, {
                          default: withCtx(() => [
                            createVNode(VCol, { cols: "2" }, {
                              default: withCtx(() => [
                                createTextVNode("Eps")
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { cols: "5" }, {
                              default: withCtx(() => [
                                createTextVNode("Judul")
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { cols: "5" }, {
                              default: withCtx(() => [
                                createTextVNode("Tanggal Rilis")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.data.listEps, (item, i) => {
                          return openBlock(), createBlock(VRow, {
                            key: i,
                            class: i % 2 === 0 ? "eps-genap" : "eps-ganjil",
                            onClick: ($event) => toDetailTonton(item)
                          }, {
                            default: withCtx(() => [
                              createVNode(VCol, { cols: "2" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.eps), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(VCol, { cols: "5" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.epsTitle), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(VCol, { cols: "5" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.date), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1032, ["class", "onClick"]);
                        }), 128))
                      ])
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
});
const detailAnime_vue_vue_type_style_index_0_scoped_5b2149bd_lang = "";
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/innocence/detail-anime.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-5b2149bd"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "detail-tonton",
  __ssrInlineRender: true,
  props: {
    data: { default: {} }
  },
  emits: ["back"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VRow, mergeProps({ class: "w-100 mt-4" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, mergeProps({ class: "elevation-3 card-group" }, props, { ripple: false }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, { class: "headline text-primary" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, {
                          color: "primary",
                          onClick: ($event) => emits("back"),
                          class: "mb-1 back-to-list"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`mdi-arrow-left-bold`);
                            } else {
                              return [
                                createTextVNode("mdi-arrow-left-bold")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(` <b data-v-c65552c4${_scopeId3}>${ssrInterpolate(_ctx.data.title)}</b>`);
                      } else {
                        return [
                          createVNode(VIcon, {
                            color: "primary",
                            onClick: ($event) => emits("back"),
                            class: "mb-1 back-to-list"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-arrow-left-bold")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createTextVNode(),
                          createVNode("b", null, toDisplayString(_ctx.data.title), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="w-100 text-center mb-4" data-v-c65552c4${_scopeId3}><iframe${ssrRenderAttr("src", _ctx.data.embedUrl)} width="70%" height="450" allowfullscreen data-rocket-lazyload="fitvidscompatible"${ssrRenderAttr("data-lazy-src", _ctx.data.embedUrl)} data-v-c65552c4${_scopeId3}></iframe></div><div class="d-flex mb-4" data-v-c65552c4${_scopeId3}><!--[-->`);
                        ssrRenderList(_ctx.data.tags, (item) => {
                          _push4(`<div class="badge-tags mr-2" data-v-c65552c4${_scopeId3}>${ssrInterpolate(item)}</div>`);
                        });
                        _push4(`<!--]--></div><div data-v-c65552c4${_scopeId3}><b data-v-c65552c4${_scopeId3}>Description :</b><p data-v-c65552c4${_scopeId3}>${ssrInterpolate(_ctx.data.desc)}</p></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "w-100 text-center mb-4" }, [
                            createVNode("iframe", {
                              src: _ctx.data.embedUrl,
                              width: "70%",
                              height: "450",
                              allowfullscreen: "",
                              "data-rocket-lazyload": "fitvidscompatible",
                              "data-lazy-src": _ctx.data.embedUrl
                            }, null, 8, ["src", "data-lazy-src"])
                          ]),
                          createVNode("div", { class: "d-flex mb-4" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.data.tags, (item) => {
                              return openBlock(), createBlock("div", {
                                key: item,
                                class: "badge-tags mr-2"
                              }, toDisplayString(item), 1);
                            }), 128))
                          ]),
                          createVNode("div", null, [
                            createVNode("b", null, "Description :"),
                            createVNode("p", null, toDisplayString(_ctx.data.desc), 1)
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardTitle, { class: "headline text-primary" }, {
                      default: withCtx(() => [
                        createVNode(VIcon, {
                          color: "primary",
                          onClick: ($event) => emits("back"),
                          class: "mb-1 back-to-list"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("mdi-arrow-left-bold")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createTextVNode(),
                        createVNode("b", null, toDisplayString(_ctx.data.title), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VDivider),
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "w-100 text-center mb-4" }, [
                          createVNode("iframe", {
                            src: _ctx.data.embedUrl,
                            width: "70%",
                            height: "450",
                            allowfullscreen: "",
                            "data-rocket-lazyload": "fitvidscompatible",
                            "data-lazy-src": _ctx.data.embedUrl
                          }, null, 8, ["src", "data-lazy-src"])
                        ]),
                        createVNode("div", { class: "d-flex mb-4" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.data.tags, (item) => {
                            return openBlock(), createBlock("div", {
                              key: item,
                              class: "badge-tags mr-2"
                            }, toDisplayString(item), 1);
                          }), 128))
                        ]),
                        createVNode("div", null, [
                          createVNode("b", null, "Description :"),
                          createVNode("p", null, toDisplayString(_ctx.data.desc), 1)
                        ])
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
              createVNode(VCard, mergeProps({ class: "elevation-3 card-group" }, props, { ripple: false }), {
                default: withCtx(() => [
                  createVNode(VCardTitle, { class: "headline text-primary" }, {
                    default: withCtx(() => [
                      createVNode(VIcon, {
                        color: "primary",
                        onClick: ($event) => emits("back"),
                        class: "mb-1 back-to-list"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-arrow-left-bold")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createTextVNode(),
                      createVNode("b", null, toDisplayString(_ctx.data.title), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(VDivider),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "w-100 text-center mb-4" }, [
                        createVNode("iframe", {
                          src: _ctx.data.embedUrl,
                          width: "70%",
                          height: "450",
                          allowfullscreen: "",
                          "data-rocket-lazyload": "fitvidscompatible",
                          "data-lazy-src": _ctx.data.embedUrl
                        }, null, 8, ["src", "data-lazy-src"])
                      ]),
                      createVNode("div", { class: "d-flex mb-4" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.data.tags, (item) => {
                          return openBlock(), createBlock("div", {
                            key: item,
                            class: "badge-tags mr-2"
                          }, toDisplayString(item), 1);
                        }), 128))
                      ]),
                      createVNode("div", null, [
                        createVNode("b", null, "Description :"),
                        createVNode("p", null, toDisplayString(_ctx.data.desc), 1)
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const detailTonton_vue_vue_type_style_index_0_scoped_c65552c4_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/innocence/detail-tonton.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-c65552c4"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const list = ref([]);
    const isDetail = ref(false);
    const isDetailAnime = ref(false);
    const dataDetail = ref();
    const dataDetailAnime = ref();
    const q = ref("");
    const selected = ref();
    const options = reactive({
      listSearchAnime: []
    });
    const isLoading = reactive({
      search: false,
      data: false
    });
    const rtoSearch = ref();
    const getList = async () => {
      isLoading.data = true;
      await axios.get("http://127.0.0.1:8000/anime/list/common").then((res) => {
        list.value = res.data.data;
      }).catch((err) => {
        throw new Error(err);
      }).finally(() => {
        isLoading.data = false;
      });
    };
    const toDetailTonton = async (url) => {
      isLoading.data = true;
      await axios.post("http://127.0.0.1:8000/anime/detail/episode", { url }).then((res) => {
        dataDetail.value = res.data.data;
        isDetailAnime.value = false;
        isDetail.value = true;
      }).catch((err) => {
        throw new Error(err);
      }).finally(() => {
        isLoading.data = false;
      });
    };
    const search = async () => {
      var _a;
      isLoading.data = true;
      (_a = document.getElementById("searchbox")) == null ? void 0 : _a.blur();
      if (q.value && q.value.length > 0) {
        await axios.post("http://127.0.0.1:8000/anime/search", { name: q.value }).then((res) => {
          list.value = res.data.data;
        }).catch((err) => {
          throw new Error(err);
        }).finally(() => {
          isLoading.data = false;
        });
      } else
        getList();
    };
    const onAnimeSearch = (data) => {
      clearTimeout(rtoSearch.value);
      rtoSearch.value = setTimeout(async () => {
        isLoading.search = true;
        await axios.post("http://127.0.0.1:8000/anime/search/query", { name: q.value }).then((res) => {
          const data2 = res.data.data;
          isLoading.search = false;
          options.listSearchAnime = data2.anime ? data2.anime[0].all : [];
        }).catch((err) => {
          throw new Error(err);
        });
      }, 500);
    };
    const getAnimeSearchDetail = async (data) => {
      isLoading.data = true;
      await axios.post("http://127.0.0.1:8000/anime/detail", { url: data ? data : selected.value }).then((res) => {
        dataDetailAnime.value = res.data.data;
        isDetail.value = false;
        isDetailAnime.value = true;
      }).catch((err) => {
        throw new Error(err);
      }).finally(() => {
        isLoading.data = false;
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InnocenceDetailAnime = __nuxt_component_0;
      const _component_InnocenceDetailTonton = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-100 py-4" }, _attrs))} data-v-0f066340>`);
      if (!unref(isDetail) && !unref(isDetailAnime)) {
        _push(ssrRenderComponent(VRow, { class: "w-100" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VCol, {
                cols: "12",
                sm: "6"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<h1 class="text-red" data-v-0f066340${_scopeId2}>Hot Anime!!</h1>`);
                  } else {
                    return [
                      createVNode("h1", { class: "text-red" }, "Hot Anime!!")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(VCol, {
                cols: "12",
                sm: "6",
                style: { "align-content": "center" }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VAutocomplete, {
                      id: "searchbox",
                      modelValue: unref(selected),
                      "onUpdate:modelValue": ($event) => isRef(selected) ? selected.value = $event : null,
                      search: unref(q),
                      "onUpdate:search": ($event) => isRef(q) ? q.value = $event : null,
                      items: unref(options).listSearchAnime,
                      color: "blue-grey-lighten-2",
                      "item-title": "post_title",
                      "item-value": "post_link",
                      placeholder: "Search...",
                      density: "compact",
                      variant: "outlined",
                      "prepend-inner-icon": "mdi-magnify",
                      "single-line": "",
                      "hide-details": "",
                      rounded: "",
                      clearable: "",
                      loading: unref(isLoading).search,
                      onKeypress: onAnimeSearch,
                      onKeyup: search
                    }, {
                      item: withCtx(({ props, item }, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VListItem, mergeProps(props, {
                            "prepend-avatar": item.raw.post_image,
                            subtitle: item.raw.post_type,
                            title: item.raw.post_title,
                            onClick: ($event) => getAnimeSearchDetail(null)
                          }), null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VListItem, mergeProps(props, {
                              "prepend-avatar": item.raw.post_image,
                              subtitle: item.raw.post_type,
                              title: item.raw.post_title,
                              onClick: ($event) => getAnimeSearchDetail(null)
                            }), null, 16, ["prepend-avatar", "subtitle", "title", "onClick"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VAutocomplete, {
                        id: "searchbox",
                        modelValue: unref(selected),
                        "onUpdate:modelValue": ($event) => isRef(selected) ? selected.value = $event : null,
                        search: unref(q),
                        "onUpdate:search": ($event) => isRef(q) ? q.value = $event : null,
                        items: unref(options).listSearchAnime,
                        color: "blue-grey-lighten-2",
                        "item-title": "post_title",
                        "item-value": "post_link",
                        placeholder: "Search...",
                        density: "compact",
                        variant: "outlined",
                        "prepend-inner-icon": "mdi-magnify",
                        "single-line": "",
                        "hide-details": "",
                        rounded: "",
                        clearable: "",
                        loading: unref(isLoading).search,
                        onKeypress: onAnimeSearch,
                        onKeyup: withKeys(search, ["enter"])
                      }, {
                        item: withCtx(({ props, item }) => [
                          createVNode(VListItem, mergeProps(props, {
                            "prepend-avatar": item.raw.post_image,
                            subtitle: item.raw.post_type,
                            title: item.raw.post_title,
                            onClick: ($event) => getAnimeSearchDetail(null)
                          }), null, 16, ["prepend-avatar", "subtitle", "title", "onClick"])
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue", "search", "onUpdate:search", "items", "loading"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(VCol, {
                  cols: "12",
                  sm: "6"
                }, {
                  default: withCtx(() => [
                    createVNode("h1", { class: "text-red" }, "Hot Anime!!")
                  ]),
                  _: 1
                }),
                createVNode(VCol, {
                  cols: "12",
                  sm: "6",
                  style: { "align-content": "center" }
                }, {
                  default: withCtx(() => [
                    createVNode(VAutocomplete, {
                      id: "searchbox",
                      modelValue: unref(selected),
                      "onUpdate:modelValue": ($event) => isRef(selected) ? selected.value = $event : null,
                      search: unref(q),
                      "onUpdate:search": ($event) => isRef(q) ? q.value = $event : null,
                      items: unref(options).listSearchAnime,
                      color: "blue-grey-lighten-2",
                      "item-title": "post_title",
                      "item-value": "post_link",
                      placeholder: "Search...",
                      density: "compact",
                      variant: "outlined",
                      "prepend-inner-icon": "mdi-magnify",
                      "single-line": "",
                      "hide-details": "",
                      rounded: "",
                      clearable: "",
                      loading: unref(isLoading).search,
                      onKeypress: onAnimeSearch,
                      onKeyup: withKeys(search, ["enter"])
                    }, {
                      item: withCtx(({ props, item }) => [
                        createVNode(VListItem, mergeProps(props, {
                          "prepend-avatar": item.raw.post_image,
                          subtitle: item.raw.post_type,
                          title: item.raw.post_title,
                          onClick: ($event) => getAnimeSearchDetail(null)
                        }), null, 16, ["prepend-avatar", "subtitle", "title", "onClick"])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue", "search", "onUpdate:search", "items", "loading"])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (!unref(isDetail) && !unref(isDetailAnime)) {
        _push(ssrRenderComponent(VRow, { class: "w-100" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(list), (item, i) => {
                _push2(ssrRenderComponent(VCol, {
                  cols: "12",
                  sm: "4",
                  md: "3",
                  xl: "2",
                  class: "mb-4 list-group",
                  key: i
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(VTooltip, { location: "top" }, {
                        activator: withCtx(({ props }, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(VCard, mergeProps({ class: "elevation-3 card-group" }, props, {
                              onClick: ($event) => item.type === "L" ? toDetailTonton(item.url) : getAnimeSearchDetail(item.url)
                            }), {
                              default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(VCardTitle, { class: "headline text-primary pt-1 pb-0" }, {
                                    default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<b data-v-0f066340${_scopeId5}>${ssrInterpolate(item.title)}</b>`);
                                      } else {
                                        return [
                                          createVNode("b", null, toDisplayString(item.title), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  _push5(ssrRenderComponent(VDivider, null, null, _parent5, _scopeId4));
                                  _push5(ssrRenderComponent(VCardText, {
                                    class: "img-banner",
                                    style: `background-image: url(${item.img}); background-size: 100% 100%; background-position: center;`
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(VCardTitle, { class: "headline text-primary pt-1 pb-0" }, {
                                      default: withCtx(() => [
                                        createVNode("b", null, toDisplayString(item.title), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(VDivider),
                                    createVNode(VCardText, {
                                      class: "img-banner",
                                      style: `background-image: url(${item.img}); background-size: 100% 100%; background-position: center;`
                                    }, null, 8, ["style"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(VCard, mergeProps({ class: "elevation-3 card-group" }, props, {
                                onClick: ($event) => item.type === "L" ? toDetailTonton(item.url) : getAnimeSearchDetail(item.url)
                              }), {
                                default: withCtx(() => [
                                  createVNode(VCardTitle, { class: "headline text-primary pt-1 pb-0" }, {
                                    default: withCtx(() => [
                                      createVNode("b", null, toDisplayString(item.title), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(VDivider),
                                  createVNode(VCardText, {
                                    class: "img-banner",
                                    style: `background-image: url(${item.img}); background-size: 100% 100%; background-position: center;`
                                  }, null, 8, ["style"])
                                ]),
                                _: 2
                              }, 1040, ["onClick"])
                            ];
                          }
                        }),
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<span data-v-0f066340${_scopeId3}>${ssrInterpolate(item.subTitle)}</span>`);
                          } else {
                            return [
                              createVNode("span", null, toDisplayString(item.subTitle), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(VTooltip, { location: "top" }, {
                          activator: withCtx(({ props }) => [
                            createVNode(VCard, mergeProps({ class: "elevation-3 card-group" }, props, {
                              onClick: ($event) => item.type === "L" ? toDetailTonton(item.url) : getAnimeSearchDetail(item.url)
                            }), {
                              default: withCtx(() => [
                                createVNode(VCardTitle, { class: "headline text-primary pt-1 pb-0" }, {
                                  default: withCtx(() => [
                                    createVNode("b", null, toDisplayString(item.title), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(VDivider),
                                createVNode(VCardText, {
                                  class: "img-banner",
                                  style: `background-image: url(${item.img}); background-size: 100% 100%; background-position: center;`
                                }, null, 8, ["style"])
                              ]),
                              _: 2
                            }, 1040, ["onClick"])
                          ]),
                          default: withCtx(() => [
                            createVNode("span", null, toDisplayString(item.subTitle), 1)
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
                (openBlock(true), createBlock(Fragment, null, renderList(unref(list), (item, i) => {
                  return openBlock(), createBlock(VCol, {
                    cols: "12",
                    sm: "4",
                    md: "3",
                    xl: "2",
                    class: "mb-4 list-group",
                    key: i
                  }, {
                    default: withCtx(() => [
                      createVNode(VTooltip, { location: "top" }, {
                        activator: withCtx(({ props }) => [
                          createVNode(VCard, mergeProps({ class: "elevation-3 card-group" }, props, {
                            onClick: ($event) => item.type === "L" ? toDetailTonton(item.url) : getAnimeSearchDetail(item.url)
                          }), {
                            default: withCtx(() => [
                              createVNode(VCardTitle, { class: "headline text-primary pt-1 pb-0" }, {
                                default: withCtx(() => [
                                  createVNode("b", null, toDisplayString(item.title), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(VDivider),
                              createVNode(VCardText, {
                                class: "img-banner",
                                style: `background-image: url(${item.img}); background-size: 100% 100%; background-position: center;`
                              }, null, 8, ["style"])
                            ]),
                            _: 2
                          }, 1040, ["onClick"])
                        ]),
                        default: withCtx(() => [
                          createVNode("span", null, toDisplayString(item.subTitle), 1)
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
      } else {
        _push(`<!---->`);
      }
      if (unref(isDetailAnime)) {
        _push(ssrRenderComponent(_component_InnocenceDetailAnime, {
          data: unref(dataDetailAnime),
          onBack: ($event) => {
            isDetailAnime.value = false;
            dataDetailAnime.value = null;
          },
          onToDetailEps: toDetailTonton
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(isDetail)) {
        _push(ssrRenderComponent(_component_InnocenceDetailTonton, {
          data: unref(dataDetail),
          onBack: ($event) => {
            isDetail.value = false;
            dataDetail.value = null, unref(dataDetailAnime) ? isDetailAnime.value = true : isDetailAnime.value = false;
          }
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(VOverlay, {
        modelValue: unref(isLoading).data,
        "onUpdate:modelValue": ($event) => unref(isLoading).data = $event,
        class: "align-center justify-center",
        persistent: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VProgressCircular, {
              color: "primary",
              size: "64",
              indeterminate: ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VProgressCircular, {
                color: "primary",
                size: "64",
                indeterminate: ""
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
const index_vue_vue_type_style_index_0_scoped_0f066340_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/innocence/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0f066340"]]);
export {
  index as default
};
//# sourceMappingURL=index-894e7101.js.map
