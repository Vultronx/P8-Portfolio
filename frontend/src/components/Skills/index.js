import shapeRed from '../../images/shape_red.png';
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
                <p>
                    Identification des besoins
                    Résolution de problèmes
                    Sens de lorganisation
                    Travail déquipe
                    Adaptabilité
                    Autonomie
                </p>
            </div>
            <div className='hardSkills'>
                <h3>Hard Skills</h3>
            </div>
        </div>
    </div>
  );
}

export default Skills