export default function Profile() {
  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow hover:shadow-md transition">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Profile</h1>
      <div className="space-y-4">
        <p className="text-gray-600">Welcome back, <span className="font-semibold text-gray-800">John Doe</span>!</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h2 className="text-sm font-medium text-gray-500">Email</h2>
            <p className="text-gray-800">john.doe@example.com</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h2 className="text-sm font-medium text-gray-500">Role</h2>
            <p className="text-gray-800">Administrator</p>
          </div>
        </div>
      </div>
    </div>
  );
}