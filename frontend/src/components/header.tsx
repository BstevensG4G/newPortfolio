export interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = () => {
    return (
        <>  
        <header>
            <div className="bannerText">
                <h1>DevelopWright</h1>
                <h3>Software Development Services</h3>               
            </div>
        </header>
        </>
    )
}

export default Header