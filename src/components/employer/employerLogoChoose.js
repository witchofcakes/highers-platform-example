import React from 'react';

import ReactAvatarEditor from 'react-avatar-editor';

import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

export default class UploadAvatar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null /* Uploading file from the PC */,
            imageName: null,
            imageData: null,

            preview: null,
            open: false,
            allowZoomOut: false,
            position: {
                x: 0.5,
                y: 0.5,
            },
            scale: 1,
            rotate: 0,
            borderRadius: 200,
            width: 250,
            height: 250,
            value: 1,
            progress: 0,

            isLoading: false,
            isError: false,
        };
    }

    // componentWillMount() {}
    //
    // loadInFirebase = () => {
    //     let uploadTask;
    //     // If image base64 format was passed as a parameter
    //     if (this.state.imageData) {
    //         uploadTask = storage
    //             .ref(vacancies_logotypes)
    //             .child(this.state.imageName)
    //             .putString(this.state.imageData, 'data_url', {
    //                 contentType: 'image/png',
    //             });
    //     } else {
    //         // If image blob was passed as a parameter
    //         uploadTask = storage
    //             .ref(vacancies_logotypes)
    //             .child(this.state.imageName)
    //             .put(this.state.file);
    //     }
    //
    //     uploadTask.on(
    //         'state_changed',
    //         async snapshot => {
    //             // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    //             this.setState({
    //                 progress: (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
    //             });
    //         },
    //         err => {
    //             console.log(err);
    //             // A full list of error codes is available at
    //             // https://firebase.google.com/docs/storage/web/handle-errors
    //         },
    //         complete => {
    //             storage
    //                 .ref(vacancies_logotypes)
    //                 .child(this.state.imageName)
    //                 .getDownloadURL()
    //                 .then(url => {
    //                     /* Send the obtained data to the parent component */
    //                     this.props.onChange(this.state.imageName, url);
    //                     this.handleClose();
    //                 });
    //         },
    //     );
    // };

    handleNewImage = evt => {
        this.setState({
            file: evt.target.files[0],
            imageName: `${evt.target.files[0].name}-${new Date().toISOString()}`,
        });
        if (evt.target.files[0]) {
            this.handleOpen();
        }
    };

    onScale = evt => {
        this.setState({
            scale: parseFloat(evt.target.value),
        });
    };

    handlePositionChange = position => {
        this.setState({
            position,
        });
    };

    handleSetEditorRef = editor => {
        this.setState({
            editor,
        });
    };

    handleOpen = () => {
        this.setState({
            open: true,
        });
    };

    handleClose = () => {
        this.setState({
            open: false,
        });
    };

    handleCrop = async () => {
        if (this.state.editor) {
            const urlBase64 = this.state.editor.getImageScaledToCanvas().toDataURL();
            await this.setState({
                imageData: urlBase64,
            });
        }
    };

    // handleSubmit = async evt => {
    //     evt.preventDefault();
    //     /* If any perturbations was done under file */
    //     await this.handleCrop();
    //     /* Load the perturbed file into the firebase */
    //     this.loadInFirebase();
    // };

    render() {
        return (
            <div>
                <div className="apply-button">
                    <input
                        id="contained-button-file"
                        type="file"
                        name="file"
                        multiple
                        onChange={this.handleNewImage}
                        className="jss978"
                    />
                    <label htmlFor="contained-button-file" className="upload-button-big">
                        <Button className="upload-button" component="span">
                            <Avatar
                                alt={this.props.imageName}
                                src={this.props.imageData}
                                className="avatar-picture-upload"
                            />
                            <div className="upload-icon">
                                <div className="upload-icon-icon" />
                            </div>
                        </Button>
                    </label>
                </div>

                <Modal
                    aria-labelledby="transition-modal-title-apply"
                    aria-describedby="transition-modal-description-apply"
                    className="modal-upload"
                    open={this.state.open}
                    onClose={this.handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={this.state.open}>
                        <div className="row modal-paper-upload">
                            <ReactAvatarEditor
                                image={this.state.file}
                                scale={parseFloat(this.state.scale)}
                                width={this.state.width}
                                height={this.state.height}
                                position={this.state.position}
                                onPositionChange={this.handlePositionChange}
                                rotate={parseFloat(this.state.rotate)}
                                borderRadius={this.state.borderRadius}
                                ref={this.handleSetEditorRef}
                                className="editor-canvas"
                            />
                            <div className="col-12 zoom-upload-div">
                                <input
                                    name="scale"
                                    type="range"
                                    value={parseFloat(this.state.scale)}
                                    min={this.state.allowZoomOut ? '0.1' : '1'}
                                    max="2"
                                    step="0.01"
                                    onChange={this.onScale}
                                />
                            </div>
                            <div className="col-12">
                                <form>
                                    <button className="save-upload-btn">
                                        Зберегти
                                    </button>
                                    <button
                                        className="cancel-upload-btn"
                                        onClick={this.handleClose}
                                    >
                                        Відмінити
                                    </button>
                                </form>
                            </div>
                        </div>
                    </Fade>
                </Modal>
            </div>
        );
    }
}
