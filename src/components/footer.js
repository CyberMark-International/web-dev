function Footer() {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className="footer">
        <footer className="py-5">
            <div className="container">
            <p className="m-0 text-center text-white">
                Copyright &copy; CyberMark {year}
            </p>
            </div>
        </footer>
        </div>
    );
}

export default Footer;