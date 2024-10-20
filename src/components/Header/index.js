import { BsCart } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import './index.css' 

const Header = () =>(
    <nav className="nav-container">
        <div className="header-items-container">
        <img src="https://res.cloudinary.com/drz669sta/image/upload/v1729334773/Group_53_uoin1n.png" alt="website logo" className="website-logo"/>
      <div className="icon-container">
        <div className="profile-container">
            <CgProfile size={25}/>  
            <p className="profile">MyProfile</p>
        </div>
        <div className="cart-nav">
        <BsCart size={25}/>
        <p className="cart-text">cart</p>
        </div>
      </div>
      </div>
    </nav>
)

export default Header