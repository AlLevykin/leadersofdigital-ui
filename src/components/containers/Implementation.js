import { connect } from 'react-redux'
import ImplementationCard from '../ui/ImplementationCard'

const Implementation = connect(
    state =>
        ({
            project: state.projects.filter(project => project.isCurrent === 1)[0]
        })
)(ImplementationCard)

export default Implementation