import React from 'react'
import logotipsheader from './assets/tips.svg';
import jakarta from './assets/jakartakerja.png';
import semarjogja from './assets/lokersemar.png';
import bandung from './assets/lokerbandung.png';
import SubjectIcon from '@material-ui/icons/Subject';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TelegramIcon from '@material-ui/icons/Telegram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ShopIcon from '@material-ui/icons/Shop';
import tips from './assets/tips.svg';

export default class aboutus extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div class="flex flex-col bg-custom-blue-dark top-0 h-screen">
                <div class="flex flex-row ml-1 justify-center md:justify-start space-x-3 cursor-pointer shadow-sm pb-1 ">
                    <div><SubjectIcon style={{ color: "#FFFF" }} fontSize="small"/></div>
                    <div><p class="text-blue-50 text-lg font-bold">Tips Kerja</p></div>
                </div >
                <p class="align-middle text-center text-custom-text-001 mt-2.5">Temukan kami di</p>
                <div class="flex flex-row justify-center space-x-2 p-2">
                    <InstagramIcon style={{ color: "#8091a6" }} fontSize="large" />
                    <FacebookIcon style={{ color: "#8091a6" }} fontSize="large" />
                    <TelegramIcon style={{ color: "#8091a6" }} fontSize="large" />
                    <LinkedInIcon style={{ color: "#8091a6" }} fontSize="large"/>
                    <ShopIcon style={{ color: "#8091a6" }} fontSize="large"/>
                </div>
                <p class="align-middle text-center text-custom-text-001">Network</p>
                <div class="flex flex-row space-x-2 justify-center p-2">
                    <img src={jakarta} alt="loker jakarta" />
                    <img src={semarjogja} alt="loker jakarta" />
                    <img src={bandung} alt="loker jakarta" />
                </div>
                <div class="flex flex-row justify-center mt-auto items-center h-12 space-x-4 bg-custom-gray-dark">
                    <p class="text-custom-text-001">Tentang Kami</p>
                    <p class="text-custom-text-001">Kontak Kami</p>
                </div>
            </div>
        )
    }
}
