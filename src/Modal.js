import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import { RiCloseLine } from 'react-icons/ri';

function Modal({ member, setOpen }) {
  const memberImgFileName = member[Object.keys(member)[0]][0].slice(24);
  const memberRole = member[Object.keys(member)[0]][1];
  const memberDescription = member[Object.keys(member)[0]][2];
  const memberName = Object.keys(member)[0].charAt(0).toUpperCase() + Object.keys(member)[0].slice(1);

  return (
    <div className='darkBG' onClick={() => setOpen(false)}>
      <div className='modal' onClick={e => e.stopPropagation()}>
        <div className='modal-header'>
          <h5 className='heading'>{memberName}</h5>
          <Button className='x-btn' onClick={() => setOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-7px" }} />
          </Button>
        </div>
        <div className='modal-img'>
          <img style={{ borderRadius: 5, borderColor: "black"}} src={require(`../src/assets/crew_imgs/${memberImgFileName}`)} />
        </div>
        <div className='modal-content'>
          <h5>Role(s): {memberRole}</h5>
          <p className='modal-description'>{memberDescription}</p>
        </div>
        <Button className='button' onClick={() => setOpen(false)}>OK</Button>
      </div>
    </div>
  )
}

export default Modal;