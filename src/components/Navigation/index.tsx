'use client';
import { useState } from 'react';
import styled from 'styled-components';
import { Row } from '@xinghunm/widgets';
import Logo from './Logo';

const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const NavContainer = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`;

const NavContent = styled(Row)`
  justify-content: space-between;
  align-items: center;
  height: 4rem;
`;

const NavLinks = styled(Row)<{ $isOpen: boolean }>`
  gap: 2rem;
  align-items: center;

  @media (min-width: 768px) {
    display: none;
  }

  @media (max-width: 767px) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
    transform: translateY(${(props) => (props.$isOpen ? '0' : '-100%')});
    opacity: ${(props) => (props.$isOpen ? '1' : '0')};
    visibility: ${(props) => (props.$isOpen ? 'visible' : 'hidden')};
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }
`;

const NavLink = styled.a`
  color: rgb(0, 0, 0);
  font-weight: 400;
  text-decoration: none;
  transition: color 0.2s ease;
  cursor: pointer;
  padding: 0.5rem 0;

  &:hover {
    color: #4a90e2;
  }

  @media (max-width: 767px) {
    font-size: 1.1rem;
    width: 100%;
    text-align: center;
    padding: 0.75rem 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);

    &:last-of-type {
      border-bottom: none;
    }
  }
`;

const ActionButton = styled.button`
  background-color: #4a90e2;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
  font-size: 0.9rem;

  &:hover {
    background-color: #3a7bc8;
  }

  @media (max-width: 767px) {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    margin-top: 0.5rem;
    width: auto;
    align-self: center;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.375rem;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(74, 144, 226, 0.1);
  }

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const HamburgerLine = styled.span<{ $isOpen: boolean; $position: 'top' | 'middle' | 'bottom' }>`
  display: block;
  width: 24px;
  height: 2px;
  background-color: #333;
  border-radius: 1px;
  transition: all 0.3s ease;
  transform-origin: center;

  &:not(:last-child) {
    margin-bottom: 4px;
  }

  ${(props) =>
    props.$isOpen &&
    props.$position === 'top' &&
    `
    transform: translateY(6px) rotate(45deg);
  `}

  ${(props) =>
    props.$isOpen &&
    props.$position === 'middle' &&
    `
    opacity: 0;
    transform: scaleX(0);
  `}
  
  ${(props) =>
    props.$isOpen &&
    props.$position === 'bottom' &&
    `
    transform: translateY(-6px) rotate(-45deg);
  `}
`;

const DesktopNav = styled(Row)`
  gap: 2rem;
  align-items: center;

  @media (max-width: 767px) {
    display: none;
  }
`;

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <NavWrapper>
      <NavContainer>
        <NavContent>
          <Logo size="md" />

          {/* Desktop Navigation */}
          <DesktopNav>
            <NavLink href="/home">首页</NavLink>
            <NavLink href="/blog">博客</NavLink>
            <NavLink href="/works">作品</NavLink>
            <NavLink href="/about">关于</NavLink>
            <ActionButton>联系我</ActionButton>
          </DesktopNav>

          {/* Mobile Hamburger Menu Button */}
          <MobileMenuButton onClick={toggleMenu} aria-label="菜单">
            <HamburgerLine $isOpen={isMenuOpen} $position="top" />
            <HamburgerLine $isOpen={isMenuOpen} $position="middle" />
            <HamburgerLine $isOpen={isMenuOpen} $position="bottom" />
          </MobileMenuButton>
        </NavContent>

        {/* Mobile Dropdown Menu */}
        <NavLinks $isOpen={isMenuOpen}>
          <NavLink href="/home" onClick={closeMenu}>
            首页
          </NavLink>
          <NavLink href="/blog" onClick={closeMenu}>
            博客
          </NavLink>
          <NavLink href="/works" onClick={closeMenu}>
            作品
          </NavLink>
          <NavLink href="/about" onClick={closeMenu}>
            关于
          </NavLink>
          <ActionButton onClick={closeMenu}>联系我</ActionButton>
        </NavLinks>
      </NavContainer>
    </NavWrapper>
  );
}
