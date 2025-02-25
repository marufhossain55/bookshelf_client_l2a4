/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@/components/ui/button';
import {
  useAdminAllOrdersQuery,
  useGetOrderMutation,
} from '../../../redux/Features/Admin/orderApi';
import { toast } from 'sonner';
import Helmet from 'react-helmet';

function AllOrders() {
  const { data: sAllData, isLoading } = useAdminAllOrdersQuery(undefined);
  const [paymentOrder] = useGetOrderMutation();
  const orders = sAllData?.data?.allOrders;

  const handlePaymentCheck = async (id: string) => {
    const toastId = toast.loading('Loading...');

    try {
      const res = await paymentOrder(id);
      console.log('object', res);
      if (res?.error) {
        toast.error(
          (res?.error as any)?.message ||
            (res?.error as any)?.data?.message ||
            'something went wrong...',
          { id: toastId }
        );
      } else {
        toast.success(res?.data?.data?.message || 'Verify Success', {
          id: toastId,
        });
      }
    } catch (error) {
      toast.error('Faild to verify, Please try again.', { id: toastId });
    }
  };

  if (isLoading) {
    <h1>Loading</h1>;
  }

  //   console.log("order", orders);
  return (
    <div className="w-full mt-5">
      <Helmet>
        <title>RideOn Wheels | Admin All Orders</title>
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
              Customer Name
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
            <th
              scope="col"
              className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Action
            </th>
          </tr>
          {orders?.map((item: any) => (
            <tr className="block border-b sm:table-row last:border-b-0 border-slate-200 sm:border-none">
              <td
                data-th="Transaction"
                className="before:w-24 before:inline-block before:font-medium before:text-slate-700 
               sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
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
              <td
                data-th="Status"
                className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
              >
                {item?.status === 'Paid' ? (
                  <Button
                    disabled={item?.status === 'Paid'}
                    className="bg-emerald-400 text-white w-full"
                    variant={'outline'}
                  >
                    Success
                  </Button>
                ) : (
                  <Button
                    className="w-full"
                    onClick={() => handlePaymentCheck(item?.transaction?.id)}
                    variant={'outline'}
                  >
                    Check
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllOrders;
