// Thumbnail.js
import React from "react";
import "./style.css";

interface ThumbnailItem {
  img: string;
  title: string;
  description: string;
}

interface ThumbnailProps {
  items: ThumbnailItem[];
  currentIndex: number;
}

const Thumbnail: React.FC<ThumbnailProps> = ({ items, currentIndex }) => {
  return (
    <div className="thumbnail">
      {items.map((item, index) => (
        <div className={`item ${index === currentIndex ? 'active' : ''}`} key={index}>
          <img src={item.img} alt={item.title} />
          <div className="content">
            <div className="title">{item.title}</div>
            <div className="description">{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Thumbnail;
