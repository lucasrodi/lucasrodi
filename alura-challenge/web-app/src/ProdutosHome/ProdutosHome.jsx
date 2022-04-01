import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Cabecalho from '../Cabecalho/Cabecalho';
import '../css/ProdutoHome/index.css'
import Rodape from '../Rodape/Rodape';
import { ListaProdutos } from './ProdutoList';
export default function ProdutosHome() {
    return (<>
        <Cabecalho />
        <Banner />
        <section className="produtos">
            <h2 className="produtos__titulo">Star Wars</h2>
            <Link to='/todosprodutos' className="produtos__button">Ver tudo <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0.666341 6.66665L8.77967 6.66665L5.05301 10.3933L5.99967 11.3333L11.333 5.99998L5.99968 0.666646L5.05968 1.60665L8.77968 5.33331L0.666341 5.33331L0.666341 6.66665Z"
                    fill="#2A7AE4" />
            </svg>
            </Link>
            <ListaProdutos url={'/StarWars'} quantidade={4} />

        </section>
        <section id="console" className="produtos">
            <h2 className="produtos__titulo">Consoles</h2>
            <Link to='/todosprodutos' className="produtos__button">Ver tudo <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0.666341 6.66665L8.77967 6.66665L5.05301 10.3933L5.99967 11.3333L11.333 5.99998L5.99968 0.666646L5.05968 1.60665L8.77968 5.33331L0.666341 5.33331L0.666341 6.66665Z"
                    fill="#2A7AE4" />
            </svg>
            </Link>
            <ListaProdutos url={'/Console'} quantidade={4} />

        </section>
        <section className="produtos">
            <h2 className="produtos__titulo">Diversos</h2>
            <Link to='/todosprodutos' className="produtos__button">Ver tudo <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0.666341 6.66665L8.77967 6.66665L5.05301 10.3933L5.99967 11.3333L11.333 5.99998L5.99968 0.666646L5.05968 1.60665L8.77968 5.33331L0.666341 5.33331L0.666341 6.66665Z"
                    fill="#2A7AE4" />
            </svg>
            </Link>
            <ListaProdutos url={'/Diverso'} quantidade={4} />

        </section>

        <Rodape />
    </>
    );
}