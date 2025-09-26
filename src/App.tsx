import { Menu, X, Calendar, User, ChevronRight, Eye, MessageCircle, Share2, Twitter, Linkedin, Github } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-serif font-bold text-gray-900">
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">Insights</span>
              </h1>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-teal-600 transition-colors duration-200 relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#" className="text-gray-700 hover:text-teal-600 transition-colors duration-200 relative group">
                Articles
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#" className="text-gray-700 hover:text-teal-600 transition-colors duration-200 relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            </nav>

            <button
              className="md:hidden p-2 text-gray-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-3 space-y-3">
              <a href="#" className="block text-gray-700 hover:text-teal-600 transition-colors duration-200">Home</a>
              <a href="#" className="block text-gray-700 hover:text-teal-600 transition-colors duration-200">Articles</a>
              <a href="#" className="block text-gray-700 hover:text-teal-600 transition-colors duration-200">About</a>
            </div>
          </div>
        )}
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-4 lg:gap-12">
          {/* Main Content */}
          <article className="lg:col-span-3">
            {/* Hero Section */}
            <div className="mb-12">
              <div className="mb-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight mb-6">
                  Testing to AI: The Future of Software Quality
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
                  How Artificial Intelligence is transforming testing practices and reshaping the landscape of software quality assurance
                </p>
              </div>
              
              <div className="flex items-center text-sm text-gray-500 mb-8">
                <div className="flex items-center mr-6">
                  <User size={16} className="mr-2" />
                  <span>Kesavaraman</span>
                </div>
                <div className="flex items-center mr-6">
                  <Calendar size={16} className="mr-2" />
                  <span>January 15, 2025</span>
                </div>
                <div className="flex items-center mr-6">
                  <Eye size={16} className="mr-2" />
                  <span>12 min read</span>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 mb-8"></div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                The landscape of software testing is undergoing a revolutionary transformation. As artificial intelligence continues to mature, 
                it's not just changing how we build applications—it's fundamentally reshaping how we ensure their quality. From automated 
                test generation to intelligent bug detection, AI is becoming an indispensable ally in the quest for software excellence.
              </p>

              <h2 className="text-3xl font-serif font-bold text-gray-900 mt-12 mb-6">
                The Evolution from Manual to Intelligent Testing
              </h2>

              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Traditional testing approaches have served us well, but they're reaching their limits in our rapidly evolving digital ecosystem. 
                The complexity of modern applications, coupled with accelerated development cycles, demands a more sophisticated approach to quality assurance.
              </p>

              <ul className="list-disc list-inside text-lg text-gray-700 mb-8 space-y-2">
                <li>Manual testing struggles with scale and consistency</li>
                <li>Traditional automation requires extensive maintenance</li>
                <li>Coverage gaps often go undetected until production</li>
                <li>Performance testing lacks predictive capabilities</li>
              </ul>

              {/* Key Insight Callout */}
              <div className="bg-gradient-to-r from-teal-50 to-blue-50 border-l-4 border-teal-500 p-6 my-12 rounded-r-lg">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">!</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-teal-800 mb-2">Key Insight</h3>
                    <p className="text-teal-700 leading-relaxed">
                      Organizations that have adopted AI-driven testing practices report a 60% reduction in production bugs 
                      and a 40% improvement in release velocity, according to recent industry surveys.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-serif font-bold text-gray-900 mt-12 mb-6">
                AI-Powered Testing: Current Applications
              </h2>

              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Artificial intelligence is already making significant inroads into testing practices across various domains. 
                Let's explore the most impactful applications currently transforming the industry.
              </p>

              <h3 className="text-2xl font-serif font-semibold text-gray-800 mt-8 mb-4">
                Intelligent Test Generation
              </h3>

              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                AI algorithms can analyze application code, user interactions, and historical data to automatically generate 
                comprehensive test suites. This approach not only saves time but often discovers edge cases that human testers might miss.
              </p>

              {/* Article Image */}
              <figure className="my-12">
                <div className="w-full h-80 bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🤖</span>
                    </div>
                    <p className="text-lg font-medium">AI Testing Workflow Illustration</p>
                    <p className="text-sm opacity-80">Visual representation of AI-driven testing pipeline</p>
                  </div>
                </div>
                <figcaption className="text-center text-gray-600 mt-4 italic">
                  The integration of AI throughout the testing lifecycle enables more comprehensive and efficient quality assurance processes.
                </figcaption>
              </figure>

              <blockquote className="border-l-4 border-teal-500 pl-6 py-4 my-8 bg-gray-50 rounded-r-lg">
                <p className="text-xl italic text-gray-700 leading-relaxed">
                  "AI doesn't replace human testers—it amplifies their capabilities. The future belongs to teams that can 
                  seamlessly blend artificial intelligence with human intuition and creativity."
                </p>
                <footer className="text-gray-600 mt-4">
                  — Michael Rodriguez, Lead QA Engineer at TechCorp
                </footer>
              </blockquote>

              <h3 className="text-2xl font-serif font-semibold text-gray-800 mt-8 mb-4">
                Predictive Analytics in Quality Assurance
              </h3>

              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Machine learning models can predict which areas of code are most likely to contain bugs, allowing teams to 
                focus their testing efforts more strategically. This predictive approach represents a shift from reactive 
                to proactive quality assurance.
              </p>

              <h2 className="text-3xl font-serif font-bold text-gray-900 mt-12 mb-6">
                Looking Ahead: The Future Landscape
              </h2>

              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                As we look toward the future, several emerging trends promise to further revolutionize testing practices. 
                The convergence of AI with other technologies like quantum computing and blockchain will open new frontiers 
                in software quality assurance.
              </p>

              <p className="text-lg leading-relaxed text-gray-700 mb-8">
                The organizations that embrace these changes today will be the ones that thrive in tomorrow's increasingly 
                complex software landscape. The question isn't whether AI will transform testing—it's how quickly we can 
                adapt to harness its full potential.
              </p>

              {/* Article Actions */}
              <div className="flex items-center justify-between pt-8 mt-12 border-t border-gray-200">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center text-gray-600 hover:text-teal-600 transition-colors duration-200">
                    <MessageCircle size={20} className="mr-2" />
                    <span>24 Comments</span>
                  </button>
                  <button className="flex items-center text-gray-600 hover:text-teal-600 transition-colors duration-200">
                    <Share2 size={20} className="mr-2" />
                    <span>Share</span>
                  </button>
                </div>
                <div className="flex items-center space-x-3">
                  <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200">
                    <Twitter size={20} />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200">
                    <Linkedin size={20} />
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1 mt-16 lg:mt-0">
            <div className="sticky top-24">
              {/* Recent Posts */}
              <div className="mb-12">
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-6">Recent AI Posts</h3>
                <div className="space-y-6">
                  {[
                    {
                      title: "GPT-4 in Code Review: A Game Changer",
                      date: "Jan 12, 2025",
                      readTime: "8 min"
                    },
                    {
                      title: "Automated Bug Detection with Machine Learning",
                      date: "Jan 10, 2025",
                      readTime: "6 min"
                    },
                    {
                      title: "The Ethics of AI in Software Development",
                      date: "Jan 8, 2025",
                      readTime: "10 min"
                    }
                  ].map((post, index) => (
                    <div key={index} className="group">
                      <a href="#" className="block">
                        <h4 className="font-medium text-gray-900 group-hover:text-teal-600 transition-colors duration-200 mb-2 leading-snug">
                          {post.title}
                        </h4>
                        <div className="flex items-center text-sm text-gray-500">
                          <span>{post.date}</span>
                          <span className="mx-2">•</span>
                          <span>{post.readTime}</span>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
                <a href="#" className="inline-flex items-center text-teal-600 hover:text-teal-700 transition-colors duration-200 mt-4 font-medium">
                  View all posts
                  <ChevronRight size={16} className="ml-1" />
                </a>
              </div>

              {/* Categories */}
              <div className="mb-12">
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-6">Categories</h3>
                <div className="space-y-3">
                  {[
                    { name: "Machine Learning", count: 23 },
                    { name: "Generative AI", count: 18 },
                    { name: "Automation", count: 31 },
                    { name: "Testing Tools", count: 15 },
                    { name: "Quality Assurance", count: 27 }
                  ].map((category, index) => (
                    <a
                      key={index}
                      href="#"
                      className="flex items-center justify-between text-gray-700 hover:text-teal-600 transition-colors duration-200 p-2 hover:bg-teal-50 rounded-lg"
                    >
                      <span>{category.name}</span>
                      <span className="text-sm text-gray-500">{category.count}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-6">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "#AITesting",
                    "#Automation",
                    "#Quality",
                    "#MachineLearning",
                    "#DevOps",
                    "#CI/CD",
                    "#TestStrategy",
                    "#Innovation"
                  ].map((tag, index) => (
                    <a
                      key={index}
                      href="#"
                      className="inline-block px-3 py-1 text-sm bg-gray-100 text-gray-700 hover:bg-teal-100 hover:text-teal-700 transition-colors duration-200 rounded-full"
                    >
                      {tag}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20">
        <div className="h-px bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-serif font-bold mb-4">
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Insights</span>
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Exploring the intersection of artificial intelligence and software development. 
                Join us as we navigate the future of intelligent technology.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-teal-400 transition-colors duration-200">About Us</a>
                <a href="#" className="block text-gray-400 hover:text-teal-400 transition-colors duration-200">Contact</a>
                <a href="#" className="block text-gray-400 hover:text-teal-400 transition-colors duration-200">Privacy Policy</a>
                <a href="#" className="block text-gray-400 hover:text-teal-400 transition-colors duration-200">Terms of Service</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
            <p>&copy; 2025 AI Insights. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;