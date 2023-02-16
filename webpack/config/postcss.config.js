module.exports = (api) => {
  return {
    // 你可以指定下面提到的所有选项 https://postcss.org/api/#processoptions
    plugins: [
      // PostCSS 插件
      ["postcss-px-to-viewport", { viewportWidth: 375 }],
    ],
  };
};
