import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

const Header = ({title, sub1, sub2}) => {
    return (
        <div>
            <div class="row align-items-end justify-content-center title">
            <div class="col text-center logo-text">
                <img src="images/dragonfruit.png" class="img" width="10%" alt="Dragonfruit"/> 
                <span class="align-bottom">{title}</span>
            </div>
            </div>
    
            <div class="row align-items-end justify-content-center subtitle1">
            <div class="col text-center">
                {sub1}
            </div>
            </div>
    
            <div class="row align-items-start justify-content-center subtitle2">
            <div class="col text-center">
                {sub2}
            </div>
            </div>
        </div>
    );
};

export default Header;
