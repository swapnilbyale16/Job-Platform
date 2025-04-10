import React from 'react';

const SettingsScreen = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-indigo-600">Settings</h2>

      <div className="bg-white p-4 rounded shadow space-y-4">
        <p className="text-lg">App Version: 1.0.0</p>
        <p className="text-lg">Notification Settings: Coming Soon</p>
        <p className="text-lg">Change Password: Coming Soon</p>
      </div>
    </div>
  );
};

export default SettingsScreen;
