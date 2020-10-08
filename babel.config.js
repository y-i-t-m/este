module.exports = api => {
  api.cache(true);

  return {
    "presets": [
      ["@babel/preset-env", {
        targets: [
          "last 2 version",
          "ie >= 11"
        ],
        useBuiltIns: "usage",
        corejs: 3
      }]
    ]
  };
};
