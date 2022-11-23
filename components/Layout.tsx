import { ReactNode } from 'react'
import Link from 'next/link'

type Componentprops = {
    children: ReactNode;
};

const Layout = ({ children }: Componentprops) => {
  return (
    <div>
        <header className="menu shadow-sm bg-body rounded sticky-top p-3">
            <ul className="nav justify-content-center text-black">
                <li className="nav-item">
                    <Link href="/" className="nav-link">Inicio</Link>
                </li>
                <li className="nav-item">
                    <Link href="/info" className="nav-link" >Sobre mí</Link>
                </li>
                <li className="nav-item">
                    <Link href="/curriculum" className="nav-link">Curriculum</Link>
                </li>
                <li className="nav-item">
                    <Link href="/contacto" className="nav-link">Contacto</Link>
                </li>
            </ul>
        </header>

        <main className='container-md'>
            {children}
        </main>
    </div>
  )
}

export default Layout