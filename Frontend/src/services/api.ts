import axios from 'axios'

//Configuração do axios para URL da API
export const api = axios.create({
    baseURL: 'http://localhost:3000'
})