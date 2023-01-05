const {useState, useEffect} = require("react");

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const hanler = setTimeout(() => setDebouncedValue(value), delay);

    return () => clearTimeout(hanler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  return debouncedValue;
}

export default useDebounce;
