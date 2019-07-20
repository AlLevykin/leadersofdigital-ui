import { connect } from 'react-redux'
import ProjectCard from '../ui/ProjectCard'

const Project = connect(
    state =>
        ({
            project: state.projects[0]
        })
)(ProjectCard)

export default Project