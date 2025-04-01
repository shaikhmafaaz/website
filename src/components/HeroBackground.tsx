
import React from "react";

interface HeroBackgroundProps {
  children: React.ReactNode;
}

const HeroBackground: React.FC<HeroBackgroundProps> = ({ children }) => {
  return (
    <section className="relative py-24">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/80 to-navy/40 z-0"></div>
      
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Oq-4RZ_BUvbt9dHt7BIf5QORH48NA9uJfSphEgYIpu2A-6auqoupVy2ZUK3U-Pl7k3E&usqp=CAU')] bg-cover bg-center"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        {children}
      </div>
    </section>
  );
};

export default HeroBackground;
