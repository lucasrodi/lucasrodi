import { Link } from 'react-router-dom';
import '../css/Rodape/index.css'
export default function Rodape() {
    return (
        <footer className="rodape">
            <div className="rodape__logo">
                <Link className="rodape__logo--link" to="/">
                    <svg className="rodape__logo--img" width="42" height="30" viewBox="0 0 42 30" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M40.9559 23.5208L38.6852 7.56246C38.1019 3.45829 34.5813 0.416626 30.4357 0.416626H11.5618C7.41617 0.416626 3.89554 3.45829 3.31224 7.56246L1.04153 23.5208C0.583227 26.7291 3.06225 29.5833 6.29124 29.5833C7.70782 29.5833 9.04108 29.0208 10.041 28.0208L14.7491 23.3333H27.2484L31.9356 28.0208C32.9356 29.0208 34.2896 29.5833 35.6854 29.5833C38.9352 29.5833 41.4142 26.7291 40.9559 23.5208ZM18.9155 12.9166H14.7491V17.0833H12.6659V12.9166H8.49945V10.8333H12.6659V6.66663H14.7491V10.8333H18.9155V12.9166ZM27.2484 10.8333C26.1026 10.8333 25.1652 9.89579 25.1652 8.74996C25.1652 7.60413 26.1026 6.66663 27.2484 6.66663C28.3942 6.66663 29.3316 7.60413 29.3316 8.74996C29.3316 9.89579 28.3942 10.8333 27.2484 10.8333ZM31.4148 17.0833C30.269 17.0833 29.3316 16.1458 29.3316 15C29.3316 13.8541 30.269 12.9166 31.4148 12.9166C32.5606 12.9166 33.498 13.8541 33.498 15C33.498 16.1458 32.5606 17.0833 31.4148 17.0833Z"
                            fill="#2A7AE4" />
                    </svg>

                    <span className="rodape__logo--alura">Alura</span>
                    <span>Geek</span>
                </Link>
            </div>
            <nav className="rodape__nav">
                <a className="rodape__nav--link" href="/">Quem somos</a>
                <a className="rodape__nav--link" href="/">Politica de privacidade</a>
                <a className="rodape__nav--link" href="/">Programa de fidelidade</a>
                <a className="rodape__nav--link" href="/">Nossas lojas </a>
                <a className="rodape__nav--link" href="/">Quero ser franqueado</a>
                <a className="rodape__nav--link" href="/">Anuncie aqui</a>
            </nav>
            <form className="rodape__form">
                <h3 className=" form__titulo">Fale conosco</h3>
                <label className="form__nome" htmlFor="form__nome">Nome</label>
                <input required className="form__nome--input" placeholder="André Lisboa" type="text" />
                <input required className="form__texto" placeholder="Escreva sua mensagem" type="text" />
                <button type='submit' className="form__button">Envia mensagem</button>
            </form>
            <h3 className="rodape__titulo--autor">Desenvolvido por Lucas 2022</h3>
        </footer>
    );
}