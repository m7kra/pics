import logo from '../../images/logo-white.png';
import github from '../../images/github.png';
import './Header.css';

export default function Header () {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark position-absolute w-100' data-bs-theme='dark'>
            <div className='container-fluid'>
                <span className='navbar-brand' href='#'>
                    <img src={logo} alt="Logo" width="30" height="30" className="d-inline-block align-text-top me-2"/>
                    Pics
                </span>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0 w-100'>
                        <li className='nav-item me-auto'>
                            <a className='nav-link active' aria-current='page' href='https://m7kra.github.io/'>M7kra</a>
                        </li>
                        <div className='d-flex w-100' />
                        <li className='nav-item'>
                            <a className='nav-link active' aria-current='page' href='https://github.com/m7kra/pics'>
                                <img src={github} alt="Github" width="20" height="20" className="d-inline-block align-text-top github-image ms-2"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}