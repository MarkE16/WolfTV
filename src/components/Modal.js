import React, { useState, useEffect } from 'react';
import "../App.css";
import { RiCloseLine } from 'react-icons/ri';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import Loading from "./Loading";

function Modal({ member, setOpen, setChosenMemberName }) {
  const [loadingImg, setLoadingImg] = useState(false);
  const crew = require("../data/crew.json");
  const images = member[Object.keys(member)[0]][0];
  const [currentIndex, setCurrentIndex] = useState(0);
  const memberRole = member[Object.keys(member)[0]][1];
  const memberDescription = member[Object.keys(member)[0]][2];
  const memberName = Object.keys(member)[0].charAt(0).toUpperCase() + Object.keys(member)[0].slice(1);
  const memberIndex = crew["2021-2022"].indexOf(member);

  const changeImg = index => {
    setLoadingImg(true);
    setCurrentIndex(index);
    setLoadingImg(false);
  }
  // console.log(crew["2021-2022"][memberIndex][Object.keys(member)]);
  // console.log(Object.keys(member))
  // console.log(crew["2021-2022"][memberIndex - 1][Object.keys(member)]);

  console.log(member)

  return (
    <div className='darkBG' onClick={() => setOpen(false)}>
      {/*<button title="Previous Member" className="outer-modal-arrow left" onClick={e => {*/}
      {/*  e.stopPropagation();*/}
      {/*  if (crew["2021-2022"][memberIndex - 1] !== undefined) {*/}
      {/*    setChosenMemberName(crew["2021-2022"][memberIndex - 1]);*/}
      {/*  } else {*/}
      {/*    setChosenMemberName(crew[crew.length - 1][0]);*/}
      {/*  }*/}
      {/*}}>*/}
      {/*  <MdOutlineArrowBackIos className="arrow-icon"/>*/}
      {/*</button>*/}
      {/*<button title="Next Member" className="outer-modal-arrow right" onClick={e => {*/}
      {/*  e.stopPropagation();*/}
      {/*  setChosenMemberName(crew["2021-2022"][memberIndex + 1]);*/}
      {/*}}>*/}
      {/*  <MdOutlineArrowForwardIos className="arrow-icon" />*/}
      {/*</button>*/}
      <div id="MODAL" className='modal' onClick={e => e.stopPropagation()}>
        <div className='modal-header'>
          <h5 className='heading'>{memberName}</h5>
          <button title="Close this window" className='x-btn' onClick={() => setOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-7px" }} />
          </button>
        </div>
        <button disabled={currentIndex === 0}
                title="Previous Image"
                className="inner-modal-arrow left"
                onClick={() => changeImg(currentIndex - 1)}>
          <MdOutlineArrowBackIos className="arrow-icon" />
        </button>
        <button disabled={currentIndex === (images.length - 1)}
                title="Next Image"
                className="inner-modal-arrow right"
                onClick={() => changeImg(currentIndex + 1)}>
          <MdOutlineArrowForwardIos className="arrow-icon" />
        </button>
        {/*<div className='modal-img'>*/}
        {/*  <p style={{ fontSize: "1em", position: "fixed", left: 0, right: 0, top: "9%" }}>Image {currentIndex + 1} of {images.length}</p>*/}
        {/*  {*/}
        {
          loadingImg ? <Loading /> :
            <img
              title={`${memberName}'s image`}
              alt={memberName}
              className="modal-img"
              srcSet={require(`../assets/crew_imgs/${images[currentIndex].slice(24)}`)}
              loading="lazy"
            />
        }
        {/*  }*/}
        {/*</div>*/}
        <div className='modal-content'>
          <h5 className='modal-role'>Role(s): {memberRole}</h5>
          <div className="desc-container">
            {/*<p className='modal-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>*/}
            <p className='modal-description'>{memberDescription}</p>
          </div>
        </div>
        <div className='modal-footer'>
          <button className='button' title="OK" onClick={() => setOpen(false)}>OK</button>
        </div>
      </div>
    </div>
  )
}

export default Modal;