import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function() {
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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