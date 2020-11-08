import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md';

import { Container, FileInfo, Preview } from './styles';


const FileList = () => (
    <Container>
        <li>
            <FileInfo>
                <Preview src="https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?cs=srgb&dl=pexels-harsch-shivam-2007647.jpg&fm=jpg"></Preview>
                <div>
                    <strong>teste.png</strong>
                    <span>108kb <button onClick={() => {}}>Excluir</button></span>
                </div>
            </FileInfo>
            <div>
                <CircularProgressbar
                    styles={{
                        root: { width: 24 },
                        path: { stroke: '#5B25B1' }
                    }}
                    strokeWidth={10}
                    value={60}
                    />
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <MdLink style= {{ marginRight: 8 }} size={24} color="#1C1C1C" />
                    </a>

                    <MdCheckCircle size={24} color="#34CB79" />
                    <MdError size={24} color="#FD6060" />
            </div>
        </li>
    </Container>
);

export default FileList;