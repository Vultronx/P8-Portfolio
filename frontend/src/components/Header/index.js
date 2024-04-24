import { NavLink } from 'react-router-dom'
import logo from '../../images/gaetan_gobin_logo.svg';
import aboutMeIcon from '../../images/user-line1.svg';
import projectsIcon from '../../images/code-box-line2.svg';
import skillsIcon from '../../images/git-repository-line.svg';
import contactIcon from '../../images/mail-line.svg';
import './style.scss';

function Header() {
    return (
            <header className='header'>
                <img className="logo" src={logo} alt="logo" />
                <nav className="navbar">
                    <img src={aboutMeIcon} /><NavLink className={({ isActive }) => isActive ? "navbar__link navbar__link--active" : "navbar__link"} to="/">A propos</NavLink>
                    <img src={projectsIcon} /><NavLink className={({ isActive }) => isActive ? "navbar__link navbar__link--active" : "navbar__link"} to="/projects">Projets</NavLink>
                    <img src={skillsIcon} /><NavLink className={({ isActive }) => isActive ? "navbar__link navbar__link--active" : "navbar__link"} to="/skills">Compétences</NavLink>
                    <img src={contactIcon} /><NavLink className={({ isActive }) => isActive ? "navbar__link navbar__link--active" : "navbar__link"} to="/contact">Contact</NavLink>
                </nav>
            </header>
    )
}

export default Header