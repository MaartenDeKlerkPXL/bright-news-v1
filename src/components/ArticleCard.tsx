import React from 'react';
import { Article } from '../data/articlesData';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Bookmark, BookmarkCheck } from 'lucide-react';
import { t } from '../data/translations';

interface ArticleCardProps {
  article: Article;
  onReadMore: (id: number) => void;
  isSaved: boolean;
  onToggleSave: (id: number) => void;
  language: string;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, onReadMore, isSaved, onToggleSave, language }) => {
  const getCatTranslation = (cat: string) => {
    const map: Record<string, any> = { 'Technology': 'technology', 'Green World': 'greenWorld', 'Health': 'health', 
      'Education': 'education', 'Community': 'community', 'Sport': 'sport' };
    return t(language, map[cat]) || cat;
  };

  const getRegTranslation = (reg: string) => {
    const map: Record<string, any> = { 'Europe': 'europe', 'Asia': 'asia', 'Africa': 'africa', 
      'Americas': 'americas', 'Oceania': 'oceania' };
    return t(language, map[reg]) || reg;
  };

  return (
    <div onClick={() => onReadMore(article.id)} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-green-50 flex flex-col h-full cursor-pointer">
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback src={article.image} alt={article.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
        <div className="absolute top-3 right-3 flex gap-2">
          <span className="px-3 py-1 bg-white/95 backdrop-blur-sm text-green-700 rounded-full text-xs">{getCatTranslation(article.category)}</span>
          <button onClick={(e) => { e.stopPropagation(); onToggleSave(article.id); }} className="w-8 h-8 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-green-100 transition-colors" aria-label={isSaved ? t(language, 'unsaveArticle') : t(language, 'saveArticle')}>
            {isSaved ? <BookmarkCheck className="w-4 h-4 text-green-600 fill-green-600" /> : <Bookmark className="w-4 h-4 text-gray-600" />}
          </button>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs text-gray-500">{getRegTranslation(article.region)}</span>
          <span className="text-xs text-gray-300">•</span>
          <span className="text-xs text-gray-500">{article.date}</span>
        </div>
        <h3 className="text-gray-900 mb-3 line-clamp-2">{article.title}</h3>
        <p className="text-gray-600 text-sm line-clamp-3 flex-grow">{article.summary}</p>
      </div>
    </div>
  );
};
