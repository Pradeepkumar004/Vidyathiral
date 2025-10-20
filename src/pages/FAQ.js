import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What types of research do you publish?',
      answer:
        'We support publications across all academic disciplines, including science, technology, engineering, mathematics, humanities, social sciences, and more. Our goal is to help every researcher share quality work globally, regardless of their field of study.',
    },
    {
      question: 'Do you provide plagiarism checks?',
      answer:
        'Yes, we use advanced plagiarism detection tools to ensure originality and maintain ethical research standards before publication. You will receive a detailed plagiarism report with your edited manuscript, highlighting any areas that need attention.',
    },
    {
      question: 'How long does the publication process take?',
      answer:
        'The timeline varies based on journal requirements and the complexity of your manuscript. However, most publications are completed within 2–4 weeks after submission. We offer expedited services for urgent publications. The typical process includes: editing (3-7 days), journal selection (2-3 days), submission preparation (2-3 days), and journal review/publication (varies by journal).',
    },
    {
      question: 'Are your services recognized by academic journals?',
      answer:
        'Absolutely! Our team follows globally accepted publishing standards and collaborates with reputed journals worldwide. We adhere to COPE (Committee on Publication Ethics) guidelines and work with journals indexed in major databases like Scopus, Web of Science, and others, ensuring your work meets academic expectations.',
    },
    {
      question: 'How do I track my paper\'s status?',
      answer:
        'You can track progress through our regular communication updates via email. We keep you informed at every stage of the process. Additionally, once published, you can track your paper using the DOI (Digital Object Identifier) number assigned to it. You can also contact us anytime for status updates.',
    },
    {
      question: 'What is the cost of your services?',
      answer:
        'Our pricing varies based on the service package you choose and the complexity of your manuscript. We offer three main packages: Basic (₹5,000), Advanced (₹10,000), and Premium (₹20,000). Each package includes different features and levels of support. Please visit our Services page or contact us for a detailed quote tailored to your specific needs.',
    },
    {
      question: 'Can you help me choose the right journal for my research?',
      answer:
        'Yes! Journal selection is one of our core services. We analyze your research scope, methodology, and findings to recommend journals that align with your work. We consider factors like journal impact factor, indexing, scope, target audience, and publication fees to provide you with the best options.',
    },
    {
      question: 'What if my paper gets rejected?',
      answer:
        'Journal rejections are a normal part of the academic publishing process. If your paper is rejected, we will help you understand the reviewer comments, make necessary revisions, and recommend alternative journals that might be a better fit for your research. Our Premium package includes unlimited journal recommendations and submission support.',
    },
    {
      question: 'Do you write research papers for clients?',
      answer:
        'No, we do not write research papers from scratch as this would violate academic integrity principles. However, we provide comprehensive editing, formatting, and improvement services for your original research. We help enhance clarity, coherence, and language quality while maintaining your original work and ideas.',
    },
    {
      question: 'Is my research confidential?',
      answer:
        'Yes, we take confidentiality very seriously. All manuscripts and research materials you share with us are kept strictly confidential. We do not share your work with any third parties without your explicit consent. Our team follows strict data protection protocols in accordance with our Privacy Policy.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept various payment methods including bank transfers, UPI, credit/debit cards, and online payment platforms. Payment terms and methods will be discussed and agreed upon before we begin work on your manuscript. We provide clear invoices and receipts for all transactions.',
    },
    {
      question: 'Can you help with reviewer responses and revisions?',
      answer:
        'Yes! We provide expert assistance in addressing reviewer comments and preparing revisions. Our team will help you understand the reviewer feedback, suggest appropriate responses, and make the necessary changes to your manuscript. This service is included in our Advanced and Premium packages.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-900 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="heading-primary text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Find answers to common questions about our research publishing
            services
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                >
                  <h3 className="text-lg font-semibold text-primary pr-8">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-6 h-6 text-secondary flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-600 mb-8">
              Can't find the answer you're looking for? Our team is here to help
              you with any questions about our research publishing services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-primary text-white px-8 py-4 rounded-lg font-medium hover:bg-opacity-90 transition duration-300 shadow-md"
              >
                Contact Us
              </Link>
              <a
                href="mailto:contact@vidyathiral.com"
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-medium hover:bg-primary hover:text-white transition duration-300"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-secondary">Explore More</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              to="/services"
              className="card hover:scale-105 transition-transform duration-300 text-center"
            >
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
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                Our Services
              </h3>
              <p className="text-gray-600 text-sm">
                Explore our comprehensive research publishing services
              </p>
            </Link>
            <Link
              to="/how-it-works"
              className="card hover:scale-105 transition-transform duration-300 text-center"
            >
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
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                How It Works
              </h3>
              <p className="text-gray-600 text-sm">
                Learn about our publication process step by step
              </p>
            </Link>
            <Link
              to="/policies"
              className="card hover:scale-105 transition-transform duration-300 text-center"
            >
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
              <h3 className="text-xl font-semibold text-primary mb-2">
                Our Policies
              </h3>
              <p className="text-gray-600 text-sm">
                Review our privacy, terms, and ethical policies
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
