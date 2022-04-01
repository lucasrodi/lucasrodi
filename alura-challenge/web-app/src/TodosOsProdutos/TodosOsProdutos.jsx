import Cabecalho from "../Cabecalho/Cabecalho";
import Rodape from "../Rodape/Rodape";
import '../css/TodosProdutos/index.css';
import { ListaProdutos } from "../ProdutosHome/ProdutoList";
import { Link } from "react-router-dom";



export default function TodosOsProdutos() {
    return (
        <>
            <Cabecalho />
            <div className="produtos__todos">
                <h2 className="produtos__todos--titulo">Todos os produtos</h2>
                <Link to="/cadastrarproduto" className="produtos__todos--button">Adicionar produtos</Link>
            </div>

            <section className="produtos">
                <ListaProdutos url={'/StarWars'} quantidade={1000} />
                <ListaProdutos url={'/Diverso'} quantidade={1000} />
                <ListaProdutos url={'/Console'} quantidade={1000} />
                <ListaProdutos url={'/NovoProduto'} quantidade={1000} />


            </section>
            <Rodape />
        </>
    );
}



