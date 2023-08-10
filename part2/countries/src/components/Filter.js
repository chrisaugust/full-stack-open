const Filter = ({ filterValue, handler }) => {
  return (
    <div>
      find countries: {" "}
      <input
        value={filterValue}
        onChange={handler}
      />
    </div>
  )
}

export default Filter