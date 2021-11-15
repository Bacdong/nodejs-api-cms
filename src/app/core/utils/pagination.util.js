module.exports = {
  getPaginationPages: (total, currentPage = 1, pageSize = 10, pageRange = 10) => {
    var totalPage = (total % pageSize == 0) ? Number.parseInt(total / pageSize) : Math.round(Number.parseInt(total / pageSize) + 1)
    var nextPage = currentPage < totalPage ? (currentPage + 1) : null
    var prevPage = currentPage > 1 ? (currentPage - 1) : null

    var startPage = Math.round(currentPage - (pageRange / 2))
    var endPage = Math.round(currentPage + ((pageRange - 1) / 2))

    if (startPage < 1) {
      startPage = 1
      endPage = Number.parseInt(startPage) + Number.parseInt(pageRange) - 1
      if (endPage > totalPage) {
        endPage = Number.parseInt(totalPage)
      }
    }

    if (endPage > totalPage) {
      endPage = totalPage
      startPage = totalPage - pageRange + 1
      if (startPage < 1) {
        startPage = 1
      }
    }

    var pageList = []
    for (var i = startPage; i < (endPage + 1); ++i) {
      pageList.push(i)
    }

    pageList = pageList.length > 0 ? pageList : null

    return {
      total: total,
      page_size: pageSize,
      total_page: totalPage,
      page_list: pageList,
      prev_page: prevPage,
      current_page: currentPage,
      next_page: nextPage,
    }
  }
}