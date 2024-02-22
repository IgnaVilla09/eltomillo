import React, { useEffect } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "./WhatsappBtn.css";

const WhatsappBtn = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      const btn = document.querySelector(".container-btn-wsp");
      if (btn) {
        btn.classList.toggle("vibrating");
      }
    }, 1000); // Cambia este valor según la frecuencia deseada en milisegundos

    return () => clearInterval(interval);
  }, []);
  return (
    <a
      href="https://api.whatsapp.com/send?phone=5492615970583&text=%C2%A1Hola,%20Laura!%20Vi%20tu%20p%C3%A1gina%20y%20quiero%20hacerte%20unas%20consultas…"
      target="_blank"
      className="container-btn-wsp"
    >
      <WhatsAppIcon fontSize="string" />
    </a>
  );
};

export default WhatsappBtn;
