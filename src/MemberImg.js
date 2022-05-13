import React from 'react';
import Modal from './Modal';
import './App.css';

function MemberImg({ member, modalOpen, setModalOpen, selectedMemberName, setSelectedMemberName }) {
  const memberImg = member[Object.keys(member)[0]];
  const memberName = Object.keys(member)[0].charAt(0).toUpperCase() + Object.keys(member)[0].slice(1);
  return (
    <div className='member' onClick={() => {
      setModalOpen(true);
      setSelectedMemberName(memberName)
      }}>
      <div className='member-img'>
        <img src={memberImg} style={{ width: 200, height: 200, borderRadius: 5 }}/>
      </div>
      <p className='member-name'>{memberName}</p>
      {modalOpen && selectedMemberName === memberName && <Modal member={member} isOpen={setModalOpen}/>}
    </div>
  )
}

export default MemberImg;