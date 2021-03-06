import React from 'react';
import '../App.css'
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className="hero-container">
            <video src="./videos/video-1.mp4" autoPlay loop muted />
            <h1>/ˈSHitē ˈkampiNG/</h1>
            <p>City Camping</p>
            <p> Donations can be made to tpmiller08@gmail.com @ Pay Pal!</p>
            <div className="hero-btns">
                <Button 
                className="btns" 
                buttonStyle='btn--outline' 
                buttonSize="btn--large"
                >
                    GET STARTED
                </Button>
                <Button 
                className="btns" 
                buttonStyle='btn--primary' 
                buttonSize="btn--large"
                >
                    Watch on YouTube! <i class="fab fa-youtube"></i>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;
