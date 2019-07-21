import { connect } from 'react-redux'
import ProjectList from '../ui/ProjectList'
import C from '../../store/constants'

const Projects = connect(
    state =>
        ({
            projects: state.projects
        }),
        dispatch =>
        ({
            onClick(id) {
                dispatch({type: C.SET_CURRENT_PROJECT, id: id})
            }
        })
)(ProjectList)

export default Projects