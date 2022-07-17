import React from 'react'
import {Link} from 'react-router-dom'

function Sidebar() {
  return (
    <>
     <ul
        class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* <!-- Sidebar - Brand --> */}
        <a
          class="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div class="sidebar-brand-icon rotate-n-15">
            <i class="fas fa-laugh-wink"></i>
          </div>
          <div class="sidebar-brand-text mx-3">
            SB Admin <sup>2</sup>
          </div>
        </a>

        {/* <!-- Divider --> */}
        <hr class="sidebar-divider my-0" />

    
        <li class="nav-item active">
          <Link class="nav-link" to="/">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>Tables</span>
          </Link>
        </li>
        <hr class="sidebar-divider d-none d-md-block" />


        <li class="nav-item">
          <Link class="nav-link" to="/product">
            <i class="fas fa-fw fa-table"></i>
            <span>Products</span>
          </Link>
        </li>
        <hr class="sidebar-divider d-none d-md-block" />

 
      </ul>
    </>
  )
}

export default Sidebar