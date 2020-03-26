import React, {Component} from 'react';
import sheetMetalLofted from "../../drawings/sheetMetalLofted.PDF";
import nutBolt from '../../drawings/nutBolt.PDF';
import crankshaft from '../../drawings/crankshaft.PDF';
import designTool from '../../drawings/designTool.PDF';
import knurledScrew from '../../drawings/knurledScrew.PDF';
import manifoldPipe from '../../drawings/manifoldpipe.PDF';
import routerPlaneAssembly from '../../drawings/routerPlaneAssembly.PDF';
import spoon from '../../drawings/spoon.PDF';
import TestObject1 from '../../drawings/TestObject1.PDF';
import testPart from '../../drawings/testPart.PDF';
import exhaustManifoldTwisted from '../../drawings/exhaustManifoldTwisted.PDF';
import keyHolder from '../../drawings/keyHolder.PDF';
import ProjectDetail from "./ProjectDetail";

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: {
                id: 1,
                img: [process.env.PUBLIC_URL + '/img/keyHolder.JPG'],
                linkText: "Keyholder PDF",
                link: keyHolder,
                about: "A cover I made for car keys."
            },
            projectList: [
                {
                    id: 1,
                    img: [process.env.PUBLIC_URL + '/img/keyHolder.JPG'],
                    linkText: "Keyholder PDF",
                    link: keyHolder,
                    about: "A cover I made for car keys."
                },
                {
                    id: 2,
                    img: [process.env.PUBLIC_URL + '/img/nutNBolt.JPG'],
                    linkText: "Nut & Bolt Assembly PDF",
                    link: nutBolt,
                    about: "The basic nut and bolt, made in Solidworks."
                },
                {
                    id: 3,
                    img: [process.env.PUBLIC_URL + '/img/crank.png'],
                    linkText: "Crankshaft PDF",
                    link: crankshaft,
                    about: "This is a crankshaft I made in Solidworks. Really cool part to make!"
                },
                {
                    id: 4,
                    img: [process.env.PUBLIC_URL + '/img/manifoldPipe.JPG'],
                    linkText: "Exhaust Manifold PDF",
                    link: manifoldPipe,
                    about: "This is an exhaust manifold I made in Solidworks. The gold finish is just to make it look extra fancy."
                },
                {
                    id: 5,
                    img: [process.env.PUBLIC_URL + '/img/testObject.JPG'],
                    linkText: "Test Object PDF",
                    link: TestObject1,
                    about: "This is another shape from the Solidworks certification test prep."
                },
                {
                    id: 6,
                    img: [process.env.PUBLIC_URL + '/img/goldScrew.png'],
                    linkText: "Knurled Screw PDF",
                    link: knurledScrew,
                    about: "This is a screw with a knurled cap."
                },
                {
                    id: 7,
                    img: [process.env.PUBLIC_URL + '/img/woodenSpoon.png'],
                    linkText: "Spoon PDF",
                    link: spoon,
                    about: "Just a spoon I made for fun."
                },
                {
                    id: 8,
                    img: [process.env.PUBLIC_URL + '/img/designToolsPart.png'],
                    linkText: "Sheet Metal Design PDF",
                    link: designTool,
                    about: "Making this piece involved the use of the Lofting tool in Solidworks."
                },
                {
                    id: 9,
                    img: [process.env.PUBLIC_URL + '/img/RP1.JPG'],
                    linkText: "Router Plane Assembly PDF",
                    link: routerPlaneAssembly,
                    about: "This is a router plane, often used in woodworking."
                },
                {
                    id: 10,
                    img: [process.env.PUBLIC_URL + '/img/sheetmetalLofted.png'],
                    linkText: "Sheet Metal 2 PDF",
                    link: sheetMetalLofted,
                    about: "Another piece of metal, bent by the Lofting tool."
                },
                {
                    id: 11,
                    img: [process.env.PUBLIC_URL + '/img/testImage1.JPG'],
                    linkText: "Test Image PDF",
                    link: testPart,
                    about: "This is a part from the Solidworks certification test prep."
                },
                {
                    id: 12,
                    img: [process.env.PUBLIC_URL + '/img/twistedExhaust.png'],
                    linkText: "Twisted Exhaust Manifold",
                    link: exhaustManifoldTwisted,
                    about: "Another exhaust manifold, with a twist."
                }
            ]
        }
    }

    imgClick(project) {
        this.setState({project: project})
    }

    render() {
        return (
            <div className="scrolling">
                <ul className="scrolling-container">
                    {this.state.projectList.map((project, index) =>
                        <li key={index} className="scrolling-item">
                            <div className="link-scroll">
                                <img src={project.img} alt="object" className="scrolling-img"
                                     onClick={() => this.imgClick(project)}/>
                            </div>
                        </li>
                    )}
                </ul>
                <ProjectDetail project={this.state.project}/>
            </div>

        )
    }
}


export default Projects;
