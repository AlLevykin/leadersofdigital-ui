import React from 'react';
import Container from 'react-bootstrap/Container'
import Projects from '../containers/Projects'
import Project from '../containers/Project'
import About from '../containers/About'

const ContentView = ({content}) =>
<Container fluid={true}>
    <div className="offset-6 col-6 px-4 bg-light sidebar">
        <Project/>
    </div>
    <div className="col-6">
        <About/>
        <Projects/>
    </div>
</Container>

export default ContentView