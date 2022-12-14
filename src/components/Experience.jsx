import React from 'react';

const jobs = [
  {
    id: 'bridgethreesixty',
    company: 'Bridge360',
    position: 'Full-Stack Developer',
    date: 'June 2022 - Present',
    description: [
      'Developed a management applicaiton using React, Redux, and Node.js.',
      'Built scalable RESTful API client using Node.js, Express Js and Mongoose.',
      'Coordinating a team of developers to ensure the project is completed on time.',
    ],
    url: 'https://www.bridge360.ph/about-us',
  },

  {
    id: 'upworkfreelance',
    company: 'Upwork',
    position: 'Frontend Developer',
    date: 'June 2021 - Present',
    description: [
      'Developed an E-Commerce web application for a client using React.',
      'Integrated application with Shopify and Printful to handle manufacturing and inventory.',
      'Implemented a payment gateway which allows checkout and processes payments.',
    ],
    url: 'https://www.upwork.com/freelancers/~0186e56e0ec0799dbb',
  },
];

const Experience = () => {
  const [value, setValue] = React.useState(0);

  const { company, position, date, description, url } = jobs[value];

  return (
    <section id="experience">
      <h2 className="numbered-heading">Where I've Worked</h2>
      <div className="flex-container">
        <div className="btn-container">
          {jobs.map((job, index) => {
            return (
              <button
                key={job.company}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && 'active-btn'}`}
                onFocus={() => {
                  setValue(index);
                }}
              >
                {job.company}
              </button>
            );
          })}
        </div>
        <div>
          <article className="job-info">
            <div style={{ display: 'flex' }}>
              <h3>{position}</h3>
              <span
                style={{
                  color: 'var(--green)',
                  marginRight: '3px',
                  cursor: 'default',
                }}
              >
                @
              </span>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-link"
              >
                {company}
              </a>
            </div>
            <p className="job-date">{date}</p>
            {description.map((desc, index) => {
              return (
                <div key={index} className="job-desc">
                  <p>{desc}</p>
                </div>
              );
            })}
          </article>
        </div>
      </div>
    </section>
  );
};

export default Experience;
