import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiPhp,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiTensorflow,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiKeras,
  SiGooglecolab,
  SiPytorch,
  SiJupyter,
  SiPrisma,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  
  return (
    <>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <b className="purple">Web Development</b>
      <Col xs={4} md={1} className="tech-icons">
        <DiJavascript1 />
        <p className="tech-names">Javascript</p>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiNodejs />
        <p className="tech-names">Node.js</p>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiReact />
        <p className="tech-names">React</p>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiNextdotjs />
        <p className="tech-names">Next.js</p>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiTailwindcss />
        <p className="tech-names">Tailwind Css</p>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiHtml5 />
        <p className="tech-names">HTML</p>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiCss3 />
        <p className="tech-names">CSS</p>
      </Col>      
      <Col xs={4} md={1} className="tech-icons">
        <DiMongodb />
        <p className="tech-names">MongoDB</p>
      </Col>      
      <Col xs={4} md={1} className="tech-icons">
        <SiMysql />
        <p className="tech-names">MySQL</p>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiPrisma />
        <p className="tech-names">Prisma</p>
      </Col>
    </Row>
    </>
  );
}

export default Techstack;
