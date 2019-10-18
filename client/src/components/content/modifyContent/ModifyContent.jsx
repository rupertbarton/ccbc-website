import React, { useState } from 'react';
import HtmlEditor from './HtmlEditor';
import Select from '../../common/Select';
import SaveButton from '../../common/SaveButton';
import { savePage, saveMultiplePages } from '../../../api/pages'

const ModifyContent = props => {
  const [showPreview, setShowPreview] = useState(false)
  const [pages, setPages] = useState(props.pages);
  const [randomTimout, setRandomTimeout] = useState(true);  //this is required as Quill is a partially controlled component, and passing it new props counts as a change, and does not cause a rerender 😢
  const [selectedPage, setSelectedPage] = useState('');

  const handleTextEditorChange = (value) => {
    setPages({
      ...pages,
      [selectedPage]: {
        ...pages[selectedPage],
        changed: true,
        content: value
      }
    })
  };

  const handleSelectChange = event => {
    setRandomTimeout(false)
    setTimeout(() => { setRandomTimeout(true) }, 1)
    setSelectedPage(event.target.value);
  };

  const handleSubmitSingle = () => {
    savePage({ id: selectedPage, content: pages[selectedPage].content })
  }

  const handleSubmitMultiple = () => {
    saveMultiplePages(pages)
  }

  return (
    <>
      <Select
        items={
          Object.keys(pages).map(id => {
            return {
              id
            };
          })
        }
        name="id"
        value={selectedPage}
        label="Select page name"
        onChange={handleSelectChange} />


      {!!selectedPage && randomTimout &&
        <>
          <SaveButton label={showPreview ? "Modify text" : "Show Preview"} onClick={() => { setShowPreview(!showPreview) }} />
          <HtmlEditor value={pages[selectedPage].content} onChange={handleTextEditorChange} showPreview={showPreview} />

          <div>
            <SaveButton label="Publish Current Page" onClick={handleSubmitSingle} />
            <SaveButton label="Publish All Pages" onClick={handleSubmitMultiple} />
          </div>
        </>
      }
    </>
  );
};

export default ModifyContent;