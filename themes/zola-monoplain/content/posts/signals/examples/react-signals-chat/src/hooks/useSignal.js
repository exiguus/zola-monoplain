import { useState, useCallback } from "react";

function useSignal() {
  const [subscribers, setSubscribers] = useState([]);

  const subscribe = useCallback((callback) => {
    setSubscribers((subs) => [...subs, callback]);
    return () => {
      setSubscribers((subs) => subs.filter((sub) => sub !== callback));
    };
  }, []);

  const emit = useCallback(
    (data) => {
      subscribers.forEach((callback) => callback(data));
    },
    [subscribers],
  );

  return { subscribe, emit };
}

export default useSignal;
