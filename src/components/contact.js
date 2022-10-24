import { useState } from "react";
import { useExpandSection } from "../hooks/useExpandSection";
//import { useForm } from "react-hook-form";
import { NetlifyForm, Honeypot } from 'react-netlify-forms'
//import Swal from "sweetalert2";
//import db from "../firebase/database";
//import { collection } from "firebase/firestore";

import "../styles/contact.scss";

import Email from "../icons/email.svg";
import WhatsApp from "../icons/whatsapp.svg";
import Location from "../icons/location.svg";

const Contact = ({ returnSection, color }) => {
  const [boolean, setBoolean] = useState(false);
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [assunto, setAssunto] = useState("");
  // const [message, setMessage] = useState("");
  // const { register } = useForm();
  //const clientsCollectionRef = collection(db, "Clientes");
  const expand = useExpandSection(boolean);

  // const onSubmit = async (userData) => {
  //   console.log(userData);

  //   try {
  //     Swal.fire({
  //       text: "Formulário enviado com sucesso!",
  //       icon: "success",
  //       showConfirmButton: true,
  //       confirmButtonColor: "#fea22be6",
  //     }).then(async (result) => {
  //       if (result.isConfirmed) {
  //         await addDoc(clientsCollectionRef, userData);
  //         document.location.reload(true);
  //       }
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
      <NetlifyForm name='Contact' action='/thanks' honeypotName='bot-field' className="form-contact">
      {({ handleChange, success, error }) => (
      <>
        <Honeypot />
        {success && <p>Thanks for contacting us!</p>}
        {error && (
          <p>Sorry, we could not reach our servers. Please try again later.</p>
        )}
        <input
          className="input-contact"
          type="text"
          placeholder="Nome*"
          onChange={handleChange}
          required
        />
        <input
          className="input-contact"
          type="mail"
          placeholder="Email*"
          onChange={handleChange}
          required
        />
        <input
          className="input-contact"
          type="text"
          placeholder="Assunto*"
          onChange={handleChange}
          required
        />
        <textarea
          className="input-contact"
          cols="10"
          rows="5"
          placeholder="Mensagem*"
          onChange={handleChange}
          required
        ></textarea>
        <span>
          Os campos com <strong>*</strong> são obrigatórios.
        </span>
        <button
          className="btn-contact"
          type="submit"
          // disabled={
          //   name.length <= 1 ||
          //   assunto.length <= 1 ||
          //   email.indexOf("@") === -1 ||
          //   message.length <= 3
          // }
        >ENVIAR</button>
         </>
        )}
        </NetlifyForm>
      <div className="additional-contact">
        <div className="tooltip" onClick={() => window.open('mailto:bruno2014mineiro@gmail.com', '_blank').focus()}>
          <span className="tooltiptext">Clique aqui para enviar um email</span>
          <img src={Email} alt="" />
          <h4>Envie um email</h4>
          <p>bruno2014mineiro@gmail.com</p>
        </div>
        <div className="tooltip" onClick={() => window.open('https://wa.me/5515991573088?text=Ol%C3%A1,%20gostaria%20de%20entrar%20em%20contato!', '_blank').focus()}>
          <span className="tooltiptext">Clique aqui para enviar uma mensagem via Whatsapp</span>
          <img src={WhatsApp} alt="" />
          <h4>Mensagem ou ligação via WhatsApp</h4>
          <p>+55 (15) 991573088</p>
        </div>
        <div className="tooltip" onClick={() => window.open('https://goo.gl/maps/QyimYSGs1XhfBBn87', '_blank').focus()}>
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
