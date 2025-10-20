import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState('');

  const categories = [
    'All',
    'Research Guidance',
    'Journal Publishing Tips',
    'Academic Writing Skills',
    'Vidyathiral Updates',
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'How to Choose the Right Journal for Your Research',
      excerpt:
        'Selecting the appropriate journal is crucial for your research impact. Learn the key factors to consider when choosing where to publish your work.',
      category: 'Journal Publishing Tips',
      author: 'Dr. Priya Sharma',
      date: 'October 15, 2025',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=500&fit=crop',
    },
    {
      id: 2,
      title: '10 Common Mistakes to Avoid in Research Paper Writing',
      excerpt:
        'Discover the most common pitfalls researchers face when writing papers and learn how to avoid them for a stronger submission.',
      category: 'Academic Writing Skills',
      author: 'Prof. Rajesh Kumar',
      date: 'October 10, 2025',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=500&fit=crop',
    },
    {
      id: 3,
      title: 'Understanding Open Access Publishing: Benefits and Challenges',
      excerpt:
        'Open access publishing is transforming academic research. Explore its advantages, challenges, and what it means for researchers.',
      category: 'Research Guidance',
      author: 'Dr. Anita Desai',
      date: 'October 5, 2025',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&h=500&fit=crop',
    },
    {
      id: 4,
      title: 'New Partnership with Leading International Journals',
      excerpt:
        'Vidyathiral is excited to announce partnerships with several prestigious international journals, expanding publication opportunities for researchers.',
      category: 'Vidyathiral Updates',
      author: 'Vidyathiral Team',
      date: 'October 1, 2025',
      readTime: '3 min read',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=500&fit=crop',
    },
    {
      id: 5,
      title: 'Mastering the Art of Responding to Reviewer Comments',
      excerpt:
        'Learn effective strategies for addressing reviewer feedback professionally and improving your chances of publication acceptance.',
      category: 'Journal Publishing Tips',
      author: 'Dr. Mohammed Ali',
      date: 'September 28, 2025',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=500&fit=crop',
    },
    {
      id: 6,
      title: 'Effective Literature Review: A Step-by-Step Guide',
      excerpt:
        'A comprehensive guide to conducting thorough literature reviews that strengthen your research foundation and demonstrate your expertise.',
      category: 'Academic Writing Skills',
      author: 'Prof. Sanjay Patel',
      date: 'September 25, 2025',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=500&fit=crop',
    },
    {
      id: 7,
      title: 'Impact Factor Explained: What Researchers Need to Know',
      excerpt:
        'Understanding journal impact factors and other metrics is essential for strategic publication planning. Learn what matters and why.',
      category: 'Research Guidance',
      author: 'Dr. Kavita Singh',
      date: 'September 20, 2025',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop',
    },
    {
      id: 8,
      title: 'Vidyathiral Reaches 1000 Publications Milestone',
      excerpt:
        'We celebrate a major milestone as we support our 1000th research publication, helping researchers worldwide share their knowledge.',
      category: 'Vidyathiral Updates',
      author: 'Vidyathiral Team',
      date: 'September 15, 2025',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=500&fit=crop',
    },
  ];

  const filteredPosts =
    selectedCategory === 'All'
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribeStatus('success');
      setEmail('');
      setTimeout(() => setSubscribeStatus(''), 3000);
    }
  };

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-900 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="heading-primary text-white mb-6">Our Blog</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Insights, tips, and updates on research publishing, academic writing,
            and the latest in scholarly communication
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-medium transition duration-300 ${
                  selectedCategory === category
                    ? 'bg-secondary text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-secondary text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      <span>{post.author}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="mt-2 text-sm text-gray-400">{post.date}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-lg mb-8 text-gray-200">
            Get the latest research publishing tips, academic writing advice, and
            Vidyathiral updates delivered to your inbox
          </p>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <button
              type="submit"
              className="bg-secondary text-white px-8 py-4 rounded-lg font-medium hover:bg-opacity-90 transition duration-300 shadow-lg whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          {subscribeStatus === 'success' && (
            <p className="mt-4 text-secondary font-medium">
              ✓ Successfully subscribed! Check your email for confirmation.
            </p>
          )}
          <p className="mt-4 text-sm text-gray-300">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Featured Topics */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-secondary">Popular Topics</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.slice(1).map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition duration-300 text-center group"
              >
                <div className="bg-secondary bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary group-hover:bg-opacity-100 transition duration-300">
                  <svg
                    className="w-8 h-8 text-secondary group-hover:text-white transition duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-primary group-hover:text-secondary transition duration-300">
                  {category}
                </h3>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
