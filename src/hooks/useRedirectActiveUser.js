import React from 'react'
import { useNavigate } from "react-router-dom";

import { useEffect } from "react";
export const useRedirectActiveUser = (user, path) => {


    const navigate = useNavigate()

    useEffect(() => {
        console.log(user)
        if (user) {
            navigate(path)
        }
    }, [user]);

}
