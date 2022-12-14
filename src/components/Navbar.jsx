import { Slide } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/logo.svg';
import { useAppContext } from '../context/appContext';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import resume from '../assets/resume.pdf';

const Navbar = () => {
  const { openSidebar } = useAppContext();
  const [showText, setShowText] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('none');
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setShowText(true);
    }, 1000);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = currentScrollPos > prevScrollPos;

      setScrollDirection(visible ? 'down' : 'up');
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <header
      className={`header ${
        scrollDirection === 'down' ? 'header-scrollY' : 'header-scrollX'
      }`}
    >
      <nav className="nav">
        <Link reloadDocument>
          <img src={logo} style={styles.logo} alt="logo" />
        </Link>

        <Slide
          in={showText}
          style={{ transformOrigin: '0 0 0' }}
          {...(showText ? { timeout: 500 } : {})}
          direction="down"
        >
          <ol className="links">
            <li>
              <a href="/#about">About</a>
            </li>
            <li>
              <a href="/#experience">Experience</a>
            </li>
            <li>
              <a href="/#works">Works</a>
            </li>
            <li>
              <a href="/#contact">contact</a>
            </li>

            <a
              href={resume}
              style={{ margin: 0 }}
              className="hero-button"
              rel="noopener noreferrer"
              target="_blank"
            >
              resume
            </a>
          </ol>
        </Slide>

        <button
          style={{
            background: 'transparent',
            border: 'none',
          }}
          onClick={() => openSidebar()}
          className="hamburger"
        >
          <MenuIcon style={styles.hamburger} />
        </button>
      </nav>
    </header>
  );
};

const styles = {
  logo: {
    display: 'block',
    width: '50px',
    height: '50px',
  },

  hamburger: {
    color: 'var(--green)',
    fontSize: '2.5rem',
    cursor: 'pointer',

    '&:hover': {
      color: 'var(--green-tint)',
      transform: 'scale(1.1)',
    },

    '@media (minWidth: 768px)': {
      display: 'none',
    },
  },
};

export default Navbar;
