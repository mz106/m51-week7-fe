export const getAllBooks = async () => {
  try {
    const response = await fetch("http://localhost:5001/books");
    console.log(response);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
