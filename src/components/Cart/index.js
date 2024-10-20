import {Link} from 'react-router-dom'
import './index.css' 

const Cart = () =>(
    <div className='cart'>
    <div className='cart-container'>
        <h1 className='cart-heading'>Your Cart</h1>
        <hr/>
        <p className='order-text'>Congratulations <br/> Order Placed!</p>
        <img src="https://res.cloudinary.com/drz669sta/image/upload/v1729357624/plant_1_qhir0x.png" alt="cart"/>
        <p className='thanks'>Thank you for choosing Chaperone services. We will soon get in touch with you!</p>
        <Link to="/pagination">
         <button type="button" className='continue-btn'>Continue Shopping</button>
        </Link>
        
    </div>
    </div>
)

export default Cart