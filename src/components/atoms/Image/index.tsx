interface ImageProps {
    source: string;
    alt: string;
    width?: string;
    height?: string;
    onClick?:()=>void;
  }

  const Image= ({source,alt,width,height,...Props}:ImageProps) => {
    return (
      <img
        src={source}
        alt={alt}
        style={{ width: `${width}`, height: `${height}` }}
        {...Props}
      ></img>
    );
  };

  export default Image;