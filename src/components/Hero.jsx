import {
  Box,
  Button,
  Divider,
  Grow,
  Slide,
  Stack,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
} from '@tabler/icons';

const Hero = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowText(true);
    }, 1000);
  }, []);

  return (
    <section className="hero">
      <Slide
        in={showText}
        style={{ transformOrigin: '0 0 0' }}
        {...(showText ? { timeout: 500 } : {})}
        direction="left"
      >
        <Typography variant="h1" style={styles.smallHeading}>
          Hi, my name is
        </Typography>
      </Slide>
      <Slide
        in={showText}
        style={{ transformOrigin: '0 0 0' }}
        {...(showText ? { timeout: 550 } : {})}
        direction="left"
      >
        <h2 className="big-heading">Oluwatimilehin Akinnubi.</h2>
      </Slide>
      <Slide
        in={showText}
        style={{ transformOrigin: '0 0 0' }}
        {...(showText ? { timeout: 600 } : {})}
        direction="left"
      >
        <h3 className="big-heading big-heading-alt">I create web products.</h3>
      </Slide>
      <Grow
        in={showText}
        style={{ transformOrigin: '0 0 0' }}
        {...(showText ? { timeout: 650 } : {})}
      >
        <p className="hero-description">
          I’m a fullstack web developer specializing in building (and
          occasionally designing) exceptional digital experiences using MERN
          Stack. Currently, I’m focused on building accessible, human-centered
          products at <span style={styles.company}>Bridge360</span> .
        </p>
      </Grow>
      <Slide
        in={showText}
        style={{ transformOrigin: '0 0 0' }}
        {...(showText ? { timeout: 670 } : {})}
        direction="up"
      >
        <Box>
          <a href="#contact" className="hero-button">
            <span style={{ marginBottom: '-.15rem' }}>Hire Me</span>
            <BusinessCenterIcon />
          </a>
        </Box>
      </Slide>
    </section>
  );
};

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    justiItems: 'center',
    alignItems: 'flex-start',
    minHeight: '100vh',
    width: '100%',
    padding: '0px',
    textAlign: 'center',
    maxWidth: '1000px',
  },

  smallHeading: {
    fontSize: 'clamp(var(--fz-sm),5vw,var(--fz-md))',
    margin: '0px 0px 30px 4px',
    color: 'var(--green)',
    fontFamily: 'var(--font-mono)',
    fontWeight: 400,
  },

  company: {
    color: 'var(--green)',
    fontFamily: 'var(--font-mono)',
  },
};

export default Hero;
