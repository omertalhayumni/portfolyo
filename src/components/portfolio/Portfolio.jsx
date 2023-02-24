import React from "react";
import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";

const Portfolio = () => {
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList title={item.title} />
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <img src="assets/dashboard1.png" alt="" />
          <h3>Dashboard App</h3>
        </div>
        <div className="item">
          <img src="assets/dashboard1.png" alt="" />
          <h3>Dashboard App</h3>
        </div>
        <div className="item">
          <img src="assets/dashboard1.png" alt="" />
          <h3>Dashboard App</h3>
        </div>
        <div className="item">
          <img src="assets/dashboard1.png" alt="" />
          <h3>Dashboard App</h3>
        </div>
        <div className="item">
          <img src="assets/dashboard1.png" alt="" />
          <h3>Dashboard App</h3>
        </div>
        <div className="item">
          <img src="assets/dashboard1.png" alt="" />
          <h3>Dashboard App</h3>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
