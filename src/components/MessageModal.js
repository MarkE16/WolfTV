import React from 'react';
import "../App.css";

function MessageModal({ setMsgModalOpen, msg, title }) {
  return (
    <div className='darkBG'>
      <div className='msgModal'>
        <div className='modal-header'>
          <h5 className='heading'>{title}</h5>
        </div>
        <div>
          <p className='msgDescription'>{msg}</p>
        </div>
        <button className='button' onClick={() => setMsgModalOpen(false)}>OK</button>
      </div>
    </div>
  )
}

export default MessageModal;