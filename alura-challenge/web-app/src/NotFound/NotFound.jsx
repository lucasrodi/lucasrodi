import { Link } from "react-router-dom";
import '../css/NotFound/index.css';

export default function NotFound() {
    return (<div className="notfound">
        <h1 className="notfound__titulo">Desculpe mas não encontramos essa pagina</h1>
        <Link className="notfound__link" to="/"> Clique aqui e volte a navegar pela pagina</Link>
    </div>);

}