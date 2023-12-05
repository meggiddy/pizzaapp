'use client'
import { fooditems } from "@/foodlist";
import Image from "next/image";
import { useState } from "react";


export default function Page({ params }) {
  const [cart, setCart] = useState([]);

  const product = fooditems.find((item) => item.id === parseInt(params.id, 10));

  if (!product) {
    return <div>Product not found</div>;
  }
  const addToCart = () => {
    setCart([...cart, product]);
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="flex flex-col md:flex-row py-8 md:py-20 mx-4 md:mx-10">
      <div className="md:pt-20 md:w-1/2">
        <Image src={product.image} alt="product" width={500} height={500} />
      </div>
      <div className="md:py-20 md:w-1/2">
        <h2 className="text-2xl pb-4">{product.title}</h2>
        <p className="pb-3">{product.description}</p>
        <p>Tags: {product.tags.join(', ')}</p>
        <p>Sizes: {product.sizes.join(', ')}</p>
        <div className="py-4">
          <p>Choose additional ingredients:</p>
          {product.addons.map((item) => (
            <div key={item}>
              <label>
                <input type="checkbox" /> {item}
              </label>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 py-6">
          {/* Quantity: {product.quantity} */}
          <button onClick={addToCart} className="w-full md:w-auto p-4 bg-amber-400 rounded-lg">
            ADD TO CART
          </button>
          <button className="w-full md:w-auto p-4 hover:bg-slate-600 hover:text-white rounded-lg">
            LIKE
          </button>
        </div>
        <div>Total: ${total.toFixed(2)}</div>
      </div>
    </div>
  );
}
