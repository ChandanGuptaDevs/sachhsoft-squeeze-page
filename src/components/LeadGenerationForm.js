"use client";

import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

const FormSection = styled.section`
  display: flex;
  min-height: 100vh;
  background: white;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const LeftContent = styled.div`
  flex: 1;
  padding: 3rem;
  background: white;
  color: #374151;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const RightForm = styled.div`
  flex: 1;
  background: linear-gradient(135deg, #1e3a8a 0%, #3730a3 100%);
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
    padding: 2rem 1.5rem;
  }
`;

const MainHeadline = styled(motion.h1)`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 2rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SubHeadline = styled(motion.p)`
  font-size: 1.2rem;
  color: #374151;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const BenefitsList = styled(motion.div)`
  margin-bottom: 2rem;
`;

const BenefitTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e3a8a;
  margin-bottom: 1.5rem;
`;

const BenefitItem = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;

  &::before {
    content: "•";
    color: #f59e0b;
    font-size: 1.2rem;
    font-weight: bold;
    margin-right: 0.75rem;
    margin-top: 0.1rem;
  }
`;

const BenefitText = styled.p`
  color: #374151;
  line-height: 1.5;
  font-size: 1rem;
`;

const FormContainer = styled(motion.div)`
  background: white;
  border-radius: 12px;
  padding: 2.5rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  width: 100%;
  max-width: 500px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  z-index: 2;
`;

const FormTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: #1e3a8a;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const FormField = styled(motion.div)`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.875rem;
  border: 2px solid #e5e7eb;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  background: white;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }

  ${(props) =>
    props.error &&
    `
    border-color: #ef4444;
    &:focus {
      border-color: #ef4444;
      box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    }
  `}
`;

const Select = styled.select`
  width: 100%;
  padding: 0.875rem;
  border: 2px solid #e5e7eb;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  background: white;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  ${(props) =>
    props.error &&
    `
    border-color: #ef4444;
    &:focus {
      border-color: #ef4444;
      box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    }
  `}
`;

const ErrorText = styled.span`
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  display: block;
`;

const CheckboxField = styled(motion.div)`
  margin-bottom: 1.5rem;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
`;

const CheckboxInput = styled.input`
  width: 18px;
  height: 18px;
  margin-top: 2px;
  cursor: pointer;
  accent-color: #3b82f6;
`;

const CheckboxLabel = styled.label`
  font-size: 0.9rem;
  color: #374151;
  line-height: 1.4;
  cursor: pointer;

  a {
    color: #3b82f6;
    text-decoration: underline;

    &:hover {
      color: #2563eb;
    }
  }
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  background: linear-gradient(135deg, #f59e0b, #f97316);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 6px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const ArrowIcon = styled(motion.span)`
  font-size: 1.2rem;
`;

const SuccessMessage = styled(motion.div)`
  background: #10b981;
  color: white;
  padding: 1rem;
  border-radius: 6px;
  text-align: center;
  font-weight: 500;
`;

const LeadGenerationForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form Data:", data);
    setIsSubmitted(true);
    setIsLoading(false);
    reset();

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const benefits = [
    "How to transform your business ideas into scalable digital solutions with proven methodologies",
    "Strategic guidance to accelerate your startup's go-to-market strategy by 3x",
    "Cloud migration strategies that reduce operational costs by up to 40%",
    "Custom software development approaches that save $50K+ in development costs",
    "Digital marketing strategies that generate 200%+ revenue growth",
    "Enterprise-grade solutions for startups without enterprise-level budgets",
    "End-to-end development process from concept to deployment",
    "Industry best practices from 10+ years of experience serving global clients",
  ];

  return (
    <FormSection>
      <LeftContent>
        <MainHeadline
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Ready to transform your business with custom technology solutions?
        </MainHeadline>

        <SubHeadline
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Discover how Sachhsoft&apos;s expert team can help you leverage
          cutting-edge technology to streamline operations, boost efficiency,
          and drive unprecedented growth for your organization.
        </SubHeadline>

        <BenefitsList
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <BenefitTitle>
            What you&apos;ll discover in this consultation:
          </BenefitTitle>

          {benefits.map((benefit, index) => (
            <BenefitItem
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
            >
              <BenefitText>{benefit}</BenefitText>
            </BenefitItem>
          ))}
        </BenefitsList>
      </LeftContent>

      <RightForm>
        <FormContainer
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <FormTitle>Get Your Free Technology Consultation</FormTitle>

          {isSubmitted ? (
            <SuccessMessage
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              🎉 Thank you! Our team will contact you within 24 hours to
              schedule your consultation.
            </SuccessMessage>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormField
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Label htmlFor="name">Name*</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  error={errors.name}
                  {...register("name", {
                    required: "Name is required",
                    minLength: {
                      value: 2,
                      message: "Name must be at least 2 characters",
                    },
                  })}
                />
                {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
              </FormField>

              <FormField
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Label htmlFor="email">Email*</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your work email"
                  error={errors.email}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Please enter a valid email address",
                    },
                  })}
                />
                {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
              </FormField>

              <FormField
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <Label htmlFor="phone">Phone number*</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  error={errors.phone}
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[\+]?[\s\-\(\)]*([0-9][\s\-\(\)]*){10,}$/,
                      message: "Please enter a valid phone number",
                    },
                  })}
                />
                {errors.phone && <ErrorText>{errors.phone.message}</ErrorText>}
              </FormField>

              <FormField
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Label htmlFor="designation">Designation*</Label>
                <Select
                  id="designation"
                  error={errors.designation}
                  {...register("designation", {
                    required: "Please select your designation",
                  })}
                >
                  <option value="">Select your role</option>
                  <option value="ceo">CEO/Founder</option>
                  <option value="cto">CTO/Technical Lead</option>
                  <option value="manager">Manager</option>
                  <option value="director">Director</option>
                  <option value="developer">Developer</option>
                  <option value="other">Other</option>
                </Select>
                {errors.designation && (
                  <ErrorText>{errors.designation.message}</ErrorText>
                )}
              </FormField>

              <FormField
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <Label htmlFor="company">Company name*</Label>
                <Input
                  id="company"
                  type="text"
                  placeholder="Enter your company name"
                  error={errors.company}
                  {...register("company", {
                    required: "Company name is required",
                    minLength: {
                      value: 2,
                      message: "Company name must be at least 2 characters",
                    },
                  })}
                />
                {errors.company && (
                  <ErrorText>{errors.company.message}</ErrorText>
                )}
              </FormField>

              <CheckboxField
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <CheckboxInput
                  id="consent"
                  type="checkbox"
                  {...register("consent", {
                    required: "Please agree to our terms to continue",
                  })}
                />
                <CheckboxLabel htmlFor="consent">
                  I agree to receive communications from Sachhsoft and
                  understand that I can unsubscribe at any time. View our{" "}
                  <a href="/privacy-policy" target="_blank">
                    Privacy Policy
                  </a>{" "}
                  for more details.
                </CheckboxLabel>
                {errors.consent && (
                  <ErrorText>{errors.consent.message}</ErrorText>
                )}
              </CheckboxField>

              <SubmitButton
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                {isLoading ? (
                  "Submitting..."
                ) : (
                  <>
                    Get Free Consultation
                    <ArrowIcon
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </ArrowIcon>
                  </>
                )}
              </SubmitButton>
            </form>
          )}
        </FormContainer>
      </RightForm>
    </FormSection>
  );
};

export default LeadGenerationForm;
