import { useGerarLinkWsp } from "../hooks/useGerarLinkWsp";

export const FooterSite = () => {

  const textoLinkWhatsapp = 'Hola! Necesito hacer una consulta';

  const {linkWsp} = useGerarLinkWsp(textoLinkWhatsapp);

  return (
    <>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 mt-4 border-top bg-dark text-white">
        <div className="container-fluid d-flex flex-wrap justify-content-around">

          <div className="col-md-4 d-flex align-items-center">
            <a href="#" className="mb-3 me-2 mb-md-0 text-body-primary text-decoration-none lh-1">
              <img src="./rcc.svg" alt="RCC Mechanics" width={50}/>
            </a>
            <span className="mb-3 mb-md-0 text-body-primary">2023 RCC | Mechanics</span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a className="text-body-primary text-danger" href={linkWsp}>
                <i className="bi bi-whatsapp"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-body-primary text-danger" href="https://www.facebook.com/profile.php?id=100095218568980">
                <i className="bi bi-facebook"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-body-primary text-danger" href="https://www.instagram.com/rcc.mantenciones/">
                <i className="bi bi-instagram"></i>
              </a>
            </li>
          </ul>

          <div className="d-flex justify-content-center my-4 col-12">
              <img src="./img/transbank-red-compra-tarjeta-debito-credito.webp" alt="Mecanico tarjeta de credito" className="img-fluid col-8 col-md-2 m-auto" />
          </div>
        </div>
      </footer>
    </>
  )
}
