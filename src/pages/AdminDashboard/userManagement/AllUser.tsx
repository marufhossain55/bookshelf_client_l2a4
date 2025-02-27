/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  useAllUsersQuery,
  useDeactiveUsersMutation,
} from '@/redux/Features/Admin/UserManagement';
import { Helmet } from 'react-helmet';
import { toast } from 'sonner';

export type TUser = {
  _id: string;
  name: string;
  email: string;
  role: string;
  isBlocked: string;
};
const AllUser = () => {
  const { data: userData } = useAllUsersQuery(undefined);
  const [deactiveUser] = useDeactiveUsersMutation();
  const datas = userData?.data?.map(
    ({ _id, name, email, role, isBlocked }: TUser) => ({
      _id: _id,
      name: name,
      email: email,
      role: role,
      isBlocked: isBlocked,
    })
  );
  console.log('sona', datas);

  const handleUserUpdate = async (id: string) => {
    const toastId = toast.loading('loading......');
    try {
      const res = await deactiveUser(id);
      console.log(res);
      if (res?.error) {
        toast.error('Something went wrong');
      } else {
        toast.success('Deactive User...', { id });
      }
    } catch (error: unknown) {
      toast.error('Deactive Failed....', { id: toastId });
    }
  };

  return (
    <div className="w-full mt-5">
      <Helmet>
        <title>Bookshelf | Admin All Users</title>
      </Helmet>
      <div className="flex justify-end"></div>
      <table className="w-full text-left mt-5 border border-separate rounded border-slate-200">
        <tbody>
          <tr>
            <th
              scope="col"
              className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
            ></th>
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
              Role
            </th>
            <th
              scope="col"
              className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Status
            </th>
          </tr>
          {datas?.map((item: any) => (
            <tr className="block border-b sm:table-row last:border-b-0 border-slate-200 sm:border-none">
              <td className="before:w-24 before:inline-block before:font-medium before:text-slate-700  sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                img
              </td>
              <td
                data-th="Name"
                className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
              >
                {item?.name}
              </td>
              <td
                data-th="email"
                className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
              >
                {item?.email}
              </td>
              <td
                data-th="Role"
                className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
              >
                {item?.role}
              </td>
              <td
                data-th="Status"
                className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
              >
                {item?.isBlocked === false ? (
                  <button onClick={() => handleUserUpdate(item?._id)}>
                    Active
                  </button>
                ) : (
                  <button onClick={() => handleUserUpdate(item?._id)}>
                    <span className="text-red-400">Deactive</span>
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUser;
