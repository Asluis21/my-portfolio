import { useState } from 'react'
import { useTranslation } from 'react-i18next';

type Props = {}

export default function Navbar({ }: Props) {

    const [isDarkMode, setIsDarkMode] = useState(false);
    const [language, setLanguage] = useState('es');
    const { t, i18n } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-white dark:bg-backgroundDarkMode shadow" role='navigation'>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0 text-xl font-bold text-black dark:text-white">
                        MiPortafolio
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="block md:hidden text-2xl">
                        <button
                            className='cursor-pointer'
                            type='button'
                            aria-label="Open menu"    
                            onClick={() => setMenuOpen(!menuOpen)}
                            >
                            {/* Simple hamburger icon */}
                            <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
                            <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
                            <span className="block w-6 h-0.5 bg-gray-800"></span>
                        </button>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex space-x-8">
                        <a href="#about" className="dark:text-white dark:hover:text-gray-300 text-gray-700 hover:text-backgroundDarkMode font-medium">{t('navbar.about')}</a>
                        <a href="#skills" className="dark:text-white dark:hover:text-gray-300 text-gray-700 hover:text-backgroundDarkMode font-medium">{t('skills')}</a>
                        <a href="#projects" className="dark:text-white dark:hover:text-gray-300 text-gray-700 hover:text-backgroundDarkMode font-medium">{t('navbar.projects')}</a>
                        <a href="#contact" className="dark:text-white dark:hover:text-gray-300 text-gray-700 hover:text-backgroundDarkMode font-medium">{t('navbar.contact')}</a>
                    </div>

                    {/* Mobile Navigation Links */}
                    {menuOpen && (
                    <div className="absolute top-16 left-0 w-full bg-white dark:bg-backgroundDarkMode flex flex-col items-center space-y-4 py-4 md:hidden z-50 shadow">
                        <a href="#about" className="dark:text-white text-gray-700 font-medium" onClick={() => setMenuOpen(false)}>{t('navbar.about')}</a>
                        <a href="#skills" className="dark:text-white text-gray-700 font-medium" onClick={() => setMenuOpen(false)}>{t('skills')}</a>
                        <a href="#projects" className="dark:text-white text-gray-700 font-medium" onClick={() => setMenuOpen(false)}>{t('navbar.projects')}</a>
                        <a href="#contact" className="dark:text-white text-gray-700 font-medium" onClick={() => setMenuOpen(false)}>{t('navbar.contact')}</a>
                    </div>
                    )}

                    <div className="flex gap-4">
                        {/* Dark Mode Toggle */}
                        <button
                            type='button'
                            aria-pressed={isDarkMode}
                            aria-label={isDarkMode ? 'Activar modo claro' : 'Activar modo oscuro'}
                            onClick={() => setIsDarkMode((prev) => {
                                const newMode = !prev;
                                if (newMode) {
                                    document.documentElement.classList.add('dark');
                                } else {
                                    document.documentElement.classList.remove('dark');
                                }
                                return newMode;
                            })}
                            className={`w-12 h-6 flex items-center rounded-full px-1 transition-colors duration-300 focus:outline-none relative ${isDarkMode ? 'bg-gray-900' : 'bg-yellow-300'}`}
                        >
                            <span
                                className={`w-4 h-4 rounded-full shadow flex items-center justify-center transition-transform duration-300 absolute top-1 left-1 ${isDarkMode ? 'bg-gray-800 translate-x-6' : 'bg-white translate-x-0'}`}
                                style={{ zIndex: 2 }}
                            >

                                {isDarkMode ? (
                                    <span className='relative flex items-center justify-center w-full h-full'>
                                        {/* Moon */}
                                        <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="white" d="M12 11.807A9.002 9.002 0 0 1 10.049 2a9.942 9.942 0 0 0-5.12 2.735c-3.905 3.905-3.905 10.237 0 14.142 3.906 3.906 10.237 3.905 14.143 0a9.946 9.946 0 0 0 2.735-5.119A9.003 9.003 0 0 1 12 11.807z" />
                                        </svg>
                                    </span>
                                ) : (
                                    // Sun
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="30px" height="30px" viewBox="0 0 1280.000000 1280.000000" preserveAspectRatio="xMidYMid meet">
                                        <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)" fill="#ffeb3b" stroke="none">
                                            <path d="M4671 12787 c-13 -6 -34 -25 -45 -40 l-21 -28 -8 -1457 c-9 -1611 -13 -1503 54 -1538 19 -9 45 -14 63 -11 17 3 181 88 364 190 l332 184 382 7 c275 5 391 11 413 20 39 17 65 56 65 99 0 26 -158 304 -726 1278 -446 764 -739 1257 -760 1277 -36 34 -72 41 -113 19z" />
                                            <path d="M9603 12133 c-32 -19 -2044 -2008 -2075 -2053 -27 -39 -23 -94 10 -130 24 -28 62 -40 397 -136 l370 -106 280 -269 c283 -272 313 -295 367 -282 30 8 64 39 77 71 10 27 38 129 361 1362 89 338 206 785 261 994 120 455 122 462 103 497 -33 64 -92 84 -151 52z" />
                                            <path d="M713 9750 c-62 -38 -78 -88 -45 -147 18 -32 2007 -2044 2052 -2075 39 -27 94 -23 130 10 27 24 41 63 137 398 l106 372 269 278 c271 282 294 312 281 366 -8 30 -39 64 -71 77 -15 6 -189 53 -387 105 -1934 508 -2375 623 -2411 629 -20 4 -41 0 -61 -13z" />
                                            <path d="M6074 9589 c-1027 -99 -1976 -729 -2483 -1645 -183 -330 -311 -723 -366 -1124 -22 -160 -31 -532 -16 -699 63 -715 360 -1378 853 -1907 534 -574 1220 -915 2008 -999 157 -17 488 -19 643 -5 1039 99 1986 723 2496 1646 183 330 311 723 366 1124 22 160 31 532 16 699 -64 721 -364 1386 -865 1921 -528 562 -1215 901 -1996 985 -144 16 -515 18 -656 4z" />
                                            <path d="M9764 8192 c-37 -23 -59 -71 -51 -111 3 -15 89 -177 190 -359 l184 -332 7 -382 c5 -275 11 -391 20 -413 17 -39 56 -65 99 -65 26 0 304 158 1278 726 796 464 1256 738 1278 761 29 31 33 40 28 75 -6 47 -37 84 -81 97 -18 5 -618 12 -1476 15 -1412 7 -1446 6 -1476 -12z" />
                                            <path d="M1309 5544 c-796 -464 -1256 -738 -1278 -761 -29 -31 -33 -40 -28 -75 6 -47 37 -84 81 -97 18 -5 618 -12 1473 -16 1303 -6 1444 -5 1472 10 39 20 65 68 58 109 -3 17 -88 181 -190 364 l-184 332 -7 382 c-5 275 -11 391 -20 413 -17 39 -56 65 -99 65 -26 0 -304 -158 -1278 -726z" />
                                            <path d="M9950 5263 c-27 -25 -40 -63 -136 -399 l-106 -370 -269 -280 c-272 -282 -295 -312 -282 -366 8 -30 39 -64 71 -77 27 -10 129 -38 1362 -361 338 -89 785 -206 994 -261 455 -120 462 -122 497 -103 64 33 84 92 52 151 -19 32 -2008 2044 -2053 2075 -39 27 -94 23 -130 -9z" />
                                            <path d="M3845 3643 c-27 -7 -61 -39 -74 -71 -10 -27 -38 -129 -361 -1362 -89 -338 -206 -785 -261 -994 -120 -455 -122 -462 -103 -497 33 -64 92 -84 151 -51 32 18 2044 2007 2075 2052 27 39 23 94 -9 130 -25 27 -63 40 -399 136 l-371 106 -269 260 c-148 143 -278 266 -289 273 -25 16 -64 24 -90 18z" />
                                            <path d="M8040 3072 c-19 -10 -174 -95 -345 -189 l-310 -171 -380 -7 c-273 -5 -388 -10 -410 -19 -39 -17 -65 -56 -65 -99 0 -26 158 -304 726 -1278 465 -797 738 -1256 761 -1278 31 -29 40 -33 75 -28 47 6 84 37 97 81 5 18 12 618 16 1473 7 1591 11 1484 -55 1518 -38 20 -68 19 -110 -3z" />
                                        </g>
                                    </svg>
                                )}
                            </span>
                        </button>

                        {/* Language Toggle */}
                        <button
                            type='button'
                            aria-pressed={language === 'es'}
                            aria-label={language === 'es' ? 'Cambiar a inglés' : 'Cambiar a español'}
                            onClick={() => setLanguage((prev) => {
                                if (prev === 'es') {
                                    i18n.changeLanguage('en');
                                } else {
                                    i18n.changeLanguage('es');
                                }

                                return prev === 'es' ? 'en' : 'es';
                            })}
                            className={`w-12 h-6 flex items-center rounded-full px-1 transition-colors duration-300 focus:outline-none relative shadow-xl`}>

                            <span
                                className={`w-4 h-4 rounded-full shadow flex items-center justify-center transition-transform duration-300 absolute top-1 left-1 ${language === 'en' ? ' translate-x-6' : 'translate-x-0'}`}
                                style={{ zIndex: 2 }}
                            >

                                {language === 'es' ? (
                                    <span className='relative flex items-center justify-center w-full h-full'>
                                        {/* Spanish Flag */}
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="#FFDA44" d="M0,256c0,31.314,5.633,61.31,15.923,89.043L256,367.304l240.077-22.261C506.367,317.31,512,287.314,512,256s-5.633-61.31-15.923-89.043L256,144.696L15.923,166.957C5.633,194.69,0,224.686,0,256z" />
                                            <g>
                                                <path fill="#D80027" d="M496.077,166.957C459.906,69.473,366.071,0,256,0S52.094,69.473,15.923,166.957H496.077z" />
                                                <path fill="#D80027" d="M15.923,345.043C52.094,442.527,145.929,512,256,512s203.906-69.473,240.077-166.957H15.923z" />
                                            </g>
                                        </svg>
                                    </span>
                                ) : (
                                    // English Flag
                                    <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 512"><g fill-rule="nonzero"><path fill="#fff" d="M256 19.48c65.3 0 124.46 26.48 167.25 69.27l1.09 1.18c42.14 42.71 68.18 101.37 68.18 166.06 0 65.31-26.5 124.46-69.29 167.25l-1.18 1.09c-42.73 42.16-101.4 68.19-166.05 68.19-65.23 0-124.37-26.51-167.18-69.33-42.84-42.74-69.33-101.89-69.33-167.2 0-65.31 26.48-124.45 69.27-167.24C131.55 45.96 190.7 19.48 256 19.48z" />
                                        <path fill="#FEFEFE" d="M256 39.59c119.52 0 216.41 96.89 216.41 216.4 0 119.52-96.89 216.42-216.41 216.42-119.51 0-216.4-96.9-216.4-216.42 0-119.51 96.89-216.4 216.4-216.4z" />
                                        <path fill="#012169" d="M183.49 179.55V52.05c-41.32 14.7-76.85 41.61-102.27 76.35l102.27 51.15zm0 152.9v127.5c-41.3-14.7-76.82-41.59-102.26-76.35l102.26-51.15zm144.55 0v127.67c41.45-14.63 77.09-41.54 102.61-76.34l-102.61-51.33zm0-152.9V51.88c41.45 14.63 77.11 41.54 102.62 76.35l-102.62 51.32z" />
                                        <path fill="#C8102E" d="M448.3 328.16h-48.11l49.35 24.72c3.21-6.41 6.11-13 8.69-19.75l-9.93-4.97zm-9.34-187.76-86.42 43.33h48.11l48.95-24.5c-3.23-6.46-6.79-12.75-10.64-18.83zM212.41 299.26v168.75c14.08 2.87 28.66 4.4 43.59 4.4 14.76 0 29.19-1.49 43.13-4.3V299.26h168.94c2.83-13.98 4.34-28.44 4.34-43.27 0-14.88-1.51-29.42-4.37-43.47H299.13V43.9A217.404 217.404 0 0 0 256 39.59c-14.93 0-29.51 1.54-43.59 4.4v168.53H43.97a217.777 217.777 0 0 0-4.37 43.47c0 14.83 1.51 29.29 4.34 43.27h168.47zM63.12 183.84h48.11l-48.89-24.48c-3.2 6.41-6.11 13.02-8.68 19.76l9.46 4.72zm95.87 144.43h-48.11l-48.57 24.31A216.76 216.76 0 0 0 73 371.52l86.43-43.25h-.44z" /></g>
                                    </svg>
                                )}

                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}