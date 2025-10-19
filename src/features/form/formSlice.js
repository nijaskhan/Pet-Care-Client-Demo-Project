import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeTab: 'basic',
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
  addPet,
  removePet,
} = formSlice.actions;

export default formSlice.reducer;
