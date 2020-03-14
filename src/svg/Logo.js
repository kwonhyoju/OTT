import React, { Component } from "react";




class Logo extends Component {
    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient
                        id="linear-gradient"
                        x2=".925"
                        y1=".077"
                        y2="1.233"
                        gradientUnits="objectBoundingBox">
                        <stop offset="0" stopColor="#41f8a4" />
                        <stop offset="1" stopColor="#24b1d9" />
                    </linearGradient>
                </defs>
                <g id="logo" transform="translate(-337.595 -12.379)">
                    <g
                        id="그룹_2"
                        data-name="그룹 2"
                        transform="translate(342.698 10.711)">
                        <rect
                            id="사각형_5"
                            width="23"
                            height="16"
                            className="cls-1"
                            data-name="사각형 5"
                            rx="3"
                            transform="translate(-.102 2.668)"
                        />
                        <path
                            id="다각형_1"
                            d="M8.293.707a1 1 0 0 1 1.414 0l6.586 6.586A1 1 0 0 1 15.586 9H2.414a1 1 0 0 1-.707-1.707z"
                            className="cls-1"
                            data-name="다각형 1"
                            transform="rotate(-90 20.283 -.615)"
                        />
                    </g>
                    <text
                        id="Movie_On"
                        className="cls-2"
                        data-name="Movie On"
                        transform="translate(337.595 42.379)">
                        <tspan x="0" y="0">
                            M
                        </tspan>
                        <tspan y="0" className="cls-3">
                            ovie
                        </tspan>
                        <tspan y="0" className="cls-4">
                            {" "}
                        </tspan>
                        <tspan y="0">O</tspan>
                        <tspan y="0" className="cls-3">
                            n
                        </tspan>
                    </text>
                </g>
            </svg>
        );
    }
}

export default Logo;
