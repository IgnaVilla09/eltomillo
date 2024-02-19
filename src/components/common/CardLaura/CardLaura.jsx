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
import "./CardLaura.css";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const CardLaura = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="card-container">
      <p className="text-introduction">
        Huertas sostenibles, paisajismo inspirador y experiencias ecológicas que
        logran <span>fusionar</span> la modernidad de la ciudad con la vitalidad
        de la <span>naturaleza</span>
      </p>
      <div className="card-container_presentation">
        <div className="card-container_presentation--textarea">
          <img
            src="https://raw.githubusercontent.com/IgnaVilla09/eltomillo/main/src/assets/img/Hola.png"
            alt="¡Hola!"
            className="img-saludo"
          />
          <div className="contenido">
            <p>
              Mi nombre es Laura, soy la creadora de El Tomillo. Tengo
              experiencia en el diseño de espacios verdes con impronta ambiental
              y huertas urbanas. Mi sueño es llenar ciudades enteras con
              jardines comestibles, combinando mi pasión por el paisajismo con
              mis habilidades para la agricultura sostenible.
            </p>
            <p>
              Esta aventura comenzó con el deseo de cambiar mis hábitos para
              tener una vida más sustentable. Estudié una Técnica Universitaria
              en Gestión de Empresas e hice varios estudios en diseño,
              arquitectura del paisaje, agroecología, agricultura sostenible y
              gestión contra el cambio climático... ¡Y ahora puedo compartir mi
              experiencia con personas y empresas que tengan el mismo interés!
            </p>
            <p>
              Trabajo con un enfoque agro urbano que se refleja en cada uno de
              mis proyectos, desde el vivero, talleres o encuentros hasta el
              diseño jardines corporativos. Así sembré El Tomillo, para que sea
              la raíz de una visión: un espacio en el que la naturaleza y la
              ciudad coexisten, creando armonía entre belleza y funcionalidad.
            </p>
            <p>
              Porque para mí, cada planta tiene una historia que va más allá de
              la estética y cada espacio urbano debe ser producto del diseño
              ecológico y la planeación sostenible.
            </p>
            <p>
              Gracias por tu interés, ¡espero podamos trabajar juntos cultivando
              plantas y cosechando experiencias!
            </p>
          </div>
        </div>
        <div className="card-container_presentation--textareaMobile">
          <img
            src="https://raw.githubusercontent.com/IgnaVilla09/eltomillo/main/src/assets/img/lauratomillo.jpg"
            alt="Laura"
            className="card-container_presentation--laura"
          />
          <img
            src="https://raw.githubusercontent.com/IgnaVilla09/eltomillo/main/src/assets/img/Hola.png"
            alt="¡Hola!"
            className="img-saludo-mobile"
          />
          <div className="contenido-mobile">
            <p>
              Mi nombre es Laura, soy la creadora de El Tomillo. Tengo
              experiencia en el diseño de espacios verdes con impronta ambiental
              y huertas urbanas. Mi sueño es llenar ciudades enteras con
              jardines comestibles, combinando mi pasión por el paisajismo con
              mis habilidades para la agricultura sostenible.
            </p>
          </div>
          <div className="box-dialog">
            <React.Fragment>
              <Button variant="text" color="success" onClick={handleClickOpen}>
                Ver más
              </Button>
              <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
              >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                  <img
                    src="https://raw.githubusercontent.com/IgnaVilla09/eltomillo/main/src/assets/img/Hola.png"
                    alt=""
                    className="saludo-alert"
                  />
                </DialogTitle>
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
                  <Typography gutterBottom sx={{ padding: "5px 50px" }}>
                    Mi nombre es Laura, soy la creadora de El Tomillo. Tengo
                    experiencia en el diseño de espacios verdes con impronta
                    ambiental y huertas urbanas. Mi sueño es llenar ciudades
                    enteras con jardines comestibles, combinando mi pasión por
                    el paisajismo con mis habilidades para la agricultura
                    sostenible.
                  </Typography>
                  <Typography gutterBottom sx={{ padding: "5px 50px" }}>
                    Esta aventura comenzó con el deseo de cambiar mis hábitos
                    para tener una vida más sustentable. Estudié una Técnica
                    Universitaria en Gestión de Empresas e hice varios estudios
                    en diseño, arquitectura del paisaje, agroecología,
                    agricultura sostenible y gestión contra el cambio
                    climático... ¡Y ahora puedo compartir mi experiencia con
                    personas y empresas que tengan el mismo interés!
                  </Typography>
                  <Typography gutterBottom sx={{ padding: "5px 50px" }}>
                    Trabajo con un enfoque agro urbano que se refleja en cada
                    uno de mis proyectos, desde el vivero, talleres o encuentros
                    hasta el diseño jardines corporativos. Así sembré El
                    Tomillo, para que sea la raíz de una visión: un espacio en
                    el que la naturaleza y la ciudad coexisten, creando armonía
                    entre belleza y funcionalidad.
                  </Typography>
                  <Typography gutterBottom sx={{ padding: "5px 50px" }}>
                    Porque para mí, cada planta tiene una historia que va más
                    allá de la estética y cada espacio urbano debe ser producto
                    del diseño ecológico y la planeación sostenible.
                  </Typography>
                  <Typography gutterBottom sx={{ padding: "5px 50px" }}>
                    Gracias por tu interés, ¡espero podamos trabajar juntos
                    cultivando plantas y cosechando experiencias!
                  </Typography>
                </DialogContent>
              </BootstrapDialog>
            </React.Fragment>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLaura;
