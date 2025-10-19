import { useSelector, useDispatch } from 'react-redux';
import { updateFormData, addPet, removePet } from '../../features/form/formSlice';

const PetsEmergency = () => {
  const dispatch = useDispatch();
  const { formData, validationErrors } = useSelector((state) => state.form);
  const { pets } = formData;

  const handleInputChange = (field, value) => {
    dispatch(updateFormData({ section: 'pets', field, value }));
  };

  const handleEmergencyContactChange = (field, value) => {
    dispatch(updateFormData({ 
      section: 'pets', 
      field: 'emergencyContact', 
      value: { ...pets.emergencyContact, [field]: value }
    }));
  };

  const handleAddPet = () => {
    const newPet = {
      id: Date.now(),
      name: '',
      species: '',
      breed: '',
      age: '',
      weight: '',
      medicalNotes: ''
    };
    dispatch(addPet(newPet));
  };

  const handlePetChange = (petIndex, field, value) => {
    const updatedPets = [...pets.pets];
    updatedPets[petIndex] = { ...updatedPets[petIndex], [field]: value };
    dispatch(updateFormData({ section: 'pets', field: 'pets', value: updatedPets }));
  };

  const handleRemovePet = (petIndex) => {
    dispatch(removePet(petIndex));
  };

  const getFieldError = (field) => {
    return validationErrors[`pets.emergencyContact.${field}`];
  };

  const getInputClasses = (field) => {
    const baseClasses = "w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200";
    const errorClasses = "border-red-500 focus:ring-red-500";
    const normalClasses = "border-gray-300";
    
    return `${baseClasses} ${getFieldError(field) ? errorClasses : normalClasses}`;
  };

  return (
    <div className="animate-fadeIn">
      {/* Section Header */}
      <div className="flex items-center mb-8">
        <div className="text-2xl mr-3">🐾</div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Pets & Emergency Contact</h2>
          <p className="text-gray-500">Pet information and emergency contact details</p>
        </div>
      </div>

      {/* Pets Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-800">Pet Information</h3>
          <button
            onClick={handleAddPet}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
          >
            + Add Pet
          </button>
        </div>

        {pets.pets.length === 0 ? (
          <div className="text-center py-8 bg-gray-50 rounded-lg">
            <p className="text-gray-500">No pets added yet. Click "Add Pet" to get started.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {pets.pets.map((pet, index) => (
              <div key={pet.id} className="bg-gray-50 rounded-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-md font-medium text-gray-800">Pet #{index + 1}</h4>
                  <button
                    onClick={() => handleRemovePet(index)}
                    className="text-red-600 hover:text-red-800 transition-colors duration-200"
                  >
                    Remove
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pet Name</label>
                    <input
                      type="text"
                      value={pet.name}
                      onChange={(e) => handlePetChange(index, 'name', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Buddy"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Species</label>
                    <select
                      value={pet.species}
                      onChange={(e) => handlePetChange(index, 'species', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select Species</option>
                      <option value="dog">Dog</option>
                      <option value="cat">Cat</option>
                      <option value="bird">Bird</option>
                      <option value="fish">Fish</option>
                      <option value="reptile">Reptile</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Breed</label>
                    <input
                      type="text"
                      value={pet.breed}
                      onChange={(e) => handlePetChange(index, 'breed', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Golden Retriever"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                    <input
                      type="text"
                      value={pet.age}
                      onChange={(e) => handlePetChange(index, 'age', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="3 years"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Weight</label>
                    <input
                      type="text"
                      value={pet.weight}
                      onChange={(e) => handlePetChange(index, 'weight', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="25 lbs"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Medical Notes</label>
                    <textarea
                      value={pet.medicalNotes}
                      onChange={(e) => handlePetChange(index, 'medicalNotes', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows="3"
                      placeholder="Any medical conditions, allergies, or special care instructions..."
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Emergency Contact Section */}
      <div className="border-t border-gray-200 pt-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-6">Emergency Contact</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Emergency Contact Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={pets.emergencyContact.name}
              onChange={(e) => handleEmergencyContactChange('name', e.target.value)}
              className={getInputClasses('name')}
              placeholder="John Doe"
            />
            {getFieldError('name') && (
              <p className="mt-1 text-sm text-red-600">{getFieldError('name')}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Relationship
            </label>
            <input
              type="text"
              value={pets.emergencyContact.relationship}
              onChange={(e) => handleEmergencyContactChange('relationship', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="Spouse, Parent, Friend"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Emergency Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              value={pets.emergencyContact.phone}
              onChange={(e) => {
                const numberOnly = e.target.value.replace(/\D/g, '').slice(0, 20);
                handleEmergencyContactChange('phone', numberOnly);
              }}
              className={getInputClasses('phone')}
              placeholder="(555) 987-6543"
              maxLength={20}
              inputMode="numeric"
              pattern="[0-9]*"
            />
            {getFieldError('phone') && (
              <p className="mt-1 text-sm text-red-600">{getFieldError('phone')}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Emergency Email
            </label>
            <input
              type="email"
              value={pets.emergencyContact.email}
              onChange={(e) => handleEmergencyContactChange('email', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="emergency@example.com"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetsEmergency;
