import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetClientByIdQuery } from '../services/api/petCareApi';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const ClientPreview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, error, isLoading } = useGetClientByIdQuery(id);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading client data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Error Loading Client</h2>
          <p className="text-gray-600 mb-6">
            {error?.data?.message || 'Failed to load client data. Please try again.'}
          </p>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
          >
            Go Back to Form
          </button>
        </div>
      </div>
    );
  }

  if (!data?.record) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-gray-400 text-6xl mb-4">📄</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">No Data Found</h2>
          <p className="text-gray-600 mb-6">No client data found for the provided ID.</p>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
          >
            Go Back to Form
          </button>
        </div>
      </div>
    );
  }

  const clientData = data?.record;
  const basicInfo = clientData?.basic || {};
  const contactInfo = clientData?.contact || {};
  const petsInfo = clientData?.pets || {};
  const servicesInfo = clientData?.services || {};
  const billingInfo = clientData?.billing || {};
  const preferencesInfo = clientData?.preferences || {};
  const complianceInfo = clientData?.compliance || {};

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <button
                onClick={() => navigate('/')}
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <ArrowLeftIcon className="h-5 w-5 mr-2" />
                Back to Form
              </button>
            </div>
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">Client Preview</h1>
            </div>
            <div className="flex items-center">
              <span className="text-sm text-gray-500">ID: {id}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {/* Basic Information */}
          <div className="px-6 py-8 border-b border-gray-200">
            <div className="flex items-center mb-6">
              <div className="text-2xl mr-3">👤</div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Basic Information</h2>
                <p className="text-gray-500">Client personal details</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Client ID</label>
                <div className="px-4 py-3 bg-gray-50 rounded-lg border border-gray-200">
                  {basicInfo?.clientId || 'Not provided'}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <div className="px-4 py-3 bg-gray-50 rounded-lg border border-gray-200">
                  {basicInfo?.fullName || 'Not provided'}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Name</label>
                <div className="px-4 py-3 bg-gray-50 rounded-lg border border-gray-200">
                  {basicInfo?.preferredName || 'Not provided'}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                <div className="px-4 py-3 bg-gray-50 rounded-lg border border-gray-200">
                  {basicInfo?.gender || 'Not provided'}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                <div className="px-4 py-3 bg-gray-50 rounded-lg border border-gray-200">
                  {basicInfo?.dateOfBirth || 'Not provided'}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="px-6 py-8 border-b border-gray-200">
            <div className="flex items-center mb-6">
              <div className="text-2xl mr-3">📞</div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Contact Information</h2>
                <p className="text-gray-500">Client contact details</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <div className="px-4 py-3 bg-gray-50 rounded-lg border border-gray-200">
                  {contactInfo?.email || 'Not provided'}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <div className="px-4 py-3 bg-gray-50 rounded-lg border border-gray-200">
                  {contactInfo?.phone || 'Not provided'}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                <div className="px-4 py-3 bg-gray-50 rounded-lg border border-gray-200">
                  {contactInfo?.address || 'Not provided'}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                <div className="px-4 py-3 bg-gray-50 rounded-lg border border-gray-200">
                  {contactInfo?.city || 'Not provided'}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                <div className="px-4 py-3 bg-gray-50 rounded-lg border border-gray-200">
                  {contactInfo?.state || 'Not provided'}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Zip Code</label>
                <div className="px-4 py-3 bg-gray-50 rounded-lg border border-gray-200">
                  {contactInfo?.zipCode || 'Not provided'}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                <div className="px-4 py-3 bg-gray-50 rounded-lg border border-gray-200">
                  {contactInfo?.country || 'Not provided'}
                </div>
              </div>
            </div>
          </div>

          {/* Pets & Emergency Contact */}
          <div className="px-6 py-8 border-b border-gray-200">
            <div className="flex items-center mb-6">
              <div className="text-2xl mr-3">🐾</div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Pets & Emergency Contact</h2>
                <p className="text-gray-500">Pet information and emergency contact details</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Emergency Contact Name</label>
                <div className="px-4 py-3 bg-gray-50 rounded-lg border border-gray-200">
                  {petsInfo?.emergencyContact?.name || 'Not provided'}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Relationship</label>
                <div className="px-4 py-3 bg-gray-50 rounded-lg border border-gray-200">
                  {petsInfo?.emergencyContact?.relationship || 'Not provided'}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Emergency Phone</label>
                <div className="px-4 py-3 bg-gray-50 rounded-lg border border-gray-200">
                  {petsInfo?.emergencyContact?.phone || 'Not provided'}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Emergency Email</label>
                <div className="px-4 py-3 bg-gray-50 rounded-lg border border-gray-200">
                  {petsInfo?.emergencyContact?.email || 'Not provided'}
                </div>
              </div>
            </div>
            
            {petsInfo?.pets && petsInfo.pets.length > 0 && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Pets ({petsInfo.pets.length})</h3>
                <div className="space-y-4">
                  {petsInfo.pets.map((pet, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-800 mb-2">Pet #{index + 1}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <span className="text-sm text-gray-600">Name: </span>
                          <span className="text-sm">{pet?.name || 'Not provided'}</span>
                        </div>
                        <div>
                          <span className="text-sm text-gray-600">Species: </span>
                          <span className="text-sm">{pet?.species || 'Not provided'}</span>
                        </div>
                        <div>
                          <span className="text-sm text-gray-600">Breed: </span>
                          <span className="text-sm">{pet?.breed || 'Not provided'}</span>
                        </div>
                        <div>
                          <span className="text-sm text-gray-600">Age: </span>
                          <span className="text-sm">{pet?.age || 'Not provided'}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Services */}
          <div className="px-6 py-8 border-b border-gray-200">
            <div className="flex items-center mb-6">
              <div className="text-2xl mr-3">🛠️</div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Services</h2>
                <p className="text-gray-500">Requested services and preferences</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service Types</label>
                <div className="px-4 py-3 bg-gray-50 rounded-lg border border-gray-200">
                  {servicesInfo?.serviceTypes?.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {servicesInfo.serviceTypes.map((service, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                          {service}
                        </span>
                      ))}
                    </div>
                  ) : 'Not provided'}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferences</label>
                <div className="px-4 py-3 bg-gray-50 rounded-lg border border-gray-200">
                  {servicesInfo?.preferences || 'Not provided'}
                </div>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Special Instructions</label>
                <div className="px-4 py-3 bg-gray-50 rounded-lg border border-gray-200">
                  {servicesInfo?.specialInstructions || 'Not provided'}
                </div>
              </div>
            </div>
          </div>

          {/* Billing */}
          <div className="px-6 py-8 border-b border-gray-200">
            <div className="flex items-center mb-6">
              <div className="text-2xl mr-3">💳</div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Billing Information</h2>
                <p className="text-gray-500">Payment and billing details</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
                <div className="px-4 py-3 bg-gray-50 rounded-lg border border-gray-200">
                  {billingInfo?.paymentMethod || 'Not provided'}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tax ID</label>
                <div className="px-4 py-3 bg-gray-50 rounded-lg border border-gray-200">
                  {billingInfo?.taxId || 'Not provided'}
                </div>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Billing Address</label>
                <div className="px-4 py-3 bg-gray-50 rounded-lg border border-gray-200">
                  {billingInfo?.billingAddress || 'Not provided'}
                </div>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Notes</label>
                <div className="px-4 py-3 bg-gray-50 rounded-lg border border-gray-200">
                  {billingInfo?.notes || 'Not provided'}
                </div>
              </div>
            </div>
          </div>

          {/* Preferences */}
          <div className="px-6 py-8 border-b border-gray-200">
            <div className="flex items-center mb-6">
              <div className="text-2xl mr-3">⚙️</div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Preferences</h2>
                <p className="text-gray-500">Communication and notification preferences</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Communication Method</label>
                <div className="px-4 py-3 bg-gray-50 rounded-lg border border-gray-200">
                  {preferencesInfo?.communicationMethod || 'Not provided'}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
                <div className="px-4 py-3 bg-gray-50 rounded-lg border border-gray-200">
                  {preferencesInfo?.language || 'Not provided'}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
                <div className="px-4 py-3 bg-gray-50 rounded-lg border border-gray-200">
                  {preferencesInfo?.timezone || 'Not provided'}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Notifications</label>
                <div className="px-4 py-3 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="space-y-1">
                    <div className="flex items-center">
                      <span className="text-sm">Email: </span>
                      <span className={`text-sm font-medium ${preferencesInfo?.notifications?.email ? 'text-green-600' : 'text-red-600'}`}>
                        {preferencesInfo?.notifications?.email ? 'Enabled' : 'Disabled'}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm">SMS: </span>
                      <span className={`text-sm font-medium ${preferencesInfo?.notifications?.sms ? 'text-green-600' : 'text-red-600'}`}>
                        {preferencesInfo?.notifications?.sms ? 'Enabled' : 'Disabled'}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm">Push: </span>
                      <span className={`text-sm font-medium ${preferencesInfo?.notifications?.push ? 'text-green-600' : 'text-red-600'}`}>
                        {preferencesInfo?.notifications?.push ? 'Enabled' : 'Disabled'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Compliance */}
          <div className="px-6 py-8">
            <div className="flex items-center mb-6">
              <div className="text-2xl mr-3">📋</div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Compliance</h2>
                <p className="text-gray-500">Terms and privacy policy acceptance</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Terms Accepted</label>
                <div className="px-4 py-3 bg-gray-50 rounded-lg border border-gray-200">
                  <span className={`text-sm font-medium ${complianceInfo?.termsAccepted ? 'text-green-600' : 'text-red-600'}`}>
                    {complianceInfo?.termsAccepted ? 'Yes' : 'No'}
                  </span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Privacy Policy Accepted</label>
                <div className="px-4 py-3 bg-gray-50 rounded-lg border border-gray-200">
                  <span className={`text-sm font-medium ${complianceInfo?.privacyPolicyAccepted ? 'text-green-600' : 'text-red-600'}`}>
                    {complianceInfo?.privacyPolicyAccepted ? 'Yes' : 'No'}
                  </span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Marketing Consent</label>
                <div className="px-4 py-3 bg-gray-50 rounded-lg border border-gray-200">
                  <span className={`text-sm font-medium ${complianceInfo?.marketingConsent ? 'text-green-600' : 'text-red-600'}`}>
                    {complianceInfo?.marketingConsent ? 'Yes' : 'No'}
                  </span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Data Retention</label>
                <div className="px-4 py-3 bg-gray-50 rounded-lg border border-gray-200">
                  {complianceInfo?.dataRetention || 'Not provided'}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex justify-center space-x-4">
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200 font-medium"
          >
            Back to Form
          </button>
          <button
            onClick={() => window.print()}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium"
          >
            Print Preview
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientPreview;
