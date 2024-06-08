export default function Policy() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">PropertEase Privacy Policy</h1>
      <p>
        This Privacy Policy describes how PropertEase (&quot;we&quot;,
        &quot;us&quot;, or &quot;our&quot;) collects, uses, and discloses your
        personal information when you use our website (the &quot;Service&quot;).
      </p>
      <h2 className="text-xl font-bold mt-6">Information We Collect</h2>
      <ul className="list-disc pl-4 mt-2">
        <li>
          **Personal Information:** When you register for an account, create a
          listing, or contact us, you may provide us with certain personally
          identifiable information (&quot;Personal Information&quot;). This may
          include your name, email address, phone number, and any other
          information you choose to share.
        </li>
        <li>
          **Usage Data:** We may also collect information about how you access
          and use the Service (&quot;Usage Data&quot;). This may include
          information about the type of device you use, your IP address,
          browsing activity on our website, and the time and date of your visit.
        </li>
      </ul>
      <h2 className="text-xl font-bold mt-6">How We Use Your Information</h2>
      <ul className="list-disc pl-4 mt-2">
        <li>
          To provide and maintain the Service, including facilitating
          communication between users for buying, selling, or renting
          properties.
        </li>
        <li>
          To send you important information about the Service, such as changes
          to our terms or policies.
        </li>
        <li>To personalize your experience on the Service.</li>
        <li>
          To respond to your inquiries and provide customer support. Improve the
          Service and develop new features.
        </li>
      </ul>
      <h2 className="text-xl font-bold mt-6">Disclosure of Your Information</h2>
      <p>
        We may disclose your Personal Information to third-party vendors and
        service providers who work on our behalf to operate the Service (e.g.,
        payment processing, marketing). These third parties are contractually
        obligated to keep your information confidential and use it only for the
        purposes we have disclosed.
        <br />
        We may also disclose your information if we are required to do so by law
        or in the good faith belief that such action is necessary to comply with
        legal process, protect the safety of users, or address potential fraud.
      </p>
      <h2 className="text-xl font-bold mt-6">Data Retention</h2>
      <p>
        We will retain your Personal Information for as long as necessary to
        fulfill the purposes described in this Privacy Policy, unless a longer
        retention period is required or permitted by law.
      </p>
      <h2 className="text-xl font-bold mt-6">Your Choices</h2>
      <ul className="list-disc pl-4 mt-2">
        <li>
          You can access and update your Personal Information by logging into
          your account and visiting your profile settings.
        </li>
        <li>
          You can also choose to opt out of receiving marketing emails from us
          by following the unsubscribe instructions in those emails.
        </li>
      </ul>
      <h2 className="text-xl font-bold mt-6">Children&apos;s Privacy</h2>
      <p>
        Our Service does not address anyone under the age of 18
        (&quot;Children&quot;). We do not knowingly collect Personal Information
        from children. If you are a parent or guardian and you are aware that
        your child has provided us with Personal Information, please contact us.
        If we become aware that we have collected Personal Information from a
        child without verification of parental consent, we will take steps to
        remove that information from our servers.
      </p>
      <h2 className="text-xl font-bold mt-6">Changes to This Privacy Policy</h2>
      <p>
        We may update our Privacy Policy from time to time. We will notify you
        of any changes by posting the new Privacy Policy on this page.
      </p>
      <p>
        This Privacy Policy is effective as of {new Date().toLocaleDateString()}
        .
      </p>
    </div>
  );
}
