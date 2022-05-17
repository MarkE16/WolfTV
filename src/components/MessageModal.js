import React from 'react';
import "../App.css";
import Button from 'react-bootstrap/Button';

function MessageModal({ setMsgModalOpen, msg, title }) {
  return (
    <div className='darkBG'>
      <div className='msgModal'>
        <div className='modal-header'>
          <h5 className='heading'>{title}</h5>
        </div>
        <div>
          <p className='msgDescription'>{msg}</p>
          <Button className='button' onClick={() => setMsgModalOpen(false)}>OK</Button>
        </div>
      </div>
    </div>
  )
}

export default MessageModal;