import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "auth" | "default"
declare module "C:/Users/Asus TUF/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}