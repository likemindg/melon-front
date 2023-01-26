const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  devServer: {
    client: {
      overlay: false,
    },
  },
});

// @는 vue.congig.js의 설정으로 alias를 사용
// module.exports = {
//   configureWebpack: {
//     resolve: {
//       alias: {
//         "@": path.join(__dirname, "src/"),
//       },
//     },
//   },
// };
