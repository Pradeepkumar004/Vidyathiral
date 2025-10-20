import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Policies = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to specific section if hash is present in URL
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-900 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="heading-primary text-white mb-6">Our Policies</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Transparency, ethics, and your privacy are our top priorities
          </p>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="bg-gray-50 py-6 sticky top-20 z-40 shadow-md">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#privacy"
              className="px-6 py-2 bg-white text-primary rounded-lg font-medium hover:bg-primary hover:text-white transition duration-300 shadow-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="px-6 py-2 bg-white text-primary rounded-lg font-medium hover:bg-primary hover:text-white transition duration-300 shadow-sm"
            >
              Terms & Conditions
            </a>
            <a
              href="#ethics"
              className="px-6 py-2 bg-white text-primary rounded-lg font-medium hover:bg-primary hover:text-white transition duration-300 shadow-sm"
            >
              Ethical Policy
            </a>
          </div>
        </div>
      </section>

      {/* Privacy Policy Section */}
      <section id="privacy" className="section-padding">
        <div className="container-custom max-w-4xl">
          <h2 className="heading-secondary mb-8">Privacy Policy</h2>
          <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                1. Information We Collect
              </h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Name, email address, and contact information</li>
                <li>Research manuscripts and related documents</li>
                <li>Payment and billing information</li>
                <li>Communication preferences and feedback</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                2. How We Use Your Information
              </h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process your research manuscripts and publishing requests</li>
                <li>Communicate with you about our services</li>
                <li>Send you updates, newsletters, and marketing materials (with your consent)</li>
                <li>Protect against fraud and ensure security</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                3. Data Protection & Confidentiality
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We take the confidentiality of your research very seriously. All
                manuscripts and research materials are stored securely and are
                only accessible to authorized team members. We do not share your
                research with third parties without your explicit consent. We
                implement industry-standard security measures to protect your data
                from unauthorized access, alteration, or disclosure.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                4. Cookie Usage
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our website uses cookies to enhance user experience and analyze
                website traffic. Cookies are small text files stored on your
                device. You can control cookie settings through your browser
                preferences. Disabling cookies may affect the functionality of our
                website.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                5. Data Retention
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We retain your personal information and manuscripts for as long as
                necessary to provide our services and comply with legal
                obligations. You may request deletion of your data at any time by
                contacting us at contact@vidyathiral.com.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                6. Your Rights
              </h3>
              <p className="text-gray-600 leading-relaxed mb-3">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Access and receive a copy of your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                7. Contact Us
              </h3>
              <p className="text-gray-600 leading-relaxed">
                For any privacy-related questions or concerns, please contact us
                at: <a href="mailto:contact@vidyathiral.com" className="text-secondary hover:underline">contact@vidyathiral.com</a>
              </p>
            </div>

            <p className="text-gray-500 text-sm italic mt-8">
              Last Updated: October 20, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Terms & Conditions Section */}
      <section id="terms" className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="heading-secondary mb-8">Terms & Conditions</h2>
          <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                1. Service Scope
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Vidyathiral provides research publishing support services
                including but not limited to editing, proofreading, journal
                selection, submission management, and post-publication promotion.
                We do not guarantee publication acceptance as this depends on
                journal editors and peer reviewers.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                2. Client Responsibilities
              </h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                As a client, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Provide original research work that you have authored</li>
                <li>Ensure your research does not infringe on any copyrights</li>
                <li>Provide accurate and complete information</li>
                <li>Respond promptly to our queries and requests</li>
                <li>Make timely payments as per the agreed terms</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                3. Payment Terms
              </h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                Payment is required before we begin work on your manuscript.
                Accepted payment methods include bank transfer, UPI, and online
                payment platforms. Refund requests must be made within 7 days of
                service delivery and will be evaluated on a case-by-case basis.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                4. Intellectual Property
              </h3>
              <p className="text-gray-600 leading-relaxed">
                All intellectual property rights in your research remain with you.
                We do not claim any ownership or rights to your work. We may use
                anonymized data and general statistics about our services for
                marketing purposes.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                5. Limitation of Liability
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Vidyathiral will not be liable for any indirect, incidental, or
                consequential damages arising from the use of our services. Our
                total liability shall not exceed the amount paid for the specific
                service in question.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                6. Service Modifications
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to modify, suspend, or discontinue any aspect
                of our services at any time. We will provide reasonable notice of
                significant changes that may affect existing clients.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                7. Dispute Resolution
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Any disputes arising from these terms shall be resolved through
                good faith negotiation. If a resolution cannot be reached, the
                matter will be subject to the jurisdiction of courts in India.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                8. Contact Information
              </h3>
              <p className="text-gray-600 leading-relaxed">
                For questions about these terms, contact us at:{' '}
                <a href="mailto:contact@vidyathiral.com" className="text-secondary hover:underline">contact@vidyathiral.com</a>
              </p>
            </div>

            <p className="text-gray-500 text-sm italic mt-8">
              Last Updated: October 20, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Ethical Policy Section */}
      <section id="ethics" className="section-padding">
        <div className="container-custom max-w-4xl">
          <h2 className="heading-secondary mb-8">Ethical Policy</h2>
          <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                1. Adherence to COPE Guidelines
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Vidyathiral strictly adheres to the Committee on Publication
                Ethics (COPE) guidelines. We are committed to promoting integrity
                in research publication and maintaining the highest ethical
                standards in all our services.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                2. Anti-Plagiarism Policy
              </h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                We have a zero-tolerance policy towards plagiarism:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>All manuscripts undergo thorough plagiarism checks</li>
                <li>
                  We use advanced detection tools to ensure originality
                </li>
                <li>
                  Any detected plagiarism is reported to the client for
                  correction
                </li>
                <li>We do not proceed with plagiarized content</li>
                <li>Proper citation and attribution practices are enforced</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                3. Data Transparency & Integrity
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We encourage researchers to maintain complete transparency in
                their data and methodology. We do not support or assist in data
                fabrication, falsification, or manipulation. All research must be
                based on genuine data and honest reporting.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                4. Author Responsibilities
              </h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                Authors using our services are expected to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>
                  Submit only original work that they have substantially
                  contributed to
                </li>
                <li>Ensure proper acknowledgment of all contributors</li>
                <li>Disclose any conflicts of interest</li>
                <li>Obtain necessary permissions for using others' work</li>
                <li>Follow ethical guidelines in their research conduct</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                5. Confidentiality & Conflict of Interest
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We maintain strict confidentiality of all research materials. Our
                team members are required to declare any potential conflicts of
                interest. We do not share research details with any third parties
                without explicit consent.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                6. Journal Ethics
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We only recommend reputable, peer-reviewed journals that follow
                ethical publishing practices. We do not promote or work with
                predatory journals. We encourage transparent reporting of journal
                fees and publication timelines.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                7. Ethical Violations Reporting
              </h3>
              <p className="text-gray-600 leading-relaxed">
                If you suspect or encounter any ethical violations in our
                services, please report them immediately to:{' '}
                <a href="mailto:contact@vidyathiral.com" className="text-secondary hover:underline">contact@vidyathiral.com</a>.
                All reports will be investigated thoroughly and appropriate action
                will be taken.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                8. Continuous Improvement
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We are committed to continuous improvement of our ethical
                practices. We regularly review and update our policies to align
                with international standards and best practices in academic
                publishing.
              </p>
            </div>

            <p className="text-gray-500 text-sm italic mt-8">
              Last Updated: October 20, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Questions About Our Policies?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-200">
            We're happy to clarify any aspects of our policies. Feel free to
            reach out to us.
          </p>
          <a
            href="mailto:contact@vidyathiral.com"
            className="bg-secondary text-white px-8 py-4 rounded-lg font-medium hover:bg-opacity-90 transition duration-300 inline-block shadow-lg"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default Policies;
