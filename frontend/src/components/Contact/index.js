import './style.scss';

function Contact() {
  const onSubmit = async (data) => {
    //const newContact = await addContact(data);
  };

  return (
    <div id="contact" className='contact'>
      <div className='contactForm'>
        <h2>Contact</h2>
        <form onSubmit={onSubmit}>
          <div className="fieldset">
            <div className="inputLeft">
              <label htmlFor="fname">Nom :</label>
              <input type="text" id="fname" name="fname" required></input>
            </div> 
            <div className="inputRight">
              <label htmlFor="lname">Prénom :</label>
              <input type="text" id="lname" name="lname" required></input>
            </div>
            <div className="inputLeft">
              <label htmlFor="email">E-mail :</label>
              <input type="email" id="email" name="email" required></input>
            </div>
            <div className="inputRight">
              <label htmlFor="phone">Téléphone :</label>
              <input type="phone" id="phone" name="phone" required></input>
            </div>
            <div className="input">
              <label htmlFor="object">Objet :</label>
              <input type="text" id="object" name="object" required></input>
            </div>
            <div className="input">
              <label htmlFor="message">Message :</label>
              <textarea rows="8" cols="65" name="message" placeholder="" required></textarea>
            </div>
            <input type="submit" value="Envoyer"></input>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact