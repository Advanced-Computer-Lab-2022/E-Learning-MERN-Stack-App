import React from "react";


const CurrentViewContext = React.createContext({
    view: "user",
    setView: () => { }
});

export default CurrentViewContext;