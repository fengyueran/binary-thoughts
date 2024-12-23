'use client';
import styled from 'styled-components';
import { Row, Button } from '@xinghunm/widgets';
import RocketIcon from '@/assets/icons/rocket.svg';
import Gallery1 from '@/assets/images/gallery-1.jpg';
import Gallery2 from '@/assets/images/gallery-2.jpg';
import Gallery3 from '@/assets/images/gallery-3.jpg';
import Gallery4 from '@/assets/images/gallery-4.jpg';

const PageContainer = styled.div`
  position: relative;
  min-height: calc(100vh - 4rem);
`;

const MainContainer = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding-top: 2.5rem;
  padding-bottom: 8rem;
  padding-left: 2rem;
  padding-right: 2rem;

  /* Mobile responsiveness adjustments */
  @media (max-width: 768px) {
    padding-top: 4rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const GalleryWrapper = styled.div`
  gap: 2rem;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: center;
    margin-top: 3rem;
    gap: 1rem;
  }
`;

const HeroSection = styled(Row)`
  column-gap: 3.5rem;
  z-index: 1;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 0;
  }
`;

const HeroContent = styled.div`
  padding-top: 0.625rem;
`;

const HeroTitle = styled.h1`
  font-size: 3.75rem;
  letter-spacing: -0.025em;
  font-weight: 700;
  color: rgb(15, 23, 42);
  font-family: var(--custom-heading-font);
  margin: 0.67em 0;
  line-height: 1.2;
`;

const HeroSubtitle = styled.h2`
  margin-top: 1.5rem;
  font-size: 1.125rem;
  line-height: 1.8;
  font-family: var(--custom-body-font);
  color: rgb(51, 65, 85);
  font-weight: 400;
`;

const LeftGalleryColumn = styled.div`
  padding-top: 20rem;
  width: 11rem;
  margin-left: auto;

  @media (max-width: 768px) {
    padding-top: 2rem;
    width: 8rem;
    margin-left: 0;
  }
`;

const RightGalleryColumn = styled.div`
  width: 11rem;
  margin-right: auto;
  padding-top: 9rem;

  @media (max-width: 768px) {
    padding-top: 0;
    width: 8rem;
    margin-right: 0;
  }
`;

const BackgroundGrid = styled.svg`
  stroke: rgb(0 0 0 / 0.1);
  width: 100%;
  height: 64rem;
  top: 0;
  left: 0;
  right: 0;
  position: absolute;
  mask-image: radial-gradient(32rem 32rem at center, white, transparent);
  svg {
    fill: #e8f7ff;
    overflow: visible;
  }

  @media (max-width: 768px) {
    height: 40rem;
    mask-image: radial-gradient(20rem 20rem at center, white, transparent);
  }
`;

const BlurredDecorationWrapper = styled.div`
  overflow: hidden;
  position: absolute;
  left: 50%;
  right: 0;
  top: 0;
  margin-left: 12rem;
  filter: blur(4rem);
  transform: matrix(1, 0, 0, 1, 0, 0);

  @media (max-width: 768px) {
    display: none;
  }
`;

const GradientPolygon = styled.div`
  clip-path: polygon(
    63.1% 29.5%,
    100% 17.1%,
    76.6% 3%,
    48.4% 0%,
    44.6% 4.7%,
    54.5% 25.3%,
    59.8% 49%,
    55.2% 57.8%,
    44.4% 57.2%,
    27.8% 47.9%,
    35.1% 81.5%,
    0% 97.7%,
    39.2% 100%,
    35.2% 81.4%,
    97.2% 52.8%,
    63.1% 29.5%
  );
  opacity: 0.3;
  width: 50.0625rem;
  aspect-ratio: 801 / 1036;
  background-image: linear-gradient(to top right, #2d89ef, #6c757d);
`;

const GalleryImageWrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;

const GalleryImage = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 0.75rem;
  height: auto;
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0,
    rgba(0, 0, 0, 0.1) 0 0.625rem 0.9375rem -0.1875rem,
    rgba(0, 0, 0, 0.1) 0 0.25rem 0.375rem -0.25rem;
`;

const ActionButtonsRow = styled(Row)`
  margin-top: 2rem;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

const PrimaryButton = styled(Button)`
  background-color: #4a90e2;
  padding: 0.75rem 1.5rem;
  font-size: 1.125rem;
  border-radius: 0.5rem;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 12.5rem;
  }
`;

const AnimatedRocketIcon = styled(RocketIcon)`
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;

const SecondaryButtonRow = styled(Row)`
  color: rgb(15 23 42);
  font-weight: 600;
  font-size: 1rem;
  gap: 0.25rem;
  cursor: pointer;

  &:hover ${AnimatedRocketIcon} {
    transform: translateX(0.375rem);
  }
`;

export default function HomePage() {
  return (
    <PageContainer>
      <BackgroundGrid
        className="absolute dark:opacity-20 inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-black/10 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="background-pattern"
            width="200"
            height="200"
            x="50%"
            y="-1"
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none"></path>
          </pattern>
        </defs>
        <svg x="50%" y="-1" className="overflow-visible fill-gray-50">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth="0"
          ></path>
        </svg>
        <rect width="100%" height="100%" strokeWidth="0" fill="url(#background-pattern)"></rect>
      </BackgroundGrid>
      <MainContainer>
        <BlurredDecorationWrapper>
          <GradientPolygon />
        </BlurredDecorationWrapper>
        <HeroSection>
          <HeroContent>
            <HeroTitle>欢迎来到xinghun&apos;s Universe</HeroTitle>
            <HeroSubtitle>
              探索前沿技术博客，欣赏yueran feng的作品，感受程序员的独特魅力。
            </HeroSubtitle>
            <ActionButtonsRow>
              <PrimaryButton>阅读博客</PrimaryButton>
              <SecondaryButtonRow>
                查看作品
                <AnimatedRocketIcon style={{ width: '1rem', height: '1rem' }} />
              </SecondaryButtonRow>
            </ActionButtonsRow>
          </HeroContent>
          <GalleryWrapper>
            <LeftGalleryColumn>
              <GalleryImageWrapper>
                <GalleryImage src={Gallery1.src} />
              </GalleryImageWrapper>
              <GalleryImageWrapper>
                <GalleryImage src={Gallery2.src} />
              </GalleryImageWrapper>
            </LeftGalleryColumn>
            <RightGalleryColumn>
              <GalleryImageWrapper>
                <GalleryImage src={Gallery3.src} />
              </GalleryImageWrapper>
              <GalleryImageWrapper>
                <GalleryImage src={Gallery4.src} />
              </GalleryImageWrapper>
            </RightGalleryColumn>
          </GalleryWrapper>
        </HeroSection>
      </MainContainer>
    </PageContainer>
  );
}
