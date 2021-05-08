/*
 * Exercícios de JavaScript
 * Tenha atenção aos comentários, se você descomentá-los o código poderá ter erros.
 * Faça os testes pra ver se as coisas estão sendo executadas corretamente.
 * Atente-se na organização do código.

/*
 
 * Exemplo - Exiba a mensagem "Hello World" no console do navegador
 
/* EXERCICIO RESOLVIDO */

 function helloWorld(name){
     return "Hello World, "+name;
 }
 console.log(helloWorld("Professor Guilherme"));
 
/* EXERCICIO RESOLVIDO *//*
 
  * 1 - Crie uma função para somar dois números e retornar o resultado, utilize variáveis. Não esqueça de chamar a função para ela funcionar.


/* EXERCICIO RESOLVIDO */

resultadoSoma(45, 25);
function resultadoSoma(a, b) {
  console.log(soma(a, b));
}
function soma(a, b) {
  return a + b;
}

/* EXERCICIO RESOLVIDO */

resultadoMultiplos(6,2);
function resultadoMultiplos(a,b){
    console.log(produto(a,b));   
}
function produto(a,b){
        return a*b;
 }

/* EXERCICIO RESOLVIDO *//*

* 2 - Crie um array com os números ímpares de 1 a 11.
  *
 /* EXERCICIO RESOLVIDO */

  for (let num = 1; num < 11; num++) {

    if (num % 2 != 0) {
  
        console.log(num);
     }
  }

  /* EXERCICIO RESOLVIDO */
 /**
  *
* 3 - Crie um objeto que contenha informações pessoais - Exemplo: nome, telefone, idade, endereço, etc. (Utilize informações não verdadeiras)
  
 /* EXERCICIO RESOLVIDO */

 var nomeFuncionario={
   nome:'Marcos Braga',
   idade:45,
   tempodeEmpresa:"10 anos",
   setor:"Financeiro",
   cargo:"socio-Gerente"
  
  };
 
 console.log(nomeFuncionario.nome+nomeFuncionario.idade);

/* EXERCICIO RESOLVIDO *//*

* 4 - Crie uma lista (array) com vários objetos de informações pessoais, como foi criado no exercício 3. Adicione pelo menos 5 pessoas.

  */
 let cadastroClientes = [
    {
        nome: "Marcos Braga",
        idade: 31,
        empresa:"Nacional",
        numero_de_registo:325,
    },
    {
       nome: "Marlene Santos",
       idade: 35,
       empresa:"Carrefoor",
       numero_de_registo:425,
    },
    {
       nome: "Amanda Freitas",
        idade: 25,
        empresa:"Renner",
        numero_de_registo:117,
    },
    {
       nome: "Carlos Miranda",
       idade: 25,
       empresa:"Bradesco",
       numero_de_registo:229,
    },
    {
       nome: "Josiane Maciel",
       idade: 27,
       empresa:"Boticario",
       numero_de_registo:264,
    }
];
cadastroClientes.map((item)=>{
    console.log(item.nome +": " +item.numero_de_registo);
})
 /*
* 5 - Crie 3 variáveis, uma contendo uma string, outra contendo um valor numérico e outra contendo um valor boolean.

  /* EXERCICIO RESOLVIDO */

 var nome='Charles';
 var idade=42;
 var webDesigner=true;
 console.log(nome,idade,webDesigner);

  /* EXERCICIO RESOLVIDO *//*
 
* 6 - Crie uma condicional utilizando if else para comparar se um número é maior ou igual ao outro. Exiba uma mensagem afirmando se é maior ou não.
  
  /* EXERCICIO RESOLVIDO */

 var numero1=6;
 var numero2=10;

 if (numero1>=numero2){
    console.log("Sim ," +numero1+ "  é maior e igual a  "+numero2);

 } else{
    console.log("Nao, " +numero1+ " Nao é maior que  " +numero2);
 }


  /* EXERCICIO RESOLVIDO *//*
 
  
* 7 - Crie uma condicional utilizando switch para exibir o nome do mês, passando como variável um valor numérico de 1 a 12.
  
  /* EXERCICIO RESOLVIDO */

  mes = 12;
  nomeMes = "";
  
  switch (mes) {
      case 1:
          nomeMes = "Janeiro";
          break;
      case 2:
          nomeMes = "Fevereiro";
          break;
      case 3:
          nomeMes = "Março";
          break;
      case 4:
          nomeMes = "Abril";
          break;
      case 5:
          nomeMes = "Maio";
          break;
      case 6:
          nomeMes = "Junho";
          break;
      case 7:
          nomeMes = "Julho";
          break;
      case 8:
          nomeMes = "Agosto";
          break;
      case 9:
          nomeMes = "Setembro";
          break;
      case 10:
          nomeMes = "Outubro";
          break;
      case 11:
          nomeMes = "Novembro";
          break;
      case 12:
          nomeMes = "Dezembro";
          break;
      default:
          nomeMes = "Mês inexistente";
  }
  console.log(nomeMes);

   /* EXERCICIO RESOLVIDO *//*
 
* 8 - Faça um loop, utilizando while, for ou map para percorrer o array de objetos abaixo e exiba o nome de cada pessoa.

  */
  /* EXERCICIO RESOLVIDO */

  let cadastroPessoas = [
	{
		nome: "Benedito Levi da Cunha",
		idade: 31,
	},
	{
		nome: "César Luan Gael Monteiro",
		idade: 50,
	},
	{
		nome: "Fernando Thomas Emanuel Rocha",
		idade: 28,
	},
	{
		nome: "Felipe Kaique Alves",
		idade: 32,
	},
	{
		nome: "Benício Henrique Moraes",
		idade: 56,
	},
];
 cadastroPessoas.map((item)=>{
     console.log(item.nome +":" +item.idade);
 })

  /* EXERCICIO RESOLVIDO *//*

* 9 - Corrija o erro no trecho de código abaixo. Observe os comentários para entender o que deve ser feito


   /* EXERCICIO RESOLVIDO *//*

//10- Deve exibir a soma de todos os valores do array*/

   let multiplosValores = [12, 45, 41, 62, 74, 88, 13, 25, 14];
   CalcularVariosValores(multiplosValores);
   
   function CalcularVariosValores(valores){
   
     let total = 0;
   
     valores.map((item) => {
       total = total + item;
     });

     console.log("O total é "+ total);
   }

   /* CORRETO-TESTADO*//*

* 10 - Crie uma função para exibir a tabuada de 6. Veja o exemplo abaixo:

  * console.log("6x1 = 6");
  *
 /* CORRETO-TESTADO*/

 var valor=6;
 for(var i=1; i<11; i++){
     console.log(valor + "x" + i + "="+(valor*i));
 }

/* CORRETO-TESTADO*/

