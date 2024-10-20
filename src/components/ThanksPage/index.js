import {Link} from 'react-router-dom'
import { TiTickOutline } from "react-icons/ti";
import "./index.css" 

const ThanksPage = () =>(
      <>
      <div className="thanks-page">
            <div className="text-container">
            <TiTickOutline size={25} className="tick"/>
            <p className="para">Thank you for your interest in Monsterra, Indoor plant</p>
            <Link to="/pagination">
            <button type="button" className="thanks-page-btn">Continue to homepage</button>
            </Link>
            
            </div>
      
      </div>
      
      </>
)

export default ThanksPage