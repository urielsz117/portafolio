import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBriefcase, faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import user from "./img/user.png";
import react from "./img/react.png";
import mongo from "./img/mongo.png";
import javascript from "./img/javascript.png";
import nodejs from "./img/nodejs.png";
import github from "./img/github.png";
import gmail from "./img/gmail.png";
import whats from "./img/whatsapp.png";
import facebook from "./img/facebook.png";
import twitter from "./img/twitter.png";

function App() {
  return (
    <div className="App">
      <div className="Cabecera">
        <div class="row">
          <div class="col-11">
            <h1>
              <kbd>
                {" "}
                <FontAwesomeIcon icon={faUser} /> Mi Perfil
              </kbd>{" "}
              Portafolio
            </h1>
          </div>
          <div class="col">
            <FontAwesomeIcon icon={faBriefcase} size="4x" />
          </div>
        </div>
      </div>

      <div className="ContenedorPrincipal">
        <div class="row">
          <div class="col-8">
            <h1 class="display-1">Hola, Mi nombre es Uriel</h1>
            <hr className="HR"></hr>
            <h3>
              Deseos de querer sobresalir y aprender mas en el ámbito de la
              programación, es lo mas que me gusta, cada día que vivo es un CRUD
              nuevo. Solo se trata de querer...
            </h3>
          </div>
          <div class="col foto">
            <img src={user} className="user" alt="USER" />
          </div>
        </div>
      </div>

      <div className="ContenedorDivs">
        <div class="row">
          <div class="col-4 ReactDiv">
            <div class="row">
              <h1>HABILIDADES EN REACT</h1>
              <hr className="HRDIVS"></hr>
              <img src={react} className="lenguajes" alt="REACT" />
            </div>
          </div>
          <div class="col MongoDiv">
          <div class="row">
              <h1>HABILIDADES EN MONGO</h1>
              <hr className="HRDIVS"></hr>
              <img src={mongo} className="lenguajes" alt="MONGO" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col JsDiv">
             <div class="row">
              <h1>HABILIDADES EN JAVA SCRIPT</h1>
              <hr className="HRDIVS"></hr>
              <img src={javascript} className="lenguajes" alt="JAVASCRIPT" />
            </div>
          </div>
          <div class="col-5 NodeDiv">
            <div class="row">
              <h1>HABILIDADES EN NODE JS</h1>
              <hr className="HRDIVS"></hr>
              <img src={nodejs} className="lenguajes" alt="NODEJS" />
            </div>
          </div>
        </div>
      </div>

      <div className="cardsS">
        <h1 class="display-1">PROYECTOS</h1>
        <div class="row">
          <div class="col">
            <div class="card" className="cardSola">
              <FontAwesomeIcon icon={faFolderOpen} className="cardFoto" />
              <div class="card-body" className="textoCard">
                <p class="card-text">Landing de Ventas.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card" className="cardSola">
              <FontAwesomeIcon icon={faFolderOpen} className="cardFoto" />
              <div class="card-body" className="textoCard">
                <p class="card-text">Aplicacion CRUD.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card" className="cardSola">
              <FontAwesomeIcon icon={faFolderOpen} className="cardFoto" />
              <div class="card-body" className="textoCard">
                <p class="card-text">Tablero de Datos (DASHBOARD).</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card" className="cardSola">
              <FontAwesomeIcon icon={faFolderOpen} className="cardFoto" />
              <div class="card-body" className="textoCard">
                <p class="card-text">Restaurante APP.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card" className="cardSola">
              <FontAwesomeIcon icon={faFolderOpen} className="cardFoto" />
              <div class="card-body" className="textoCard">
                <p class="card-text">Comercio Electronico.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pie">
        <div class="row">
            <img src={github} className="icono" alt="GITHUB" />
            <img src={gmail} className="icono" alt="GMAIL" />
            <img src={whats} className="icono" alt="WHATS" /> 
            <img src={facebook} className="icono" alt="FACE" /> 
            <img src={twitter} className="icono" alt="TWITTER" /> 
        </div>
      </div>

    </div>
  );
}

export default App;
