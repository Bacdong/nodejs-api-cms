module.exports = {
  ApiResponse: (data, success = true, status = 200) => {
    var data
    
    if (Array.isArray(data)) {
      data = {
        total: 24,
        page_size: 12,
        total_page: 2,
        page_list: [1, 2],
        current_page: 1,
        next_page: 2,
        prev_page: null,
        results: data.map(data => (data ? data.toObject() : null))
      }
    } else {
      data = data ? data.toObject() : null
    }

    return {
      success: success,
      status_code: status,
      data: data,
    }
  }
}