import React, { useState } from 'react';
import { Globe, CreditCard, Info, Check, UserCircle } from 'lucide-react';
import { t } from '../data/translations';
import { languages } from '../data/languages';

interface ProfilePageProps {
  language: string;
  onLanguageChange: (language: string) => void;
  subscriptionPlan: 'free' | 'monthly' | 'yearly';
  onSubscriptionChange: (plan: 'free' | 'monthly' | 'yearly') => void;
  onNavigateToLogin: () => void;
}

type SettingsSection = 'account' | 'language' | 'subscription' | 'about';

export const ProfilePage: React.FC<ProfilePageProps> = ({ language, onLanguageChange, subscriptionPlan, onSubscriptionChange, onNavigateToLogin }) => {
  const [activeSection, setActiveSection] = useState<SettingsSection>('language');

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-green-800 mb-2">{t(language, 'profile')}</h1>
          <p className="text-gray-600">Manage your preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-green-100 space-y-2">
              <button onClick={() => setActiveSection('account')} className={`w-full flex items-center justify-start gap-3 px-4 py-3 rounded-xl transition-all ${activeSection === 'account' ? 'bg-green-100 text-green-800' : 'text-gray-600 hover:bg-green-50'}`}>
                <UserCircle className="w-5 h-5" />
                <span>{t(language, 'account')}</span>
              </button>
              
              <button onClick={() => setActiveSection('language')} className={`w-full flex items-center justify-start gap-3 px-4 py-3 rounded-xl transition-all ${activeSection === 'language' ? 'bg-green-100 text-green-800' : 'text-gray-600 hover:bg-green-50'}`}>
                <Globe className="w-5 h-5" />
                <span>{t(language, 'language')}</span>
              </button>
              
              <button onClick={() => setActiveSection('subscription')} className={`w-full flex items-center justify-start gap-3 px-4 py-3 rounded-xl transition-all ${activeSection === 'subscription' ? 'bg-green-100 text-green-800' : 'text-gray-600 hover:bg-green-50'}`}>
                <CreditCard className="w-5 h-5" />
                <span>{t(language, 'subscription')}</span>
              </button>
              
              <button onClick={() => setActiveSection('about')} className={`w-full flex items-center justify-start gap-3 px-4 py-3 rounded-xl transition-all ${activeSection === 'about' ? 'bg-green-100 text-green-800' : 'text-gray-600 hover:bg-green-50'}`}>
                <Info className="w-5 h-5" />
                <span>{t(language, 'about')}</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-green-100">
              {activeSection === 'account' && (
                <div>
                  <h2 className="text-green-800 mb-6">{t(language, 'accountSettings')}</h2>
                  <button onClick={onNavigateToLogin} className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-xl transition-colors">
                    {t(language, 'login')} / {t(language, 'createAccount')}
                  </button>
                </div>
              )}

              {activeSection === 'language' && (
                <div>
                  <h2 className="text-green-800 mb-6">{t(language, 'languageSettings')}</h2>
                  <div className="space-y-3">
                    {languages.map(lang => (
                      <button key={lang.code} onClick={() => onLanguageChange(lang.code)} className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all ${language === lang.code ? 'border-green-600 bg-green-50' : 'border-gray-200 hover:border-green-300'}`}>
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{lang.flag}</span>
                          <div className="text-left">
                            <div className="text-gray-900">{lang.nativeName}</div>
                            <div className="text-xs text-gray-500">{lang.name}</div>
                          </div>
                        </div>
                        {language === lang.code && <Check className="w-5 h-5 text-green-600" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {activeSection === 'subscription' && (
                <div>
                  <h2 className="text-green-800 mb-6">{t(language, 'subscriptionPlans')}</h2>
                  <div className="space-y-4">
                    <button onClick={() => onSubscriptionChange('free')} className={`w-full text-left p-6 rounded-xl border-2 transition-all ${subscriptionPlan === 'free' ? 'border-green-600 bg-green-50' : 'border-gray-200 hover:border-green-300'}`}>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-gray-900">{t(language, 'freePlan')}</h3>
                        {subscriptionPlan === 'free' && <Check className="w-5 h-5 text-green-600" />}
                      </div>
                      <p className="text-gray-600 text-sm">Basic access to positive news</p>
                    </button>

                    <button onClick={() => onSubscriptionChange('monthly')} className={`w-full text-left p-6 rounded-xl border-2 transition-all ${subscriptionPlan === 'monthly' ? 'border-green-600 bg-green-50' : 'border-gray-200 hover:border-green-300'}`}>
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h3 className="text-gray-900">{t(language, 'monthlyPlan')}</h3>
                          <p className="text-green-600">€2.99{t(language, 'perMonth')}</p>
                        </div>
                        {subscriptionPlan === 'monthly' && <Check className="w-5 h-5 text-green-600" />}
                      </div>
                      <p className="text-gray-600 text-sm">Unlimited access & ad-free</p>
                    </button>

                    <button onClick={() => onSubscriptionChange('yearly')} className={`w-full text-left p-6 rounded-xl border-2 transition-all ${subscriptionPlan === 'yearly' ? 'border-green-600 bg-green-50' : 'border-gray-200 hover:border-green-300'}`}>
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h3 className="text-gray-900">{t(language, 'yearlyPlan')}</h3>
                          <p className="text-green-600">€19.99{t(language, 'perYear')}</p>
                          <span className="inline-block mt-1 px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">{t(language, 'bestValue')}</span>
                        </div>
                        {subscriptionPlan === 'yearly' && <Check className="w-5 h-5 text-green-600" />}
                      </div>
                      <p className="text-gray-600 text-sm">Save 43% compared to monthly</p>
                    </button>
                  </div>
                </div>
              )}

              {activeSection === 'about' && (
                <div>
                  <h2 className="text-green-800 mb-4">{t(language, 'about')} {t(language, 'siteName')}</h2>
                  <p className="text-gray-600 mb-4">Spreading positivity through uplifting news stories from around the world.</p>
                  <h3 className="text-gray-900 mb-2">{t(language, 'ourMission')}</h3>
                  <p className="text-gray-600">We believe in the power of positive news to inspire change and bring communities together.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
