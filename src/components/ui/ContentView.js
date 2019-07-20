import React from 'react';
import Container from 'react-bootstrap/Container'
import Projects from '../containers/Projects'
import Project from '../containers/Project'

const ContentView = ({content}) =>
<Container fluid={true}>
    <div className="col-md-6 col-lg-6 d-none d-md-block bg-light sidebar">
        <Project/>
    </div>
    <div className="col-md-6 col-lg-6 ml-sm-auto px-4" role="main">
        <Projects/>
    </div>
</Container>

export default ContentView