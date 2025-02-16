// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import CartItem from "../components/CartItem";




// const Cart = () => {

//   const {cart} = useSelector((state) => state);
//   console.log("Printing Cart");
//   console.log(cart);
//   const [totalAmount, setTotalAmount] = useState(0);

//   useEffect( () => {
//     setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
//   }, [cart])

//   return (
//     <div>
//   {
//     cart.length > 0  ? 
//     (<div>


//       <div>
//         {
//           cart.map( (item,index) => {
//             return <CartItem key={item.id} item={item} itemIndex={index} />
//           } )
//         }
//       </div>

//       <div>

//         <div>
//           <div>Your Cart</div>
//           <div>Summary</div>
//           <p>
//             <span>Total Items: {cart.length}</span>
//           </p>
//         </div>

//         <div>
//           <p>Total Amount: ${totalAmount}</p>
//           <button>
//             CheckOut Now
//           </button>
//         </div>

//       </div>


//     </div>) : 
//     (<div>
//       <h1>Cart Empty</h1>
//       <Link to={"/"}>
//         <button>
//           Shop Now
//         </button>
//       </Link>
//     </div>)
//   }
//     </div>
//   );
// };

// export default Cart;



import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import "./Cart.css"; // Add this line

const Cart = () => {
  const { cart } = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="cart-container">
      {cart.length > 0 ? (
        <div className="cart">
          <div className="cart-items">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          <div className="cart-summary">
            <div className="summary-details">
              <div>Your Cart</div>
              <div>Summary</div>
              <p>
                <span>Total Items: {cart.length}</span>
              </p>
            </div>

            <div className="summary-total">
              <p>Total Amount: ${totalAmount}</p>
              <button className="checkout-button">CheckOut Now</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="cart-empty">
          <h1>Cart Empty</h1>
          <Link to={"/"}>
            <button className="shop-now-button">Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
