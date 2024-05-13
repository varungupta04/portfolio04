import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Varun Gupta</span>
              </p>
              <h2 className="about__heading">A Web developer</h2>
              <div className="about__info">
                <PText>
                  I am from Bangalore, India. A place of beauty and Technology.
                  Since my childhood, i love art and design. I always try to
                  design things with my unique point of view. I also love to
                  create things that can be usefull to others. and always take
                  into consideration the functionality of products I build
                  <br /> <br />
                  I've been immersed in coding since my high school days, and for me, 
                  it's more than just lines of code—it's an art form. 
                  I'm deeply passionate about it, and now, as a machine learning engineer, 
                  I'm thrilled to merge my coding expertise with design. 
                  This combination adds an intriguing dimension to my work, and
                  I find the process immensely rewarding.
                  <br />
                  <br />
                  My vision is to make the world a better place. I love
                  tinkering as it helps me think about what I am truly doing. It
                  is time for us to create more good things that helps the world
                  to become a better place.
                </PText>
              </div>
              <Button btnText="Download CV" btnLink="#" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="School"
                items={['Delhi public school, Bangalore East']}
              />
              <AboutInfoItem
                title="College"
                items={['VIT vellore, Tamil-Nadu']}
              />
              <AboutInfoItem
                title="chapters/societies"
                items={['Computer-society of India, IEEE']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="Machine Learning"
                items={['CNN', 'regressions', 'Opencv']}
              />
              <AboutInfoItem
                title="Data Analyst"
                items={['Python', 'Pandas', 'spark', 'numpy']}
              />
              <AboutInfoItem title="Competitive coding" items={['Java/CPP']} />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem title="worked on" items={['ML and Deep Learning projects']} />
              <AboutInfoItem title="working on" items={['EDA and automation']} />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
