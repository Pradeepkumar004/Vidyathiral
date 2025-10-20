import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
// ...existing code...
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    const scriptUrl = process.env.REACT_APP_GOOGLE_SCRIPT_URL;

    if (!scriptUrl) {
      setStatus({
        type: 'error',
        message: 'Form configuration error. Please contact the administrator.',
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Create a hidden form for submission
      const form = document.createElement('form');
      form.method = 'GET';
      form.action = scriptUrl;
      form.target = 'hidden_iframe';
      form.style.display = 'none';

      // Add form fields
      const fields = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        timestamp: new Date().toISOString(),
      };

      console.log('Submitting form data:', fields);

      Object.keys(fields).forEach(key => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = fields[key];
        form.appendChild(input);
      });

      // Create or get hidden iframe for form submission
      let iframe = document.getElementById('hidden_iframe');
      if (!iframe) {
        iframe = document.createElement('iframe');
        iframe.name = 'hidden_iframe';
        iframe.id = 'hidden_iframe';
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
      }

      // Append form and submit
      document.body.appendChild(form);
      form.submit();

      // Clean up form after submission
      setTimeout(() => {
        if (form.parentNode) {
          document.body.removeChild(form);
        }
      }, 1000);

      console.log('Form submitted successfully via hidden form');

      // Show success message
      setStatus({
        type: 'success',
        message: 'Thank you for your message! We have received your submission and will get back to you soon.',
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Submission error:', error);
      console.error('Error details:', {
        message: error.message,
        name: error.name,
        stack: error.stack
      });
      setStatus({
        type: 'error',
        message: 'There was an error submitting the form. Please try again or email us directly at contact@vidyathiral.me',
      });
    } finally {
      setIsSubmitting(false);
    }
  };
// ...existing code...
// ...existing code...

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-900 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="heading-primary text-white mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Have questions about research publishing? We're here to help. Reach
            out to us and let's discuss how we can support your academic journey.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="heading-secondary mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder="Tell us about your research and how we can assist you..."
                  ></textarea>
                </div>

                {status.message && (
                  <div
                    className={`p-4 rounded-lg ${
                      status.type === 'success'
                        ? 'bg-green-50 text-green-800 border border-green-200'
                        : 'bg-red-50 text-red-800 border border-red-200'
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="heading-secondary mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="card">
                  <div className="flex items-start space-x-4">
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Email</h3>
                      <a
                        href="mailto:contact@vidyathiral.me"
                        className="text-gray-600 hover:text-secondary transition duration-300"
                      >
                        contact@vidyathiral.me
                      </a>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="flex items-start space-x-4">
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">
                        Response Time
                      </h3>
                      <p className="text-gray-600">
                        We typically respond within 24 hours
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="flex items-start space-x-4">
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
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">
                        Follow Us
                      </h3>
                      <div className="flex space-x-4 mt-2">
                        <a
                          href="https://linkedin.com/company/vidyathiral"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-secondary transition duration-300"
                        >
                          <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </a>
                        <a
                          href="https://twitter.com/vidyathiral"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-secondary transition duration-300"
                        >
                          <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info Card */}
              <div className="mt-8 bg-gradient-to-br from-primary to-blue-900 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Publish Your Research?
                </h3>
                <p className="text-gray-200 mb-6">
                  Join hundreds of researchers who trust Vidyathiral for their
                  academic publishing needs.
                </p>
                <a
                  href="/services"
                  className="inline-block bg-secondary text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition duration-300"
                >
                  Explore Our Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="heading-secondary mb-4">Have Questions?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Check out our frequently asked questions for quick answers to common
            queries about our services.
          </p>
          <a href="/faq" className="btn-primary inline-block">
            View FAQ
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;