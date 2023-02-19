const { listeners } = require("process");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log(`Welcome to America's #1 Bank!`);
console.log("\n 1. Create Account");
console.log("\n 2. Login");
console.log("\n 3. Deposit");
console.log("\n 4. Withdraw");
console.log("\n 5. Transfers");
console.log("\n 6. Logout");

// const start = async () => {
//   for await (const line of rl) {
//     console.log(line);
//   }
// };

const ip = () => {
  return new Promise((resolve, reject) => {
    rl.question("\n Enter your choice: ", (ch) => {
      resolve(ch);
    });
  });
};
const start = async () => {
  while (true) {
    const choice = await ip();
    if (choice == 1) {
      console.log("Create Account");
    } else if (choice == 2) {
      console.log("Please, enter your login information");
    } else if (choice == 3) {
      console.log("Please, enter deposit amount");
    } else if (choice == 4) {
      console.log("Please, enter withdraw amount");
    } else if (choice == 5) {
      console.log("Please, enter transfer information and amount");
    } else {
      console.log("Thanks for choosing Revpar Bank, hope you come back soon!");
      process.exit;
    }
  }
};

start();
