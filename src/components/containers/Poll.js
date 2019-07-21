import { connect } from 'react-redux'
import PollCard from '../ui/PollCard'

const Poll = connect(
    state =>
        ({
            project: state.projects.filter(project => project.isCurrent === 1)[0]
        })
)(PollCard)

export default Poll