import React from 'react'
import { motion } from 'framer-motion';

const Curriculum = () => {
  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }
  
  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  }
  
  const progresswithd = {
    width: "75%"
  }

  const progresswithd2 = {
    width: "70%"
  }


  const progresswithd3 = {
    width: "55%"
  }


  return (
    <>
      <h1 className='text-center'>Curriculum</h1>
      <div className='row p-4'>

      <section className='col-sm-2'>
        <div className='menu menu-sticky'>
          <ul className="nav d-flex flex-column">
              <li className="nav-item">
                <a className="nav-link" href="#educacion">Educación</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#exp">Experiencia</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">Habilidades</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#rec">Reconocimientos</a>
              </li>
          </ul>
        </div>
      </section>
      <section className='col-sm-10'>
      <motion.div initial="hidden" animate="visible" variants={list}>
      <motion.article variants={item}>
        <article>
          <h3 id="educacion">Educación</h3>

          <div className='p-2'>
            <div className="card">
              <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted">2015 - 2018</h6>
                <h4 className="card-title">
                  Carrera tecnica en ofimatica.
                </h4>
                <h5 className="card-title">
                  CETIS 116.
                </h5>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted">2018 - 2021</h6>
                <h4 className="card-title">
                  T.S.U en Tecnologías de la información y comunicación.
                </h4>
                <h5 className="card-title">
                  Universidad Tecnológica de Acapulco.
                </h5>            
              </div>
            </div>

            <div className="card">
              <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted">2021 - 2023</h6>
                <h4 className="card-title">
                  Ingeniería en Desarrollo y Gestión de Software.
                </h4>
                <h5 className="card-title">
                  Universidad Tecnológica de Acapulco.
                </h5>            
              </div>
            </div>
          </div>
        </article>
      </motion.article>
      <motion.article variants={item}>
        <article>
          <h3 id="exp">Experiencia</h3>

          <div className='p-2'>
            <div className="card">
              <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted">2015 - presente</h6>
                <h4 className="card-title">
                  Ayudante de herreria y aluminieria.
                </h4>
                <h5 className="card-title">
                  Herreria y aluminio Cayaco.
                </h5>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted">2018</h6>
                <h4 className="card-title">
                  Practicante en area de recursos humanos de ventas.
                </h4>
                <h5 className="card-title">
                  Mayan Palace.
                </h5>            
              </div>
            </div>

            <div className="card">
              <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted">2018</h6>
                <h4 className="card-title">
                  Ayudante de cocina.
                </h4>
                <h5 className="card-title">
                  Lucky Ducky.
                </h5>            
              </div>
            </div>

            <div className="card">
              <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted">2021</h6>
                <h4 className="card-title">
                  Auxuliar en taller de carpinteria y diseño.
                </h4>
                <h5 className="card-title">
                  VISE.
                </h5>            
              </div>
            </div>

            <div className="card">
              <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted">2022</h6>
                <h4 className="card-title">
                  Auxuliar de limpieza en SPA.
                </h4>
                <h5 className="card-title">
                  La isla residences.
                </h5>            
              </div>
            </div>
          </div>
        </article>
      </motion.article>
      <motion.article variants={item}>
        <article>
          <h3 id="skills">Habilidades</h3>
          <div className='row'>

            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Javascript</h5>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" 
                    style={progresswithd} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">75%</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
            <div className="card">
                <div className="card-body">
                  <h5 className="card-title">SQL</h5>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" 
                    style={progresswithd2} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">70%</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">PHP</h5>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" 
                    style={progresswithd3} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">55%</div>
                  </div>
                </div>
                </div>
              </div>
            </div>
        </article>
      </motion.article>
      <motion.article variants={item}>
        <article>
          <h3 id="rec">Reconocimientos</h3>
          <div className="card">
              <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted">2021</h6>
                <h4 className="card-title">
                  Segundo lugar a nivel estatal.
                </h4>
                <h5 className="card-title">
                  Segundo congreso estatal de las universidades tecnológicas de Guerrero.
                </h5>            
              </div>
            </div>
        </article>
      </motion.article>
      </motion.div>
      </section>
    </div>
    </>
    

  )
}

export default Curriculum