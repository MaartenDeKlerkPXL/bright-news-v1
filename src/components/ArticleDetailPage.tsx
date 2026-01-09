import React, {useState} from 'react';
import {articles} from '../data/articlesData';
import {ImageWithFallback} from './figma/ImageWithFallback';
import {ArrowLeft, Bookmark, BookmarkCheck, Calendar, MapPin, Share2, Tag} from 'lucide-react';
import {t} from '../data/translations';
import {ArticleCard} from './ArticleCard';

interface ArticleDetailPageProps {
    articleId: number;
    onBack: () => void;
    isSaved: boolean;
    onToggleSave: (id: number) => void;
    subscriptionPlan: 'free' | 'monthly' | 'yearly';
    language: string;
    savedArticles: number[];
    onNavigateToArticle: (id: number) => void;
    onNavigateToProfile: () => void;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({
                                                                        articleId,
                                                                        onBack,
                                                                        isSaved,
                                                                        onToggleSave,
                                                                        subscriptionPlan,
                                                                        language,
                                                                        savedArticles,
                                                                        onNavigateToArticle,
                                                                        onNavigateToProfile
                                                                    }) => {
    const [showShareToast, setShowShareToast] = useState(false);
    const article = articles.find(a => a.id === articleId);

    if (!article) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="text-center">
                    <div className="text-6xl mb-4">📰</div>
                    <h2 className="text-gray-700 mb-2">{t(language, 'articleNotFound')}</h2>
                    <button onClick={onBack}
                            className="text-green-600 hover:text-green-700">{t(language, 'backToHome')}</button>
                </div>
            </div>
        );
    }

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({title: article.title, text: article.summary, url: window.location.href}).catch(() => {
            });
        } else {
            setShowShareToast(true);
            setTimeout(() => setShowShareToast(false), 2000);
        }
    };

    const getCatTranslation = (cat: string) => {
        const map: Record<string, any> = {
            'Technology': 'technology', 'Green World': 'greenWorld', 'Health': 'health',
            'Education': 'education', 'Community': 'community', 'Sport': 'sport'
        };
        return t(language, map[cat]) || cat;
    };

    const getRegTranslation = (reg: string) => {
        const map: Record<string, any> = {
            'Europe': 'europe', 'Asia': 'asia', 'Africa': 'africa',
            'Americas': 'americas', 'Oceania': 'oceania'
        };
        return t(language, map[reg]) || reg;
    };

    // Get related articles in the same category (excluding current article)
    const relatedArticles = articles.filter(a => a.id !== article.id && a.category === article.category).slice(0, 3);

    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <button onClick={onBack}
                        className="flex items-center gap-2 text-gray-600 hover:text-green-600 mb-6 transition-colors group">
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform"/>
                    <span>{t(language, 'backToHome')}</span>
                </button>

                <article className="bg-white rounded-3xl overflow-hidden shadow-lg border border-green-100 mb-12">
                    <div className="relative h-[28rem]">
                        <ImageWithFallback src={article.image} alt={article.title}
                                           className="w-full h-full object-cover"/>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"/>
                        <div className="absolute bottom-0 left-0 right-0 p-8">
                            <div className="flex items-center gap-3 mb-4">
                <span
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-sm text-green-700 rounded-full text-sm font-medium">
                  <Tag className="w-4 h-4"/>
                    {getCatTranslation(article.category)}
                </span>
                                <span
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-sm text-gray-700 rounded-full text-sm">
                  <MapPin className="w-4 h-4"/>
                                    {getRegTranslation(article.region)}
                </span>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 lg:p-12">
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4"/>
                                <span>{article.date}</span>
                            </div>
                        </div>

                        <h1 className="text-gray-900 mb-6 leading-tight">{article.title}</h1>

                        <div className="flex items-center gap-3 mb-8 pb-8 border-b border-gray-100">
                            <button onClick={() => onToggleSave(article.id)}
                                    className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all font-medium ${isSaved ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                                {isSaved ? <BookmarkCheck className="w-5 h-5"/> : <Bookmark className="w-5 h-5"/>}
                                <span>{isSaved ? t(language, 'unsaveArticle') : t(language, 'saveArticle')}</span>
                            </button>
                            <button onClick={handleShare}
                                    className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-all font-medium">
                                <Share2 className="w-5 h-5"/>
                                <span>{t(language, 'shareArticle')}</span>
                            </button>
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">{article.summary}</p>
                            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{article.content}</p>
                        </div>
                    </div>
                </article>

                {relatedArticles.length > 0 && (
                    <div className="mb-12">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h2 className="text-green-800 mb-2">{t(language, 'moreFrom')} {getCatTranslation(article.category)}</h2>
                                <p className="text-gray-600 text-sm">{t(language, 'relatedArticles')}</p>
                            </div>
                            <span className="px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                {relatedArticles.length} {relatedArticles.length === 1 ? t(language, 'story') : t(language, 'stories')}
              </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {relatedArticles.map(a => (
                                <ArticleCard key={a.id} article={a} onReadMore={onNavigateToArticle}
                                             isSaved={savedArticles.includes(a.id)} onToggleSave={onToggleSave}
                                             language={language}/>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {showShareToast && (
                <div
                    className="fixed bottom-6 right-6 bg-green-600 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 animate-slide-up">
                    <Share2 className="w-5 h-5"/>
                    <span className="font-medium">Link copied to clipboard!</span>
                </div>
            )}
        </div>
    );
};
