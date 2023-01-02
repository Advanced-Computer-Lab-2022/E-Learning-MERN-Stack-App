import React from "react";

// set the defaults
const NavStateContext = React.createContext({
    navIdx: 0,
    setNavIdx: () => { }
});

export default NavStateContext;