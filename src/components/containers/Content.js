import { connect } from 'react-redux'
import ContentView from '../ui/ContentView'

const Content = connect(
    state =>
        ({
            content: state
        })
)(ContentView)

export default Content