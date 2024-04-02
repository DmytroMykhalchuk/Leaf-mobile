import { createConfig } from "@gluestack-style/react";
import { config } from "@gluestack-ui/config";

export const globalTheme = createConfig({
    ...config,
    tokens: {
        ...config.tokens,
        colors: {
            ...config.tokens.colors,
        },

        fontSizes: {
            ...config.tokens.fontSizes,
        },
    },
});