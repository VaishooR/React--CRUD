import './App.css';
import './assets/sb-admin-2.min.css';

import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Table from './components/Table';
import Createuser from './components/Createuser';
import Product from './components/Product';
import Createproduct from './components/Createproduct';
import Viewuser from './components/Viewuser'
import Edittable from './components/Edittable';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
          <div id="wrapper">
          <Sidebar/>
              <div id="content-wrapper" class="d-flex flex-column">
                  <div id="content">
                  <Topbar/>
                        <div class="container-fluid">
                        <Routes>
                            <Route path="/" element={<Table/>}/>
                            <Route path="/tables/createuser" element={<Createuser/>}/>            {/* //*TODO In table.js <Link to="/tables/createuser">Create user</Link>  --------------------- Redirects to Createuser.js */}
                            <Route path="/table/view/:userid" element={<Viewuser/>}/>             {/* //*TODO In table.js <Link to={`/table/view/${eachperson.id}`}>Create user</Link>  --------- Redirects to Viewuser.js */}
                            <Route path="/table/edit/:userid" element={<Edittable/>}/>            {/* //*TODO In table.js <Link to={`/table/edit/${eachperson.id}`}>Create user</Link>  --------- Redirects to Edittable.js */}


                            <Route path="/product" element={<Product/>}/>
                            <Route path="/product/createproduct" element={<Createproduct/>}/>
                        </Routes>
                        </div>
                        
                  </div> 
              </div>     
          </div>
      </BrowserRouter>
    </>
  );
}

export default App;

