import Slider from 'react-slick'
import { SlideItem } from './index'

export const SliderHome = () => {
    let setting = {
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    let servicios = [
        {
            titulo: 'Mantención y reparación',
            bajada: 'Mantención y reparación automotríz',
            img: './img/hombre-intenta-arreglar-moto-al-costado-carretera.jpg' ,
            textoBoton: 'Agendar',
            textoWsp: 'Hola, necesito el servicio de Motogrúa, tienes disponibilidad?',
            activo: true
        },
        {
            titulo: 'Escanner',
            bajada: 'Todas las marcas y modelos | OBD II',
            img: './img/mechanic-tools.jpg',
            textoBoton: 'Consultar',
            activo: true
        },{
            titulo: 'Servicio de Revisión Técnica',
            bajada: 'Gestión completa desde la puerta de su casa',
            img: './img/mechanic-work.jpg',
            activo: true
        }
    ]

    return (
        <>
        <Slider {...setting} className='slider-home'>
            {
                servicios.map( ({titulo, bajada, img, textoBoton, textoWsp}) => (
                    <SlideItem
                        key={titulo}
                        titulo={titulo}
                        bajada={bajada}
                        img={img}
                        textoBoton={textoBoton}
                        textoWsp={textoWsp}
                    />
                ))
            }
        </Slider>
        </>
    )
}
