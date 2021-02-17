import 'core-js/stable';
import 'regenerator-runtime/runtime';

const getEthers = async () => {
  const { default: ethers } = await import('ethers');
  window.ethers = ethers.ethers;
};

getEthers();