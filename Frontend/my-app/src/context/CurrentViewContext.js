import React from "react";


const CurrentViewContext = React.createContext({
    view: "guest",
    setView: () => { }
});

export default CurrentViewContext;