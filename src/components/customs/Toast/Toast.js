import React, { useState, useEffect } from 'react';

const Toast = ({ message, type = 'error', isVisible, onClose }) => {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose();
            }, 4000); // Auto close after 4 seconds

            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose]);

    if (!isVisible) return null;

    const getToastStyles = () => {
        switch (type) {
            case 'success':
                return {
                    bg: 'bg-green-500',
                    // icon: '✓',
                    border: 'border-green-400'
                };
            case 'warning':
                return {
                    bg: 'bg-yellow-500',
                    // icon: '⚠',
                    border: 'border-yellow-400'
                };
            case 'error':
            default:
                return {
                    bg: 'bg-red-500',
                    // icon: '✕',
                    border: 'border-red-400'
                };
        }
    };

    const styles = getToastStyles();

    return (
        <div className="fixed top-4 right-4 z-50 animate-slideInRight">
            <div className={`${styles.bg} ${styles.border} border-l-4 text-white px-6 py-4 rounded-lg shadow-lg max-w-sm`}>
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <span className="text-xl font-bold">{styles.icon}</span>
                    </div>
                    <div className="ml-3 flex-1">
                        <p className="text-sm font-medium">{message}</p>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                        <button
                            onClick={onClose}
                            className="text-white hover:text-gray-200 focus:outline-none focus:text-gray-200 transition-colors duration-200"
                        >
                            <span className="sr-only">Close</span>
                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Progress bar */}
                <div className="mt-2 bg-white bg-opacity-30 rounded-full h-1">
                    <div className="bg-white h-1 rounded-full animate-progressBar"></div>
                </div>
            </div>
        </div>
    );
};

export default Toast;
