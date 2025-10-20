import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Home = () => {
  const features = [
    {
      title: 'Quality Editing',
      description:
        'Professional academic editing and proofreading by subject-matter experts to ensure your research meets global standards.',
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
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      ),
    },
    {
      title: 'Global Reach',
      description:
        'Access to reputable international journals across all academic disciplines with expert guidance for journal selection.',
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
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: 'Fast Processing',
      description:
        'Streamlined publication process with efficient timelines, ensuring your research reaches the academic community quickly.',
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
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: 'Ethical Publishing',
      description:
        'Committed to maintaining the highest standards of academic integrity and adhering to COPE guidelines.',
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
  ];

  const services = [
    {
      title: 'Editing & Proofreading',
      description:
        'Comprehensive academic editing, grammar checks, and formatting to polish your manuscript.',
      link: '/services#editing',
    },
    {
      title: 'Journal Selection',
      description:
        'Expert guidance in choosing the right journal that aligns with your research scope.',
      link: '/services#journal',
    },
    {
      title: 'Publishing Support',
      description:
        'Complete publishing assistance including DOI assignment and open-access options.',
      link: '/services#publishing',
    },
    {
      title: 'Post-Publication',
      description:
        'Promotion, citation tracking, and visibility enhancement for your published work.',
      link: '/services#post-publication',
    },
  ];

  const steps = [
    { number: '1', title: 'Submit', description: 'Send your research manuscript' },
    { number: '2', title: 'Review', description: 'Expert evaluation and editing' },
    { number: '3', title: 'Edit', description: 'Professional formatting and refinement' },
    { number: '4', title: 'Publish', description: 'Journal submission and publication' },
  ];

  const testimonials = [
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Associate Professor, IIT Delhi',
      text: 'Vidyathiral helped me publish my research in a prestigious journal. Their editing service was exceptional and the team was very supportive throughout the process.',
    },
    {
      name: 'Prof. Anita Sharma',
      role: 'Research Scholar, Delhi University',
      text: 'The journal selection guidance was invaluable. They matched my work with the perfect journal, and the publication process was smooth and transparent.',
    },
    {
      name: 'Dr. Mohammed Ali',
      role: 'Postdoctoral Researcher',
      text: 'Excellent service! From editing to publication, every step was handled professionally. I highly recommend Vidyathiral to fellow researchers.',
    },
  ];

  return (
    <>
      <SEO 
        title="Vidyathiral - Professional Academic & Research Publishing Services"
        description="Vidyathiral offers expert academic publishing services including research paper editing, journal selection, peer review support, and DOI assignment. Trusted by researchers worldwide for quality publication support."
        keywords="academic publishing, research publishing, journal submission, research paper editing, manuscript editing, peer review support, DOI assignment, Scopus journals, UGC journals, Vidyathiral"
        url="https://vidyathiral.com/"
      />
      <div className="animate-fadeIn">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-blue-900 text-white section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Empowering Researchers. Publishing Knowledge.
                </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-200">
                Vidyathiral provides end-to-end research publishing support —
                from editing to open-access publishing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-secondary text-white px-8 py-4 rounded-lg font-medium hover:bg-opacity-90 transition duration-300 text-center shadow-lg"
                >
                  Get Started
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-primary transition duration-300 text-center"
                >
                  Explore Services
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/image1.jpg" 
                  alt="Vidyathiral Research Publishing" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Vidyathiral Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-secondary">Why Choose Vidyathiral?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine expertise, ethics, and efficiency to support your
              research publication journey at every step.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 text-center"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Snapshot Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-secondary">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive research publishing services tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="card hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {service.description}
                </p>
                <span className="text-secondary font-medium text-sm inline-flex items-center">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Preview Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-gray-200 max-w-2xl mx-auto">
              Simple, transparent, and efficient process from submission to
              publication
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-secondary rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/how-it-works"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-primary transition duration-300 inline-block"
            >
              Learn More About Our Process
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-secondary">What Researchers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trusted by researchers worldwide for quality and reliability
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-secondary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-primary">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-secondary to-yellow-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Publish Your Research?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of researchers who trust Vidyathiral for their
            academic publishing needs. Let's bring your research to the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-primary px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition duration-300 shadow-lg"
            >
              Contact Us Today
            </Link>
            <Link
              to="/faq"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-secondary transition duration-300"
            >
              Have Questions?
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Home;
