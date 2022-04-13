const greet = (myName: string): string => {
  let greetwords: string;
  switch (myName.length > 4) {
    case true:
      greetwords = `Hi, ${myName}`;
      break;
    case false:
      greetwords = `Hello, ${myName}`;
      break;
    default:
      greetwords = 'Hello, dear';
  }
  return greetwords;
};
export default greet;
