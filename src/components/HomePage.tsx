import React, { useState, useMemo } from 'react';
import { articles } from '../data/articlesData';
import { ArticleCard } from './ArticleCard';
import { Filter, ChevronDown, ChevronUp, X } from 'lucide-react';
import { t } from '../data/translations';

interface HomePageProps {
  onNavigateToArticle: (id: number) => void;
  savedArticles: number[];
  onToggleSave: (id: number) => void;
  language: string;
}

const categories = ['All', 'Technology', 'Green World', 'Health', 'Education', 'Community', 'Sport'] as const;
const regions = ['All Regions', 'Europe', 'Asia', 'Africa', 'Americas', 'Oceania'] as const;

export const HomePage: React.FC<HomePageProps> = ({ onNavigateToArticle, savedArticles, onToggleSave, language }) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['All']);
  const [selectedRegions, setSelectedRegions] = useState<string[]>(['All Regions']);
  const [isFilterExpanded, setIsFilterExpanded] = useState<boolean>(true);

  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const categoryMatch = selectedCategories.includes('All') || selectedCategories.includes(article.category);
      const regionMatch = selectedRegions.includes('All Regions') || selectedRegions.includes(article.region);
      return categoryMatch && regionMatch;
    });
  }, [selectedCategories, selectedRegions]);

  const toggleCategory = (cat: string) => {
    if (cat === 'All') {
      setSelectedCategories(['All']);
    } else {
      setSelectedCategories(prev => {
        const withoutAll = prev.filter(c => c !== 'All');
        if (withoutAll.includes(cat)) {
          const newSelection = withoutAll.filter(c => c !== cat);
          return newSelection.length === 0 ? ['All'] : newSelection;
        } else {
          return [...withoutAll, cat];
        }
      });
    }
  };

  const toggleRegion = (reg: string) => {
    if (reg === 'All Regions') {
      setSelectedRegions(['All Regions']);
    } else {
      setSelectedRegions(prev => {
        const withoutAll = prev.filter(r => r !== 'All Regions');
        if (withoutAll.includes(reg)) {
          const newSelection = withoutAll.filter(r => r !== reg);
          return newSelection.length === 0 ? ['All Regions'] : newSelection;
        } else {
          return [...withoutAll, reg];
        }
      });
    }
  };

  const clearFilters = () => {
    setSelectedCategories(['All']);
    setSelectedRegions(['All Regions']);
  };

  const getCatTranslation = (cat: string) => {
    const map: Record<string, any> = { 'All': 'allCategories', 'Technology': 'technology', 'Green World': 'greenWorld', 
      'Health': 'health', 'Education': 'education', 'Community': 'community', 'Sport': 'sport' };
    return t(language, map[cat] || 'allCategories');
  };

  const getRegTranslation = (reg: string) => {
    const map: Record<string, any> = { 'All Regions': 'allRegions', 'Europe': 'europe', 'Asia': 'asia', 
      'Africa': 'africa', 'Americas': 'americas', 'Oceania': 'oceania' };
    return t(language, map[reg] || 'allRegions');
  };

  const hasActiveFilters = !selectedCategories.includes('All') || !selectedRegions.includes('All Regions');

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-green-800 mb-4">{t(language, 'welcomeTo')} {t(language, 'siteName')}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Discover uplifting stories from around the world</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-green-100 mb-6">
          <div className="flex items-center justify-between p-5 border-b border-gray-100">
            <button onClick={() => setIsFilterExpanded(!isFilterExpanded)} className="flex items-center gap-2 hover:opacity-70 transition-opacity">
              <Filter className="w-4 h-4 text-green-600" />
              <span className="text-sm text-gray-700">{t(language, 'filter')}</span>
              {hasActiveFilters && (
                <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">{t(language, 'active')}</span>
              )}
              {isFilterExpanded ? <ChevronUp className="w-5 h-5 text-gray-500 ml-2" /> : <ChevronDown className="w-5 h-5 text-gray-500 ml-2" />}
            </button>
            {hasActiveFilters && (
              <button onClick={clearFilters} className="px-3 py-1 text-xs text-gray-600 hover:text-green-600 flex items-center gap-1 transition-colors">
                <X className="w-3 h-3" />
                {t(language, 'cancel')}
              </button>
            )}
          </div>

          {isFilterExpanded && (
            <div className="px-5 pb-5 space-y-6">
              <div>
                <h3 className="text-sm text-gray-700 mb-3 text-center">{t(language, 'categories')}</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {categories.map(cat => (
                    <button key={cat} onClick={() => toggleCategory(cat)} className={`px-4 py-2 rounded-full text-sm transition-all ${selectedCategories.includes(cat) ? 'bg-green-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                      {getCatTranslation(cat)}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm text-gray-700 mb-3 text-center">{t(language, 'regions')}</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {regions.map(reg => (
                    <button key={reg} onClick={() => toggleRegion(reg)} className={`px-4 py-2 rounded-full text-sm transition-all ${selectedRegions.includes(reg) ? 'bg-green-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                      {getRegTranslation(reg)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mb-6 flex items-center justify-between">
          <p className="text-gray-600 text-sm">{t(language, 'showing')} <span className="text-green-700 font-medium">{filteredArticles.length}</span> {t(language, 'positive')} {filteredArticles.length === 1 ? t(language, 'story') : t(language, 'stories')}</p>
          {hasActiveFilters && (
            <div className="flex flex-wrap gap-2">
              {selectedCategories.filter(c => c !== 'All').map(cat => (
                <span key={cat} className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                  {getCatTranslation(cat)}
                  <button onClick={() => toggleCategory(cat)} className="hover:text-green-900">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
              {selectedRegions.filter(r => r !== 'All Regions').map(reg => (
                <span key={reg} className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                  {getRegTranslation(reg)}
                  <button onClick={() => toggleRegion(reg)} className="hover:text-blue-900">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>

        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map(article => (
              <ArticleCard key={article.id} article={article} onReadMore={onNavigateToArticle} isSaved={savedArticles.includes(article.id)} onToggleSave={onToggleSave} language={language} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-gray-600 mb-2 text-lg">{t(language, 'noArticlesFound')}</p>
            <p className="text-gray-500 text-sm mb-4">Try adjusting your filters</p>
            <button onClick={clearFilters} className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};