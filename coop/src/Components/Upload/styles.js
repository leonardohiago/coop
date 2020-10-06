import styled, { css } from 'styled-components';

const dragActive = css`
    border-color: #18B087;
`;

const dragReject = css`
    border-color: #FD6060;
`;

export const DropContainer = styled.div.attrs({
    className: "dropzone"
})`
    border: 1px dashed #ddd;
    border-radius: 4px;
    cursor: pointer;

    transition: height 0.2 ease;

    ${props => props.isDragActive && dragActive}
    ${props => props.isDragReject && dragReject}
`;  

const messageColors = {
    default: '#999999',
    error: '#FD6060',
    success: '#18B087'
};

export const UploadMessage = styled.p`
    display: flex;
    color: ${props => messageColors[props.type || 'default']};
    justify-content: center;
    align-items: center;
    padding: 15px 0;
`;