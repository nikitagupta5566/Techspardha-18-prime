import React from 'react';
import { Link } from 'react-router-dom';
import './Doc.css';

const Buttons = (props) => {
  const {
    link, image, title, href,
  } = props;
  if (link) {
    return (
      <Link to={link} className="btn dock-icon-btn" data-toggle="tooltip" data-placement="top" title={title}>
        <img src={image} className="dock-icon" alt="icon" />
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" className="btn dock-icon-btn" data-toggle="tooltip" data-placement="top" title={title}>
      <img src={image} className="dock-icon" alt="icon" />
    </a>
  );
};

const DOC = () => {
  const dockerButtons = [
    {
      link: '/',
      title: 'Home',
      image: '/images/doc/home.png',
    },
    {
      link: '/aboutUs',
      title: 'About us',
      image: '/images/doc/aboutus.png',
    },
    {
      link: '/guestLectures',
      title: 'Guest lectures',
      image: '/images/doc/guest.png',
    },
    {
      href: 'https://techspardha.org/Hackathon/',
      title: 'Hackathon',
      image: '/images/doc/hackathon.png',
    },
    {
      link: '/sponsors',
      title: 'Sponsors',
      image: '/images/doc/sponsor.png',
    },
    {
      link: '/contactUs',
      title: 'Contact us',
      image: '/images/doc/contact.png',
    },
  ];
  return (
    <footer className="fixed-bottom text-center">
      <div className="container">
        <div className="btn-group bg-light justify-content-center" role="group" aria-label="dockIcons" id="dock">
          {
            dockerButtons.map(i => (
              <div key={i.title}>
                <Buttons link={i.link} image={i.image} title={i.title} href={i.href} />
              </div>
            ))
          }
        </div>
      </div>
    </footer>
  );
};

export default DOC;
