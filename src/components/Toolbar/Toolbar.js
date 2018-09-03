import React from 'react';
import './Toolbar.css';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_nav">
            <div></div>
            <div className="tollbar_logo"><a href="/">The LOGO</a></div>
            <div className="items">
                <ul>
                    <li><a href="/">Link</a></li>
                    <li><a href="/">Link2</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;