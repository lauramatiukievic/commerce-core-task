import Logo from "../gallery/logoipsum-logo-8 1.png"
import './footer.scss'
const Footer = () => {
    const links = ["Terms of Service", "Privacy Policy", "Returns", "FAQ"]
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="logo-and-title">
                    <img className="footer-logo" src={Logo} alt='logo' />
                    <div className='footer-info-content'>
                        {links.map((link) => (
                            <a key={link} className="footer-info" href="/#">{link}</a>
                        ))}
                    </div>
                </div>
                <span className="copyright">© 2022 MAXHDS. All  rights reserved</span>
            </div>

        </footer>
    )
}
export default Footer