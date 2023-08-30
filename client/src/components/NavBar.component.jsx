export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Home</a>
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <div className="" id="">
                    <div className="navbar-nav flex flex-row">
                        <a className="nav-link active px-3" aria-current="page" href="#">About</a>
                        <a className="nav-link active px-3" href="#">Features</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
