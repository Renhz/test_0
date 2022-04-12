const greet = (myName: string): string => {
  interface GameSettings {
    speed: "fast" | "medium" | "slow";
    quality: "high" | "low";
    [key: string]: string;
  }

  let mySettings : GameSettings = {
    speed: "fast",
    quality:"high"
  };

  const mySpeed = mySettings.speed;
  const myQuality = mySettings.quality;
  const myUsername = mySettings.username;

  let greetwords: string;
  switch (myName.length > 4) {
    case true:
      greetwords = `Hi, ${myName}`;
    case false:
      greetwords = `Hello, ${myName}`;
    default:
        greetwords = 'Hello, dear'
  }
  return greetwords;
};
export default greet;
