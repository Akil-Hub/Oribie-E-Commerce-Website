

const Image = ({imgSrc,altSrc,className}) => {
  return (
    <img src={imgSrc} alt={altSrc} className={`bg-cover bg-center bg-no-repeat h-fit w-fit ${className}`} />
  )
}

export default Image