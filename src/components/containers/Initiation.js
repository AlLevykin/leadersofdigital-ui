import { connect } from 'react-redux'
import ProjectInit from '../ui/ProjectInit'

const Initiation = connect(
    state =>
        ({
            project: state.projects.filter(project => project.isCurrent === 1)[0]
        })
)(ProjectInit)

export default Initiation