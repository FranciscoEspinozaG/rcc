export const SlideItem = ({img = 'https://dummyimage.com/600x400/000/fff', titulo, bajada = '', boton = '', linkBoton='#'}) => {

  var itemImage = {
    backgroundImage: `url(${img})`
  };

  return (
    <div className="slide-item" style={itemImage}>
      <div className="slide-item__contenido d-flex flex-column justify-content-center align-items-end text-white text-uppercase p-5">
        <h2 className="mt-5 col-md-5 text-end rounded">{titulo}</h2>
        {bajada !== '' &&
          <p className="rounded mb-2">{bajada}</p>
        }
        {boton !== '' &&
          <a href={linkBoton.replace(/\s/g, '%20')} className="btn btn-danger" target="_blank" rel="noreferrer">
            {boton}
          </a>
        }
      </div>
    </div>
  )
}
