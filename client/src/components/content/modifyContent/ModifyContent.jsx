import React, { useState } from 'react';
import HtmlEditor from './HtmlEditor';
import Select from '../../common/Select';
import SaveButton from '../../common/SaveButton';
import { savePage, saveMultiplePages } from '../../../api/pages';
import PropTypes from 'prop-types';
import { pages, execRole } from '../../../types';

const ModifyContent = props => {
  const [showPreview, setShowPreview] = useState(false);
  const [pages, setPages] = useState(props.pages);

  const handleTextEditorChange = (value, _, source) => {
    if (source === 'user') {
      setPages({
        ...pages,
        [props.selectedPage]: {
          ...pages[props.selectedPage],
          changed: true,
          content: value
        }
      });
    }
  };

  const handleSelectChange = event => {
    props.updatePageToEdit(event.target.value);
  };

  const handleSubmitSingle = () => {
    savePage({ id: props.selectedPage, content: pages[props.selectedPage].content }).then(() => props.fetchPages());
  };

  const handleSubmitMultiple = () => {
    saveMultiplePages(pages).then(() => props.fetchPages());
  };

  const handleShowPreview = () => {
    setShowPreview(!showPreview);
  };

  const handleResetPages = () => {
    props.fetchPages();
  };

  return (
    <>
      <Select
        items={
          Object.keys(pages).sort((a, b) => pages[a].order - pages[b].order).map(id => {
            return {
              id
            };
          })
        }
        name="id"
        value={props.selectedPage}
        label="Select page name"
        onChange={handleSelectChange} />

      {!!props.selectedPage &&
        <>
          <SaveButton label={showPreview ? 'Modify text' : 'Show Preview'}
            onClick={handleShowPreview} />
          <SaveButton label={'Reset Pages'}
            onClick={handleResetPages} />
          <HtmlEditor value={pages[props.selectedPage].content}
            showPreview={showPreview}
            execRoles={props.execRoles}
            onChange={handleTextEditorChange} />

          <div>
            <SaveButton label="Publish Current Page"
              onClick={handleSubmitSingle} />
            <SaveButton label="Publish All Pages"
              onClick={handleSubmitMultiple} />
          </div>
        </>
      }
    </>
  );
};

ModifyContent.propTypes = {
  pages,
  selectedPage: PropTypes.string,
  fetchPages: PropTypes.func,
  execRoles: PropTypes.arrayOf(execRole),
  updatePageToEdit: PropTypes.func
};

export default ModifyContent;