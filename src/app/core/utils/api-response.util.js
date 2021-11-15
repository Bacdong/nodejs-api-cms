module.exports = {
  ApiResponse: (data, success = true, status = 200) => {
    var data
    
    if (Array.isArray(data)) {
      data = {
        results: data.map(data => (data ? data.toObject() : null))
      }
    } else {
      data = data ? data.toObject() : null
    }
    return {
      success: success ? success : false,
      status_code: status ? status : 400,
      results: data.results.length > 0 ? data : null,
    }
  }
}