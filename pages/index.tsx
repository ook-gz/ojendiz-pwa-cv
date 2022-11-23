import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

export default function Home() {

  return (
    <motion.div animate={{ y: 200 }} transition={{ ease: "easeOut", duration: 2 }} initial={true}>
      <main>
        <div className="text-center d-flex flex-column justify-content-center align-items-center">
          <h5>Soy</h5>
          <h1 className='display-1'>Carlos Ojendiz</h1>
          <br />
          <h4>
            <Typewriter options={{
              strings: ['Nunca sin suerte.', 'Nunca sin estilo.', 'Siempre sin dinero.'],
              autoStart: true,
              loop: true,
              delay: 350,
            }}/>
          </h4>
        </div>
      </main>
    </motion.div>
  )
}
