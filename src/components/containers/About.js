import { connect } from 'react-redux'
import AboutJumbotron from '../ui/AboutJumbotron'

const About = connect(
    state =>
        ({
            about: state.about
        })
)(AboutJumbotron)

export default About