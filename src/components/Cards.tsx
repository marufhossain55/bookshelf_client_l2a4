/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Cards = ({ sProductData }: any) => {
  // const { data: sProductData,isLoading } = useGetAllProductsQuery(undefined);
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
    }: any) => ({
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

  // console.log(productData);
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 container mx-auto mt-8">
      {productData?.map((item: any) => (
        <Card>
          <img src={item.image} alt="" />
          <CardHeader>
            <CardTitle>{item?.title}</CardTitle>

            <CardDescription className="font-bold">
              <span className=" font-semibold text-gray-800 mb-4">Brand:</span>
              {item?.author}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>price: ${item?.price}</p>
          </CardContent>
          <CardFooter>
            <Link to={`/cardDetails/${item?._id}`}>
              <button className="bg-emerald-400 text-white  rounded-xl p-2 px-4 ">
                View Details
              </button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Cards;
