import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAddProductMutation } from '@/redux/Features/Admin/adminManagement';
import axios from 'axios';
import { useState } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { toast } from 'sonner';

export type TProduct = {
  author: string;
  description: string;
  inStock: boolean;
  title: string;
  image: string;
  price: number;
  quantity: number;
  type: string;
  updatedAt: string;
  _id: string;
  totalQuantity?: number;
};

const AddProducts = () => {
  const [image, setImage] = useState<File | null>(null);
  const [addProduct, { isLoading }] = useAddProductMutation();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<TProduct>();

  const handleImageChange = (file: File) => {
    setImage(file);
  };

  const onSubmit = async (data: FieldValues) => {
    try {
      if (!image) {
        toast.error('Please select an image first');
        return;
      }

      const formData = new FormData();
      formData.append('file', image);
      formData.append('upload_preset', 'marufhossain55');

      const response = await axios.post<{ secure_url: string }>(
        'https://api.cloudinary.com/v1_1/drcynlax7/image/upload',
        formData
      );

      const imageUrl = response.data.secure_url;
      const productData = {
        ...data,
        image: imageUrl,
      };

      const result = await addProduct(productData);

      if ('error' in result) {
        toast.error('Failed to add product');
      } else {
        toast.success('Product added successfully', { duration: 2000 });
        reset();
      }
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong');
    }
  };

  if (isLoading) {
    return <h1>loading</h1>;
  }
  return (
    <section className="w-full">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4">
          <div className="w-full rounded-md p-6 shadow">
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
              <div className="flex flex-col md:flex-row gap-2">
                <div className="w-full">
                  <label className="text-sm font-medium" htmlFor="name">
                    Product Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter product name"
                    {...register('title', { required: 'Name is required' })}
                  />
                  {errors.title && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.title.message}
                    </p>
                  )}
                </div>

                <div className="w-full">
                  <label className="text-sm font-medium" htmlFor="brand">
                    Brand
                  </label>
                  <Input
                    id="brand"
                    type="text"
                    placeholder="Enter brand"
                    {...register('author', { required: 'Brand is required' })}
                  />
                  {errors.author && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.author.message}
                    </p>
                  )}
                </div>

                <div className="w-full">
                  <label className="text-sm font-medium" htmlFor="image">
                    Image
                  </label>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        handleImageChange(file);
                      }
                    }}
                  />
                  {errors.image && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.image.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-2">
                <div className="w-full">
                  <label className="text-sm font-medium" htmlFor="price">
                    Price
                  </label>
                  <Input
                    id="price"
                    type="number"
                    placeholder="Enter price"
                    {...register('price', { required: 'Price is required' })}
                  />
                  {errors.price && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.price.message}
                    </p>
                  )}
                </div>

                <div className="w-full">
                  <label className="text-sm font-medium" htmlFor="quantity">
                    Quantity
                  </label>
                  <Input
                    id="quantity"
                    type="number"
                    placeholder="Enter quantity"
                    {...register('quantity', {
                      required: 'Quantity is required',
                    })}
                  />
                  {errors.quantity && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.quantity.message}
                    </p>
                  )}
                </div>

                <div className="w-full">
                  <label className="text-sm font-medium" htmlFor="category">
                    Select Category
                  </label>
                  <select
                    id="category"
                    className="peer relative h-10 w-full rounded border border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all focus:border-emerald-500"
                    {...register('type', { required: 'Category is required' })}
                  >
                    <option value="" disabled>
                      Select a category
                    </option>
                    <option value="Mountain">Mountain</option>
                    <option value="Road">Road</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="Electric">Electric</option>
                  </select>
                  {errors.type && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.type.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="relative">
                <label className="text-sm font-medium" htmlFor="description">
                  Description
                </label>
                <textarea
                  id="description"
                  placeholder="Enter description"
                  className="peer relative w-full rounded border border-slate-200 px-4 py-2 text-sm text-slate-500 placeholder-transparent outline-none transition-all focus:border-emerald-500"
                  {...register('description', {
                    required: 'Description is required',
                  })}
                />
                {errors.description && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.description.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                className="mt-2 w-full bg-emerald-500 hover:bg-emerald-600"
              >
                Add Product
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddProducts;
