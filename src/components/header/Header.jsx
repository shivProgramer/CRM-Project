import React from 'react'

const Header = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
     <div class="container-fluid px-5 ">
    <a class="navbar-brand" href="#">logo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 fw-normal ">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Track Status</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Raise Query</a>
        </li>
      </ul>
      <div class="d-flex">
        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
        <li class="nav-item dropdown">
          <a class="nav-link pe-5 me-5 fw-5 fw-bolder" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            login
          </a>
          <ul class="dropdown-menu " style={{marginRight:"30px"}} > 
            <li><a class="dropdown-item" href="#">Are you user</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Are you agent</a></li>
          </ul>
        </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header