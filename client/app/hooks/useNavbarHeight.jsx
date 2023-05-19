import { useEffect, useState } from "react";

export default function useNavbarHeight(refNav) {
  const [navBarHeight, setnavBarHeight] = useState();
  console.log(navBarHeight);
  useEffect(() => {
    setnavBarHeight(refNav.current?.offsetHeight);
  }, [refNav]);
  return { navBarHeight };
}
