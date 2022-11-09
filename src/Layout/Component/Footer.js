import React from 'react';

function Footer() {
    return (
        <footer className="container-fluid bg-secondary text-white py-1">
            <div className="mt-3">
                <p className="float-right">
                    <a href="#">Back to top</a>
                </p>
                <p>
                    © 2019-2022 iCoder, Inc. · <a href="#">Privacy</a> ·{" "}
                    <a href="#">Terms</a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
