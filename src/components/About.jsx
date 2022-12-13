import timi from '../assets/timi.png';

const About = () => {
  return (
    <section id="about">
      <h2 className="numbered-heading">About Me</h2>
      <div className="grid-container">
        <div className="grid-item-one">
          <p>
            Hello! My name is Oluwatimilehin and I enjoy creating things that
            live on the internet. My interest in web development started back in
            2020 when I decided to see how a web page is built by looking at the
            developers console and that taught me a lot about HTML & CSS!
          </p>

          <p>
            Fast-forward to today, and I’ve had the privilege of working as a
            freelancer for a start-up on <span>Upwork</span>. My main focus
            these days is building accessible, inclusive products and digital
            experiences at <span>Bridge360</span> for a variety of clients.
          </p>

          <p>Here are a few technologies I'm currently working with:</p>

          <ul className="skills-list">
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Redux</li>
            <li>Node.js</li>
          </ul>
        </div>

        <div className="image-container">
          <div className="wrapper">
            <picture>
              <source type="image/avif" srcSet={timi}></source>
              <source type="image/webp" srcSet={timi}></source>
              <img src={timi} alt="Timi" />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
