import { Link, useParams } from 'wouter';
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2, Users, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";
import passportLogo from '@assets/a1c5a1_9514ede9e3124d7a9adf78f5dcf07f28~mv2_1755803448396.png';
import passportImage from '@assets/Corporate Image Sept 2025 (6)_1756765151457.png';
import worldImage from '@assets/Corporate Image Sept 2025 (7)_1756765151458.png';

const blogPosts = {
  'spanish-benefits-children': {
    title: 'Spanish: Many Benefits for Your Children',
    subtitle: 'Teaching Spanish to children offers cognitive, cultural, and social benefits that can enrich their lives profoundly',
    date: '2024-12-15',
    readTime: '5 min read',
    category: 'Education',
    author: 'Passport to Fluency Team',
    heroImage: passportImage,
    content: `
      <div class="prose prose-lg max-w-none">
        <img src="${passportImage}" alt="Children learning Spanish" class="w-full h-64 md:h-96 object-cover rounded-2xl mb-8" />
        
        <p class="text-xl text-gray-700 mb-8 leading-relaxed">
          In an increasingly globalized world, the ability to speak multiple languages is a significant advantage. Teaching Spanish to children is not only an excellent investment in their future careers but also offers a variety of cognitive, cultural, and social benefits that can enrich their lives profoundly. Here's why learning Spanish is one of the best ways to invest your children's time.
        </p>

        <h2 class="text-3xl font-bold text-gray-900 mb-6 text-passport-blue">Cognitive Benefits</h2>
        
        <div class="bg-blue-50 border-l-4 border-passport-blue p-6 mb-8 rounded-r-lg">
          <h3 class="text-xl font-semibold text-gray-900 mb-3">1. Improved Cognitive Skills</h3>
          <p class="text-gray-700 leading-relaxed">
            Learning a second language like Spanish has been shown to enhance children's cognitive abilities. This includes improvements in problem-solving skills, memory, and creativity. Studies have demonstrated that bilingual children have better focus and can switch tasks more easily than their monolingual peers.
          </p>
        </div>

        <h2 class="text-3xl font-bold text-gray-900 mb-6 text-passport-orange">Academic Advantages</h2>
        
        <div class="bg-orange-50 border-l-4 border-passport-orange p-6 mb-6 rounded-r-lg">
          <h3 class="text-xl font-semibold text-gray-900 mb-3">1. Better Academic Performance</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            Children who study a second language tend to perform better in other academic areas. Exposure to Spanish can enhance their skills in their native language, including better grammar understanding, a broader vocabulary, and stronger writing skills.
          </p>
        </div>

        <div class="bg-orange-50 border-l-4 border-passport-orange p-6 mb-8 rounded-r-lg">
          <h3 class="text-xl font-semibold text-gray-900 mb-3">2. Preparation for the Future</h3>
          <p class="text-gray-700 leading-relaxed">
            Knowing Spanish can open up many academic and professional opportunities in the future. Universities and employers value bilingual skills, and Spanish is one of the most widely spoken languages globally, making it highly valued in the global job market.
          </p>
        </div>

        <h2 class="text-3xl font-bold text-gray-900 mb-6 text-green-600">Social and Cultural Enrichment</h2>
        
        <div class="bg-green-50 border-l-4 border-green-500 p-6 mb-8 rounded-r-lg">
          <h3 class="text-xl font-semibold text-gray-900 mb-3">1. Enhanced Cultural Understanding</h3>
          <p class="text-gray-700 leading-relaxed">
            Learning Spanish exposes children to diverse cultures and perspectives from various parts of the world, improving their social skills and fostering tolerance and respect for other cultures.
          </p>
        </div>

        <h2 class="text-3xl font-bold text-gray-900 mb-6 text-purple-600">Character Development</h2>
        
        <div class="bg-purple-50 border-l-4 border-purple-500 p-6 mb-6 rounded-r-lg">
          <h3 class="text-xl font-semibold text-gray-900 mb-3">1. Encouraging Perseverance</h3>
          <p class="text-gray-700 leading-relaxed">
            Learning a new language is a challenge that requires patience, practice, and perseverance. By facing and overcoming these challenges, children can develop greater resilience and a strong work ethic that will benefit them in all areas of life.
          </p>
        </div>

        <div class="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8 rounded-r-lg">
          <h3 class="text-xl font-semibold text-gray-900 mb-3">2. Self-Confidence</h3>
          <p class="text-gray-700 leading-relaxed">
            Mastering a new skill like Spanish can give children a great sense of achievement and boost their self-esteem. Knowing they can effectively communicate in another language can strengthen their confidence and motivation to learn other skills.
          </p>
        </div>

        <div class="bg-gradient-to-r from-passport-blue/10 to-passport-orange/10 p-8 rounded-2xl mb-8">
          <h3 class="text-2xl font-bold text-gray-900 mb-4 text-center">The Investment That Keeps Giving</h3>
          <p class="text-lg text-gray-700 leading-relaxed text-center">
            Investing time in learning Spanish is one of the best decisions you can make for your children's holistic development. The cognitive, academic, cultural, social, and personal benefits make this an invaluable investment for their future. It will not only better prepare them for an interconnected world but also enrich their lives in ways that extend beyond the educational realm!
          </p>
        </div>
      </div>
    `
  },
  'learning-spanish-brings-you-closer-to-your-roots': {
    title: 'Learning Spanish Brings You Closer to Your Roots',
    subtitle: 'Learning Spanish is not only a valuable skill but also a powerful tool for reconnecting with your cultural and familial roots',
    date: '2024-12-10',
    readTime: '4 min read',
    category: 'Culture',
    author: 'Passport to Fluency Team',
    heroImage: worldImage,
    content: `
      <div class="prose prose-lg max-w-none">
        <img src="${worldImage}" alt="Spanish cultural heritage" class="w-full h-64 md:h-96 object-cover rounded-2xl mb-8" />
        
        <p class="text-xl text-gray-700 mb-8 leading-relaxed">
          Learning Spanish is not only a valuable skill in today's globalized world but can also be a powerful tool for reconnecting with your cultural and familial roots. For many people, especially those living in countries where Spanish is not the primary language, learning this language can open doors to a deeper understanding of their heritage and a stronger connection to their cultural identity.
        </p>

        <h2 class="text-3xl font-bold text-gray-900 mb-6 text-passport-blue">Bridging Generational Gaps</h2>
        
        <div class="bg-blue-50 border-l-4 border-passport-blue p-6 mb-8 rounded-r-lg">
          <h3 class="text-xl font-semibold text-gray-900 mb-3">Connecting with Family Heritage</h3>
          <p class="text-gray-700 leading-relaxed">
            Speaking Spanish allows you to communicate with older relatives who may not speak your primary language. These relatives often hold stories, traditions, and ancestral knowledge that haven't been passed down to younger generations due to language barriers.
          </p>
        </div>

        <h2 class="text-3xl font-bold text-gray-900 mb-6 text-passport-orange">Building Global Connections</h2>
        
        <div class="bg-orange-50 border-l-4 border-passport-orange p-6 mb-8 rounded-r-lg">
          <h3 class="text-xl font-semibold text-gray-900 mb-3">A Global Community</h3>
          <p class="text-gray-700 leading-relaxed">
            Spanish is a language that unites millions of people worldwide. Learning it allows you to connect with a global community of Spanish speakers, facilitating friendships and professional networks. Moreover, it gives you the opportunity to contribute actively to your local community, especially in areas with a strong Hispanic presence, enriching both your personal and professional life.
          </p>
        </div>

        <h2 class="text-3xl font-bold text-gray-900 mb-6 text-green-600">Cultural Identity and Pride</h2>
        
        <div class="bg-green-50 border-l-4 border-green-500 p-6 mb-8 rounded-r-lg">
          <h3 class="text-xl font-semibold text-gray-900 mb-3">Honoring Your Ancestry</h3>
          <p class="text-gray-700 leading-relaxed">
            Learning Spanish allows you to access the rich Hispanic cultural heritage directly - from literature and music to traditions and values that have been passed down through generations. This connection helps strengthen your sense of identity and pride in your cultural background.
          </p>
        </div>

        <div class="bg-gradient-to-r from-passport-blue/10 to-passport-orange/10 p-8 rounded-2xl mb-8">
          <h3 class="text-2xl font-bold text-gray-900 mb-4 text-center">More Than Just a Language</h3>
          <p class="text-lg text-gray-700 leading-relaxed text-center">
            It's much more than acquiring a new language skill; it's a gateway to your roots, a way to honor your ancestors, and a means to strengthen your cultural identity. Whether it's communicating with relatives, accessing the rich Hispanic cultural heritage, participating in meaningful traditions, or simply feeling more connected to your personal history, Spanish offers countless benefits that go beyond the pragmatic and touch the deeply personal and emotional aspects of life.
          </p>
        </div>
      </div>
    `
  }
};

export default function BlogPost() {
  const params = useParams();
  const postId = params.id;
  const post = postId ? blogPosts[postId as keyof typeof blogPosts] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <Link href="/blog">
            <Button className="bg-passport-blue hover:bg-blue-700 text-white">
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

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

      {/* Article */}
      <article className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Back to Blog */}
            <Link href="/blog">
              <button className="flex items-center text-passport-blue hover:text-blue-700 mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </button>
            </Link>

            {/* Article Header */}
            <header className="mb-8">
              <div className="flex items-center mb-4">
                <span className="bg-passport-blue text-white px-3 py-1 rounded-full text-sm font-medium mr-4">
                  {post.category}
                </span>
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="mr-4">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {post.title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-6">
                {post.subtitle}
              </p>
              
              <div className="flex items-center justify-between py-6 border-t border-b border-gray-200">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-passport-blue rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-semibold">PT</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{post.author}</p>
                    <p className="text-sm text-gray-500">Language Learning Experts</p>
                  </div>
                </div>
                
                <button className="flex items-center text-gray-500 hover:text-passport-blue transition-colors">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </button>
              </div>
            </header>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none mb-12"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-passport-blue to-passport-orange rounded-2xl p-8 md:p-12 text-center text-white mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Give Your Child the Gift of Spanish?
              </h3>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Join thousands of families who have chosen Passport to Fluency for their children's Spanish learning journey. Start with a free trial class today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/en">
                  <Button className="bg-white text-passport-blue hover:bg-gray-100 px-8 py-3 font-semibold flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    Book Free Spanish Class
                  </Button>
                </Link>
                <Link href="/en#spanish-for-children">
                  <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-passport-blue px-8 py-3 font-semibold flex items-center">
                    <Star className="w-5 h-5 mr-2" />
                    Kids Spanish Program
                  </Button>
                </Link>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center py-8 border-t border-gray-200">
              <Link href="/blog">
                <button className="flex items-center text-passport-blue hover:text-blue-700 transition-colors">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  All Articles
                </button>
              </Link>
              
              <div className="text-center">
                <p className="text-gray-500 text-sm">More articles coming soon</p>
              </div>
              
              <div className="text-gray-400">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Background decorations */}
      <div className="absolute top-20 right-8 opacity-5 z-0 hidden lg:block">
        <img 
          src={worldImage} 
          alt="" 
          className="w-32 h-32 object-contain transform rotate-12 rounded-3xl"
        />
      </div>

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