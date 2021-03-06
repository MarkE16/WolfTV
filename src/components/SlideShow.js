import React, { useEffect, useState } from 'react'

function SlideShow() {
  const imgs = [
    require("../assets/images/ethan.JPG"),
    require("../assets/images/wideshot-of-crew.JPG"),
    require("../assets/images/camera.JPG"),
  ]
  const [imgIndex, setImgIndex] = useState(0);
  const timeoutRef = React.createRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => setImgIndex(prev => prev === imgs.length - 1 ? 0 : prev + 1), 5000);

    return () => resetTimeout();
  }, [imgIndex]);


  return (
    <div className='slideShow'>
      <div className='slider' style={{ transform: `translate3d(${-imgIndex * 100}%, 0, 0)` }}>
        {
          imgs.map((img, index) => <img className='slide' key={index} src={img} alt="Rendering..." />)
        }
      </div>

      <div className='dots'>
        {
          imgs.map((_, index) =>
          <div 
          key={index}
          className={`dot ${index === imgIndex ? 'active' : ''}`}
          onClick={() => setImgIndex(index)}
          title={`Image ${index + 1}`}
          />
        )
        }
        {/* <input size={50} type="checkbox" id="slideShowCheckbox" value={checked} onChange={() => setChecked(!checked ? true : false)}/>
        <label for="slideShowCheckbox" style={{ color: "white", textShadow: "1px 1px 1px black" }}>Hide Intro Text</label> */}
      </div>
    </div>
  )
}

export default SlideShow;