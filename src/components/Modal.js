import React, { useState } from 'react';
import "../App.css";
import Button from 'react-bootstrap/Button';
import { RiCloseLine } from 'react-icons/ri';
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import Loading from "./Loading";

function Modal({ member, setOpen }) {
  const [loadingImg, setLoadingImg] = useState(false);
  const images = member[Object.keys(member)[0]][0];
  const [currentIndex, setCurrentIndex] = useState(0);
  const memberRole = member[Object.keys(member)[0]][1];
  const memberDescription = member[Object.keys(member)[0]][2];
  const memberName = Object.keys(member)[0].charAt(0).toUpperCase() + Object.keys(member)[0].slice(1);

  

  return (
    <div className='darkBG' onClick={() => setOpen(false)}>
      <div className='modal' onClick={e => e.stopPropagation()}>
        <div className='modal-header'>
          <h5 className='heading'>{memberName}</h5>
          <Button title="Close this window" className='x-btn' onClick={() => setOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-7px" }} />
          </Button>
        </div>
        <div className='modal-img'>
          {
            loadingImg ? <Loading /> :
              (
                <img
                  title={`${memberName}'s image`}
                  alt="Rendering..."
                  style={{ borderRadius: 5, borderColor: "black"}}
                  src={require(`../assets/crew_imgs/${images[currentIndex].slice(24)}`)}
                />
              )
          }
          <button disabled={currentIndex === 0}
                  title="Previous Image"
                  className="modal-arrow left"
                  onClick={() => {
                    setLoadingImg(true);
                    setCurrentIndex(prev => prev - 1);
                    setLoadingImg(false);
                  }}>
            <BsArrowLeftCircle />
          </button>
          <button disabled={currentIndex === (images.length - 1)}
                  title="Next Image"
                  className="modal-arrow right"
                  onClick={() => {
                    setLoadingImg(true);
                    setCurrentIndex(prev => prev + 1)
                    setLoadingImg(false);
                  }}>
            <BsArrowRightCircle  />
          </button>
        </div>
        <div className='modal-content'>
          <h5 className='modal-role'>Role(s): {memberRole}</h5>
          <div style={{ overflowY: "scroll", position: "absolute", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", top: "6vh" }}>
            <p className='modal-description'>{memberDescription}</p>
          </div>
        </div>
        <div className='modal-footer'>
          <Button className='button' onClick={() => setOpen(false)}>OK</Button>
        </div>
      </div>
    </div>
  )
}

export default Modal;