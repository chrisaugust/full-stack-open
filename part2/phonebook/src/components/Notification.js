const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  const theMessage = message[0]
  const isError = message[1]
  console.log('isError', isError)
  console.log('message', theMessage)

  if (isError === true) {
    return (
      <div className='error'>
        {message}
      </div>
    )
  } else {
    return (
      <div className='message'>
        {message}
      </div>
    )
  }
}

export default Notification