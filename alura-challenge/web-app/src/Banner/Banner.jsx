import '../css/Banner/index.css'
export default function Banner() {
    return (
        <div className="banner">
            <h2 className="banner__titulo"> Dezembro Promocional</h2>
            <p className="banner__texto">Produtos selecionados com 33% de desconto</p>
            <button onClick={setFocusToSection} className="banner__button">Ver Consoles</button>

        </div>
    );

}

function setFocusToSection() {
    var textbox = document.getElementById("console");
    textbox.focus();
    textbox.scrollIntoView();
}


