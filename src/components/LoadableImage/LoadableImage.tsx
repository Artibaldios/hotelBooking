import React from "react";
import { AsyncImage } from "loadable-image";
import "./LoadableImage.css";

interface imageProps{
    src: string;
    alt: string;
    height: number;
}

const LoadableImage: React.FC<imageProps> = ({src, alt, height}) => {
    const stylesConfig = {
        background: "#ffef5c",
        height: `${height}px`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#000"
    }
  return (
    <div>
      <AsyncImage
        src={src}
        style={{ width: "100%", height: `${height}px` }}
        alt={alt}
        loader={<div style={stylesConfig}>Loading...</div>}
        error={<div style={stylesConfig}>Error loading image</div>}
      />
    </div>
  );
};

export default LoadableImage;