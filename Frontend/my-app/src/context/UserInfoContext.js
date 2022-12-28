import React from "react";


const UserInfoContext = React.createContext({
    user: {},
    setUser: () => { }
});

export default UserInfoContext;