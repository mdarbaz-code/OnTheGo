import React from "react";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-12 px-4 mt-16">
      {/* Profile Card */}
      <div className="bg-white border border-red-200 rounded-xl shadow-lg w-full max-w-md p-8">
        {/* Profile Header */}
        <div className="flex flex-col items-center">
          <img
            src="https://img.freepik.com/premium-photo/portrait-smiling-young-girl-profile-picture-illustration-generative-aixd_115919-20878.jpg?w=2000"
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-red-600 shadow-md"
          />
          <h2 className="mt-4 text-2xl font-bold text-red-600">John Doe</h2>
          <p className="text-gray-500">Premium Customer</p>
        </div>

        {/* Divider */}
        <hr className="my-6 border-red-100" />

        {/* User Info */}
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-x-22">
            <span className="text-gray-600 font-medium">Email</span> 
            <span className="text-red-600">john.doe@example.com</span>
          </div>
          <div className="flex items-center justify-around">
            <span className="text-gray-600 font-medium">Phone</span>
            <span className="text-red-600">+91 98765 43210</span>
          </div>
          <div className="flex items-center justify-around">
            <span className="text-gray-600 font-medium">Address</span>
            <span className="text-red-600">Bengaluru, India</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex gap-4">
          <button className="flex-1 bg-red-600 text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-red-700 transition">
            Edit Profile
          </button>
          <button className="flex-1 bg-gray-100 text-red-600 font-semibold px-4 py-2 rounded-lg shadow hover:bg-red-50 transition">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
