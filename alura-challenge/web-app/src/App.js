import * as React from "react";
import { Routes, Route } from "react-router-dom";
import ProdutoDetalhe from './ProdutoDetalhe/ProdutoDetalhe';
import TodosOsProdutos from './TodosOsProdutos/TodosOsProdutos';
import CadastrarProduto from './CadastrarProduto/CadastrarProduto';
import NotFound from "./NotFound/NotFound";
import ProdutosHome from "./ProdutosHome/ProdutosHome";
import { RequireAuth, AuthProvider, AuthStatus } from "./Authenticacao/auth.tsx";
import { LoginPage } from "./Authenticacao/auth.tsx";


export default function App() {
  return (
    <AuthProvider>
      <AuthStatus />
      <Routes>
        <Route path="/" element={<ProdutosHome />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="todosprodutos" element={<TodosOsProdutos />} />
        <Route path="produtodetalhe" element={<ProdutoDetalhe />} />
        <Route
          path="/cadastrarproduto"
          element={
            <RequireAuth>
              <CadastrarProduto />
            </RequireAuth>
          }
        >
        </Route>
        <Route path="cadastrarproduto" element={<CadastrarProduto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>

  );
}





