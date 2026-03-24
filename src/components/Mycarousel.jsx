
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const Mycarousel = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-10 mx-auto">
            <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
       
        {/* Indicators */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2"></button>
        </div>

        {/* Slides */}
        <div className="carousel-inner">

          <div className="carousel-item active">
            <img
              src="images/Mercedes AMG GT.jpg"
              className="d-block w-100"
              alt="First slide"
              height="400px"
            />
            <div className="carousel-caption d-none d-md-block bg-dark opacity-50">
                <p>Mercedes AMG-GT</p>
            </div>
          </div>

          <div className="carousel-item ">
            <img
              src="images/Porshe 718 Cayman.jpg"
              className="d-block w-100"
              alt="Second slide"
              height="400px"
            />
            <div className="carousel-caption d-none d-md-block bg-dark opacity-50"> 
                <p>Porshe 718 Cayman</p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="images/Ford Mustang.png"
              className="d-block w-100"
              alt="Third slide"
              height="400px"
            />
            <div className="carousel-caption d-none d-md-block bg-dark opacity-50">
                <p>Ford Mustang</p>
            </div>
          </div>

        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>

      </div>
        </div>
      </div>
    </div>
  )
}

export default Mycarousel
