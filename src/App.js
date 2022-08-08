import './App.css';
import React, { useState, useLayoutEffect, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Loading from './components/Loading';
import MainPage from "./components/MainPage";
import ModalProvider, { ModalContext } from "./components/ModalCxt";
// import MainPage from './components/MainPage';

// WOLFTV SITE | v0.1

let location;
function App() {
  const [selectedMemberName, setSelectedMemberName] = useState("");
  const [infoboxShown, setInfoboxShown] = useState(true);
  const { modalOpen } = useContext(ModalContext);

  function Wrapper({ children }) {
    location = useLocation();
    useLayoutEffect(() => {
      if (modalOpen) return

      window.scrollTo(0, 0);
    }, []);
    return children;
  }


  // Lazy loading pages
  const MainPage = React.lazy(() => import('./components/MainPage'));
  const CyberNews = React.lazy(() => import('./components/CyberNews'));
  const RetroReview = React.lazy(() => import('./components/RetroReview'));
  const Stories = React.lazy(() => import('./components/Stories'));
  const Announcements = React.lazy(() => import('./components/Announcements'));

  return (
    <ModalProvider>
      <Router>
        <Wrapper>
          {/* <TransitionGroup>
            <CSSTransition key={useLocation().pathname} classNames="fade" timeout={300}> */}
                <Routes>
                  <Route
                  path="/"
                  element={<React.Suspense fallback={<Loading />}>
                    <div>
                      <MainPage selectedMemberName={selectedMemberName} setSelectedMemberName={setSelectedMemberName} infoBoxOpen={infoboxShown} setInfoBoxOpen={setInfoboxShown}/>
                    </div>
                  </React.Suspense>
                  }
                  />
                  <Route
                  path='/announcements'
                  element={
                    <React.Suspense fallback={<Loading />}>
                      <div>
                        <Announcements selectedMemberName={selectedMemberName} setSelectedMemberName={setSelectedMemberName}/>
                      </div>
                    </React.Suspense>
                  }
                  />
                  <Route
                  path='/cyber-news'
                  element={
                    <React.Suspense fallback={<Loading />}>
                      <div>
                        <CyberNews selectedMemberName={selectedMemberName} setSelectedMemberName={setSelectedMemberName}/>
                      </div>
                    </React.Suspense>
                  }
                  />
                  <Route
                  path='/retro-review'
                  element={
                    <React.Suspense fallback={<Loading />}>
                      <div>
                        <RetroReview selectedMemberName={selectedMemberName} setSelectedMemberName={setSelectedMemberName}/>
                      </div>
                    </React.Suspense>
                  }
                  />
                  <Route
                  path='/stories'
                  element={
                    <React.Suspense fallback={<Loading />}>
                      <div>
                        <Stories selectedMemberName={selectedMemberName} setSelectedMemberName={setSelectedMemberName}/>
                      </div>
                    </React.Suspense>
                  }
                  />
                </Routes>
            {/* </CSSTransition>
          </TransitionGroup> */}
        </Wrapper>
      </Router>
    </ModalProvider>
  )
}

export default App;
