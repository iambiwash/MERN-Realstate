const Terms = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 shadow-md rounded-md">
        <h1 className="text-2xl font-bold mb-4">Terms and Conditions</h1>
        <p className="mb-4">
          Welcome to PropertEase! These terms and conditions outline the rules
          and regulations for the use of PropertEase&apos;s website, located at
          www.propertEase.com.
        </p>
        <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By accessing this website, we assume you accept these terms and
          conditions. Do not continue to use PropertEase if you do not agree to
          all of the terms and conditions stated on this page.
        </p>
        <h2 className="text-xl font-semibold mb-2">2. Account Registration</h2>
        <p className="mb-4">
          To access certain features of the site, you must register for an
          account. You agree to provide accurate, current, and complete
          information during the registration process and update such
          information to keep it accurate, current, and complete.
        </p>
        <h2 className="text-xl font-semibold mb-2">3. User Content</h2>
        <p className="mb-4">
          Users can create property listings by providing necessary information.
          You retain ownership of any content you submit, post, or display on or
          through the site. By submitting content, you grant PropertEase a
          worldwide, non-exclusive, royalty-free license to use, reproduce,
          modify, and display the content.
        </p>
        <h2 className="text-xl font-semibold mb-2">4. Prohibited Activities</h2>
        <p className="mb-4">
          You agree not to engage in any of the following prohibited activities:
          (i) copying, distributing, or disclosing any part of the site in any
          medium; (ii) using any automated system to access the site; (iii)
          attempting to interfere with or compromise the system integrity or
          security.
        </p>
        <h2 className="text-xl font-semibold mb-2">5. Payments and Fees</h2>
        <p className="mb-4">
          Any fees applicable to using the site are listed at the time of
          purchase or subscription. By selecting to make a payment, you agree to
          pay PropertEase all fees at the price then in effect for your use.
        </p>
        <h2 className="text-xl font-semibold mb-2">6. Termination</h2>
        <p className="mb-4">
          We may terminate or suspend your access to the site without prior
          notice or liability for any reason whatsoever, including if you breach
          the terms.
        </p>
        <h2 className="text-xl font-semibold mb-2">
          7. Limitation of Liability
        </h2>
        <p className="mb-4">
          In no event shall PropertEase, nor its directors, employees, partners,
          agents, suppliers, or affiliates, be liable for any indirect,
          incidental, special, consequential or punitive damages, including
          without limitation, loss of profits, data, use, goodwill, or other
          intangible losses.
        </p>
        <h2 className="text-xl font-semibold mb-2">8. Governing Law</h2>
        <p className="mb-4">
          These terms shall be governed and construed in accordance with the
          laws of the country, without regard to its conflict of law provisions.
        </p>
        <h2 className="text-xl font-semibold mb-2">9. Changes to Terms</h2>
        <p className="mb-4">
          PropertEase reserves the right to modify or replace these terms at any
          time. We will provide notice of such changes by posting the new terms
          on the site. Your continued use of the site after any such changes
          constitutes your acceptance of the new terms.
        </p>
        <p className="mb-4">
          If you have any questions about these Terms, please contact us at
          support@properease.com.
        </p>
        <p className="text-center font-semibold mt-8">
          © {new Date().getFullYear()} PropertEase. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Terms;
