import BreadCrumb from "../components/BreadCrumb";
import React , { useState , useEffect} from "react";
import Meta from "../components/Meta";
import { AiFillDelete } from "react-icons/ai";
import { Link ,Navigate} from "react-router-dom";
import Container from "../components/Container";
import { useStateContext } from "../context/ContextProvider";
import axiosClient from "../axios-client.js";

const Cart = () => {
  const [changeQty , setChangeQty]= useState([])
  const [sum ,setSum] = useState(0);
  const { cart , setCart , user} = useStateContext();
  const path = 'http://127.0.0.1:8000/storage/';
  console.log(cart);
  console.log(" rr" ,cart.length == 0);


  
  useEffect( ()=>{
    const foundDict = cart.find(dict => dict["id"] === changeQty[0]);
    if (foundDict) {
        foundDict.Qty = changeQty[1];
        var num = cart.reduce((total, item) => {
          return total + (item.price * item.Qty);
        }, 0);
        setSum(num);
    }
    var num = cart.reduce((total, item) => {
      return total + (item.price * item.Qty);
    }, 0);
    setSum(num);

    

  },[changeQty, cart])
  

  const deleteCart = (idCart)=>{
    setCart((prevcart)=> [...prevcart.filter((u)=>u.id!== idCart)]);
  }


  const onSubmit = (ev) => {
    ev.preventDefault();

    const payload = {
      user_id	: user.id,
      billing_total	: sum,
      order_product : cart,
    };

    console.log(payload)
    if(cart.length > 0){
      axiosClient.post("/order", payload)
      .then(({ data }) => {
        setCart([])
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          console.log(response);
        }
      });
    } else {
      console.log("ffff");
    }
  };

  return (
    <>
      <Meta title="Cart" />
      <BreadCrumb title="Cart" />
      <Container className="cart-wrapper home-wrapper-2 p-5">
        <div className="row">
          <div className="col-12">
            <div className="cart-header d-flex align-items-center justify-content-between">
              <h4 className="cart-col-1">Products</h4>
              <h4 className="cart-col-2">Price</h4>
              <h4 className="cart-col-3">Quantity</h4>
              <h4 className="cart-col-4">Total</h4>
            </div>
            {cart.map((item) => (
              <div className="cart-data d-flex align-items-center justify-content-between my-3">
                <div className="cart-col-1 d-flex align-items-center gap-15 mb-3">
                  <div className="w-25">
                    <img
                      src={path+item.main_image}
                      alt="watch"
                      className="img-fluid"
                    />
                  </div>
                  <div className="w-75">
                    <p>{item.name}</p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="price">${item.price}</h5>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-15">
                  <div>
                    <input
                      className="form-control"
                      style={{ width: "70px" }}
                      min={1}
                      max={10}
                      type="number"
                      value={item.Qty}
                      onChange={(e)=>{
                        setChangeQty([item.id , e.target.value]);
                        console.log("44444");
                      }}
                      name=""
                      id=""
                    />
                  </div>
                  <div>
                    <AiFillDelete onClick={()=> deleteCart(item.id)}
                    className="text-danger fs-5" />
                  </div>
                </div>
                <div className="cart-col-4">
                  <h5 className="price">${item.price * item.Qty}</h5>
                </div>
              </div>
            ))}
          </div>
          <div className="col-12 pt-3">
            <div className="d-flex justify-content-between align-items-baseline">
              <Link to="/store" className="button">
                Continue to shopping
              </Link>
              <div className="d-flex flex-column align-items-end">
                <h4>SubTotal : ${sum}</h4>
                <p>Taxes and shipping calculated at checkout</p>
                <Link to="/profile" className="button" onClick={onSubmit}>
                  Check Out
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
