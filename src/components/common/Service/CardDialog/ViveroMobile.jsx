import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function ViveroMobile() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="contentMobile-Right">
      <React.Fragment>
        <Button variant="outlined" color="success" onClick={handleClickOpen}>
          Ver más
        </Button>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <img
            src="https://raw.githubusercontent.com/IgnaVilla09/eltomillo/main/src/assets/img/viverocircular.png"
            alt=""
            className="img-subtitle-box"
          />
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent dividers>
            <Typography gutterBottom>
              Un espacio ecológico para la creación de proyectos circulares. En
              nuestro local, convergen la eficiencia de la economía circular y
              la vitalidad de un vivero no convencional. El Vivero es un espacio
              colectivo en dónde podés comprar local y de forma sustentable,
              conociendo sobre economía circular y redes de emprendimiento.  ¿En
              dónde estamos? Dorrego 1496, Guaymallén, Mendoza – Argentina.
              ¿Cómo llegar? Ir a Google Maps. ¿En qué horarios? Estamos de Lunes
              a Viernes. Por la mañana con cita previa y por las tardes de
              16:30-20:30. Los días sábados de 09:30-13:30.
            </Typography>
            <a
              href="https://api.whatsapp.com/send?phone=5492615970583&text=%C2%A1Hola,%20Laura!%20Vi%20tu%20p%C3%A1gina%20y%20quiero%20hacerte%20unas%20consultas…"
              target="_blank"
              className="btn-serviceMobile"
            >
              Agenda tu visita
            </a>
          </DialogContent>
        </BootstrapDialog>
      </React.Fragment>
    </div>
  );
}
