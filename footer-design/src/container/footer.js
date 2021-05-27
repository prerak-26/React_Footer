import React from 'react';
import Footer from '../components/footer';
import Icons from '../components/icons'

export function FooterContainer(){
    return(
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Column>
                        <Footer.Title>About Me</Footer.Title>
                        <Footer.Link href="#">Story</Footer.Link>
                        <Footer.Link href="#">Clients</Footer.Link>
                        <Footer.Link href="#">Testimonials</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Services</Footer.Title>
                        <Footer.Link href="#">Marketing</Footer.Link>
                        <Footer.Link href="#">Consulting</Footer.Link>
                        <Footer.Link href="#">Devlopment</Footer.Link>
                        <Footer.Link href="#">Design</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Contact Us</Footer.Title>
                        <Footer.Link href="#">United States</Footer.Link>
                        <Footer.Link href="#">United Kingdom</Footer.Link>
                        <Footer.Link href="#">Australia</Footer.Link>
                        <Footer.Link href="#">Support</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Social</Footer.Title>
                        <Footer.Link href="#"><Icons className="fa fa-facebook"/>Facebook</Footer.Link>
                        <Footer.Link href="#"><Icons className="fa fa-instagram"/>Instagram</Footer.Link>
                        <Footer.Link href="#"><Icons className="fa fa-youtube-play"/>Youtube</Footer.Link>
                        <Footer.Link href="#"><Icons className="fa fa-twitter"/>Twitter</Footer.Link>
                    </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    );
}