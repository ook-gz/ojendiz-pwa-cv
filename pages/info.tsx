import React from 'react'
import Foto from '../public/img/FotoOjendiz.jpg';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Info = () => {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}>
      <div className='row p-5'>
        <article className='col-sm-3 p-2'>
          <Image className="img-fluid" src={Foto} alt="Foto de Ojendiz" width={250}/>
        </article>
        <article className='col-sm-9 p-2'>
          <h1>Sobre mí:</h1>
          <p className='text-justify'>Cuento con capacidad de auto aprendizaje, esto para alcanzar mejores índices de productividad 
            para la empresa.</p>
          <div>
            <h4>Nombre: <span className='text-muted'>Ojendiz Guzman Carlos Enrique.</span></h4>
            <h4>Fecha de nacimiento: <span className='text-muted'>Febrero 26, 2000.</span></h4>
            <h4>Lugar de nacimiento: <span className='text-muted'>Acapulco de Juarez, Guerrero, México.</span></h4>
            <h4>Pasatiempos:</h4>
            <ul>
              <li>Caminar.</li>
              <li>Componer música.</li>
              <li>Escribir.</li>
              <li>Andar en patineta.</li>
            </ul>

          </div>
        </article>
      </div>
    </motion.div>
  )
}

export default Info;
