import React from 'react';
import styled, { keyframes } from 'styled-components';

const gentleFloat = keyframes`
  0%, 100% {
    transform: translateY(0px);
    opacity: 0.6;
  }
  50% {
    transform: translateY(-3px);
    opacity: 0.9;
  }
`;

const softPulse = keyframes`
  0%, 100% {
    stroke: #4a90e2;
    stroke-width: 2;
    opacity: 0.8;
  }
  50% {
    stroke: #5ba3f5;
    stroke-width: 2.5;
    opacity: 1;
  }
`;

const smoothFlow = keyframes`
  0% {
    transform: translateX(-10px);
    opacity: 0;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    transform: translateX(50px);
    opacity: 0;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: scale(1.05) translateY(-1px);
  }
`;

const LogoIcon = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  overflow: hidden;
`;

const LogoText = styled.span`
  font-size: 1.4rem;
  font-weight: 800;
  background: linear-gradient(135deg, #4a90e2 0%, #2563eb 40%, #1e40af 100%);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;
  animation: subtleShift 4s ease infinite;
  position: relative;

  @keyframes subtleShift {
    0%,
    100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      transparent 45%,
      rgba(255, 255, 255, 0.1) 50%,
      transparent 55%
    );
    animation: gentleShimmer 3s infinite;
    pointer-events: none;
  }

  @keyframes gentleShimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

const BinaryDigit = styled.span<{ $top: string; $left: string; $delay: string; $size?: string }>`
  position: absolute;
  top: ${(props) => props.$top};
  left: ${(props) => props.$left};
  font-family: 'Courier New', monospace;
  font-weight: 600;
  font-size: ${(props) => props.$size || '8px'};
  color: #6b9bd8;
  animation: ${gentleFloat} 3s ease-in-out infinite;
  animation-delay: ${(props) => props.$delay};
  opacity: 0.7;
`;

const BrainPath = styled.path`
  fill: none;
  stroke: #4a90e2;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  animation: ${softPulse} 3s ease-in-out infinite;
  transition: all 0.3s ease;
`;

const CircuitDot = styled.circle<{ $delay: string }>`
  fill: #5ba3f5;
  animation: ${softPulse} 2.5s ease-in-out infinite;
  animation-delay: ${(props) => props.$delay};
  opacity: 0.8;
`;

const DataStream = styled.div<{ $delay: string }>`
  position: absolute;
  top: 50%;
  left: 0;
  width: 1.5px;
  height: 1.5px;
  background: #7bb3f0;
  border-radius: 50%;
  animation: ${smoothFlow} 4s linear infinite;
  animation-delay: ${(props) => props.$delay};
  opacity: 0.6;
`;

interface LogoProps {
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ showText = true, size = 'md' }: LogoProps) {
  const sizeMap = {
    sm: { icon: 32, text: '1.1rem' },
    md: { icon: 40, text: '1.4rem' },
    lg: { icon: 52, text: '1.7rem' }
  };

  const currentSize = sizeMap[size];

  return (
    <LogoContainer>
      <LogoIcon className="logo-icon" style={{ width: currentSize.icon, height: currentSize.icon }}>
        {/* SVG Brain/Circuit Icon */}
        <svg width={currentSize.icon} height={currentSize.icon} viewBox="0 0 40 40" fill="none">
          {/* Brain outline */}
          <BrainPath d="M10 20c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10" />
          <BrainPath d="M20 10c-2.5 0-4.5 2-4.5 4.5" />
          <BrainPath d="M20 30c2.5 0 4.5-2 4.5-4.5" />

          {/* Circuit lines */}
          <BrainPath d="M14 20h8m-4-4v8" />
          <BrainPath d="M24 16h4m-2-2v4" />
          <BrainPath d="M24 24h4m-2-2v4" />

          {/* Additional circuit elements */}
          <BrainPath d="M12 14h3" />
          <BrainPath d="M25 26h3" />

          {/* Circuit dots */}
          <CircuitDot cx="14" cy="20" r="1" $delay="0s" />
          <CircuitDot cx="22" cy="16" r="1" $delay="0.8s" />
          <CircuitDot cx="26" cy="20" r="1" $delay="1.6s" />
          <CircuitDot cx="22" cy="24" r="1" $delay="2.4s" />
        </svg>

        {/* 减少的浮动数字 */}
        <BinaryDigit $top="4px" $left="4px" $delay="0s" $size="8px">
          1
        </BinaryDigit>
        <BinaryDigit $top="10px" $left="30px" $delay="1s" $size="7px">
          0
        </BinaryDigit>
        <BinaryDigit $top="28px" $left="6px" $delay="2s" $size="7px">
          1
        </BinaryDigit>
        <BinaryDigit $top="32px" $left="28px" $delay="3s" $size="8px">
          0
        </BinaryDigit>

        {/* 温和的数据流 */}
        <DataStream $delay="0s" />
        <DataStream $delay="2s" />
      </LogoIcon>

      {showText && (
        <LogoText className="logo-text" style={{ fontSize: currentSize.text }}>
          Binary<span style={{ fontWeight: 400 }}>Thoughts</span>
        </LogoText>
      )}
    </LogoContainer>
  );
}
