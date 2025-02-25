import { Card, CardContent } from '@/components/ui/card';
import { Helmet } from 'react-helmet';
import UpdatePassword from './UpdatePassword';
import UpdateUser from './UpdateUser';

const ProfileSettings = () => {
  // console.log(object)

  return (
    <div className="w-full p-6">
      <Helmet>
        <title>RideOn Wheels | Admin Profile</title>
      </Helmet>
      <Card>
        <CardContent className="p-6 space-y-4">
          {/* <div className="flex flex-col items-center">
            <Avatar className="w-24 h-24">
              <AvatarImage src={user.avatar} alt="Profile" />
            </Avatar>
          </div> */}
          <UpdateUser></UpdateUser>
          <UpdatePassword></UpdatePassword>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileSettings;
