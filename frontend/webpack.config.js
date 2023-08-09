resolve: {
    fallback: {
      crypto; require.resolve('crypto-browserify'),
      http; require.resolve('stream-http'),
      https; require.resolve('https-browserify'),
      fs; false,
      path;require.resolve('path-browserify')
    }
  }