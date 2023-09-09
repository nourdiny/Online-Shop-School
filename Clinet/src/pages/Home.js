import { Link } from "react-router-dom";
import React , { useState , useEffect} from "react";
import Marquee from "react-fast-marquee";
// import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import Container from "../components/Container";
import { services } from "../utils/Data";
import axiosClient from "../axios-client.js";
import {useStateContext} from "../context/ContextProvider";

function Home() {
  const [products, setProducts] = useState([]);
  const [productsOur, setProductsOur] = useState([]);
  const [productsFea, setProductsFer] = useState([]);

  useEffect(() => {
    getUsers();
    setProductsFer(products.slice(5,10));
    setProductsOur(products.slice(1,6));
    
  },[products])

  const getUsers = async () => {
    
    await axiosClient.get('/products')
      .then(({data} ) => {
        setProducts(data.data)
        

      })
      .catch((e) => {
        console.log(e);
    
      })  
  }
  return (
    <>
      <Container className="home-wrapper-1 p-5">
        <div className="row">
          <div className=" min-h-[150px] md:w-[95%] lg:w-[49.5%] mb-1">
            <div className="main-banner position-relative">
              <img
                src="images/main-banner-1.jpg"
                className="img-fluid rounded-3"
                alt="main-banner"
              />
              <div className="main-banner-content position-absolute">
                <h4></h4>
                <h5 className="sm:text-[22px] text-[#000]">Shop School.</h5>
                
              </div>
            </div>
          </div>
          <div className="md:w-[95%] lg:w-[49.5%] ">
            <div className="d-flex flex-wrap justify-content-between align-items-center">
              <div className="small-banner position-relative mb-1">
                <img
                  src="images/main-banner-3.jpg"
                  className="img-fluid rounded-3"
                  alt="main-banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4></h4>
                  <h5>School supplies</h5>
                </div>
              </div>
              <div className="small-banner position-relative mb-1">
                <img
                  src="images/main-banner-2.jpg"
                  className="img-fluid rounded-3"
                  alt="main-banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4></h4>
                  <h5>All School tools</h5>
                
                </div>
              </div>
              <div className="small-banner position-relative mt-2">
                <img
                  src="images/main-banner-4.jpg"
                  className="img-fluid rounded-3"
                  alt="main-banner"
                />
                <div className="small-banner-content position-absolute">
                <h4></h4>
                  <h5>New Books</h5>
                  
                </div>
              </div>
              <div className="small-banner position-relative mt-2">
                <img
                  src="images/main-banner-5.jpg"
                  className="img-fluid rounded-3"
                  alt="main-banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4></h4>
                  <h5>Best School Bag</h5>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      {/* <Container className="home-wrapper-2 p-5">
        <div className="row">
          <div className="col-12">
            <div className="servies d-flex align-items-center justify-content-between">
              {services.map((data, index) => {
                return (
                  <div className="d-flex align-items-center gap-15" key={index}>
                    <img src={data.image} alt="service" />
                    <div>
                      <h6>{data.title}</h6>
                      <p className="mb-0">{data.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container> */}
      <Container className="featured-wrapper p-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          {productsFea.map( product => (
                    <ProductCard  product={product} key={product.id} />
                ))}
        </div>
      </Container>
      <Container className="popular-wrapper p-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
        {productsOur.map( product => (
                    <ProductCard  product={product} key={product.id} />
                ))}
        </div>
      </Container>
 

    </>
  );
}

export default Home;
