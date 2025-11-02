import Header from '../components/Header'
import Footer from '../components/Footer'


const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Terms and Conditions
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Last updated: {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
        </p>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-10">

          {/* ===== INTRODUCTION ===== */}
          <section>
            <p>
              These terms of use ("<strong>Terms</strong>") govern the use of services made available on or through{' '}
              <a href="https://myservicecart.com" className="text-blue-600 underline">https://myservicecart.com</a> or mobile applications{' '}
              <strong>‘Servicecart - Home Service Pro’</strong> (collectively, the "<strong>Platform</strong>", and together with the services made available on or through the Platform, the "<strong>Services</strong>").
            </p>
            <p className="mt-2">
              These Terms also include any guidelines, additional, or supplemental terms, policies, and disclaimers made available or issued by us from time to time ("<strong>Supplemental Terms</strong>"). The Supplemental Terms form an integral part of these Terms. In the event of a conflict between these Terms and the Supplemental Terms with respect to applicable Services or a subject matter, the Supplemental Terms will prevail.
            </p>
            <p className="mt-2">
              The Terms constitute a binding and enforceable legal contract between <strong>Xnotch Servicecart Pvt Ltd</strong> (a company incorporated under the Companies Act, 2013 and its affiliates ("<strong>Servicecart</strong>", "<strong>we</strong>", "<strong>us</strong>", "<strong>our</strong>" or “<strong>Company</strong>”), and you, a user of the Services, or any legal entity that books Housekeeping Services or Non-housekeeping Services on behalf of end-users ("<strong>you</strong>" or “<strong>your</strong>”, or “<strong>User</strong>”).
            </p>
            <p className="mt-2">
              By using the Services, you represent and warrant that you have full legal capacity and authority to agree to abide and bind yourself to these Terms. If you represent any other person, you confirm and represent that you have the necessary power and authority to bind such person to these Terms.
            </p>
            <p className="mt-2">
              A User is someone who accesses or uses the Services for the purpose of sharing, displaying, hosting, publishing, transacting, or uploading information or views or pictures and includes other persons jointly participating in using the Services.
            </p>
            <p className="mt-2">
              By using the Services, you agree that you have read, understood, and are bound by these Terms, as amended from time to time, and that you will comply with the requirements listed here. These Terms expressly supersede any prior written agreements with you. If you do not agree to these Terms, or comply with the requirements listed here, please do not use the Services.
            </p>
          </section>

          {/* ===== 1. SERVICES ===== */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Services</h2>
            <p>
              The “<strong>Services</strong>” include the provision of the Platform that enables you to arrange and schedule different services for housekeeping or non-housekeeping with independent third-party service providers of those services ("<strong>Experts</strong>").
            </p>
            <p className="mt-2">
              As a part of the Services, <strong>Servicecart</strong> only facilitates:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Users to connect with the Experts onboarded with <strong>Servicecart</strong> in order to avail <strong>Housekeeping Services</strong> or <strong>Non-housekeeping Services</strong> offered by the Experts, and</li>
              <li>The transfer of payments to Experts for the Services they render to you and collects payments on behalf of such Experts.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-4">1.1 Housekeeping Services</h3>
            <p>
              The services offered by Experts are referred to as "<strong>Housekeeping Services</strong>" which includes services such as:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>General cleaning of the premises: Sweeping, mopping, vacuuming floors, dusting, wiping furniture, shelves, and other surfaces, cleaning windows, mirrors, and glass surfaces as needed;</li>
              <li>Dishwashing utensils: Washing and drying utensils including plates, glasses, cutlery, cleaning kitchen sinks and organizing dish racks;</li>
              <li>Laundry assistance: Washing clothes manually or using washing machines, as per the Customer’s setup, folding and arranging clean laundry;</li>
              <li>Bathroom cleaning: scrubbing and disinfecting toilets, sinks, and shower, wiping mirrors and clearing cobwebs in bathroom spaces, mopping bathroom floors to ensure hygiene;</li>
              <li>Kitchen assistance: Light kitchen preparation tasks such as chopping vegetables or organizing pantry items, cleaning countertops, stoves, and kitchen appliances; or</li>
              <li>Any other services as may be listed on the Platform which Expert(s) are ready to provide.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-4">1.2 Non-housekeeping Services</h3>
            <p>
              The services offered by Experts are referred to as "<strong>Non-housekeeping Services</strong>" which includes services such as:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Packing and Moving Assistance;</li>
              <li>Business relation assistance for Solopreneurs / Home Businesses;</li>
              <li>Event organizing Assistance</li>
            </ul>

            <p className="mt-3">
              The term "Services" offered by the Company does <strong>not include</strong> the Housekeeping or Non-housekeeping Services. <strong>Servicecart</strong> does not provide the Housekeeping or Non-housekeeping Services and is not responsible for their provision. Experts are solely liable and responsible for the services they offer or otherwise provide through the Platform. <strong>Servicecart</strong> and its affiliates do not employ Experts, nor are Experts agents, contractors, or partners of <strong>Servicecart</strong> or its affiliates. Experts do not have the ability to bind or represent <strong>Servicecart</strong>.
            </p>

            <p className="mt-2">
              The Platform is for your personal use only, unless otherwise agreed upon in accordance with the terms of a separate agreement. Please note that the Platform is intended for use only within India. You agree that in the event you avail the Services or Housekeeping/Non-housekeeping Services from a legal jurisdiction other than the territory of India, you will be deemed to have accepted the <strong>Servicecart</strong> terms and conditions applicable to that jurisdiction.
            </p>

            <p className="mt-2">
              A key part of the Services is <strong>Servicecart's</strong> ability to send you text messages, electronic mails, or WhatsApp messages, including in connection with your bookings, your utilization of the Services, or as a part of its promotional and marketing strategies. While you may opt out of receiving these text messages by contacting <strong>Servicecart</strong> at <a href="mailto:wecare@myservicecart.com" className="text-blue-600 underline">wecare@myservicecart.com</a>, you agree and acknowledge that this may impact <strong>Servicecart's</strong> ability to provide the Services (or a part of the Services) to you.
            </p>

            <p className="mt-2">
              In certain instances, you may be required to furnish identification proof to avail the Services or the Housekeeping/Non-housekeeping Services and hereby agree to do so. A failure to comply with this request may result in your inability to use the Services.
            </p>

            <p className="mt-2">
              The Housekeeping/Non-housekeeping Services displayed on the Platform are dependent on the availability of Experts at the time of the booking.
            </p>

            <p className="mt-2">
              <strong>Servicecart</strong> is continuously evolving to enhance the user experience and improve its services. You acknowledge and agree that the nature and scope of services offered on the <strong>Servicecart</strong> platform may be subject to changes, updates, or modifications from time to time. Accordingly, <strong>Servicecart</strong> reserves the right to modify, suspend, cancel, or discontinue any or all of its services, features, or content at any time, without prior notice. Your continued use of the <strong>Servicecart</strong> platform following any such changes shall constitute your acceptance of the modified terms. <strong>Servicecart</strong> shall not be liable for any disruption, modification, or discontinuation of any services or features, whether temporary or permanent. <strong>Servicecart</strong> does not provide any guarantee that the Services will be made available to Users at all times.
            </p>
          </section>

          {/* ===== 2. SHARING DETAILS & ACCOUNT ===== */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">2. Sharing Details & Account Creation</h2>
            <p>
              To avail the Services, you will be required to furnish certain details, including but not limited to your name, e-mail address, phone number to register and create an Account on the Platform. To use our services and share your details you must be at least <strong>18 years of age</strong>. <strong>Servicecart</strong> reserves the right to refuse access to the Platform, at any time to new Users or to terminate or suspend access granted to existing Users at any time without any reasons for doing so.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-4">Account Creation and User Responsibilities</h3>
            <p>
              To access and use the <strong>Servicecart</strong> Platform, Users must register and create an account (“<strong>Account</strong>”) by providing accurate, complete, and up-to-date information as necessary. <strong>Servicecart</strong> reserves the right to verify the information provided and approve or reject account registrations at its sole discretion. Users are solely responsible for maintaining the confidentiality of their Account credentials and all activities conducted through their Account. <strong>Servicecart</strong> shall not be liable for any loss or damage arising from unauthorized access due to the User’s failure to secure their Account. If any information provided is found to be false, incomplete, or outdated, <strong>Servicecart</strong> may suspend or terminate the Account without prior notice. Users must immediately notify <strong>Servicecart</strong> of any unauthorized use or security breaches related to their Account.
            </p>

            <p className="mt-2">
              You warrant that all information furnished by you shall remain accurate and true. You agree to promptly update your details to us by emailing us at <a href="mailto:wecare@myservicecart.com" className="text-blue-600 underline">wecare@myservicecart.com</a>, or update the details on the Platform, in the event of any change to or modification of this information.
            </p>

            <p className="mt-2">
              You are liable and accountable for all activities that take place through your phone or contact number, including activities performed by persons other than you. We shall not be liable for any unauthorised access to your phone or contact number.
            </p>

            <p className="mt-2">
              You agree to receive communications from us regarding (i) requests for payments, (ii) information about us and the Services, (iii) promotional offers and services from us and our third-party partners, and (iv) any other matter in relation to the Services or your experience using the Services.
            </p>
          </section>

          {/* ===== 3. USER CONTENT ===== */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">3. User Content</h2>
            <p>
              Our Platform may contain interactive features or services that allow users who have created an Account with us to transmit, or submit reviews, suggestions, feedback, ideas, or other content on or through the Platform ("<strong>User Content</strong>").
            </p>
            <p className="mt-2">
              As part of the effective provision of the Services and quality control purposes, we may request reviews from you about Experts and you agree and acknowledge that Experts may provide reviews about you to us. You must not knowingly provide false, inaccurate, or misleading information in respect of the reviews. Reviews will be used by us for quality control purposes and to determine whether Customers and Experts are appropriate users of the Platform. If we determine at our sole discretion that you are not an appropriate User, we reserve the right to cancel your registration and remove you from our Platform.
            </p>
            <p className="mt-2">
              You grant us a non-exclusive, worldwide, perpetual, irrevocable, transferable, sublicensable, and royalty-free license to (i) use, publish, display, store, host, transfer, process, communicate, distribute, make available, modify, adapt, translate, and create derivative works of, the User Content, for the functioning of, and in connection with, the Services and (ii) use User Content for the limited purposes of advertising and promoting the Services, or furnishing evidence before a court or authority of competent jurisdiction under applicable laws.
            </p>
            <p className="mt-2">
              In connection with these Terms and the licenses granted under this clause, you hereby waive any claims arising out of any moral rights or other similar rights relating to the User Content.
            </p>
            <p className="mt-2">
              You agree and acknowledge that <strong>Servicecart</strong> may, without notice to you, remove, or otherwise restrict access to User Content that, in its sole discretion, violates these Terms.
            </p>
          </section>

          {/* ===== 4. CONSENT TO USE DATA ===== */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Consent to Use Data</h2>
            <p>
              You agree that we may use your data that has been shared with us at the time of registering yourself as a user on the <strong>Servicecart’s</strong> Platform.
            </p>
            <p className="mt-2">
              You hereby consent to us sharing your information with our affiliates or other third-party service providers. We may use information and data pertaining to your use of the Services for provision of the Services, analytics, trend identification, and purposes of statistics to further enhance the effectiveness and efficiency of our Services, and provision of beneficial schemes, new offers, and for experience enhancement.
            </p>
            <p className="mt-2">
              Subject to applicable laws, we may be directed by law enforcement agencies or the government and related bodies to disclose data in relation to you in connection with criminal or civil proceedings. You understand and agree that in such instances we shall have the right to share such data with relevant agencies or bodies.
            </p>
          </section>

          {/* ===== 5. OFFERS AND DISCOUNTS ===== */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Offers and Discounts</h2>
            <p>
              The provision of the trial, discounts or any other offer (“<strong>Offer(s)</strong>”) may be introduced by the Company at its sole discretion on the terms and conditions as may be communicated by the Company. If the Company provides any Offer(s) to You, then You shall be limited to using the Offer once per premises, unless specifically stated otherwise in the terms of the offer. It is hereby clarified that You cannot use multiple Offers together, and that Offers can only be utilized once per premises, determined by the address of the premises.
            </p>
            <p className="mt-2">
              The trial grants the customer access to services selected at the time of booking. The features available during the trial may be subject to limitations in comparison to the comprehensive, paid version.
            </p>
            <p className="mt-2">
              The Company retains the right to communicate with Customers regarding the Offers and subscription plans via call, SMS, email or a push notification.
            </p>
            <p className="mt-2">
              It is the Customer's responsibility to provide accurate and up-to-date information as may be sought by the Company in order to provide the Services.
            </p>
            <p className="mt-2">
              The Company may collect and use data generated during the Offer period for analysis and improvement of its Services.
            </p>
            <p className="mt-2">
              The Company reserves the right to terminate or modify the free trial proposition at its discretion, without notice.
            </p>
          </section>

          {/* ===== 6. BOOKINGS ===== */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Bookings</h2>
            <p>
              <strong>Orders</strong>: The Platform permits you to request various Housekeeping or Non-housekeeping Services at a time of your choosing based on available slots. To make a booking, you should follow the instructions on the Platform and provide necessary information. We use reasonable efforts to enable you to find an Expert who is able to provide that Service at the requested time. If, in the unlikely event we cannot find an Expert, for the specific time slot, we will contact you to find an alternative time to reschedule, or cancel the booking.
            </p>
            <p className="mt-2">
              <strong>Confirmation</strong>: Once you place a request, on a best effort basis subject to the availability of Experts, we will allocate an Expert and provide a booking confirmation on the Platform along with the details of the Experts (“<strong>Confirmation</strong>”). We may also provide confirmation of the booking via SMS, email or a push notification. You will be required to make the payment in accordance with these Terms or as indicated on the Platform to confirm your booking.
            </p>
            <p className="mt-2">
              <strong>Cancellations</strong>: Bookings that are cancelled before Confirmation on the Platform will not be charged. <strong>Servicecart's</strong> cancellation policy sets out applicable cancellation fees and by agreeing to the Terms, you hereby agree to the refund and cancellation policy terms as well.
            </p>
            <p className="mt-2">
              <strong>Substitution</strong>: In case of the unavailability of, or cancellation by a selected Expert, we will offer you a substitute of the Expert from among our registered Experts on best efforts basis. In the event that none of the Experts are available during the selected booking slot, we will contact you to find an alternative time to reschedule the booking, or cancel the booking.
            </p>
            <p className="mt-2">
              The booking shall remain in effect for the duration chosen by the user during the booking process.
            </p>
            <p className="mt-2">
              <strong>Extension</strong>: You may extend the duration of the Housekeeping Services booking slot at any time before the expiry of the booked period by 15 (fifteen) to 180 (one hundred and eighty) minutes, subject to: (i) the availability of the Expert to continue providing the Housekeeping Services, and (ii) the total duration of the job not exceeding 240 (two hundred forty) minutes. The Company does not guarantee the availability of an extension, nor does it assume any responsibility or liability for the Expert’s refusal, inability, or failure to extend the booking.
            </p>
            <p className="mt-2">
              <strong>Servicecart</strong> may collect and use location-based information from users through GPS or other technologies when they access the platform via a mobile device or computer. Such information may be used to enhance, optimize, and facilitate the services offered on the Platform. User acknowledges that if location-based data is not shared; then in such situation certain features of the Platform may not function and <strong>Servicecart</strong> may not be able to deliver on the Services.
            </p>
            <p className="mt-2">
              The Customer shall immediately update on the Platform if he/she avails <strong>Non-housekeeping Services</strong> from the Expert when the actual booking was for Housekeeping Services. The Customer agrees that he/she may incur additional cost which the Company may charge at its own discretion in the event it avails Non-housekeeping Services that may include applicable taxes.
            </p>
          </section>

          {/* ===== 7. PRICING, FEES, AND PAYMENT TERMS ===== */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">7. Pricing, Fees, and Payment Terms</h2>
            <p>
              <strong>Servicecart</strong> reserves the right to charge you for the different Services you may avail and/or for any other facilities you may opt for, from time to time, on or via the Platform.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-4">Charges and Fees</h3>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li><strong>Expert charges</strong> – Payable by users to the Experts; Company only collects on their behalf.</li>
              <li><strong>Technology fee</strong> – Payable to the Company for facilitation of supply.</li>
              <li><strong>Convenience Fee</strong> – May be collected at Company’s discretion.</li>
              <li><strong>Surge Fee</strong> – Levied to manage demand.</li>
              <li><strong>Taxes</strong> – Applicable as per law and services availed.</li>
            </ul>

            <p className="mt-3">
              Payments can be made via credit cards, debit cards, net banking, wallets, or UPI, cash, or any other method available in advance (as applicable) at the time of booking the slot. Cash on Delivery (COD) as a payment method shall be provided at the sole discretion of the Company.
            </p>

            <p className="mt-2">
              For the avoidance of doubt, please note that the Charges are payable to Experts, and <strong>Servicecart</strong> acts as a limited collection agent on behalf of such Experts to collect and transfer amounts due to them.
            </p>

            <p className="mt-2">
              <strong>Servicecart</strong> reserves the right to reasonably amend the Charges and Fees at any time at its sole discretion. Charges and Fees that you pay are final and non-refundable, unless otherwise determined by <strong>Servicecart</strong> or required by the applicable laws.
            </p>

            <p className="mt-2">
              You acknowledge and agree that Charges and Fees applicable in certain geographical areas may increase substantially during times of high demand. <strong>Servicecart</strong> will use reasonable efforts to inform you of the Charges and Fees that may apply including any surge fees including applicable taxes.
            </p>

            <p className="mt-2">
              In case user has booked for Housekeeping Services however has used Experts’ services for Non-housekeeping Services then the Company shall be entitled to recover additional applicable taxes or charges or fees separately or in next booking.
            </p>

            <p className="mt-2">
              We may use a third-party payment processor ("<strong>Payment Processor</strong>") to bill you through your selected mode of payment. The processing of payments will be subject to the terms and policies of such Payment Processor in addition to these Terms.
            </p>

            <p className="mt-2">
              <strong>Cancellation</strong>: You may elect to cancel your request for services from an Expert at any time prior to such Expert's arrival, in which case you may be charged a cancellation fee in accordance with <strong>Servicecart's</strong> cancellation policy.
            </p>

            <p className="mt-2">
              <strong>Servicecart</strong> currently facilitates on-demand, same-day, and advance booking (up to 4 days in advance) Housekeeping Services provided by the Expert. <strong>Servicecart</strong> may from time to time offer packages for Housekeeping Services (howsoever named) for monetary consideration.
            </p>

            <p className="mt-2">
              <strong>Servicecart</strong> does not designate any portion of your payment as a tip or gratuity to the Expert. Any additional incentive is voluntary.
            </p>
          </section>

          {/* ===== 8. CUSTOMER CONDUCT ===== */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">8. Customer Conduct</h2>
            <p>
              <strong>Servicecart</strong> prohibits discrimination against Experts, including on the basis of race, religion, caste, national origin, disability, sexual orientation, sex, marital status, gender identity, age, or any other characteristic that may be protected under applicable law.
            </p>
            <p className="mt-2">
              We request that you treat all Experts with courtesy and respect, and that you provide them with a safe, clean, and appropriate location to perform the Services. You shall also provide them with all necessary equipment and products.
            </p>
            <p className="mt-2">
              You agree that in the event an Expert behaves in a manner that is discourteous, disrespectful, abusive, inappropriate, or in violation of the law, you shall be required to report such incident to <a href="mailto:wecare@myservicecart.com" className="text-blue-600 underline">wecare@myservicecart.com</a> within 24 hours.
            </p>
          </section>

          {/* ===== 9. THIRD PARTY SERVICES ===== */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">9. Third Party Services</h2>
            <p>
              The Platform may include services, content, documents, and information owned by, licensed to, or otherwise made available by, a third party ("<strong>Third Party Services</strong>") and contain links to Third Party Services. You understand and acknowledge that Third Party Services are the sole responsibility of the third party that created or provided it and that use of such Third Party Services is solely at your own risk.
            </p>
          </section>

          {/* ===== 10. YOUR RESPONSIBILITIES ===== */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">10. Your Responsibilities</h2>
            <p>
              You represent and warrant that all information that you provide in relation to the Services is complete, true, and correct. Should any information change, you undertake to immediately bring such change to our notice.
            </p>
            <p className="mt-2">
              You shall not use the Services in any manner except as expressly permitted in these Terms. You shall not:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Host, display, upload, modify, publish, transmit, store, update or share any information that violates applicable law.</li>
              <li>Infringe any proprietary rights.</li>
              <li>Use the Services to transmit viruses or harmful code.</li>
              <li>Engage in systematic retrieval of content.</li>
              <li>Decompile, reverse engineer, or disassemble the Services.</li>
              <li>Impersonate any person.</li>
              <li>Violate applicable laws.</li>
            </ul>
            <p className="mt-2">
              You shall not directly or indirectly solicit, attempt to influence, engage, approach, or accept services from an Expert independently, without booking through your Account.
            </p>
          </section>

          {/* ===== 11. INTELLECTUAL PROPERTY ===== */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">11. Intellectual Property</h2>
            <p>
              All rights, titles, and interest in, and to the Services, including all intellectual property rights arising out of the Services, are owned by or otherwise licensed to us. Subject to compliance with these Terms, we grant you a non-exclusive, non-transferable, non-sub licensable, revocable, and limited license to use the Services in accordance with these Terms.
            </p>
          </section>

          {/* ===== 12. TERM AND TERMINATION ===== */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">12. Term and Termination</h2>
            <p>
              These Terms shall remain in effect unless terminated. We may restrict, deactivate, or terminate your access to, or use of, the Services, or any portion thereof, (i) immediately and at any('&') any point at our sole discretion, (A) if you violate or breach any of the obligations, responsibilities, or covenants under these Terms, or (ii) upon 7 days' prior written notice to you, or (iii) immediately for any legitimate business, legal, or regulatory reason.
            </p>
          </section>

          {/* ===== 13. DISCLAIMERS AND WARRANTIES ===== */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">13. Disclaimers and Warranties</h2>
            <p>
              The Services are provided on an "as is" basis without warranty of any kind. We make no warranty that the Services will meet your requirements or expectations.
            </p>
            <p className="mt-2">
              You agree and acknowledge that we are merely a Platform that connects you with Experts. We are not liable or responsible for fulfilment of any bookings, for the performance of the Services by any Expert, or for any acts or omissions of the Experts.
            </p>
            <p className="mt-2">
              To the fullest extent permissible by law, we disclaim all liability for any loss or damage arising out of, or due to your use of the Services.
            </p>
            <p className="mt-2">
              In no event shall <strong>Servicecart</strong>, its officers, directors, and employees, or its contractors, agents, licensors, partners, or suppliers, be liable to you for any direct, special, indirect, incidental, consequential, punitive, reliance, or exemplary damages. Our total liability shall be limited to the amount of commission we receive in respect of a particular booking made on the Platform. In no event shall our total liability to you in connection with these Terms exceed <strong>INR 10,000</strong>.
            </p>
          </section>

          {/* ===== 14. INDEMNITY ===== */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">14. Indemnity</h2>
            <p>
              You shall indemnify, defend at our option, and hold us, our parent companies, subsidiaries, affiliates, and our officers, employees, directors, agents, and representatives, harmless from and against any claim, demand, lawsuits, judicial proceeding, losses, liabilities, damages, and costs due to or arising out of your access to the Services, use of the Services, violation of these Terms, or any violation of these Terms by any third party who may use your Account.
            </p>
          </section>

          {/* ===== 15. JURISDICTION, GOVERNING LAWS, AND DISPUTE RESOLUTION ===== */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">15. Jurisdiction, Governing Laws, and Dispute Resolution</h2>
            <p>
              These Terms shall be governed by and construed and enforced in accordance with the laws of India. Subject to other provisions in this clause, courts in <strong>Mumbai, Maharashtra</strong> shall have exclusive jurisdiction over all issues arising out of these Terms or the use of the Services.
            </p>
            <p className="mt-2">
              Any controversies, conflicts, disputes, or differences, arising out of these Terms shall be resolved by arbitration in <strong>Mumbai, Maharashtra</strong> in accordance with the Arbitration and Conciliation Act, 1996. The tribunal shall consist of 1 (One) arbitrator appointed by <strong>Servicecart</strong>. The language of the arbitration shall be English.
            </p>
          </section>

          {/* ===== 16. GRIEVANCE REDRESSAL ===== */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">16. Grievance Redressal</h2>
            <p>
              You may also write to Us at <a href="mailto:wecare@myservicecart.com" className="text-blue-600 underline">wecare@myservicecart.com</a> and We will strive to resolve Your order related issues within the timelines prescribed under applicable laws.
            </p>
            <p className="mt-2">
              If You still have any grievances, or complaints or concerns with respect to the Platform or order or are not satisfied with the resolution, the Content, or the services, may contact us with any complaints, claims or queries relating to the Services or these Terms through email, details of which are provided below:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mt-3 text-sm">
              <p><strong>Name:</strong> Vikas Vilas Patil</p>
              <p><strong>Designation:</strong> Grievance Officer</p>
              <p><strong>Company:</strong> Xnotch Servicecart Pvt Ltd</p>
              <p><strong>Address:</strong> Lower Parel, Mumbai</p>
              <p><strong>Phone no:</strong> +91 9923931111</p>
              <p><strong>Email address:</strong> <a href="mailto:grievance@myservicecart.com" className="text-blue-600 underline">grievance@myservicecart.com</a></p>
              <p><strong>Time:</strong> Monday – Sunday, 10:00 a.m. – 6:00 p.m.</p>
            </div>
            <p className="mt-3 text-sm">
              The aforementioned details of the Grievance Officer & Nodal Officer is provided in compliance of (1) Information Technology Act, 2000 and rules made thereunder, and (2) Consumer Protection (E-Commerce) Rules 2020, as amended time to time.
            </p>
          </section>

          {/* ===== 17. MISCELLANEOUS PROVISIONS ===== */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">17. Miscellaneous Provisions</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Changes to Terms</strong>: The Terms are subject to revisions at any time. Continued use of the Platform constitutes acceptance of the updated Terms.</li>
              <li><strong>Modification to the Services</strong>: We reserve the right to add, modify, or discontinue the Services with or without cause.</li>
              <li><strong>Severability</strong>: If any provision is unlawful, the rest remains in effect.</li>
              <li><strong>Assignment</strong>: You may not assign your rights. We may assign without notice.</li>
              <li><strong>Notices</strong>: Send to <strong>legal@myservicecart.com</strong> or <strong>Lower Parel, Mumbai</strong>.</li>
              <li><strong>Force Majeure</strong>: We are not liable for delays beyond our control.</li>
            </ul>
          </section>

          {/* ===== 18. SUPPLEMENTAL TERMS FOR MBRB FACILITY ===== */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">18. Supplemental Terms for MBRB Facility</h2>
            <p>
              The Terms and Conditions laid down here shall be exclusively applicable for <strong>MBRB Facility</strong> and shall be read together with the existing Terms of Use and other policies as stated on our website <a href="https://myservicecart.com" className="text-blue-600 underline">https://myservicecart.com</a> or mobile applications <strong>‘Servicecart - Home Service Pro’</strong> ("Platform") and as applicable from time to time. <strong>Servicecart</strong>, is excited and pleased to announce its new endeavour in the form of "<strong>MBRB Facility</strong>". These supplemental/additional terms shall form an integral part of the Terms of Use.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-4">Multiple Booking Facility</h3>
            <p>
              Under the Multiple Booking Facility, <strong>Servicecart</strong> will facilitate multiple booking in advance for availing <strong>Housekeeping Services</strong> provided by the Expert.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-4">Recurring Booking Facility</h3>
            <p>
              Under the Recurring Booking Facility, <strong>Servicecart</strong> will facilitate recurring booking in advance for specific day(s) and time for availing <strong>Housekeeping Services</strong>.
            </p>

            <p className="mt-3">
              All queries with respect to the <strong>MBRB Facility</strong> shall be sent to <a href="mailto:wecare@myservicecart.com" className="text-blue-600 underline">wecare@myservicecart.com</a> with the subject line ‘<strong>MBRB Facility</strong>’.
            </p>
          </section>

          {/* ===== 19. CONTACT US ===== */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">19. Contact Us</h2>
            <p>
              For any queries, write to: <br />
              <strong>Email:</strong> <a href="mailto:wecare@myservicecart.com" className="text-blue-600 underline">wecare@myservicecart.com</a> <br />
              <strong>Address:</strong> Lower Parel, Mumbai, Maharashtra
            </p>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditions

