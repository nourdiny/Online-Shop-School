import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
// import ReactStars from "react-rating-stars-component";
import React , { useState , useEffect} from "react";
import ProductCard from "../components/ProductCard";
import Container from "../components/Container";
import axiosClient from "../axios-client.js";
import {useStateContext} from "../context/ContextProvider";

function OurStore() {
  const [products, setProducts] = useState([]);
  const [categorys, setCategorys] = useState([]);
  const [sortBy, setSortBy] = useState('');
  const [filtere, setfiltere] = useState('All');
  const [last_page, setLast_page] = useState(0);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(1);
  useEffect(() => {
    getUsers();
  },[count,filtere])

  const getUsers = () => {
    setLoading(true)
    if(filtere === 'All') {
      axiosClient.get('/products?page='+count)
        .then(({data} ) => {
          setLoading(false)
          setProducts(data.data)
          setLast_page(data.meta.last_page)
        })
        .catch((e) => {
          console.log(e);
          setLoading(false)
        })  
    }
    axiosClient.get('/category')
      .then(({data} ) => {
        setCategorys(data.data)
      })
      .catch((e) => {
        console.log(e);
      })  
  }

  useEffect(() => {
    if(filtere !== 'All') {
      axiosClient.get('/category/'+filtere+'?page='+count)
      .then(({data} ) => {
        setProducts(data.data)
        setLast_page(data.meta.last_page)
      })
      .catch((e) => {
        console.log(e);
      }) 
    }
    
  },  [filtere , count])


  useEffect(() => {

    var sortBylist = sortBy.split(' ');
    const sortAsc = (sortby) => {
      var newArray = products.sort(function(a,b) {
        if (sortby == "price") {
          if(b.price < a.price){
            return -1;
          } else if(b.price > a.price){
            return 1;
          } else {
            return 0;
          } 
        } else if (sortby == "name") {
          if(b.name < a.name){
            return -1;
          } else if(b.name > a.name){
            return 1;
          } else {
            return 0;
          }
        } else if (sortby == "created_at") {
          if(b.created_at < a.created_at){
            return -1;
          } else if(b.created_at > a.created_at){
            return 1;
          } else {
            return 0;
          }
        } 
        
      });
      setProducts(newArray);
    }
    const sortDesc = (sortby) => {
      var newArray = products.sort(function(a,b) {
        if (sortby == "price") {
          if(b.price < a.price){
            return -1;
          } else if(b.price > a.price){
            return 1;
          } else {
            return 0;
          } 
        } else if (sortby == "name") {
          if(b.name < a.name){
            return -1;
          } else if(b.name > a.name){
            return 1;
          } else {
            return 0;
          }
        } else if (sortby == "created_at") {
          if(b.created_at < a.created_at){
            return -1;
          } else if(b.created_at > a.created_at){
            return 1;
          } else {
            return 0;
          }
        } 
      });
      setProducts(newArray);
    }

    if(sortBylist[1] === "Asc"){
      sortAsc(sortBylist[0]);
    }else if(sortBylist[1] === "Desc"){
      sortDesc(sortBylist[0]);
    }
    console.log("jjkk");
    console.log(sortBylist[1] );
    console.log(sortBylist[0] );
    console.log(products);
  }, [sortBy])
  


  return (
    <>
      <Meta title="Our Store" />
      <BreadCrumb title="Our Store" />
      <Container className="store-wrapper py-5 home-wrapper-2">
        <div className="row ">
          <div className="sm:w-full md:w-[23%] ">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Shop By Categories</h3>
              <div className="">
                <ul className="ps-0">
                <li value="All"
                    onClick={(e)=>{
                      setfiltere("All");

                     }}
                     >All</li>
                {categorys.map( category => (
                    <li value={category.id} 
                    onClick={(e)=>{
                      setfiltere(category.id);

                     }}
                     >{category.name}</li>
                ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="sm:w-full md:w-[73%] ">
            <div className="filter-sort-grid mb-3">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0">Sort&nbsp;By:</p>
                  <select name="" id="" className="form-control form-select"
                   value={sortBy} 
                   onChange={(e)=>{
                    setSortBy(e.target.value);
                    }}>
                    <option value="">Sort</option>
                    <option value='name Asc' >Title, A-Z</option>
                    <option value="name Desc">Title, Z-A</option>
                    <option value="price Desc">Price, low to high</option>
                    <option value="price Asc">Price, high to low</option>
                    <option value="created_at Asc">Date, old to new</option>
                    <option value="created_at Desc">Date, new to old</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="product-list pb-5">
              <div className="d-flex flex-wrap gap-10">
                {products.map( product => (
                    <ProductCard  product={product} key={product.id} />
                ))}
              </div>
            </div>
            <div className="product-list">
              <div class="w-full flex justify-around	 items-center	" >
                <a className={`cursor-pointer ${(count == 1) ? 'invisible' : 'visible'}`}
                 onClick={()=> {if(count > 1){setCount(count-1)}}}
                 >
                    <img src="images/left-arrow.png" />
                </a>
                <p>{count}</p>
                <a className={`cursor-pointer ${(count == last_page) ? 'invisible' : 'visible'}`} onClick={()=> {if(count < last_page){setCount(count+1)}}} >
                    <img className="rotate-180" src="images/left-arrow.png" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default OurStore;
