import { Link } from 'react-router-dom'
import photo from '../../images/photo.png';
import shapesDesign from '../../images/shapes_design.png';
import shapeBrown from '../../images/shape_brown.png';
import '../../styles/App.scss';

function Home() {
  return (
    <div className="Home">
      <main className="App-body">
        <div className='aboutMe'>
          <img className="photo" src={photo} alt="Photo Gaëtan Gobin"/>
          <div className='description'>
            <h2>A propos de moi</h2>
            <p>Hello ! Je suis Gaëtan Gobin, développeur Web.</p>
            <p>Les compétences qui me définissent le plus sont : l’organisation, l’écoute et mes qualités relationnelles.</p>
            <p>Prêt à relever de nouveaux défis, je suis résolu à apporter des solutions efficaces et innovantes dans le développement web.</p>
          </div>
          <img className="shapesDesign" src={shapesDesign} alt="Shapes design"/>
        </div>
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
        <div className='skills'>
          <h2>Compétences</h2>
          <div className='softSkills'></div>
          <div className='hardSkills'></div>
        </div>
        <div className='contact'>
          <div className='contactForm'>
            <h2>Contact</h2>
            <form>
                <label for="fname">Prénom :</label>
                <input type="text" id="fname" name="fname"></input>
                <label for="lname">Nom :</label>
                <input type="text" id="lname" name="lname"></input>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
