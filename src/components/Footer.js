import "./FooterStyles.css"

const Footer = () => {
    return (
        <div className="Footer">
            <div className="top">
                <h1>Trippy</h1>
                <p>choose your favourite destination.</p>
                <div>
                    <a href="/">
                        <i className="fa-brands fa-facebook-square"></i>
                        <i className="fa-brands fa-instagram-square"></i>
                        <i className="fa-brands fa-behance-square"></i>
                        <i className="fa-brands fa-twitter-square"></i>
                    </a>
                </div>
            </div>


            <div className="bottom">
                <div>
                    <h4>Project</h4>
                    <a href="/">Changelog</a>
                    <a href="/">Status</a>
                    <a href="/">License</a>
                    <a href="/">All Versions</a>
                </div>

                <div>
                    <h4>community</h4>
                    <a href="/">GitHub</a>
                    <a href="/">Issues</a>
                    <a href="/">Project</a>
                    <a href="/">Twitter</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href="/">Support</a>
                    <a href="/">Troubleshooting</a>
                    <a href="/">Contact Us</a>
                </div>
                <div>
                    <h4>others</h4>
                    <a href="/">Terms of Services</a>
                    <a href="/">privacy Policy</a>
                    <a href="/">License</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;