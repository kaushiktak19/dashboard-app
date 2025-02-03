export default function Home() {
  const metrics = [
    { title: 'Total Users', value: '1,234' },
    { title: 'Revenue', value: '$5,678' },
    { title: 'Active Sessions', value: '89' },
  ];

  const activities = [
    { date: '2024-03-01', activity: 'User Login', status: 'Completed' },
    { date: '2024-03-02', activity: 'Payment Received', status: 'Pending' },
  ];

  return (
    <div>
      {/* Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition duration-200">
            <h3 className="text-gray-500 text-sm mb-2">{metric.title}</h3>
            <p className="text-3xl font-bold text-gray-800">{metric.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Activity Table */}
      <div className="bg-white rounded-2xl shadow p-4 md:p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Recent Activity</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="text-left text-gray-500 border-b">
                <th className="pb-2 pr-4">Date</th>
                <th className="pb-2 pr-4">Activity</th>
                <th className="pb-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((activity, index) => (
                <tr key={index} className="border-b last:border-b-0 hover:bg-gray-50 transition">
                  <td className="py-3 pr-4 whitespace-nowrap">{activity.date}</td>
                  <td className="py-3 pr-4 whitespace-nowrap">{activity.activity}</td>
                  <td className="py-3">
                    <span className={`px-3 py-1 rounded-full text-sm ${activity.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {activity.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
