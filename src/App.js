import './App.css';
import React, { useState, useLayoutEffect, useEffect } from 'react';
import MainPage from './components/MainPage';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition  } from 'react-transition-group';
import CyberNews from './components/CyberNews';
import RetroReview from './components/RetroReview';
import Stories from './components/Stories';
import Announcements from './components/Announcements';
import Loading from './components/Loading';

// WOLFTV SITE | v0.1

let location;

function Wrapper({ children }) {
  location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
}

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMemberName, setSelectedMemberName] = useState("");
  const [infoboxShown, setInfoboxShown] = useState(true);

  return (
    <Router>
      <Wrapper>
        {/* <TransitionGroup>
          <CSSTransition key={useLocation().pathname} classNames="fade" timeout={300}> */}
            <div>
              <Routes>
                <Route
                path="/" 
                element={
                  <React.Suspense fallback={<Loading />}>
                    <div>
                      <MainPage modalOpen={modalOpen} setModalOpen={setModalOpen} selectedMemberName={selectedMemberName} setSelectedMemberName={setSelectedMemberName} infoBoxOpen={infoboxShown} setInfoBoxOpen={setInfoboxShown}/>
                    </div>
                  </React.Suspense>
                }
                />
                <Route 
                path='/announcements'
                element={
                  <React.Suspense fallback={<Loading />}>
                    <div>
                      <Announcements modalOpen={modalOpen} setModalOpen={setModalOpen} selectedMemberName={selectedMemberName} setSelectedMemberName={setSelectedMemberName}/>
                    </div>
                  </React.Suspense>
                }
                />
                <Route
                path='/cyber-news'
                element={
                  <React.Suspense fallback={<Loading />}>
                    <div>
                      <CyberNews modalOpen={modalOpen} setModalOpen={setModalOpen} selectedMemberName={selectedMemberName} setSelectedMemberName={setSelectedMemberName}/>
                    </div>
                  </React.Suspense>
                }
                />
                <Route
                path='/retro-review'
                element={
                  <React.Suspense fallback={<Loading />}>
                    <div>
                      <RetroReview modalOpen={modalOpen} setModalOpen={setModalOpen} selectedMemberName={selectedMemberName} setSelectedMemberName={setSelectedMemberName}/>
                    </div>
                  </React.Suspense>
                }
                />
                <Route
                path='/stories'
                element={
                  <React.Suspense fallback={<Loading />}>
                    <div>
                      <Stories modalOpen={modalOpen} setModalOpen={setModalOpen} selectedMemberName={selectedMemberName} setSelectedMemberName={setSelectedMemberName}/>
                    </div>
                  </React.Suspense>
                }
                />
              </Routes>
            </div>
          {/* </CSSTransition>
        </TransitionGroup> */}
      </Wrapper>
    </Router>
  )
}

export default App;
