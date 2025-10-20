import React from 'react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: 'Submit Your Research',
      description:
        'Upload or email your research manuscript to us. We accept all formats including Word, PDF, and LaTeX.',
      details: [
        'Simple online submission form',
        'Secure file upload system',
        'Initial consultation included',
        'Quick acknowledgment within 24 hours',
      ],
      icon: (
        <svg
          className="w-16 h-16 text-secondary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          />
        </svg>
      ),
    },
    {
      number: 2,
      title: 'Review & Editing',
      description:
        'Our expert team reviews your manuscript and performs comprehensive editing to enhance quality and clarity.',
      details: [
        'Subject-matter expert review',
        'Language and grammar editing',
        'Structure and flow improvement',
        'Plagiarism check and report',
      ],
      icon: (
        <svg
          className="w-16 h-16 text-secondary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      number: 3,
      title: 'Journal Recommendation',
      description:
        'We analyze your research and recommend suitable journals that align with your work and academic goals.',
      details: [
        'Comprehensive journal matching',
        'Impact factor analysis',
        'Indexing and reputation check',
        'Multiple journal options',
      ],
      icon: (
        <svg
          className="w-16 h-16 text-secondary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
      ),
    },
    {
      number: 4,
      title: 'Submission & Publication',
      description:
        'We handle the entire submission process and support you through to successful publication.',
      details: [
        'Complete submission management',
        'Cover letter preparation',
        'Reviewer response assistance',
        'Follow-up with journals',
      ],
      icon: (
        <svg
          className="w-16 h-16 text-secondary"
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
      ),
    },
    {
      number: 5,
      title: 'Post-Publication Assistance',
      description:
        'After publication, we help promote your work and track its impact in the academic community.',
      details: [
        'DOI registration support',
        'Citation tracking',
        'Research promotion',
        'Visibility enhancement',
      ],
      icon: (
        <svg
          className="w-16 h-16 text-secondary"
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
      ),
    },
  ];

  const timeline = [
    { phase: 'Day 1-2', activity: 'Submission & Initial Review' },
    { phase: 'Day 3-7', activity: 'Editing & Quality Check' },
    { phase: 'Day 8-10', activity: 'Journal Selection & Recommendation' },
    { phase: 'Day 11-14', activity: 'Submission Preparation' },
    { phase: 'Week 3-4', activity: 'Journal Submission & Follow-up' },
    { phase: 'Ongoing', activity: 'Publication & Promotion Support' },
  ];

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-900 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="heading-primary text-white mb-6">How It Works</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            A simple, transparent, and efficient process that guides your
            research from manuscript to publication
          </p>
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center mb-4">
                    <div className="bg-secondary text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mr-4">
                      {step.number}
                    </div>
                    <h2 className="text-3xl font-bold text-primary">
                      {step.title}
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-6 text-lg">
                    {step.description}
                  </p>
                  <ul className="space-y-3">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <svg
                          className="w-5 h-5 text-secondary flex-shrink-0 mt-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`flex justify-center ${
                    index % 2 === 1 ? 'lg:order-1' : ''
                  }`}
                >
                  <div className="bg-gray-50 rounded-2xl p-12 shadow-lg">
                    {step.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-secondary">Typical Timeline</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Here's what you can expect during the publication process with
              Vidyathiral
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-secondary hidden md:block"></div>

              {timeline.map((item, index) => (
                <div key={index} className="relative mb-8 md:ml-16">
                  {/* Timeline Dot */}
                  <div className="absolute -left-16 top-2 w-8 h-8 bg-secondary rounded-full border-4 border-white shadow-lg hidden md:block"></div>

                  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-primary mb-2">
                          {item.activity}
                        </h3>
                        <p className="text-gray-600 text-sm">{item.phase}</p>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <span className="bg-secondary bg-opacity-10 text-secondary px-4 py-2 rounded-full text-sm font-medium">
                          {item.phase}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-secondary">What Makes Us Different</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="bg-secondary bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-secondary"
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
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                Expert Team
              </h3>
              <p className="text-gray-600 text-sm">
                PhD-qualified editors and researchers with extensive publishing
                experience across disciplines
              </p>
            </div>
            <div className="card text-center">
              <div className="bg-secondary bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-secondary"
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
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                Ethical Standards
              </h3>
              <p className="text-gray-600 text-sm">
                Strict adherence to COPE guidelines and academic integrity in
                all our services
              </p>
            </div>
            <div className="card text-center">
              <div className="bg-secondary bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-secondary"
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
              <h3 className="text-xl font-semibold text-primary mb-3">
                Fast Turnaround
              </h3>
              <p className="text-gray-600 text-sm">
                Efficient processes ensuring your research is published quickly
                without compromising quality
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-secondary to-yellow-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Publishing Journey?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let Vidyathiral guide you through every step of the research
            publishing process
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-primary px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition duration-300 shadow-lg"
            >
              Get Started Now
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-secondary transition duration-300"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
