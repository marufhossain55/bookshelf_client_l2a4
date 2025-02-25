import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link, useSearchParams } from 'react-router-dom';

const PaymentReturn = () => {
  const [searchParams] = useSearchParams();
  const invoice = searchParams.get('order_id');
  return (
    <div>
      <div className="h-screen flex items-center justify-center bg-gray-100 text-gray-800">
        <Card className="w-96 shadow-lg">
          <CardContent className="text-center">
            <h2 className="text-xl font-semibold mb-2">Order Create</h2>
            <p className="text-gray-600 mb-6">Your transaction ID is:</p>
            <div className="bg-gray-100 text-black py-3 px-6 rounded-lg font-mono text-lg shadow-inner mb-6">
              {invoice || 'N/A'}
            </div>

            <Button asChild>
              <Link to={'/userDashboard/myOrder'}>My Orders</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PaymentReturn;
