import { Button } from '@/components/ui/button';
import { useSingleProductQuery } from '@/redux/Features/Admin/adminManagement';
import { addCart } from '@/redux/Features/Admin/ProductSlice';
import { useAppDispatch } from '@/redux/hooks';
import { Helmet } from 'react-helmet';
import { FaShoppingCart } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'sonner';
import { TProduct } from '../AdminDashboard/ProductManagement/AddProducts';

const CardDetails = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { data: singleProduct } = useSingleProductQuery(id);
  const Book: TProduct = singleProduct?.data;

  const handleAddToCart = () => {
    // console.log(data)
    if (Book?.quantity > 0) {
      dispatch(addCart({ ...Book, totalQuantity: Book?.quantity }));
    } else {
      toast.error('Out of stock');
    }
  };

  return (
    <div className="bg-gray-50 py-12">
      <Helmet>
        <title>RideOn Wheels | Product Details</title>
      </Helmet>
      {/* Main Content */}
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Product Title and Price */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-emerald-500">
            {singleProduct?.data?.name}
          </h1>
          <p className="text-lg text-gray-700 mt-2">
            {singleProduct?.data?.description.slice(0, 100)}
          </p>
          <p className="text-2xl font-bold text-gray-900 mt-4">
            ${singleProduct?.data?.price}
          </p>
        </div>

        {/* Product Images and Gallery */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            {/* Main Product Image */}
            <img
              src={singleProduct?.data?.image}
              className="w-full rounded-lg shadow-lg"
              alt=""
            />
            {/* Image Thumbnails */}
          </div>

          {/* Product Details */}
          <div>
            {/* Product Description */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Product Description
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              {singleProduct?.data?.description}
            </p>
            <p className="text-2xl font-semibold text-gray-800 mb-4">
              <span className="text-xl font-semibold text-gray-800 mb-4">
                Quantity:
              </span>{' '}
              {singleProduct?.data?.quantity}
            </p>
            <p className="text-lg text-gray-700 mb-6">
              {singleProduct?.data?.inStock ? (
                <Button className="bg-emerald-400 text-white">In stock</Button>
              ) : (
                <Button className="bg-red-400 text-white">Out of stock</Button>
              )}
            </p>
            <p className="text-lg text-gray-700 mb-6">
              <span className="text-xl font-semibold text-gray-800 mb-4">
                Brand:
              </span>{' '}
              {singleProduct?.data?.brand}
            </p>
            <p className="text-lg text-gray-700 mb-6">
              <span className="text-xl font-semibold text-gray-800 mb-4">
                Category:
              </span>{' '}
              {singleProduct?.data?.category}
            </p>
            {singleProduct?.data?.inStock && (
              <div className="flex items-center gap-8 ">
                <Button
                  onClick={handleAddToCart}
                  className="bg-emerald-500 text-white py-3 px-6 rounded-lg hover:bg-emerald-600 focus:outline-none"
                >
                  <FaShoppingCart className="mr-2" />
                  Add to Cart
                </Button>

                <Link to={'/cart'}>
                  <Button
                    onClick={handleAddToCart}
                    className="bg-emerald-500 text-white py-3 px-6 rounded-lg hover:bg-emerald-600 focus:outline-none"
                  >
                    <FaShoppingCart className="mr-2" />
                    Order Now
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Add to Cart & Wishlist */}
      </div>
    </div>
  );
};

export default CardDetails;
