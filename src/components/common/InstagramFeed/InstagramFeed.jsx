import "./InstagramFeed.css";

const InstagramFeed = () => {
  return (
    <div className="container-instagram">
      <h2 className="subtitle-redes">Sigue mis proyectos en mis redes</h2>
      <div className="container-instagram_embed">
        <iframe
          width="100%"
          height="800px"
          src="https://www.instagram.com/eltomillomza/embed"
          frameBorder="#fff0"
        ></iframe>
      </div>
    </div>
  );
};

export default InstagramFeed;
