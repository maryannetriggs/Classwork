import React from 'react'

const CheesesForm = ({ data, handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <div className="field">
      <label className="label">Name</label>
      <div className="control">
        <input 
          className="input"
          placeholder="Name"
          name="name"
          onChange={handleChange}
          value={data.name}
        />
      </div>
    </div>
    <div className="field">
      <label className="label">Origin</label>
      <div className="control">
        <input 
          className="input"
          placeholder="Origin"
          name="origin"
          onChange={handleChange}
          value={data.origin}
        />
      </div>
    </div>
    <div className="field">
      <label className="label">Image</label>
      <div className="control">
        <input 
          className="input"
          placeholder="Image"
          name="image"
          onChange={handleChange}
          value={data.image}
        />
      </div>
    </div>
    <div className="field">
      <label className="label">Tasting Notes</label>
      <div className="control">
        <textarea 
          className="textarea"
          placeholder="Please enter your tasting notes here..."
          name="tastingNotes"
          onChange={handleChange}
          value={data.tastingNotes}
        />
      </div>
    </div>
    <button type="submit" className="button is-warning is-fullwidth">Make my cheese!</button>
  </form>
)

export default CheesesForm