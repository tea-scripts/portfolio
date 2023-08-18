import { Box, Grow, Slide, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

const Hero = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowText(true);
    }, 1000);
  }, []);

  return (
    <section className="hero p-100">
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
        <h3 className="big-heading big-heading-alt">
          I create web applications.
        </h3>
      </Slide>
      <Grow
        in={showText}
        style={{ transformOrigin: '0 0 0' }}
        {...(showText ? { timeout: 650 } : {})}
      >
        <p className="hero-description" style={{ margin: '20px 0px 0px' }}>
          I'm a full-stack web developer with a focus on leveraging the MERN
          Stack to create great digital experiences. I am now concentrating on
          developing usable, human-centered solutions at{' '}
          <span style={styles.company}>Bridge360</span>.
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
