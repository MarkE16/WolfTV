import React, { useEffect, useState } from 'react';
import Modal from './Modal';
import Loading from './Loading';
import "../App.css";

function MemberImg({ member, modalOpen, setModalOpen, selectedMemberName, setSelectedMemberName }) {
  const [loadingImg, setLoadingImg] = useState(false);
  const [img, setImg] = useState(null);
  const memberImgFileName = member[Object.keys(member)[0]][0][0].slice(24);
  const memberName = Object.keys(member)[0].charAt(0).toUpperCase() + Object.keys(member)[0].slice(1);
  console.log(memberImgFileName);


  useEffect(() => {
    setImg(require(`../assets/crew_imgs/${memberImgFileName}`));

  }, [])

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
        setSelectedMemberName(memberName)
        }}>
        <div>
          {
            loadingImg ? <Loading /> :
              (
                <img
                  src={img}
                  loading="lazy"
                  alt='Rendering...'
                  className='member-img'
                />
              )
          }
        </div>
        <p className='member-name'>{memberName}</p>
      </div>
      {modalOpen && selectedMemberName === memberName && <Modal member={member} setOpen={setModalOpen} />}
    </div>
  )
}

export default MemberImg;