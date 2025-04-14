import React from 'react'

const ProjectsCard = ({details}) => {
  return (
    <div className='project-card'>
      <h4>{details.title}</h4>
      <div className="project-duration">{details.date}</div>
<h2 className='project-techno'>{details.useTechnologies}</h2>

<ul>
    {details.responsibilities.map((item)=>(
  <li key={item}>{item}</li>
    ))}
  
</ul>
    </div>
  )
}

export default ProjectsCard
