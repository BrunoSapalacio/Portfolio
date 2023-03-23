import { useState } from "react";
import { useExpandSection } from "../hooks/useExpandSection";
import Swal from "sweetalert2";
import emailjs from '@emailjs/browser';

// Css
import "../styles/_contact.scss";

// Icones
import Email from "../icons/email.svg";
import WhatsApp from "../icons/whatsapp.svg";
import Location from "../icons/location.svg";

const Contact = ({ returnSection, color }) => {
  const [boolean, setBoolean] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const expand = useExpandSection(boolean);

  const Send = (e) => {
    e.preventDefault();
      const templateParams = {
        from_name: name,
        message: message,
        subject: subject,
        email: email,
      }
      emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_PUBLIC_KEY')
      .then((response) => {
        Swal.fire({
          title: "Agradecemos pelo contato! 😄",
          html: "Formulário enviado com sucesso.<br/> Em breve iremos entrar em contato.",
          icon: "success",
          showConfirmButton: true,
          confirmButtonColor: "#fea22be6",
        });
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      }, (error) => {
        console.log(error.text);
      })
  };

  return (
    <section
      className="contact animate__animated animate__slideInLeft"
      style={expand}
    >
      <div>
        <button
          className="expand-section"
          onClick={() =>
            boolean === false ? setBoolean(true) : setBoolean(false)
          }
        ></button>
        <button className="close-section" onClick={returnSection}></button>
      </div>
      <h5>CONTATO</h5>
      <h1 style={{ color: color }}>Entre em contato</h1>
      <p>
        Preencha o formulário abaixo ou clique nas opções adicionais de contato
        para poder entrar em contato comigo.
      </p>
      <form onSubmit={Send} className="form-contact">
        <input
          className="input-contact"
          value={name || ''}
          type="text"
          placeholder="Nome*"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="input-contact"
          value={email || ''}
          type="mail"
          placeholder="Email*"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="input-contact"
          value={subject || ''}
          type="text"
          placeholder="Assunto*"
          onChange={(e) => setSubject(e.target.value)}
          required
        />
        <textarea
          className="input-contact"
          value={message || ''}
          cols="10"
          rows="5"
          placeholder="Mensagem*"
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <span>
          Os campos com <strong>*</strong> são obrigatórios.
        </span>
        <input
          className="btn-contact"
          type="submit"
          value="ENVIAR"
          disabled={
            name.length <= 1 ||
            subject.length <= 1 ||
            email.indexOf("@") === -1 ||
            message.length <= 3
          }
        />
      </form>
      <div className="additional-contact">
        <div
          className="tooltip"
          onClick={() =>
            window.open("mailto:bruno2014mineiro@gmail.com", "_blank").focus()
          }
        >
          <span className="tooltiptext">Clique aqui para enviar um email</span>
          <img src={Email} alt="" />
          <h4>Envie um email</h4>
          <p>bruno2014mineiro@gmail.com</p>
        </div>
        <div
          className="tooltip"
          onClick={() =>
            window
              .open(
                "https://wa.me/5515991573088?text=Ol%C3%A1,%20gostaria%20de%20entrar%20em%20contato!",
                "_blank"
              )
              .focus()
          }
        >
          <span className="tooltiptext">
            Clique aqui para enviar uma mensagem via Whatsapp
          </span>
          <img src={WhatsApp} alt="" />
          <h4>Mensagem ou ligação via WhatsApp</h4>
          <p>+55 (15) 991573088</p>
        </div>
        <div
          className="tooltip"
          onClick={() =>
            window
              .open("https://goo.gl/maps/QyimYSGs1XhfBBn87", "_blank")
              .focus()
          }
        >
          <span className="tooltiptext">Ver Localização</span>
          <img src={Location} alt="" />
          <h4>Localização</h4>
          <p>Tietê, São Paulo - Brasil</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
