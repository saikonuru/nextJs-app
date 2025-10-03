"use client"; // Tells to render it as client components
const AddToCart = () => {
  return (
    <button
      onClick={() => {
        console.log("Button click!");
      }}
      type="button"
    >
      Add to Cart
    </button>
  );
};

export default AddToCart;
