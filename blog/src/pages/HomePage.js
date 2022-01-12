import React from 'react';
import { IconContext } from 'react-icons/lib';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const HomePage = () => {

  return ( 
    <div>
      <section className="pv4" id="intro">
        <div id="greeting">
          <h1>Hello, welcome to my blog!</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum sit amet lectus quis ultricies. Nam et nisl eget lorem vehicula sagittis eu sit amet enim. Integer a augue lobortis, tincidunt urna eu, interdum magna. Suspendisse non nisi eget nibh aliquet vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
        </div>
      </section>

      <section className="pv5" id="recent-articles-blocks">
        <h3 className="fw4">Recent Posts</h3>
        <div id="articles-container">
          <div className="article-square ph3  ">
            <span className="b ma0 mb3">Why I Code</span>
            <small className="f7" >2 hours ago</small>
            <p className="f7 mt2 ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Proin sit quis ultricies.
            </p>
          </div>
          <div className="article-square ph3  ">
            <span className="b ma0 mb3">Why I Code</span>
            <small className="f7" >2 hours ago</small>
            <p className="f7 mt2 ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Proin sit quis ultricies.
            </p>
          </div>
          <div className="article-square ph3  ">
            <span className="b ma0 mb3">Why I Code</span>
            <small className="f7" >2 hours ago</small>
            <p className="f7 mt2 ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Proin sit quis ultricies.
            </p>
          </div>

          <IconContext.Provider value={{
            className: "slide-arrow", 
            size: "2rem",
            color: "#0099ff",
            style: {
              position: "absolute",
              top: "50%", 
              right: "100%"
            }}}>
            <FaChevronLeft />
          </IconContext.Provider>

          <div className="article-square ph3 large-article-square">
            <span className="b ma0 mb3">Why I Code</span>
            <small className="f7" >2 hours ago</small>
            <p className="f7 mt2 ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Proin sit quis ultricies.
            </p>
          </div>
          <IconContext.Provider value={{
            className: "slide-arrow", 
            size: "2rem",
            color: "#0099ff",
            style: {
              position: "absolute",
              top: "50%",
              left: "100%"
            }}}>
            <FaChevronRight />
          </IconContext.Provider>
        </div>

      </section>
      
    </div>
  )
}

export default HomePage
