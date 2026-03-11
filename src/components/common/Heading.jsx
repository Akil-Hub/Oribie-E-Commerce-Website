const Heading = (props) => {

  const words = props.text.split(' ').map((word, index) => {
    if (word.startsWith('#')) {
      return (
        <span key={index} className={`${props.className}`}>
           { word.slice(1) }{' '}
        </span>
      )
    }

    return word + ' '
  })

  return (
    <props.as className={`${props.className} text-white text-5xl font-bold`}>
      {words }
    </props.as>
  )
}

export default Heading
