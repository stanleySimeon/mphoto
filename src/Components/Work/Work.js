import React from "react";
import { useState } from "react";
import img1 from "././../../assets/4AEF4B7D-AB3E-4860-A1C6-7BD6A9357407_1_105_c.jpeg";
import img2 from "././../../assets/F48EEC66-5258-4CAE-8CBF-FF046F5569D5_1_105_c.jpeg";
import img3 from "././../../assets/42D1FD7A-D780-4267-9F11-B6ACE87D1C36_1_105_c.jpeg";
// import img4 from "././../../assets/205D76DE-04DF-4FF0-9006-559DE96A36FB_1_105_c.jpeg";
// import img5 from "././../../assets/5145EDF7-DC48-4450-BC8B-24DD8E9B4D54_1_105_c.jpeg";
// import img6 from "././../../assets/B001F570-061D-4854-8731-5D67A785DCB9_1_105_c.jpeg";
// import img7 from "././../../assets/B9B12719-7F4E-4C10-B0FE-2BCEC7A71FDC_1_105_c.jpeg";
// import img8 from "././../../assets/61AC484F-2F2C-4729-9773-EEE6EBBA22A1_1_105_c.jpeg";
// import img9 from "././../../assets/FA7DA059-707D-42B6-9810-67D7DDD871FA_1_105_c.jpeg";
// import img10 from "././../../assets/FA7DA059-707D-42B6-9810-67D7DDD871FA_1_105_c.jpeg";
// import img11 from "././../../assets/FA7DA059-707D-42B6-9810-67D7DDD871FA_1_105_c.jpeg";
// import img12 from "././../../assets/FA7DA059-707D-42B6-9810-67D7DDD871FA_1_105_c.jpeg";
import "../Navigation/Navbar.js"
import "./Work.css";

export default function Work() {
  const [work] = useState([
    {
      id: 1,
      title: "Wedding Photography",
      description: "In this section you'll see all available work I've been done in portrait photography.",
      image: `${img1}`,
    },
    {
      id: 2,
      title: "Portrait Photography",
      description: "In this section you'll see all available work I've been done in wedding photography.",
      image: `${img2}`,
    },
    {
      id: 3,
      title: "Event Photography",
      description: "In this section you'll see all available work I've been done in event photography.",
      image: `${img3}`,
    },
  ]);
  return (
    <div id="Work">
        <div className="explore">
          <h3>Explore more</h3>
          <span className="exploreBar"></span>
        </div>
        <div className="work-container">
        {work.map((work) => (
          <div className="work-card" key={work.id}>
            <img className="img-card" src={work.image} alt={work.title} />
            <div className="work-card-text">
              <h3>{work.title}</h3>
              <p>{work.description}</p>
              <a className="previewBtn" href={work.link} target="_blank" rel="noopener noreferrer">
                <button>Show All</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}