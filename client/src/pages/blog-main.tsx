import { Link } from 'wouter';
import { Calendar, Clock, ArrowRight, Users, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";
import passportLogo from '@assets/a1c5a1_9514ede9e3124d7a9adf78f5dcf07f28~mv2_1755803448396.png';
import childrenLearningImage from '@assets/generated_images/Children_learning_Spanish_corrected_spelling_deeeb3a8.png';
import familyHeritageImage from '@assets/generated_images/Family_cultural_heritage_connection_4f727054.png';
import businessSuccessImage from '@assets/generated_images/Business_financial_success_bilingual_93661f06.png';
import barcelonaImage from '@assets/generated_images/Barcelona_travel_cultural_exploration_1ff52e01.png';
import salsaCultureImage from '@assets/generated_images/Salsa_dancing_cultural_expression_1d332aa2.png';
import travelPhrasesImage from '@assets/generated_images/Travel_Spanish_communication_phrases_e3ec1049.png';
import independentLearningImage from '@assets/generated_images/Independent_Spanish_learning_methods_2fa8b756.png';
import fastLearningImage from '@assets/generated_images/Fast_Spanish_learning_progress_d03b3343.png';
import bilingualBenefitsImage from '@assets/generated_images/Hidden_benefits_bilingual_advantages_a26ab52f.png';

export default function BlogMain() {
  const blogPosts = [
    {
      id: 'spanish-benefits-children',
      title: 'Spanish: Many Benefits for Your Children',
      excerpt: 'Teaching Spanish to children offers cognitive, cultural, and social benefits that can enrich their lives profoundly. Discover why learning Spanish is one of the best investments for your child\'s future.',
      date: '2024-12-15',
      readTime: '5 min read',
      category: 'Education',
      image: childrenLearningImage,
      featured: true
    },
    {
      id: 'learning-spanish-brings-you-closer-to-your-roots',
      title: 'Learning Spanish Brings You Closer to Your Roots',
      excerpt: 'Learning Spanish is not only a valuable skill but also a powerful tool for reconnecting with your cultural and familial roots. Discover how this language opens doors to deeper heritage understanding.',
      date: '2024-12-10',
      readTime: '4 min read',
      category: 'Culture',
      image: familyHeritageImage,
      featured: false
    },
    {
      id: 'financial-freedom-by-learning-spanish',
      title: 'Financial Freedom by Learning Spanish',
      excerpt: 'Learning Spanish can be a key tool for achieving financial freedom by opening opportunities in Spanish-speaking markets and accessing valuable financial resources and networks.',
      date: '2024-12-05',
      readTime: '4 min read',
      category: 'Business',
      image: businessSuccessImage,
      featured: false
    },
    {
      id: 'discover-the-beauty-of-barcelona',
      title: 'Discover the Beauty of Barcelona',
      excerpt: 'Barcelona combines rich history, impressive architecture, and vibrant culture. Learn how Spanish can enrich your experience when visiting this incredible Mediterranean city.',
      date: '2024-11-30',
      readTime: '5 min read',
      category: 'Travel',
      image: barcelonaImage,
      featured: false
    },
    {
      id: 'the-art-of-salsa-an-expression-of-passion-and-rhythm',
      title: 'The Art of Salsa: An Expression of Passion and Rhythm',
      excerpt: 'Salsa is more than music and dance; it\'s a cultural expression that encapsulates the passion and vibrant rhythm of the Latin community. Discover how Spanish enriches this experience.',
      date: '2024-11-25',
      readTime: '4 min read',
      category: 'Culture',
      image: salsaCultureImage,
      featured: false
    },
    {
      id: 'essential-spanish-phrases-for-travelers-your-ticket-to-fluent-communication',
      title: 'Essential Spanish Phrases for Travelers: Your Ticket to Fluent Communication',
      excerpt: 'Planning a trip to a Spanish-speaking country? Learn 15 essential phrases that will help you navigate with ease and connect more deeply with local culture and people.',
      date: '2024-11-20',
      readTime: '6 min read',
      category: 'Travel',
      image: travelPhrasesImage,
      featured: false
    },
    {
      id: '6-quick-cheap-and-easy-hacks-to-learn-spanish-all-alone',
      title: '6 Quick, Cheap and Easy Hacks to Learn Spanish All Alone',
      excerpt: 'Even with a busy schedule and limited budget, learning Spanish on your own is possible. Discover 6 practical methods to practice Spanish anywhere, anytime.',
      date: '2024-11-15',
      readTime: '5 min read',
      category: 'Learning Tips',
      image: independentLearningImage,
      featured: false
    },
    {
      id: 'how-can-i-learn-spanish-quick-and-easy',
      title: 'How Can I Learn Spanish Quick and Easy?',
      excerpt: 'Need to become fluent in Spanish fast? Discover the proven methods and structured approach that can help you achieve Spanish fluency in record time.',
      date: '2024-11-10',
      readTime: '4 min read',
      category: 'Learning Tips',
      image: fastLearningImage,
      featured: false
    },
    {
      id: '5-secret-benefits-of-learning-spanish',
      title: '5 Secret Benefits of Learning Spanish',
      excerpt: 'Discover the hidden advantages of becoming bilingual in Spanish that go beyond basic communication. From enhanced analytical skills to unique career opportunities.',
      date: '2024-11-05',
      readTime: '6 min read',
      category: 'Education',
      image: bilingualBenefitsImage,
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/">
              <img src={passportLogo} alt="Passport to Fluency" className="h-8" />
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/en" className="text-gray-600 hover:text-passport-blue transition-colors">
                Spanish Learning
              </Link>
              <Link href="/es" className="text-gray-600 hover:text-passport-blue transition-colors">
                English Learning
              </Link>
              <Link href="/blog" className="text-passport-blue font-medium">
                Blog
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-8 md:py-12 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-8 right-8 opacity-8 z-0 hidden md:block">
          <img 
            src={childrenLearningImage} 
            alt="" 
            className="w-32 h-32 object-contain transform -rotate-12 rounded-3xl"
          />
        </div>
        <div className="absolute bottom-8 left-8 opacity-10 z-0 hidden lg:block">
          <img 
            src={businessSuccessImage} 
            alt="" 
            className="w-40 h-40 object-contain rounded-3xl"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-passport-blue/10 text-passport-blue rounded-full px-4 py-2 text-sm mb-6">
              <Calendar className="w-4 h-4 mr-2" />
              Language Learning Insights
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-passport-blue">Language Learning</span><br />
              <span className="italic text-passport-orange">Blog</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Expert tips, cultural insights, and proven strategies to accelerate your language learning journey.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Featured Post */}
            {blogPosts.filter(post => post.featured).map(post => (
              <div key={post.id} className="mb-16">
                <div className="bg-gradient-to-r from-passport-blue/5 to-passport-orange/5 rounded-2xl p-8 md:p-12">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center mb-4">
                        <span className="bg-passport-orange text-white px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </span>
                        <span className="ml-3 text-gray-500 text-sm">{post.category}</span>
                      </div>
                      
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {post.title}
                      </h2>
                      
                      <p className="text-lg text-gray-600 mb-6">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center text-gray-500 text-sm mb-6">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="mr-4">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{post.readTime}</span>
                      </div>
                      
                      <Link href={`/blog/${post.id}`}>
                        <Button className="bg-passport-orange hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center transition-colors">
                          Read Article
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                      </Link>
                    </div>
                    
                    <div className="order-first lg:order-last">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-64 lg:h-80 object-cover rounded-2xl shadow-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* More Articles Section */}
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                More Language Learning Articles
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.filter(post => !post.featured).map(post => (
                  <div key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <span className="bg-passport-blue text-white px-2 py-1 rounded text-xs font-medium">
                          {post.category}
                        </span>
                        <span className="ml-2 text-gray-500 text-xs">{post.readTime}</span>
                      </div>
                      
                      <h4 className="text-xl font-bold text-gray-900 mb-3">
                        {post.title}
                      </h4>
                      
                      <p className="text-gray-600 mb-4 text-sm">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500 text-xs">
                          {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                        <Link href={`/blog/${post.id}`}>
                          <button className="text-passport-orange hover:text-orange-600 font-semibold text-sm flex items-center">
                            Read More
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Ready to Start Your Language Learning Journey?
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Join thousands of students who are already speaking Spanish or English confidently with our native instructors.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/en">
                  <Button className="bg-passport-orange hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    Learn Spanish
                  </Button>
                </Link>
                <Link href="/es">
                  <Button className="bg-passport-blue hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center">
                    <Star className="w-5 h-5 mr-2" />
                    Learn English
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Link href="/">
              <img src={passportLogo} alt="Passport to Fluency" className="h-10 brightness-0 invert mx-auto mb-4" />
            </Link>
            <p className="text-gray-400 mb-4">
              Expert language learning insights and proven strategies for Spanish and English learners.
            </p>
            <div className="text-center text-gray-400">
              <p>&copy; 2025 Passport2Fluency. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}