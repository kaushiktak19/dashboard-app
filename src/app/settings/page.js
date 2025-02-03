export default function Settings() {
  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow hover:shadow-md transition">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Settings</h1>
      <div className="space-y-4">
        <p className="text-gray-600">Customize your preferences below:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h2 className="text-sm font-medium text-gray-500">Theme</h2>
            <p className="text-gray-800">Light</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h2 className="text-sm font-medium text-gray-500">Notifications</h2>
            <p className="text-gray-800">Enabled</p>
          </div>
        </div>
      </div>
    </div>
  );
}
