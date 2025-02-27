/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { TUser } from '@/components/DropDownProfile';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useCreateOrderMutation } from '@/redux/Features/Admin/orderApi';
import { clearCart } from '@/redux/Features/Admin/ProductSlice';
import {
  useUserQuery,
  useUserUpdateMutation,
} from '@/redux/Features/auth/AuthApi';
import { useCurrentToken } from '@/redux/Features/auth/AuthSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { verifyToken } from '@/utils/verifyToken';
import { Label } from '@radix-ui/react-dropdown-menu';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { FieldValues, useForm } from 'react-hook-form';
import { toast } from 'sonner';

const Checkout = () => {
  const [userUpdate] = useUserUpdateMutation();
  const [
    orderProduct,
    { isLoading: orderLoading, isSuccess, error, isError, data: sData },
  ] = useCreateOrderMutation();
  const token = useAppSelector(useCurrentToken);
  let user;
  if (token) {
    user = verifyToken(token) as TUser;
  }
  const dispatch = useAppDispatch();
  const { carts } = useAppSelector((state) => state?.product);
  console.log(carts, 'carts');
  const { data: singleData, isLoading } = useUserQuery(user?._id);
  const data = singleData?.data;

  const { register, handleSubmit } = useForm();

  const handlePlaceOrder = async () => {
    console.log('object', sData);
    await orderProduct({ products: carts });
  };
  const toastId = 'cart';
  useEffect(() => {
    if (orderLoading) toast.loading('Processing ...', { id: toastId });

    if (isSuccess) {
      toast.success(sData?.message, { id: toastId });
      if (sData?.data) {
        setTimeout(() => {
          dispatch(clearCart());

          window.location.href = sData.data;
        }, 1000);
        console.log(sData?.data, 'sData');
      }
    }
    console.log(error, 'before');
    if (isError) toast.error(JSON.stringify(error), { id: toastId });
    console.log(error, 'after');
  }, [
    sData?.data,
    dispatch,
    sData?.message,
    error,
    isError,
    orderLoading,
    isSuccess,
  ]);

  const onSubmit = async (data: FieldValues) => {
    const updatedFields: Record<string, any> = {};
    Object.keys(data).forEach((key) => {
      if (data[key] !== data?.[key] && key !== 'email') {
        updatedFields[key] = data[key];
      }
    });

    // if (Object.keys(updatedFields).length === 0) {
    //   toast.info("No changes detected.");
    //   return;
    // }

    try {
      const res = await userUpdate(updatedFields);
      if (res?.error) {
        toast.error('Please enter a valid input.');
      } else {
        toast.success('User updated successfully!', { duration: 2000 });
        setTimeout(() => {
          handlePlaceOrder();
        }, 1000);
        // reset({ ...data, ...updatedFields });
      }
    } catch (err: any) {
      toast.error('Something went wrong.');
    }
  };
  if (isLoading) {
    return ' loading....';
  }
  const totalPrice = carts.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-gray-50 py-12">
      <Helmet>
        <title>Bookshelf | Checkout</title>
      </Helmet>
      <div className="max-w-screen-xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-emerald-600 text-center mb-12">
          Checkout
        </h1>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Billing Details */}
          <Card className="lg:p-6 shadow-lg">
            <CardHeader>
              <CardTitle className="text-center sr-only">
                Update Profile
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Update your name"
                      defaultValue={data?.name}
                      {...register('name')}
                    />
                  </div>
                  <div>
                    <Label>Email</Label>
                    <Input
                      id="email"
                      type="email"
                      defaultValue={data?.email}
                      disabled
                    />
                  </div>
                  <div>
                    <Label>City</Label>
                    <Input
                      id="city"
                      type="text"
                      defaultValue={data?.city}
                      {...register('city')}
                    />
                  </div>
                  <div>
                    <Label>Address</Label>
                    <Input
                      id="address"
                      type="text"
                      defaultValue={data?.address}
                      {...register('address')}
                    />
                  </div>
                  <div>
                    <Label>Phone</Label>
                    <Input
                      id="phone"
                      type="number"
                      defaultValue={data?.phone}
                      {...register('phone')}
                    />
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button type="submit" className="bg-emerald-500">
                    Place order now
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Order Summary
            </h2>
            <div className="space-y-4">
              {carts.map((item) => (
                <div
                  key={item?._id}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <div>
                    <p className="text-lg text-gray-800 font-medium">
                      {item?.title}
                    </p>
                    <p className="text-sm text-gray-500">
                      Quantity: {item?.quantity}
                    </p>
                  </div>
                  <p className="text-lg text-gray-700">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mt-6 pt-4 border-t">
              <p className="text-xl font-semibold text-gray-800">Total</p>
              <p className="text-xl font-semibold text-emerald-600">
                ${totalPrice.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
