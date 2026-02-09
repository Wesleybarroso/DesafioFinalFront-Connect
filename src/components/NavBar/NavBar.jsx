import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

// Import dos componentes
import Inicio from '../Inicio/Inicio'
import AcoesDaConnect from '../AcoesDaConnect/AcoesDaConnect'
import QuemSomos from '../QuemSomos/QuemSomos'
import Perfil from '../Perfil/Perfil'
import Footer from "../Footer/Footer"
// Importando a folha de estilo
import styles from './NavBar.module.scss'

//Importar Imagens
import Logo from '../../assets/logo.png'
import ImgPerfil from '../../assets/perfil.png'

function NavBar() {
    return (
        <BrowserRouter>
            <nav className={styles.navBar} >
                <Link to='/'>
                    <img src={Logo} alt="Logo do projeto" />
                </Link>

                <ul>
                    <li>
                        <Link to='/'>Início</Link>
                    </li>
                    <li>
                        <Link to='/acoesDaConnect'>Ações da Connect</Link>
                    </li>
                    <li>
                        <Link to='/quemSomos'>Quem Somos</Link>
                    </li>
                </ul>

                <Link to='/perfil'>
                    <img className={styles.imgPerfil} src={ImgPerfil} alt="Foto de perfil" />
                </Link>
            </nav>

            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/acoesDaConnect' element={<AcoesDaConnect />} />
                <Route path='/quemSomos' element={<QuemSomos />} />
                <Route path='/perfil' element={<Perfil />} />
            </Routes>
        </BrowserRouter>
    )
}

export default NavBar