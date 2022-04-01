import Cabecalho from "../Cabecalho/Cabecalho";
import Rodape from "../Rodape/Rodape";
import '../css/ProdutoDetalhes/index.css';
import img from '../Img/img.jfif';
import { Link } from "react-router-dom";


export default function ProdutoDetalhe() {
    return (<>
        <Cabecalho />
        <section className="produto__detalhes">
            <img src={img} alt="imagem do produto xyz" className="produto__detalhes--img" />
            <h2 className="produto__detalhes--titulo"> Produto XYZ</h2>
            <span className="produto__detalhes--preco">R$ 60,00</span>
            <p className="produto__detalhes--descricao">Voluptas voluptatum quibusdam similique, className debitis alias
                maecenas eveniet ridiculus, facilis fusce! Ullam conubia?
                Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita,
                aliquid litora.
                Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus,
                dolorum do. Animi
                porta anim magnam</p>

        </section>
        <section className="produtos">
            <h2 className="produtos__titulo">Produtos Similares</h2>
            <Link to="/todosprodutos" className="produtos__button">Ver tudo <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0.666341 6.66665L8.77967 6.66665L5.05301 10.3933L5.99967 11.3333L11.333 5.99998L5.99968 0.666646L5.05968 1.60665L8.77968 5.33331L0.666341 5.33331L0.666341 6.66665Z"
                    fill="#2A7AE4" />
            </svg>
            </Link>

            <a className="produto" href="/produtodetalhe">
                <img className="produto__img" src={img} alt="imagem do produto" />
                <p className="produto__titulo">Produto XYZ</p>
                <p className="produto__preco">R$ 60,00</p>
                <button className="produto__detalhes">Ver Produto</button>

            </a>
            <a className="produto" href="/produtodetalhe">
                <img className="produto__img" src={img} alt="imagem do produto" />
                <p className="produto__titulo">Produto XYZ</p>
                <p className="produto__preco">R$ 60,00</p>
                <button className="produto__detalhes">Ver Produto</button>

            </a>
            <a className="produto" href="/produtodetalhe">
                <img className="produto__img" src={img} alt="imagem do produto" />
                <p className="produto__titulo">Produto XYZ</p>
                <p className="produto__preco">R$ 60,00</p>
                <button className="produto__detalhes">Ver Produto</button>

            </a>
            <a className="produto" href="/produtodetalhe">
                <img className="produto__img" src={img} alt="imagem do produto" />
                <p className="produto__titulo">Produto XYZ</p>
                <p className="produto__preco">R$ 60,00</p>
                <button className="produto__detalhes">Ver Produto</button>

            </a>
        </section>
        <Rodape />
    </>
    );
}