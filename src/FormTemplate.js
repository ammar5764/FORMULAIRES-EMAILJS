import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './FormTemplate.css'

export const FormTemplate = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        var formMess = document.querySelector(".form-message");
        console.log(formMess);

        emailjs.sendForm('service_74u5hvp', 'template_uk43yzd', form.current,process.env.REACT_APP_ID )//POUR CACHER LE TOKEN CREER A LA RACINE DU PROJET UN FICHIER .env ET METTRE PAR CONVENTION REACT_APP_D= ET METTRE LE TOKEN SANS GUILLEMETS,ETEINDRE LE TERMINAL ET TAPER A LA PLACE DU TOKEN CECI
            .then((result) => {
                console.log(result.text)
                form.current.reset()//dans le then de la fonction sendEmail je remets tout les champs a zero
                formMess.innerHTML = '<p class="success">le message a ete envoye</p>'
                setTimeout(() => {
                    formMess.innerHTML = ""
                }, 2500);
            }, (error) => {
                console.log(error.text);
                formMess.innerHTML = "<p class=`echec`>une erreur est survenue veuillez reessayer</p>"
                setTimeout(() => {
                    formMess.innerHTML = ""
                }, 2500);
            });
    };

    return (
        <div className="form-container">
            <form ref={form} onSubmit={sendEmail}>
                <div className="form-group">
                    <label htmlFor='name'>Name</label>
                    <input type="text" name="name" required className="form-control" placeholder='entrez votre nom' />
                </div>
                {/* name correspond au {{name}} qu j'ai mis dans le site emailjs(email complate de meme email etc...)  */}
                <div className="form-group">
                    <label htmlFor='email'>Email</label>
                    <input type="email" name="email" required placeholder="Enter email" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor='message'>Message</label>
                    <textarea name="message" className="form-control" />
                </div>
                <input type="submit" value="Send" className="btn btn-primary" />
            </form>
            <div className="form-message">

            </div>
        </div>
    );
};





