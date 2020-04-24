import React from "react"
import './style.css'

import AppIcon from '../assets/app.svg'
import QuestionsIcon from '../assets/questions.svg'
import WireFrameIcon from '../assets/wireframe.svg'

export default () => (
 <>
    <header>
      <div className="headerWrapper">
        <h3>churchkey</h3>
      </div>
    </header>
    <div style={{backgroundColor: '#f4f4f4'}}>
        <div className="container">
          <div className="textWrapper">
            <h1>
              Let's take it online.
            </h1>
            <p>
              Your online solution to making sure your church stays connected and up to date on what's coming up next.
            </p>
            <div class="buttonWrapper">
              <a href="https://churchkeydemo.netlify.app" target="_blank" rel="noopener noreferrer"><button className="primaryButton">TRY IT YOURSELF</button></a>
              <a href="https://calendly.com/andyhong" target="_blank" rel="noopener noreferrer"><button className="secondaryButton">SCHEDULE A DEMO</button></a>
            </div>
          </div>
          <div className="mediaWrapper">
            <div>
              <AppIcon />
            </div>
          </div>
        </div>
      </div>
    <div>
      <div className="container">
        <div className="mediaWrapper">
          <div>
            <QuestionsIcon />
          </div>
        </div>
        <div className="textWrapper">
          <h2>
            Why move your bulletin online?
          </h2>
          <ul>
            <li>Cut your operational costs that come from designing and printing a weekly bulletin</li>
            <li>Reduce the amount of steps your congregation takes to fulfill your call to action (filling out a form, registering for an event, etc.)</li>
            <li>Create a central hub that is one click away from any "next step" your church has to offer</li>
          </ul>
        </div>
      </div>
    </div>
    <div style={{backgroundColor: '#f4f4f4'}}>
      <div className="container">
        <div className="textWrapper">
          <h2>
            Here's what we have to offer.
          </h2>
          <ul>
            <li>A user-friendly microsite hosted by us so you can focus on doing what you love and not have to worry about the technical details</li>
            <li>Clean and simple design to make sure your audience has a clear next step</li>
            <li>A straightforward and simple editing experience that allows anyone to hop in and start building ebulletins (no web experience required!)</li>
          </ul>
        </div>
        <div className="mediaWrapper">
          <div>
            <WireFrameIcon />
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className="container">
        <div className="callToActionWrapper">
          <h2 style={{marginBottom: '0.25em'}}>Are you ready to take the next step?</h2>
          <p>We're ready to jump in and walk alongside you to take your church to the next level.</p>
          <div className="buttonWrapper">
            <a href="https://churchkeydemo.netlify.app" target="_blank" rel="noopener noreferrer"><button className="primaryButton">TRY IT YOURSELF</button></a>
            <a href="https://calendly.com/andyhong" target="_blank" rel="noopener noreferrer"><button className="secondaryButton">SCHEDULE A DEMO</button></a>
          </div>
        </div>
      </div>
    </div>
    <footer style={{backgroundColor: '#f4f4f4'}}>
      <div className="footerWrapper">
        <small>Built by Andy Hong</small>
      </div>
    </footer>
 </> 
)
