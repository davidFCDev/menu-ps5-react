import React from 'react';
import { SlMouse } from 'react-icons/sl';
import { RxDoubleArrowLeft, RxDoubleArrowRight } from 'react-icons/rx'

const HorizontalScrollIcon = () => {
    return (
        <div className="horizontal-scroll-icon">
        <div className="horizontal-scroll-icon__animation">
            <RxDoubleArrowLeft className='arrowicon'/>
            <SlMouse className='text-2xl' />
            <RxDoubleArrowRight className='arrowicon' />
        </div>
        </div>
    );
};

export default HorizontalScrollIcon;