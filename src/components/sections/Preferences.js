import { useSelector, useDispatch } from 'react-redux';
import { updateFormData } from '../../features/form/formSlice';

const Preferences = () => {
    const dispatch = useDispatch();
    const { formData } = useSelector((state) => state.form);
    const { preferences } = formData;

    const handleInputChange = (field, value) => {
        dispatch(updateFormData({ section: 'preferences', field, value }));
    };

    const handleNotificationChange = (type, value) => {
        dispatch(updateFormData({
            section: 'preferences',
            field: 'notifications',
            value: { ...preferences.notifications, [type]: value }
        }));
    };

    return (
        <div className="animate-fadeIn">
            {/* Section Header */}
            <div className="flex items-center mb-6 sm:mb-8">
                <div className="text-xl sm:text-2xl mr-2 sm:mr-3">⚙️</div>
                <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Client Preferences</h2>
                    <p className="text-gray-500 text-sm sm:text-base">Communication and service preferences</p>
                </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-6">
                {/* Communication Method */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Communication Method
                    </label>
                    <div className="relative">
                        <select
                            value={preferences.communicationMethod}
                            onChange={(e) => handleInputChange('communicationMethod', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none bg-white"
                        >
                            <option value="">Select Communication Method</option>
                            <option value="email">Email</option>
                            <option value="phone">Phone Call</option>
                            <option value="sms">SMS/Text</option>
                            <option value="app">Mobile App</option>
                            <option value="in-person">In Person</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Language */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Language
                    </label>
                    <div className="relative">
                        <select
                            value={preferences.language}
                            onChange={(e) => handleInputChange('language', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none bg-white"
                        >
                            <option value="">Select Language</option>
                            <option value="en">English</option>
                            <option value="es">Spanish</option>
                            <option value="fr">French</option>
                            <option value="de">German</option>
                            <option value="it">Italian</option>
                            <option value="pt">Portuguese</option>
                            <option value="zh">Chinese</option>
                            <option value="ja">Japanese</option>
                            <option value="ko">Korean</option>
                            <option value="other">Other</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Timezone */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Timezone
                    </label>
                    <div className="relative">
                        <select
                            value={preferences.timezone}
                            onChange={(e) => handleInputChange('timezone', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none bg-white"
                        >
                            <option value="">Select Timezone</option>
                            <option value="EST">Eastern Time (EST)</option>
                            <option value="CST">Central Time (CST)</option>
                            <option value="MST">Mountain Time (MST)</option>
                            <option value="PST">Pacific Time (PST)</option>
                            <option value="AKST">Alaska Time (AKST)</option>
                            <option value="HST">Hawaii Time (HST)</option>
                            <option value="UTC">UTC</option>
                            <option value="GMT">GMT</option>
                            <option value="other">Other</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Notification Preferences */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">
                        Notification Preferences
                    </label>
                    <div className="space-y-3">
                        <label className="flex items-center space-x-3 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={preferences.notifications.email}
                                onChange={(e) => handleNotificationChange('email', e.target.checked)}
                                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <span className="text-sm text-gray-700">Email notifications</span>
                        </label>

                        <label className="flex items-center space-x-3 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={preferences.notifications.sms}
                                onChange={(e) => handleNotificationChange('sms', e.target.checked)}
                                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <span className="text-sm text-gray-700">SMS/Text notifications</span>
                        </label>

                        <label className="flex items-center space-x-3 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={preferences.notifications.push}
                                onChange={(e) => handleNotificationChange('push', e.target.checked)}
                                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <span className="text-sm text-gray-700">Push notifications</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Preferences;
