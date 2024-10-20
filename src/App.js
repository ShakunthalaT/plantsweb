import {Routes,Route} from 'react-router-dom'

import Pagination from './components/Pagination';
import Cart from './components/Cart';
import ThanksPage from './components/ThanksPage'

import './App.css';

const App = ()=>(
  <>
    <Routes>
      <Route exact path="/pagination" Component={Pagination}/>
      <Route exact path="/cart" Component={Cart}/>
      <Route exact path="/thankspage" Component={ThanksPage}/>
    </Routes>
  </>
  
)

export default App