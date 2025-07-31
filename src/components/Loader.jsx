import React from 'react'

const Loader = () => {
  return (
    <div>Loader</div>
  )
}

// Hero Skeleton Component
const HeroSkeleton = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="absolute inset-0 top-[150px] max-w-7xl mx-auto px-6 flex flex-row items-start gap-5">
        {/* Orange dot and gradient line skeleton */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-gray-700 animate-pulse"></div>
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-gray-700 to-transparent animate-pulse"></div>
        </div>

        {/* Text content skeleton */}
        <div className="flex flex-col justify-center items-start mt-5">
          {/* Main title skeleton */}
          <div className="space-y-4">
            <div className="h-12 bg-gray-700 rounded w-96 animate-pulse"></div>
            <div className="h-12 bg-gray-700 rounded w-80 animate-pulse"></div>
          </div>
          
          {/* Subtitle skeleton */}
          <div className="mt-4 space-y-2">
            <div className="h-6 bg-gray-700 rounded w-72 animate-pulse"></div>
            <div className="h-6 bg-gray-700 rounded w-64 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* 3D Model skeleton - Desktop */}
      <div className="hidden lg:h-150 xl:h-full sm:hidden lg:block lg:mt-20 lg:ms-130 xl:ms-170">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-64 h-64 bg-gray-700 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* 3D Model skeleton - Mobile */}
      <div className="absolute bottom-0 top-90 sm:top-80 md:top-40 md:ms-50 w-full h-full justify-center items-center">
        <div className="h-120 sm:h-150 w-full lg:hidden flex justify-center items-center">
          <div className="w-48 h-48 bg-gray-700 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

// General Skeleton Components
const SkeletonCard = () => (
  <div className="bg-[#070202] rounded-3xl p-6 shadow-card animate-pulse">
    <div className="space-y-4">
      {/* Image skeleton */}
      <div className="w-full h-48 bg-gray-700 rounded-2xl"></div>
      
      {/* Title skeleton */}
      <div className="h-6 bg-gray-700 rounded w-3/4"></div>
      
      {/* Description skeleton */}
      <div className="space-y-2">
        <div className="h-4 bg-gray-700 rounded w-full"></div>
        <div className="h-4 bg-gray-700 rounded w-5/6"></div>
        <div className="h-4 bg-gray-700 rounded w-4/6"></div>
      </div>
      
      {/* Tags skeleton */}
      <div className="flex flex-wrap gap-2">
        <div className="h-6 bg-gray-700 rounded-full w-16"></div>
        <div className="h-6 bg-gray-700 rounded-full w-20"></div>
        <div className="h-6 bg-gray-700 rounded-full w-14"></div>
      </div>
      
      {/* Buttons skeleton */}
      <div className="flex gap-3 pt-4">
        <div className="h-10 bg-gray-700 rounded-lg flex-1"></div>
        <div className="h-10 bg-gray-700 rounded-lg flex-1"></div>
      </div>
    </div>
  </div>
);

const SkeletonAbout = () => (
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <div className="h-6 bg-gray-700 rounded w-32 mx-auto mb-4"></div>
      <div className="h-12 bg-gray-700 rounded w-48 mx-auto mb-4"></div>
      <div className="space-y-2 max-w-3xl mx-auto">
        <div className="h-4 bg-gray-700 rounded w-full"></div>
        <div className="h-4 bg-gray-700 rounded w-5/6"></div>
        <div className="h-4 bg-gray-700 rounded w-4/6"></div>
      </div>
    </div>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div className="h-8 bg-gray-700 rounded w-3/4"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-700 rounded w-full"></div>
          <div className="h-4 bg-gray-700 rounded w-5/6"></div>
          <div className="h-4 bg-gray-700 rounded w-4/6"></div>
        </div>
      </div>
      
      <div className="space-y-6">
        <div className="h-8 bg-gray-700 rounded w-3/4"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-700 rounded w-full"></div>
          <div className="h-4 bg-gray-700 rounded w-5/6"></div>
          <div className="h-4 bg-gray-700 rounded w-4/6"></div>
        </div>
      </div>
    </div>
  </div>
);

const SkeletonContact = () => (
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <div className="h-6 bg-gray-700 rounded w-32 mx-auto mb-4"></div>
      <div className="h-12 bg-gray-700 rounded w-48 mx-auto mb-4"></div>
      <div className="space-y-2 max-w-3xl mx-auto">
        <div className="h-4 bg-gray-700 rounded w-full"></div>
        <div className="h-4 bg-gray-700 rounded w-5/6"></div>
      </div>
    </div>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div className="h-8 bg-gray-700 rounded w-3/4"></div>
        <div className="space-y-4">
          <div className="h-12 bg-gray-700 rounded"></div>
          <div className="h-12 bg-gray-700 rounded"></div>
          <div className="h-32 bg-gray-700 rounded"></div>
          <div className="h-12 bg-gray-700 rounded"></div>
        </div>
      </div>
      
      <div className="space-y-6">
        <div className="h-8 bg-gray-700 rounded w-3/4"></div>
        <div className="space-y-4">
          <div className="h-4 bg-gray-700 rounded w-full"></div>
          <div className="h-4 bg-gray-700 rounded w-5/6"></div>
          <div className="h-4 bg-gray-700 rounded w-4/6"></div>
        </div>
      </div>
    </div>
  </div>
);

// Main Skeleton Loader Component
const SkeletonLoader = ({ type = "default", isLoading = true }) => {
  if (!isLoading) return null;

  const renderSkeleton = () => {
    switch (type) {
      case "hero":
        return <HeroSkeleton />;
      case "about":
        return <SkeletonAbout />;
      case "works":
        return (
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="h-6 bg-gray-700 rounded w-32 mx-auto mb-4"></div>
              <div className="h-12 bg-gray-700 rounded w-48 mx-auto mb-4"></div>
              <div className="space-y-2 max-w-3xl mx-auto">
                <div className="h-4 bg-gray-700 rounded w-full"></div>
                <div className="h-4 bg-gray-700 rounded w-5/6"></div>
                <div className="h-4 bg-gray-700 rounded w-4/6"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <SkeletonCard />
              <SkeletonCard />
            </div>
          </div>
        );
      case "contact":
        return <SkeletonContact />;
      default:
        return (
          <div className="flex justify-center items-center h-screen">
            <div className="w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin"></div>
          </div>
        );
    }
  };

  return (
    <div className="relative z-0 bg-[#070202] overflow-x-hidden">
      {renderSkeleton()}
    </div>
  );
};

export default Loader;
export { SkeletonLoader, HeroSkeleton };