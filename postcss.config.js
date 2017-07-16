var config = {};

if(process.env.NODE_ENV === 'production') {
  config = {
    plugins: [
      require('cssnano')({ preset: 'default' }),
      require('autoprefixer')({
        browsers: [
          'last 2 versions',
          '> 1%'
        ]
      })
    ]
  }
}

module.exports = config;
