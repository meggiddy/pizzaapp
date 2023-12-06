function Footer() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between md:flex-row md:justify-center mx-10 gap-6 p-6 md:py-12 bg-orange-300">
      <div className="flex flex-col mb-6 md:mb-0">
        <a className="mb-2 md:mb-4">INFORMATION</a>
        <a href="/">Home</a>
        <a href="/blog">Blog</a>
        <a href="/about">About Us</a>
        <a href="/products">Menu</a>
        <a href="/contact">Contact Us</a>
      </div>
      <div className="flex flex-col mb-6 md:mb-0">
        <a className="mb-2 md:mb-4">TOP ITEMS</a>
        <a href={`/detail/1`}>Diavola</a>
        <a href={`/detail/2`}>Margherita</a>
        <a href={`/detail/3`}>Hawaiian</a>
        <a href={`/detail/4`}>Vegetarian</a>
        <a href={`/detail/5`}>Chicken Sandwich</a>
      </div>
      <div className="flex flex-col mb-6 md:mb-0">
        <a className="mb-2 md:mb-4">OTHERS</a>
        <a>Checkout</a>
        <a>Cart</a>
        <a>Product</a>
        <a>Locations</a>
        <a>Legal</a>
      </div>
      <div className="flex flex-col">
        <a className="mb-2 md:mb-4">SOCIAL MEDIA</a>
        <p className="mb-2 md:mb-4">Signup and get exclusive offers and coupon codes</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">SIGN UP</button>
      </div>
    </div>
  );
}

export default Footer;
