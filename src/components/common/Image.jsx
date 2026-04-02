

const Image = ({src,alt,className}) => {
  return (
    <img src={src} alt={alt} className={`bg-cover bg-center bg-no-repeat h-fit w-fit  ${className}`} />
  )
}

export default Image