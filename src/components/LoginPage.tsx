import React, {useState} from 'react';
import {ArrowLeft, Lock, Mail, User} from 'lucide-react';
import {t} from '../data/translations';

interface LoginPageProps {
    onBack: () => void;
    language: string;
}

export const LoginPage: React.FC<LoginPageProps> = ({onBack, language}) => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isSignIn) {
            alert('Login functionality would be implemented here');
        } else {
            alert('Account creation functionality would be implemented here');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
            <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <button onClick={onBack}
                        className="flex items-center gap-2 text-gray-600 hover:text-green-600 mb-8 transition-colors">
                    <ArrowLeft className="w-5 h-5"/>
                    <span>Back</span>
                </button>

                <div className="bg-white rounded-3xl p-8 shadow-lg border border-green-100">
                    <div className="text-center mb-8">
                        <div
                            className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <User className="w-8 h-8 text-green-600"/>
                        </div>
                        <h1 className="text-green-800 mb-2">{isSignIn ? t(language, 'login') : t(language, 'createAccount')}</h1>
                    </div>

                    <div className="flex gap-2 mb-6 bg-gray-100 p-1 rounded-xl">
                        <button onClick={() => setIsSignIn(true)}
                                className={`flex-1 py-2 rounded-lg transition-all ${isSignIn ? 'bg-white text-green-700 shadow-sm' : 'text-gray-600'}`}>
                            {t(language, 'login')}
                        </button>
                        <button onClick={() => setIsSignIn(false)}
                                className={`flex-1 py-2 rounded-lg transition-all ${!isSignIn ? 'bg-white text-green-700 shadow-sm' : 'text-gray-600'}`}>
                            {t(language, 'createAccount')}
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {!isSignIn && (
                            <div>
                                <label className="block text-sm text-gray-700 mb-2">Name</label>
                                <div className="relative">
                                    <User
                                        className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"/>
                                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                                           placeholder="Your name" required={!isSignIn}
                                           className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"/>
                                </div>
                            </div>
                        )}

                        <div>
                            <label className="block text-sm text-gray-700 mb-2">{t(language, 'email')}</label>
                            <div className="relative">
                                <Mail
                                    className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"/>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                                       placeholder="your@email.com" required
                                       className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"/>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm text-gray-700 mb-2">{t(language, 'password')}</label>
                            <div className="relative">
                                <Lock
                                    className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"/>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                                       placeholder="Password" required
                                       className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"/>
                            </div>
                        </div>

                        {isSignIn && (
                            <div className="text-right">
                                <button type="button"
                                        className="text-sm text-green-600 hover:text-green-700 transition-colors">
                                    {t(language, 'forgotPassword')}
                                </button>
                            </div>
                        )}

                        <button type="submit"
                                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl transition-colors">
                            {isSignIn ? t(language, 'login') : t(language, 'createAccount')}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
