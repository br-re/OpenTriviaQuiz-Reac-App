import React from 'react';
import Logo from '../assets/QuestionMark.png'

const Header = () => {
    return (
        <>
            <header>
                <img src={Logo} alt="Quiz-Logo" />
                <h1>OPEN TRIVIA QUIZ</h1>
            </header>
        </>
    );
}

export default Header;