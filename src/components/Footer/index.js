import React from "react";
import { animateScroll as scroll } from 'react-scroll'
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaLinkedin,
} from "react-icons/fa";
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
} from "./FooterElements";

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop()
    }
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/signin">How it Works</FooterLink>
                            <FooterLink to="/signin">Testimonals</FooterLink>
                            <FooterLink to="/signin">Privacy</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Coreers</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/signin">How it Works</FooterLink>
                            <FooterLink to="/signin">Testimonals</FooterLink>
                            <FooterLink to="/signin">Privacy</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Coreers</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to="/signin">Facebook</FooterLink>
                            <FooterLink to="/signin">Instagram</FooterLink>
                            <FooterLink to="/signin">Youtube</FooterLink>
                            <FooterLink to="/signin">Twetter</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink to="/signin">How it Works</FooterLink>
                            <FooterLink to="/signin">Testimonals</FooterLink>
                            <FooterLink to="/signin">Privacy</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Coreers</FooterLink>
                        </FooterLinkItems>
                        </FooterLinksWrapper>
                        </FooterLinksContainer>
                        <SocialMedia>
                            <SocialMediaWrap>
                                <SocialLogo to="/" onClick={toggleHome}>funtta $</SocialLogo>
                                <WebsiteRights>
                                    funthoshi © 2021 All rights reserved.
                                </WebsiteRights>
                                <SocialIcons>
                                    <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                        <FaFacebook />
                                    </SocialIconLink>
                                    <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                        <FaInstagram />
                                    </SocialIconLink>
                                    <SocialIconLink href="//www.twitter.com/" target="_blank" aria-label="Twetter">
                                        <FaTwitter />
                                    </SocialIconLink>
                                    <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                                        <FaYoutube />
                                    </SocialIconLink>
                                    <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                                        <FaLinkedin />
                                    </SocialIconLink>
                                </SocialIcons>
                            </SocialMediaWrap>
                        </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;
