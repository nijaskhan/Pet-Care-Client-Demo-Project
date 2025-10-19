import { useSelector, useDispatch } from 'react-redux';
import { updateFormData } from '../../features/form/formSlice';

const Compliance = () => {
    const dispatch = useDispatch();
    const { formData, validationErrors } = useSelector((state) => state.form);
    const { compliance } = formData;

    const getFieldError = (field) => {
        return validationErrors[`compliance.${field}`];
    };

    const handleInputChange = (field, value) => {
        dispatch(updateFormData({ section: 'compliance', field, value }));
    };

    return (
        <div className="animate-fadeIn">
            {/* Section Header */}
            <div className="flex items-center mb-8">
                <div className="text-2xl mr-3">📋</div>
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">Compliance & Legal</h2>
                    <p className="text-gray-500">Terms, privacy, and data handling agreements</p>
                </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-6">
                {/* Terms and Conditions */}
                <div className={`bg-blue-50 rounded-lg p-6 ${getFieldError('termsAccepted') ? 'border-2 border-red-200' : ''}`}>
                    <label className="flex items-start space-x-3 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={compliance.termsAccepted}
                            onChange={(e) => handleInputChange('termsAccepted', e.target.checked)}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-1"
                        />
                        <div>
                            <span className="text-sm font-medium text-gray-800">
                                I agree to the Terms and Conditions <span className="text-red-500">*</span>
                            </span>
                            <p className="text-xs text-gray-600 mt-1">
                                By checking this box, you agree to our terms of service and client agreement.
                            </p>
                            {getFieldError('termsAccepted') && (
                                <p className="text-red-500 text-xs mt-2 flex items-center">
                                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                    {getFieldError('termsAccepted')}
                                </p>
                            )}
                        </div>
                    </label>
                </div>

                {/* Privacy Policy */}
                <div className={`bg-green-50 rounded-lg p-6 ${getFieldError('privacyPolicyAccepted') ? 'border-2 border-red-200' : ''}`}>
                    <label className="flex items-start space-x-3 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={compliance.privacyPolicyAccepted}
                            onChange={(e) => handleInputChange('privacyPolicyAccepted', e.target.checked)}
                            className="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500 mt-1"
                        />
                        <div>
                            <span className="text-sm font-medium text-gray-800">
                                I agree to the Privacy Policy <span className="text-red-500">*</span>
                            </span>
                            <p className="text-xs text-gray-600 mt-1">
                                You consent to the collection, use, and storage of your personal information as described in our privacy policy.
                            </p>
                            {getFieldError('privacyPolicyAccepted') && (
                                <p className="text-red-500 text-xs mt-2 flex items-center">
                                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                    {getFieldError('privacyPolicyAccepted')}
                                </p>
                            )}
                        </div>
                    </label>
                </div>

                {/* Marketing Consent */}
                <div className="bg-yellow-50 rounded-lg p-6">
                    <label className="flex items-start space-x-3 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={compliance.marketingConsent}
                            onChange={(e) => handleInputChange('marketingConsent', e.target.checked)}
                            className="w-5 h-5 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500 mt-1"
                        />
                        <div>
                            <span className="text-sm font-medium text-gray-800">
                                Marketing Communications Consent
                            </span>
                            <p className="text-xs text-gray-600 mt-1">
                                I would like to receive promotional emails, newsletters, and special offers about pet care services.
                            </p>
                        </div>
                    </label>
                </div>

                {/* Data Retention */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Data Retention Preference
                    </label>
                    <div className="relative">
                        <select
                            value={compliance.dataRetention}
                            onChange={(e) => handleInputChange('dataRetention', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none bg-white"
                        >
                            <option value="">Select Data Retention Period</option>
                            <option value="1-year">1 Year</option>
                            <option value="3-years">3 Years</option>
                            <option value="5-years">5 Years</option>
                            <option value="7-years">7 Years</option>
                            <option value="indefinite">Indefinite (Until Account Closure)</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                        How long would you like us to retain your data after service completion?
                    </p>
                </div>

                {/* Compliance Summary */}
                <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Compliance Summary</h3>
                    <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                            <span className={compliance.termsAccepted ? "text-green-600" : "text-red-500"}>
                                {compliance.termsAccepted ? "✓" : "✗"}
                            </span>
                            <span>Terms and Conditions</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className={compliance.privacyPolicyAccepted ? "text-green-600" : "text-red-500"}>
                                {compliance.privacyPolicyAccepted ? "✓" : "✗"}
                            </span>
                            <span>Privacy Policy</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className={compliance.marketingConsent ? "text-green-600" : "text-gray-400"}>
                                {compliance.marketingConsent ? "✓" : "○"}
                            </span>
                            <span>Marketing Consent</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className={compliance.dataRetention ? "text-green-600" : "text-gray-400"}>
                                {compliance.dataRetention ? "✓" : "○"}
                            </span>
                            <span>Data Retention Preference</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Compliance;
