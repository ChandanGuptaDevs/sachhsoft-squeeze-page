// "use client";

// import { useState } from "react";
// import styled from "styled-components";
// import { motion } from "framer-motion";
// import { useForm } from "react-hook-form";

// const FormSection = styled.section`
//   display: flex;
//   min-height: 100vh;
//   background: white;
//   position: relative;
//   overflow: hidden;

//   @media (max-width: 1024px) {
//     flex-direction: column;
//   }

//   @media (max-width: 768px) {
//     min-height: auto; /* Allow natural height on mobile */
//   }
// `;

// const LeftContent = styled.div`
//   flex: 1;
//   padding: 3rem;

//   color: #1e3a8a;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   position: relative;
//   z-index: 2;
//   background: white;

//   @media (max-width: 1024px) {
//     padding: 2.5rem 2rem;
//   }

//   @media (max-width: 768px) {
//     padding: 2rem 1.5rem;
//   }

//   @media (max-width: 480px) {
//     padding: 1.5rem 1rem;
//   }
// `;

// const RightForm = styled.div`
//   flex: 1;
//   background: linear-gradient(135deg, #1e3a8a 0%, #3730a3 100%);
//   padding: 3rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   position: relative;
//   z-index: 2;

//   @media (max-width: 1024px) {
//     padding: 2.5rem 2rem;
//   }

//   @media (max-width: 768px) {
//     padding: 2rem 1.5rem;
//   }

//   @media (max-width: 480px) {
//     padding: 1.5rem 1rem;
//   }
// `;

// const MainHeadline = styled(motion.h1)`
//   font-size: 2.5rem;
//   font-weight: 700;
//   color: #1e3a8a;
//   margin-bottom: 2rem;
//   line-height: 1.2;

//   @media (max-width: 1024px) {
//     font-size: 2.2rem;
//     margin-bottom: 1.5rem;
//   }

//   @media (max-width: 768px) {
//     font-size: 2rem;
//     margin-bottom: 1.2rem;
//   }

//   @media (max-width: 480px) {
//     font-size: 1.8rem;
//     margin-bottom: 1rem;
//   }
// `;

// const SubHeadline = styled(motion.p)`
//   font-size: 1.2rem;
//   color: #4b5563;
//   margin-bottom: 2rem;
//   line-height: 1.6;

//   @media (max-width: 768px) {
//     font-size: 1.1rem;
//     margin-bottom: 1.5rem;
//   }

//   @media (max-width: 480px) {
//     font-size: 1rem;
//     margin-bottom: 1.2rem;
//   }
// `;

// const BenefitsList = styled(motion.div)`
//   margin-bottom: 2rem;
// `;

// const BenefitTitle = styled.h2`
//   font-size: 1.5rem;
//   font-weight: 600;
//   color: #1e3a8a;
//   margin-bottom: 1.5rem;

//   @media (max-width: 768px) {
//     font-size: 1.3rem;
//     margin-bottom: 1.2rem;
//   }

//   @media (max-width: 480px) {
//     font-size: 1.2rem;
//     margin-bottom: 1rem;
//   }
// `;

// const BenefitItem = styled(motion.div)`
//   display: flex;
//   align-items: flex-start;
//   margin-bottom: 1rem;

//   &::before {
//     content: "•";
//     color: #f59e0b;
//     font-size: 1.2rem;
//     font-weight: bold;
//     margin-right: 0.75rem;
//     margin-top: 0.1rem;
//   }
// `;

// const BenefitText = styled.p`
//   color: #374151;
//   line-height: 1.5;
//   font-size: 1rem;
// `;

// const FormContainer = styled(motion.div)`
//   background: white;
//   border-radius: 12px;
//   padding: 2.5rem;
//   box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
//   margin: 0 auto;
//   width: 100%;
//   max-width: 500px;
//   border: 1px solid rgba(255, 255, 255, 0.2);

//   @media (max-width: 768px) {
//     padding: 2rem;
//     max-width: 100%;
//   }

//   @media (max-width: 480px) {
//     padding: 1.5rem;
//     border-radius: 10px;
//   }
// `;

// const FormTitle = styled.h2`
//   font-size: 1.8rem;
//   font-weight: 600;
//   color: #1e3a8a;
//   margin-bottom: 1.5rem;
//   text-align: center;

//   @media (max-width: 768px) {
//     font-size: 1.6rem;
//     margin-bottom: 1.2rem;
//   }

//   @media (max-width: 480px) {
//     font-size: 1.4rem;
//     margin-bottom: 1rem;
//   }
// `;

// const FormField = styled(motion.div)`
//   margin-bottom: 1.5rem;
// `;

// const Label = styled.label`
//   display: block;
//   font-weight: 500;
//   color: #374151;
//   margin-bottom: 0.5rem;
//   font-size: 0.95rem;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 0.875rem;
//   border: 2px solid #e5e7eb;
//   border-radius: 6px;
//   font-size: 1rem;
//   transition: border-color 0.3s ease, box-shadow 0.3s ease;
//   background: white;

//   &:focus {
//     outline: none;
//     border-color: #3b82f6;
//     box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
//   }

//   &::placeholder {
//     color: #9ca3af;
//   }

//   ${(props) =>
//     props.error &&
//     `
//     border-color: #ef4444;
//     &:focus {
//       border-color: #ef4444;
//       box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
//     }
//   `}

//   @media (max-width: 480px) {
//     font-size: 16px; /* Prevent zoom on iOS devices */
//     padding: 0.75rem;
//   }
// `;

// const Select = styled.select`
//   width: 100%;
//   padding: 0.875rem;
//   border: 2px solid #e5e7eb;
//   border-radius: 6px;
//   font-size: 1rem;
//   transition: border-color 0.3s ease, box-shadow 0.3s ease;
//   background: white;
//   cursor: pointer;

//   &:focus {
//     outline: none;
//     border-color: #3b82f6;
//     box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
//   }

//   ${(props) =>
//     props.error &&
//     `
//     border-color: #ef4444;
//     &:focus {
//       border-color: #ef4444;
//       box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
//     }
//   `}

//   @media (max-width: 480px) {
//     font-size: 16px; /* Prevent zoom on iOS devices */
//     padding: 0.75rem;
//   }
// `;

// const ErrorText = styled.span`
//   color: #ef4444;
//   font-size: 0.875rem;
//   margin-top: 0.25rem;
//   display: block;
// `;

// const CheckboxField = styled(motion.div)`
//   margin-bottom: 1.5rem;
//   display: flex;
//   align-items: flex-start;
//   gap: 0.75rem;
// `;

// const CheckboxInput = styled.input`
//   width: 18px;
//   height: 18px;
//   margin-top: 2px;
//   cursor: pointer;
//   accent-color: #3b82f6;
// `;

// const CheckboxLabel = styled.label`
//   font-size: 0.9rem;
//   color: #374151;
//   line-height: 1.4;
//   cursor: pointer;

//   a {
//     color: #3b82f6;
//     text-decoration: underline;

//     &:hover {
//       color: #2563eb;
//     }
//   }
// `;

// const SubmitButton = styled(motion.button)`
//   width: 100%;
//   background: linear-gradient(135deg, #f59e0b, #f97316);
//   color: white;
//   padding: 1rem 2rem;
//   border: none;
//   border-radius: 6px;
//   font-size: 1.1rem;
//   font-weight: 600;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 0.5rem;
//   margin-top: 1rem;

//   &:disabled {
//     opacity: 0.7;
//     cursor: not-allowed;
//   }

//   @media (max-width: 480px) {
//     padding: 0.875rem 1.5rem;
//     font-size: 1rem;
//   }
// `;

// const ArrowIcon = styled(motion.span)`
//   font-size: 1.2rem;
// `;

// const SuccessMessage = styled(motion.div)`
//   background: #10b981;
//   color: white;
//   padding: 1rem;
//   border-radius: 6px;
//   text-align: center;
//   font-weight: 500;
// `;

// const LeadGenerationForm = () => {
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm();

//   const onSubmit = async (data) => {
//     setIsLoading(true);

//     // Simulate API call
//     await new Promise((resolve) => setTimeout(resolve, 2000));

//     console.log("Form Data:", data);
//     setIsSubmitted(true);
//     setIsLoading(false);
//     reset();

//     // Reset success message after 5 seconds
//     setTimeout(() => setIsSubmitted(false), 5000);
//   };

//   const benefits = [
//     "How to transform your business ideas into scalable digital solutions with proven methodologies",
//     "Strategic guidance to accelerate your startup's go-to-market strategy by 3x",
//     "Cloud migration strategies that reduce operational costs by up to 40%",
//     "Custom software development approaches that save $50K+ in development costs",
//     "Digital marketing strategies that generate 200%+ revenue growth",
//     "Enterprise-grade solutions for startups without enterprise-level budgets",
//     "End-to-end development process from concept to deployment",
//     "Industry best practices from 10+ years of experience serving global clients",
//   ];

//   return (
//     <FormSection>
//       <LeftContent>
//         <MainHeadline
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           Ready to transform your business with custom technology solutions?
//         </MainHeadline>

//         <SubHeadline
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           Discover how Sachhsoft&apos;s expert team can help you leverage
//           cutting-edge technology to streamline operations, boost efficiency,
//           and drive unprecedented growth for your organization.
//         </SubHeadline>

//         <BenefitsList
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//         >
//           <BenefitTitle>
//             What you&apos;ll discover in this consultation:
//           </BenefitTitle>

//           {benefits.map((benefit, index) => (
//             <BenefitItem
//               key={index}
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
//             >
//               <BenefitText>{benefit}</BenefitText>
//             </BenefitItem>
//           ))}
//         </BenefitsList>
//       </LeftContent>

//       <RightForm>
//         <FormContainer
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//         >
//           <FormTitle>Get Your Free Technology Consultation</FormTitle>

//           {isSubmitted ? (
//             <SuccessMessage
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               🎉 Thank you! Our team will contact you within 24 hours to
//               schedule your consultation.
//             </SuccessMessage>
//           ) : (
//             <form onSubmit={handleSubmit(onSubmit)}>
//               <FormField
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.5 }}
//               >
//                 <Label htmlFor="name">Name*</Label>
//                 <Input
//                   id="name"
//                   type="text"
//                   placeholder="Enter your full name"
//                   error={errors.name}
//                   {...register("name", {
//                     required: "Name is required",
//                     minLength: {
//                       value: 2,
//                       message: "Name must be at least 2 characters",
//                     },
//                   })}
//                 />
//                 {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
//               </FormField>

//               <FormField
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.6 }}
//               >
//                 <Label htmlFor="email">Email*</Label>
//                 <Input
//                   id="email"
//                   type="email"
//                   placeholder="Enter your work email"
//                   error={errors.email}
//                   {...register("email", {
//                     required: "Email is required",
//                     pattern: {
//                       value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                       message: "Please enter a valid email address",
//                     },
//                   })}
//                 />
//                 {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
//               </FormField>

//               <FormField
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.7 }}
//               >
//                 <Label htmlFor="phone">Phone number*</Label>
//                 <Input
//                   id="phone"
//                   type="tel"
//                   placeholder="Enter your phone number"
//                   error={errors.phone}
//                   {...register("phone", {
//                     required: "Phone number is required",
//                     pattern: {
//                       value: /^[\+]?[\s\-\(\)]*([0-9][\s\-\(\)]*){10,}$/,
//                       message: "Please enter a valid phone number",
//                     },
//                   })}
//                 />
//                 {errors.phone && <ErrorText>{errors.phone.message}</ErrorText>}
//               </FormField>

//               <FormField
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.8 }}
//               >
//                 <Label htmlFor="designation">Designation*</Label>
//                 <Select
//                   id="designation"
//                   error={errors.designation}
//                   {...register("designation", {
//                     required: "Please select your designation",
//                   })}
//                 >
//                   <option value="">Select your role</option>
//                   <option value="ceo">CEO/Founder</option>
//                   <option value="cto">CTO/Technical Lead</option>
//                   <option value="manager">Manager</option>
//                   <option value="director">Director</option>
//                   <option value="developer">Developer</option>
//                   <option value="other">Other</option>
//                 </Select>
//                 {errors.designation && (
//                   <ErrorText>{errors.designation.message}</ErrorText>
//                 )}
//               </FormField>

//               <FormField
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.9 }}
//               >
//                 <Label htmlFor="company">Company name*</Label>
//                 <Input
//                   id="company"
//                   type="text"
//                   placeholder="Enter your company name"
//                   error={errors.company}
//                   {...register("company", {
//                     required: "Company name is required",
//                     minLength: {
//                       value: 2,
//                       message: "Company name must be at least 2 characters",
//                     },
//                   })}
//                 />
//                 {errors.company && (
//                   <ErrorText>{errors.company.message}</ErrorText>
//                 )}
//               </FormField>

//               <CheckboxField
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 1.0 }}
//               >
//                 <CheckboxInput
//                   id="consent"
//                   type="checkbox"
//                   {...register("consent", {
//                     required: "Please agree to our terms to continue",
//                   })}
//                 />
//                 <CheckboxLabel htmlFor="consent">
//                   I agree to receive communications from Sachhsoft and
//                   understand that I can unsubscribe at any time. View our{" "}
//                   <a href="/privacy-policy" target="_blank">
//                     Privacy Policy
//                   </a>{" "}
//                   for more details.
//                 </CheckboxLabel>
//                 {errors.consent && (
//                   <ErrorText>{errors.consent.message}</ErrorText>
//                 )}
//               </CheckboxField>

//               <SubmitButton
//                 type="submit"
//                 disabled={isLoading}
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 1.1 }}
//               >
//                 {isLoading ? (
//                   "Submitting..."
//                 ) : (
//                   <>
//                     Get Free Consultation
//                     <ArrowIcon
//                       animate={{ x: [0, 5, 0] }}
//                       transition={{ duration: 1.5, repeat: Infinity }}
//                     >
//                       →
//                     </ArrowIcon>
//                   </>
//                 )}
//               </SubmitButton>
//             </form>
//           )}
//         </FormContainer>
//       </RightForm>
//     </FormSection>
//   );
// };

// export default LeadGenerationForm;

"use client";

import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

const FormSection = styled.section`
  display: flex;
  min-height: 100vh;
  background: white;
  position: relative;
  overflow: hidden;

  @media (max-width: 1024px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    min-height: auto;
  }
`;

const LeftContent = styled.div`
  flex: 1;
  padding: 3rem;
  color: #1e3a8a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 2;
  background: white;

  @media (max-width: 1024px) {
    padding: 2.5rem 2rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
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
  z-index: 2;

  @media (max-width: 1024px) {
    padding: 2.5rem 2rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
  }
`;

// NEW: Lead Magnet Section
const LeadMagnetSection = styled(motion.div)`
  background: linear-gradient(135deg, #f59e0b 0%, #f97316 100%);
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="2" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23dots)"/></svg>');
    opacity: 0.3;
  }

  > * {
    position: relative;
    z-index: 2;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    border-radius: 12px;
  }

  @media (max-width: 480px) {
    padding: 1.25rem;
    border-radius: 10px;
  }
`;

const LeadMagnetIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 0.75rem;
  }
`;

const LeadMagnetTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const LeadMagnetSubtitle = styled.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    margin-bottom: 1rem;
  }
`;

const LeadMagnetFeatures = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
    margin-bottom: 1.2rem;
  }
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.15);
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;

  @media (max-width: 768px) {
    padding: 0.5rem 0.75rem;
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const MainHeadline = styled(motion.h1)`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 1rem;
  line-height: 1.2;

  @media (max-width: 1024px) {
    font-size: 2.2rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const SubHeadline = styled(motion.p)`
  font-size: 1.2rem;
  color: #4b5563;
  margin-bottom: 2rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 1.2rem;
  }
`;

const BenefitsList = styled(motion.div)`
  margin-bottom: 2rem;
`;

const BenefitTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e3a8a;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
`;

const BenefitItem = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;

  &::before {
    content: "✓";
    color: #10b981;
    font-size: 1.2rem;
    font-weight: bold;
    margin-right: 0.75rem;
    margin-top: 0.1rem;
    background: rgba(16, 185, 129, 0.1);
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
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

  @media (max-width: 768px) {
    padding: 2rem;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
    border-radius: 10px;
  }
`;

const FormTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: #1e3a8a;
  margin-bottom: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

const FormSubtitle = styled.p`
  text-align: center;
  color: #6b7280;
  margin-bottom: 2rem;
  font-size: 1rem;
  line-height: 1.5;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
  }
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

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 0.75rem;
  }
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

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 0.75rem;
  }
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

  @media (max-width: 480px) {
    padding: 0.875rem 1.5rem;
    font-size: 1rem;
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
    "Free consultation to discuss your specific project needs",
    "Custom development strategies that save time and costs",
    "Cloud solutions that scale with your business growth",
    "Proven methodologies from 10+ years of experience",
  ];

  return (
    <FormSection>
      <LeftContent>
        {/* NEW: Lead Magnet Section */}
        <LeadMagnetSection
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <LeadMagnetIcon>📋</LeadMagnetIcon>
          <LeadMagnetTitle>
            Download Your FREE Project Planning Kit
          </LeadMagnetTitle>
          <LeadMagnetSubtitle>
            Get our exclusive 40-page guide that includes templates, checklists,
            and strategies used by Fortune 500 companies
          </LeadMagnetSubtitle>

          <LeadMagnetFeatures>
            <FeatureItem>✨ Project Templates</FeatureItem>
            <FeatureItem>📊 Cost Calculator</FeatureItem>
            <FeatureItem>🚀 Launch Checklist</FeatureItem>
            <FeatureItem>💡 Best Practices Guide</FeatureItem>
          </LeadMagnetFeatures>

          <div
            style={{
              background: "rgba(255, 255, 255, 0.2)",
              padding: "0.75rem 1rem",
              borderRadius: "8px",
              fontSize: "0.9rem",
              fontWeight: "600",
            }}
          >
            🎁 FREE Download - Worth $297, Yours Free Today!
          </div>
        </LeadMagnetSection>

        <MainHeadline
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Transform Your Business with Expert Technology Solutions
        </MainHeadline>

        <SubHeadline
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Get your free project planning kit and discover how Sachhsoft can help
          you build scalable digital solutions that drive real growth.
        </SubHeadline>

        <BenefitsList
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <BenefitTitle>What you&apos;ll get:</BenefitTitle>

          {benefits.slice(0, 4).map((benefit, index) => (
            <BenefitItem
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
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
          <FormTitle>
            Get Your Free Project Planning Kit + Consultation
          </FormTitle>
          <FormSubtitle>
            Fill out the form below to download your free resources and schedule
            your personalized consultation
          </FormSubtitle>

          {isSubmitted ? (
            <SuccessMessage
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              🎉 Success! Check your email for the download link. Our team will
              contact you within 24 hours to schedule your consultation.
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
                  "Sending Your Free Resources..."
                ) : (
                  <>
                    📥 Download Free Kit + Get Consultation
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
