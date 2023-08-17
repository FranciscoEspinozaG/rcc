import { useEffect, useState } from "react"

export const useGerarLinkWsp = (textowsp) => {
    const [linkWsp, setLinkWsp] = useState('');
    
    const baseLinkWsp = 'https://wa.me/56979937858?text=';

    const textoSinEspacios = textowsp.replace(/\s/g, '%20');

    const createLinkWsp = () =>{
        setLinkWsp(`${baseLinkWsp}${textoSinEspacios}`)
    }

    useEffect(() => {
      createLinkWsp()
    },)

    return{
        linkWsp
    }
}