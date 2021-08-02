import React from 'react'
import logoheader from './assets/lokerjogja.png';
import petaheader from './assets/location-white.svg';
import Aboutus from './Aboutus';

export default class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isToggleOn : true,
            span_rotate_top : "",
            span_rotate_bottom: "",
            span_middle_hide:"",
            hide_page_aboutus: "",
            hide_items_page : "hidden"
        };
        this.handleClick = this.handleClick.bind(this);
    }

    css_menu = { 
        style: "flex flex-col justify-evenly cursor-pointer",
    };

    css_global = {
        space: " "
    }

    css_test = {
        span_rotate_top: 'origin-top-left transform rotate-45 translate-x-px -translate-y-px',
        span_rotate_bottom: 'origin-top-left transform -rotate-45',
        span_middle: 'block w-0 h-0.5 bg-indigo-50 rounded-lg'
    }
    
    css_menu_span = {
        style_top_bottom: "block w-6 h-0.5 bg-indigo-50 rounded-lg",
        style_middle: "block w-5 h-0.5 bg-indigo-50 rounded-lg"
    }

    css_page_aboutus = {
        style: "sm:mt-0 h-12"
    }
    
    handleClick() {
        const isToggleOn = this.state.isToggleOn;
        if (isToggleOn) {
            this.toggleActive();
            this.setState({
                isToggleOn: false
            })
        } else {
            this.toggleInActive();
            this.setState({
                isToggleOn : true
            })
        }
    }

    toggleActive(){
        this.setState({ span_rotate_top: 'origin-top-left transition transform rotate-45 duration-500 translate-x-px -translate-y-px' })
        this.setState({ span_middle_hide: 'transition transform bg-bg-blue-dark opacity-0 duration-500' })
        this.setState({ span_rotate_bottom: 'origin-top-left transition transform -rotate-45 duration-500' })
        //this.setState({ hide_page_aboutus: 'transition ease-out duration-500 visible'})
        // about us 
        this.setState({
            hide_page_aboutus: 'transition-height duration-500 ease-in-out h-screen'
        })
        // this.setState({
        //     hide_items_page: 'hidden'
        // })
        
    }

    toggleInActive(){
        this.setState({ span_rotate_top: 'origin-top-left transition transform rotate-0 duration-500' })
        this.setState({ span_middle_hide: 'transition transform bg-indigo-50 opacity-1 duration-1000' })
        this.setState({ span_rotate_bottom: 'origin-top-left transition transform -rotate-0 duration-500' })
        //this.setState({ hide_page_aboutus: 'transition ease-out duration-500 invisible'})
        // about us
        this.setState({
            hide_page_aboutus: 'transition-height duration-500 ease-in-out'
        })
        // this.setState({
        //     hide_items_page: ''
        // })
    }

    render() {
        return (
            <div className="flex flex-col flex-wrap">
                <div className="flex h-24 p-2 flex-col sm:flex-row flex-nowrap bg-custom-blue-dark sm:sticky sm:h-12 top-0">
                    {/* logo__left */}
                    <div className="flex-1 ml-1 self-center">
                        <img className="w-40 h-auto flex-shrink-0" src={logoheader} alt="Logo loker jogja" />
                    </div >
                    {/* logo__right */}
                    <div className="flex-1 self-center items-center sm:mt-0">
                        <div className="flex flex-nowrap flex-row justify-center sm:justify-end space-x-4 cursor-pointer">
                            <div className={this.css_menu.style + this.css_menu.space} onClick={this.handleClick} >
                                {/* span top */}
                                <span className={this.css_menu_span.style_top_bottom + this.css_global.space + this.state.span_rotate_top} />
                                <span className={this.css_menu_span.style_middle + this.css_global.space + this.state.span_middle_hide} />
                                <span className={this.css_menu_span.style_top_bottom + this.css_global.space + this.state.span_rotate_bottom} />
                                {/* span middle */}
                                {/* span bottom */}
                            </div>
                            {/* logo peta */}
                            <div className="self-center cursor-pointer ">
                                <img className="w-5 h-5 hover:animate-bounce" src={petaheader} alt="Logo loker jogja" />
                            </div>
                            {/* pasang loker */}
                            <div className="self-center">
                                <div className="text-center cursor-pointer rounded-lg border-2 border-yellow-500 pr-1 pl-1">
                                    <p className="font-medium text-yellow-500">Pasang loker</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <Aboutus 
                        props_visible={this.state.hide_page_aboutus}
                        props_hidde={this.state.hide_items_page}
                    />
                </div>
            </div>
        )
    }
}

