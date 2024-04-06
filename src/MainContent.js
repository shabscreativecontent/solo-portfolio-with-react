import React from "react";
import { 
   TwitterIcon,
   CodepenIcon,
   InstagramIcon,
   GitHubIcon
} from "./icons";
import './App.css'

function MainContent(){
   return(
      <>
         <main className="about">
            <div>
               <h3>About</h3>
               <p>I am a full-stack software engineer at 100Dev, TraversyMedia and Freecodecamp. I primarily build full-stack web applications using HTML, CSS, JAVASCRIPT. <br />Through freelancing, I help empower businesses in my community who lack an online presence and technological expertise.</p>
            </div>

            <div>
               <h3>Interests</h3>
               <p>Combat sports commentator. Instagram boxer. Music practitioner. Reader. Internet addicted. Movie lover. Coffee addicted too.</p>
            </div>
         </main>
         <footer>
            <div className='card-footer'>
               <a href='https://twitter.com/shabscc?s=11&t=AMWJpREjnd1Jb5-1Y1Bt3Q' target='__blank' className='card-social'>
                  <TwitterIcon width={30} height={30} />
               </a>
                    
               <a href='https://github.com/ShabsCreativeContent' target='__blank' className='card-social'>
                  <CodepenIcon width={30} height={30} />
               </a>
                    
               <a href='https://www.linkedin.com/in/ajide-shedrack-dev' target='__blank' className='card-social'>
                  <InstagramIcon width={30} height={30} />
               </a>
                    
               <a href='https://github.com/ShabsCreativeContent' target='__blank' className='card-social'>
                  <GitHubIcon width={30} height={30} />
               </a>
            </div>

            <small className="footer-small">Code by <a className="code-link">ShabsCreativeContent</a></small>
         </footer>
      </>
   )
}


export default MainContent