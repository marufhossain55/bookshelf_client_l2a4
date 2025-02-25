import { Card, CardContent } from '@/components/ui/card';
import { Helmet } from 'react-helmet';
import UpdatePassword from './UpdatePassword';
import UpdateUser from './UpdateUser';

const ProfileSettings = () => {
  return (
    <div className="w-full p-6">
      <Helmet>
        <title>BookShelf | Admin Profile</title>
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
