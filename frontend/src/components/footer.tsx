export interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = () => {
    return (
        <>  
        <footer className="footer">
            <ul className="social-icon">
                <li className="social-icon__item"><a className="social-icon__link" href="#">
                    <i className="la la-facebook"></i>
                </a></li>
                <li className="social-icon__item"><a className="social-icon__link" href="#">
                    <i className="la la-twitter"></i>
                </a></li>
                <li className="social-icon__item"><a className="social-icon__link" href="#">
                    <i className="la la-instagram"></i>
                </a></li>
                <li className="social-icon__item"><a className="social-icon__link" href="#">
                    <i className="lab la-discord"></i>
                </a></li>
            </ul>
            <p>&copy;2021 DevelopWright</p>
            <p>All Rights Reserved</p>
            <p>Icons by <a href="icons8.com">icons8</a></p>
        </footer>
        </>
    )
}

export default Footer