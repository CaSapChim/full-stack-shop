import React from "react";

interface ImgProps {
  src: string;
  alt: string;
  className?: string;
}

const Img: React.FC<ImgProps> = ({ src, alt, className }) => {
  const [imageError, setImageError] = React.useState<boolean>(false);

  const handleError = () => {
    setImageError(true);
  };

  return (
    <>
      {imageError ? (
        <div className={`${className} animate-pulse bg-slate-300`}></div>
      ) : (
        <img src={src} alt={alt} className={className} onError={handleError} />
      )}
    </>
  );
};

export default Img;
