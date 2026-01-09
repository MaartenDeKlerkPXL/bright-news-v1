import React from 'react';
import { Heart, Globe, Languages, Sparkles, Shield, Check } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block p-4 bg-green-100 rounded-full mb-6">
            <Heart className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-green-800 mb-4">
            About Bright News
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Spreading positivity and hope through uplifting news stories from around the world.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg border border-green-100 mb-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-green-800 mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In a world where negative news often dominates the headlines, Bright News exists to shine a light on the positive stories that inspire hope, celebrate human achievement, and remind us of the good happening all around us every single day.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We believe that staying informed doesn't have to mean feeling overwhelmed or anxious. By focusing exclusively on uplifting, solution-oriented journalism, we help our readers start their day with optimism, motivation, and a renewed sense of possibility.
              </p>
              <p className="text-gray-700 leading-relaxed">
                From groundbreaking scientific discoveries to heartwarming acts of kindness, environmental victories to educational innovations—every story we share is carefully curated to inspire, inform, and uplift.
              </p>
            </div>

            <div>
              <h2 className="text-green-800 mb-4">Our Story</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Bright News was founded in 2023 by a team of journalists and mental health advocates who recognized the growing need for a news platform that prioritizes positivity without sacrificing accuracy or depth. What started as a small newsletter has blossomed into a global community of readers across five continents.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, we're proud to serve millions of readers worldwide, offering them a refreshing alternative to traditional news media—one that celebrates human resilience, innovation, and compassion.
              </p>
            </div>

            <div>
              <h2 className="text-green-800 mb-4">What Makes Us Different</h2>
              <p className="text-gray-700 leading-relaxed">
                Unlike traditional news outlets, we don't just report on problems—we spotlight solutions. Our editorial team verifies every story, ensuring that the hope we spread is grounded in truth and real-world impact. We believe that informed optimism is the catalyst for meaningful change.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Bright News Section */}
        <div className="mb-12">
          <h2 className="text-green-800 mb-6 text-center">Why Choose Bright News?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-green-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-gray-900 mb-2">Only Good & Inspiring Stories</h3>
                  <p className="text-gray-600 text-sm">
                    Every article is handpicked to uplift and inspire. We focus exclusively on positive news that celebrates human achievement, progress, and kindness.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-green-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-gray-900 mb-2">Clean, Ad-Free Experience</h3>
                  <p className="text-gray-600 text-sm">
                    Enjoy distraction-free reading with our premium plans. No intrusive ads, no clickbait—just pure, quality content designed for a peaceful reading experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-green-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Globe className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-gray-900 mb-2">Global Positive Coverage</h3>
                  <p className="text-gray-600 text-sm">
                    We bring you uplifting stories from every corner of the world—from Europe to Asia, Africa to the Americas, and Oceania—celebrating global diversity and unity.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-green-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Languages className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-gray-900 mb-2">Multiple Languages</h3>
                  <p className="text-gray-600 text-sm">
                    Read in your preferred language. Bright News is available in English, Dutch, German, Spanish, and French—making positivity accessible to everyone.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-green-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-gray-900 mb-2">Verified & Fact-Checked</h3>
                  <p className="text-gray-600 text-sm">
                    Every story is thoroughly researched and verified by our editorial team. We only share news that's authentic, credible, and based on real-world impact.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-green-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-gray-900 mb-2">Flexible Subscriptions</h3>
                  <p className="text-gray-600 text-sm">
                    Choose a plan that fits your needs. Start free or upgrade to unlock full articles, an ad-free experience, and support our mission to spread positivity worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Categories We Cover */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-green-100 mb-12">
          <h2 className="text-green-800 mb-6 text-center">What We Cover</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-gray-900 mb-1">Technology</h3>
              <p className="text-sm text-gray-600">Innovations making life better</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-gray-900 mb-1">Green World</h3>
              <p className="text-sm text-gray-600">Environmental success stories</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="text-gray-900 mb-1">Health</h3>
              <p className="text-sm text-gray-600">Medical breakthroughs & wellness</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-gray-900 mb-1">Education</h3>
              <p className="text-sm text-gray-600">Learning transforming lives</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-gray-900 mb-1">Community</h3>
              <p className="text-sm text-gray-600">People making a difference</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-8 sm:p-12 text-center text-white">
          <h2 className="mb-4">Start Your Day with Positivity</h2>
          <p className="text-lg mb-8 text-green-50">
            Join thousands of readers who choose hope over anxiety. Subscribe to Bright News today and experience the difference positive journalism can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-green-600 rounded-xl hover:bg-green-50 transition-colors flex items-center justify-center">
              Subscribe Today
            </button>
            <button className="px-8 py-3 bg-green-700 text-white rounded-xl hover:bg-green-800 transition-colors border-2 border-white/20 flex items-center justify-center">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
