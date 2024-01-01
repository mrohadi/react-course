import { EXAMPLES } from "../data";

export default function TabContent({ selectedTopic }) {
  return (
    <>
      {selectedTopic ? (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      ) : (
        <p>Please select a topic.</p>
      )}
    </>
  );
}
