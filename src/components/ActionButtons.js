import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearForm, validateForm } from '../features/form/formSlice';
import { useToast } from './customs/Toast/ToastProvider';
import Swal from 'sweetalert2';
import { useCreateClientMutation } from '../services/api/petCareApi';

const ActionButtons = () => {
  const dispatch = useDispatch();
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

  const handlePreview = () => {
    // Open preview modal or navigate to preview page
    console.log('Preview form data:', formData);
    showWarning('Preview functionality would open here');
  };

  const handleSaveClientRecord = async () => {
    try {
      dispatch(validateForm());

      if (!isFormValid) {
        // const errorCount = Object.keys(validationErrors).length;
        showError(`Please fill in the required fields to continue.`);
        return;
      }

      const clientData = {
        name: formData.basic.fullName,
        username: formData.basic.preferredName || formData.basic.fullName,
        email: formData.contact.email,
        phone: formData.contact.phone,
        website: 'petcare.com',
        address: {
          street: formData.contact.address,
          city: formData.contact.city,
          zipcode: formData.contact.zipCode,
        },
        company: {
          name: 'Pet Care Services',
          catchPhrase: 'Caring for your pets',
          bs: 'pet-care-services',
        },
      };

      try {
        await createClient(clientData).unwrap();

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
        }).then((result) => {
          if (result.isConfirmed) {
            handlePreview();
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
    <div className="flex justify-end space-x-4 mt-8 pt-6 border-t border-gray-200">
      <button
        onClick={handleClearForm}
        className="flex items-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-200 font-medium"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
        CLEAR FORM
      </button>

      <button
        onClick={handleSaveAsDraft}
        className="flex items-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-200 font-medium"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3-3m0 0l-3 3m3-3v12" />
        </svg>
        SAVE AS DRAFT
      </button>

      <button
        onClick={handlePreview}
        className="flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
        PREVIEW
      </button>

      <button
        onClick={handleSaveClientRecord}
        disabled={isCreating || isLoading}
        className="flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white rounded-lg transition-colors duration-200 font-medium"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        {isCreating ? 'SAVING...' : 'SAVE CLIENT RECORD'}
      </button>
    </div>
  );
};

export default ActionButtons;
