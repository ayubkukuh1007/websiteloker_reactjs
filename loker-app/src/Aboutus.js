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

        // animate property
        const props_visible = this.props.props_visible; 
        const props_hidde = this.props.props_hidde; 
        const props_tips_kerja = this.props.tips_kerja;
        const props_sosila_media = this.props.sosial_media;
        const props_network = this.props_network;
        const props_temukan_kami = this.props_temukan_kami;
        const props_footer = this.props_footer;
        
        // style css        
        const css_style = {
            space : " ",
            css_full_screen: "flex flex-col bg-custom-blue-dark top-0 h-0",
            css_tips_kerja : "flex flex-row ml-1 pl-10 justify-center md:justify-start space-x-3 cursor-pointer shadow-sm pb-1",
            css_label_tips_kerja: "text-blue-50 text-lg font-bold",
            css_temukan_kami : "align-middle text-center text-custom-text-001 mt-6",
            css_sosial_media: "flex flex-row justify-center space-x-2 p-2",
            css_network: "align-middle text-center text-custom-text-001",
            css_location_newtork: "flex flex-row space-x-2 justify-center p-2",
            css_foother: "flex flex-row justify-center mt-auto items-center h-12 space-x-4 bg-custom-gray-dark",
        }

        return (
            <div className={css_style.css_full_screen + css_style.space + props_visible}>
                <div className={css_style.css_tips_kerja + css_style.space  }>
                    <div><SubjectIcon style={{ color: "#FFFF" }}/></div>
                    <div><p className={css_style.css_label_tips_kerja}>Tips Kerja</p></div>
                </div >
                <p className={css_style.css_temukan_kami + css_style.space + props_hidde }>Temukan kami di</p>
                <div className={css_style.css_sosial_media + css_style.space + props_hidde}>
                    <InstagramIcon style={{ color: "#8091a6" }} fontSize="large" />
                    <FacebookIcon style={{ color: "#8091a6" }} fontSize="large" />
                    <TelegramIcon style={{ color: "#8091a6" }} fontSize="large" />
                    <LinkedInIcon style={{ color: "#8091a6" }} fontSize="large"/>
                    <ShopIcon style={{ color: "#8091a6" }} fontSize="large"/>
                </div>
                <p className={css_style.css_network + css_style.space + props_hidde }>Network</p>
                <div className={css_style.css_location_newtork + css_style.space + props_hidde}>
                    <img src={jakarta} alt="loker jakarta" />
                    <img src={semarjogja} alt="loker jakarta" />
                    <img src={bandung} alt="loker jakarta" />
                </div>
                <div className={css_style.css_foother + css_style.space + props_hidde}>
                    <p className="text-custom-text-001">Tentang Kami</p>
                    <p className="text-custom-text-001">Kontak Kami</p>
                </div>
            </div>
        )
    }
}
