import { Helmet } from 'react-helmet';

const Overview = () => {
  return (
    <div className="w-full">
      <Helmet>
        <title>BookShelf | Admin Dashboard Overview</title>
      </Helmet>
      <main className="flex-grow bg-gray-50 p-6 ">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Welcome to the your Dashboard!
        </h2>
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Total Users</h3>
            <p className="text-4xl font-bold">1,234</p>
          </div>
          <div className="bg-green-500 text-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Revenue</h3>
            <p className="text-4xl font-bold">$12,345</p>
          </div>
          <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Feedback</h3>
            <p className="text-4xl font-bold">234</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            Recent Activity
          </h3>
          <ul className="space-y-4">
            <li className="p-4 bg-white rounded-lg shadow-md">
              User <strong>John Doe</strong> signed up.
            </li>
            <li className="p-4 bg-white rounded-lg shadow-md">
              Order <strong>#12345</strong> was completed.
            </li>
            <li className="p-4 bg-white rounded-lg shadow-md">
              User <strong>Jane Smith</strong> upgraded their plan.
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Overview;
