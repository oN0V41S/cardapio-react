import axios, { AxiosPromise } from "axios"
import { FoodData } from "../interface/FooData";
import { useQuery } from "react-query";

// Iniciando a URL do back-end
const API_URL = "http://localhost:8080"

// Criando função asyncrona para retornar um Array de Objetos
// AxiosPromise retorna a resposta do axios como objeto
const fetchData = async (): AxiosPromise<FoodData[]> => {
    // Iniciando response como retorno aonde Axios ira bater no Banco de datos
    const response = axios.get(API_URL + '/food');
    return response;
} 

export function useFoodData(){
    // Criando Query Hook
    const query = useQuery({
        // função a ser executada para buscar dados
        queryFn: fetchData,
        // chave única para a query no cache 'food-data'
        queryKey: ['food-data'],
        // Define quantas vezes a query deve ser executada
        retry: 2
    })

    return {
        // Espalha as propriedades da instância query
        ...query,
        // Re-Define query.data?.data se nao for vazio
        data: query.data?.data
    };
}