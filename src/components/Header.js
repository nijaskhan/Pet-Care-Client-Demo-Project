const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-blue-500 text-white py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-8 rounded-2xl mb-0">
      <div className="flex flex-col sm:flex-row items-center justify-center">
        {/* Paw Print Logo */}
        <div className="flex flex-row sm:flex-col mb-4 sm:mb-0 sm:mr-6">
          <div className="text-white text-xl sm:text-2xl mb-1 mr-2 sm:mr-0">🐾</div>
          <div className="text-white text-lg sm:text-xl mb-1 mr-2 sm:mr-0">🐾</div>
          <div className="text-white text-base sm:text-lg">🐾</div>
        </div>
        
        {/* Title Section */}
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">
            Pet Care Client Database
          </h1>
          <p className="text-blue-100 text-sm sm:text-base lg:text-lg px-2">
            Comprehensive Client Information Management System
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
