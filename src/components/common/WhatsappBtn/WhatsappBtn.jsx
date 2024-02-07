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
      href="https://wa.me/26224566565"
      target="_blank"
      className="container-btn-wsp"
    >
      <WhatsAppIcon fontSize="string" />
    </a>
  );
};

export default WhatsappBtn;
