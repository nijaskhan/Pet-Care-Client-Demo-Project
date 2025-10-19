import { useSelector, useDispatch } from 'react-redux';
import { updateFormData } from '../../features/form/formSlice';

const Billing = () => {
  const dispatch = useDispatch();
  const { formData } = useSelector((state) => state.form);
  const { billing } = formData;

  const handleInputChange = (field, value) => {
    dispatch(updateFormData({ section: 'billing', field, value }));
  };

  return (
    <div className="animate-fadeIn">
      {/* Section Header */}
      <div className="flex items-center mb-6 sm:mb-8">
        <div className="text-xl sm:text-2xl mr-2 sm:mr-3">💳</div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Billing Information</h2>
          <p className="text-gray-500 text-sm sm:text-base">Payment methods and billing details</p>
        </div>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {/* Payment Method */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Preferred Payment Method <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              value={billing.paymentMethod}
              onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none bg-white"
            >
              <option value="">Select Payment Method</option>
              <option value="credit-card">Credit Card</option>
              <option value="debit-card">Debit Card</option>
              <option value="bank-transfer">Bank Transfer</option>
              <option value="paypal">PayPal</option>
              <option value="cash">Cash</option>
              <option value="check">Check</option>
              <option value="other">Other</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Tax ID */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tax ID / SSN (Last 4 digits)
          </label>
          <input
            type="text"
            value={billing.taxId}
            onChange={(e) => handleInputChange('taxId', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            placeholder="****-****-****-1234"
            maxLength="4"
          />
        </div>

        {/* Billing Address */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Billing Address
          </label>
          <textarea
            value={billing.billingAddress}
            onChange={(e) => handleInputChange('billingAddress', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            rows="3"
            placeholder="Enter billing address if different from contact address..."
          />
        </div>

        {/* Billing Notes */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Billing Notes
          </label>
          <textarea
            value={billing.notes}
            onChange={(e) => handleInputChange('notes', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            rows="4"
            placeholder="Any special billing instructions, payment terms, or notes..."
          />
        </div>
      </div>
    </div>
  );
};

export default Billing;
