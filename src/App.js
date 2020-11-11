import { Cards } from './components/Cards/Cards.jsx';
import './reset.css'
import './style.css'
import  imgCard1 from './assets/card1.svg'
import  imgCard2 from './assets/card2.svg'
import  imgCard3 from './assets/card3.svg'
import { Title } from './components/Title/Title.jsx';
function App() {
  return (
    <main className="wrapperMain">
        <Title title="Propuestas de valor"/>
      <section className="wrapperCards">
        <Cards 
        img={imgCard1}
        titleCard="Cursá como quieras"
        description="Tenemos propuestas presenciales, 100% remota o mixtas."
        />
        <Cards
        img={imgCard2}
        titleCard="Plataforma interactiva"
        description="Poné a prueba tu conocimiento o practicá con las distintas actividades que te proponemos."
        />
        <Cards
        img={imgCard3}
        titleCard="Te acompañamos"
        description="Un equipo de trabajo especializado te acompaña durante toda la cursada."
        />
        </section>
    </main>
  );
}

export default App;
