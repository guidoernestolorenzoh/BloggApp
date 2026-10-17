

const Image = ({className, alt, src}) => {
  return (
    <img src={src} className={className} alt={alt} />
  )
}

export default Image