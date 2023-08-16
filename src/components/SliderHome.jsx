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

    return (
        <>
        <Slider {...setting} className='slider-home'>
            <SlideItem 
                titulo='Motogrúa'
                img='./img/hombre-intenta-arreglar-moto-al-costado-carretera.jpg' 
                boton='Agendar'
                bajada='Traslado en la RM y al rededores'
                linkBoton='//wa.me/56979937858?text=Hola, necesito el servicio de Motogrúa, tienes disponibilidad?'
            />
            <SlideItem
                titulo='Escanner a domicilio'
                img='./img/mechanic-tools.jpg'
                bajada='Todas las marcas y modelos | OBD II'
                boton='Consultar'
            />
            <SlideItem
                titulo='Servicio de Revisión Técnica'
                img='./img/mechanic-work.jpg'
            />
        </Slider>
        </>
    )
}
