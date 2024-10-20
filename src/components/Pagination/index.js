import {Component} from 'react'
import { CiSearch } from "react-icons/ci";
import { GiChestnutLeaf } from "react-icons/gi";
import Header from '../Header'
import './index.css'
import ProductCard from "../ProductCard"; 

const data = [
         {id:1,productImage:"https://res.cloudinary.com/drz669sta/image/upload/v1729349547/e1ce63ff429a0c018fd6e2e5dd614458_rrkclj.png",productName:"Monsterra",price:240},
         {id:2,productImage:"https://res.cloudinary.com/drz669sta/image/upload/v1729349671/7973d62829a030074ad8b6ad34_ed09ra.png",productName:"Monsterra",price:240},
         {id:3,productImage:"https://res.cloudinary.com/drz669sta/image/upload/v1729349547/e1ce63ff429a0c018fd6e2e5dd614458_rrkclj.png",productName:"Monsterra",price:240},
         {id:4,productImage:"https://res.cloudinary.com/drz669sta/image/upload/v1729349671/7973d62829a030074ad8b6ad34_ed09ra.png",productName:"Monsterra",price:240},
         {id:5,productImage:"https://res.cloudinary.com/drz669sta/image/upload/v1729349547/e1ce63ff429a0c018fd6e2e5dd614458_rrkclj.png",productName:"Monsterra",price:240},
         {id:6,productImage:"https://res.cloudinary.com/drz669sta/image/upload/v1729349671/7973d62829a030074ad8b6ad34_ed09ra.png",productName:"Monsterra",price:240},
         {id:7,productImage:"https://res.cloudinary.com/drz669sta/image/upload/v1729349547/e1ce63ff429a0c018fd6e2e5dd614458_rrkclj.png",productName:"Monsterra",price:240},
         {id:8,productImage:"https://res.cloudinary.com/drz669sta/image/upload/v1729349671/7973d62829a030074ad8b6ad34_ed09ra.png",productName:"Monsterra",price:240},
         {id:9,productImage:"https://res.cloudinary.com/drz669sta/image/upload/v1729349547/e1ce63ff429a0c018fd6e2e5dd614458_rrkclj.png",productName:"Monsterra",price:240},
         {id:10,productImage:"https://res.cloudinary.com/drz669sta/image/upload/v1729349671/7973d62829a030074ad8b6ad34_ed09ra.png",productName:"Monsterra",price:240}]

        
class Pagination extends Component {
    state = {
               loading: false,
               currentPage: 1,
               itemsPerPage: 5,
               searchInput:"",
             };
           
            onChangeSearchInput = (event) =>{
              this.setState({searchInput:event.target.value})
            }
         
           handlePageChange = (event) => {
             const pageNumber = Number(event.target.id); // Convert id to number
             this.setState({ currentPage: pageNumber }); // Update current page
           };
         
           render() {
             const { currentPage, itemsPerPage,searchInput,loading } = this.state;
             const indexOfLastItem = currentPage * itemsPerPage;
             const indexOfFirstItem = indexOfLastItem - itemsPerPage;
             const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
             const totalItems = data.length;
             const totalPages = Math.ceil(totalItems / itemsPerPage);
             
             const pageNumbers = [];
             for (let i = 1; i <= totalPages; i++) {
               pageNumbers.push(i);
             }
         
             return (
              <>
              <Header/>
              <div className='home-container'>
              <div>
                <div className='input-container'>
                  <CiSearch size={25} className='search'/>
                 
                  <input type="search" placeholder='Search Plant' className='input-element' value={searchInput} onChange={this.onChangeSearchInput}/>
                  <GiChestnutLeaf size={25} className='leaf-icon'/>
                </div>
               <div>
                 <ul className='ul-container'>
                   {currentItems.map(each => (
                     <ProductCard key={each.id} productDetails={each} loading={loading} />
                   ))}
                 </ul>
                 <div className="pagination">
                  
                   <button
                     onClick={() => this.setState((prev) => ({ currentPage: Math.max(prev.currentPage - 1, 1) }))}
                     disabled={currentPage === 1}
                     className='previous'
                   >
                     Previous
                   </button>
                   <ul className="page-container">
                     {pageNumbers.map((number) => (
                       <li key={number} id={number} onClick={this.handlePageChange} style={{ display: 'inline', margin: '5px', cursor: 'pointer' }}>
                         {number}
                       </li>
                     ))}
                   </ul>
                   
                   <button
                     onClick={() => this.setState((prev) => ({ currentPage: Math.min(prev.currentPage + 1, totalPages) }))}
                     disabled={currentPage === totalPages}
                     className="next"
                   >
                     Next
                   </button>
                 </div>
                 <span className='span'>
                     Page {currentPage} of {totalPages}
                   </span>
               </div>
               </div>
               </div>
               
               </>
             );
           }
         }
         
         export default Pagination;
         