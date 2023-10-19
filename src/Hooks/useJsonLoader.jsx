import { useEffect } from 'react'
import { useState } from 'react'

const useJsonLoader = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetch(url)
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err))
        .finally(() => setLoading(false));
    }, [url]);
  
    return { data, loading };
  };
  
  export default useJsonLoader;
  