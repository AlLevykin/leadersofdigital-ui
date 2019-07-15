import { connect } from 'react-redux'
import AboutJumbotron from './ui/AboutJumbotron'

export const About = connect(
    state =>
        ({
            about: state.about
        })
)(AboutJumbotron)