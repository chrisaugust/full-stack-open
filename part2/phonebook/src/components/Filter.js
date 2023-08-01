const Filter = ({value, handler}) => {
  return (
    <div>
      filter by:  
      <input 
        value={value}
        onChange={handler}
      />  
    </div>
  )
}

export default Filter