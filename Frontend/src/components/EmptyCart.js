const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <img
        src="https://i.pinimg.com/736x/d6/f6/5d/d6f65dc8e2c70967f201f1d7ca7bedff.jpg"
        alt="emptyCart"
        className=" mt-0 mb-0 mx-[174.66px]"
      />
      <p className="text-lg font-[25px] text-gray-700">
        Oh! It seems like your cart is empty.
      </p>
    </div>
  );
};

export default EmptyCart;
