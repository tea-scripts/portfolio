import { Grow } from '@mui/material';
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
} from '@tabler/icons';
import { useEffect, useState } from 'react';
import { About, Contact, Experience, Hero, Works } from '../components';
import Footer from '../components/Footer';

const Landing = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowText(true);
    }, 1000);
  }, []);

  return (
    <div>
      <Grow
        in={showText}
        style={{ transformOrigin: '0 0 0' }}
        {...(showText ? { timeout: 650 } : {})}
      >
        <div>
          <div className="social-links-container">
            <ul className="social-links">
              <li>
                <a
                  href="https://github.com/tea-scripts"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconBrandGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/tea__scripts/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconBrandInstagram />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/tea__scripts"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconBrandTwitter />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/oluwatimilehin-akinnubi-847945205/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconBrandLinkedin />
                </a>
              </li>
            </ul>
          </div>

          <div className="email-link-container">
            <div className="email-link">
              <a href="mailto:timmieprince@gmail.com">timmieprince@gmail.com</a>
            </div>
          </div>
        </div>
      </Grow>
      <main className="fillHeight">
        <Hero />
        <About />
        <Experience />
        <Works />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
