import { Drawer, styled } from '@mui/material';
import { useAppContext } from '../context/appContext';
import resume from '../assets/resume.pdf';
import { IconX } from '@tabler/icons';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  background: 'var(--navy)',
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

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
        <a href="#about">About</a>
      </li>

      <li>
        <a href="#experience">Experience</a>
      </li>

      <li>
        <a href="#works">Works</a>
      </li>

      <li>
        <a href="#contact">Contact</a>
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
      <DrawerHeader>
        <IconX
          onClick={closeSidebar}
          style={{
            width: '40px',
            marginBottom: '-43.5px',
            marginRight: '13px',
            zIndex: 1,
          }}
          color="var(--green)"
        />
      </DrawerHeader>
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
