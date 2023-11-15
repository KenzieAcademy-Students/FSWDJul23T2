import { useEffect } from "react";

function FireIcon() {
  useEffect(() => {
    alert("You're on fire!");

    return () => alert("You've cooled down");
  }, []);

  return (
    <img style={{ width: "50px", height: "auto" }} src="/fire.png" alt="Fire" />
  );
}

export default FireIcon;
