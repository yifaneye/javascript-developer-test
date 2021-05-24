const { httpGet } = require('./mock-http-interface');

const getArnieQuote = async (url) => {
  // execute a mock HTTP GET request
  const { body, status } = await httpGet(url);

  // create an object to contain the response message
  const key = status === 200 ? 'Arnie Quote' : 'FAILURE';
  const value = JSON.parse(body).message;
  return {
    [key]: value
  };
};

const getArnieQuotes = async (urls) => {
  // send the requests
  const requests = urls.map((url) => getArnieQuote(url));

  // return the promise
  return await Promise.all(requests);
};

module.exports = { getArnieQuotes };
