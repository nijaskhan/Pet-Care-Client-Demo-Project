import { useSelector, useDispatch } from 'react-redux';
import { setActiveTab } from '../features/form/formSlice';
import Header from './Header';
import TabNavigation from './TabNavigation';
import BasicInfo from './sections/BasicInfo';
import Contact from './sections/Contact';
import PetsEmergency from './sections/PetsEmergency';
import Services from './sections/Services';
import Billing from './sections/Billing';
import Preferences from './sections/Preferences';
import Compliance from './sections/Compliance';
import ActionButtons from './ActionButtons';
import SessionDivider from './customs/SessionDivider';

const PetCareForm = () => {
  const dispatch = useDispatch();
  const { activeTab } = useSelector((state) => state.form);

  const tabs = [
    { id: 'basic', label: 'Basic Info', icon: '👤' },
    { id: 'contact', label: 'Contact', icon: '📞' },
    { id: 'pets', label: 'Pets & Emergency', icon: '🐾' },
    { id: 'services', label: 'Services', icon: '🛠️' },
    { id: 'billing', label: 'Billing', icon: '💳' },
    { id: 'preferences', label: 'Preferences', icon: '⚙️' },
    { id: 'compliance', label: 'Compliance', icon: '📋' },
  ];

  const renderActiveSection = () => {
    switch (activeTab) {
      case 'basic':
        return <BasicInfo />;
      case 'contact':
        return <Contact />;
      case 'pets':
        return <PetsEmergency />;
      case 'services':
        return <Services />;
      case 'billing':
        return <Billing />;
      case 'preferences':
        return <Preferences />;
      case 'compliance':
        return <Compliance />;
      default:
        return <BasicInfo />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-50">
      <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-6 lg:py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <Header />

          {/* Responsive Session Divider */}
          <SessionDivider
            height='1rem'
          />

          {/* Main Form Container */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden">
            {/* Tab Navigation */}
            <TabNavigation
              tabs={tabs}
              activeTab={activeTab}
              onTabChange={(tabId) => dispatch(setActiveTab(tabId))}
            />

            {/* Form Content */}
            <div className="p-4 sm:p-6 lg:p-8">
              {renderActiveSection()}

              {/* Action Buttons */}
              <ActionButtons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetCareForm;