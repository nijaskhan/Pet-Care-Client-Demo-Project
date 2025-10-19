import React from 'react';

const TabNavigation = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="bg-white border-b border-gray-200">
      <nav className="flex space-x-0">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`px-6 py-4 text-sm font-medium transition-all duration-200 ${
              activeTab === tab.id
                ? 'bg-blue-600 text-white border-b-2 border-green-400'
                : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
            }`}
          >
            <span className="mr-2">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default TabNavigation;
