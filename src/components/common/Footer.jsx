import React from "react";

const Footer = () => {
  return (
    <footer className="main-footer padding-y-md margin-top-xl">
      <div className="container max-width-adaptive-lg">
        <div className="flex items-center text-sm">
          Made with
          <svg
            className="icon margin-x-xs"
            viewBox="-11.5 -10.23174 23 20.46348"
            aria-hidden="true"
          >
            <title>React</title>
            <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
            <g stroke="#61dafb" strokeWidth="1" fill="none">
              <ellipse rx="11" ry="4.2" />
              <ellipse rx="11" ry="4.2" transform="rotate(60)" />
              <ellipse rx="11" ry="4.2" transform="rotate(120)" />
            </g>
          </svg>
          |
          <svg
            className="icon margin-x-xs"
            viewBox="0 0 40 40"
            aria-hidden="true"
          >
            <title>CodyHouse</title>
            <g>
              <path d="M40,22V18H33.652a17.844,17.844,0,0,0-.38-2.4A16.906,16.906,0,0,0,37,5H33a12.906,12.906,0,0,1-1.565,6.177,11.462,11.462,0,0,0-4.83-4.195,6.869,6.869,0,0,0-13.21,0,11.471,11.471,0,0,0-4.831,4.195A12.917,12.917,0,0,1,7,5H3A16.906,16.906,0,0,0,6.728,15.6a17.844,17.844,0,0,0-.38,2.4H0v4H6.408a18.253,18.253,0,0,0,.466,2.209A16.923,16.923,0,0,0,3,35H7a12.914,12.914,0,0,1,1.641-6.306C11.243,33.741,15.62,38,20,38s8.757-4.259,11.359-9.306A12.914,12.914,0,0,1,33,35h4a16.923,16.923,0,0,0-3.874-10.791A18.253,18.253,0,0,0,33.592,22ZM11,17a3,3,0,1,1,3,3A3,3,0,0,1,11,17Zm9,13a4,4,0,1,1,4-4A4,4,0,0,1,20,30Zm6-10a3,3,0,1,1,3-3A3,3,0,0,1,26,20Z" />
            </g>
          </svg>
          |
          <svg
            className="icon margin-x-xs"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Unsplash</title>
            <path
              d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"
              fill="#000000"
              fillRule="nonzero"
            />
          </svg>
          by
          <a
            className="jaular margin-left-xxs"
            href="https://github.com/jaular"
            target="_blank"
            rel="noopener noreferrer"
          >
            José Aular
          </a>
        </div>
        <div className="main-footer__colophon border-top padding-top-sm margin-top-sm">
          <div className="flex items-center gap-xs">
            <a
              href="https://github.com/jaular"
              target="_blank"
              rel="noopener noreferrer"
              className="main-footer__social"
            >
              <svg className="icon block" viewBox="0 0 16 16">
                <title>Follow us on Github</title>
                <g>
                  <path d="M8,0.2c-4.4,0-8,3.6-8,8c0,3.5,2.3,6.5,5.5,7.6 C5.9,15.9,6,15.6,6,15.4c0-0.2,0-0.7,0-1.4C3.8,14.5,3.3,13,3.3,13c-0.4-0.9-0.9-1.2-0.9-1.2c-0.7-0.5,0.1-0.5,0.1-0.5 c0.8,0.1,1.2,0.8,1.2,0.8C4.4,13.4,5.6,13,6,12.8c0.1-0.5,0.3-0.9,0.5-1.1c-1.8-0.2-3.6-0.9-3.6-4c0-0.9,0.3-1.6,0.8-2.1 c-0.1-0.2-0.4-1,0.1-2.1c0,0,0.7-0.2,2.2,0.8c0.6-0.2,1.3-0.3,2-0.3c0.7,0,1.4,0.1,2,0.3c1.5-1,2.2-0.8,2.2-0.8 c0.4,1.1,0.2,1.9,0.1,2.1c0.5,0.6,0.8,1.3,0.8,2.1c0,3.1-1.9,3.7-3.7,3.9C9.7,12,10,12.5,10,13.2c0,1.1,0,1.9,0,2.2 c0,0.2,0.1,0.5,0.6,0.4c3.2-1.1,5.5-4.1,5.5-7.6C16,3.8,12.4,0.2,8,0.2z"></path>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
