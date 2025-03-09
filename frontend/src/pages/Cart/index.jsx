import React from "react";
import useCart from "../../hooks/useCart";
import { FaTrash } from "react-icons/fa";
import CartService from "../../services/cart.service";
import Swal from "sweetalert2";

const CartPage = () => {
  const [cart, refetch] = useCart();
  const handleClearCart = async () =>{
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      confirmButtonColor: "#3084d6",
      showConfirmButton: true,
      confirmButtonText: "Yes, delete it!",
    })
    //.then((result))  => {
    //   if(result.isConfirmed){

    //   }
    // }
  };
  const handleDeleteItem= async () =>{
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      confirmButtonColor: "#3084d6",
      showConfirmButton: true,
      confirmButtonText: "Yes, delete it!",
    })
    //.then((result))  => {
    //   if(result.isConfirmed){

    //   }
    // }
  };
  const handleInCrease= async () =>{};
  const handleDeCrease = async () =>{};

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-red-600">Items Added to The Cart</h1>
      </header>

      <div className="overflow-x-auto">
        <table className="table w-full border-collapse border border-gray-200">
          <thead className="bg-red-600 text-white">
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Price Per Unit</th>
              <th>Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td><img src="/images/laptop-backpack.png" alt="Laptop Backpack" className="w-12 h-12" /></td>
              <td>Geeky Laptop Backpack</td>
              <td><input type="number" className="input input-bordered w-20 text-center" defaultValue={2} /></td>
              <td>1519.92 ฿</td>
              <td>3039.84 ฿</td>
              <td><button className="btn btn-error btn-sm">Delete</button></td>
            </tr>
            <tr>
              <td>2</td>
              <td><img src="/images/laptop-backpack.png" alt="Laptop Backpack" className="w-12 h-12" /></td>
              <td>Geeky Laptop Backpack</td>
              <td><input type="number" className="input input-bordered w-20 text-center" defaultValue={2} /></td>
              <td>1519.92 ฿</td>
              <td>3039.84 ฿</td>
              <td><button className="btn btn-error btn-sm">Delete</button></td>
            </tr>
            <tr>
              <td>3</td>
              <td><img src="/images/mouse-pad.png" alt="Mouse Pad" className="w-12 h-12" /></td>
              <td>Circuit Board Mouse Pad</td>
              <td><input type="number" className="input input-bordered w-20 text-center" defaultValue={2} /></td>
              <td>455.75 ฿</td>
              <td>911.50 ฿</td>
              <td><button className="btn btn-error btn-sm">Delete</button></td>
            </tr>
            <tr>
              <td>4</td>
              <td><img src="/images/keychain.png" alt="Keychain" className="w-12 h-12" /></td>
              <td>Keyboard Key Keychain</td>
              <td><input type="number" className="input input-bordered w-20 text-center" defaultValue={3} /></td>
              <td>303.83 ฿</td>
              <td>911.49 ฿</td>
              <td><button className="btn btn-error btn-sm">Delete</button></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-8 flex justify-between">
        <div className="w-1/2">
          <h2 className="font-bold text-lg mb-4">Customer Details</h2>
          <p><strong>Name:</strong> Pimpakarn SE</p>
          <p><strong>Email:</strong> Pimpakarn@gmail.com</p>
          <p><strong>User_Id:</strong> NaCvq5VMLu8YTL5nJTD0HkLmL2</p>
        </div>

        <div className="w-1/2 text-right">
          <h2 className="font-bold text-lg mb-4">Shopping Details</h2>
          <p><strong>Total Items:</strong> 4</p>
          <p><strong>Total Price:</strong> 7902.67 ฿</p>
          <button className="btn btn-primary mt-4">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;