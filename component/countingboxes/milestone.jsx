import "./milestone.scss";
import CountUp from 'react-countup';


export function Milestone(){
 return <>
<div id="milestone">
    <div className="mileBoxes">
        <p className="number"><CountUp start={0} end={10000} duration={3} suffix="+"></CountUp></p>
        <p className="numberName"> Total Customer</p>
    </div>
    <div className="mileBoxes">
        <p className="number"><CountUp start={0} end={9} duration={3} suffix="+"></CountUp></p>
        <p className="numberName"> Year of Experience</p>
    </div>
    <div className="mileBoxes">
        <p className="number"><CountUp start={0} end={12000} duration={3} suffix="+"></CountUp></p>
        <p className="numberName"> Total Destinations</p>
    </div>
    <div className="mileBoxes">
        <p className="number"><CountUp start={0} end={4.9} decimals={1} duration={3} suffix="+"></CountUp></p>
        <p className="numberName"> Average Rating</p>
    </div>
    </div> 

</> 
 
}