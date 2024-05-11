import React from "react";
import Accordion from "../Accordion/Accordion";
import './FAQ.css'

const FAQ = () => {
  return (
    <div className="faq-container">
      <Accordion
        title="What is Bitcoin?"
        answer="Bitcoin is a digital currency that operates on a peer-to-peer network, which means it's not controlled by any central authority. Users can send and receive Bitcoin directly, without intermediaries, making it a fast and low-cost way to transfer value. As one of the world's most popular crypto exchange platforms, United makes it easy to buy and sell Bitcoin and hundreds of other cryptocurrencies."
      />
      <Accordion
        title="Is United a safe cryptocurrency exchange?"
        answer="United is committed to providing a safe and trustworthy trading platform and boasts one of the most sophisticated security technologies and maintenance teams in the world, including a dedicated security team that constantly works to keep your assets and account secure alongside independently-verified Proof of Reserves that verifies all user assets are backed on a 1:1 basis."
      />
      <Accordion 
        title="Can I start trading with just $1" 
        answer="United offers a variety of trading and investment options that allow you to buy and sell crypto with as little as $1. With products like zero-fee conversion, spot trading, margin trading, and futures trading, you can try out different strategies and build your skills on United without worrying about entry costs." 
      />
      <Accordion 
        title="Is there an exchange limit between fiat and crypto" 
        answer=" With United, you can exchange between fiat and cryptocurrencies without restrictions, making trading your assets easier than ever. With support for over 20 fiat currencies. United offers a seamless exchange experience for all users." 
      />
    </div>
  );
};

export default FAQ;