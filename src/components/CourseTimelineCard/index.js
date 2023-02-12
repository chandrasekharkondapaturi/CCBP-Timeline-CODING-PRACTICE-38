// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimeLineCard = props => {
  const {data} = props

  return (
    <div className="course-container">
      <div className="titleLine">
        <h1>{data.courseTitle}</h1>
        <div className="durationDiv">
          <AiFillClockCircle />
          <p className="durationP">{data.duration}</p>
        </div>
      </div>
      <p>{data.description}</p>
      <div className="tagsDiv">
        {data.tagsList.map(each => (
          <p className="tagsItem">{each.name}</p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimeLineCard
