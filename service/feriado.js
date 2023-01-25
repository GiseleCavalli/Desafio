import { http } from "./config";

export default{
    listar:() => {
        // return http.get('holidays?api_key=e7bd8f64e9bf413401a4c1149bc7a73d2344a221&country=br&year=2023&language=pt')
        return http.get('holidays?api_key=1ba0e18c59501a2e046bae220f78e2ec634c5e6f&country=br&year=2023&language=pt')
    }
}