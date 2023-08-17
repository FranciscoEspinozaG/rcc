import { useGerarLinkWsp } from "../hooks/useGerarLinkWsp";

export const SlideItem = ({activo, img = 'https://dummyimage.com/600x400/000/fff', titulo, bajada = '',  textoBoton = '', textoWsp = 'Hola! Neesito agendar un servicio' }) => {

  var itemImage = {
    backgroundImage: `url(${img})`
  };

  const {linkWsp} = useGerarLinkWsp(textoWsp)

  return (
    <div className="slide-item" style={itemImage}>
      <div className="slide-item__contenido d-flex flex-column justify-content-center align-items-end text-white text-uppercase p-5">
        <h2 className="mt-5 col-md-5 text-end rounded">{titulo}</h2>
        {bajada !== '' &&
          <p className="rounded mb-2 text-end">{bajada}</p>
        }
        {textoBoton !== '' &&
          <a href={linkWsp} className="btn btn-danger" target="_blank" rel="noreferrer">
            {textoBoton}
          </a>
        }
      </div>
    </div>
  )
}
