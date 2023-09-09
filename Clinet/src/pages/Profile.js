import { Link } from "react-router-dom";
import React , { useState , useEffect} from "react";
import { IoIosArrowBack } from "react-icons/io";
import { AiFillDelete } from "react-icons/ai";
import Container from "../components/Container";
import axiosClient from "../axios-client.js";
import {useStateContext} from "../context/ContextProvider";

const Profile = () => {
  const [orders , setOrders] = useState([]);
  const { user} = useStateContext();
  const {id_Order , setId_Order} = useState("");
  const {massage , setMassage} = useState("");
  const path = 'http://127.0.0.1:8000/storage/';
  useEffect( ()=>{

    axiosClient.get("/order/"+user.id)
      .then(({ data }) => {
        const dataG = data.data.reduce((acc, cur) => {
          if (acc[cur.order_id]) {
            acc[cur.order_id].push(cur);
          } else {
            acc[cur.order_id] = [cur];
          }
          return acc;
        }, {});

        setOrders(dataG)
        console.log(dataG)
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          console.log(response);
          
        }
      });

  },[orders])
  
  const deleteOrder = (id_Order) => {
    axiosClient.delete(`/order/${id_Order}`)
      .then(({data}) => {
        setMassage(data)
        console.log(massage);
      })
      .catch(err => {
        const response = err.response;
        if (response && response.status === 422) {
          console.log(response);
          
        }
      });
  };


  return (
    <>
      <Container className="checkout-wrapper home-wrapper-2 pt-[50px]  px-5 pt-4 pb-5">
        <div className="container-xxl m-auto flex flex-col sm:flex-row gap-5">
          <div className="">
            <div className="checkout-left-data">
              <div className="">
                <img className='w-[250px] m-auto rounded-full' src={path + user.profile_photo_path} />
              </div>
            </div>
          </div>
          <div className="pt-[50px] pag-3">
            <h2 className="total text-[25px] pt-1 mb-5">Information</h2>
            <p className="subtotal pb-1"> Name : {user.name} </p>
            <p className="subtotal pb-1"> Email : {user.email}</p>
          </div>
        </div>
      </Container>
      <Container className="cart-wrapper home-wrapper-2 p-5">
        <div className="row">
          <div className="col-12">
            <h2 className="total text-[30px] pt-1 mb-5">List Orders</h2>
            <div className="cart-header d-flex align-items-center justify-content-between">
              <h4 className="cart-col-3">Code Order</h4>
              <h4 className="cart-col-2">Products</h4>
              <h4 className="cart-col-2">Quantity</h4>
              <h4 className="cart-col-2">Data</h4>
              <h4 className="cart-col-3">Totale</h4>
              <h4 className="cart-col-4">cansel Order</h4>
            </div>
            {Object.keys(orders).map((key) => (
              
              <div className="cart-data d-flex align-items-center justify-content-between my-3">
                <div className="cart-col-3 d-flex justify-start	pl-5 gap-15 mb-3">
                  <div className="w-25">
                    <p>#{key}</p>
                  </div>
                </div>
                <div className="cart-col-2 flex justify-between  items-center	 gap-5	flex-col ">
                    {orders[key].map((item, index) => (
                      <Link to={'/product/' +item.id+'/'+ item.slug} className=" product-title">
                        <img className="w-[45px]" src={path+item.main_image} />
                      </Link>
                        
                    ))}
                </div>
                <div className="cart-col-2 items-center	flex flex-col align-items-center gap-15 mb-3">
                  {orders[key].map((item, index) => (
                   <h5 className="price">{item.quantity}</h5>
                  ))}
                </div>
                <div className="cart-col-2 items-center	flex flex-col align-items-center gap-15 mb-3">
                  {orders[key].map((item, index) => (
                   <h5 className="price">{item.date_at.substring(0, 10)}</h5>
                  ))}
                </div>
                
                <div className="cart-col-4">
                {orders[key].map((item, index) => (
                  index === 0 ? (
                    <h5 className="price">${item.billing_total}</h5>
                  ) : (
                    <></>
                  )
                ))}
                     
                </div>
                <div className="cart-col-3 flex justify-end	 gap-15">
                  <div>
                    <AiFillDelete 
                    className="text-danger fs-5 cursor-pointer" onClick={()=> deleteOrder(key)}/>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </>
  );
};

export default Profile;
