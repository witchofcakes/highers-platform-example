import React, { useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { convertToHTML } from 'draft-convert';
import DOMPurify from 'dompurify';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export default function TextEditor(props){
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );
    const  [convertedContent, setConvertedContent] = useState(null);
    const handleEditorChange = (state) => {
        setEditorState(state);
        convertContentToHTML();
    }
    const convertContentToHTML = () => {
        let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
        setConvertedContent(currentContentAsHTML);
    }
    const createMarkup = (html) => {
        return  {
            __html: DOMPurify.sanitize(html)
        }
    }
    return (
        <div className="App">
            <Editor
                editorState={editorState}
                onEditorStateChange={handleEditorChange}
                wrapperClassName={props.className}
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
                toolbar={{
                    options: ['inline', 'blockType', 'list', 'link', 'history'],
                    inline: {
                        inDropdown: false,
                        className: undefined,
                        component: undefined,
                        dropdownClassName: undefined,
                        options: ['bold', 'italic'],
                    },
                    blockType: {
                        inDropdown: false,
                        options: ['H2'],
                        className: undefined,
                        component: undefined,
                        dropdownClassName: undefined,
                    },
                    list: {
                        inDropdown: false,
                        className: undefined,
                        component: undefined,
                        dropdownClassName: undefined,
                        options: ['unordered'],
                    },
                    link: {
                        inDropdown: false,
                        className: undefined,
                        component: undefined,
                        popupClassName: undefined,
                        dropdownClassName: undefined,
                        showOpenOptionOnHover: true,
                        defaultTargetOption: '_self',
                        options: ['link', 'unlink'],
                    },
                    history: {
                        inDropdown: false,
                        className: undefined,
                        component: undefined,
                        dropdownClassName: undefined,
                        options: ['undo', 'redo'],
                    },
                }}
            />
            {/*<div className="preview" dangerouslySetInnerHTML={createMarkup(convertedContent)}></div>*/}
        </div>
    )
}
