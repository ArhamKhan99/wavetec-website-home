import React from 'react';

const Loader = () => {
  const loaderWidth = 250;
  const dotSize = 20;

  const colors = [
    { color: '#006BE8', delay: 0.4 },
    { color: '#ff8630', delay: 0.5 },
    { color: '#54b948', delay: 0.3 },
    { color: '#175CD3', delay: 0.2 },
    { color: '#FF4405', delay: 0.1 },
    { color: '#fbef5a', delay: 0 },
  ];
  

  return (
    <div className="h-[50vh] flex items-center justify-center font-sans bg-transparent">
      <div
        className="relative"
        style={{ width: `${loaderWidth}px`, height: `${dotSize}px` }}
      >
        {/* Dots */}
        {colors.map((dot, index) => (
          <div
            key={index}
            className="absolute rounded-full border-2 border-white animate-[loader_3s_ease-in-out_infinite]"
            style={{
              backgroundColor: dot.color,
              width: `${dotSize}px`,
              height: `${dotSize}px`,
              animationDelay: `${dot.delay}s`,
            }}
          ></div>
        ))}

        {/* Loading Text */}
        <div
          className="absolute left-0 right-0 text-center font-bold text-black"
          style={{ top: '200%' }}
        >
          Loading...
        </div>
      </div>
    </div>
  );
};

export default Loader;
