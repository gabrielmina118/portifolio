  import React, { useMemo, useState } from "react";
  import { Container, Row, Col } from "react-bootstrap";
  import Particle from "../Particle";
  import beanLeaf from "../../Assets/Projects/netflix.png"
  import airbnb from "../../Assets/Projects/airbnb.jpg"
  import PortfolioItem from './PortfolioItem'

  const portfoliolist = [
      {
          id: 1,
          imgPath: beanLeaf,
          isBlog: false,
          title: "Clone do netflix",
          description:
              "Um clone da aplicação Netflix versão web utilizando React , NextJS , Tailwind CSS , Prisma , MongoDB , NextAuth e Vercel",
          ghLink: "https://github.com/gabrielmina118/netflixClone",
          demoLink: "https://netflix-clone-taupe-nine.vercel.app/auth",
          category: "web development",
      },
      {
          id: 2,
          imgPath: airbnb,
          isBlog: false,
          title: "Clone do airbnb",
          description:
              "Um clone da aplicação Airbnb versão web utilizando React , NextJS , Tailwind CSS , Prisma , MongoDB , NextAuth e Vercel",
          ghLink: "https://github.com/gabrielmina118/airbnb-clone",
          demoLink: "https://netflix-clone-taupe-nine.vercel.app/auth",
          category: "web development",
      },
  ];
  const categorylist = [
    { id: 1, category: "all", value: "all" },
    { id: 2, category: "web development", value: "all" }, 
  ];

  function Projects() {
    const [filter, setFilter] = useState('all');
    
    const filteredPortfolio = useMemo(() => {
      if (filter === 'all') return portfoliolist;

      return portfoliolist.filter((portfolio) => portfolio.category === filter);
    }, [filter])
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    Meus projetos <strong className="purple">recentes</strong>
                </h1>
                <p style={{ color: "white" }}>
                    Aqui estão alguns projetos em que trabalhei recentemente.
                </p>
                <ul className="portfolio-nav">
                    {categorylist.map((types) => (
                        <li>
                            <a onClick={() => setFilter(types.category)}>
                                {types.category}
                            </a>
                        </li>
                    ))}
                </ul>
                <Row
                    style={{ justifyContent: "center", paddingBottom: "10px" }}
                >
                    {filteredPortfolio.map((item) => (
                        <Col md={4} className="project-card" key={item.id}>
                            <PortfolioItem item={item} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </Container>
    );
  }

  export default Projects;
