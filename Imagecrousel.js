import React, { useState } from "react";
function Images() {
  const arrImg = [
    "https://img.freepik.com/premium-photo/heart-made-out-pebbles-beach-generative-ai_902846-311.jpg",
    "https://img.freepik.com/premium-photo/heart-made-out-rocks-beach-generative-ai_733139-7822.jpg",
    "https://img.freepik.com/premium-photo/there-is-heart-made-out-sand-beach-generative-ai_791316-10592.jpg?w=360",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwg7G9mEqcJ8F7gDLLTmsVvikz-DG3fT2wOw&s"
  ];
  const imageElements = arrImg.map((imageUrl, index) => (
    <img
      key={index}
      src={imageUrl}
      alt={`Image ${index}`}
      style={{ width: "300px", margin: "10px" }}
    />
  ));
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === 0 ? arrImg.length - 1 : currentIndex - 1
    );
  };
  const goToNext = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === arrImg.length - 1 ? 0 : currentIndex + 1
    );
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "#87cefa" }}>Image Carousel</h1>
      <img
        src={arrImg[currentIndex]}
        alt={`Image ${currentIndex}`}
        style={{ width: "300px", margin: "10px" }}
      />
      <div>
        <button style={{ marginRight: "180px" }} onClick={goToPrevious}>
          Previous
        </button>
        <button onClick={goToNext}>Next</button>
      </div>
    </div>
  );
}
export default Images;
