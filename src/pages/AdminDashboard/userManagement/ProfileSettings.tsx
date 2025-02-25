import { Card, CardContent } from '@/components/ui/card';
import { Helmet } from 'react-helmet';

import UpdateUser from './UpdateUser';
import UpdatePassword from './UpdatePassword';

const ProfileSettings = () => {
  return (
    <div className="w-full p-6">
      <Helmet>
        <title>RideOn Wheels | Admin Profile</title>
      </Helmet>
      <Card>
        <CardContent className="p-6 space-y-4">
          <UpdateUser></UpdateUser>
          <UpdatePassword></UpdatePassword>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileSettings;
