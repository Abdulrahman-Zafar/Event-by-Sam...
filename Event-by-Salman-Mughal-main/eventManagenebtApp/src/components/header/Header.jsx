import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import SignatureLogo from '../logo/SignatureLogo.jsx';

// Services listed under the "Events" dropdown.
const eventLinks = [
    { name: 'All Events', path: '/event' },
    { name: 'Mehndi', path: '/mhandi' },
    { name: 'Barat', path: '/barat' },
    { name: 'Walima', path: '/walima' },
    { name: 'Birthday', path: '/birthday' },
    { name: 'DJ & Sound', path: '/soundsystem' },
    { name: 'Lighting', path: '/lighting' },
    { name: 'Photography', path: '/photography' },
];

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Events', children: eventLinks },
    { name: 'Digital Cards', path: '/digital-cards' },
    { name: 'About', path: '/Aboutus' },
    { name: 'Contact', path: '/contactus' },
];

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [eventsOpen, setEventsOpen] = useState(false);
    const { pathname } = useLocation();
    const eventsActive = eventLinks.some((l) => l.path.toLowerCase() === pathname.toLowerCase());

    // Close menus when a link is clicked
    const closeMenu = () => {
        setIsOpen(false);
        setEventsOpen(false);
    };

    const desktopLink = ({ isActive }) =>
        `text-gray-700 hover:text-[#b8862b] font-medium text-[15px] transition duration-150 py-1 ${
            isActive ? 'text-[#b8862b] border-b-2 border-[#b8862b]' : ''
        }`;
    const mobileLink = ({ isActive }) =>
        `block px-3 py-3 rounded-md text-base font-medium ${
            isActive ? 'bg-[#faf3e3] text-[#9a6b1f]' : 'text-gray-700 hover:bg-gray-50'
        }`;

    return (
        <nav className="bg-white/95 backdrop-blur shadow-md fixed w-full z-50 top-0 left-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 lg:h-20">
                    {/* Logo Section */}
                    <div className="flex-shrink-0 flex items-center">
                        <SignatureLogo />
                    </div>

                    <div className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link) =>
                            link.children ? (
                                <div
                                    key={link.name}
                                    className="relative h-full flex items-center"
                                    onMouseEnter={() => setEventsOpen(true)}
                                    onMouseLeave={() => setEventsOpen(false)}
                                >
                                    <button
                                        type="button"
                                        onClick={() => setEventsOpen((o) => !o)}
                                        aria-expanded={eventsOpen}
                                        className={`inline-flex items-center gap-1 font-medium text-[15px] py-1 transition ${
                                            eventsActive
                                                ? 'text-[#b8862b] border-b-2 border-[#b8862b]'
                                                : 'text-gray-700 hover:text-[#b8862b]'
                                        }`}
                                    >
                                        {link.name}
                                        <ChevronDown
                                            size={16}
                                            className={`transition-transform ${eventsOpen ? 'rotate-180' : ''}`}
                                        />
                                    </button>
                                    {eventsOpen && (
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-56 pt-1">
                                            <div className="bg-white rounded-xl shadow-xl border border-[#efe4cf] py-2 overflow-hidden">
                                                {link.children.map((child) => (
                                                    <NavLink
                                                        key={child.path}
                                                        to={child.path}
                                                        onClick={closeMenu}
                                                        className={({ isActive }) =>
                                                            `block px-5 py-2.5 text-[15px] text-left transition ${
                                                                isActive
                                                                    ? 'bg-[#faf3e3] text-[#9a6b1f] font-semibold'
                                                                    : 'text-gray-700 hover:bg-[#faf6ef] hover:text-[#b8862b]'
                                                            }`
                                                        }
                                                    >
                                                        {child.name}
                                                    </NavLink>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <NavLink key={link.name} to={link.path} className={desktopLink}>
                                    {link.name}
                                </NavLink>
                            )
                        )}
                    </div>

                    {/* Mobile Menu Button - Visible only on mobile */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-800 focus:outline-none p-2"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            <div
                className={`lg:hidden bg-white border-t border-gray-100 transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-screen opacity-100 overflow-y-auto' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
            >
                <div className="px-4 pt-2 pb-6 space-y-1 shadow-inner text-left">
                    {navLinks.map((link) =>
                        link.children ? (
                            <div key={link.name}>
                                <button
                                    type="button"
                                    onClick={() => setEventsOpen((o) => !o)}
                                    className={`w-full flex items-center justify-between px-3 py-3 rounded-md text-base font-medium ${
                                        eventsActive ? 'text-[#9a6b1f]' : 'text-gray-700'
                                    }`}
                                >
                                    {link.name}
                                    <ChevronDown
                                        size={18}
                                        className={`transition-transform ${eventsOpen ? 'rotate-180' : ''}`}
                                    />
                                </button>
                                {eventsOpen && (
                                    <div className="ml-3 border-l-2 border-[#efe4cf] pl-2">
                                        {link.children.map((child) => (
                                            <NavLink key={child.path} to={child.path} onClick={closeMenu} className={mobileLink}>
                                                {child.name}
                                            </NavLink>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <NavLink key={link.name} to={link.path} onClick={closeMenu} className={mobileLink}>
                                {link.name}
                            </NavLink>
                        )
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
