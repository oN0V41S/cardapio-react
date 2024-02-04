import axios, { AxiosPromise } from "axios"
import { FoodData } from "../interface/FooData";
import { useMutation, useQueryClient } from "react-query";

// Iniciando a URL do back-end
const API_URL = "http://localhost:8080"

// Criando função asyncrona para retornar um Array de Objetos
// AxiosPromise retorna a resposta do axios como Any
const postData = async (data: FoodData): AxiosPromise<any> => {
    // Iniciando response como retorno aonde Axios ira bater no Banco de datos
    const response = axios.post(API_URL + '/food', data);
    return response;
} 

export function useFoodDataMutate(){
    const queryClient = useQueryClient();

    // Criando Mutation
    const mutate = useMutation({
        // função a ser executada para mudar dados
        mutationFn: postData,
        // Define quantas vezes a query deve ser executada
        retry: 2,
        // onSuccess - Mutação for realizada com sucesso execute e a função a
        onSuccess: () => {
            // Invalidando a query feita antes dessa com dados ultrapassados
            queryClient.invalidateQueries(['food-data'])
        }
    })

    return mutate;
}