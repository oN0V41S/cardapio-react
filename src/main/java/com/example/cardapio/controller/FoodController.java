package com.example.cardapio.controller;

import com.example.cardapio.food.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


// @RestController - Notação para Controle de Rotas
@RestController
// @RequestMapping -f Notação para quando Usuário bater no endpoint "/food"
@RequestMapping("food")
public class FoodController {

    // @Autowired - Campo que será injetado automaticamente pelo Spring
    @Autowired
    private FoodRepository repository;

    // @CroosOrigin - Notação usada em controlador para configurar CORS ( mecanismo que permite/restringe as solicitações de dominios diferente)
    // origins - define quais origem ( domíníos ) são permitidos
    // allowedHeaders define quais cabeçalhos podem ser usados durante a solicitação
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    // @PostMapping - Notação para retorno do metodo POST
    @PostMapping
    // ( @RequestBody x data ) - parametro data deve ser extraído do corpo da requisição
    public void saveFoood(@RequestBody FoodRequestDTO data){

        // Criando a instância do objeto com os dados da requisição
        Food foodData = new Food(data);

        // Salvando o objeto no banco
        repository.save(foodData);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    // @GetMapping - Notação para retorno do metodo GET
    @GetMapping
    public List<FoodResponseDTO> getAll(){
        List<FoodResponseDTO> foodList = repository.findAll().stream().map(FoodResponseDTO::new).toList();
        return foodList;
    }
}
