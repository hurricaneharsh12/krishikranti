import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Dragon = () => {
  const [rotation, setRotation] = useState(0);
  const dragonImages = Array.from({ length: 8 }, (_, i) => i + 1); // Adjusted to 8 images

  const farmerTestimonials = [
    {
      name: "Ravi Kumar",
      feedback: "Thanks to the new fertilizers, my yield increased by 30%!",
    },
    {
      name: "Anita Singh",
      feedback: "The irrigation system saved us so much water this season.",
    },
    {
      name: "Rajesh Verma",
      feedback: "Crop rotation helped rejuvenate my soil effectively.",
    },
    {
      name: "Meera Patel",
      feedback: "Organic farming has improved the taste of my produce.",
    },
    {
      name: "Sunil Sharma",
      feedback: "Integrated pest management saved my crops from infestations.",
    },
    {
      name: "Priya Choudhury",
      feedback:
        "Cover crops have significantly reduced soil erosion on my farm.",
    },
    {
      name: "Ajay Joshi",
      feedback: "Precision agriculture has maximized my resource use.",
    },
    {
      name: "Sneha Reddy",
      feedback:
        "Agroforestry increased biodiversity and productivity on my farm.",
    },
  ];

  const rotateLeft = () => {
    setRotation((prev) => prev + 36);
  };

  const rotateRight = () => {
    setRotation((prev) => prev - 36);
  };

  return (
    <div className="banner">
      <div
        className="slider"
        style={{
          "--quantity": 8,
          transform: `perspective(1000px) rotateY(${rotation}deg)`,
        }}
      >
        {dragonImages.map((num) => (
          <div key={num} className="item" style={{ "--position": num }}>
            <div className="content">
              <img src={`/images/img${num}.jpg`} alt={`Farmer ${num}`} />
              <h3>{farmerTestimonials[num - 1].name}</h3>
              <p>{farmerTestimonials[num - 1].feedback}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="controls">
        <button onClick={rotateLeft} className="control-btn">
          <ChevronLeft size={24} />
        </button>
        <button onClick={rotateRight} className="control-btn">
          <ChevronRight size={24} />
        </button>
      </div>
      <style jsx>{`
        .banner {
          width: 100%;
          height: 80vh;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          position: relative;
          background-color: #f0f0f0;
        }
        .slider {
          position: relative;
          width: 300px;
          height: 300px;
          transform-style: preserve-3d;
          transition: transform 0.5s ease;
        }
        .item {
          position: absolute;
          width: 100%;
          height: 100%;
          transform: rotateY(
              calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg)
            )
            translateZ(400px); /* Reduced translateZ value for less gap */
        }
        .content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100%;
          text-align: center;
          padding: 10px;
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
        }
        .content img {
          width: 100%;
          height: auto;
          max-height: 200px;
          border-radius: 10px;
        }
        .content h3 {
          margin-top: 10px;
          font-size: 14px;
          color: #333;
        }
        .content p {
          font-size: 12px;
          color: #555;
        }
        .controls {
          position: absolute;
          bottom: 20px;
          display: flex;
          gap: 40px;
        }
        .control-btn {
          background-color: rgba(255, 255, 255, 0.7);
          border: none;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .control-btn:hover {
          background-color: rgba(255, 255, 255, 0.9);
        }
      `}</style>
    </div>
  );
};

export default Dragon;
