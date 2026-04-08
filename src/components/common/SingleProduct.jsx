import { useFilterContext } from "@/components/contexts/filterContext";
import { addToCart } from "@/features/cart/cartSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const SingleProduct = () => {

  // geting cart data form the redux 
  const dispatch = useDispatch()

  const cart = useSelector((state )=>state.cart.cartItems)


  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [review, setReview] = useState({
    name: "",
    email: "",
    message: "",
  });
const product = useLoaderData().data

  if (!product) return <p>Loading...</p>;

  // handle add to cart function

  const handleAddToCart  = (product) => {
    const isProductExist = cart.some(p=>p.id === product.id)
    if(isProductExist) return toast.warning('Product is already exist in the cart.')
    dispatch(addToCart({...product,quantity}))
    toast.success('Product Added to cart successfully')
  };


  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">

      {/* 🔥 Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* 🖼️ Image */}
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-[400px] object-cover rounded-xl"
        />

        {/* 📦 Info */}
        <div className="space-y-4">

          {/* Name */}
          <h1 className="text-3xl font-bold">{product.title}</h1>

          {/* ⭐ Rating */}
          <div className="flex items-center gap-1 text-yellow-500">
            {"★".repeat(Math.round(product.rating))}
            <span className="text-gray-500 ml-2">
              ({product.rating})
            </span>
          </div>

          {/* 💰 Price */}
          <p className="text-2xl font-semibold text-green-600">
            ${product.price}
          </p>

          {/* 📏 Size */}
          <select
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="border p-2 rounded w-full"
          >
            <option value="">Select Size</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
          </select>

          {/* 🔢 Quantity */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setQuantity(q => Math.max(1, q - 1))
                toast.success('Product Quantity is Decreased')
              }}
              className="px-3 py-1 bg-gray-200 rounded"
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => {
                setQuantity(q => q + 1)
                toast.success('Product Quantity in Increased')
              }}
              className="px-3 py-1 bg-gray-200 rounded"
            >
              +
            </button>
          </div>

          {/* 📦 Status */}
          <p className="text-green-600 font-medium">
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </p>

          {/* 🛒 Buttons */}
          <div className="flex gap-4">
            <button className="bg-gray-800 text-white px-4 py-2 rounded">
              Add to Wishlist
            </button>
            <button onClick={()=>handleAddToCart(product)} className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer active:scale-95 duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* 📄 Features */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Product Details</h2>
        <p className="text-gray-600">{product.description}</p>
      </div>

      {/* 🚚 Shipping & Returns */}
      <div className="space-y-3">
        <details className="border p-3 rounded">
          <summary className="cursor-pointer font-medium">
            Shipping Info
          </summary>
          <p className="text-gray-600 mt-2">
            Free shipping within 5-7 business days.
          </p>
        </details>

        <details className="border p-3 rounded">
          <summary className="cursor-pointer font-medium">
            Returns Policy
          </summary>
          <p className="text-gray-600 mt-2">
            7-day return available for unused products.
          </p>
        </details>
      </div>

      {/* ⭐ Reviews Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">
          Customer Reviews
        </h2>

        {/* Example Reviews */}
        <div className="space-y-3 mb-6">
          <div className="border p-3 rounded">
            <p className="font-medium">John Doe</p>
            <p className="text-yellow-500">★★★★☆</p>
            <p className="text-gray-600">
              Great product! Really loved it.
            </p>
          </div>
        </div>

        {/* ✍️ Add Review */}
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Name"
            className="w-full border p-2 rounded"
            onChange={(e) =>
              setReview({ ...review, name: e.target.value })
            }
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
            onChange={(e) =>
              setReview({ ...review, email: e.target.value })
            }
          />

          <textarea
            placeholder="Write your review..."
            className="w-full border p-2 rounded"
            rows={4}
            onChange={(e) =>
              setReview({ ...review, message: e.target.value })
            }
          />

          <button className="bg-green-600 text-white px-4 py-2 rounded">
            Post Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
