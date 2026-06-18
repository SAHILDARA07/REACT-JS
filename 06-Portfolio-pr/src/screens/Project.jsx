import React from 'react'

export default function project() {
  return (
    <div>
       <nav className="d-flex justify-content-center gap-5 p-3">
        
        <a href="/Home" className="nav-link">Home</a>
        <a href="/Project" className="nav-link">Project</a>
        <a href="/Contact" className="nav-link">Contact</a>
        <a href="/About" className="nav-link">About</a>
      </nav>
      <div>
        <h2 className="text-center mt-5">My project</h2>
        <div className="d-flex justify-content-center gap-5 mt-3">
          <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
              <h5 className="card-title">E-commerce</h5>
              <p className="card-text">
               <img src="https://webandcrafts.com/_next/image?url=https%3A%2F%2Fadmin.wac.co%2Fuploads%2FWhat_is_E_commerce_and_What_are_its_Applications_2_d2eb0d4402.jpg&w=4500&q=90" style={{height: '200px', width:'250px'}} className='rounded-3' />
              </p>
              <p>
                Link : <a href="https://github.com/SAHILDARA07/JAVASCRIPT/tree/main/ECOMMERCE" target="_blank" rel="noopener noreferrer">E-Commerce</a>
              </p>
            </div>
          </div>
          <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
              <h5 className="card-title">Quizz App</h5>
              <p className="card-text">
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBdxliklr1nU6zupi_lxhsD0YHMM0WYCRr9w&s" style={{height: '200px', width:'250px'}}  alt="" />
              </p>
              <p>
                Link : <a href="https://github.com/SAHILDARA07/JAVASCRIPT/tree/main/QUIZ%20APPLICATION" target="_blank" rel="noopener noreferrer">Quizz App</a>
              </p>
            </div>  
        </div>
        <div className="card" style={{ width: '18rem' }}>
          <div className="card-body"> 
            <h5 className="card-title">QUOTE APP</h5>
            <p className="card-text">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/060/380/241/small/the-quote-icon-is-shown-in-a-colorful-circle-flat-png.png" style={{height: '200px', width:'250px'}}  alt="" />
            </p>  
            <p>
                Link : <a href="https://github.com/SAHILDARA07/JAVASCRIPT/tree/main/QUOTE%20APP" target="_blank" rel="noopener noreferrer">Book Api Store</a>
            </p>
          </div>
        </div>             
      </div>
    </div>
    <div>
      
    </div>
    </div>
  )
}