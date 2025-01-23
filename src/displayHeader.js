const colors = require('colors');

function displayHeader() {
  process.stdout.write('\x1Bc');
  console.log(colors.cyan.bold('============================================='));
  console.log(colors.cyan.bold('=========== EVM Auto Transfer Bot ==========='));
  console.log(colors.cyan.bold('============ Created by Markisa ============='));
  console.log(colors.cyan.bold('= https://t.me/https://t.me/coinbreeze_web3 ='));
  console.log(colors.cyan.bold('============================================='));
  console.log();
}

module.exports = displayHeader;
