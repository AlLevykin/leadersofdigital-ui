import { connect } from 'react-redux'
import ProjectCard from '../ui/ProjectCard'

const Project = connect(
    state =>
        ({
            project: state.projects.filter(project => project.isCurrent === 1)[0]
        })
)(ProjectCard)

export default Project