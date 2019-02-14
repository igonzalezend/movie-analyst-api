module.exports = {
    apps : [{
      name: "Movies_API",
      script: "./server.js",
      env: {
        NODE_ENV: "development",
        DB_HOST: "igonzalezdb.cm6hb8mfglop.us-east-1.rds.amazonaws.com",
        DB_USER: "IGonzalez",
        DB_PASS: "Crackpokemon94!",
        DB_NAME: "RampUp",
        PORT: "3000",
      },
      env_production: {
        NODE_ENV: "production",
      }
    }]
  }