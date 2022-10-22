import React, { useEffect, useState, useContext } from 'react';
import Modal from './Modal';
import { ModalContext } from "./ModalCxt";
import Loading from './Loading';
import "../App.css";

function MemberImg({ member, selectedMemberName, setSelectedMemberName }) {
  const { modalOpen, setModalOpen } = useContext(ModalContext);
  const [img, setImg] = useState("");
  const memberImgFileName = member[Object.keys(member)[0]][0][0].slice(24);
  const memberName = Object.keys(member)[0].charAt(0).toUpperCase() + Object.keys(member)[0].slice(1);
  // const chosenMemberName = selectedMemberName != null ? Object.keys(selectedMemberName)[0].charAt(0).toUpperCase() + Object.keys(selectedMemberName)[0].slice(1) : "";

  useEffect(() => {
    if (modalOpen) {
      document.querySelector("html").style.overflow = "hidden";
    } else {
      document.querySelector("html").style.overflow = "auto";
    }
  }, [modalOpen])


  return (
    <div>
      <div className='member' title={memberName} onClick={() => {
        setModalOpen(true);
        setSelectedMemberName(member)
        }}>
        <div>
          <img
            src={require(`../assets/crew_imgs/${memberImgFileName}`)}
            loading="lazy"
            alt='Rendering...'
            className='member-img'
          />
        </div>
        <p className='member-name'>{memberName}</p>
      </div>
      {modalOpen && selectedMemberName === member && <Modal member={member} setOpen={setModalOpen} setChosenMemberName={setSelectedMemberName} />}
    </div>
  )
}

export default MemberImg;