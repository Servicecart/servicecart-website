import Header from '../components/Header'
import Footer from '../components/Footer'


const RefundAndCancellation = () => { return (
  <div className="min-h-screen bg-white">
    <Header />
    <main className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Cancellation and Refund Policy
      </h1>
      <p className="text-sm text-gray-500 mb-8">
        Last updated: {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
      </p>

      <div className="prose prose-lg max-w-none text-gray-700 space-y-10">

        {/* ===== WARNING ===== */}
        <section className="bg-red-50 border border-red-200 rounded-lg p-6 mb-10">
          <p className="font-bold text-red-800 text-center">
            PLEASE READ THESE CANCELLATION AND REFUND TERMS CAREFULLY. BY SUBSCRIBING TO THE SERVICES THROUGH THE PLATFORM, YOU AGREE TO BE BOUND BY ALL OF THE BELOW CANCELLATION AND REFUND TERMS.
          </p>
        </section>

        {/* ===== INTRODUCTION ===== */}
        <section>
          <p>
            This website (<strong><a href="https://myservicecart.com" className="text-blue-600 underline">https://myservicecart.com</a></strong>) under the name and style <strong>‘Servicecart’</strong> (the <strong>“Platform”</strong>) is owned, operated and made available by <strong>Xnotch Servicecart Pvt Ltd</strong>, having <strong>CIN U96908PN2024PTC234335</strong>, with its office at <strong>Lower Parel, Mumbai, Maharashtra - 400013</strong> (hereinafter, referred to as <strong>“Company”</strong>, <strong>“we”</strong>, <strong>“us”</strong> and/or <strong>“our”</strong>, each of which term shall include our assignees and/or successors-in-interest).
          </p>
          <p className="mt-2">
            This is a legal agreement between you (the person using, accessing, or availing the Services (defined below) and hereinafter, referred to as <strong>“you”</strong> or <strong>“User”</strong> as per the context) and us. It also forms an integral part of <strong>Terms of Use</strong> and by accepting the Terms of Use, the terms and conditions as mentioned in this <strong>Cancellation and Refund Policy</strong> are deemed to be accepted and agreed upon by the User in its entirety.
          </p>
          <p className="mt-2">
            Please read this Cancellation and Refund Policy carefully before availing our Services through the Platform and making payment of the <strong>Fee</strong> (defined below). This Cancellation and Refund Policy has been made available on the Platform and is applicable in the event of you choosing to avail the Services and making payment of the Fee for the same.
          </p>
          <p className="mt-2">
            We request you to also go through the <strong>Privacy Policy</strong> available at <a href="https://myservicecart.com/legal/privacy-policy" className="text-blue-600 underline">https://myservicecart.com/legal/privacy-policy</a> and the <strong>Terms of Use</strong> available at <a href="https://myservicecart.com/legal/terms-and-conditions" className="text-blue-600 underline">https://myservicecart.com/legal/terms-and-conditions</a> carefully before you decide to avail the Services and make payment of the Fee.
          </p>
          <p className="mt-2">
            This Cancellation and Refund Policy, the Privacy Policy and the Terms of Use (together <strong>“Agreement”</strong>) together constitute a legal agreement between you and Company. All capitalized terms used in this Cancellation and Refund Policy and not specifically defined herein shall have the meaning ascribed to such terms in the <strong>Terms of Use</strong>.
          </p>
        </section>

        {/* ===== 1. APPLICABILITY AND AMENDMENT ===== */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Applicability and Amendment</h2>
          <p>
            <strong>1.1</strong> The Company, through the Platform, facilitates provision of <strong>Housekeeping and Non-Housekeeping Services</strong>, including <strong>Multiple Booking and Recurring Booking Facility (“MBRB Facility”)</strong>, through a dense hyperlocal network of <strong>Experts</strong>, trained & verified by them on a best effort basis, for the Customers, on an on-demand basis (<strong>“Services”</strong>), for <strong>Fees</strong> (as defined in the Terms of Use).
          </p>
          <p className="mt-2">
            This Cancellation and Refund Policy is applicable to any <strong>Fee</strong> paid or payable by you for availing the Services offered by the <strong>Expert</strong> and/or the <strong>Company</strong>, as the case may be. Your payment of the <strong>Fee</strong> signifies your acceptance of the <strong>Agreement</strong> and your consent to be legally bound by the same. If you do not agree to be bound by the terms of the Agreement, you should not make payment of the Fee or avail Services.
          </p>
          <p className="mt-2">
            <strong>1.2</strong> By initiating a request for the booking of Services through the Platform, you agree to be bound by the terms in this Cancellation and Refund Policy. If you do not agree with the terms of this Cancellation and Refund Policy, you are advised not to go ahead with the booking of the Services through the Platform.
          </p>
          <p className="mt-2">
            <strong>1.3</strong> We reserve the right to modify, alter, or amend this Cancellation and Refund Policy, for any reason, and your continued availment of the Services will be deemed as your acceptance of such amendment. To make sure you are aware of any such changes, please review this Cancellation and Refund Policy periodically.
          </p>
          <p className="mt-2">
            <strong>1.4</strong> In case of any inconsistencies or conflicts between the <strong>Terms of Use</strong> and this Cancellation and Refund Policy, this Cancellation and Refund Policy shall prevail to the extent of such inconsistencies or conflict and the Company's decision in relation to such conflict, dispute or inconsistency.
          </p>
        </section>

        {/* ===== 2. TERMS OF CANCELLATION ===== */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">2. Terms of Cancellation</h2>
          <p>
            <strong>2.1</strong> You may cancel or reschedule any booking made for the availment of the Services, via the Platform, <strong>30 (thirty) minutes prior</strong> to the allotted time slot for such booking (<strong>“No-Cost Cancellation Period”</strong>). Any booking, prior to No-Cost Cancellation Period, can be rescheduled to another available slot on the same day or the next day only.
          </p>
          <p className="mt-2">
            <strong>2.2</strong> You may cancel or reschedule any booking made for the availment of the Services if such request is initiated on the Platform during the No-Cost Cancellation Period i.e. within <strong>30 (thirty) minutes prior</strong> to the allotted time slot for such booking and you shall be charged with a cancellation fee of <strong>100% (One Hundred Percent)</strong> of the Fee, at our sole discretion, shall be applicable. Upon expiry of the No-Cost Cancellation Period or You fail to avail the Services at allotted time slot for such booking due to reasons directly or indirectly attributable to You, the booking would be considered as cancelled and shall be subject to a cancellation fee of <strong>100% (One Hundred Percent)</strong> of the Fee.
          </p>
          <p className="mt-2">
            <strong>2.3</strong> On receipt of a cancellation request in accordance with Clause 2.1 above, we will co-ordinate to process the same and either, at your request: (i) initiate a refund of the Fee paid by you, for this we may provide you an option to choose either <strong>Servicecart wallet</strong> or the source account; or (ii) book another slot for the same Services as that of the cancelled booking at a later point.
          </p>
          <p className="mt-2">
            Please note that the Fee refund in accordance with Clause 2.3(i) will be provided only in case a Customer is not acceptable to reschedule the booking for a later slot. For the purpose of <strong>MBRB Facility</strong>, the rescheduling request in accordance with Clause 2.1 shall only be available <strong>twice per slot</strong> under a MBRB order. Any rescheduling request raised by Customer, over and above the above threshold of twice per slot under a MBRB order, shall be treated in accordance with clause 2.2 and accordingly, be subject to a cancellation fee of <strong>100% (One Hundred Percent)</strong> of the Fee, at our sole discretion, paid for such a slot under a MBRB order.
          </p>
          <p className="mt-2">
            <strong>2.4</strong> In a case where a Customer opts to make payment of the Fee in cash, and cancels the booking after the <strong>Expert has arrived</strong> at his/her premises or cancels the booking after the No-Cost Cancellation Period, and does not make payment of the Fee, cancellation charges of <strong>100% (One Hundred Percent)</strong> of the Fee payable, will be applicable and charged at the time of next booking made by such Customer.
          </p>
          <p className="mt-2">
            <strong>2.5</strong> The Company reserves the right to cancel the booking in the following circumstances:
          </p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>(a) there is a booking without address;</li>
            <li>(b) the booking is made by a competitor or its affiliate, as determined by <strong>Servicecart</strong> in its sole opinion;</li>
            <li>(c) you call us to cancel the booking but subject to other terms and conditions;</li>
            <li>(d) you are not reachable within <strong>15 (fifteen) minutes</strong> of the slot or the Expert has waited outside the provided location for <strong>15 (fifteen) minutes</strong> without any response from you;</li>
            <li>(e) <strong>Servicecart</strong> is unable to service the booking due to supply shortages or the unavailability of an Expert, in which case <strong>Servicecart</strong> may offer a refund or reschedule the booking at its discretion;</li>
            <li>(f) if the transaction cannot be completed for reasons not in control of <strong>Servicecart</strong>.</li>
          </ul>
          <p className="mt-2">
            <strong>2.6</strong> You shall be charged with <strong>100% (One Hundred Percent)</strong> cancellation fees by the Company for the scenarios listed in clause 2.5 (a) to (d) above. In the event of scenario as provided in clause 2.5 (e) or (f), the Company may offer a refund, at its sole discretion, subject to other terms of Cancellation and Refund Policy or reschedule the booking at its own discretion.
          </p>
        </section>

        {/* ===== 3. TERMS OF REFUND ===== */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Terms of Refund</h2>
          <p>
            <strong>3.1</strong> Subject to any other terms provided under this Cancellation and Refund Policy, the <strong>Fee</strong> paid by you for any of the Services availed through the Platform is <strong>non-refundable</strong>, unless otherwise provided for under this Cancellation and Refund Policy.
          </p>
          <p className="mt-2">
            <strong>3.2</strong> A refund request shall be raised within <strong>3 (three) hours</strong> from the end of booking slot (including for a slot booked under a MBRB order). You understand that a refund request shall only be raised in case of deficiency in service relation to:
          </p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>(i) complete failure to deliver the Service whether due to no-show or other reasons;</li>
            <li>(ii) late show by the Expert and such delay has a demonstrable adverse impact on the quality or feasibility of the service, only in cases where the Expert has shown up at the designated address <strong>later than 30 (thirty) minutes</strong> after the allotted time slot, provided that the address provided to us was accurate and/or all necessary instructions to detect the said address were provided at the time of booking;</li>
            <li>(iii) your dissatisfaction with the services provided by the Expert allotted, where such dissatisfaction is directly attributable to a demonstrable error, omission, or deficiency in service delivery by the Expert, in the Company's opinion, caused by Expert error or deficiency;</li>
          </ul>
          <p className="mt-2">
            Refund requests made by you will be processed, subject to the terms of this Cancellation and Refund Policy. It is clarified that any refund processed against a slot under a <strong>MBRB order</strong>, will be specific to such slot and will not arise an entitlement or right to the Customer to seek refund against the entire MBRB order. Refund against an entire MBRB order will only be provided in accordance with clause 2.1.
          </p>
          <p className="mt-2">
            <strong>3.3</strong> The Company will not issue any refunds for any <strong>wallet recharges</strong>, or for payments made to avail any <strong>coupons, discounts, bundles, offers or membership programs</strong> offered by or through the Platform.
          </p>
          <p className="mt-2">
            <strong>3.4</strong> In addition to a refund in case of cancellation in accordance with Clause 2 above, you will be eligible for a refund of either a partial or a full amount of the Fee paid only on account of reasons specified in the Clause 3.2 or any <strong>extra/double payment</strong> of the Fee by you, as evidenced by Company's records. You hereby acknowledge that the maximum liability of the Company towards refunds payable to you shall be limited upto <strong>Fee amount payable by you</strong>.
          </p>
          <p className="mt-2">
            <strong>3.5</strong> In case you initiate a request for refund due to reasons mentioned at Clause 3.2, we will on a purely discretionary basis, either offer a <strong>free or heavily discounted Service</strong> to you or process refund of either the full or a partial amount of the Fee paid by you, as the case may be. If any amount paid by you is fully or partially refundable for any reason, such amounts will be refunded to you by the Company to the <strong>same account from which the payment was made</strong> or to <strong>Servicecart wallet</strong>, at your option.
          </p>
          <p className="mt-2">
            <strong>3.6</strong> We may use a third-party payment aggregator for the purpose of refund and cancellation charges as applicable pursuant to this Cancellation and Refund Policy. Any refund amount payable to you in accordance with this Cancellation and Refund Policy, shall be credited to your source account or <strong>Servicecart wallet</strong>, within <strong>7 (seven) business days</strong>. You understand and agree that we will not be responsible or liable in any manner whatsoever for non-receipt of the refund amount in case of incorrect source account details provided by you or due to any error at the payment aggregator's end or bank's end while processing your refund amount.
          </p>
        </section>

        {/* ===== 4. CUSTOMER SUPPORT TEAM ===== */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Customer Support Team</h2>
          <p>
            If you have any grievance or discrepancy with respect to refund of Fee for any Service availed through the Platform, you can contact the <strong>Grievance Officer</strong> mentioned under the <strong>Terms of Use</strong> of the Platform.
          </p>
        </section>

        {/* ===== 5. ELECTRONIC RECORD ===== */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Electronic Record</h2>
          <p>
            This document is an <strong>electronic record</strong> in terms of <strong>Information Technology Act, 2000</strong> and rules thereunder as applicable and the provisions pertaining to electronic records in various statutes as amended by the Information Technology Act, 2000. This electronic record is generated by a computer system and <strong>does not require any physical or digital signatures</strong>.
          </p>
          <p className="mt-2 font-bold">
            PLEASE ENSURE THAT YOU READ AND UNDERSTAND THIS POLICY BEFORE YOU USE THE SERVICE OF THE PLATFORM, AS YOU SHALL BE BOUND BY ALL THE CONDITIONS CONTAINED HEREIN UPON CLICKING ON THE “I ACCEPT” BUTTON.
          </p>
          <p className="mt-2">
            IF YOU DO NOT ACCEPT ANY OF THE TERMS UNDER THE TERMS OF USE OR ANY POLICY LISTED ON COMPANY’S WEBSITE OR PLATFORM, PLEASE DO NOT USE THE PLATFORM OR AVAIL ANY OF THE SERVICES BEING PROVIDED THEREIN. YOUR CONSENT SHALL OPERATE AS A BINDING AGREEMENT BETWEEN YOU AND THE COMPANY IN RESPECT OF YOUR USAGE OF THE PLATFORM.
          </p>
        </section>

        {/* ===== FINAL STATEMENT ===== */}
        <section className="bg-blue-50 p-6 rounded-lg mt-10">
          <p className="font-bold text-center text-blue-900">
            YOU HAVE READ THIS CANCELLATION AND REFUND POLICY AND AGREE TO ALL OF THE PROVISIONS CONTAINED ABOVE.
          </p>
        </section>

      </div>
    </main>
    <Footer />
  </div>
);
};


export default RefundAndCancellation

