import React, { Component } from 'react';

import { DropContainer, UploadMessage } from './styles';

import Dropzone from 'react-dropzone';

export default class Upload extends Component {

    renderDragMessage = (isDragActive, isDragReject) => {
        if (!isDragActive) {
            return <UploadMessage>Arraste as imagens aqui.</UploadMessage>
        }

        if (isDragReject) {
            return <UploadMessage type="error">Formato de arquivo não suportado.</UploadMessage>
        }

        return <UploadMessage type="success">Solte os arquivos aqui.</UploadMessage>
    }

    render() {
        return (
            <Dropzone accept="image/*" onDropAccepted={() => {}}>
                { ({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
                    <DropContainer
                        {...getRootProps()}
                        isDragActive={isDragActive}
                        isDragReject={isDragReject}
                    >
                        <input {...getInputProps()} />
                        {this.renderDragMessage(isDragActive, isDragReject)}
                    </DropContainer>
                )}
            </Dropzone>
        )
    }
}