import { connect } from 'react-redux'
import MainMenu from '../ui/MainMenu'
import C from '../../store/constants'

const Menu = connect(
    null,
    dispatch =>
        ({
            onCreateProject() {
                dispatch({type: C.CREATE_PROJECT})
            }
        })
)(MainMenu)

export default Menu