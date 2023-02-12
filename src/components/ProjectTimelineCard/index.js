// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimeLineCard = props => {
  const {data} = props
  return (
    <div className="courseDiv">
      <img src={data.imageUrl} alt="project" className="projectImg" />
      <div className="titleLine">
        <h1>{data.projectTitle}</h1>
        <div className="durationDiv">
          <AiFillCalendar />
          <p>{data.duration}</p>
        </div>
      </div>
      <p className="durationP">{data.description}</p>
      <div>
        <a href={data.projectUrl}>Visit</a>
      </div>
    </div>
  )
}

export default ProjectTimeLineCard
