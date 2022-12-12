import { Drawer } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context + reducer/appContext';
import resume from '../assets/resume.pdf';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useAppContext();
  const list = (anchor) => (
    <aside
      style={links}
      role="presentation"
      onClick={closeSidebar}
      onKeyDown={closeSidebar}
    >
      <li>
        <Link to="#about">About</Link>
      </li>

      <li>
        <Link to="#experience">Experience</Link>
      </li>

      <li>
        <Link to="#works">Works</Link>
      </li>

      <li>
        <Link to="#contact">Contact</Link>
      </li>

      <a
        href={resume}
        rel="noopener noreferrer"
        target="_blank"
        className="hero-button"
      >
        resume
      </a>
    </aside>
  );

  return (
    <Drawer anchor="right" open={isSidebarOpen} onClose={closeSidebar}>
      {list('left')}
    </Drawer>
  );
};

const links = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
  listStyle: 'none',
  padding: '0px',
  margin: '0px',
  height: '100%',
  textAlign: 'center',
  fontSize: 'clamp(var(--fz-sm),4vw,var(--fz-lg))',
  fontFamily: 'var(--font-mono)',
  fontWeight: 400,
  textTransform: 'capitalize',
  letterSpacing: '1px',
  transition: 'var(--transition)',
  pointerEvents: 'auto !important',
  userSelect: 'auto !important',
  backgroundColor: 'var(--navy)',
  color: 'var(--light-slate)',
  width: 'min(75vw, 400px)',

  '&:hover': {
    color: 'var(--navy)',
    backgroundColor: 'var(--green-tint)',
  },
};
export default Sidebar;
