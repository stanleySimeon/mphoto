import React from "react";
import { useState } from "react";
import "../Navigation/Navbar.js"
import "./Work.css";

export default function Work() {
  const [work] = useState([
    {
      id: 1,
      title: "Portrait Photography",
      description: "In this section you'll see all available work I've been done in portrait photography. I've been done a lot of portraits for friends and family, and I've been also done some of my own.",
      image: "https://static.showit.co/1200/lKXdm4sAQxKH84zzCF4v2g/55058/karissavantassel-10_karissa_van_tassel.jpg",
    },  
    {
      id: 2,
      title: "Wedding Photography",
      description: "In this section you'll see all available work I've been done in wedding photography. I've been done a lot of weddings for friends and family, and I've been also done some of my own.",
      image: "https://www.avenuecalgary.com/wp-content/uploads/2021/12/WeddingsCover-1400x935.jpg",
    },
    {
      id: 3,
      title: "Commercial Photography",
      description: "In this section you'll see all available work I've been done in commercial photography. I've been done a lot of commercials for friends and family, and I've been also done some of my own.",
      image: "https://sharaka.ma/wp-content/uploads/2020/12/commercial-sans-diplome-Comment-devenir-agent-commercial-2-1.jpg",
    },
    {
      id: 4,
      title: "Nature Photography",
      description: "In this section you'll see all available work I've been done in nature photography. I've been done a lot of nature for friends and family, and I've been also done some of my own.",
      image: "https://s.yimg.com/ny/api/res/1.2/RXO6qkHjTyAy9Vf_C2BSzw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTMzMw--/https://s.yimg.com/uu/api/res/1.2/iSFrg5eBs65Bzp1wFq3Odg--~B/aD0zMzM7dz02NDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/fr/futura_43/fcee1ac43f9b71d3c7dd702fc58194c2",
    },
    {
      id: 5,
      title: "Street Photography",
      description: "In this section you'll see all available work I've been done in street photography. I've been done a lot of street for friends and family, and I've been also done some of my own.",
      image: "https://stylecaster.com/wp-content/uploads/2022/02/london-street-style.jpg",
    },
    {
      id: 6,
      title: "Architecture Photography",
      description: "In this section you'll see all available work I've been done in architecture photography. I've been done a lot of architecture for friends and family, and I've been also done some of my own.",
      image: "https://images.squarespace-cdn.com/content/v1/5adb89f2aa49a19e7960b934/1564247875139-VKAASULJS0FNYPI9QJLS/mike-kelley-architecture-photography-1.jpg",
    },
    {
      id: 7,
      title: "Nature Photography",
      description: "In this section you'll see all available work I've been done in nature photography. I've been done a lot of nature for friends and family, and I've been also done some of my own.",
      image: "https://www.avenuecalgary.com/wp-content/uploads/2021/12/WeddingsCover-1400x935.jpg",
    },
    {
      id: 8,
      title: "Street Photography",
      description: "In this section you'll see all available work I've been done in street photography. I've been done a lot of street for friends and family, and I've been also done some of my own.",
      image: "https://stylecaster.com/wp-content/uploads/2022/02/london-street-style.jpg",
    },
    {
      id: 9,
      title: "Architecture Photography",
      description: "In this section you'll see all available work I've been done in architecture photography. I've been done a lot of architecture for friends and family, and I've been also done some of my own.",
      image: "https://images.squarespace-cdn.com/content/v1/5adb89f2aa49a19e7960b934/1564247875139-VKAASULJS0FNYPI9QJLS/mike-kelley-architecture-photography-1.jpg",
    },
    {
      id: 10,
      title: "Nature Photography",
      description: "In this section you'll see all available work I've been done in nature photography. I've been done a lot of nature for friends and family, and I've been also done some of my own.",
      image: "https://www.avenuecalgary.com/wp-content/uploads/2021/12/WeddingsCover-1400x935.jpg",
    },
    {
      id: 11,
      title: "Street Photography",
      description: "In this section you'll see all available work I've been done in street photography. I've been done a lot of street for friends and family, and I've been also done some of my own.",
      image: "https://stylecaster.com/wp-content/uploads/2022/02/london-street-style.jpg",
    },
    {
      id: 12,
      title: "Architecture Photography",
      description: "In this section you'll see all available work I've been done in architecture photography. I've been done a lot of architecture for friends and family, and I've been also done some of my own.",
      image: "https://images.squarespace-cdn.com/content/v1/5adb89f2aa49a19e7960b934/1564247875139-VKAASULJS0FNYPI9QJLS/mike-kelley-architecture-photography-1.jpg",
    },
  ]);
  return (
    <div id="Work">
      <div className="work-container">
        {work.map((work) => (
          <div className="work-card" key={work.id}>
              <img className="img-card" src={work.image} alt={work.title} />
            <div className="work-card-text">
              <h3>{work.title}</h3>
              <p>{work.description}</p>
              <a href={work.link} target="_blank" rel="noopener noreferrer">
                <button>View</button>
              </a>
                <button>Comment</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}