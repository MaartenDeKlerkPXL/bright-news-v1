import React, {useEffect, useState} from 'react';
import {Header} from './components/Header';
import {HomePage} from './components/HomePage';
import {ArticleDetailPage} from './components/ArticleDetailPage';
import {SavedPage} from './components/SavedPage';
import {ProfilePage} from './components/ProfilePage';
import {LoginPage} from './components/LoginPage';

type Page = 'home' | 'article' | 'saved' | 'profile' | 'login';
type SubscriptionPlan = 'free' | 'monthly' | 'yearly';

export default function App() {
    const [currentPage, setCurrentPage] = useState<Page>('home');
    const [selectedArticleId, setSelectedArticleId] = useState<number | null>(null);
    const [savedArticles, setSavedArticles] = useState<number[]>([]);
    const [language, setLanguage] = useState<string>('en');
    const [subscriptionPlan, setSubscriptionPlan] = useState<SubscriptionPlan>('free');

    useEffect(() => {
        const saved = localStorage.getItem('savedArticles');
        if (saved) setSavedArticles(JSON.parse(saved));

        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) setLanguage(savedLanguage);

        const savedPlan = localStorage.getItem('subscriptionPlan');
        if (savedPlan) setSubscriptionPlan(savedPlan as SubscriptionPlan);
    }, []);

    useEffect(() => {
        localStorage.setItem('savedArticles', JSON.stringify(savedArticles));
    }, [savedArticles]);
    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);
    useEffect(() => {
        localStorage.setItem('subscriptionPlan', subscriptionPlan);
    }, [subscriptionPlan]);

    const handleNavigate = (page: Page) => {
        setCurrentPage(page);
        setSelectedArticleId(null);
    };

    const handleNavigateToArticle = (id: number) => {
        setSelectedArticleId(id);
        setCurrentPage('article');
    };

    const handleToggleSave = (id: number) => {
        setSavedArticles(prev => prev.includes(id) ? prev.filter(articleId => articleId !== id) : [...prev, id]);
    };

    const handleBackFromArticle = () => {
        setCurrentPage('home');
        setSelectedArticleId(null);
    };

    return (
        <div className="min-h-screen bg-white">
            <Header currentPage={currentPage} onNavigate={handleNavigate} language={language}/>

            {currentPage === 'home' && (
                <HomePage onNavigateToArticle={handleNavigateToArticle} savedArticles={savedArticles}
                          onToggleSave={handleToggleSave} language={language}/>
            )}

            {currentPage === 'article' && selectedArticleId !== null && (
                <ArticleDetailPage articleId={selectedArticleId} onBack={handleBackFromArticle}
                                   isSaved={savedArticles.includes(selectedArticleId)} onToggleSave={handleToggleSave}
                                   subscriptionPlan={subscriptionPlan} language={language} savedArticles={savedArticles}
                                   onNavigateToArticle={handleNavigateToArticle}
                                   onNavigateToProfile={() => setCurrentPage('profile')}/>
            )}

            {currentPage === 'saved' && (
                <SavedPage savedArticles={savedArticles} onNavigateToArticle={handleNavigateToArticle}
                           onToggleSave={handleToggleSave} language={language}/>
            )}

            {currentPage === 'profile' && (
                <ProfilePage language={language} onLanguageChange={setLanguage} subscriptionPlan={subscriptionPlan}
                             onSubscriptionChange={setSubscriptionPlan}
                             onNavigateToLogin={() => setCurrentPage('login')}/>
            )}

            {currentPage === 'login' && (
                <LoginPage onBack={() => setCurrentPage('profile')} language={language}/>
            )}
        </div>
    );
}
