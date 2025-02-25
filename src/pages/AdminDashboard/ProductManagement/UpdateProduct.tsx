import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  useSingleProductQuery,
  useUpdateProductMutation,
} from '@/redux/Features/Admin/adminManagement';
import { useEffect } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { toast } from 'sonner';

const UpdateProduct = ({ productId }: { productId: string }) => {
  const [updateProduct] = useUpdateProductMutation();
  const { data: singleData } = useSingleProductQuery(productId);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    if (singleData) {
      reset({
        name: singleData?.data.name || '',
        brand: singleData?.data?.brand || '',
        price: singleData?.data?.price || 0,
        quantity: singleData?.data?.quantity || 0,
        category: singleData?.data?.category || '',
        description: singleData?.data?.description || '',
      });
    }
  }, [singleData, reset]);
  const onSubmit = async (data: FieldValues) => {
    try {
      const result = await updateProduct({ id: productId, data: data });
      if (result.error) {
        toast.error('Failed to Update product');
      } else {
        toast.success('Product Update successfully', { duration: 2000 });
        reset();
      }
      console.log(result, 'addProduct');
      console.log(data);
    } catch (err) {
      console.log(err);
      toast.error('Something went wrong');
    }
  };
  return (
    <section className="w-full">
      <div className="container mx-auto ">
        <div className="flex flex-col gap-4">
          <div className=" w-full  rounded-md p-6 shadow">
            <div>
              <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 ">
                <div className="flex flex-col md:flex-row gap-2">
                  <div className="w-full">
                    <label
                      className="text-sm font-medium "
                      htmlFor="product name"
                    >
                      Product Name
                    </label>
                    <Input
                      id="product name"
                      type="text"
                      placeholder="Enter your product name"
                      {...register('name', { required: 'Name is required' })}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors?.name?.message?.toString()}
                      </p>
                    )}
                  </div>
                  <div className="w-full">
                    <label className="text-sm font-medium " htmlFor="brand">
                      Brand
                    </label>
                    <Input
                      id="brand"
                      type="text"
                      placeholder="Enter your brand"
                      {...register('brand', { required: 'Brand is required' })}
                    />
                    {errors.brand && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors?.brand?.message?.toString()}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-2">
                  <div className="w-full">
                    <label className="text-sm font-medium " htmlFor="price">
                      Price
                    </label>
                    <Input
                      id="price"
                      type="number"
                      placeholder="Enter your price"
                      {...register('price', { required: 'Price is required' })}
                    />
                    {errors.price && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors?.price?.message?.toString()}
                      </p>
                    )}
                  </div>
                  <div className="w-full">
                    <label className="text-sm font-medium " htmlFor="quantity">
                      Quantity
                    </label>
                    <Input
                      id="quantity"
                      type="number"
                      placeholder="Enter your quantity"
                      {...register('quantity', {
                        required: 'Quantity is required',
                      })}
                    />
                    {errors.quantity && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors?.quantity?.message?.toString()}
                      </p>
                    )}
                  </div>
                  <div className="w-full">
                    <div className="relative my-6 md:w-60">
                      {/* <label className="text-sm font-medium " htmlFor="brand">
                    Category
                  </label> */}
                      <select
                        id="category"
                        className="peer relative h-10 w-full appearance-none rounded border border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                        {...register('category', {
                          required: 'Category is required',
                        })}
                      >
                        <option value="" disabled selected></option>
                        <option value="Mountain">Mountain</option>
                        <option value="Road">Road</option>
                        <option value="Hybrid">Hybrid</option>
                        <option value="Mountain">Electric</option>
                      </select>
                      <label className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
                        Select Category
                      </label>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="pointer-events-none absolute top-2.5 right-2 h-5 w-5 fill-slate-400 transition-all peer-focus:fill-emerald-500 peer-disabled:cursor-not-allowed"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-labelledby="title-04 description-04"
                        role="graphics-symbol"
                      >
                        <title id="title-04">Arrow Icon</title>
                        <desc id="description-04">
                          Arrow icon of the select list.
                        </desc>
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {errors.category && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors?.category?.message?.toString()}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <textarea
                    placeholder="Write your message"
                    // placeholder="Write your message?.toString()"
                    className="peer relative w-full rounded border border-slate-200 px-4 py-2 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                    {...register('description', {
                      required: 'Description is required',
                    })}
                  ></textarea>
                  <label
                    htmlFor="id-01"
                    className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                  >
                    Write your message
                  </label>
                  {errors.description && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors?.description?.message?.toString()}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="mt-2 w-full bg-emerald-500 hover:bg-emerald-500"
                >
                  Update Product
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdateProduct;
