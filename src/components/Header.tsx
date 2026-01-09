import React from 'react';
import {Bookmark, Home, User} from 'lucide-react';
import {t} from '../data/translations';

interface HeaderProps {
    currentPage: string;
    onNavigate: (page: string) => void;
    language: string;
}

export const Header: React.FC<HeaderProps> = ({currentPage, onNavigate, language}) => {
    return (
        <header className="bg-white border-b border-green-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <button onClick={() => onNavigate('home')}
                            className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                        <div
                            className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center">
                            <span className="text-2xl">🌱</span>
                        </div>
                        <div>
                            <div className="text-green-800 tracking-tight">{t(language, 'siteName')}</div>
                            <div className="text-xs text-green-600">{t(language, 'tagline')}</div>
                        </div>
                    </button>

                    <nav className="flex items-center gap-2">
                        <button onClick={() => onNavigate('home')}
                                className={`flex items-center justify-center gap-2 px-4 py-2 rounded-xl transition-all ${currentPage === 'home' ? 'bg-green-100 text-green-800' : 'text-gray-600 hover:bg-green-50'}`}>
                            <Home className="w-5 h-5"/>
                            <span className="hidden sm:inline">{t(language, 'home')}</span>
                        </button>

                        <button onClick={() => onNavigate('saved')}
                                className={`flex items-center justify-center gap-2 px-4 py-2 rounded-xl transition-all ${currentPage === 'saved' ? 'bg-green-100 text-green-800' : 'text-gray-600 hover:bg-green-50'}`}>
                            <Bookmark className="w-5 h-5"/>
                            <span className="hidden sm:inline">{t(language, 'saved')}</span>
                        </button>

                        <button onClick={() => onNavigate('profile')}
                                className={`flex items-center justify-center gap-2 px-4 py-2 rounded-xl transition-all ${currentPage === 'profile' ? 'bg-green-100 text-green-800' : 'text-gray-600 hover:bg-green-50'}`}>
                            <User className="w-5 h-5"/>
                            <span className="hidden sm:inline">{t(language, 'profile')}</span>
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    );
};
