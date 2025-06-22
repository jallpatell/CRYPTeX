import { useState } from "react";
import { mnemonicToSeed } from "bip39";
import { Wallet, HDNodeWallet } from "ethers";

export default function EthWallet({mnemonic, addresses, setAddresses, currentIndex, setCurrentIndex}) {

    return (
        <div>
            <button className="block mx-auto px-4 py-2 bg-white text-black rounded-2xl mt-20 hover:bg-black hover:text-white"
             onClick={async function() {
                const seed = await mnemonicToSeed(mnemonic);
                const derivationPath = `m/44'/60'/${currentIndex}'/0'`;
                 const hdNode = HDNodeWallet.fromSeed(seed);
                 const child = hdNode.derivePath(derivationPath);
                 const privateKey = child.privateKey;
                 const wallet = new Wallet(privateKey);
                 setCurrentIndex(currentIndex + 1);
                setAddresses([...addresses, wallet.address]);
            }}>
                Add ETH wallet
            </button>

            {addresses.map((p, index) => <div className="px-2 py-2 mt-5 bg-gray-800 text-white rounded-md">
                Wallet {index} : {p}
            </div>)}
        </div>
    )
}