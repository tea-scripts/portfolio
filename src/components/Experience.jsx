import React from 'react';

const jobs = [
  {
    id: 'bridgethreesixty',
    company: 'Bridge360',
    position: 'Junior Software Developer',
    date: 'January 2023 - Present',
    description: [
      'Developed and maintained web applications using the MERN stack (MongoDB, Express, React, and Node.js).',
      'Contributed to the development of a cloud-based platform, including the creation of RESTful APIs and the integration of third-party services.',
      'Provide assistance in the troubleshooting and debugging of issues in the development and production environments.',
      'Participated in code reviews and provided constructive feedback to improve code quality and team efficiency.',
    ],
    url: 'https://www.bridge360.ph/about-us',
  },

  {
    id: 'upworkfreelance',
    company: 'Upwork',
    position: 'Frontend Developer',
    date: 'November 2021',
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
            <p className="job-date" style={{ marginBottom: '20px' }}>
              {date}
            </p>
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
