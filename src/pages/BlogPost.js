import React from 'react';
import { useParams, Link } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();

  // Sample blog posts data (in a real app, this would come from an API or CMS)
  const blogPosts = {
    1: {
      title: 'How to Choose the Right Journal for Your Research',
      category: 'Journal Publishing Tips',
      author: 'Dr. Priya Sharma',
      date: 'October 15, 2025',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&h=600&fit=crop',
      content: `
        <p>Choosing the right journal for your research is one of the most critical decisions in the publication process. The journal you select can significantly impact your research's visibility, credibility, and overall academic career. Here's a comprehensive guide to help you make an informed decision.</p>

        <h2>1. Understand Your Research Scope</h2>
        <p>Before you start looking for journals, clearly define your research scope. Ask yourself:</p>
        <ul>
          <li>What is the primary focus of my research?</li>
          <li>Who is my target audience?</li>
          <li>What are the key findings and their significance?</li>
        </ul>
        <p>Understanding these aspects will help you identify journals that align with your work.</p>

        <h2>2. Consider the Journal's Impact Factor</h2>
        <p>The impact factor is a measure of the journal's influence in the academic community. While it shouldn't be the only criterion, it's an important consideration. However, remember that:</p>
        <ul>
          <li>Newer journals may have lower impact factors but offer faster publication</li>
          <li>Field-specific journals might have different impact factor ranges</li>
          <li>Some disciplines value other metrics like citation rates or altmetrics</li>
        </ul>

        <h2>3. Check Indexing and Databases</h2>
        <p>Ensure the journal is indexed in major databases relevant to your field, such as:</p>
        <ul>
          <li>Scopus</li>
          <li>Web of Science</li>
          <li>PubMed/MEDLINE (for medical research)</li>
          <li>Google Scholar</li>
          <li>Discipline-specific databases</li>
        </ul>
        <p>Indexing increases your research's discoverability and credibility.</p>

        <h2>4. Review the Journal's Scope and Aims</h2>
        <p>Carefully read the journal's aims and scope section. Does your research fit within their stated areas of interest? Look at recent publications to see if similar work has been published.</p>

        <h2>5. Assess Publication Fees and Policies</h2>
        <p>Understand the journal's fee structure:</p>
        <ul>
          <li>Article Processing Charges (APC) for open access</li>
          <li>Submission fees</li>
          <li>Page charges or color figure fees</li>
          <li>Any waivers or discounts available</li>
        </ul>

        <h2>6. Check Peer Review Process</h2>
        <p>A rigorous peer review process ensures quality. Look for journals that clearly describe their review process and timelines. Be wary of journals that promise very fast publication without proper review.</p>

        <h2>7. Consider Open Access vs. Subscription</h2>
        <p>Decide whether open access or subscription-based publishing aligns better with your goals:</p>
        <ul>
          <li><strong>Open Access:</strong> Wider readership, but often requires APCs</li>
          <li><strong>Subscription:</strong> Traditional model, may have longer reach within institutions</li>
        </ul>

        <h2>8. Beware of Predatory Journals</h2>
        <p>Watch out for warning signs of predatory journals:</p>
        <ul>
          <li>Unsolicited emails inviting submissions</li>
          <li>Unclear or hidden fees</li>
          <li>No clear peer review process</li>
          <li>Poor website quality or grammar errors</li>
          <li>Not listed in reputable databases</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Choosing the right journal requires careful research and consideration. Take your time, consult with colleagues or mentors, and don't hesitate to reach out to journal editors with questions. At Vidyathiral, we provide expert guidance on journal selection to help you make the best decision for your research.</p>

        <p><em>Need help selecting the perfect journal for your research? <a href="/contact">Contact Vidyathiral</a> for personalized guidance.</em></p>
      `,
    },
    // Add more blog posts as needed
  };

  const post = blogPosts[id] || blogPosts[1]; // Fallback to first post if ID not found

  const relatedPosts = [
    {
      id: 2,
      title: '10 Common Mistakes to Avoid in Research Paper Writing',
      category: 'Academic Writing Skills',
    },
    {
      id: 5,
      title: 'Mastering the Art of Responding to Reviewer Comments',
      category: 'Journal Publishing Tips',
    },
    {
      id: 7,
      title: 'Impact Factor Explained: What Researchers Need to Know',
      category: 'Research Guidance',
    },
  ];

  return (
    <div className="animate-fadeIn">
      {/* Hero Section with Image */}
      <section className="relative h-96 bg-gray-900">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 container-custom py-8">
          <span className="bg-secondary text-white px-4 py-2 rounded-full text-sm font-medium">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
            {post.title}
          </h1>
          <div className="flex items-center space-x-6 text-gray-300 text-sm">
            <div className="flex items-center space-x-2">
              <svg
                className="w-5 h-5"
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
            <div className="flex items-center space-x-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>{post.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <article
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
                style={{
                  lineHeight: '1.8',
                  color: '#4B5563',
                }}
              />

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Share this article
                </h3>
                <div className="flex space-x-4">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                    Share on LinkedIn
                  </button>
                  <button className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition">
                    Share on Twitter
                  </button>
                  <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition">
                    Copy Link
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Author Card */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-lg font-semibold text-primary mb-3">
                  About the Author
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {post.author} is an experienced researcher and academic editor
                  with expertise in research publishing and scholarly communication.
                </p>
              </div>

              {/* Related Posts */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-primary mb-4">
                  Related Articles
                </h3>
                <div className="space-y-4">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      to={`/blog/${relatedPost.id}`}
                      className="block group"
                    >
                      <h4 className="font-medium text-gray-800 group-hover:text-secondary transition mb-1">
                        {relatedPost.title}
                      </h4>
                      <span className="text-xs text-gray-500">
                        {relatedPost.category}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-primary text-white rounded-lg p-6 mt-8">
                <h3 className="text-lg font-semibold mb-3">
                  Need Publishing Support?
                </h3>
                <p className="text-sm text-gray-200 mb-4">
                  Get expert guidance for your research publication journey.
                </p>
                <Link
                  to="/contact"
                  className="block text-center bg-secondary text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Blog */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 text-primary hover:text-secondary transition font-medium"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span>Back to Blog</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
