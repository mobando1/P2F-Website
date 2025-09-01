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
  },
  'financial-freedom-by-learning-spanish': {
    title: 'Financial Freedom by Learning Spanish',
    subtitle: 'Learning Spanish can be a key tool for achieving financial freedom by opening opportunities in Spanish-speaking markets',
    date: '2024-12-05',
    readTime: '4 min read',
    category: 'Business',
    author: 'Passport to Fluency Team',
    heroImage: passportImage,
    content: `
      <div class="prose prose-lg max-w-none">
        <img src="${passportImage}" alt="Financial success with Spanish" class="w-full h-64 md:h-96 object-cover rounded-2xl mb-8" />
        
        <p class="text-xl text-gray-700 mb-8 leading-relaxed">
          Learning Spanish can be a key tool for achieving financial freedom for several reasons. Mastering Spanish opens up opportunities in Spanish-speaking markets, allowing entrepreneurs and professionals to access a wide range of clients and business partners in more than 20 countries. This can translate into new sources of income and the possibility of diversifying investments.
        </p>

        <h2 class="text-3xl font-bold text-gray-900 mb-6 text-passport-blue">Global Market Access</h2>
        
        <div class="bg-blue-50 border-l-4 border-passport-blue p-6 mb-8 rounded-r-lg">
          <h3 class="text-xl font-semibold text-gray-900 mb-3">Expanding Your Business Reach</h3>
          <p class="text-gray-700 leading-relaxed">
            Mastering Spanish opens up opportunities in Spanish-speaking markets, allowing entrepreneurs and professionals to access a wide range of clients and business partners in more than 20 countries. This expanded reach can translate into new sources of income and the possibility of diversifying investments across different markets.
          </p>
        </div>

        <h2 class="text-3xl font-bold text-gray-900 mb-6 text-passport-orange">Financial Education & Resources</h2>
        
        <div class="bg-orange-50 border-l-4 border-passport-orange p-6 mb-8 rounded-r-lg">
          <h3 class="text-xl font-semibold text-gray-900 mb-3">Access to Spanish Financial Knowledge</h3>
          <p class="text-gray-700 leading-relaxed">
            Knowledge of Spanish facilitates access to educational and financial resources available in this language, which is crucial for making informed decisions about investments, savings, and money management. Financial education is fundamental to avoiding costly mistakes and maximizing income returns, and many of the best financial resources and courses are available in Spanish.
          </p>
        </div>

        <h2 class="text-3xl font-bold text-gray-900 mb-6 text-green-600">Professional Networking</h2>
        
        <div class="bg-green-50 border-l-4 border-green-500 p-6 mb-8 rounded-r-lg">
          <h3 class="text-xl font-semibold text-gray-900 mb-3">Building Valuable Connections</h3>
          <p class="text-gray-700 leading-relaxed">
            Spanish is a valuable tool for establishing professional and personal networks. The ability to communicate effectively in Spanish can help build relationships with individuals and organizations that can offer business opportunities, advice, and collaboration, which is vital for any financial freedom strategy.
          </p>
        </div>

        <div class="bg-gradient-to-r from-passport-blue/10 to-passport-orange/10 p-8 rounded-2xl mb-8">
          <h3 class="text-2xl font-bold text-gray-900 mb-4 text-center">Your Strategic Investment</h3>
          <p class="text-lg text-gray-700 leading-relaxed text-center">
            In summary, learning Spanish not only broadens your cultural and social horizons but can also be a strategic step toward financial independence by opening up new opportunities and resources in the vast Spanish-speaking world. The investment you make in learning Spanish today can pay dividends for years to come.
          </p>
        </div>
      </div>
    `
  },
  'discover-the-beauty-of-barcelona': {
    title: 'Discover the Beauty of Barcelona',
    subtitle: 'Barcelona combines rich history, impressive architecture, and vibrant culture in one Mediterranean destination',
    date: '2024-11-30',
    readTime: '5 min read',
    category: 'Travel',
    author: 'Passport to Fluency Team',
    heroImage: worldImage,
    content: `
      <div class="prose prose-lg max-w-none">
        <img src="${worldImage}" alt="Beautiful Barcelona architecture" class="w-full h-64 md:h-96 object-cover rounded-2xl mb-8" />
        
        <p class="text-xl text-gray-700 mb-8 leading-relaxed">
          Barcelona, a dynamic city located on the Mediterranean coast of Spain, is a fascinating destination that combines a rich history, impressive architecture, and a vibrant cultural scene. In this article, we will explore the unique charms of Barcelona and how learning Spanish can enrich your experience when visiting this incredible city.
        </p>

        <h2 class="text-3xl font-bold text-gray-900 mb-6 text-passport-blue">Architectural Marvels</h2>
        
        <div class="bg-blue-50 border-l-4 border-passport-blue p-6 mb-8 rounded-r-lg">
          <h3 class="text-xl font-semibold text-gray-900 mb-3">Gaudí's Masterpieces</h3>
          <p class="text-gray-700 leading-relaxed">
            Known for its modernist architecture, Barcelona is home to some of Antoni Gaudí's most iconic masterpieces, such as the Sagrada Familia and Park Güell. These iconic monuments are not only impressive examples of architectural creativity but also reflect the city's unique identity and deep sense of history and culture.
          </p>
        </div>

        <h2 class="text-3xl font-bold text-gray-900 mb-6 text-passport-orange">Diverse Experiences</h2>
        
        <div class="bg-orange-50 border-l-4 border-passport-orange p-6 mb-8 rounded-r-lg">
          <h3 class="text-xl font-semibold text-gray-900 mb-3">Something for Everyone</h3>
          <p class="text-gray-700 leading-relaxed">
            In addition to its architectural heritage, Barcelona offers a wide range of activities for every taste. From relaxing on golden sandy beaches to exploring fascinating historic neighborhoods like the Gothic Quarter and El Born, there is something for everyone in this cosmopolitan city.
          </p>
        </div>

        <h2 class="text-3xl font-bold text-gray-900 mb-6 text-green-600">Cultural Immersion Through Spanish</h2>
        
        <div class="bg-green-50 border-l-4 border-green-500 p-6 mb-8 rounded-r-lg">
          <h3 class="text-xl font-semibold text-gray-900 mb-3">Authentic Local Experiences</h3>
          <p class="text-gray-700 leading-relaxed">
            Learning Spanish allows you to fully immerse yourself in Barcelona's culture and lifestyle. With Spanish, you can communicate with locals, explore local markets, and immerse yourself in the region's rich culinary tradition. Additionally, Spanish gives you the opportunity to participate in cultural festivals and community events, where you can experience the city's joy and spirit firsthand.
          </p>
        </div>

        <div class="bg-gradient-to-r from-passport-blue/10 to-passport-orange/10 p-8 rounded-2xl mb-8">
          <h3 class="text-2xl font-bold text-gray-900 mb-4 text-center">Your Barcelona Adventure Awaits</h3>
          <p class="text-lg text-gray-700 leading-relaxed text-center">
            So if you dream of exploring the cobbled streets of Barcelona, discovering its hidden treasures, and immersing yourself in its exciting culture, learning Spanish is the first step to making that dream a reality. Don't wait any longer to embark on this adventure and learn Spanish to discover the beauty of Barcelona in all its splendor!
          </p>
        </div>
      </div>
    `
  },
  'the-art-of-salsa-an-expression-of-passion-and-rhythm': {
    title: 'The Art of Salsa: An Expression of Passion and Rhythm',
    subtitle: 'Salsa is more than music and dance; it\'s a cultural expression that encapsulates the passion and vibrant rhythm of the Latin community',
    date: '2024-11-25',
    readTime: '4 min read',
    category: 'Culture',
    author: 'Passport to Fluency Team',
    heroImage: passportImage,
    content: `
      <div class="prose prose-lg max-w-none">
        <img src="${passportImage}" alt="Salsa dancing culture" class="w-full h-64 md:h-96 object-cover rounded-2xl mb-8" />
        
        <p class="text-xl text-gray-700 mb-8 leading-relaxed">
          Salsa is much more than a music genre and a dance form; it is a cultural expression that encapsulates the passion, joy, and vibrant rhythm of the Latin community. In this article, we will explore the history and significance of salsa, and how learning Spanish can further enrich the experience of immersing oneself in this exciting culture.
        </p>

        <h2 class="text-3xl font-bold text-gray-900 mb-6 text-passport-blue">Rich Cultural Origins</h2>
        
        <div class="bg-blue-50 border-l-4 border-passport-blue p-6 mb-8 rounded-r-lg">
          <h3 class="text-xl font-semibold text-gray-900 mb-3">Afro-Caribbean Roots</h3>
          <p class="text-gray-700 leading-relaxed">
            Originating from Afro-Caribbean communities in Cuba and Puerto Rico, salsa has evolved over the years, blending African, European, and Caribbean rhythms to create a unique and captivating style. Salsa is not just about moving your feet to the music; it is an artistic expression that reflects the identity and cultural heritage of Latin peoples.
          </p>
        </div>

        <h2 class="text-3xl font-bold text-gray-900 mb-6 text-passport-orange">Spanish: Your Gateway to Authentic Salsa</h2>
        
        <div class="bg-orange-50 border-l-4 border-passport-orange p-6 mb-8 rounded-r-lg">
          <h3 class="text-xl font-semibold text-gray-900 mb-3">Deeper Connection Through Language</h3>
          <p class="text-gray-700 leading-relaxed">
            Learning Spanish allows you to fully immerse yourself in the rich tradition of salsa and connect with the Latin community in a meaningful way. With Spanish, you can understand the lyrics of songs, learn authentic dance steps, and communicate with other dancers and music lovers in their native language.
          </p>
        </div>

        <h2 class="text-3xl font-bold text-gray-900 mb-6 text-green-600">Beyond Salsa: The Full Latin Experience</h2>
        
        <div class="bg-green-50 border-l-4 border-green-500 p-6 mb-8 rounded-r-lg">
          <h3 class="text-xl font-semibold text-gray-900 mb-3">A World of Latin Culture</h3>
          <p class="text-gray-700 leading-relaxed">
            Furthermore, learning Spanish provides you with the opportunity to explore other forms of Latin art and culture, from literature and cinema to cuisine and traditional festivities. Immersing yourself in Latin culture through Spanish is an enriching experience that broadens your worldview and connects you with a vibrant and diverse global community.
          </p>
        </div>

        <div class="bg-gradient-to-r from-passport-blue/10 to-passport-orange/10 p-8 rounded-2xl mb-8">
          <h3 class="text-2xl font-bold text-gray-900 mb-4 text-center">Live the Culture to the Fullest</h3>
          <p class="text-lg text-gray-700 leading-relaxed text-center">
            So if you are passionate about music, dance, and culture, learning Spanish allows you to fully enjoy the salsa experience and opens up a world of exciting and enriching possibilities. Don't wait any longer to embark on this cultural adventure and learn Spanish to live it to the fullest!
          </p>
        </div>
      </div>
    `
  },
  'essential-spanish-phrases-for-travelers-your-ticket-to-fluent-communication': {
    title: 'Essential Spanish Phrases for Travelers: Your Ticket to Fluent Communication',
    subtitle: 'Planning a trip to a Spanish-speaking country? Master these essential phrases to navigate with confidence and connect with locals',
    date: '2024-11-20',
    readTime: '6 min read',
    category: 'Travel',
    author: 'Passport to Fluency Team',
    heroImage: worldImage,
    content: `
      <div class="prose prose-lg max-w-none">
        <img src="${worldImage}" alt="Spanish travel phrases" class="w-full h-64 md:h-96 object-cover rounded-2xl mb-8" />
        
        <p class="text-xl text-gray-700 mb-8 leading-relaxed">
          Are you planning an exciting trip to a Spanish-speaking country? Whether you're strolling through the colorful streets of Barcelona or exploring the ancient ruins of Machu Picchu, having a basic understanding of Spanish can greatly enhance your travel experience. In this guide, we'll share 15 essential Spanish phrases for travelers, designed to help you navigate Spanish-speaking countries with ease and confidence.
        </p>

        <h2 class="text-3xl font-bold text-gray-900 mb-6 text-passport-blue">Greetings & Basic Politeness</h2>
        
        <div class="bg-blue-50 border-l-4 border-passport-blue p-6 mb-8 rounded-r-lg">
          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <h4 class="font-semibold text-gray-900 mb-2">Essential Greetings:</h4>
              <ul class="text-gray-700 space-y-1">
                <li><strong>¡Hola!</strong> - Hello!</li>
                <li><strong>¡Buenos días!</strong> - Good morning!</li>
                <li><strong>¡Buenas tardes!</strong> - Good afternoon!</li>
                <li><strong>¡Buenas noches!</strong> - Good evening!</li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold text-gray-900 mb-2">Basic Communication:</h4>
              <ul class="text-gray-700 space-y-1">
                <li><strong>Sí</strong> - Yes</li>
                <li><strong>No</strong> - No</li>
                <li><strong>Por favor</strong> - Please</li>
                <li><strong>Gracias</strong> - Thank you</li>
                <li><strong>De nada</strong> - You're welcome</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 class="text-3xl font-bold text-gray-900 mb-6 text-passport-orange">Getting Help & Emergency Phrases</h2>
        
        <div class="bg-orange-50 border-l-4 border-passport-orange p-6 mb-8 rounded-r-lg">
          <h4 class="font-semibold text-gray-900 mb-3">When You Need Assistance:</h4>
          <ul class="text-gray-700 space-y-2">
            <li><strong>¿Puedes ayudarme?</strong> - Can you help me?</li>
            <li><strong>Estoy perdido/a.</strong> - I'm lost.</li>
            <li><strong>¿Dónde está el baño?</strong> - Where is the bathroom?</li>
            <li><strong>Necesito un médico.</strong> - I need a doctor.</li>
          </ul>
        </div>

        <h2 class="text-3xl font-bold text-gray-900 mb-6 text-green-600">Dining & Food</h2>
        
        <div class="bg-green-50 border-l-4 border-green-500 p-6 mb-8 rounded-r-lg">
          <h4 class="font-semibold text-gray-900 mb-3">Restaurant Essentials:</h4>
          <ul class="text-gray-700 space-y-2">
            <li><strong>Me gustaría...</strong> - I would like...</li>
            <li><strong>La cuenta, por favor.</strong> - The bill, please.</li>
            <li><strong>¿Hay una opción vegetariana?</strong> - Is there a vegetarian option?</li>
            <li><strong>¡Esto está delicioso!</strong> - This is delicious!</li>
          </ul>
        </div>

        <h2 class="text-3xl font-bold text-gray-900 mb-6 text-purple-600">Transportation & Navigation</h2>
        
        <div class="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8 rounded-r-lg">
          <h4 class="font-semibold text-gray-900 mb-3">Getting Around:</h4>
          <ul class="text-gray-700 space-y-2">
            <li><strong>¿Dónde está...?</strong> - Where is...?</li>
            <li><strong>¿Cuánto cuesta el taxi?</strong> - How much is the taxi fare?</li>
            <li><strong>Necesito un boleto para...</strong> - I need a ticket to...</li>
            <li><strong>¿Puedes recomendar un buen restaurante?</strong> - Can you recommend a good restaurant?</li>
          </ul>
        </div>

        <div class="bg-gradient-to-r from-passport-blue/10 to-passport-orange/10 p-8 rounded-2xl mb-8">
          <h3 class="text-2xl font-bold text-gray-900 mb-4 text-center">¡Buen Viaje! - Have a Great Trip!</h3>
          <p class="text-lg text-gray-700 leading-relaxed text-center mb-4">
            Mastering these essential Spanish phrases will not only make your travels smoother but also allow you to connect more deeply with the local culture and people. Whether you're ordering tapas in Madrid or bargaining at a street market in Mexico City, don't be afraid to practice these phrases and embrace the adventure of learning a new language.
          </p>
          <p class="text-center text-gray-600 italic">
            By sharing these phrases, Passport2Fluency aims to empower travelers to engage with Spanish-speaking communities and foster cross-cultural understanding.
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