import Navbar from "./Navbar"
import { useState, useEffect } from "react"
import * as bip39 from 'bip39';
import SolanaWallet from "./Solanawallet";
import EthWallet from "./EthWallet";
import { Eye, EyeOff } from "lucide-react"
import Footer from "./Footer";

export default function Wallet() {
  const [mnemonic, setMnemonic] = useState([]);
  const [isMnemonicVisible, setIsMnemonicVisible] = useState(false);
  const [selectedChain, setSelectedChain] = useState('');
  const [ethAddresses, setEthAddresses] = useState([]);
  const [solPublicKeys, setSolPublicKeys] = useState([]);
  const [ethCurrentIndex, setEthCurrentIndex] = useState(0);
  const [solCurrentIndex, setSolCurrentIndex] = useState(0);

  useEffect(() => {
    const storedMnemonic = localStorage.getItem('mnemonic');
    if (storedMnemonic) {
      setMnemonic(JSON.parse(storedMnemonic));
    }
  }, []);

  useEffect(() => {
    if (mnemonic.length > 0) {
      localStorage.setItem('mnemonic', JSON.stringify(mnemonic));
    } else {
      localStorage.removeItem('mnemonic');
    }
  }, [mnemonic]);

  async function displayMn() {
    try {
      const mn = await bip39.generateMnemonic();
      const words = mn.split(" ");
      setMnemonic(words);
    } catch (err) {
      console.error("Error generating mnemonic:", err);
    }
  }

  function deleteMnemonic() {
    if(window.confirm("Are you sure you want to delete the seed phrase? This will delete all associated wallets.")) {
      setMnemonic([]);
      setEthAddresses([]);
      setSolPublicKeys([]);
      setEthCurrentIndex(0);
      setSolCurrentIndex(0);
      setSelectedChain('');
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <Navbar />

      <div className="pb-8">
        <h1 className="font-extrabold mt-15 text-6xl text-center bg-gradient-to-r from-[#4e11ab] to-[#431e5e] bg-clip-text text-transparent">
          Manage Wallet
        </h1>
        <p className="text-gray-300 mt-10 text-3xl text-center ">
          Generate keys from seed phrase and manage your crypto assets
        </p>

        {mnemonic.length === 0 && (
          <button
            className="block mx-auto px-4 py-2 bg-white hover:border-2 hover:border-white text-black rounded-2xl mt-20 hover:bg-black hover:text-white"
            onClick={displayMn}
          >
            Create Seed Phrase
          </button>
        )}

        {mnemonic.length > 0 && (
          <>
            <div className="max-w-md mx-auto mt-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-bold">Seed Phrase</h3>
                <button onClick={() => setIsMnemonicVisible(!isMnemonicVisible)} className="text-gray-400 hover:text-white">
                  {isMnemonicVisible ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {mnemonic.map((word, index) => (
                  <div
                    key={index}
                    className="px-2 py-2 bg-gray-800 text-white rounded-md"
                  >
                    {index + 1}. {isMnemonicVisible ? word.toUpperCase() : '********'}
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-4">
              <button
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                onClick={deleteMnemonic}
              >
                Delete Seed Phrase
              </button>
            </div>

            <div className="text-center mt-8">
              <select 
                onChange={(e) => setSelectedChain(e.target.value)} 
                value={selectedChain}
                className="px-4 py-2 bg-gray-800 text-white rounded-md"
              >
                <option value="" disabled>Select a Chain</option>
                <option value="eth">Ethereum</option>
                <option value="sol">Solana</option>
              </select>
            </div>

            <div className="flex justify-center gap-x-100 mt-6 max-h-[60vh] overflow-y-auto">
              {selectedChain === 'sol' && <SolanaWallet mnemonic={mnemonic.join(" ")} publicKeys={solPublicKeys} setPublicKeys={setSolPublicKeys} currentIndex={solCurrentIndex} setCurrentIndex={setSolCurrentIndex} />}
              {selectedChain === 'eth' && <EthWallet mnemonic={mnemonic.join(" ")} addresses={ethAddresses} setAddresses={setEthAddresses} currentIndex={ethCurrentIndex} setCurrentIndex={setEthCurrentIndex} />}
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}