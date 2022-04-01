import Cabecalho from '../Cabecalho/Cabecalho';
import '../css/CadastrarProduto/index.css'
import Rodape from '../Rodape/Rodape';
import axios from 'axios';
export default function CadastrarProduto() {
    return (<>
        <Cabecalho />
        <main>
            <form onSubmit={(e) => {
                e.preventDefault()
            }} className="cadastrarProduto">
                <h2 className="cadastrarProduto__titulo">Adicionar novo produto</h2>
                <div className="cadastrarProduto__div--img">
                    <span className="cadastrarProduto__div--text">+</span>
                    <span className="cadastrarProduto__div--text">adicione uma imagem ao produto</span>
                    <input required id="produto__img" type="file" />
                </div>
                <label className="cadastrarProduto__label" htmlFor="produto__nome">Nome do produto</label>
                <input required id="produto__nome" className='cadastrarProduto__input--nome' placeholder="Produto XYZ" type="text" />
                <label className="cadastrarProduto__label" htmlFor="produto__preco">Preço do produto</label>
                <input required id="produto__preco" className="cadastrarProduto__input--preco" placeholder="R$ 60,00" type="number" />
                <input required id="produto__descricao" className="cadastrarProduto__input--descricao" placeholder="Descrição do produto" type="text" />
                <button onClick={CadastrarNovoProduto} type='submit' className="cadastrarProduto__button">Adionar Produto</button>
            </form>
        </main>
        <Rodape />
    </>
    );
}
function CadastrarNovoProduto() {
    let produtoImg = document.getElementById('produto__img').value
    let produtoNome = document.getElementById('produto__nome').value
    let produtoPreco = document.getElementById('produto__preco').value
    let produtoDescricao = document.getElementById('produto__descricao').value

    axios.post('http://localhost:3000/NovoProduto', {
        id: Math.random(),
        img: produtoImg,
        titulo: produtoNome,
        preco: produtoPreco,
        descricao: produtoDescricao
    }).then(
        alert("produto adicionado com sucesso"),
        produtoImg = document.getElementById('produto__img').value = (''),
        produtoNome = document.getElementById('produto__nome').value = (''),
        produtoPreco = document.getElementById('produto__preco').value = (''),
        produtoDescricao = document.getElementById('produto__descricao').value = ('')
    )


}


