export const getSampleByInfo = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    if (!response) {
      return null;
    } else {
      return response;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};
