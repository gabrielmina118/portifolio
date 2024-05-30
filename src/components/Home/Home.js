import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaTiktok, FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import homeLogo from "../../Assets/home-main.svg";
import Type from "./Type";
import Github from "../About/Github";
import Toolstack from "../About/Toolstack";
import Techstack from "../About/Techstack";

import myImg from "../../Assets/gabriel.jpeg";

import Projects from "../Projects/Projects";

import codingPerson from '../../Assets/lottie/codingPerson.json'
import DisplayLottie from "../DisplayLottie/DisplayLottie";



function Home() {
  const illustration = {
    animated: true // Set to false to use static SVG
  };
  
  return (
      <>
          {/* Home Section */}
          <section id="home">
              <Container
                  fluid
                  className="home-section home-about-section"
                  id="home"
              >
                  <Container className="home-content">
                      <Row>
                          <Col md={7} className="home-header">
                              {/* Home Header Content */}
                              <h1
                                  style={{ paddingBottom: 15 }}
                                  className="heading"
                              >
                                  Olá!{" "}
                                  <span
                                      className="wave"
                                      role="img"
                                      aria-labelledby="wave"
                                  >
                                      👋🏻
                                  </span>
                              </h1>

                              <h1 className="heading-name">
                                  Eu sou
                                  <strong className="main-name">
                                      Gabriel Mina{" "}
                                  </strong>
                              </h1>
                              <h6 className="quote">
                                  compile(); optimize(); compute(); repeat();
                              </h6>
                              <div style={{ padding: 50, textAlign: "left" }}>
                                  <Type />
                              </div>
                          </Col>

                          <Col md={5} style={{ paddingBottom: 20 }}>
                              {/* Home Image */}
                              {illustration.animated ? (
                                  <DisplayLottie animationData={codingPerson} />
                              ) : (
                                  <img
                                      alt="Man Working"
                                      src={require("../../Assets/gabriel.jpeg")}
                                  ></img>
                              )}
                          </Col>
                      </Row>
                  </Container>
              </Container>
          </section>
          <section id="home">
              <Container fluid className="home-about-section" id="about">
                  <Container>
                      <Row>
                          <Col md={8} className="home-about-description">
                              <h1 style={{ fontSize: "2.6em" }}>
                                  Sobre <span className="purple">Mim</span>
                              </h1>
                              <p className="home-about-body">
                                  Sou graduado em{" "}
                                  <b className="purple">
                                      Ciência da computação
                                  </b>{" "}
                                  e acumulo dois anos de experiência como
                                  desenvolvedor.Iniciei trabalhando com React e
                                  Node.
                                  <br />
                                  <br />
                                  Ao longo desses anos, contribuí para o
                                  desenvolvimento de aplicações web, aplicando
                                  boas práticas de desenvolvimento e{" "}
                                  <b className="purple">
                                      liderando projetos técnicos.{" "}
                                  </b>
                                  <br />
                                  <br />
                                  Destaco minha capacidade de resolver problemas
                                  complexos, trabalhar em equipe e me adaptar
                                  rapidamente a novas tecnologias. <br />
                                  <br />
                                  Além da codificação, algumas outras atividades
                                  que Eu adoro fazer!
                                  <br />
                                  <ul>
                                      <li>🎮 Jogar</li>
                                      <li>📺 Ver séries e filmes</li>
                                  </ul>
                              </p>
                          </Col>
                          <Col md={3} className="myAvtar">
                              <Tilt>
                                  <img
                                      src={myImg}
                                      className="img-fluid"
                                      alt="avatar"
                                  />
                              </Tilt>
                          </Col>
                      </Row>
                  </Container>
              </Container>
          </section>
          <section id="skills">
              <Container fluid className="about-section">
                  <Container>
                      <h1 className="project-heading">
                          Habilidades{" "}
                          <strong className="purple">Profissionais</strong>
                      </h1>
                      <br />
                      <Techstack />

                      <h1 className="project-heading">
                          <strong className="purple">Ferramentas</strong> que
                          utilizo
                      </h1>
                      <Toolstack />

                      <Github />
                  </Container>
              </Container>
          </section>

          <section id="projects">
              <Projects />
          </section>
          <section id="contact">
              <Container fluid className="home-about-section" id="about">
                  <Container>
                      <Row>
                          <Col md={12} className="home-about-social">
                              <p>
                                  Sinta-se a vontade para{" "}
                                  <span className="purple">conectar</span>
                              </p>
                              <ul className="home-about-social-links">
                                  <li className="social-icons">
                                      <a
                                          href="https://github.com/gabrielmina118"
                                          target="_blank"
                                          rel="noreferrer"
                                          className="icon-colour  home-social-icons"
                                      >
                                          <AiFillGithub />
                                      </a>
                                  </li>
                                  <li className="social-icons">
                                      <a
                                          href="https://www.linkedin.com/in/gabrielmina/"
                                          target="_blank"
                                          rel="noreferrer"
                                          className="icon-colour  home-social-icons"
                                      >
                                          <FaLinkedinIn />
                                      </a>
                                  </li>
                                  <li className="social-icons">
                                      <a
                                          href="mailto:gabrielmina118@gmail.com"
                                          target="_blank"
                                          rel="noreferrer"
                                          className="icon-colour home-social-icons"
                                      >
                                          <MdEmail />
                                      </a>
                                  </li>
                              </ul>
                          </Col>
                      </Row>
                  </Container>
              </Container>
          </section>
      </>
  );
}

export default Home;
