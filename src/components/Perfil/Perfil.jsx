import ImgPerfil from '../../assets/perfil.png'
import styles from '../Perfil/Perfil.module.scss'


function Perfil() {
    return (
       <section className={styles.containerTelaPerfil}>
            <article>
                 <img src={ImgPerfil} alt="Foto de perfil de Wesley Barroso Leite" />
                 <div className={styles.cardInfo}> 
                    <h2>Wesley Barroso Leite</h2>
                    <h3>Voluntário Ativo</h3>

                    <p className={styles.paragrafoSobreMim}> Apaixonado por fazer a diferença na comunidade. Acredito que pequenas ações podem transformar vidas e estou sempre em busca de novas oportunidades para ajudar.</p>
                    
                    <address>
                        <p>Tailândia, PA</p>
                        <p>wesley.barrosleit@gmail.com</p>
                        <p>Membro desde Janeiro de 2022</p>
                    </address>

                    <ul className={styles.listaInteresses}>
                        <li>Educação</li>
                        <li>Meio Ambiente</li>
                        <li>Assistência Social</li>
                        <li>Design</li>
                    </ul>
                </div>
            </article>
        </section>
    )
}

export default Perfil