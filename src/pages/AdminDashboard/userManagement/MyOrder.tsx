/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@/components/ui/button';
import { useUserAllOrdersQuery } from '@/redux/Features/Admin/orderApi';
import { Helmet } from 'react-helmet';

const MyOder = () => {
  const { data: sMyOrder } = useUserAllOrdersQuery(undefined);
  const orders = sMyOrder?.data;
  console.log(orders);

  return (
    <div className="w-full mt-5">
      <Helmet>
        <title>BookShelf | My Order</title>
      </Helmet>
      <div className="flex justify-end"></div>
      <table className="w-full text-left mt-5 border border-separate rounded border-slate-200">
        <tbody>
          <tr>
            <th
              scope="col"
              className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Transaction Id
            </th>
            <th
              scope="col"
              className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Name
            </th>
            <th
              scope="col"
              className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Email
            </th>
            <th
              scope="col"
              className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Date
            </th>
            <th
              scope="col"
              className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Total{' '}
            </th>
            <th
              scope="col"
              className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Status
            </th>
          </tr>
          {orders?.map((item: any) => (
            <tr className="block border-b sm:table-row last:border-b-0 border-slate-200 sm:border-none">
              <td
                data-th="Transaction"
                className="before:w-24 before:inline-block before:font-medium before:text-slate-700  sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
              >
                {item?.transaction?.id}
              </td>
              <td
                data-th="Name"
                className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
              >
                {item?.user?.name}
              </td>
              <td
                data-th="email"
                className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
              >
                {item?.user?.email}
              </td>
              <td
                data-th="Date"
                className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
              >
                {new Date(item?.createdAt).toLocaleDateString()}
              </td>
              <td
                data-th="Total Price"
                className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
              >
                {item?.totalPrice}
              </td>
              <td
                data-th="Status"
                className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
              >
                <Button
                  variant={'outline'}
                  className={`w-full 
                 ${item?.status === 'Pending' && 'bg-gray-400 text-white'} 
                    ${item?.status === 'Paid' && 'bg-emerald-400 text-white'} 
                        ${
                          item?.status === 'Cancelled' &&
                          'bg-red-400 text-white'
                        } pointer-events-none`}
                >
                  {item?.status}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOder;
