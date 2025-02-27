import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useGetAllProductsQuery } from '@/redux/Features/Admin/adminManagement';
import { Link } from 'react-router-dom';

const CardsHome = () => {
  const { data: sProductData } = useGetAllProductsQuery(undefined);
  console.log(sProductData);

  const productData = sProductData?.data?.map(
    ({
      _id,
      title,
      author,
      price,
      quantity,
      category,
      description,
      image,
    }) => ({
      _id: _id,
      title: title,
      author: author,
      price: price,
      quantity: quantity,
      category: category,
      description: description,
      image: image,
    })
  );
  console.log(productData);

  return (
    <div className="mt-5">
      {/* Heading */}
      <div className="flex justify-center items-center mt-5">
        <h2 className="text-3xl font-semibold text-gray-800">
          Latest Products
        </h2>
      </div>

      {/* Product Grid */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 container mx-auto mt-8 px-4">
        {productData?.map((item) => (
          <Card
            key={item._id}
            className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {/* Product Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />

            {/* Card Header */}
            <CardHeader className="p-4">
              <CardTitle className="text-xl font-bold text-gray-800">
                {item.title}
              </CardTitle>
              <CardDescription className="text-sm text-gray-600">
                <span className="font-semibold">Author:</span> {item.author}
              </CardDescription>
            </CardHeader>

            {/* Card Content */}
            <CardContent className="p-4">
              <p className="text-lg font-semibold text-gray-800">
                Price: ${item.price}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Quantity:</span> {item.quantity}
              </p>
            </CardContent>

            {/* Card Footer */}
            <CardFooter className="p-4">
              <Link to={`/cardDetails/${item._id}`} className="w-full">
                <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 rounded-lg transition-colors duration-300">
                  View Details
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center items-center mt-8">
        <Link to="/allProduct">
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300">
            View All
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CardsHome;
