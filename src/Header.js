import React from "react"
import '../src/App.css'
import ProfileImg from './avatar.jpg'
import { MailIcon, LinkedinIcon } from "./icons"


function Header(){
   return(
      <header>
         <img className="header-img" src={ProfileImg} alt="profilePicture" width='200px'/>

         <div className="header-info">
            <h1 className="name">Ajide Shedrack</h1>
            <h2 className="prof">Full-Stack Software Engineer</h2>
            <small className="small">
               <a className="small-link" href="https://shabscreativecontent.github.io/ShabsCreativeContentPortfolio/aboutme.html">ShabsCreativeContent.portfolio</a>
            </small>

            <div className="user-link">
               <a className="info-btn email" href="mailto:ajideshedrack@gmail.com" target="_blank" >
                  <MailIcon width={16} height={16}/>
                  <span>Email</span>
               </a>
               <a className="info-btn linkedin" href="www.linkedin.com/in/ajide-shedrack-dev" target="_blank" >
                  <LinkedinIcon width={16} height={16}/>
                  <span>LinkedIn</span>
               </a>
            </div>
         </div>
      </header>
   )
}

export default Header