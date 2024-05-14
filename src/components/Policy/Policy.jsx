import React from 'react'

const Policy = ({ close }) => {
  return (
    <div className="terms-modal terms-modal-policy">
      <button className="terms-close" onClick={close}>
        <span>&times;</span>
      </button>
      <h2 className="terms-header">Privacy Policy:</h2>
      <p className="terms-content">
        Welcome to United ("United", "we", "us", or "our"). United provides a digital platform for cryptocurrency trading and copy trading features. This Privacy Policy explains how we collect, use, disclose, and protect information that applies to our service, and your choices about the collection and use of your information.<br/>
        <br/>1. Information We Collect<br/>
        <br/>a. Personal Information:<br/>
        <br/>Registration Information: When you sign up for an account, we collect your name, email address, telephone number, and payment information.<br/>
        Identity Verification: We may require documentation (such as a driver’s license, passport, or national ID) to verify your identity and comply with regulatory requirements.
        <br/><br/>b. Financial Information:<br/>
        <br/>Details of transactions you carry out through our service, including cryptocurrency trades and copy trading activities.<br/>
        <br/>c. Technical and Log Information:<br/>
        <br/>Information about your interaction with our services, including your IP address, device information, browser type, and other information collected through cookies and similar technologies.<br/>
        <br/>2. How We Use Your Information<br/>
        <br/>We use the information we collect to:<br/>
        Operate, maintain, and improve our services.
        Process transactions and send notices about your transactions.
        Provide customer service, including responding to your inquiries and repairing system problems.<br/>
        Prevent potential fraud and enforce our terms and conditions.
        Communicate with you about promotions, updates, and other news about products and services offered by United and our selected partners.
        <br/><br/>3. How We Share Information<br/>
        <br/>a. With third parties:<br/>
        <br/>We may share your information with third-party business partners for the purpose of providing the service to you. Our third-party business partners include database managers, cloud computing services, advertising agencies, and analytics providers.
        We may also share your information with law enforcement, government officials, or other third parties as required by law.
        <br/><br/>b. Copy Trading Features:<br/>
        <br/>Your trading strategies and performance metrics may be shared publicly with other users to facilitate the copy trading feature.<br/>
        <br/>4. How We Protect Your Information<br/>
        <br/>United implements robust security measures to ensure the confidentiality of your information. Despite our efforts, no security measures are completely secure, and we cannot guarantee the absolute security of your information.<br/>
        <br/>5. Your Rights<br/>
        <br/>You have the right to access and update your personal information or to request deletion of your information, subject to certain exceptions dictated by law. You can typically manage your information through your account settings.<br/>
        <br/>6. International Transfer<br/>
        <br/>Your information may be transferred to, and maintained on, computers located outside of your state, province, country, or other governmental jurisdiction where the privacy laws may not be as protective as those in your jurisdiction.<br/>
        <br/>7. Changes to This Policy<br/>
        <br/>We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page. You are advised to review this privacy policy periodically for any changes.
      </p>
    </div>
  )
}

export default Policy