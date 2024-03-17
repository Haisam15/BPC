import React, {useState}from 'react'

function Timeline() {
    const [query, setQuery] = useState('');
    function handleSearch(event) {
        // Preventing the default behavior of the form submission
        event.preventDefault();
        console.log("Search term is: ", query);
      }
    function clearSearch() {
        // Clearing the search query
        setQuery('');
      }
  return (
    <div>
      <h1>Timeline page</h1>
      <form onSubmit={handleSearch} style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          style={{ 
            padding: '10px', 
            borderRadius: '5px', 
            border: '1px solid #ccc',
            marginRight: '10px',
            width: '1000px',
            marginLeft: '1000px'

          }}
        />
        <button 
          type="submit" 
          style={{ 
            padding: '10px', 
            borderRadius: '5px', 
            backgroundColor: '#007bff', 
            color: '#fff', 
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Search
        </button>
        <button 
          type="button" 
          onClick={clearSearch} 
          style={{ 
            padding: '10px', 
            borderRadius: '5px', 
            backgroundColor: '#dc3545', 
            color: '#fff', 
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Clear
        </button>
      </form>
    </div>
  )
}

export default Timeline
