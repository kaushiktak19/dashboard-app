'use client';

import { BarChart, Bar, PieChart, Pie, ResponsiveContainer, XAxis, YAxis, Tooltip, LineChart, Line, Legend } from 'recharts';

const barData = [
  { month: 'Jan', users: 400, revenue: 2400 },
  { month: 'Feb', users: 300, revenue: 2210 },
  { month: 'Mar', users: 600, revenue: 3200 },
];

const pieData = [
  { name: 'Electronics', value: 400 },
  { name: 'Fashion', value: 300 },
  { name: 'Home', value: 200 },
];

const lineData = [
  { day: 'Mon', sessions: 30 },
  { day: 'Tue', sessions: 45 },
  { day: 'Wed', sessions: 60 },
  { day: 'Thu', sessions: 50 },
  { day: 'Fri', sessions: 70 },
  { day: 'Sat', sessions: 90 },
  { day: 'Sun', sessions: 100 },
];

export default function Analytics() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Analytics Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {/* Key Metrics */}
        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
          <h2 className="text-lg font-semibold text-gray-600">Total Users</h2>
          <p className="text-3xl font-bold text-blue-600">1,234</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
          <h2 className="text-lg font-semibold text-gray-600">Total Revenue</h2>
          <p className="text-3xl font-bold text-green-600">$5,678</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
          <h2 className="text-lg font-semibold text-gray-600">Active Sessions</h2>
          <p className="text-3xl font-bold text-purple-600">89</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <div className="bg-white p-6 rounded-lg shadow-sm h-80">
          <h2 className="text-lg font-semibold mb-4">Users & Revenue by Month</h2>
          <ResponsiveContainer width="100%" height="90%">
            <BarChart data={barData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="users" fill="#3B82F6" name="Users" />
              <Bar dataKey="revenue" fill="#10B981" name="Revenue" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-6 rounded-lg shadow-sm h-80">
          <h2 className="text-lg font-semibold mb-4">Revenue by Category</h2>
          <ResponsiveContainer width="100%" height="90%">
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#3B82F6"
                label
              />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow-sm h-80">
        {/* Line Chart */}
        <h2 className="text-lg font-semibold mb-4">Active Sessions This Week</h2>
        <ResponsiveContainer width="100%" height="90%">
          <LineChart data={lineData}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="sessions" stroke="#6366F1" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className='mt-10'></div>
    </div>
  );
}