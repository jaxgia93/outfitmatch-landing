import styled from "styled-components";

const CrossPlatformStyle = styled.section`
  padding: 120px 0;
  position: relative;
  overflow: hidden;
  transition: background-color 0.3s ease;
  background: ${props => props.darkMode ? "#232323" : "#ffffff"};
  
  .container {
    position: relative;
    z-index: 2;
  }
  
  .platform-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
    align-items: center;
    
    @media (max-width: 991px) {
      grid-template-columns: 1fr;
      text-align: center;
    }
  }
  
  .platform-content {
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
      margin-bottom: 30px;
      transition: color 0.3s ease;
    }
    
    .platform-boxes {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      margin-bottom: 30px;
      
      @media (max-width: 991px) {
        justify-content: center;
        max-width: 500px;
        margin: 0 auto 30px;
      }
      
      @media (max-width: 480px) {
        grid-template-columns: 1fr;
      }
      
      .platform-box {
        background: ${props => props.darkMode ? "#2d2d2d" : "#f9f9f9"};
        border-radius: 12px;
        padding: 25px 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        transition: all 0.3s ease;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
        
        &:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, ${props => props.darkMode ? "0.2" : "0.1"});
        }
        
        img {
          width: 50px;
          height: 50px;
          margin-bottom: 15px;
          filter: ${props => props.darkMode ? "brightness(10)" : "none"};
          transition: filter 0.3s ease;
        }
        
        h4 {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 8px;
          color: ${props => props.darkMode ? "#ffffff" : "#111111"};
          transition: color 0.3s ease;
        }
        
        p {
          font-size: 14px;
          margin-bottom: 0;
          color: ${props => props.darkMode ? "#cccccc" : "#666666"};
          transition: color 0.3s ease;
        }
      }
    }
    
    .app-buttons {
      display: flex;
      gap: 15px;
      
      @media (max-width: 991px) {
        justify-content: center;
      }
      
      @media (max-width: 480px) {
        flex-direction: column;
        align-items: center;
      }
      
      .app-button {
        display: inline-flex;
        align-items: center;
        background: ${props => props.darkMode ? "#2d2d2d" : "#111111"};
        color: #ffffff;
        border-radius: 12px;
        padding: 12px 20px;
        transition: all 0.3s ease;
        font-weight: 600;
        
        &:hover {
          background: #FF3E6C;
          transform: translateY(-3px);
        }
        
        svg {
          margin-right: 8px;
          font-size: 24px;
        }
        
        .button-text {
          display: flex;
          flex-direction: column;
          
          span {
            &:first-child {
              font-size: 12px;
              font-weight: 400;
            }
            
            &:last-child {
              font-size: 16px;
              font-weight: 600;
            }
          }
        }
      }
    }
  }
  
  .platform-image {
    position: relative;
    
    @media (max-width: 991px) {
      max-width: 500px;
      margin: 0 auto;
    }
    
    .devices-mockup {
      position: relative;
      z-index: 2;
      
      img {
        width: 100%;
        border-radius: 20px;
        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
      }
    }
    
    .platform-decoration {
      position: absolute;
      z-index: 1;
      
      &.decoration-1 {
        top: -30px;
        right: -30px;
        width: 150px;
        height: 150px;
        border-radius: 50%;
        background: ${props => props.darkMode ? 
          "radial-gradient(circle, rgba(255, 62, 108, 0.3) 0%, rgba(0, 0, 0, 0) 70%)" : 
          "radial-gradient(circle, rgba(255, 62, 108, 0.2) 0%, rgba(255, 255, 255, 0) 70%)"};
        transition: background 0.3s ease;
      }
      
      &.decoration-2 {
        bottom: -20px;
        left: -20px;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background: ${props => props.darkMode ? 
          "radial-gradient(circle, rgba(255, 159, 10, 0.3) 0%, rgba(0, 0, 0, 0) 70%)" : 
          "radial-gradient(circle, rgba(255, 159, 10, 0.2) 0%, rgba(255, 255, 255, 0) 70%)"};
        transition: background 0.3s ease;
      }
    }
  }
`;

export default CrossPlatformStyle;