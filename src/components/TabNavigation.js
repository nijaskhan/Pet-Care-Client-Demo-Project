import React, { useRef, useState, useEffect } from "react";

const TabNavigation = ({ tabs, activeTab, onTabChange }) => {
  const navRef = useRef(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const activeButton = navRef.current.querySelector(`#tab-${activeTab}`);
    if (activeButton) {
      setIndicatorStyle({
        left: activeButton.offsetLeft,
        width: activeButton.offsetWidth,
      });
    }
  }, [activeTab, tabs]);

  return (
    <div className="relative bg-white border-b border-gray-200">
      <nav ref={navRef} className="flex relative">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            id={`tab-${tab.id}`}
            onClick={() => onTabChange(tab.id)}
            className={`px-6 py-4 text-sm font-medium transition-all duration-200 ${activeTab === tab.id
                ? 'text-blue-600'
                : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
              }`}
          >
            <span className="mr-2">{tab.icon}</span>
            {tab.label}
          </button>
        ))}

        {/* Floating Indicator */}
        <span
          className="absolute bottom-0 h-1 bg-blue-500 transition-all duration-300 rounded"
          style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
        ></span>
      </nav>
    </div>
  );
};

export default TabNavigation;