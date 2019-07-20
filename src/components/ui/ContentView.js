import React from 'react';
import Container from 'react-bootstrap/Container'
import Projects from '../containers/Projects'
import Project from '../containers/Project'

const ContentView = ({content}) =>
<Container fluid={true}>
    <div className="offset-6 col-6 px-4 bg-light sidebar">
        <Project/>
    </div>
    <div className="col-6" role="main">
        <Projects/>
    </div>
</Container>

export default ContentView