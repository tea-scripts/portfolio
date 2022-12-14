import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
} from '@tabler/icons';

const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <ul>
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
      <div className="footer-credits">
        <p>
          Built by <a href="https://github.com/tea-scripts">Tea Scripts</a>
        </p>
        <p>
          Inspired by{' '}
          <a href="https://github.com/bchiang7/v4">Brittany Chiang</a>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
