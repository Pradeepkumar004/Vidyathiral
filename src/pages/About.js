import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      title: 'Integrity',
      description:
        'We uphold the highest ethical standards in all our publishing services, ensuring originality and academic honesty.',
      icon: (
        <svg
          className="w-12 h-12 text-secondary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: 'Excellence',
      description:
        'We strive for excellence in every aspect of our service, from editing quality to customer support.',
      icon: (
        <svg
          className="w-12 h-12 text-secondary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
    },
    {
      title: 'Transparency',
      description:
        'We believe in transparent processes and clear communication throughout your publishing journey.',
      icon: (
        <svg
          className="w-12 h-12 text-secondary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      ),
    },
    {
      title: 'Collaboration',
      description:
        'We work closely with researchers to understand their needs and provide personalized support.',
      icon: (
        <svg
          className="w-12 h-12 text-secondary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-900 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="heading-primary text-white mb-6">About Vidyathiral</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Empowering researchers worldwide to share their knowledge and create
            lasting impact through quality academic publishing
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-secondary">Our Vision</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                To create a <strong className="text-primary">global wave of knowledge</strong> that empowers every
                researcher to publish, share, and inspire.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Vidyathiral envisions a world where research is not bound by
                barriers — where every idea, innovation, and discovery from any
                corner of the world can find its rightful place in the global
                knowledge ecosystem. We believe that quality research deserves
                quality support, and every researcher deserves access to
                professional publishing services regardless of their background or
                resources.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary to-blue-900 rounded-2xl p-8 text-white shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-secondary rounded-full p-3 flex-shrink-0">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Global Reach</h3>
                    <p className="text-gray-200 text-sm">
                      Connecting researchers worldwide
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-secondary rounded-full p-3 flex-shrink-0">
                    <svg
                      className="w-8 h-8 text-white"
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
                  <div>
                    <h3 className="font-semibold text-lg">Knowledge Sharing</h3>
                    <p className="text-gray-200 text-sm">
                      Breaking barriers to publication
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-secondary rounded-full p-3 flex-shrink-0">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Innovation</h3>
                    <p className="text-gray-200 text-sm">
                      Fostering academic excellence
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-secondary">Our Mission</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              To simplify, support, and strengthen the journey of research
              publishing through ethical, accessible, and high-quality services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start space-x-4">
                <svg
                  className="w-10 h-10 text-secondary flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    Bridge the Gap
                  </h3>
                  <p className="text-gray-600">
                    Connect researchers with reputable journals and provide
                    expert guidance throughout the publication process.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start space-x-4">
                <svg
                  className="w-10 h-10 text-secondary flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    Transparent Services
                  </h3>
                  <p className="text-gray-600">
                    Offer clear, honest, and expert-guided publication
                    assistance with no hidden fees or surprises.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start space-x-4">
                <svg
                  className="w-10 h-10 text-secondary flex-shrink-0"
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
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    Promote Integrity
                  </h3>
                  <p className="text-gray-600">
                    Maintain the highest standards of originality and global
                    collaboration in all academic work.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start space-x-4">
                <svg
                  className="w-10 h-10 text-secondary flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    Empower Scholars
                  </h3>
                  <p className="text-gray-600">
                    Help researchers transform their work into lasting impact
                    that advances their field.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-secondary">Our Values</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at Vidyathiral
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 text-center"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-secondary to-yellow-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Community of Researchers
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Be part of a global network of scholars who trust Vidyathiral for
            their research publishing needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-primary px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition duration-300 shadow-lg"
            >
              Get in Touch
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-secondary transition duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
