import styled from "styled-components";

const OutfitFeaturesStyle = styled.section`
  padding: 100px 0;
  position: relative;
  transition: background-color 0.3s ease;
  background: ${props => props.darkMode ? "#232323" : "#ffffff"};
  
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
      }
    }
    
    p {
      font-size: 18px;
      color: ${props => props.darkMode ? "#cccccc" : "#555555"};
      max-width: 650px;
      margin: 0 auto;
      transition: color 0.3s ease;
    }
  }
  
  .features-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    
    @media (max-width: 1199px) {
      grid-template-columns: repeat(2, 1fr);
    }
    
    @media (max-width: 767px) {
      grid-template-columns: 1fr;
      gap: 30px;
    }
  }
  
  .feature-item {
    background: ${props => props.darkMode ? "#2d2d2d" : "#f9f9f9"};
    border-radius: 16px;
    padding: 40px 30px;
    transition: all 0.3s ease;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    
    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 35px rgba(0, 0, 0, ${props => props.darkMode ? "0.3" : "0.1"});
    }
    
    .feature-icon {
      width: 90px;
      height: 90px;
      border-radius: 16px;
      background: ${props => props.darkMode ? "#333333" : "#fff1f5"};
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 25px;
      transition: background-color 0.3s ease;
      
      img {
        width: 46px;
        height: 46px;
        object-fit: contain;
        filter: ${props => props.darkMode ? "brightness(10)" : "none"};
        transition: filter 0.3s ease;
      }
    }
    
    h3 {
      font-size: 22px;
      font-weight: 700;
      margin-bottom: 15px;
      color: ${props => props.darkMode ? "#ffffff" : "#111111"};
      transition: color 0.3s ease;
    }
    
    p {
      font-size: 16px;
      line-height: 1.6;
      color: ${props => props.darkMode ? "#cccccc" : "#666666"};
      margin-bottom: 0;
      transition: color 0.3s ease;
    }
  }
`;

export default OutfitFeaturesStyle;