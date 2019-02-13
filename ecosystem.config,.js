module.exports = {
    apps : [{
      name: "app",
      script: "./app.js",
      env: {
        DB_HOST: "igonzalezdb.cm6hb8mfglop.us-east-1.rds.amazonaws.com",
        DB_USER: " IGonzalez",
        DB_PASS: "Crackpokemon94!",
        DB_NAME: "RampUp",
        PORT: "3000",
      },
      env_production: {
        NODE_ENV: "production",
      }
    }]
  }