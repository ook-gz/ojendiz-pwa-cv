import { motion } from 'framer-motion';

const Contacto = () => {
  const imgsz: string = '120px';

  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }
  
  const item = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -100 },
  }

  return (
    <>
      <h1 className='text-center'>Contacta conmigo</h1>
      <br/>
      <h4 className='text-center'>Puedes encontrarme en los siguientes medios de contacto:</h4>

      <motion.article initial="hidden" animate="visible" variants={list}>
        <article className='row'>
          <section className="col">
          <motion.div variants={item}>
              <div className="card">
              <img className="card-img-top p-2" alt="..." width={imgsz}
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Ffmipa.unj.ac.id%2Fbiologi%2Fwp-content%2Fuploads%2F2017%2F09%2Fgoogle-gmail-logo-icon-66139.png%3Ffit%3D512%252C512&f=1&nofb=1&ipt=dcb3e5c12878562d898f0e101cfe53329ed7bd1cef1c62f28fe7010deb3743c1&ipo=images"/>
                <div className="card-body">
                  <h5 className="card-title">Gmail</h5>
                  <p className="card-text">carlos.ojendiz@utacapulco.edu.mx</p>
                </div>
              </div>
          </motion.div>
          </section>
          <section className="col">
          <motion.div variants={item}>
            <div className="card">
              <img className="card-img-top p-2" alt="..." width={imgsz}
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fmultarte.com.br%2Fwp-content%2Fuploads%2F2018%2F11%2Fwhatsapp-logo-png-hd-2.png%3Ffit%3D1000%252C1024%26ssl%3D1&f=1&nofb=1&ipt=33f8cefbf79382ef82a8b86665fa50923384354a4dff61bb2c8f6b4e26387d46&ipo=images"/>
                <div className="card-body">
                  <h5 className="card-title">Whatsapp</h5>
                  <p className="card-text">+52 7445 03 87 64</p>
                </div>
              </div>
          </motion.div>
          </section>
          <section className="col">
          <motion.div variants={item}>
            <div className="card">
              <img className="card-img-top p-2" alt="..." width={imgsz}
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpnggrid.com%2Fwp-content%2Fuploads%2F2021%2F04%2Ftelegram-logo-circle-2048x2048.png&f=1&nofb=1&ipt=22baf040eb9c321c55acbf3f665b75fea7db91a3d044763e9332eeba4499dc7d&ipo=images"/>
                <div className="card-body">
                  <h5 className="card-title">Telegram</h5>
                  <p className="card-text">@ookzgo</p>
                </div>
              </div>
          </motion.div>
          </section>
          <section className="col">
          <motion.div variants={item}>
            <div className="card">
              <img className="card-img-top p-2" alt="..." width={imgsz}
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F0%2F05%2FFacebook_Logo_(2019).png&f=1&nofb=1&ipt=3576bfe9478d5c5cd52c86bc376e463eb1fdd4c6a0234a3d162a707c838b842f&ipo=images"/>
                <div className="card-body">
                  <h5 className="card-title">Facebook</h5>
                  <p className="card-text">www.facebook.com/klooogz/</p>
                </div>
              </div>
          </motion.div>
          </section>
        </article>
      </motion.article>
    </>
  )
}

export default Contacto