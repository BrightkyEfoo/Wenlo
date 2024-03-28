import { useEffect, useRef, useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import styles from './style.module.scss';

interface Props<P extends {}, U extends {}> {
  defaultOption: { display: P; render: U };
  handleSelect?: (value: { display: P; render: U }) => void;
  childrens: { display: P; render: U }[];
  RenderElement: (props: U & { key?: number }) => JSX.Element;
  DisplayElement: (props: P & { key?: number }) => JSX.Element;
}

function CustomSelect3<P extends {}, U extends {}>({
  defaultOption,
  handleSelect,
  childrens,
  RenderElement,
  DisplayElement,
}: Props<P, U>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [actual, setActual] = useState(defaultOption);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const handleClick = () => {
    setIsPopupVisible(prev => !prev);
  };

  const handleSelectChild = (idx: number) => () => {
    setIsPopupVisible(prev => false);
    setActual(prev => childrens[idx]);
    if (handleSelect) handleSelect(childrens[idx]);
  };

  useEffect(() => {
    const handler = (e: any) => {
      if (
        isPopupVisible &&
        containerRef.current &&
        !containerRef.current.contains(e.target)
      ) {
        setIsPopupVisible(false);
      }
    };

    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [isPopupVisible]);

  return (
    <div ref={containerRef} className={styles.container}>
      <div className={styles.head} onClick={handleClick}>
        <DisplayElement {...actual.display} />
        <button>{isPopupVisible ? <FaChevronUp /> : <FaChevronDown />}</button>
      </div>
      {isPopupVisible && (
        <div className={styles.bottom}>
          {childrens.map((el, idx) => {
            return (
              <div key={idx} onClick={handleSelectChild(idx)}>
                <RenderElement {...el.render} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default CustomSelect3;
