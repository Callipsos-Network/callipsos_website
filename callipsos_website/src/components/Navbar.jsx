import React, { useState } from 'react'
import {navLinks} from "../constants/index.js";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            {/* Main nav bar */}
            <nav className="flex items-center justify-between px-6 py-4 md:px-8">
                {/* Logo */}
                <a href="/" className="flex items-center gap-3 hover:-translate-y-0.5 transition-transform duration-300">
                   <img
                        src="/logos/callipsos_logo.png"
                        alt="Callipsos logo"
                        className="w-8 h-8 md:w-10 md:h-10"
                    />
                </a>

                {/* Hamburger button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="p-2 hover:bg-stone-900/50 rounded transition-colors z-50 relative"
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                >
                    <div className="w-5 h-4 flex flex-col justify-between">
            <span
                className={`block h-px bg-stone-500 transition-all duration-300 origin-center ${
                    menuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
            />
                        <span
                            className={`block h-px bg-stone-500 transition-all duration-300 ${
                                menuOpen ? 'opacity-0' : ''
                            }`}
                        />
                        <span
                            className={`block h-px bg-stone-500 transition-all duration-300 origin-center ${
                                menuOpen ? '-rotate-45 -translate-y-1.5' : ''
                            }`}
                        />
                    </div>
                </button>
            </nav>

            {/* Slide-out menu */}
            <div
                className={`fixed top-0 right-0 w-64 h-full bg-black/95 border-l border-stone-900 
          transform transition-transform duration-300 ease-in-out z-40
          ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <nav className="flex flex-col gap-1 p-8 pt-20">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="text-stone-500 hover:text-white transition-colors duration-300 py-2 text-lg"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="absolute bottom-8 left-8 right-8">
                    <div className="flex gap-4">
                        <a
                            href="https://x.com/callipsos"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-stone-700 hover:text-stone-400 transition-colors"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                        </a>
                        <a
                            href="https://github.com/callipsos"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-stone-700 hover:text-stone-400 transition-colors"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Backdrop overlay */}
            {menuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30"
                    onClick={() => setMenuOpen(false)}
                />
            )}
        </header>
    )
}

export default Navbar