import { useState } from "react"
import { mnemonicToSeed } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl"

export default function SolanaWallet({ mnemonic, publicKeys, setPublicKeys, currentIndex, setCurrentIndex }) {

    return <div>
        <button className="block mx-auto px-4 py-2 bg-white text-black rounded-2xl mt-20 hover:bg-black hover:text-white"
         onClick={async function() {
            const seed = await mnemonicToSeed(mnemonic);
            const path = `m/44'/501'/${currentIndex}'/0'`;
            const derivedSeed = derivePath(path, seed.toString("hex")).key;
            const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
            const keypair = Keypair.fromSecretKey(secret);
            setCurrentIndex(currentIndex + 1);
            setPublicKeys([...publicKeys, keypair.publicKey]);
        }}>
            Add Solana wallet
        </button>

        {publicKeys.map((p, index) => <div className="px-2 py-2 flex bg-gray-800 text-white mt-5 rounded-md ">
            Wallet {index} : {p.toBase58()}

            <button className="mx-auto ml-auto px-2 py-1 rounded-xl  bg-black pad">
                Delete Key
            </button>
        </div>
        
        )}
        
    </div>
}