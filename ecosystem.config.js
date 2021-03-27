module.exports = {
    apps : [{
      name: "index",
      script: "./index.js",
      env: {
        NODE_ENV: process.env.NODE_ENV || "development",
        PORT: process.env.PORT,
        AWS_BUCKET_NAME: process.env.AWS_BUCKET_NAME
      },
    //   env_production: {
    //     NODE_ENV: "production",
    //   }
    }]
  }