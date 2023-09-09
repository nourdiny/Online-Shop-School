import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
// import Color from "../components/Color";
import ReactStars from "react-rating-stars-component";
import React ,{ useState , useEffect } from "react";
import { useParams} from "react-router-dom";
import ReactImageZoom from "react-image-zoom";
import { FiHeart } from "react-icons/fi";
import { IoIosGitCompare } from "react-icons/io";
import Container from "../components/Container";
import axiosClient from "../axios-client.js";
import {useStateContext} from "../context/ContextProvider";

const SingleProduct = () => {
  const {cart , setCart} = useStateContext();
  let {id}= useParams();
  const [qtyProduct, setQtyProduct] = useState(1)
  const [product, setProduct] = useState([])
  const path = 'http://127.0.0.1:8000/storage/';
  const paths_imgaes = [].concat(product.alt_images);
  const {name , main_image , price } = product;
  useEffect(() => {
    getUsers();

  }, [])

  const getUsers = async () => {
    try {
      const response = await axiosClient.get(`/products/${id}`);
      setProduct(response.data.data);
    } catch (error) {
      console.log(error);
    } 
    
  }

  const addCart = (newCart)=>{
    const foundDict = cart.find(dict => dict["id"] === newCart.id);
    if (foundDict) {
    foundDict.Qty += 1;
    console.log(newCart);

    } else {
        setCart((prevcart)=> [...prevcart,newCart]);
        console.log(newCart);
    }
  }
  



  return (
    <>
      <Meta title={product.name} />
      <BreadCrumb title={product.name} />
      <Container className="main-product-wrapper home-wrapper-2 p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="md:col-6 sm:w-full">
            <div className="main-product-image pb-0">
              <div>
              <img
                  src={path+product.main_image}
                  alt="pic"
                  className="img-fluid p-0"
                />
              </div>
            </div>
            <div className="other-product-image grid grid-cols-2 lg:grid-cols-4 gap-1">
              {paths_imgaes.map(item =>(
                <div>
                  <img
                    src={path+item}
                    alt="pic"
                    className="img-fluid w-full h-full p-0"
                  />
                </div>
              ))}

            </div>
          </div>
          <div className="col-6 w-full">
            <div className="main-product-details">
              <div className="border-bot">
                <h3 className="title">
                  {product.name}
                </h3>
              </div>
              <div className="border-bot pb-2 review">
                <p className="price">$ {product.price}</p>
              </div>
              <div className="border-bot">
                
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Category :</h3>
                  <p className="product-data">{product.C_name}</p>
                </div>
            
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Avalibility :</h3>
                  <p className="product-data">In Stock</p>
                </div>
                <div className="d-flex gap-10 flex-rows mb-3">
                  <h3 className="product-heading">Quantity :</h3>
                  <div className="d-flex gap-30 align-items-center">
                    <input
                      className="form-control"
                      type="number"
                      name=""
                      id=""
                      value={qtyProduct} 
                      onChange={(e)=>{
                        setQtyProduct(e.target.value);
                        }}
                      style={{ width: "70px" }}
                      min={1}
                      max={10}
                    />
                  </div>
                </div>
                <div className="d-flex gap-15 align-items-center mb-3">
                  <button className="button form-control" onClick={()=> addCart({name ,id , main_image , price , "Qty" : qtyProduct })}
                  type="submit">
                    Add to cart
                  </button>
                  <button className="button signup form-control" type="submit">
                    Buy Now
                  </button>
                </div>
                <div className="d-flex gap-5 flex-column my-2 pe-2">
                  <h3 className="product-heading">Shipping & Return</h3>
                  <p className="product-data">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minima repudiandae reprehenderit impedit labore mollitia
                    incidunt aut tempora commodi, et sit aspernatur ipsum
                    inventore nobis laboriosam nihil! Quo soluta illum cum.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container className="description-wrapper home-wrapper-2 p-5">
        <div className="row">
          <div className="col-12">
            <h4>Description</h4>
            <div className="bg-white p-4">
              <p>
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Container className="featured-wrapper p-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">You Also Like</h3>
          </div>
          {/* <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard /> */}
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;
