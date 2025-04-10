import styled from "styled-components";

const UserFeedbackStyle = styled.section`
  padding: 120px 0;
  position: relative;
  transition: background-color 0.3s ease;
  background: ${props => props.darkMode ? "#232323" : "#ffffff"};
  overflow: hidden;
  
  .feedback-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
  }
  
  .section-title {
    text-align: center;
    margin-bottom: 60px;
    
    h2 {
      font-size: 42px;
      font-weight: 800;
      margin-bottom: 20px;
      color: ${props => props.darkMode ? "#ffffff" : "#111111"};
      transition: color 0.3s ease;
      
      @media (max-width: 767px) {
        font-size: 32px;
      }
      
      span {
        color: #FF3E6C;
        display: inline-block;
      }
    }
    
    p {
      font-size: 18px;
      line-height: 1.7;
      color: ${props => props.darkMode ? "#cccccc" : "#555555"};
      max-width: 650px;
      margin: 0 auto;
      transition: color 0.3s ease;
    }
  }
  
  .testimonials-slider {
    .slick-slide {
      padding: 20px 15px;
    }
    
    .slick-list {
      margin: 0 -15px;
    }
    
    .slick-prev,
    .slick-next {
      width: 45px;
      height: 45px;
      background: ${props => props.darkMode ? "#333333" : "#ffffff"};
      border-radius: 50%;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      z-index: 1;
      transition: all 0.3s ease;
      
      &:before {
        font-family: 'slick';
        font-size: 20px;
        color: ${props => props.darkMode ? "#ffffff" : "#333333"};
        opacity: 0.75;
      }
      
      &:hover {
        background: #FF3E6C;
        
        &:before {
          color: #ffffff;
          opacity: 1;
        }
      }
    }
    
    .slick-prev {
      left: -10px;
      
      @media (min-width: 768px) {
        left: -25px;
      }
    }
    
    .slick-next {
      right: -10px;
      
      @media (min-width: 768px) {
        right: -25px;
      }
    }
    
    .slick-dots {
      display: flex !important;
      align-items: center;
      justify-content: center;
      gap: 8px;
      margin-top: 40px;
      position: relative;
      bottom: 0;
      
      li {
        margin: 0;
        width: auto;
        height: auto;
        
        button {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: ${props => props.darkMode ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.1)"};
          transition: all 0.3s ease;
          
          &:before {
            display: none;
          }
        }
        
        &.slick-active {
          button {
            background: #FF3E6C;
            width: 24px;
            border-radius: 10px;
          }
        }
      }
    }
    
    .testimonial-card {
      background: ${props => props.darkMode ? "#2d2d2d" : "#f9f9f9"};
      border-radius: 16px;
      padding: 40px;
      height: 100%;
      box-shadow: 0 15px 40px rgba(0, 0, 0, ${props => props.darkMode ? "0.2" : "0.05"});
      transition: all 0.3s ease;
      
      @media (max-width: 767px) {
        padding: 30px 25px;
      }
      
      &:hover {
        transform: translateY(-10px);
        box-shadow: 0 25px 50px rgba(0, 0, 0, ${props => props.darkMode ? "0.3" : "0.1"});
      }
      
      .rating {
        display: flex;
        gap: 5px;
        margin-bottom: 20px;
        
        svg {
          width: 18px;
          height: 18px;
          color: #FFD700;
        }
      }
      
      .quote {
        font-size: 17px;
        font-weight: 400;
        line-height: 1.7;
        margin-bottom: 25px;
        color: ${props => props.darkMode ? "#cccccc" : "#555555"};
        font-style: italic;
        transition: color 0.3s ease;
        
        &:before {
          content: '"';
          font-size: 40px;
          color: #FF3E6C;
          line-height: 0;
          vertical-align: -10px;
          margin-right: 5px;
        }
        
        &:after {
          content: '"';
          font-size: 40px;
          color: #FF3E6C;
          line-height: 0;
          vertical-align: -10px;
          margin-left: 5px;
        }
      }
      
      .user-info {
        display: flex;
        align-items: center;
        
        .user-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          overflow: hidden;
          margin-right: 15px;
          
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        
        .user-details {
          h5 {
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 5px;
            color: ${props => props.darkMode ? "#ffffff" : "#111111"};
            transition: color 0.3s ease;
          }
          
          p {
            font-size: 14px;
            color: ${props => props.darkMode ? "#cccccc" : "#666666"};
            margin-bottom: 0;
            transition: color 0.3s ease;
          }
        }
      }
    }
  }
  
  .shape {
    position: absolute;
    
    &.shape-top {
      top: -50px;
      right: 0;
      width: 300px;
      height: 300px;
      border-radius: 50% 0 0 50%;
      background: ${props => props.darkMode ? 
        "radial-gradient(circle, rgba(255, 62, 108, 0.05) 0%, rgba(0, 0, 0, 0) 70%)" : 
        "radial-gradient(circle, rgba(255, 62, 108, 0.05) 0%, rgba(255, 255, 255, 0) 70%)"};
      transition: background 0.3s ease;
    }
    
    &.shape-bottom {
      bottom: -50px;
      left: 0;
      width: 300px;
      height: 300px;
      border-radius: 0 50% 50% 0;
      background: ${props => props.darkMode ? 
        "radial-gradient(circle, rgba(255, 159, 10, 0.05) 0%, rgba(0, 0, 0, 0) 70%)" : 
        "radial-gradient(circle, rgba(255, 159, 10, 0.05) 0%, rgba(255, 255, 255, 0) 70%)"};
      transition: background 0.3s ease;
    }
  }
`;

export default UserFeedbackStyle;