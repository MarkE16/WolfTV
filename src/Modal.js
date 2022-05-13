import React from 'react';
import './App.css';

function Modal({ member, setOpen }) {
  return (
    <div className='darkBG' onClick={() => setOpen(false)}>
      <div className='modal'>

      </div>
    </div>
  )
}

export default Modal;