import React from 'react'
import './Terms.css'

const Terms = ({ close }) => {
  return (
    <div className="terms-modal">
      <button className="terms-close" onClick={close}>
        <span>&times;</span>
      </button>
      <h2 className="terms-header">Terms & conditions:</h2>
      <p className="terms-content">
        Trading with United by following and/or copying or replicating the trades of other traders involves a high level of risk, even when following and/or copying or replicating the top-performing traders. Such risks include the risk that you may be following/copying the trading decisions of possibly inexperienced/unprofessional traders, or traders whose ultimate purpose or intention, or financial status may differ from yours. United does not approve or endorse any of the trading accounts customers may choose to copy. All instructions and actions related to copied trades will automatically be replicated in your account, including stop losses, take profits and the closing of trades. When you select to copy a particular trading account, you will copy all of their future trades, and you may also select to follow their existing trades. United is not liable for the decisions or actions taken by any trader you choose to copy. United may compensate popular United traders whom you or others decide to copy. Past performance of an United Community Member is not a reliable indicator of their future performance.
      </p>
    </div>
  );
}

export default Terms