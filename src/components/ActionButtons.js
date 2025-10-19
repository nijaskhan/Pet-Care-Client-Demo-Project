import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearForm, validateForm } from '../features/form/formSlice';
import { useToast } from './customs/Toast/ToastProvider';
import Swal from 'sweetalert2';
import { useCreateClientMutation } from '../services/api/petCareApi';

const ActionButtons = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { formData, isLoading, validationErrors, isFormValid } = useSelector((state) => state.form);
  const { showSuccess, showError, showWarning } = useToast();
  const [createClient, { isLoading: isCreating }] = useCreateClientMutation();

  const handleClearForm = () => {
    Swal.fire({
      title: "Clear Form?",
      text: "Are you sure you want to clear the form? This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      reverseButtons: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, Clear Form!",
      cancelButtonText: "Cancel",
      draggable: true
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(clearForm());
        showSuccess('Form cleared successfully!');
      }
    });
  };

  const handleSaveAsDraft = () => {
    // Save to localStorage as draft
    localStorage.setItem('petCareFormDraft', JSON.stringify(formData));
    showSuccess('Form saved as draft successfully!');
  };

  const handlePreview = (clientId) => {
    if (clientId) {
      navigate(`/preview/${clientId}`);
    } else {
      showWarning('No client ID available for preview');
    }
  };

  // Synchronous validation function
  const validateFormSync = (formData) => {
    const errors = {};
    
    // Required fields validation
    if (!formData.basic.fullName.trim()) {
      errors['basic.fullName'] = 'Full name is required';
    }
    
    if (!formData.contact.email.trim()) {
      errors['contact.email'] = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.contact.email)) {
      errors['contact.email'] = 'Please enter a valid email';
    }
    
    if (!formData.contact.phone.trim()) {
      errors['contact.phone'] = 'Phone number is required';
    }
    
    if (!formData.pets.emergencyContact.name.trim()) {
      errors['pets.emergencyContact.name'] = 'Emergency contact name is required';
    }
    
    if (!formData.pets.emergencyContact.phone.trim()) {
      errors['pets.emergencyContact.phone'] = 'Emergency contact phone is required';
    }
    
    if (!formData.compliance.termsAccepted) {
      errors['compliance.termsAccepted'] = 'You must accept the terms and conditions';
    }
    
    if (!formData.compliance.privacyPolicyAccepted) {
      errors['compliance.privacyPolicyAccepted'] = 'You must accept the privacy policy';
    }
    
    return {
      errors,
      isValid: Object.keys(errors).length === 0
    };
  };

  const handleSaveClientRecord = async () => {
    try {
      // Validate form synchronously
      const validation = validateFormSync(formData);
      
      if (!validation.isValid) {
        // Dispatch validation to update the store with errors
        dispatch(validateForm());
        const errorCount = Object.keys(validation.errors).length;
        showError(`Please fill in the required fields to continue. ${errorCount} field(s) need attention.`);
        return;
      }

      const clientData = {
        basic: {
          clientId: formData.basic.clientId,
          fullName: formData.basic.fullName,
          preferredName: formData.basic.preferredName,
          gender: formData.basic.gender,
          dateOfBirth: formData.basic.dateOfBirth,
          profilePicture: formData.basic.profilePicture || null,
        },
        contact: {
          email: formData.contact.email,
          phone: formData.contact.phone,
          address: formData.contact.address,
          city: formData.contact.city,
          state: formData.contact.state,
          zipCode: formData.contact.zipCode,
          country: formData.contact.country,
        },
        pets: {
          pets: formData.pets.pets || [],
          emergencyContact: {
            name: formData.pets.emergencyContact?.name,
            relationship: formData.pets.emergencyContact?.relationship,
            phone: formData.pets.emergencyContact?.phone,
            email: formData.pets.emergencyContact?.email,
          }
        },
        services: {
          serviceTypes: formData.services.serviceTypes || [],
          preferences: formData.services.preferences,
          specialInstructions: formData.services.specialInstructions,
        },
        billing: {
          paymentMethod: formData.billing.paymentMethod,
          billingAddress: formData.billing.billingAddress,
          taxId: formData.billing.taxId,
          notes: formData.billing.notes,
        },
        preferences: {
          communicationMethod: formData.preferences.communicationMethod,
          language: formData.preferences.language,
          timezone: formData.preferences.timezone,
          notifications: {
            email: !!formData.preferences.notifications?.email,
            sms: !!formData.preferences.notifications?.sms,
            push: !!formData.preferences.notifications?.push
          }
        },
        compliance: {
          termsAccepted: !!formData.compliance.termsAccepted,
          privacyPolicyAccepted: !!formData.compliance.privacyPolicyAccepted,
          marketingConsent: !!formData.compliance.marketingConsent,
          dataRetention: formData.compliance.dataRetention,
        }
      };

      try {
        const result = await createClient(clientData).unwrap();

        // Extract the bin ID from the JSONBin response structure
        const clientId = result?.metadata?.id;

        // Debug logging
        console.log('API Response:', result);
        console.log('Extracted Client ID:', clientId);

        Swal.fire({
          title: "Record Added!",
          text: "Record is added, click here to show the preview",
          icon: "success",
          showCancelButton: true,
          reverseButtons: true,
          confirmButtonText: "Show Preview",
          cancelButtonText: "Close",
          confirmButtonColor: "#3b82f6",
          cancelButtonColor: "#6b7280",
          draggable: true
        }).then((swalResult) => {
          if (swalResult.isConfirmed) {
            handlePreview(clientId);
          }
        });

        dispatch(clearForm());
      } catch (err) {
        Swal.fire({
          title: "Client Registration Failed",
          text: "An error occurred while registering the client. Please try again.",
          icon: "error",
          confirmButtonText: "OK",
          confirmButtonColor: "#e84141"
        });
      }
    } catch (error) {
      console.error('Error saving client:', error);
      showError('Error saving client record. Please try again.');
    }
  };

  return (
    <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-4 mt-8 pt-6 border-t border-gray-200">
      <button
        onClick={handleClearForm}
        className="flex items-center justify-center px-4 sm:px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-200 font-medium text-sm sm:text-base"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
        <span className="hidden sm:inline">CLEAR FORM</span>
        <span className="sm:hidden">CLEAR</span>
      </button>

      <button
        onClick={handleSaveAsDraft}
        className="flex items-center justify-center px-4 sm:px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-200 font-medium text-sm sm:text-base"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3-3m0 0l-3 3m3-3v12" />
        </svg>
        <span className="hidden sm:inline">SAVE AS DRAFT</span>
        <span className="sm:hidden">DRAFT</span>
      </button>

      <button
        onClick={handleSaveClientRecord}
        disabled={isCreating || isLoading}
        className="flex items-center justify-center px-4 sm:px-6 py-3 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white rounded-lg transition-colors duration-200 font-medium text-sm sm:text-base"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <span className="hidden sm:inline">
          {isCreating ? 'SAVING...' : 'SAVE CLIENT RECORD'}
        </span>
        <span className="sm:hidden">
          {isCreating ? 'SAVING...' : 'SAVE'}
        </span>
      </button>
    </div>
  );
};

export default ActionButtons;
