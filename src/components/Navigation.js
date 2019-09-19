import React from 'react'
import { Button, Icon } from 'antd';

const Navigation = ({ pageNumber, maxPageNumber, setPageNumber }) => {

  const isStartPage = () => {
    return pageNumber === 0
  }

  const isEndPage = () => {
    return pageNumber === maxPageNumber
  }

  const back = () => {
    const pageNum = pageNumber > 0 ? pageNumber - 1 : pageNumber 
    setPageNumber(pageNum)
  }

  const next = () => {
    debugger
    const pageNum = pageNumber < maxPageNumber ? pageNumber + 1 : pageNumber 
    setPageNumber(pageNum)
  }

  return (
    <div className="nav-button" >
      <Button className={isStartPage() ? 'disable': ''} type="primary" onClick={() => back()} disabled={isStartPage()}> 
        <Icon type="left" />
        Previous
          </Button>
      <span>{ pageNumber }</span>
      <Button className={isEndPage() ? 'disable': ''} type="primary" onClick={() => next()} disabled={isEndPage()}>
        Next
            <Icon type="right" />
      </Button>
    </div>
  )
}

export default Navigation

