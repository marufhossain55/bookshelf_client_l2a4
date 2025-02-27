import { removeCart, updateCart } from '@/redux/Features/Admin/ProductSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Cart = () => {
  const dispatch = useAppDispatch();
  const { carts } = useAppSelector((state) => state.product);
  console.log(carts);

  const totalPrice = carts.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleQuantityChange = (id: string, type: string) => {
    dispatch(updateCart({ type, id }));
    console.log(id);
  };

  const handleRemoveItem = (id: string) => {
    dispatch(removeCart(id));
  };

  return (
    <div className="bg-gray-50 py-12">
      <Helmet>
        <title>BookShelf | Cart</title>
      </Helmet>
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Header */}
        <h1 className="text-4xl font-bold text-emerald-600 text-center mb-12">
          Your Shopping Cart
        </h1>

        {/* Cart Items */}

        <div className="bg-white rounded-lg shadow-md p-6">
          {carts.length > 0 ? (
            <>
              <div className="hidden lg:grid md:grid-cols-6 font-semibold text-gray-600 border-b pb-4 mb-4">
                <p></p>
                <p className="col-span-2">Product</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
              </div>

              {carts.map((item) => (
                <div
                  key={item?._id}
                  className="border-b pb-4 mb-4 lg:grid md:grid-cols-6 items-center gap-4"
                >
                  {/* For Large Screens */}
                  <div className="hidden lg:block text-center">
                    <button
                      onClick={() => handleRemoveItem(item?._id)}
                      className="text-red-500 hover:text-red-700 transition lg:text-xl"
                      title="Remove item"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="hidden lg:flex col-span-2 items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 rounded-md"
                    />
                    <p className="text-lg font-medium text-gray-800">
                      {item.author}
                    </p>
                  </div>

                  <p className="hidden lg:block text-lg text-gray-700">
                    ${item.price}
                  </p>
                  <div className="hidden lg:flex items-center space-x-4">
                    <button
                      onClick={() =>
                        handleQuantityChange(item?._id, 'decrement')
                      }
                      className="bg-gray-200 text-gray-800 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-300"
                    >
                      -
                    </button>
                    <p className="text-lg text-gray-700">{item?.quantity}</p>
                    <button
                      onClick={() =>
                        handleQuantityChange(item?._id, 'increment')
                      }
                      className="bg-gray-200 text-gray-800 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                  <p className="hidden lg:block text-lg font-semibold text-gray-800">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>

                  {/* For Small Screens */}
                  <div className="lg:hidden">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center space-x-4">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-12 h-12 rounded-md"
                        />
                        <p className="text-sm font-medium text-gray-800">
                          {item.title}
                        </p>
                      </div>
                      <button
                        onClick={() => handleRemoveItem(item?._id)}
                        className="text-red-500 hover:text-red-700 transition text-lg"
                        title="Remove item"
                      >
                        ✕
                      </button>
                    </div>

                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-600">Price</p>
                      <p className="text-sm text-gray-700 font-semibold">
                        ${item.price}
                      </p>
                    </div>
                    <div className="flex justify-between items-center my-2">
                      <p className="text-sm text-gray-600">Quantity</p>
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={() =>
                            handleQuantityChange(item?._id, 'decrement')
                          }
                          className="bg-gray-200 text-gray-800 rounded-full w-6 h-6 flex items-center justify-center hover:bg-gray-300"
                        >
                          -
                        </button>
                        <p className="text-sm text-gray-700">{item.quantity}</p>
                        <button
                          onClick={() =>
                            handleQuantityChange(item?._id, 'increment')
                          }
                          className="bg-gray-200 text-gray-800 rounded-full w-6 h-6 flex items-center justify-center hover:bg-gray-300"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-600">Total</p>
                      <p className="text-sm text-gray-700 font-semibold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Summary */}
              <div className="flex justify-between items-center mt-6">
                <p className="text-xl font-semibold text-gray-800">
                  Total: ${totalPrice.toFixed(2)}
                </p>
                <Link to="/checkout">
                  <button className="bg-emerald-500 text-white py-3 px-6 rounded-lg hover:bg-emerald-600 transition focus:outline-none">
                    Checkout Now
                  </button>
                </Link>
              </div>
            </>
          ) : (
            <div className="text-center">
              <p className="text-lg text-gray-700">
                Your cart is currently empty!
              </p>
              <Link to={'/allProduct'}>
                <button className="mt-4 bg-emerald-500 text-white py-3 px-6 rounded-lg hover:bg-emerald-600 transition focus:outline-none">
                  Continue Shopping
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
