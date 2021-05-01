import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function CarouselProject(props) {
  const { projectImages } = props;
  
  return (
    <div className="column">
      <Carousel className="my-carousel">
        {projectImages.map((imagePath, index) => {
            let deviceType = imagePath.toLowerCase().includes('desk') ? 'desktop' : 'mobile'
            
          return (
            <Carousel.Item key={index} className={deviceType}>
              <img src={imagePath} className="slide" alt="projectImage" />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
