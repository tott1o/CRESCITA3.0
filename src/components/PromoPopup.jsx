import React from 'react';

const PromoPopup = () => {
    return (
        <div className="promo-popup">
            <video autoPlay loop>
                <source src="promo_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default PromoPopup;