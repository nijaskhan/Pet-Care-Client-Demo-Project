import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeTab: 'basic',
  validationErrors: {},
  isFormValid: false,
  formData: {
    basic: {
      clientId: `CLI-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      fullName: '',
      preferredName: '',
      gender: '',
      dateOfBirth: '',
      profilePicture: null,
    },
    contact: {
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      country: '',
    },
    pets: {
      pets: [],
      emergencyContact: {
        name: '',
        relationship: '',
        phone: '',
        email: '',
      },
    },
    services: {
      serviceTypes: [],
      preferences: '',
      specialInstructions: '',
    },
    billing: {
      paymentMethod: '',
      billingAddress: '',
      taxId: '',
      notes: '',
    },
    preferences: {
      communicationMethod: '',
      language: '',
      timezone: '',
      notifications: {
        email: true,
        sms: false,
        push: true,
      },
    },
    compliance: {
      termsAccepted: false,
      privacyPolicyAccepted: false,
      marketingConsent: false,
      dataRetention: '',
    },
  },
  isLoading: false,
  errors: {},
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    updateFormData: (state, action) => {
      const { section, field, value } = action.payload;
      state.formData[section][field] = value;
    },
    updateFormSection: (state, action) => {
      const { section, data } = action.payload;
      state.formData[section] = { ...state.formData[section], ...data };
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
    clearForm: (state) => {
      state.formData = initialState.formData;
      state.errors = {};
      state.validationErrors = {};
      state.isFormValid = false;
    },
    setValidationErrors: (state, action) => {
      state.validationErrors = action.payload;
    },
    clearValidationErrors: (state) => {
      state.validationErrors = {};
    },
    validateForm: (state) => {
      const errors = {};
      const { formData } = state;
      
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
      
      state.validationErrors = errors;
      state.isFormValid = Object.keys(errors).length === 0;
    },
    addPet: (state, action) => {
      state.formData.pets.pets.push(action.payload);
    },
    removePet: (state, action) => {
      state.formData.pets.pets.splice(action.payload, 1);
    },
  },
});

export const {
  setActiveTab,
  updateFormData,
  updateFormSection,
  setLoading,
  setErrors,
  clearForm,
  setValidationErrors,
  clearValidationErrors,
  validateForm,
  addPet,
  removePet,
} = formSlice.actions;

export default formSlice.reducer;
