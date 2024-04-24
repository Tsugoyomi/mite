declare module 'nuxt/schema' {
    interface AppConfig {
        // This will entirely replace the existing inferred `theme` property
        theme: {
            // You might want to type this value to add more specific types than Nuxt can infer,
            // such as string literal types
            primaryColor: '#0F2957'
        }
    }
}