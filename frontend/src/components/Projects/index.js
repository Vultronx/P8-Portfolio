import { useState, useEffect } from 'react';
import './style.scss';
import shapeBrown from '../../images/shape_brown.png';
import project1 from '../../images/projects/seo_nina2.png'
import jsonTest from "../../assets/logements.json";

function Projects() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/projects');
        if (response.ok) {
          const data = await response.json();
          console.log("data: ",data);
          setBooks(data);
        } else {
          console.error('Erreur lors de la récupération des données');
        }
      } catch (error) {
        console.error('Erreur réseau :', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div id="projects" className='projects'>
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
            <div className='card'> 
              <img className="cardCover" src={project1}></img>
              <div className="titleBar">
                <h5>Nina Carducci - SEO</h5>
              </div>
              <div className="cardMask"></div>
            </div>
            {books.map(book => (
              <div key={book.id} className='card'>
                <img className="cardCover" src={book.imageUrl}></img>           
                <div className="titleBar">
                  <h5>{book.title}</h5>
                </div>
                <div className="cardMask"></div>
                {/* Affichez d'autres propriétés du livre ici */}
              </div>
            ))}
        </div>
    </div>
  );
}

export default Projects