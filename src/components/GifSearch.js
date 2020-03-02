import React from 'react'

const GifSearch = ({ handleChange, handleSubmit, query}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query "value={query} onChange={handleChange} />
        <input type="submit" />
      </form>
    </div>
  )
}
export default GifSearch