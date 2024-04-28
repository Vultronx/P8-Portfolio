import './style.scss';

function Contact() {
  return (
    <div className='contact'>
        <div className='contactForm'>
            <h2>Contact</h2>
            <form>
                <fieldset>
                    <label for="fname">Prénom :</label>
                    <input type="text" id="fname" name="fname"></input>
                    <label for="lname">Nom :</label>
                    <input type="text" id="lname" name="lname"></input>
                    <label for="mail">E-mail :</label>
                    <input type="mail" id="mail" name="mail"></input>
                    <label for="phone">Téléphone :</label>
                    <input type="phone" id="phone" name="phone"></input>
                    <label for="object">Objet :</label>
                    <input type="text" id="object" name="object"></input>
                    <label for="message">Message :</label>
                    <input type="text" id="message" name="message"></input>
                    <input type="submit" value="Envoyer"></input>
                </fieldset>
            </form>
        </div>
    </div>
  );
}

export default Contact