import { useState } from "react";
import data from "./data";
import "./styles.css";
const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (id) => {
    setMultiple([]);
    setSelected(id === selected ? null : id);
  };

  const handleMultiSelection = (id) => {
    setSelected(null);
    setMultiple((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="wrapper">
      <h1 className="heading">Accordion</h1>
      <span className="sub-heading">
        Multi-selection mode:
        {enableMultiSelection ? " disabled" : " enabled"}
      </span>
      <button
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}
        className={`${enableMultiSelection ? "button_activated" : ""}`}
      >
        {enableMultiSelection ? (
          <span>Click to disable</span>
        ) : (
          <span>Click to enable</span>
        )}
      </button>

      <div className="accrodian">
        {data.map((item) => (
          <div
            className={`item ${
              selected === item.id || multiple.includes(item.id)
                ? "item_activated"
                : ""
            }`}
            key={item.id}
          >
            <div
              className={`title ${
                selected === item.id || multiple.includes(item.id)
                  ? "title_activated"
                  : ""
              }`}
              onClick={
                enableMultiSelection
                  ? () => handleMultiSelection(item.id)
                  : () => handleSingleSelection(item.id)
              }
            >
              <h3>{item.question}</h3>
              {selected === item.id || multiple.includes(item.id) ? (
                <span className="symbol">-</span>
              ) : (
                <span className="symbol">+</span>
              )}
            </div>
            {selected === item.id || multiple.includes(item.id) ? (
              <div className="content">{item.answer}</div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordian;
