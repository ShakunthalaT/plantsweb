import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import './index.css'

const ProductCard = (props) =>{
    const{productDetails} = props
    const{productImage,productName,price} = productDetails
    return(
        <li className='list-container'>
            <div className='image-container'>
            <img src={productImage} alt={productImage} className='img'/>
            <Link to="/thankspage">
            <button type="button" className='view-btn'>View Product</button>
            </Link>
            </div>
            
            <p className='product-name-text'>{productName}</p>
            <p className='price'>price: {price}</p>
            
            
            
            <Popup
                modal
                trigger={
                <button type="button" className="add-cart-button">
                    Add to Cart
                </button>
                }
            >
                
                {close => (
                <>
                <div className='product-details-card'>
                <img src={productImage} alt={productName} className='image-view'/>
                <div className='card-details-view'>
                <p className='product-name-text'>{productName}</p>
                <p className='price'>Price: {price}</p>
                </div>
                </div>
                <hr/>
                <button
                type="button"
                className="close-button"
                onClick={() => close()}
                >
                    Close
                </button>
                <Link to="/Cart">
                  <button type="button" className='confirm-button'>Confirm</button>
                </Link>
                
               </>
           )}
                
     </Popup>
</li>
    )
}
    


export default ProductCard