import React from 'react';
import Modal from './Modal';
import './App.css';

function MemberImg({ member, modalOpen, setModalOpen, selectedMemberName, setSelectedMemberName }) {
  const memberImgFileName = member[Object.keys(member)[0]][0].slice(24);
  const memberName = Object.keys(member)[0].charAt(0).toUpperCase() + Object.keys(member)[0].slice(1);
  return (
    <div>
      <div className='member' onClick={() => {
        setModalOpen(true);
        setSelectedMemberName(memberName)
        }}>
        <div className='member-img'>
          <img src={require(`../src/assets/crew_imgs/${memberImgFileName}`)} style={{ transform: "scale(1.2)", height: 175, borderRadius: 5, borderColor: "black" }}/>
        </div>
        <p className='member-name'>{memberName}</p>
      </div>
      {modalOpen && selectedMemberName === memberName && <Modal member={member} setOpen={setModalOpen} />}
    </div>
  )
}

export default MemberImg;