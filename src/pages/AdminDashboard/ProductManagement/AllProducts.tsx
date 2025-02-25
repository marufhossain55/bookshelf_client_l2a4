/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  useDeleteProductMutation,
  useGetAllProductsQuery,
} from '@/redux/Features/Admin/adminManagement';
import { Helmet } from 'react-helmet';
import { AiOutlineDelete } from 'react-icons/ai';
import { FaCheck } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';
import { toast } from 'sonner';
import AddModal from './AddModal';
import UpdateModal from './UpdateModal';

// interface data {
//   _id: string;
// }
const AllProducts = () => {
  // const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);
  const { data: productsData, isLoading } = useGetAllProductsQuery(undefined);
  const [productDelete] = useDeleteProductMutation();
  const data = productsData?.data?.map(
    ({ _id, title, author, price, quantity, category, inStock, image }) => ({
      _id: _id,
      title: title,
      author: author,
      price: price,
      quantity: quantity,
      category: category,
      inStock: inStock,
      image: image,
    })
  );
  // setParams(data)
  console.log('product', data);

  const handleProductDelete = async (id: string) => {
    const toastId = toast.loading('loading......');
    try {
      const res = await productDelete(id);
      console.log(res);
      if (res?.error) {
        toast.error('Something went wrong');
      } else {
        toast.success('Delete Product...', { id });
      }
    } catch (error: unknown) {
      toast.error('Delete Failed....', { id: toastId });
    }
  };

  if (isLoading) {
    return <h1>loading</h1>;
  }
  return (
    <div className="w-full mt-5">
      <Helmet>
        <title>RideOn Wheels | Admin All Products</title>
      </Helmet>
      <div className="flex justify-end">
        <AddModal />
      </div>
      <table className="w-full text-left mt-5 border border-separate rounded border-slate-200">
        <tbody>
          <tr>
            <th></th>
            <th
              scope="col"
              className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Product Name
            </th>
            <th
              scope="col"
              className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Brand
            </th>
            <th
              scope="col"
              className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Price
            </th>
            <th
              scope="col"
              className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Quantity
            </th>
            <th
              scope="col"
              className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Category
            </th>
            <th
              scope="col"
              className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
            >
              InStock
            </th>
            <th
              scope="col"
              className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Action
            </th>
          </tr>
          {data?.map((item) => (
            <tr className="block border-b sm:table-row last:border-b-0 border-slate-200 sm:border-none">
              <td className="before:w-24 before:inline-block before:font-medium before:text-slate-700  sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                <img className="w-20" src={item?.image} alt="" />
              </td>
              <td
                data-th="Product Name"
                className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
              >
                {item?.title}
              </td>
              <td
                data-th="Brand"
                className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
              >
                {item.author}
              </td>
              <td
                data-th="Price"
                className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
              >
                ${item.price}
              </td>
              <td
                data-th="Quantity"
                className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
              >
                {item.quantity}
              </td>
              <td
                data-th="Category"
                className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
              >
                {item.category}
              </td>
              <td
                data-th="Instock"
                className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500  "
              >
                {item?.inStock ? <FaCheck /> : <RxCross1 />}
              </td>
              <td
                data-th="Action"
                className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
              >
                <div className="flex gap-5">
                  <div>
                    {/* <FaRegEdit className="text-emerald-500" /> */}
                    <UpdateModal productId={item?._id}></UpdateModal>
                  </div>
                  <div>
                    <AiOutlineDelete
                      onClick={() => handleProductDelete(item?._id)}
                      className="text-red-400"
                    />
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllProducts;
