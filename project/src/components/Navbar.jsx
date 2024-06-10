import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faTruck, faHeart, faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck as farCircleCheck, faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

export const NavBar = () => {
  const texts = [
    <span><FontAwesomeIcon icon={farCircleCheck} /> 30-DAY SATISFACTION GUARANTEE</span>, 
    <span><FontAwesomeIcon icon={faTruck} /> Free delivery on orders over $40.00</span>,
    <span><FontAwesomeIcon icon={farHeart} /> 50,000+ HAPPY CUSTOMERS</span>, 
    <span><FontAwesomeIcon icon={faCheckDouble} /> 100% Money Back Guarantee</span>
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? texts.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === texts.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <NavBarContainer>
      {isMobile ? (
        <MobileNav>
          <Arrow onClick={handlePrevious}>&lt;</Arrow>
          <Text>{texts[currentIndex]}</Text>
          <Arrow onClick={handleNext}>&gt;</Arrow>
        </MobileNav>
      ) : (
        <DesktopNav>
          {texts.map((text, index) => (
            <Text key={index}>{text}</Text>
          ))}
        </DesktopNav>
      )}
    </NavBarContainer>
  );
};

// Estilos usando styled-components
const NavBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: #252F3D;
  color: white;
`;

const MobileNav = styled.div`
  display: flex;
  align-items: center;
`;

const DesktopNav = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const Arrow = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
  padding: 0 1rem;
`;

const Text = styled.div`
  padding: 0 1rem;
  font-size: 1.2rem;
`;

export default NavBar;
