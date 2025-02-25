import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Error = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 text-gray-800">
      <Card className="w-96 shadow-lg">
        <CardHeader>
          <CardTitle className="text-4xl font-bold text-center">404</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <h2 className="text-xl font-semibold mb-2">Oops! Page Not Found</h2>
          <p className="mb-4">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild>
            <a href="/">Go Home</a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Error;
