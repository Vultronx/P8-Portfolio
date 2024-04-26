import shapeRed from '../../images/shape_red.png';
import htmlIcon from '../../images/hardskills/html5-line.png'
import cssIcon from '../../images/hardskills/css3-line.png'
import jsIcon from '../../images/hardskills/javascript-line.png'
import nodeJsIcon from '../../images/hardskills/nodejs-line.png'
import reactJsIcon from '../../images/hardskills/reactjs-line.png'
import './style.scss';

function Skills() {
  return (
    <div className='skills'>
        <div className='title'>
            <img className='shapeRed' src={shapeRed}/>
            <h2>Compétences</h2>
        </div>
        <div className='subTitle'>
            <div className='softSkills'>
                <h3>Soft Skills</h3>
                <p>Identification des besoins</p>
                <p>Résolution de problèmes</p>
                <p>Sens de lorganisation</p>
                <p>Travail déquipe</p>
                <p>Adaptabilité</p>
                <p>Autonomie</p>
            </div>
            <div className='hardSkills'>
                <h3>Hard Skills</h3>
                <div className='hardSkillsIcons'>
                    <img className='hardSkillsIcon' src={htmlIcon}/>
                    <img className='hardSkillsIcon' src={cssIcon}/>
                    <img className='hardSkillsIcon' src={jsIcon}/>
                    <img className='hardSkillsIcon' src={nodeJsIcon}/>
                    <img className='hardSkillsIcon' src={reactJsIcon}/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Skills