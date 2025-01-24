const colors = require('colors');
const fs = require('fs');
const readlineSync = require('readline-sync');

function loadChains(networkType) {
  const filePath = `./chains/${networkType}.json`;

  if (!fs.existsSync(filePath)) {
    console.log(colors.red(`🚨 Kesalahan: untuk file ${filePath} tidak ada.`));
    process.exit(1);
  }

  const chains = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  if (chains.length === 0) {
    console.log(colors.red(`🚨 Kesalahan: Tidak ada Jaringan yang ditemukan ${filePath}.`));
    process.exit(1);
  }

  return chains;
}

function selectNetworkType() {
  const networkTypes = ['Testnet 🌐', 'Mainnet 🔗'];

  const selectedIndex = readlineSync.keyInSelect(
    networkTypes,
    'Select the network type:'
  );

  if (selectedIndex === -1) {
    console.log(colors.red('🚨 No network type selected. Exiting...'));
    process.exit(1);
  }

  return selectedIndex === 0 ? 'testnet' : 'mainnet';
}

function selectChain(chains) {
  console.log('');
  console.log(colors.cyan('🌐 Pilih jaringan blockchain:'));

  const chainNames = chains.map((chain) => {
    return `${chain.name}`;
  });

  const selectedIndex = readlineSync.keyInSelect(
    chainNames,
    'Chain mana yang ingin Kamu gunakan?'
  );

  if (selectedIndex === -1) {
    console.log(colors.red('🚨 Tidak ada Chain yang dipilih. Keluar...'));
    process.exit(1);
  }

  return chains[selectedIndex];
}

module.exports = { loadChains, selectChain, selectNetworkType };
