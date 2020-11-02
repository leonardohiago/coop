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
                    <a href = "https://www.facebook.com/Coop-102893241632625"> <AiFillFacebook color="#fff" size={24} /> </a>
                    <a href = "https://www.facebook.com/ongs.tms.9"><AiOutlineTwitter color="#fff" size={24} /> </a>
                    <a href = "https://www.instagram.com/coop.ongs/"><AiOutlineInstagram color="#fff" size={24} /> </a>
                </RedesSociais>
            </Content>
        </Container>
    )
}

export default Footer;