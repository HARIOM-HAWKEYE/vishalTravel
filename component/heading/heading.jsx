import "./heading.scss";
export function Heading({biggerHeading,smallerHeading,children}){
 
    return <div id="locationHeading">
    <p>{smallerHeading}</p>
    <div id="incredibleContainer">
       <span className="incredibleIndia">{biggerHeading}</span>
       <span className="incredibleMessage">{children}</span>
    </div>
  </div>





}