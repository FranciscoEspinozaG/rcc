export const SeoHomeSite = ({clases = ''}) => {
    return (
    <>
        <section className={clases}>
            <p>
                Optimiza tu experiencia automotriz con nuestro servicio de mecánico a domicilio. Ofrecemos revisión técnica, escaneo, diagnóstico, reparación y mantenimiento, todo desde la comodidad de tu hogar. Nuestros expertos te ahorran tiempo y preocupaciones al llevar el taller a ti. Además, si prefieres visitarnos, contamos con un taller ubicado en <a href="https://goo.gl/maps/CtHypeTgV52SHyFf8" className="text-danger fw-bold">Américo Vespucio #4290.</a> Precios transparentes y servicio confiable. ¡Programa una cita hoy y disfruta de un cuidado automotriz conveniente y de alta calidad! 
            </p>
            <div className="container d-flex flex-column p-0">
                <h3>Sigueme en mis redes sociales</h3>
                <ul className="justify-content-start list-unstyled d-flex gap-3">
                    <li>
                    <a className="text-body-primary text-danger" href="wa.me/56979937858">
                        <i className="bi bi-whatsapp"></i>
                    </a>
                    </li>
                    <li>
                    <a className="text-body-primary text-danger" href="https://www.facebook.com/profile.php?id=100095218568980">
                        <i className="bi bi-facebook"></i>
                    </a>
                    </li>
                    <li>
                    <a className="text-body-primary text-danger" href="https://www.instagram.com/rcc.mantenciones/">
                        <i className="bi bi-instagram"></i>
                    </a>
                    </li>
                </ul>
            </div>
        </section>
    </>
    )
}