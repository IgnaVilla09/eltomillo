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

export default function HuertasMobile() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="contentMobile">
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
            src="https://raw.githubusercontent.com/IgnaVilla09/eltomillo/main/src/assets/img/huertasorganicas.png"
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
              Gestión proyectos de agricultura urbana en el ámbito público y
              privado. Gestionamos un proyecto integral que abarca el diseño y
              la instalación de huertas orgánicas. Incluimos los insumos
              necesarios para llevar adelante un espacio con cultivos urbanos.
              Te acompañamos en el proceso inicial para garantizar que disfrutes
              de tu propia huerta de manera fácil y exitosa. ¿Qué incluye?
              Armado, instalación de la huerta. ¿Cuánto tiempo toma? Dependiendo
              del tamaño del proyecto.  ¿En dónde? Ciudad de Mendoza y
              alrededores.
            </Typography>
            <a href="" className="btn-serviceMobile">
              Pedinos un presupuesto
            </a>
          </DialogContent>
        </BootstrapDialog>
      </React.Fragment>
    </div>
  );
}
