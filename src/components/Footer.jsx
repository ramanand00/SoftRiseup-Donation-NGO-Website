import '../css/footer.css';

export default function Footer() {
    return (
        < div className="footer" >
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-contact">
                            <h2>Contact Us</h2>
                            <a href="https://maps.app.goo.gl/HQg6gMPpAJ445cda6" target="_blank" rel="noopener noreferrer"><p><i className="fa fa-map-marker-alt"></i>Rajbiraj, Saptari, Nepal</p></a>
                            <a href="tel:+977-9827399860"><p><i className="fa fa-phone"></i>+977-9827399860</p></a>
                            <a href="mailto:softriseup@gmail.com"><p><i className="fa fa-envelope"></i>softriseup@gmail.com</p></a>
                            <div className="footer-social">
                                <a className="btn btn-custom" href="https://x.com/csit_ramanand"><i className="fab fa-x-twitter"></i></a>
                                <a className="btn btn-custom" href="https://www.facebook.com/profile.php?id=100058685671028"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-custom" href="https://www.instagram.com/ramanand_mandal_001/"><i className="fab fa-instagram"></i></a>
                                <a className="btn btn-custom" href="https://wa.me/qr/EDX2TYEA7FIQB1"><i className="fab fa-whatsapp"></i></a>
                                <a className="btn btn-custom" href="https://www.linkedin.com/in/ramanand-mandal-24a124324/"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-link">
                            <h2>Popular Links</h2>
                            <a href="/about">About Us</a>
                            <a href="/contact">Contact Us</a>
                            <a href="/event">Popular Causes</a>
                            <a href="/event">Upcoming Events</a>
                            <a href="#">Latest Blog</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-link">
                            <h2>Useful Links</h2>
                            <a href="#">Terms of use</a>
                            <a href="#">Privacy policy</a>
                            <a href="#">Cookies</a>
                            <a href="#">Help</a>
                            <a href="#">FQAs</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-newsletter">
                            <h2>Newsletter</h2>
                            <form name='NewsLetter'>
                                <input name='subscribe' className="form-control" placeholder="Email goes here" autoComplete='email' required/>
                                <button className="btn btn-custom">Submit</button>
                                <h6>Don't worry, we don't spam!</h6>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container copyright">
                <div className="row">
                    <div className="col-md-6">
                        <p>&copy; <a href="#">SoftRiseup</a> | 2024, All Right Reserved.</p>
                    </div>
                    <div className="col-md-6">
                        <p>Designed By <a href="https://www.facebook.com/profile.php?id=100058685671028">SoftRiseup, Rajbiraj, Nepal</a></p>
                    </div>
                </div>
            </div>
        </ div>
    );
}