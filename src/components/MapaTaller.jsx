export const MapaTaller = ({clases}) => {

    const linkGoogleMaps = 'https://goo.gl/maps/CtHypeTgV52SHyFf8';
    const linkWaze = 'https://www.waze.com/ul?ll=-33.496122%2C-70.584286&navigate=yes&zoom=17';
    

    return (
        <>
        <section className={clases}>
            <a href={linkGoogleMaps} target='_blank' rel="noreferrer">
                <img src="./img/mapa.png" alt="RCC | Mechanics" className="img-fluid" />
            </a>
            <div className="gap-3 mt-4 d-flex flex-wrap justify-content-between">
                <a href={linkGoogleMaps} className="btn btn-danger" target='_blank' rel="noreferrer">Ir con Google Maps</a>
                <a href={linkWaze} className="btn btn-danger" target='_blank' rel="noreferrer">Ir con Waze</a>
            </div>
        </section>
        </>
    )
}