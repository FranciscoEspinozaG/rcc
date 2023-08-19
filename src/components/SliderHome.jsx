import Slider from 'react-slick'
import { SlideItem } from './index'
import { useState } from 'react'

export const SliderHome = () => {

    const [servicios, setServicios] = useState([]);

    let setting = {
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    const getServicios = async()=>{
        try{
            const response = await fetch('http://localhost:5173/data/servicios.json');
            const data = await response.json();
            setServicios(data);
        }catch (error){
            console.log(error);
        }
    }

    getServicios();

    return (
        <>
        <Slider {...setting} className='slider-home'>
            {
                servicios.map( ({titulo, bajada, img, textoBoton, textoWsp, id}) => (
                    <SlideItem
                        key={id}
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
