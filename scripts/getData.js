const getData = async () => {
  const response = await fetch("https://4sn12.csb.app/data.json");

  const data = await response.json();

  return data;
};

export default getData;
