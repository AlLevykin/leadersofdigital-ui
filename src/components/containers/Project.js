import { connect } from 'react-redux'
import ProjectCard from '../ui/ProjectCard'

const Project = connect(
    state =>
        ({
            project: state.project
        })
)(ProjectCard)

export default Project