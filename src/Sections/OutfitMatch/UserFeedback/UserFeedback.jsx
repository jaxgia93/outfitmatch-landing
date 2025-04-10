import React from "react";
import Slider from "react-slick";
import UserFeedbackStyle from "./UserFeedback.style";
import ScrollAnimate from "../../../Components/ScrollAnimate";

// Placeholder images - replace with actual images
import Avatar1 from "../../../assets/images/avater/testimonial1.png";
import Avatar2 from "../../../assets/images/avater/testimonial2.png";
import Avatar3 from "../../../assets/images/avater/testimonial3.png";
import Avatar4 from "../../../assets/images/avater/testimonial4.png";

const UserFeedback = ({ darkMode }) => {
  const testimonials = [
    {
      id: 1,
      name: "Laura Bianchi",
      role: "Fashion Blogger",
      quote: "Outfit Match ha rivoluzionato il modo in cui gestisco il mio guardaroba. Ora posso pianificare i miei outfit per eventi importanti e vedere come mi stanno i vestiti senza doverli indossare fisicamente!",
      avatar: Avatar1,
      rating: 5
    },
    {
      id: 2,
      name: "Marco Rossi",
      role: "Utente Premium",
      quote: "Finalmente un'app che mi aiuta davvero a scegliere cosa indossare. La prova virtuale è incredibilmente precisa e mi ha fatto risparmiare molti acquisti sbagliati online.",
      avatar: Avatar2,
      rating: 5
    },
    {
      id: 3,
      name: "Giulia Verdi",
      role: "Stylist",
      quote: "Come stylist professionale, uso Outfit Match ogni giorno con i miei clienti. La possibilità di creare combinazioni virtuali è uno strumento eccezionale che rende il mio lavoro più efficiente.",
      avatar: Avatar3,
      rating: 4
    },
    {
      id: 4,
      name: "Alessandro Neri",
      role: "Business Professional",
      quote: "Outfit Match mi ha aiutato a organizzare meglio il mio guardaroba da lavoro. L'app mi suggerisce combinazioni che non avrei mai pensato e posso pianificare la settimana in anticipo.",
      avatar: Avatar4,
      rating: 5
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  // Generate star rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={i < rating ? "filled" : "empty"} viewBox="0 0 16 16">
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg>
      );
    }
    return stars;
  };

  return (
    <UserFeedbackStyle darkMode={darkMode}>
      <div className="shape shape-top"></div>
      <div className="shape shape-bottom"></div>
      
      <div className="container">
        <div className="feedback-wrapper">
          <ScrollAnimate>
            <div className="section-title">
              <h2>Cosa dicono gli <span>utenti</span></h2>
              <p>
                Scopri le testimonianze di chi utilizza Outfit Match ogni giorno per 
                organizzare il proprio guardaroba e creare outfit perfetti.
              </p>
            </div>
          </ScrollAnimate>
          
          <ScrollAnimate delay={100}>
            <div className="testimonials-slider">
              <Slider {...settings}>
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id}>
                    <div className="testimonial-card">
                      <div className="rating">
                        {renderStars(testimonial.rating)}
                      </div>
                      <p className="quote">
                        {testimonial.quote}
                      </p>
                      <div className="user-info">
                        <div className="user-avatar">
                          <img src={testimonial.avatar} alt={testimonial.name} />
                        </div>
                        <div className="user-details">
                          <h5>{testimonial.name}</h5>
                          <p>{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </ScrollAnimate>
        </div>
      </div>
    </UserFeedbackStyle>
  );
};

export default UserFeedback;