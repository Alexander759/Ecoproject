import React, { useState, useEffect, useRef } from 'react';
import styles from './termWithDefinition.module.css';

function TermWithDefinition({ term, definition }) {
  const [isDefinitionVisible, setIsDefinitionVisible] = useState(false);
  const definitionRef = useRef(null);

  const toggleDefinition = () => {
    setIsDefinitionVisible(!isDefinitionVisible);
  };

  useEffect(() => {
    if (definitionRef.current) {
      const definitionBox = definitionRef.current;
      const screenwidth = document.body.getBoundingClientRect().width;
      const termPosition = definitionBox.getBoundingClientRect();

      if (termPosition.right  > screenwidth) {
        const maxWidth = screenwidth - termPosition.left ; // Adjust 10 for some padding
        definitionBox.style.maxWidth = `${maxWidth}px`;
      }
    }
  }, [isDefinitionVisible]);

  return (
    <span className={styles["element-holder"]}>
      <span className={styles["term"]} onClick={toggleDefinition}>
        {term}
      </span>

      {isDefinitionVisible && (
        <div className={styles["definition"]} ref={definitionRef}>
          <div className={styles["definition__close-btn-holder"]}>
            <button className={styles['definition__close-btn']} onClick={toggleDefinition}>
              &#x2715;
            </button>
          </div>

          <p className={styles["para"]}>
            {definition}
          </p>
        </div>
      )}
    </span>
  );
}

export default TermWithDefinition;
