import React from "react";
import '../components/button.css'
import {Link} from "react-router-dom";

const STYLES = ['btn--primary', 'btn--outline']

const SIZES = ['btn--medium', 'btn--large']
export const ButtonForProduct = ({
                                     children,
                                     type,
                                     onClick,
                                     buttonStyle,
                                     buttonSize
                                 }) => {
    const seeButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0];

    const seeButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <Link to='/products' className='btn-mobile'>
            <button className={`btn ${seeButtonStyle} ${seeButtonSize}`}
                    onClick={onClick}
                    type={type}>
                {children}
            </button>
        </Link>
    )

};
