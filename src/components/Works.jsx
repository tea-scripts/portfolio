import { IconBrandGithub, IconExternalLink } from '@tabler/icons';
import lux from '../assets/luxwoodwork.png';
import githubsearch from '../assets/githubusersearch.png';

const Works = () => {
  return (
    <section id="works">
      <h2 className="numbered-heading">What I've Built</h2>
      <ul className="featured-works">
        <li className="featured-work">
          <div className="work-content">
            <div>
              <p className="project-overline">Featured Project</p>
              <h3 className="project-title">E-Commerce Website</h3>
              <div className="project-desc">
                <p>
                  Developed a fullstack E-Commerce application with Stripe
                  integrated as a payment processor all in a test environment.
                </p>
              </div>
              <ul className="tech-list">
                <li>React</li>
                <li>Mantine</li>
                <li>Node</li>
                <li>Express</li>
                <li>MongoDB</li>
              </ul>
              <div className="project-links">
                <a
                  href="https://github.com/tea-scripts/lux-woodwork"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <IconBrandGithub />
                </a>
                <a
                  href="https://lux-woodwork.onrender.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <IconExternalLink />
                </a>
              </div>
            </div>
          </div>
          <div className="work-image">
            <a
              href="https://lux-woodwork.onrender.com/"
              rel="noopener noreferrer"
              target="_blank"
              style={{ zIndex: 2 }}
            >
              <div className="img">
                <div style={{ maxWidth: '700px', display: 'block' }}>
                  <img src={lux} alt="lux woodwork" />
                </div>
              </div>
            </a>
          </div>
        </li>

        {/* 02 */}

        <li className="featured-work">
          <div className="work-content">
            <div>
              <p className="project-overline">Featured Project</p>
              <h3 className="project-title">GitHub User Search</h3>
              <div className="project-desc">
                <p>
                  Built a github user search application which lets users search
                  and view information on whomever they want including
                  themselves
                </p>
              </div>
              <ul className="tech-list">
                <li>React</li>
                <li>Styled-Components</li>
                <li>Fusion Charts</li>
              </ul>
              <div className="project-links">
                <a
                  href="https://github.com/tea-scripts/github-user-search"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <IconBrandGithub />
                </a>
                <a
                  href="https://reactjs-search-github-user.netlify.app"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <IconExternalLink />
                </a>
              </div>
            </div>
          </div>
          <div className="work-image">
            <a
              href="https://reactjs-search-github-user.netlify.app"
              rel="noopener noreferrer"
              target="_blank"
              style={{ zIndex: 2 }}
            >
              <div className="img">
                <div style={{ maxWidth: '700px', display: 'block' }}>
                  <img src={githubsearch} alt="github user search" />
                </div>
              </div>
            </a>
          </div>
        </li>
      </ul>
    </section>
  );
};
export default Works;
