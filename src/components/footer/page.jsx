function Footer() {
  return (
    <div className="flex pt-10 justify-center mx-0">
      <div className="flex flex-col">
        <a className="mb-4">INFORMATION</a>
        <a href="/">Home</a>
        <a href="/blog">Blog</a>
        <a href="/about">About Us</a>
        <a href="/products">Menu</a>
        <a href="/contact">Contact Us</a>
      </div>
      <div className="flex flex-col">
        <a className="mb-4">TOP ITEMS</a>
        <a href={`/products/1`}>Pepperoni</a>
        <a href={`/products/2`}>Swiss Mushroom</a>
        <a href={`/products/3`}>Barbeque Chicken</a>
        <a href={`/products/4`}>Vegetarian</a>
        <a href={`/products/5`}>Ham and Cheese</a>
      </div>

      <div className="flex flex-col">
        <a className="mb-4">OTHERS</a>
        <a>Checkout</a>
        <a>Cart</a>
        <a>Product</a>
        <a>Locatons</a>
        <a>Legal</a>
      </div>
      <div className="flex flex-col">
        <a className="mb-4">SOCIAL MEDIA</a>
        <div></div>
        <p>Signup and get exclusive offers and coupon codes</p>
        <button>SIGN UP</button>
      </div>
    </div>
  );
}

export default Footer;
