const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-blue-500 text-white py-8 px-8 rounded-2xl mb-0">
      <div className="flex items-center justify-center">
        {/* Paw Print Logo */}
        <div className="flex flex-col mr-6">
          <div className="text-white text-2xl mb-1">🐾</div>
          <div className="text-white text-xl mb-1">🐾</div>
          <div className="text-white text-lg">🐾</div>
        </div>
        
        {/* Title Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">
            Pet Care Client Database
          </h1>
          <p className="text-blue-100 text-lg">
            Comprehensive Client Information Management System
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
