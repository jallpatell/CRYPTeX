import { useNavigate } from 'react-router-dom';

export default function() {
    const navigate = useNavigate()
    return( 
        <div className="border-2 border-[#000000] bg-black rounded-xl">
            <nav className="flex items-center scroll-m-3 fixed top-0 left-0 right-0 z-50 bg-black shadow justify-between p-4 max-w-8xl mx-auto">
                <div className="flex items-center space-x-2">
                    <img className='h-15 rounded-xl' src='/CRYPTeX (1).png'></img>
                </div> 

                <div className="hidden md:flex items-center space-x-8">
                    <a href="#" className="hover:text-[#ffffff] text-gray-400 text-xl font-extrabold transition-colors">Home</a>
                    <a href="#" onClick={() => navigate('/wallet')} className="hover:text-[#ffffff] text-gray-400 text-xl font-extrabold transition-colors">Wallet</a>
                    <a href="#" className="hover:text-[#ffffff] text-gray-400 text-xl font-extrabold transition-colors">Portfolio</a>
                    <a href="#" className="hover:text-[#ffffff] text-gray-400 text-xl font-extrabold transition-colors">Contribute</a>
                    <a href="#" className="hover:text-[#ffffff] text-gray-400 text-xl font-extrabold transition-colors">Settings</a>
                </div>
            </nav>
      </div>
    )
}