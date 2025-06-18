"use client";

import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const HeroContainer = styled.section`
  display: flex;
  min-height: 80vh;
  background: linear-gradient(135deg, #1e3a8a 0%, #3730a3 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
    opacity: 0.3;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    min-height: auto;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  z-index: 2;
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: white;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  width: 400px;
  height: 500px;
  perspective: 1000px;

  @media (max-width: 1024px) {
    width: 350px;
    height: 450px;
  }

  @media (max-width: 768px) {
    width: 320px;
    height: 420px;
  }

  @media (max-width: 375px) {
    width: 290px;
    height: 380px;
  }
`;

const ValueProposition = styled(motion.div)`
  background: linear-gradient(135deg, #f59e0b, #f97316);
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 15px rgba(245, 158, 11, 0.3);
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const EbookCard = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(145deg, #ffffff, #f8fafc);
  border-radius: 20px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;
  backdrop-filter: blur(10px);
`;

const EbookTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  color: #1e3a8a;
  margin-bottom: 1rem;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 375px) {
    font-size: 1.3rem;
  }
`;

const EbookSubtitle = styled.p`
  color: #666;
  font-size: 1rem;
  margin-bottom: 2rem;
  line-height: 1.5;
`;

const EbookIcon = styled(motion.div)`
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #1e40af, #3730a3);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 10px 25px rgba(30, 64, 175, 0.3);
`;

const CarouselNavigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const NavButton = styled(motion.button)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.5);
    transform: scale(1.1);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const SliderDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;

const Dot = styled(motion.button)`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${(props) =>
    props.active ? "#f59e0b" : "rgba(255, 255, 255, 0.5)"};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #f59e0b;
    transform: scale(1.2);
  }
`;

const FormContainer = styled.div`
  max-width: 400px;
  width: 100%;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 1rem;
  }
`;

const FormTitle = styled(motion.h1)`
  font-size: 2.8rem;
  font-weight: 700;
  color: #1e40af;
  margin-bottom: 1rem;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media (max-width: 375px) {
    font-size: 1.8rem;
  }
`;

const FormSubtitle = styled(motion.p)`
  color: #6b7280;
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  line-height: 1.6;
`;

const ProgressBar = styled(motion.div)`
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  margin-top: 1rem;
  overflow: hidden;
`;

const ProgressIndicator = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, #f59e0b, #f97316);
  border-radius: 2px;
`;

// Enhanced ebook data for Sachhsoft
const ebooks = [
  {
    id: 1,
    title: "Complete Guide to Custom Software Development",
    subtitle:
      "Transform your business ideas into scalable digital solutions with proven methodologies",
    icon: "💻",
    value: "Save $50K+ on development costs",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    id: 2,
    title: "Cloud Migration Strategy Handbook",
    subtitle:
      "Scale your business with secure cloud infrastructure and best practices",
    icon: "☁️",
    value: "Reduce operational costs by 40%",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  },
  {
    id: 3,
    title: "Digital Marketing ROI Playbook",
    subtitle:
      "Generate qualified leads and boost revenue growth with data-driven strategies",
    icon: "📈",
    value: "Increase revenue by 200%+",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  },
  {
    id: 4,
    title: "Startup Tech Strategy Guide",
    subtitle:
      "Build your MVP and scale to enterprise level with expert guidance",
    icon: "🚀",
    value: "Launch 3x faster to market",
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer;
    let progressTimer;

    if (isPlaying) {
      // Progress animation
      progressTimer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            return 0;
          }
          return prev + 2.5; // 100 / 4000ms * 100ms = 2.5
        });
      }, 100);

      // Slide change
      timer = setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % ebooks.length);
        setProgress(0);
      }, 4000);
    }

    return () => {
      clearTimeout(timer);
      clearInterval(progressTimer);
    };
  }, [currentSlide, isPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % ebooks.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + ebooks.length) % ebooks.length);
    setProgress(0);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <HeroContainer>
      <LeftSection>
        <CarouselContainer>
          <AnimatePresence mode="wait">
            <EbookCard
              key={currentSlide}
              initial={{
                opacity: 0,
                rotateY: 90,
                scale: 0.8,
                z: -100,
              }}
              animate={{
                opacity: 1,
                rotateY: 0,
                scale: 1,
                z: 0,
              }}
              exit={{
                opacity: 0,
                rotateY: -90,
                scale: 0.8,
                z: -100,
              }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
                opacity: { duration: 0.6 },
                scale: { duration: 0.8 },
              }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 },
              }}
              onClick={() => setIsPlaying(!isPlaying)}
            >
              <EbookIcon
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {ebooks[currentSlide].icon}
              </EbookIcon>

              <ValueProposition
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {ebooks[currentSlide].value}
              </ValueProposition>

              <EbookTitle>{ebooks[currentSlide].title}</EbookTitle>
              <EbookSubtitle>{ebooks[currentSlide].subtitle}</EbookSubtitle>
            </EbookCard>
          </AnimatePresence>
        </CarouselContainer>

        <CarouselNavigation>
          <NavButton
            onClick={prevSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ‹
          </NavButton>

          <SliderDots>
            {ebooks.map((_, index) => (
              <Dot
                key={index}
                active={index === currentSlide}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </SliderDots>

          <NavButton
            onClick={nextSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ›
          </NavButton>
        </CarouselNavigation>

        <ProgressBar>
          <ProgressIndicator
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1, ease: "linear" }}
          />
        </ProgressBar>
      </LeftSection>

      <RightSection>
        <FormContainer>
          <FormTitle
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transform Your Business Today
          </FormTitle>

          <FormSubtitle
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Get expert insights from Sachhsoft&apos;s 10+ years of experience.
            Download our exclusive guides and accelerate your growth.
          </FormSubtitle>

          <motion.div
            style={{
              padding: "2rem",
              background: "#f8f9fa",
              borderRadius: "10px",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <form style={{ textAlign: "left" }}>
              <div style={{ marginBottom: "1.5rem" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontWeight: "500",
                    color: "#374151",
                  }}
                >
                  Email Address*
                </label>
                <input
                  type="email"
                  placeholder="Enter your email to get started"
                  style={{
                    width: "100%",
                    padding: "0.875rem",
                    borderRadius: "6px",
                    border: "2px solid #e5e7eb",
                    fontSize: "1rem",
                  }}
                  required
                />
              </div>

              <motion.button
                type="submit"
                style={{
                  width: "100%",
                  padding: "1rem",
                  background: "linear-gradient(135deg, #f59e0b, #f97316)",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  fontWeight: "600",
                  fontSize: "1.1rem",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Free Access
                <span style={{ fontSize: "1.2rem", marginLeft: "0.5rem" }}>
                  →
                </span>
              </motion.button>

              <p
                style={{
                  fontSize: "0.875rem",
                  color: "#6b7280",
                  marginTop: "1rem",
                  textAlign: "center",
                }}
              >
                Instant access to all our strategic guides. No credit card
                required.
              </p>
            </form>
          </motion.div>
        </FormContainer>
      </RightSection>
    </HeroContainer>
  );
};

export default HeroSection;
