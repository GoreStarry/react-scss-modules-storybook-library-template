import { mergeConfig } from 'vite';

export default {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  // addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-knobs", "@storybook/addon-storysource"],
  staticDirs: ["../public"],
  async viteFinal(config, {
    configType
  }) {
    // Merge custom configuration into the default config

    if (configType === "DEVELOPMENT") {
      // Your development configuration goes here
    }
    if (configType === "PRODUCTION") {
      // Your production configuration goes here.
    }
    return mergeConfig(config, {
      // Use the same "resolve" configuration as your app
      resolve: (await import("../vite.config.js")).default.resolve,
      // Add dependencies to pre-optimization
      optimizeDeps: {
        include: ["storybook-dark-mode"]
      }
    });
  },
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  docs: {
    docsPage: "automatic"
  }
};
