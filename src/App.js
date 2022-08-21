import './App.css';
import React, { useState, useLayoutEffect, useContext, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Loading from './components/Loading';
import ModalProvider from "./components/ModalCxt";
import MainPage from './components/MainPage';
import SegmentPage from "./components/SegmentPage";
import NotFound from "./components/NotFound";

// WOLFTV SITE | v0.1

function Wrapper({ children }) {
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
}

function App() {
  const [selectedMemberName, setSelectedMemberName] = useState(null);
  const [infoboxShown, setInfoboxShown] = useState(true);


  // Lazy loading pages
  // const MainPage = React.lazy(() => import('./components/MainPage'));
  // const SegmentPage = React.lazy(() => import('./components/SegmentPage'));
  const crew = require("./data/crew.json");

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
                        <SegmentPage
                          title="announcements"
                          about={`
                          The announcements is the main segment of the entire show of Wolf TV. Without it, who knows what the purpose of
                          Wolf TV would've been this whole time.
                          `}
                          content={`
                          The type of content displayed during the announcements are mainly just info about the school. Types of info could
                          be:
                          `}
                          contentList={["Information about Classes", "Information about Tests (SAT, PSAT, STAAR, etc)", "Information about Events (Football games, prom, etc)"]}
                          members={[crew["2021-2022"][0], crew["2021-2022"][1], crew["2021-2022"][2], crew["2021-2022"][3], crew["2021-2022"][10], crew["2021-2022"][7]]}
                          selectedMemberName={selectedMemberName}
                          setSelectedMemberName={setSelectedMemberName}
                        />
                      </div>
                    </React.Suspense>
                  }
                  />
                  <Route
                  path='/cyber-news'
                  element={
                    <React.Suspense fallback={<Loading />}>
                      <div>
                        <SegmentPage
                          title="cyber news"
                          about={`
                          Cyber News is a segment of Wolf TV that delivers news that happens in the cyber world AKA the internet.
                          `}
                          content={`
                          The type of content displayed during the Cyber News are mainly just info about the cyber world. Types of info could
                          be:
                          `}
                          contentList={["Movies", "Video Games", "Music", "News in general", "Social Media"]}
                          members={[crew["2021-2022"][4], crew["2021-2022"][3], crew["2021-2022"][2]]}
                          selectedMemberName={selectedMemberName}
                          setSelectedMemberName={setSelectedMemberName}
                        />
                      </div>
                    </React.Suspense>
                  }
                  />
                  <Route
                  path='/retro-review'
                  element={
                    <React.Suspense fallback={<Loading />}>
                      <div>
                        <SegmentPage
                          title="retro review"
                          about={`
                          Retro Review is a segment of Wolf TV that reviews all kinds of things that occurred in the past.
                          `}
                          content={`
                          The type of content displayed during the Retro Review are mainly just things, like the name suggests, from the past. 
                          Types of content could be:
                          `}
                          contentList={["Movies", "Video Games", "Music"]}
                          members={[crew["2021-2022"][6], crew["2021-2022"][9]]}
                          selectedMemberName={selectedMemberName}
                          setSelectedMemberName={setSelectedMemberName}
                        />
                      </div>
                    </React.Suspense>
                  }
                  />
                  <Route
                  path='/stories'
                  element={
                    <React.Suspense fallback={<Loading />}>
                      <div>
                        <SegmentPage
                          title="stories"
                          about={`
                          Stories is a segment of Wolf TV that delivers a story about 1 or multiple individuals. Stories allow the individual(s) 
                          express their story to the viewers, to allow them to share their story with the world, and to let them be heard.
                          `}
                          content={`
                          The type of content in Stories could literally be anything. Whether the topic is about a person, an event, a place, or 
                          anything else, it can qualify as a story.
                          `}
                          contentList={undefined}
                          purpose={`
                          The purpose of Stories is that the Wolf TV team wants to get people's stories out there. The Wolf TV team wants to make
                          the stories have an impact on the viewers. The team also wants the viewer to be aware that those stories exist. That 
                          is part of the goal Wolf TV has.
                          `}
                          members={[crew["2021-2022"][0], crew["2021-2022"][1], crew["2021-2022"][3], crew["2021-2022"][8], crew["2021-2022"][9]]}
                          selectedMemberName={selectedMemberName}
                          setSelectedMemberName={setSelectedMemberName}
                        />
                      </div>
                    </React.Suspense>
                  }
                  />
                  <Route path="*" element={<NotFound />} />
                </Routes>
            {/* </CSSTransition>
          </TransitionGroup> */}
        </Wrapper>
      </Router>
    </ModalProvider>
  )
}

export default App;
