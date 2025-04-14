import React from 'react';


const Experience = () => {
  return (
    <section className="experience-container">
      <h2 className="experience-content">Experience</h2>

      {/* Internship at Technorizen Software Solution */}
    <div className='main'>
    <div className="experience-card">
        <h2>Internship at Technorizen Software Solution Pvt Ltd</h2>
        <div className="experience-duration">June 2024 - November 2024</div>
        <ul>
          <li>Worked as a MERN Stack Developer Intern</li>
          <li>Developed and maintained web applications using MongoDB, Express.js, React.js, and Node.js</li>
          <li>Collaborated with the team to integrate APIs and improve website performance</li>
          <li>Worked on responsive designs ensuring smooth user experience across devices</li>
        </ul>
      </div>

      {/* Job Experience at Makerspace Technologies */}
      <div className="experience-card">
        <h2>Python Developer at Makerspace Technologies</h2>
        <div className="experience-duration">January 2025 - Present</div>
        <ul>
          <li>Developed Python-based backend systems for various applications</li>
          <li>Worked with Django and Flask for building APIs and web applications</li>
          <li>Integrated databases like PostgreSQL and MySQL for efficient data management</li>
          <li>Collaborated with frontend developers to ensure smooth integration of backend services</li>
        </ul>
      </div>
    </div>

      {/* Optional: Add more experiences if necessary */}
    </section>
  );
};

export default Experience;
