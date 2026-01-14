// Function to handle video unmuting
function handleUnmute() {
    const videoElement = document.getElementById('videoPopup'); // Assuming this is the ID of the video element
    videoElement.muted = false;
    videoElement.play(); // Start playing the video upon unmute
}

// JSX component
import React from 'react';

const PromoPopup = () => {
    return (
        <div>
            <video id='videoPopup' muted onClick={handleUnmute}>
                <source src='video.mp4' type='video/mp4' />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default PromoPopup;