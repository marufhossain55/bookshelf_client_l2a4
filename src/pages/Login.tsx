import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { useLoginMutation } from '@/redux/Features/auth/AuthApi';
import { setUser } from '@/redux/Features/auth/AuthSlice';
import { useAppDispatch } from '@/redux/hooks';
import { verifyToken } from '@/utils/verifyToken';
import { Helmet } from 'react-helmet';
import { FieldValues, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Login = () => {
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading('Logging in');
    try {
      const userInfo = {
        email: data?.email,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.token);
      dispatch(setUser({ user: user, token: res?.data.token }));
      toast.success('Logged in', { id: toastId, duration: 2000 });
      navigate('/');
    } catch {
      toast.error('Something went wrong', { id: toastId, duration: 2000 });
    }
  };
  return (
    <section className="py-32 max-h-full">
      <Helmet>
        <title>RideOn Wheels | Login</title>
      </Helmet>
      <div className="container mx-auto ">
        <div className="flex flex-col gap-4">
          <div className="mx-auto w-full max-w-sm rounded-md p-6 shadow">
            <div className="mb-6 flex flex-col items-center">
              <p className="mb-2 text-2xl font-bold">Please Login</p>
            </div>
            <div>
              <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
                <div>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    required
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
                  <Input
                    type="password"
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
                      {errors.password.message?.toString()}
                    </p>
                  )}
                </div>
                <div className="flex justify-between">
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
                </div>
                <Button type="submit" className="mt-2 w-full">
                  Sign in account
                </Button>
                {/* <Button variant="outline" className="w-full">
                  <FcGoogle className="mr-2 size-5" />
                  Sign up with Google
                </Button> */}
              </form>
              <div className="mx-auto mt-8 flex justify-center gap-1 text-sm text-muted-foreground">
                <p>Don&apos;t have an account?</p>
                <a className="text-primary hover:underline">
                  <Link to="/register"> Sign up</Link>
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

export default Login;
