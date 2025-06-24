import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Zap, Globe, Lock, Smartphone, ArrowRight, Check, Star, Users, TrendingUp } from 'lucide-react';


import Navbar from './Navbar';
import Footer from './Footer';

export default function CryptexLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Navigation */}
        <Navbar />
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center space-y-20">
          
          
          <h1 className="text-5xl mt-30 md:text-7xl font-bold bg-gradient-to-r from-[#210748] via-[#4e11ab] to-[#290c41] bg-clip-text text-transparent leading-tight">
            Your Gateway to the<br />
            <span className="bg-gradient-to-r from-[#4e11ab] to-[#6b21a8] bg-clip-text text-transparent">
              Decentralized Web
            </span>
          </h1>

          <Badge variant="secondary" className="bg-purple-900/50 text-purple-300 border-#8f4ff0 font-bold px-3 py-1.5">
            🚀 Now Supporting Ethereum & Solana
          </Badge>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Effortlessly manage your Ethereum and Solana assets in one sleek, non-custodial wallet. 
            Fast, secure, and designed for the future of DeFi.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-10 justify-center items-center pt-8">
            <Button size="lg" className="bg-gradient-to-r from-[#4e11ab] to-[#4e11ab] hover:from-[#210748] hover:to-[#773bb3] text-lg px-8 py-4">
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg"  onClick={() => window.open("https://www.coinbase.com/en-in/learn/crypto-basics/what-is-a-crypto-wallet", "_blank")} variant="outline" className="border-purple-400 text-0.5xl font-bold text-[#6920a6] bg-[#210748] hover:bg-white hover:text-[#210748] px-8 py-4">
              Learn More about crypto wallets
            </Button>
          </div>
          
          <div className="flex items-center justify-center space-x-8 pt-8 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span className='font-extrabold'>1K+ Users</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4" />
              <span className='font-extrabold'>$0 Secured</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className='font-extrabold'>4.81/5 Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-white font-extrabold mb-6 hover:bg-gradient-to-r hover:text-[#9d66ef] bg-clip-text leading-tight">Why Choose CRYPTeX?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Built for power users and beginners alike, with enterprise-grade security and consumer-friendly design.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-gray-900/50 border-purple-800/50 hover:border-purple-600/50 transition-all duration-300 hover:scale-105">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-[#dc3d3d] to-[#dc3d3d] rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <CardTitle className="text-white">Military-Grade Security</CardTitle>
              <CardDescription>
                Your private keys never leave your device. Multi-layer encryption and biometric protection keep your assets safe.
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="bg-gray-900/50 border-purple-800/50 hover:border-purple-600/50 transition-all duration-300 hover:scale-105">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-[#5a9cde] to-[#5a9cde] rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6" />
              </div>
              <CardTitle className="text-white">Lightning Fast</CardTitle>
              <CardDescription>
                Execute transactions in seconds across Ethereum and Solana networks with optimized gas fees and MEV protection.
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="bg-gray-900/50 border-purple-800/50 hover:border-purple-600/50 transition-all duration-300 hover:scale-105">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-[#8de18d] to-[#8de18d] rounded-lg flex items-center justify-center mb-4">
                <Globe className="h-6 w-6" />
              </div>
              <CardTitle className="text-white">Multi-Chain Native</CardTitle>
              <CardDescription>
                Seamlessly switch between Ethereum and Solana ecosystems. Trade, stake, and interact with DApps across chains.
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="bg-gray-900/50 border-purple-800/50 hover:border-purple-600/50 transition-all duration-300 hover:scale-105">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-[#d97dd2] to-[#d97dd2] rounded-lg flex items-center justify-center mb-4">
                <Lock className="h-6 w-6" />
              </div>
              <CardTitle className="text-white">Non-Custodial</CardTitle>
              <CardDescription>
                You own your keys, you own your crypto. No third parties, no middlemen, no compromises on your financial sovereignty.
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="bg-gray-900/50 border-purple-800/50 hover:border-purple-600/50 transition-all duration-300 hover:scale-105">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-[#34d5d3] to-[#34d5d3] rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="h-6 w-6" />
              </div>
              <CardTitle className="text-white">Cross-Platform</CardTitle>
              <CardDescription>
                Available on desktop, mobile, and as a browser extension. Your wallet syncs securely across all your devices.
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="bg-gray-900/50 border-purple-800/50 hover:border-purple-600/50 transition-all duration-300 hover:scale-105">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-[#efefef] to-[#efefef] rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6" />
              </div>
              <CardTitle className="text-white">Advanced Trading</CardTitle>
              <CardDescription>
                Built-in DEX aggregation, limit orders, and portfolio tracking. Professional trading tools in a simple interface.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Supported Networks */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <Card className="bg-gray-900/50 border-purple-800/50 hover:border-purple-600/50 transition-all duration-300 hover:scale-105">
          <CardContent className="p-20">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-extrabold bg-gradient-to-r text-white leading-tight"
              >Multi-Chain by Design</h2>
              <p className="text-3xl text-gray-300">
                Access the best of both worlds with native support for Ethereum and Solana ecosystems
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="text-center space-y-6">
                <div className="w-25  h-25 bg-transparent rounded-full flex items-center justify-center mx-auto">
                  <img src='/eth_logo.webp' className='hover:shadow-[0px_0px_60px_0px_rgba(140,46,255,1)]'></img>
                </div>
                <h3 className="text-2xl text-white font-bold">Ethereum Network</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center justify-center space-x-2">
                    <Check className="h-5 w-5 text-green-400" />
                    <span>ERC-20 Tokens</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <Check className="h-5 w-5 text-green-400" />
                    <span>NFT Collections</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <Check className="h-5 w-5 text-green-400" />
                    <span>DeFi Protocols</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <Check className="h-5 w-5 text-green-400" />
                    <span>Layer 2 Solutions</span>
                  </li>
                </ul>
              </div>
              
              <div className="text-center space-y-6">
                <div className="w-25  h-25 bg-transparent rounded-full flex items-center justify-center mx-auto">
                  <img src='/sol_logo.jpg' className='hover:shadow-[0px_0px_60px_0px_rgba(140,46,255,1)]'></img>
                </div>
                <h3 className="text-2xl text-white font-bold">Solana Network</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center justify-center space-x-2">
                    <Check className="h-5 w-5 text-green-400" />
                    <span>SPL Tokens</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <Check className="h-5 w-5 text-green-400" />
                    <span>Solana NFTs</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <Check className="h-5 w-5 text-green-400" />
                    <span>High-Speed Trading</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <Check className="h-5 w-5 text-green-400" />
                    <span>Low Transaction Fees</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <Card className="bg-gray-900/50 border-purple-800/50 hover:border-purple-600/50 transition-all duration-300 hover:scale-105">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-extrabold text-white leading-tight mb-6">Ready to Take Control?</h2>
            <p className="text-xl text-white mb-8 opacity-90 max-w-2xl mx-auto">
              Join hundreds of thousands of users who trust CRYPTeX with their digital assets. 
              Your journey into DeFi starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-gray-800 text-white font-extrabold hover:border-[#4e11ab] hover:border-2 hover:bg-white hover:text-black text-lg px-8 py-4">
                Join for Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => window.open('https://github.com/jallpatell/CRYPTeX', '_blank')} className="bg-gray-800 text-white font-extrabold hover:border-[#4e11ab] hover:border-2 hover:bg-white hover:text-black text-lg px-8 py-4">
                project source code
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

