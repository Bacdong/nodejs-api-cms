module.exports = {
  ApiResponse: (data) => {
    var results
    
    if (Array.isArray(data)) {
      results = data.map(data => (data ? data.toObject() : null))
      results = results.length > 0 ? results : null
      return { results: results }
    } else {
      results = data ? data.toObject() : null
      return results
    }
  }
}