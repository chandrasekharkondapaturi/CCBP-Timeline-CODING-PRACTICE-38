// Write your code here
import {Chrono} from 'react-chrono'

import CourseTimeLineCard from '../CourseTimelineCard'
import ProjectTimeLineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  return (
    <div className="mainBg">
      <h1>MY JOURNEY OF CCBP 4.0</h1>
      <div className="chronoDiv">
        <Chrono
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
          theme={{
            secondary: 'white',
          }}
        >
          {timelineItemsList.map(each => {
            if (each.categoryId === 'COURSE') {
              return <CourseTimeLineCard data={each} />
            }
            return <ProjectTimeLineCard data={each} />
          })}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
