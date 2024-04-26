import './style.scss';
import shapeBrown from '../../images/shape_brown.png';

function Projects() {
  return (
    <div className='projects'>
        <div className='title'>
            <img className='shapeBrown' src={shapeBrown}/>
            <h2>Projets</h2>
        </div>
        <div className='filterMenu'>
            <button>Tous</button>
            <button>Backend</button>
            <button>Frontend</button>
            <button>SEO</button>
        </div>
        <div className='cards'>
            <div className='card'></div>
            <div className='card'></div>
            <div className='card'></div>
            <div className='card'></div>
            <div className='card'></div>
        </div>
    </div>
  );
}

export default Projects