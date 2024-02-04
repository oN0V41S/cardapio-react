package com.example.cardapio.food;

import jakarta.persistence.*;
import lombok.*;


// Define a tabela a ser utilizada para criar a Entidade
@Table(name = "foods")

// Define a classe como uma Entidade JPA
@Entity(name = "foods")

// Runtime Lombook Gera métodos getter para todos os campos da classe
@Getter

// Gera um construtor sem argumentos, construtor que cria instâncias sem valores iniciais
@NoArgsConstructor

// Gera um construtor que aceita todos os campos da classe como argumentos, inicializando todos os campos ao mesmo tempo
@AllArgsConstructor

// gera os metodos 'equals' e 'hashCode', considerando apenas o argumento "id"
@EqualsAndHashCode(of = "id")
public class Food {
    // Definindo as propriedades da Entidade

    // @id - Indica campo como a chave primária da entidade
    // @generatedValue() - Indica a estratégia de geração de valor para a chave primária
    // GenerationType.IDENTITY - Indicando que a chave primária será gerada automaticamente pelo banco de dados
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String image;
    private Integer price;

    // Construtor para inserir as propriedades da requisição ao objeto
    public Food(FoodRequestDTO data){
        this.title = data.title();
        this.image = data.image();
        this.price = data.price();
    }
}
