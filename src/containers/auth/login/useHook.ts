import { Apis } from 'libs/apis'
import { useNavigate } from 'react-router-dom'
import { siteRoutes } from 'utils/helpers/enums/routes.enums'

export default function useLogin() {
    const navigate = useNavigate()
    const login =async (body:any) =>{
        await Apis.login(body)
        .then((res)=>{
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('adminProfile', JSON.stringify(res.data))
            if(res.data.status){
                navigate(siteRoutes.dashboard)
            }
        })
        .catch((error)=>{console.log(error)})
    }
  return {login}
}
