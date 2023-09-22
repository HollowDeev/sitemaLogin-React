import { useContext, useEffect } from "react"
import { AuthContext } from "./AuthContext"
import { useNavigate } from "react-router-dom"

export function RequireAuth({children, level = 0}) {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate()

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const auth = useContext(AuthContext)

    const userLevel = auth.user.level 

    useEffect(() => {
        if(!auth.authorization){
            navigate('/login')
        }

    }, [navigate, auth.authorization, ])

    
    useEffect(() => {
        if(!auth.authorization && userLevel < level){
            navigate('/')
        }
    }, [auth.authorization, navigate, userLevel, level])



    if(auth.authorization && userLevel >= level) {
        return children
    } 

}
