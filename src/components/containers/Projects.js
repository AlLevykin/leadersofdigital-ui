import { connect } from 'react-redux'
import ProjectList from '../ui/ProjectList'

const Projects = connect(
    state =>
        ({
            projects: state.projects
        })
)(ProjectList)

export default Projects