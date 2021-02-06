import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Page404.css';

const Page404 = () => {
    return (
        <div className="page404-container">
            <div className="page404-header">
                <div className="page404-header-contents">
                    <h1>Oops!</h1>
                    <h3>404 Error: Page Not Found</h3>
                    <p>
                        This page could have been renamed, removed, or could be
                        temporarily unavailable.
                    </p>
                    <Link to="/">Home Page</Link>
                </div>
            </div>
        </div>
    );
};

export default Page404;
