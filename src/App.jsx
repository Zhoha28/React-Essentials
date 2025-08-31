import Header from "./components/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import TabButtons from "./components/TabButtons.jsx";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import { useState } from "react";

function App() {
  let [tabContent, setTabContent] = useState();

  function handleSelect(selectedButton) {
    setTabContent(selectedButton);
  }
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>

        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>

            {CORE_CONCEPTS.map((concept) => (
              <CoreConcepts
                key={concept.title }
                image={concept.image}
                title={concept.title}
                description={concept.description}
              />
            ))}
          </ul>
        </section>
        <br />
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButtons onSelect={() => handleSelect("components")} isSelected={tabContent === "components"}>
              Components
            </TabButtons>
            <TabButtons onSelect={() => handleSelect("jsx")} isSelected={tabContent === "jsx"}>JSX</TabButtons>
            <TabButtons onSelect={() => handleSelect("props")} isSelected={tabContent === "props"}>
              Props
            </TabButtons>
            <TabButtons onSelect={() => handleSelect("state")} isSelected={tabContent === "state"}>
              State
            </TabButtons>
          </menu>

          {!tabContent ? (
            <div id="tab-content">
              <p>Please select a topic</p>{" "}
            </div>
          ) : null}
          {tabContent ? (
            <div id="tab-content">
              <h3>{EXAMPLES[tabContent].title}</h3>
              <p>{EXAMPLES[tabContent].description}</p>
              <pre>
                <code>{EXAMPLES[tabContent].code}</code>
              </pre>
            </div>
          ) : null}
        </section>
      </main>
    </div>
  );
}

export default App;
