
const Footer = () => {
    return (
        <div className="lg:m-8">
            <footer className="footer p-10 bg-base-200">
                <aside>
                    
                    <h1 className="lg:text-3xl text-xl font-bold">CareerHub</h1>
                    <p>There are many variations of passages of Lorem Ipsum ,<br /> but the majority have suffered alteration in some form.</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Work</a>
                    <a className="link link-hover">Latest News</a>
                    <a className="link link-hover">Careers</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Product</h6>
                    <a className="link link-hover">Prototype</a>
                    <a className="link link-hover">Plans & Pricing</a>
                    <a className="link link-hover">Customers</a>
                    <a className="link link-hover">Integrations</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Support</h6>
                    <a className="link link-hover">Help Desk</a>
                    <a className="link link-hover">Sales</a>
                    <a className="link link-hover">Become a Partner</a>
                    <a className="link link-hover">Developers</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;