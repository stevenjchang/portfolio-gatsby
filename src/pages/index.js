import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import config from '../../config';

const dataArray = [
  {
    company: 'SKUPOS',
    jobTitle: 'Frontend Engineer',
    imageUrl: pic1,
    bullets: [
      "Lead efforts to implement complete website redesign: adding in better SEO, accessibility, reusable components, preview mode and A / B testing.",
      "Worked as sole Marketing Tech developer - create landing pages, marketing emails, that were backwards compatible with  pre IE11 browsers, outlook and gmail clients.",
      "Conducted SEO and accessibility audits on current website, with detailed action plan for improvement.",
      "Assisted with internal facing application displaying customer data with GraphQL.",
    ],
  },
  {
    company: 'Nima Labs',
    jobTitle: 'Frontend Engineer',
    imageUrl: pic2,
    bullets: [
      "Architected a rewards system engine for customers.Reward earnings were automatically triggered by database stream functions when users perform specific actions.",
      "Lead payment systems implementation project: integrating with Paypal and Affirm at checkout.",
      "Learned marketing and tracking protocols/ best practices on the fly, while debugging hard to solve edgecase issues that’s not generally known to developers or marketers.",
      "Integrated Nima’s marketing and analytics tools; including Segment, Google Analytics, Facebook Pixel, Iterable, Criteo, AdRoll, Talkable and others.",
    ],
  },
  {
    company: 'Zymergen',
    jobTitle: 'Software Engineer',
    imageUrl: pic3,
    bullets: [
      "Developed Laboratory Information Management System(LIMS) dashboard for scientific researchers.",
      "Worked with AngularJS and Ruby on Rails codebase, in collaboration with additional Java and Python codebases that the company has.",

    ],
  },
]

const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="/#" className="button primary">
                Explore
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
            Passion for fast paced startups
            <br />
            {/* eget augue amet aliquet nisl cep donec */}
          </h2>
          <p>
            While working at a small startup, I lead implementations on full-stack features, taking them from idea to research to implementation. This includes database schema design (noSQL) and api design on the backend. I worked on an e-commerce site built in React & Redux. I also take on many marketing tech related responsibilities, which includes a understanding of analytics and tracking tools.
          </p>
        </header>
        <ul className="icons major">
          <li>
            <span className="icon fa-flag major style1">
              <span className="label">Lorem</span>
            </span>
          </li>
          <li>
            <span className="icon fa-compass major style2">
              <span className="label">Ipsum</span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-code major style3">
              <span className="label">Dolor</span>
            </span>
          </li>
        </ul>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">


      {dataArray.map(({ company, jobTitle, imageUrl, bullets }) => (
        <section className="spotlight">
          <div className="image">
            <img src={imageUrl} alt="" />
          </div>
          <div className="content">
            <h2 style={{ textTransform: 'none', letterSpacing: '3px', fontSize: '1.7em', marginBottom: '0px' }}>
              {company}

            </h2>
            <p style={{ textTransform: 'uppercase', color: 'gray', letterSpacing: '1px', fontSize: '17px', marginBottom: '25px' }}>{jobTitle}</p>
            <ul>
              {bullets && bullets.map((bullet) => (
                <li style={{ fontSize: '14px', fontWeight: '300', color: 'gray' }}>{bullet}</li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      {/* <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2 style={{textTransform: 'none'}}>
            SKUPOS
            <br />
            <span style={{color: 'gray'}}>Frontend Engineer</span>
          </h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
            imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <h2>
            Nima Labs
            <br />
            Frontend Engineer
          </h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
            imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>
            Zymergen
            <br />
            Software Engineer
          </h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
            imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
          </p>
        </div>
      </section> */}




    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Passion Projects</h2>
          <p>
            I've build several websites that get live traffic. Even though it gets less than 100 unique visits a month, it's live and used by people.
            <br />
          </p>
        </header>
        <ul className="features">
          <li className="icon fa-paper-plane">
            <h3>Guess the lines yourself</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-laptop">
            <h3>Get Tennis Alerts</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat. 
            </p>
          </li>
          <li className="icon solid fa-code">
            <h3>Mus Scelerisque</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-headphones-alt">
            <h3>Mauris Imperdiet</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon fa-heart">
            <h3>Aenean Primis</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon fa-flag">
            <h3>Tortor Ut</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
        </ul>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Arcue ut vel commodo</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum endrerit imperdiet amet
            eleifend fringilla.
          </p>
        </header>
        <ul className="actions stacked">
          <li>
            <a href="/#" className="button fit primary">
              Activate
            </a>
          </li>
          <li>
            <a href="/#" className="button fit">
              Learn More
            </a>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
