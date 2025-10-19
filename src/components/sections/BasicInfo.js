import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateFormData } from '../../features/form/formSlice';

const BasicInfo = () => {
  const dispatch = useDispatch();
  const { formData } = useSelector((state) => state.form);
  const { basic } = formData;

  const handleInputChange = (field, value) => {
    dispatch(updateFormData({ section: 'basic', field, value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleInputChange('profilePicture', file);
    }
  };

  return (
    <div className="animate-fadeIn">
      {/* Section Header */}
      <div className="flex items-center mb-8">
        <div className="text-2xl mr-3">👤</div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Basic Information</h2>
          <p className="text-gray-500">Essential client details and identification</p>
        </div>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Client ID */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Client ID
          </label>
          <input
            type="text"
            value={basic.clientId}
            readOnly
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-xs text-gray-500 mt-1">Auto-generated unique identifier</p>
        </div>

        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={basic.fullName}
            onChange={(e) => handleInputChange('fullName', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            placeholder="Enter full name"
          />
        </div>

        {/* Preferred Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Preferred Name
          </label>
          <input
            type="text"
            value={basic.preferredName}
            onChange={(e) => handleInputChange('preferredName', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            placeholder="Enter preferred name"
          />
          <p className="text-xs text-gray-500 mt-1">Nickname for personalized service</p>
        </div>

        {/* Gender */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Gender
          </label>
          <div className="relative">
            <select
              value={basic.gender}
              onChange={(e) => handleInputChange('gender', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none bg-white"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Date of Birth
          </label>
          <div className="relative">
            <input
              type="date"
              value={basic.dateOfBirth}
              onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-1">For birthday campaigns and personalization</p>
        </div>

        {/* Profile Picture */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Profile Picture
          </label>
          <div className="flex items-center space-x-4">
            <label className="cursor-pointer bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg border border-gray-300 transition-colors duration-200">
              Choose File
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
            <span className="text-gray-500">
              {basic.profilePicture ? basic.profilePicture.name : 'No file chosen'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
