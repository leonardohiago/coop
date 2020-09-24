import React from 'react';
import {AiFillFacebook, AiOutlineTwitter, AiOutlineInstagram} from 'react-icons/ai';
import { Container, Content, RedesSociais } from './styles';

import logo from '../../assets/coop-logo-branco.png';

const Footer = () => {
    return (
        <Container>
            <Content>
                <img src={logo} alt="Coop."/>

                <RedesSociais>
                    <AiFillFacebook color="#fff" size={24} />
                    <AiOutlineTwitter color="#fff" size={24} />
                    <AiOutlineInstagram color="#fff" size={24} />
                </RedesSociais>
            </Content>
        </Container>
    )
}

export default Footer;