import * as React from "react";
import {
    Routes,
    Route,
    Link,
    useNavigate,
    useLocation,
    Navigate,
} from "react-router-dom";
import CadastrarProduto from "../CadastrarProduto/CadastrarProduto";
import { fakeAuthProvider } from "./auth";
import Cabecalho from "../Cabecalho/Cabecalho";
import Rodape from "../Rodape/Rodape";
import '../css/Login/index.css'




export default function Teste() {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route
                    path="/cadastrarproduto"
                    element={
                        <RequireAuth>
                            <CadastrarProduto />
                        </RequireAuth>
                    }
                />
            </Routes>
        </AuthProvider>
    );
}

interface AuthContextType {
    user: any;
    signin: (user: string, password: string, callback: VoidFunction) => void;
    signout: (callback: VoidFunction) => void;
}

let AuthContext = React.createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    let [user, setUser] = React.useState<any>(null);
    let [password, setPassword] = React.useState<any>(null);

    let signin = (newUser: string, newPassword: string, callback: VoidFunction) => {
        return fakeAuthProvider.signin(() => {
            setUser(newUser);
            setPassword(newPassword);
            callback();
        });
    };

    let signout = (callback: VoidFunction) => {
        return fakeAuthProvider.signout(() => {
            setUser(null);
            callback();
        });
    };

    let value = { user, password, signin, signout };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
    return React.useContext(AuthContext);
}

export function AuthStatus() {
    let auth = useAuth();
    let navigate = useNavigate();

    if (!auth.user) {
        return <>
            < Link to="/login" id='button__adm' className="button__login" >Login</Link>
        </>;
    }

    return (<>

        <p className="logado">
            olá {auth.user}!{" "}
        </p>
        <button className="logado__button"
            onClick={() => {
                auth.signout(() => navigate("/"));
            }}
        >
            Sign out
        </button>
    </>
    );
}

export function RequireAuth({ children }: { children: JSX.Element }) {
    let auth = useAuth();
    let location = useLocation();

    if (!auth.user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}

export function LoginPage() {
    let navigate = useNavigate();
    let location = useLocation();
    let auth = useAuth();

    let from = location.state?.from?.pathname || '/';

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        let formData = new FormData(event.currentTarget);
        let username = formData.get("username") as string;
        let password = formData.get("password") as string;
        auth.signin(username, password, () => {
            navigate(from, { replace: true });
        });
    }

    return (
        <>
            <Cabecalho />
            <form onSubmit={handleSubmit} className="login">
                <div className="login__div">
                    <h2 className="login__titulo"> Iniciar Sessão</h2>
                    <input
                        required
                        name="username"
                        placeholder="Escreva seu email"
                        type="email"
                        id="email"
                        className="login__input"
                    />
                    <input
                        name="password"
                        required
                        placeholder="Escreva sua senha"
                        type="password"
                        id="senha"
                        className="login__input"
                    />

                    <button type="submit" className="login__button">
                        Entrar
                    </button>

                </div>
            </form>
            <Rodape />

        </>
    );
}


