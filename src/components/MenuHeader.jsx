import { useGerarLinkWsp } from "../hooks/useGerarLinkWsp";

export const MenuHeader = () => {

  const textoLinkWhatsapp = 'Hola! Tengo una consulta';

  const {linkWsp} = useGerarLinkWsp(textoLinkWhatsapp);

  return (
    <>
    <nav className="navbar navbar-expand-sm navbar-dark fixed-top" aria-label="Third navbar example">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="./rcc.svg" alt="RCC | Mechanics" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse navbar-dark" id="navbarsExample03">
          <ul className="navbar-nav ms-auto mb-2 mb-sm-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">Agenda</a>
            </li>
            <li className="nav-item">
              <a className="nav-link wsp-link" href={linkWsp} target='_blank' rel="noreferrer" aria-expanded="false">
                <p className="fw-bold">WhatsApp <i className="bi bi-whatsapp"></i></p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}
