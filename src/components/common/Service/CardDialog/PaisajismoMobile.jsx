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

export default function PaisajismoMobile() {
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
            src="https://raw.githubusercontent.com/IgnaVilla09/eltomillo/main/src/assets/img/paisajismo.png"
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
              Diseño de jardines residenciales y otros espacios verdes.
              Diseñamos jardines residenciales con una impronta ecológica de
              acuerdo a tu espacio y necesidades. Priorizamos el cuidado del
              ambiente en cada diseño y te asesoramos en la selección de
              plantas, macetas y otras decoraciones; buscando la mejor
              distribución de especies para que las plantas permanezcan sanas y
              vibrantes de manera orgánica.  ¿Qué incluye? Gestión del diseño y
              la ejecución. ¿Cuánto tiempo toma? Dependiendo del tamaño del
              proyecto. ¿En dónde? Ciudad de Mendoza y alrededores.
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
