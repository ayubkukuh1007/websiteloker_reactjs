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
            span_middle_hide:""
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
    }

    toggleInActive(){
        this.setState({ span_rotate_top: 'origin-top-left transition transform rotate-0 duration-500' })
        this.setState({ span_middle_hide: 'transition transform bg-indigo-50 opacity-1 duration-1000' })
        this.setState({ span_rotate_bottom: 'origin-top-left transition transform -rotate-0 duration-500' })
    }

    render() {
        return (
            <div class="flex flex-col flex-wrap">
                <div class="flex h-24 p-2 flex-col sm:flex-row flex-nowrap bg-custom-blue-dark sm:sticky sm:h-12 top-0">
                    {/* logo__left */}
                    <div class="flex-1 ml-1 self-center">
                        <img class="w-40 h-auto flex-shrink-0" src={logoheader} alt="Logo loker jogja" />
                    </div >
                    {/* logo__right */}
                    <div class="flex-1 self-center sm:mt-0 mt-2">
                        <div class="flex flex-nowrap flex-row justify-end space-x-4 cursor-pointer">
                            <div class={this.css_menu.style + this.css_menu.space} onClick={this.handleClick} >
                                {/* span top */}
                                <span class={this.css_menu_span.style_top_bottom + this.css_global.space + this.state.span_rotate_top} />
                                <span class={this.css_menu_span.style_middle + this.css_global.space + this.state.span_middle_hide} />
                                <span class={this.css_menu_span.style_top_bottom + this.css_global.space + this.state.span_rotate_bottom} />
                                {/* span middle */}
                                {/* span bottom */}
                            </div>
                            {/* logo peta */}
                            <div class="self-center cursor-pointer ">
                                <img class="w-5 h-5 hover:animate-bounce" src={petaheader} alt="Logo loker jogja" />
                            </div>
                            {/* pasang loker */}
                            <div class="flex-none self-center">
                                <div class="cursor-pointer rounded-lg border-2 border-yellow-500 pr-1 pl-1">
                                    <p class="font-medium text-yellow-500">Pasang loker</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sm:mt-0">
                    <Aboutus />
                </div>
            </div>
        )
    }

}

