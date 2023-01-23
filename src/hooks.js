import axios from 'axios';
import { useEffect, useState } from 'react';

function useFetch(url) {
  let [items, setItems] = useState([]);
  let [loading, setLoading] = useState(true);

  let fetch = () => {
    setItems([]);
    setLoading(true);

    axios.get(url).then(response => {
      setTimeout(() => {
        setItems(response.data);
        setLoading(false);
      }, 1000);
    });
  }

  useEffect(() => fetch(), [url]);

  return [items, loading, fetch];
}

export { useFetch };
