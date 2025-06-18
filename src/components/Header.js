"use client";

import styled from "styled-components";
import Image from "next/image";

const HeaderContainer = styled.header`
  background: linear-gradient(135deg, #1e3a8a 0%, #3730a3 100%);
  padding: 1.2rem 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  position: sticky;
  top: 0;
  z-index: 100;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0.5rem 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }

  img {
    height: 100%;
    width: auto;
    object-fit: contain;
    filter: brightness(0.7) contrast(1.3) saturate(1.2);
  }

  @media (max-width: 768px) {
    height: 40px;
    padding: 0.4rem 0.8rem;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <NavContainer>
        <LogoContainer>
          <Image
            src="/images/sachhsoft-logo-new.webp"
            alt="Sachhsoft"
            width={150}
            height={30}
            priority
            style={{
              height: "100%",
              width: "auto",
              objectFit: "contain",
            }}
          />
        </LogoContainer>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
