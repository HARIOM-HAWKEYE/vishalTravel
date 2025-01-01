import "./Navbar.scss";
import { GrShare } from "react-icons/gr";
export function NavComponent(){
    return <>
      <nav id="navbar">
        <div id="nav-logo">
            VISHAL TRAVEL
        </div>

        <div className="nav-links">
        <ul>
           <li>About</li>
           <li>Services</li>
           <li>Our Tours</li>
           <li>Blog</li>
        </ul>
        </div>

        <button id="querybtn"> <span>Contact Us</span><GrShare /></button>
       
      </nav>
    
    
    </>
}