import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import { CORE_CONCEPTS } from "./data";

function App() {
  const listConcepts = CORE_CONCEPTS.map((concept, index) => (
    <CoreConcept {...concept} key={index} />
  ));

  return (
    <div>
      <Header />

      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>{listConcepts}</ul>
        </section>
      </main>
    </div>
  );
}

export default App;
