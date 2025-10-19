import { useSelector, useDispatch } from 'react-redux';
import { updateFormData } from '../../features/form/formSlice';

const Services = () => {
  const dispatch = useDispatch();
  const { formData } = useSelector((state) => state.form);
  const { services } = formData;

  const handleInputChange = (field, value) => {
    dispatch(updateFormData({ section: 'services', field, value }));
  };

  const handleServiceTypeChange = (serviceType) => {
    const updatedServiceTypes = services.serviceTypes.includes(serviceType)
      ? services.serviceTypes.filter(type => type !== serviceType)
      : [...services.serviceTypes, serviceType];
    
    dispatch(updateFormData({ section: 'services', field: 'serviceTypes', value: updatedServiceTypes }));
  };

  const serviceOptions = [
    'Pet Grooming',
    'Pet Walking',
    'Pet Sitting',
    'Pet Boarding',
    'Veterinary Care',
    'Pet Training',
    'Pet Transportation',
    'Pet Photography',
    'Pet Supplies',
    'Emergency Services'
  ];

  return (
    <div className="animate-fadeIn">
      {/* Section Header */}
      <div className="flex items-center mb-6 sm:mb-8">
        <div className="text-xl sm:text-2xl mr-2 sm:mr-3">🛠️</div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Services & Preferences</h2>
          <p className="text-gray-500 text-sm sm:text-base">Service requirements and special instructions</p>
        </div>
      </div>

      {/* Form Fields */}
      <div className="space-y-6">
        {/* Service Types */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Required Services <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {serviceOptions.map((service) => (
              <label key={service} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={services.serviceTypes.includes(service)}
                  onChange={() => handleServiceTypeChange(service)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">{service}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Service Preferences */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Service Preferences
          </label>
          <textarea
            value={services.preferences}
            onChange={(e) => handleInputChange('preferences', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            rows="4"
            placeholder="Describe your preferred service times, frequency, and any specific requirements..."
          />
        </div>

        {/* Special Instructions */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Special Instructions
          </label>
          <textarea
            value={services.specialInstructions}
            onChange={(e) => handleInputChange('specialInstructions', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            rows="4"
            placeholder="Any special care instructions, behavioral notes, or important information about your pets..."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
