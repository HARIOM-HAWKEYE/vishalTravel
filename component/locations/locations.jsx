import "./locations.scss";
import { IoLocationSharp } from "react-icons/io5";
import { Heading } from "../heading/heading";
import uttrakhand  from "../../src/assets/locations/uttrakhand.jpg";
export function BestLocation(){
    return <>
       <Heading biggerHeading="Incredible India" smallerHeading="Best Location" >Extraordinary natural beauty,enjoy the rich culture,<br /> and experience the friendliness of the local people.</Heading>
    <section id="locationContainer">
             
           
              <div id="gallery-grid">
                <div class="item item-1"style={{backgroundImage: `url(${uttrakhand})`}} ><span className="PlaceName">Kedarnath Temple <br /> <span className="city"><IoLocationSharp />Uttrakhand</span></span></div>
                <div class="item item-2"style={{backgroundImage: `url(${uttrakhand})`}}  ><span className="PlaceName">Kedarnath Temple <br /> <span className="city"><IoLocationSharp />Uttrakhand</span></span></div>
                <div class="item item-3"style={{backgroundImage: `url(${uttrakhand})`}} ><span className="PlaceName">Kedarnath Temple <br /> <span className="city"><IoLocationSharp />Uttrakhand</span></span></div>
                <div class="item item-4"style={{backgroundImage: `url(${uttrakhand})`}} ><span className="PlaceName">Kedarnath Temple <br /> <span className="city"><IoLocationSharp />Uttrakhand</span></span></div>
                <div class="item item-5"style={{backgroundImage: `url(${uttrakhand})`}}><span className="PlaceName">Kedarnath Temple <br /> <span className="city"><IoLocationSharp />Uttrakhand</span></span></div>
              </div>


    </section>
    
    </>
}