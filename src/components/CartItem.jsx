
// import {FcDeleteDatabase} from "react-icons/fc"
// import { useDispatch } from "react-redux";
// import { remove } from "../redux/Slices/CartSlice";
// import { toast } from "react-hot-toast";

// const CartItem = ({item, itemIndex}) => {
//   const dispatch = useDispatch();

//   const removeFromCart = () => {
//     dispatch(remove(item.id));
//     toast.error("Item Removed");
//   }

//   return (
//     <div>

//       <div>

//         <div>
//           <img src={item.image} />
//         </div>
//         <div>
//           <h1>{item.title}</h1>
//           <h1>{item.description}</h1>
//           <div>
//             <p>{item.price}</p>
//             <div
//             onClick={removeFromCart}>
//               <FcDeleteDatabase/>
//             </div>
//           </div>

//         </div>


//       </div>

//     </div>
//   );
// };

// export default CartItem;




import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";
import "./CartItem.css"; // Add this line

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  };

  return (
    <div className="cart-item-card">
      <div className="cart-item-image">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="cart-item-details">
        <h1>{item.title}</h1>
        <p>{item.description}</p>
        <div className="cart-item-price-remove">
          <p>${item.price}</p>
          <div className="remove-icon" onClick={removeFromCart}>
            <FcDeleteDatabase />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
