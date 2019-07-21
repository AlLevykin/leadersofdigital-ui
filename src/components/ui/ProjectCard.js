import React from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Planning from '../containers/Planning'
import Implementation from '../containers/Implementation'
import Result from '../containers/Result'

const ProjectCard = ({project}) =>
<Tabs defaultActiveKey="initiation" id="project-card">
    <Tab eventKey="initiation" title="Инициирование">

    </Tab>
    <Tab eventKey="planning" title="Планирование">
        <Planning/>
    </Tab>
    <Tab eventKey="implementation" title="Исполнение">
        <Implementation/>
    </Tab>
    <Tab eventKey="result" title="Завершение">
        <Result/>
    </Tab>
</Tabs>

export default ProjectCard