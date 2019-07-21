import { connect } from 'react-redux'
import PlanningCard from '../ui/PlanningCard'

const Planning = connect(
    state =>
        ({
            project: state.projects.filter(project => project.isCurrent === 1)[0]
        })
)(PlanningCard)

export default Planning