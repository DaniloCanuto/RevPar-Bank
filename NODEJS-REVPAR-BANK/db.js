const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "postgres",
  password: "Revpar251",
  database: "postgres",
  port: 5432,
});

client.connect((err) => {
  if (err) {
    console.log("❌ Connectivity Error");
    return;
  }
  console.log("✅ Connected Successfully");
});
