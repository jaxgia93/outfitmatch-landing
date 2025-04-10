import styled from "styled-components";

const DownloadAppStyle = styled.section`
  padding: 120px 0;
  position: relative;
  transition: background-color 0.3s ease;
  background: ${props => props.darkMode ? "#181818" : "#f8f9fa"};
  overflow: hidden;
  
  .download-wrapper {
    background: linear-gradient(45deg, #FF3E6C, #FF9F0A);
    border-radius: 24px;
    padding: 70px 50px;
    position: relative;
    overflow: hidden;
    
    @media (max-width: 767px) {
      padding: 50px 30px;
    }
    
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url(${props => props.bgPattern}) repeat;
      opacity: 0.1;
      z-index: 1;
    }
  }
  
  /* Beta Signup Form Styles */
  .beta-content {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    position: relative;
    z-index: 2;
    
    @media (max-width: 991px) {
      flex-direction: column;
      text-align: center;
    }
    
    .beta-text {
      width: 55%;
      
      @media (max-width: 991px) {
        width: 100%;
        margin-bottom: 40px;
      }
      
      h2 {
        font-size: 42px;
        font-weight: 800;
        color: #ffffff;
        margin-bottom: 20px;
        
        @media (max-width: 767px) {
          font-size: 32px;
        }
      }
      
      p {
        font-size: 18px;
        line-height: 1.7;
        color: rgba(255, 255, 255, 0.9);
        margin-bottom: 30px;
        max-width: 500px;
        
        @media (max-width: 991px) {
          margin: 0 auto 30px;
        }
        
        &.success-message {
          font-weight: 600;
          font-size: 20px;
        }
      }
      
      .highlight {
        font-weight: 700;
        color: #ffffff;
        background: rgba(0, 0, 0, 0.15);
        padding: 2px 5px;
        border-radius: 4px;
      }
      
      .beta-form {
        margin-top: 30px;
        
        .form-group {
          display: flex;
          
          @media (max-width: 600px) {
            flex-direction: column;
          }
          
          input {
            flex: 1;
            height: 60px;
            padding: 0 20px;
            border: none;
            border-radius: 12px;
            font-size: 16px;
            background: rgba(255, 255, 255, 0.9);
            
            &:focus {
              outline: none;
              box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
            }
            
            &.error {
              border: 2px solid rgba(255, 0, 0, 0.5);
            }
            
            @media (max-width: 600px) {
              margin-bottom: 15px;
            }
          }
          
          button {
            height: 60px;
            padding: 0 30px;
            background: #222222;
            color: #ffffff;
            border: none;
            border-radius: 12px;
            font-size: 16px;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-left: 15px;
            
            &:hover {
              background: #000000;
              transform: translateY(-3px);
              box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
            }
            
            @media (max-width: 600px) {
              margin-left: 0;
              width: 100%;
            }
          }
        }
        
        .error-message {
          color: #ffffff;
          background: rgba(255, 0, 0, 0.3);
          padding: 8px 12px;
          border-radius: 8px;
          margin-top: 10px;
          font-size: 14px;
          text-align: left;
          
          @media (max-width: 991px) {
            text-align: center;
          }
        }
        
        .form-note {
          margin-top: 12px;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
        }
      }
      
      .confirmation-box {
        background: rgba(255, 255, 255, 0.2);
        border-radius: 12px;
        padding: 25px;
        margin-top: 30px;
        text-align: center;
        
        .confirmation-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          background: #3ECF8E;
          color: #ffffff;
          border-radius: 50%;
          font-size: 28px;
          margin-bottom: 15px;
        }
        
        .confirmation-text {
          font-size: 18px;
          font-weight: 600;
          color: #ffffff;
        }
      }
    }
    
    .beta-features {
      width: 35%;
      
      @media (max-width: 991px) {
        width: 100%;
      }
      
      .features-wrapper {
        background: rgba(255, 255, 255, 0.15);
        border-radius: 20px;
        padding: 30px;
        height: 100%;
        
        h3 {
          font-size: 24px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 25px;
          text-align: center;
        }
        
        .features-list {
          list-style: none;
          padding: 0;
          margin: 0;
          
          li {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            
            .feature-icon {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 30px;
              height: 30px;
              background: rgba(255, 255, 255, 0.9);
              color: #FF3E6C;
              border-radius: 50%;
              margin-right: 15px;
              font-size: 16px;
              font-weight: bold;
              flex-shrink: 0;
            }
            
            .feature-text {
              color: rgba(255, 255, 255, 0.9);
              font-size: 16px;
              font-weight: 500;
              text-align: left;
            }
          }
        }
        
        .features-footer {
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          color: rgba(255, 255, 255, 0.8);
          font-size: 14px;
          text-align: center;
        }
      }
    }
  }
  
  /* Keep the original download content styles for backward compatibility */
  .download-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 2;
    
    @media (max-width: 991px) {
      flex-direction: column;
      text-align: center;
    }
    
    .download-text {
      width: 55%;
      
      @media (max-width: 991px) {
        width: 100%;
        margin-bottom: 40px;
      }
      
      h2 {
        font-size: 42px;
        font-weight: 800;
        color: #ffffff;
        margin-bottom: 20px;
        
        @media (max-width: 767px) {
          font-size: 32px;
        }
      }
      
      p {
        font-size: 18px;
        line-height: 1.7;
        color: rgba(255, 255, 255, 0.9);
        margin-bottom: 30px;
        max-width: 500px;
        
        @media (max-width: 991px) {
          margin: 0 auto 30px;
        }
      }
    }
    
    .download-buttons {
      display: flex;
      gap: 20px;
      
      @media (max-width: 991px) {
        justify-content: center;
      }
      
      @media (max-width: 480px) {
        flex-direction: column;
        align-items: center;
      }
      
      .download-btn {
        display: flex;
        align-items: center;
        background: #ffffff;
        border-radius: 12px;
        padding: 12px 20px;
        color: #111111;
        transition: all 0.3s ease;
        
        &:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
        }
        
        .btn-icon {
          margin-right: 12px;
          
          svg {
            width: 30px;
            height: 30px;
          }
        }
        
        .btn-text {
          display: flex;
          flex-direction: column;
          
          .small-text {
            font-size: 12px;
            font-weight: 400;
            margin-bottom: 4px;
          }
          
          .big-text {
            font-size: 18px;
            font-weight: 700;
          }
        }
      }
    }
    
    .download-qr {
      width: 35%;
      display: flex;
      align-items: center;
      justify-content: center;
      
      @media (max-width: 991px) {
        width: 100%;
        margin: 0 auto;
      }
      
      .qr-wrapper {
        background: #ffffff;
        border-radius: 20px;
        padding: 20px;
        position: relative;
        margin: 0 auto;
        max-width: 280px;
        text-align: center;
        
        .qr-title {
          font-size: 16px;
          font-weight: 700;
          color: #111111;
          text-align: center;
          margin-bottom: 15px;
        }
        
        .qr-code {
          width: 200px;
          height: 200px;
          border-radius: 12px;
          overflow: hidden;
          margin: 0 auto;
          
          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
        
        .qr-caption {
          font-size: 14px;
          color: #666666;
          text-align: center;
          margin-top: 15px;
        }
      }
    }
  }
  
  .shape {
    position: absolute;
    
    &.shape-1 {
      top: -70px;
      left: 10%;
      width: 200px;
      height: 200px;
      border-radius: 50%;
      background: ${props => props.darkMode ? 
        "radial-gradient(circle, rgba(255, 62, 108, 0.1) 0%, rgba(0, 0, 0, 0) 70%)" : 
        "radial-gradient(circle, rgba(255, 62, 108, 0.1) 0%, rgba(255, 255, 255, 0) 70%)"};
      transition: background 0.3s ease;
    }
    
    &.shape-2 {
      bottom: -70px;
      right: 10%;
      width: 200px;
      height: 200px;
      border-radius: 50%;
      background: ${props => props.darkMode ? 
        "radial-gradient(circle, rgba(255, 159, 10, 0.1) 0%, rgba(0, 0, 0, 0) 70%)" : 
        "radial-gradient(circle, rgba(255, 159, 10, 0.1) 0%, rgba(255, 255, 255, 0) 70%)"};
      transition: background 0.3s ease;
    }
  }
`;

export default DownloadAppStyle;