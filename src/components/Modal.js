import React, { useState, useEffect } from 'react';
import "../App.css";
import { RiCloseLine } from 'react-icons/ri';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import Loading from "./Loading";

function Modal({ member, setOpen }) {
  const [loadingImg, setLoadingImg] = useState(false);
  const images = member[Object.keys(member)[0]][0];
  const [currentIndex, setCurrentIndex] = useState(0);
  const memberRole = member[Object.keys(member)[0]][1];
  const memberDescription = member[Object.keys(member)[0]][2];
  const memberName = Object.keys(member)[0].charAt(0).toUpperCase() + Object.keys(member)[0].slice(1);

  // useEffect(() => {
  //   document.querySelector("html").style.overflow = "hidden";
  // }, [])

  useEffect(() => {
    document.querySelector("img").addEventListener("load", () => {
      setLoadingImg(false);
    })
  }, [currentIndex])

  const changeImg = index => {
    setLoadingImg(true);
    setCurrentIndex(index);
    setLoadingImg(false);
  }

  return (
    <div className='darkBG' onClick={() => setOpen(false)}>
      <div className='modal' onClick={e => e.stopPropagation()}>
        <div className='modal-header'>
          <h5 className='heading'>{memberName}</h5>
          <button title="Close this window" className='x-btn' onClick={() => setOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-7px" }} />
          </button>
        </div>
        <p style={{ fontSize: "1em", position: "fixed", left: 0, right: 0, top: "9%" }}>Image {currentIndex + 1} of {images.length}</p>
        <div className='modal-img'>
          {
            loadingImg ? <Loading /> :
              <img
                title={`${memberName}'s image`}
                alt={`${memberName}'s image`}
                style={{ borderRadius: 5, borderColor: "black" }}
                srcSet={require(`../assets/crew_imgs/${images[currentIndex].slice(24)}`)}
                loading="lazy"
              />
          }
          <button disabled={currentIndex === 0}
                  title="Previous Image"
                  className="modal-arrow left"
                  onClick={() => changeImg(currentIndex - 1)}>
            <MdOutlineArrowBackIos />
          </button>
          <button disabled={currentIndex === (images.length - 1)}
                  title="Next Image"
                  className="modal-arrow right"
                  onClick={() => changeImg(currentIndex + 1)}>
            <MdOutlineArrowForwardIos  />
          </button>
        </div>
        <div className='modal-content'>
          <h5 className='modal-role'>Role(s): {memberRole}</h5>
          <div style={{ overflowY: "scroll", position: "absolute", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", top: "6vh" }}>
            <p className='modal-description'>{memberDescription}</p>
          </div>
        </div>
        <div className='modal-footer'>
          <button className='button' onClick={() => setOpen(false)}>OK</button>
        </div>
      </div>
    </div>
  )
}

export default Modal;