import { connect } from 'react-redux'
import ResultCard from '../ui/ResultCard'

const Result = connect(
    state =>
        ({
            project: state.projects.filter(project => project.isCurrent === 1)[0]
        })
)(ResultCard)

export default Result