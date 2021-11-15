module.exports = {
  ApiResponse: (data, success = true, status = 200) => {
    var results
    
    if (Array.isArray(data)) {
      results = data.map(data => (data ? data.toObject() : null))
      results = results.length > 0 ? results : null
    } else {
      results = data ? data.toObject() : null
    }

    return {
      success: success ? success : false,
      status_code: status ? status : 400,
      results: results,
    }
  }
}