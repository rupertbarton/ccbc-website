import React, { useState, useEffect } from 'react'
import HtmlEditor from './HtmlEditor'
import Select from '../../common/Select'

const ModifyContent = (props) => {
  const [pages, setPages] = useState(props.pages)
  const [text, setText] = useState('')
  const [selectedPage, setSelectedPage] = useState('home')
  console.log(props)

  const handleTextEditorChange = (value) => {
    setText(value)
  }
  
  const listOfPageNames = Object.keys(pages).map(id => {
    return {
      id
    }
  })

  const handleSelectChange = (event) => {
    console.log([event.target.value])
    setSelectedPage(event.target.value)
  }


  return (
    <>
    <Select items={listOfPageNames} name="id" value={selectedPage} onChange={handleSelectChange} label="Page name"/>
      {!!selectedPage && <HtmlEditor onChange={handleTextEditorChange} value={text} />}
    </>
  )
}

export default ModifyContent