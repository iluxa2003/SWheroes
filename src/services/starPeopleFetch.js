const starPeopleFetch = () => {
  const people = fetch('https://sw-api.starnavi.io/people/').then(
    (response) => {
      return response.json();
    },
  );

  return people;
};

export default starPeopleFetch;
