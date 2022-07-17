import React, {useMemo} from 'react';
import {useDropzone} from 'react-dropzone';
import {Check} from "react-feather"
import check from "../../images/checked.png"

export default function DropzoneResume(props) {
    const {
        acceptedFiles,
        getRootProps,
        getInputProps,
    } = useDropzone({
        maxFiles:1
    });

    const acceptedFileItems = acceptedFiles.map(file => (
        <div key={file.path} className="dropzone-file-name-container">
            <div className="check-icon"/>
            <span className="dropzone-file-name">{file.path}</span>
        </div>
    ));

    return (
        <div>
            <div {...getRootProps()} className={
                (props.formErrors.candidateResume && props.isSubmit) ?
                    "wrapper-new-dropbox error-border-dashed" : "wrapper-new-dropbox"
            }
            >
                {/*{console.log(acceptedFiles)}*/}
                <input {...getInputProps()} value={props.value}/>
                <p className="dropzone-default-text">Перетягни файл або клікни тут, щоб завантажити</p>
                {/*<p>(2 files are the maximum number of files you can drop here)</p>*/}
                <div>{acceptedFileItems}</div>
            </div>
            <p className="error-text margin-bottom-0">{props.formErrors.candidateResume}</p>
        </div>

    );
}










// import React, { useState } from 'react';
//
// import { DropzoneComponent } from 'react-dropzone-component';
//
// import 'dropzone/dist/dropzone.css';
// import 'react-dropzone-component/styles/filepicker.css';
//
// // import { employees_resumes, storage } from '../../../../configs/google/firebase/index';
//
// const BytesToMegaBytes = (size) => +((size * 1e-6).toFixed(2));
//
//
// export default function DropzoneResume() {
//     var ReactDOMServer = require('react-dom/server');
// // ({
// //                             // Data
// //                             jobName,
// //                             errorFields,
// //                             errorStatus,
// //                             // OnChange Events
// //                             onChange
// //                         }) => {
// //     const [state, setState] = useState({
// //         progress: null
// //     });
//
//     const djsConfig = {
//         autoProcessQueue: false,
//         maxFiles: 1,
//         // progress: null,
//         dictDefaultMessage: 'Перетягни файл або клікни тут, щоб завантажити',
//         dictResponseError:
//             'Файл не завантажується :( Напиши нам у Telegram, ми одразу вирішимо проблему.',
//         dictMaxFilesExceeded: 'Тільки один файл. Видали попередні, щоб завантажити новий.',
//         dictRemoveFile: 'Видалити файл',
//         dictCancelUpload: 'Відмінити',
//         dictUploadCanceled: 'Відмінилось',
//         dictInvalidFileType: 'Такий тип файлу не підтримується',
//         dictFallbackMessage:
//             'Твій браузер не підтримує drag&drop. Напиши нам у Telegram, ми одразу вирішимо проблему.',
//         dictFallbackText:
//             'Щось тут не так :( Напиши нам у Telegram, ми одразу вирішимо проблему.',
//         dictFileTooBig:
//             'Файл занадто великий. Максимальний розмір 10Мб. Скористайся сервісами для зниження якості файлу.',
//         dictCancelUploadConfirmation: 'Точно відмінити завантаження?',
//         addRemoveLinks: true,
//         maxFilesize: 10,
//         previewTemplate: ReactDOMServer.renderToStaticMarkup(
//             <div className="dz-preview dz-file-preview">
//                 <div className="dz-details">
//                     <div className="dz-filename"><span data-dz-name="true"></span></div>
//                     <img data-dz-thumbnail="true" />
//                 </div>
//                 <div className="dz-progress"><span className="dz-upload" data-dz-uploadprogress="true"></span></div>
//                 <div className="dz-success-mark"><span>✔</span></div>
//                 <div className="dz-error-mark"><span>✘</span></div>
//                 <div className="dz-error-message"><span data-dz-errormessage="true"></span></div>
//             </div>
//         )
//     };
//
//     const componentConfig = {
//         iconFiletypes: ['.jpg', '.png', '.gif', '.pdf', '.doc', '.docx'],
//         showFiletypeIcon: false,
//         postUrl: 'no-url',
//     };
//
//     let dropzone = null;
//
//     // /* Delegate the task in the Firebase method */
//     // const onSendResume = file => onFirebaseSave(file);
//     //
//     // const onFirebaseSave = file => {
//     //     /* Save current timeString */
//     //     const
//     //         timeString = new Date().toISOString(),
//     //         fileName = file.name,
//     //         fileSize = BytesToMegaBytes(file.size),
//     //         fileNameFirebase = `${timeString}-${jobName}-${fileName}`;
//     //     /* Upload task in Firebase engine */
//     //     const uploadTask = storage
//     //         .ref(`${employees_resumes}`)
//     //         .child(fileNameFirebase)
//     //         .put(file);
//     //     /* Push the data in the storage */
//     //     uploadTask.on(
//     //         'state_changed',
//     //         async snapshot => {
//     //             // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
//     //             setState({
//     //                 ...state,
//     //                 progress: (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
//     //             });
//     //         },
//     //         err => {
//     //             console.log(err);
//     //             // A full list of error codes is available at
//     //             // https://firebase.google.com/docs/storage/web/handle-errors
//     //         },
//     //         complete => {
//     //             storage
//     //                 .ref(employees_resumes)
//     //                 .child(fileNameFirebase)
//     //                 .getDownloadURL()
//     //                 .then(url => {
//     //                     onChange({
//     //                         fileData: url,
//     //                         fileName: fileName,
//     //                         fileSize: fileSize
//     //                     });
//     //                 });
//     //         },
//     //     );
//     // };
//     //
//     // const onRemoveResume = file => {
//     //     /* Set the <unknown> filename and null file data to the resume params */
//     //     onChange({
//     //         fileName: "<unknown>",
//     //         fileSize: null,
//     //         fileData: null,
//     //     });
//     // };
//     //
//     // // For a list of all possible events (there are many), see README.md!
//     // const eventHandlers = {
//     //     init: dz => (dropzone = dz),
//     //     drop: [
//     //         // If you want to attach multiple callbacks, simply
//     //         // create an array filled with all your callbacks.
//     //     ],
//     //     addedfile: file => onSendResume(file),
//     //     complete: file => onSendResume(file),
//     //     removedfile: file => onRemoveResume(file)
//     // };
//
//     return (
//         <div className="dropzone-wrapper">
//             <DropzoneComponent
//                 config={componentConfig}
//                 // className={(() => {
//                 //     return errorFields.includes('fileData') &&
//                 //     errorStatus >= 400
//                 //         ? 'required-field'
//                 //         : null;
//                 // })()}
//                 // eventHandlers={eventHandlers}
//                 djsConfig={djsConfig}
//             />
//         </div>
//     );
// };
//
