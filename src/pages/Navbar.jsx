import { useNavigate, Link } from 'react-router-dom';


export default function() {
    const navigate = useNavigate()
    return( 
        <div className="border-2 border-[#000000] bg-black rounded-xl">
            <nav className="flex items-center fixed top-0 left-0 right-0 z-50 bg-black shadow justify-between p-6 max-w-8xl mx-auto">
                <div className="flex items-center space-x-2">
                    <img className='h-15 rounded-xl' src='/CRYPTeX (1).png'></img>
                </div> 

                <div className="hidden md:flex items-center space-x-8">
                    <Link to="/" className="hover:text-[#ffffff] text-gray-400 text-xl font-extrabold transition-colors">Home</Link>
                    <Link to="/wallet" className="hover:text-[#ffffff] text-gray-400 text-xl font-extrabold transition-colors">Wallet</Link>
                    <Link to="/portfolio" className="hover:text-[#ffffff] text-gray-400 text-xl font-extrabold transition-colors">Portfolio</Link>
                    <a href="https://github.com/jallpatell/CRYPTeX" target='_blank' className="hover:text-[#ffffff] text-gray-400 text-xl font-extrabold transition-colors">Contribute</a>
                    <a href="#" className="hover:text-[#ffffff] text-gray-400 text-xl font-extrabold transition-colors">Settings</a>
                </div>
            </nav>
      </div>
    )
    return ( 
        <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-lg shadow-lg' : ''}`}>
            <nav className={`flex items-center justify-between max-w-8xl mx-auto transition-all duration-300 ${scrolled ? 'p-4' : 'p-6'}`}>
                <div className="flex items-center space-x-2">
                    <img className='h-15 rounded-xl' src='/CRYPTeX (1).png' alt="CRYPTeX Logo" />
                </div> 

                <div className="hidden md:flex items-center space-x-8">
                    <Link to="/" className="hover:text-white text-gray-400 text-xl font-extrabold transition-colors">Home</Link>
                    <Link to="/wallet" className="hover:text-white text-gray-400 text-xl font-extrabold transition-colors">Wallet</Link>
                    <Link to="/portfolio" className="hover:text-white text-gray-400 text-xl font-extrabold transition-colors">Portfolio</Link>
                    <a href="https://github.com/jallpatell/CRYPTeX" target='_blank' rel="noopener noreferrer" className="hover:text-white text-gray-400 text-xl font-extrabold transition-colors">Contribute</a>
                    <a href="#" className="hover:text-white text-gray-400 text-xl font-extrabold transition-colors">Settings</a>
                </div>
            </nav>
        </header>
    );
}