module.exports = {
  plugins: [
    require('cssnano')({
      preset: 'default',
    }),
    require('autoprefixer'),
    require('postcss-object-fit-images')
  ]
};
