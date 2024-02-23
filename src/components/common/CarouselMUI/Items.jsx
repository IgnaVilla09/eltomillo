import { Paper } from "@mui/material";
function Item({ item }) {
  return (
    <Paper>
      <div className="carousel-cards-items">
        <img
          src={item.image}
          alt={item.name}
          style={{ height: "800px", width: "100%", objectFit: "cover" }}
          className="backgroundCard"
        />
        <img
          src="https://raw.githubusercontent.com/IgnaVilla09/eltomillo/main/src/assets/img/vector.png"
          alt=""
          className="vector-green"
        />
        <div className="description-card">
          <h4>{item.name}</h4>
          <img
            src="https://raw.githubusercontent.com/IgnaVilla09/eltomillo/main/src/assets/img/vectorplanta.png"
            alt=""
            className="vector-planta"
          />
        </div>
      </div>
    </Paper>
  );
}

export default Item;
