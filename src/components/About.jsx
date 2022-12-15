import timi from '../assets/timi.png';

const About = () => {
  return (
    <section id="about">
      <h2 className="numbered-heading">About Me</h2>
      <div className="grid-container">
        <div className="grid-item-one">
          <p>
            Hello! My name is Oluwatimilehin, and I love creating stuff that
            others can access online. In the year 2020, I made the decision to
            use Chrome's developers console to learn how a web page is built,
            which piqued my interest in web development. Additionally, it
            increased my interest in online applications!
          </p>

          <p>
            In the present, I've had the honor of working as a freelancer for a
            start-up on Upwork. Building inclusive, accessible products and
            digital experiences for a range of clients at Bridge360 is my major
            emphasis right now.
          </p>

          <p>Here are a few technologies I'm currently working with:</p>

          <ul className="skills-list">
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Redux</li>
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>Git & GitHub</li>
          </ul>
        </div>

        <div className="image-container">
          <div className="wrapper">
            <img src={timi} alt="Timi" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
