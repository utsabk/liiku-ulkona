'use strict';


const customFetch = async (url) => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (err) {
    throw new Error('Error fetching resources from remote');
  }
};

export default customFetch;
