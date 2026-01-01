import React, { useState } from "react";

export default function Image({
  src,
  alt = "image",
  size = "md",
  shape = "square",
  fallback = "https://via.placeholder.com/150",
  className = "",
}) {
  const [imgSrc, setImgSrc] = useState(src || fallback);

  const sizeClasses = {
    xs: "w-8 h-8",
    sm: "w-12 h-12",
    md: "w-20 h-20",
    lg: "w-32 h-32",
    xl: "w-48 h-48",
    full: "w-full h-full",
  };

  const shapeClasses = {
    square: "rounded-none",
    rounded: "rounded-lg",
    circle: "rounded-full",
  };

  return (
    <div
      className={`overflow-hidden bg-gray-100 ${
        sizeClasses[size]
      } ${shapeClasses[shape]} ${className}`}
    >
      <img
        src={imgSrc}
        alt={alt}
        className="w-full h-full object-cover"
        onError={() => setImgSrc(fallback)}
      />
    </div>
  );
}
