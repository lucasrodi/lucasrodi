
import React, { useState, useEffect } from 'react';
import '../css/ProdutoHome/index.css'
import { Link } from 'react-router-dom';
import { busca } from '../Api/Api';




export const ListaProdutos = ({ url, quantidade }) => {
    const [produtos, setProdutos] = useState([])
    useEffect(() => {
        busca(url, setProdutos)

    }, [url])
    return (<section className="produtos">

        {produtos.slice(0, quantidade).map((produto) => {
            return (
                <Link key={produto.id} className="produto" to="/produtodetalhe">
                    <img className="produto__img" src={produto.img} alt="imagem do produto" />
                    <p className="produto__titulo">{produto.titulo}</p>
                    <p className="produto__preco">R${produto.preco}</p>
                    <button className="produto__detalhes">Ver Produto</button>
                </Link>)
        })}
    </section>
    )
}