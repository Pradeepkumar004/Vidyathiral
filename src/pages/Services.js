import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Services = () => {
  return (
    <>
      <SEO 
        title="Academic Publishing Services - Vidyathiral"
        description="Comprehensive research publishing services: manuscript editing, journal selection, peer review support, plagiarism checking, and DOI assignment. Expert support for researchers worldwide."
        keywords="academic publishing services, manuscript editing, journal selection, peer review support, plagiarism check, DOI assignment, research paper services, Vidyathiral services"
        url="https://vidyathiral.me/services"
      />
      <div className="animate-fadeIn">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-blue-900 text-white py-20">
          <div className="container-custom text-center">
            <h1 className="heading-primary text-white mb-6">Our Services</h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-200">
              Comprehensive research publishing services designed to support your
              academic journey from manuscript preparation to post-publication
              promotion.
          </p>
        </div>
      </section>

      {/* Editing & Proofreading Section */}
      <section id="editing" className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-secondary">Editing & Proofreading</h2>
              <p className="text-gray-600 mb-6">
                Our team of subject-matter experts provides comprehensive
                editing services to ensure your research meets international
                academic standards.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-secondary flex-shrink-0 mt-1"
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
                  <div>
                    <h3 className="font-semibold text-primary mb-1">
                      Academic Editing
                    </h3>
                    <p className="text-gray-600 text-sm">
                      In-depth editing by experts in your field to enhance
                      clarity, coherence, and academic tone.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-secondary flex-shrink-0 mt-1"
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
                  <div>
                    <h3 className="font-semibold text-primary mb-1">
                      Grammar & Language Check
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Thorough grammar, punctuation, and spelling corrections
                      to polish your manuscript.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-secondary flex-shrink-0 mt-1"
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
                  <div>
                    <h3 className="font-semibold text-primary mb-1">
                      Formatting & Structure
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Journal-specific formatting including references,
                      citations, tables, and figures.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-secondary flex-shrink-0 mt-1"
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
                  <div>
                    <h3 className="font-semibold text-primary mb-1">
                      Plagiarism Scan
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Advanced plagiarism detection with detailed reports to
                      ensure originality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <div className="bg-white rounded-xl p-6 shadow-md mb-6">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Expert Team
                </h3>
                <p className="text-gray-600 text-sm">
                  Our editors have advanced degrees and extensive experience in
                  academic publishing across multiple disciplines.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Fast Turnaround
                </h3>
                <p className="text-gray-600 text-sm">
                  Receive your edited manuscript within 5-7 business days with
                  our standard service, or opt for express editing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journal Selection & Submission Section */}
      <section id="journal" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">
                Our Journal Selection Process
              </h3>
              <ol className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="bg-secondary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    1
                  </span>
                  <div>
                    <h4 className="font-semibold text-primary">
                      Research Analysis
                    </h4>
                    <p className="text-sm text-gray-600">
                      We analyze your research scope, methodology, and findings
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="bg-secondary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    2
                  </span>
                  <div>
                    <h4 className="font-semibold text-primary">
                      Journal Matching
                    </h4>
                    <p className="text-sm text-gray-600">
                      Identify journals that align with your research focus
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="bg-secondary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    3
                  </span>
                  <div>
                    <h4 className="font-semibold text-primary">
                      Impact Assessment
                    </h4>
                    <p className="text-sm text-gray-600">
                      Evaluate journal impact factor, indexing, and reputation
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="bg-secondary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    4
                  </span>
                  <div>
                    <h4 className="font-semibold text-primary">
                      Recommendations
                    </h4>
                    <p className="text-sm text-gray-600">
                      Provide curated list with detailed journal information
                    </p>
                  </div>
                </li>
              </ol>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="heading-secondary">
                Journal Selection & Submission
              </h2>
              <p className="text-gray-600 mb-6">
                Finding the right journal is crucial for your research impact.
                We guide you through journal selection and handle the submission
                process.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-secondary flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">
                      Journal Matching
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Match your research with journals based on scope, impact,
                      and target audience.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-secondary flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">
                      Submission Management
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Handle complete submission process including cover letter
                      and supplementary materials.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-secondary flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">
                      Reviewer Response Help
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Expert assistance in addressing reviewer comments and
                      preparing revisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publishing Support Section */}
      <section id="publishing" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-secondary">Publishing Support</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Comprehensive support for publishing your research in open-access
              platforms with proper indexing and DOI assignment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="bg-secondary bg-opacity-10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-secondary"
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
              <h3 className="text-xl font-semibold text-primary mb-3">
                Open-Access Platform
              </h3>
              <p className="text-gray-600 text-sm">
                Publish in reputable open-access journals for maximum visibility
                and global reach of your research.
              </p>
            </div>
            <div className="card text-center">
              <div className="bg-secondary bg-opacity-10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-secondary"
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
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                DOI Assignment
              </h3>
              <p className="text-gray-600 text-sm">
                Secure permanent digital identifiers (DOI) for your publications
                ensuring long-term accessibility.
              </p>
            </div>
            <div className="card text-center">
              <div className="bg-secondary bg-opacity-10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-secondary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                Indexing Support
              </h3>
              <p className="text-gray-600 text-sm">
                Ensure your work is indexed in major databases like Scopus,
                Google Scholar, and discipline-specific repositories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Post-Publication Promotion Section */}
      <section id="post-publication" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-secondary">Post-Publication Promotion</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Maximize the impact and visibility of your published research
              through strategic promotion and tracking.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition duration-300">
              <h3 className="font-semibold text-primary mb-2">SEO Optimization</h3>
              <p className="text-gray-600 text-sm">
                Optimize your publication for search engines to increase
                discoverability.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition duration-300">
              <h3 className="font-semibold text-primary mb-2">
                Citation Tracking
              </h3>
              <p className="text-gray-600 text-sm">
                Monitor citations and track the academic impact of your research.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition duration-300">
              <h3 className="font-semibold text-primary mb-2">
                Researcher Visibility
              </h3>
              <p className="text-gray-600 text-sm">
                Enhance your academic profile and researcher visibility online.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition duration-300">
              <h3 className="font-semibold text-primary mb-2">
                Social Media Promotion
              </h3>
              <p className="text-gray-600 text-sm">
                Strategic promotion on academic social networks and platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      {/* <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-secondary">Service Packages</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Choose the package that best fits your research publishing needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  plan.popular
                    ? 'bg-primary text-white shadow-2xl transform scale-105'
                    : 'bg-white shadow-lg'
                }`}
              >
                {plan.popular && (
                  <div className="bg-secondary text-white text-sm font-semibold px-4 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    plan.popular ? 'text-white' : 'text-primary'
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm mb-4 ${
                    plan.popular ? 'text-gray-200' : 'text-gray-600'
                  }`}
                >
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span
                    className={`text-sm ${
                      plan.popular ? 'text-gray-200' : 'text-gray-600'
                    }`}
                  >
                    {' '}
                    / project
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <svg
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          plan.popular ? 'text-secondary' : 'text-secondary'
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span
                        className={`text-sm ${
                          plan.popular ? 'text-gray-100' : 'text-gray-600'
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block text-center py-3 px-6 rounded-lg font-medium transition duration-300 ${
                    plan.popular
                      ? 'bg-secondary text-white hover:bg-opacity-90'
                      : 'bg-primary text-white hover:bg-opacity-90'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8 text-sm">
            * Prices may vary based on manuscript length and complexity. Contact
            us for a custom quote.
          </p>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-blue-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-200">
            Let us help you navigate the research publishing process. Contact us
            today for a consultation.
          </p>
          <Link
            to="/contact"
            className="bg-secondary text-white px-8 py-4 rounded-lg font-medium hover:bg-opacity-90 transition duration-300 inline-block shadow-lg"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
    </>
  );
};

export default Services;
