/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useRegisterMutation } from '@/redux/Features/auth/AuthApi';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Register = () => {
  const navigate = useNavigate();
  const [registers] = useRegisterMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data: FieldValues) => {
    try {
      const result = await registers(data);
      if (result.error) {
        toast.error('Email already exists');
      } else {
        toast.success('Signed up successfully', { duration: 2000 });
        // form.reset();
        navigate('/login');
      }
      console.log(data);
    } catch (err) {
      console.log(err);
      if ((err as any).statusCode == 409) {
        toast.error('ALready signed up use this Email');
      } else {
        toast.error('Something went wrong');
      }
    }
  };

  return (
    <section className="py-32 max-h-full">
      <Helmet>
        <title>Bookshelf | Register</title>
      </Helmet>
      <div className="container mx-auto ">
        <div className="flex flex-col gap-4">
          <div className="mx-auto w-full max-w-sm rounded-md p-6 shadow">
            <div className="mb-6 flex flex-col items-center">
              <p className="mb-2 text-2xl font-bold">
                {' '}
                Welcome!! Please Register
              </p>
            </div>
            <div>
              <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 ">
                <div>
                  <label className="text-sm font-medium " htmlFor="name">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    {...register('name', { required: 'Name is required' })}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message?.toString()}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium " htmlFor="email">
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Invalid email address',
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message?.toString()}
                    </p>
                  )}
                </div>
                <div>
                  <label className="text-sm font-medium " htmlFor="password">
                    Password
                  </label>
                  <Input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    {...register('password', {
                      required: 'Password is required',
                      minLength: {
                        value: 6,
                        message: 'Password must be at least 6 characters',
                      },
                    })}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors?.password?.message?.toString()}
                    </p>
                  )}
                </div>
                {/* <div className="flex justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remember"
                      className="border-muted-foreground"
                    />
                    <label
                      htmlFor="remember"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Remember me
                    </label>
                  </div>
                  <a href="#" className="text-sm text-primary hover:underline">
                    Forgot password
                  </a>
                </div> */}
                <Button type="submit" className="mt-2 w-full">
                  Create an account
                </Button>
                {/* <Button variant="outline" className="w-full">
                  <FcGoogle className="mr-2 size-5" />
                  Sign up with Google
                </Button> */}
              </form>
              <div className="mx-auto mt-8 flex justify-center gap-1 text-sm text-muted-foreground">
                <p>Already have an account?</p>
                <a href="#" className="text-primary hover:underline">
                  <Link to="/login">Sign In</Link>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* 
        <div>
          <img
            src="https://library.shadcnblocks.com/images/block/placeholder-1.svg"
            alt="" width='100px'
          />
        </div> */}
      </div>
    </section>
  );
};

export default Register;
