import Header from '../components/Header'
import Footer from '../components/Footer'

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Last updated: {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
        </p>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-10">

          {/* ===== INTRODUCTION ===== */}
          <section>
            <p>
              The website <strong><a href="https://myservicecart.com" className="text-blue-600 underline">https://myservicecart.com</a></strong> under the name and style <strong>‘Servicecart’</strong> and the mobile applications <strong>‘Servicecart - Home Service Pro’</strong> (collectively, the <strong>“Platform”</strong>) is owned, operated and made available by <strong>Xnotch Servicecart Pvt Ltd</strong>, having <strong>CIN U96908PN2024PTC234335</strong>, with its office at <strong>Lower Parel, Mumbai, Maharashtra - 400013</strong> (hereinafter, referred to as <strong>“Servicecart”</strong> or <strong>“Company”</strong> which term shall include its assignees and/or successors-in-interest).
            </p>
            <p className="mt-2">
              This <strong>Privacy Policy</strong> sets out the privacy practices of <strong>Servicecart</strong> with respect to the usage of the Platform and the services offered through the Platform. This Privacy Policy specifies the manner in which personal information and other information is collected, received, stored, processed, disclosed, transferred, dealt with or otherwise handled by the Company.
            </p>
            <p className="mt-2">
              This Privacy Policy does not apply to information that you provide to, or that is collected by, any third-party through the Platform, and any third-party sites that you access or use in connection with the Services offered on the Platform.
            </p>
            <p className="mt-2">
              This document is published in accordance with the provisions of the <strong>Information Technology Act, 2000</strong> and the rules made thereunder including the <strong>Information Technology (Reasonable security practices and procedures and sensitive personal data or information) SPDI Rules, 2011</strong>, that require publishing of the privacy policy on an online portal.
            </p>
            <p className="mt-2">
              We request you to go through this Privacy Policy and the <strong>Terms of Use</strong> available at <a href="https://myservicecart.com/legal/terms-and-conditions" className="text-blue-600 underline">https://myservicecart.com/legal/terms-and-conditions</a> carefully before you decide to access the Platform and avail the services of the Platform.
            </p>
            <p className="mt-2">
              This Privacy Policy shall apply to the <strong>Users</strong>, <strong>Experts</strong> (as defined in the Terms of Use). For the purposes of this Privacy Policy, the Users shall hereinafter be referred to as <strong>“you”</strong>, <strong>“your”</strong> or <strong>“yourself”</strong>. For the purposes of this Privacy Policy, the words <strong>“us”</strong>, <strong>“we”</strong>, and <strong>“our”</strong> refer to <strong>Servicecart</strong> and each of our assignees and our successors-in-interest.
            </p>
            <p className="mt-2">
              By using our <strong>Services</strong> or the <strong>Platform</strong> or by otherwise giving us your information, you agree to the terms of this Privacy Policy. You also expressly consent to our collection, use, processing and disclosure of your <strong>Personal Information</strong> (defined below) in the manner prescribed under this Privacy Policy and further signify your agreement to this Privacy Policy and the Terms of Use. <strong>If you do not agree to this Privacy Policy, you should not access or otherwise use the Platform or Services.</strong>
            </p>
            <p className="mt-2">
              All capitalized terms used in this Privacy Policy and not specifically defined herein shall have the meaning ascribed to such terms in the <strong>Terms of Use</strong>.
            </p>
          </section>

          {/* ===== 1. COLLECTION OF INFORMATION ===== */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Collection of Information</h2>
            <p>
              We may collect and process information from you, through your use of the Platform, or which is provided to us or is obtained by us through any of your engagements with us. We may collect and process personal information provided by you, including but not limited to (<strong>“Personal Information”</strong>):
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Any information that you provide at the time of registration or availing Services including any information that identifies or can be used to identify, contact or locate you, including <strong>name, address, details of residence including number of family members, pets, if any, phone number, sex, and/or email address, payment related details</strong> or other payment method data, to process the Services. We may ask you to provide certain additional information about yourself on a case-to-case basis;</li>
              <li>Any information that you provide on our Platform when you use our Services including while logging in and logging out of the Platform;</li>
              <li>Any information that you provide to us for provision of our Services including <strong>details of number of members in your house, details of any pets in your house, the number of rooms in your house and dimensions of your house</strong>; and</li>
            </ul>
            <p className="mt-2">
              We may also collect certain <strong>non-personal information</strong>, such as any data that is automatically captured by the Platform, such as the <strong>IP address</strong> from which the Platform has been accessed, <strong>web request, operating system, browser type, URL, internet service provider, IP address, aggregate user data, browser type, software and hardware attributes, pages you request, and cookie information</strong>, etc. which will not identify you specifically. (<strong>“Non-personal Information”</strong>)
            </p>
            <p className="mt-2">
              If you choose to message us or leave us feedback, we will collect and store such information you provide to us. We retain this information as necessary to resolve disputes, provide customer support, respond to queries, inquiries, troubleshoot problems and improve the platform or the services.
            </p>
          </section>

          {/* ===== 2. USE OF THE INFORMATION COLLECTED ===== */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">2. Use of the Information Collected</h2>
            <p>
              The primary goal of <strong>Servicecart</strong> in collecting <strong>Personal Information</strong> and <strong>Non-personal Information</strong> is to provide you with the <strong>Platform</strong> and <strong>Services</strong>. <strong>Servicecart</strong> may use the <strong>Personal Information</strong> and the <strong>Non-personal Information</strong> provided by you in the following ways:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>To identify and reach you;</li>
              <li>To help provide you the Platform and Services;</li>
              <li>Provide you with further information and programs related to the Services;</li>
              <li>To enable third parties to provide you their products and services, which you choose to access through the Platform;</li>
              <li>To observe, improve and administer the quality of Service;</li>
              <li>To facilitate processing of Fee payment;</li>
              <li>To analyze how the Platform is used and/or diagnose and resolve technical problems;</li>
              <li>Remember the basic information provided by you for effective access to the Platform;</li>
              <li>To confirm your identity in order to determine your eligibility to use the Platform and avail the Services;</li>
              <li>To notify you about any changes to the Platform;</li>
              <li>To enhance the operation of the Platform;</li>
              <li>To personalize your experience and customize the Platform and/or Service experience;</li>
              <li>To enable <strong>Servicecart</strong> to comply with its legal and regulatory obligations;</li>
              <li>For the purpose of sending administrative notices and Service-related alerts;</li>
              <li>To do internal research on our Users' demographics and behavior;</li>
              <li>Allow us to better service you in responding to your customer service requests;</li>
              <li>To detect, prevent and protect us from any errors, fraud and other criminal or prohibited activity on the Platform;</li>
              <li>To make aware the User who have availed Services from <strong>Experts</strong> and display such necessary information about the <strong>Experts</strong> to the Users who will be delivering Services to them;</li>
              <li>Administer a contest, promotion, survey or other Platform features; and</li>
              <li>Doing market research, project planning, troubleshooting and protection against error, fraud and other criminal activity.</li>
            </ul>
          </section>

          {/* ===== 3. SALE OF ASSETS, MERGER, ETC. ===== */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Sale of Assets, Merger, Acquisition, Bankruptcy</h2>
            <p>
              <strong>Personal Information</strong> collected from you may be transferred to a third party as a result of a <strong>sale or acquisition, merger, asset sale, bankruptcy</strong> involving <strong>Servicecart</strong>. <strong>Servicecart</strong> may disclose your <strong>Personal Information</strong> and/or <strong>Non-personal Information</strong> to such third parties to whom it transfers its rights and duties under any agreement entered into with such third parties.
            </p>
            <p className="mt-2">
              Users will be informed of any major changes to the privacy policy resulting from the aforesaid transfer, and any such transfer will be carried out in compliance with relevant data protection legislation.
            </p>
          </section>

          {/* ===== 4. COOKIES ===== */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Cookies</h2>
            <p>
              <strong>Cookies</strong> are small portions of information saved by your browser onto your computer/mobile. Cookies are used to record various aspects of your visit and assist <strong>Servicecart</strong> to provide you with uninterrupted service.
            </p>
            <p className="mt-2">
              We may use information collected from our <strong>Cookies</strong> to identify User behavior and to serve content and offers based on your profile, to personalize your experience and to enhance your convenience of using our Platform.
            </p>
            <p className="mt-2">
              When you use the Service on the Platform, we may employ <strong>web beacons</strong> which are used to anonymously track the online usage patterns of our Users. The information allows for more accurate reporting and improvement of our Service.
            </p>
            <p className="mt-2">
              By using the Platform, the User acknowledges and agrees that <strong>third-party service providers</strong> may utilize <strong>Cookies</strong> or similar technologies to gather information about the User's Platform usage patterns. We assume no responsibility or liability whatsoever for the User’s receipt or use of such tailored advertisements.
            </p>
          </section>

          {/* ===== 5. OPT OUT PROCEDURES ===== */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Opt Out Procedures</h2>
            <p>
              You may decline to submit any <strong>Personal Information</strong> and/or <strong>Non-personal Information</strong> through the Platform, in which case certain features of the Platform may not be available to you. To be completely removed from the <strong>Servicecart</strong> mailing list, you may contact us at <a href="mailto:wecare@myservicecart.com" className="text-blue-600 underline">wecare@myservicecart.com</a>.
            </p>
          </section>

          {/* ===== 6. SHARING OF INFORMATION ===== */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Sharing of Information</h2>
            <p>
              We may disclose your <strong>Personal Information</strong> and/or <strong>Non-personal Information</strong> to our <strong>affiliates, personnel, employees, Experts</strong> and <strong>consultants</strong> for provision of Services.
            </p>
            <p className="mt-2">
              We may also share your <strong>Personal Information</strong> and/or <strong>Non-personal Information</strong> with <strong>external organizations or individuals or third parties</strong>, if we believe that access, use, preservation or disclosure is reasonably necessary to detect, prevent or otherwise address fraud, security or technical issues; and/or protect against harm to the rights, property or safety of <strong>Servicecart</strong>, our customers, the <strong>Experts</strong>, other Users or the public.
            </p>
            <p className="mt-2">
              <strong>Servicecart</strong> will not be liable for transfer of any <strong>Personal Information</strong> and/or <strong>Non-personal Information</strong> resulting from loss or distribution of data, power failures, natural phenomena, riots, act(s) of vandalism, sabotage, terrorism or any other event beyond <strong>Servicecart’s</strong> control.
            </p>
          </section>

          {/* ===== 7. LINK TO THIRD PARTY WEBSITES ===== */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">7. Link to Third Party Websites</h2>
            <p>
              This Platform may contain links which may lead you to other websites/platforms/services. Please note that once you leave <strong>Servicecart’s</strong> Platform you will be subjected to the privacy policy of such third party Platforms and that <strong>Servicecart</strong> is not responsible for the same.
            </p>
          </section>

          {/* ===== 8. SPAM ===== */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">8. Spam</h2>
            <p>
              Except as set forth in paragraph 6 and other terms of this Privacy Policy, <strong>Servicecart</strong> maintains a strict <strong>"No-Spam"</strong> policy, which means that <strong>Servicecart</strong> does not intend to sell, rent or otherwise give your e-mail address to a third party without your consent.
            </p>
          </section>

          {/* ===== 9. USER TESTIMONIALS / COMMENTS / REVIEWS ===== */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">9. User Testimonials / Comments / Reviews</h2>
            <p>
              From time to time, we may post User’s <strong>testimonials/comments/reviews</strong> with respect to the Services on the Platform which may contain <strong>Personal Information</strong>. We obtain User’s consent to post their names along with such testimonials/comments/reviews.
            </p>
          </section>

          {/* ===== 10. SECURITY OF INFORMATION ===== */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">10. Security of Information</h2>
            <p>
              <strong>Servicecart</strong> has put in place necessary <strong>security practices and procedures</strong> to safeguard and secure your <strong>Personal Information</strong> and <strong>Non-personal Information</strong>. The Platform allows Users to access, correct, amend or delete inaccurate information.
            </p>
            <p className="mt-2">
              In using the Platform, you accept the inherent security implications of data transmission over the internet. Therefore, the use of the Platform will be at your own risk and <strong>Servicecart</strong> assumes no liability for any disclosure due to errors in transmission, unauthorised third-party access or other acts beyond its reasonable control.
            </p>
            <p className="mt-2">
              We are in compliance with the <strong>Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules 2011</strong>.
            </p>
          </section>

          {/* ===== 11. EXCLUSION ===== */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">11. Exclusion</h2>
            <p>
              This Privacy Policy does not apply to any information other than information collected by <strong>Servicecart</strong> through the Platform. This includes, but is not limited to, information posted on any public areas of the Platform. All such unsolicited information shall be deemed to be <strong>non-confidential</strong> and <strong>Servicecart</strong> will be free to use, disclose such unsolicited information without limitation.
            </p>
          </section>

          {/* ===== 12. DATA RETENTION ===== */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">12. Data Retention</h2>
            <p>
              Your <strong>Personal Information</strong> will be retained with <strong>Servicecart</strong> as needed to provide <strong>Services</strong> to you. <strong>Servicecart</strong> shall not retain <strong>Personal Information</strong> longer than is necessary to fulfil the purposes for which it was collected and as permitted by applicable law.
            </p>
            <p className="mt-2">
              If you wish to <strong>cancel your account</strong> or request that <strong>Servicecart</strong> no longer uses your <strong>Personal Information</strong> to provide you Services, contact us at <a href="mailto:wecare@myservicecart.com" className="text-blue-600 underline">wecare@myservicecart.com</a>.
            </p>
          </section>

          {/* ===== 13. RIGHT TO WITHDRAW CONSENT ===== */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">13. Right to Withdraw Consent</h2>
            <p>
              The consent that you provide for the collection, use, processing and disclosure of your <strong>Personal Information</strong> will remain valid until withdrawn by you in writing by contacting <strong>Servicecart</strong> at <a href="mailto:wecare@myservicecart.com" className="text-blue-600 underline">wecare@myservicecart.com</a>.
            </p>
          </section>

          {/* ===== 14. RIGHT TO CORRECTION ===== */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">14. Right to Correction</h2>
            <p>
              You are responsible for maintaining the accuracy of the <strong>Personal Information</strong> you submit to us. If you wish to make a request to <strong>correct or update</strong> any of your <strong>Personal Information</strong> which we hold about you, you may submit your request via email at <a href="mailto:wecare@myservicecart.com" className="text-blue-600 underline">wecare@myservicecart.com</a>.
            </p>
          </section>

          {/* ===== 15. NOTIFICATION OF CHANGES ===== */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">15. Notification of Changes</h2>
            <p>
              From time to time, <strong>Servicecart</strong> may update this <strong>Privacy Policy</strong> to reflect changes to its information practices. Any changes will be effective immediately upon the posting of the revised <strong>Privacy Policy</strong>. If <strong>Servicecart</strong> makes any <strong>material changes</strong>, it will notify you by means of a notice prior to the change becoming effective.
            </p>
          </section>

          {/* ===== 16. RIGHT TO ACCESS ===== */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">16. Right to Access</h2>
            <p>
              You have the right to request us for copies of your <strong>Personal Information</strong>. We may charge you a small fee for this service.
            </p>
          </section>

          {/* ===== 17. CONSENT TO THE TERMS OF USE ===== */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">17. Consent to the Terms of Use</h2>
            <p>
              By using or accessing the Platform, you acknowledge and agree that the <strong>Terms of Use</strong> are fully incorporated into and form an integral part of this <strong>Privacy Policy</strong>.
            </p>
          </section>

          {/* ===== 18. GRIEVANCE OFFICER ===== */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">18. Grievance Officer</h2>
            <p>
              In accordance with the <strong>Information Technology Act, 2000</strong> and the rules made thereunder, the name and contact details of the grievance officer are provided below:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mt-3 text-sm">
              <p><strong>Name:</strong> Vikas Vilas Patil</p>
              <p><strong>Designation:</strong> Grievance Officer</p>
              <p><strong>Contact Number:</strong> +91 9923931111</p>
              <p><strong>Email Id:</strong> <a href="mailto:grievance@myservicecart.com" className="text-blue-600 underline">grievance@myservicecart.com</a></p>
              <p><strong>Time:</strong> Monday – Sunday, 10:00 a.m. – 6:00 p.m.</p>
            </div>
            <p className="mt-3 text-sm">
              The Grievance Officer shall redress your grievances with respect to the <strong>Personal Information</strong> provided within <strong>1 (one) month</strong> from the date of receipt of your written grievance.
            </p>
          </section>

          {/* ===== 19. ADDRESS FOR PRIVACY QUESTIONS ===== */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">19. Address for Privacy Questions</h2>
            <p>
              Should you have questions about this <strong>Privacy Policy</strong>, you may contact us at <a href="mailto:wecare@myservicecart.com" className="text-blue-600 underline">wecare@myservicecart.com</a>
            </p>
          </section>

          {/* ===== 20. CONSENT ===== */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">20. Consent</h2>
            <p>
              By consenting to the terms under this <strong>Privacy Policy</strong>, you hereby provide <strong>express consent</strong> to <strong>Servicecart</strong> to <strong>collect, share, transfer, store, retain, disseminate or use/process</strong> the <strong>Personal Information</strong> and/or <strong>Non-personal Information</strong> collected by <strong>Servicecart</strong> in accordance with the terms of the <strong>Privacy Policy</strong>.
            </p>
            <p className="mt-2">
              You are a <strong>natural person who is above the age of 18 (eighteen)</strong> and is eligible under the <strong>Indian Contract Act, 1872</strong> to enter into a valid agreement and be bound by the terms of this <strong>Privacy Policy</strong>.
            </p>
          </section>

          {/* ===== 21. ELECTRONIC RECORD ===== */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">21. Electronic Record</h2>
            <p>
              This document is an <strong>electronic record</strong> in terms of the <strong>Information Technology Act, 2000</strong> and rules made thereunder. This electronic record is generated by a computer system and <strong>does not require any physical or digital signatures</strong>.
            </p>
            <p className="mt-2">
              <strong>PLEASE ENSURE THAT YOU READ AND UNDERSTAND THIS POLICY BEFORE YOU USE THE SERVICE OF THE PLATFORM, AS YOU SHALL BE BOUND BY ALL THE CONDITIONS CONTAINED HEREIN UPON CLICKING ON THE “I ACCEPT” BUTTON.</strong>
            </p>
          </section>

          {/* ===== FINAL STATEMENT ===== */}
          <section className="bg-blue-50 p-6 rounded-lg mt-10">
            <p className="font-bold text-center">
              YOU HAVE READ THIS PRIVACY POLICY AND AGREE TO ALL OF THE PROVISIONS CONTAINED ABOVE.
            </p>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy

