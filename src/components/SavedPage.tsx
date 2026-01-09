import React from 'react';
import { articles } from '../data/articlesData';
import { ArticleCard } from './ArticleCard';
import { BookmarkX } from 'lucide-react';
import { t } from '../data/translations';

interface SavedPageProps {
  savedArticles: number[];
  onNavigateToArticle: (id: number) => void;
  onToggleSave: (id: number) => void;
  language: string;
}

export const SavedPage: React.FC<SavedPageProps> = ({ savedArticles, onNavigateToArticle, onToggleSave, language }) => {
  const savedArticleData = articles.filter(article => savedArticles.includes(article.id));

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-green-800 mb-2">{t(language, 'saved')}</h1>
          <p className="text-gray-600">
            {savedArticleData.length > 0 
              ? `${t(language, 'youHaveSaved')} ${savedArticleData.length} ${t(language, 'positive')} ${savedArticleData.length === 1 ? t(language, 'story') : t(language, 'stories')}`
              : t(language, 'startSaving')
            }
          </p>
        </div>

        {savedArticleData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedArticleData.map(article => (
              <ArticleCard key={article.id} article={article} onReadMore={onNavigateToArticle} isSaved={true} onToggleSave={onToggleSave} language={language} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <BookmarkX className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-gray-700 mb-2">{t(language, 'noSavedArticles')}</h3>
            <p className="text-gray-500 mb-6 text-center max-w-md">{t(language, 'startSaving')}</p>
          </div>
        )}
      </div>
    </div>
  );
};
