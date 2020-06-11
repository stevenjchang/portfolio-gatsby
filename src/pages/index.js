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
      "Led efforts to completely redesign our website by adding in stronger SEO, accessibility, updated UI, improved page speed, built reusable sections/components and a live preview mode for our copy editor.",
      "Created mobile responsive landing pages and marketing emails that were backwards compatible with pre IE11 browsers, outlook and gmail clients (checked via BrowserStack and Litmus)",
      "Added e2e testing, error logging, and form submission error handler to improve site reliability.",
      "Partnered with our internal apps team to help develop a dashboard for our customer success reps.",
    ],
  },
  {
    company: 'Nima Labs',
    jobTitle: 'Frontend Engineer',
    imageUrl: pic2,
    bullets: [
      "Architected a rewards system engine that automatically updates customer points based on database stream functions when users perform specific actions.",
      "Integrated marketing and analytics tools for seamless communication across different platforms like Segment.io, Google Analytics, Facebook Pixel, Iterable, Criteo, AdRoll, Talkable and others.",
      "Added pay with Paypal and Affirm options to the checkout page, improving customer experience.",
      "Tackled challenging issues emerging from using multiple tracking tools, for example solving cross subdomain tracking issues between Segment and Google.",
    ],
  },
  {
    company: 'Zymergen',
    jobTitle: 'Software Engineer',
    imageUrl: pic3,
    bullets: [
      "Developed Laboratory Information Management System(LIMS) dashboard for scientific researchers.",
      "Partnered with leadership to work on a dashboard for scientific researchers, converting a Ruby on Rails tempting codebase into AngularJS.",
      "Completed the task within the time frame of the 6 month contract period.",
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
            I’m a quick moving, problem solving, and detailed software engineer looking to help startups succeed.
          </p>
          <p>
            I’m an active collaborator in planning meetings and really enjoy working with smaller teams. I’m usually solely responsible for the projects that I’m given, but I make sure to keep different perspectives in mind and ask questions when I’m stuck. Often I’ve been asked to project manage myself and do the requirement gathering on my own.
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
          <li></li>
          <li></li>
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
