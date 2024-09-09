import React, { useState } from 'react';

interface PortfolioItem {
  images: string;
  title: string;
}

const OurPortfolio: React.FC = () => {
  const reactProjects: PortfolioItem[] = [
    { images: 'OurPortfolioimg1.png', title: 'React Project One' },
    { images: 'OurPortfolioimg2.png', title: 'React Project Two' },
    { images: 'OurPortfolioimg3.png', title: 'React Project Three' },
    { images: 'OurPortfolioimg4.png', title: 'React Project Four' },
    { images: 'OurPortfolioimg5.png', title: 'React Project Five' },
  ];

  const wordpressProjects: PortfolioItem[] = [
    { images: 'OurPortfolioimg1.png', title: 'WordPress Project One' },
    { images: 'OurPortfolioimg2.png', title: 'WordPress Project Two' },
    { images: 'OurPortfolioimg3.png', title: 'WordPress Project Three' },
    { images: 'OurPortfolioimg4.png', title: 'WordPress Project Four' },
    { images: 'OurPortfolioimg5.png', title: 'WordPress Project Five' },
  ];

  const figmaProjects: PortfolioItem[] = [
    { images: 'OurPortfolioimg1.png', title: 'Figma Project One' },
    { images: 'OurPortfolioimg2.png', title: 'Figma Project Two' },
    { images: 'OurPortfolioimg3.png', title: 'Figma Project Three' },
    { images: 'OurPortfolioimg4.png', title: 'Figma Project Four' },
    { images: 'OurPortfolioimg5.png', title: 'Figma Project Five' },
  ];
  const mobileappProjects: PortfolioItem[] = [
    { images: 'OurPortfolioimg1.png', title: 'Figma Project One' },
    { images: 'OurPortfolioimg2.png', title: 'Figma Project Two' },
    { images: 'OurPortfolioimg3.png', title: 'Figma Project Three' },
    { images: 'OurPortfolioimg4.png', title: 'Figma Project Four' },
    { images: 'OurPortfolioimg5.png', title: 'Figma Project Five' },
  ];
  const webProjects: PortfolioItem[] = [
    { images: 'OurPortfolioimg1.png', title: 'Figma Project One' },
    { images: 'OurPortfolioimg2.png', title: 'Figma Project Two' },
    { images: 'OurPortfolioimg3.png', title: 'Figma Project Three' },
    { images: 'OurPortfolioimg4.png', title: 'Figma Project Four' },
    { images: 'OurPortfolioimg5.png', title: 'Figma Project Five' },
  ];
  const logoProjects: PortfolioItem[] = [
    { images: 'OurPortfolioimg1.png', title: 'Figma Project One' },
    { images: 'OurPortfolioimg2.png', title: 'Figma Project Two' },
    { images: 'OurPortfolioimg3.png', title: 'Figma Project Three' },
    { images: 'OurPortfolioimg4.png', title: 'Figma Project Four' },
    { images: 'OurPortfolioimg5.png', title: 'Figma Project Five' },
  ];

  const tabs = [
    { name: 'React', projects: reactProjects },
    { name: 'WordPress', projects: wordpressProjects },
    { name: 'Figma', projects: figmaProjects },
    { name: 'mobileapp', projects: mobileappProjects },
    { name: 'web', projects: webProjects },
    { name: 'logo', projects: logoProjects },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1;

  const totalPages = Math.ceil(activeTab.projects.length / itemsPerPage);
  const paginateItems = (items: PortfolioItem[]) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
  };

  const handlePageChange = (direction: 'next' | 'prev') => {
    if (direction === 'next' && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else if (direction === 'prev' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="md:mt-10 text-white bg-gray-100 py-12">
      {/* Header Section */}
      <article className="relative overflow-hidden bg-cover bg-no-repeat w-full py-12" style={{ backgroundImage: "url('/bg_profilo.png')" }}>
        <div className="text-center py-8">
          <h1 className="text-4xl font-bold text-primarycolor">Our Portfolio</h1>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center space-x-6 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => {
                setActiveTab(tab);
                setCurrentPage(1);
              }}
              className={`px-8 py-3 rounded-lg transition-all duration-300 ${
                activeTab.name === tab.name ? 'bg-primarycolor text-white font-bold' : 'bg-gray-200 text-black hover:bg-primarycolor'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Content and Image Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left  p-4">
            <h2 className="text-3xl font-bold mb-4 text-black">{activeTab.name} UIs</h2>
            <p className="text-lg mb-6 text-black">
              Welcome to our {activeTab.name} UI Design showcase. Discover visually striking and intuitively navigable interfaces designed to engage users across devices.
            </p>
            <button className="text-lg font-semibold flex items-center space-x-2 text-blue-500 hover:underline">
              <span>&#8594;</span>
              <span>View All</span>
            </button>
          </div>

         {/* Right Image Section */}
          <div className="relative flex items-center">
            {/* Previous Arrow */}
            <button
              onClick={() => handlePageChange('prev')}
              className="absolute top-1/2 left-[-50px] transform -translate-y-1/2 bg-gray-500 text-white rounded-full p-3 hover:bg-gray-600 z-10"
              disabled={currentPage === 1}
            >
              &#8592;
            </button>

            {/* Image Display */}
            <div className="w-[250px] h-[300px] mx-6 relative">
              {paginateItems(activeTab.projects).map((item, index) => (
                <img
                  key={index}
                  src={item.images}
                  alt={`Portfolio ${index + 1}`}
                  className="rounded-lg shadow-lg object-cover w-full h-full"
                />
              ))}
            </div>

            {/* Next Arrow */}
            <button
              onClick={() => handlePageChange('next')}
              className="absolute top-1/2 right-[-50px] transform -translate-y-1/2 bg-gray-500 text-white rounded-full p-3 hover:bg-gray-600 z-10"
              disabled={currentPage === totalPages}
            >
              &#8594;
            </button>
          </div>

        </div>

        {/* Footer Section */}
        <div className="text-center mt-8">
          <button className="bg-primarycolor text-white px-6 py-2 text-lg font-bold rounded-lg hover:bg-primarycolor">
            View All
          </button>
        </div>
      </article>
    </div>
  );
};

export default OurPortfolio;
