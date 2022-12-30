// Mais dados para se fazer os cards
const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];
  
//Selecionando os elementos dos cards atraves de seus ids
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

//Selecionando botoes atraves da class Css
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const randomButton = document.querySelector('.random-button');

// começando com "item" 0 - representa primeiro item na matriz
let currentItem = 0;

//carregando item inicial;
//O objeto window representa uma janela que contém um elemento DOM;
//O evento DOMContentLoaded é acionado quando todo o HTML foi completamente carregado e analisado, sem aguardar pelo CSS, imagens, e subframes para encerrar o carregamento.
window.addEventListener('DOMContentLoaded', function() {
    showPerson(currentItem);
})

//mostrar pessoa baseado no item atual. função mostra pessoa passando como atributo a pessoa conforme seu index no array pela variavel currentItem
function showPerson (person) {
    //variavel para começar com item 0 do array
    const item = reviews[person];

    //selecioado itens conforme index da constante item acima
    img.src = item.img
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

//mostrando proxima pessoa 
//lógica: toda vez que houver click no botao proximo, variavel currentItem aumenta seu valor em 1, alterando index do array chamando a função showPerson; e, se item atual for maior que o array, item atual voltar a ter  valor 0
nextButton.addEventListener('click', function() {
    currentItem++;
    if(currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

//mostrando pessoa anterior
//mesma logica do outro botao, porem desincrementando a variavel currentItem
prevButton.addEventListener('click', function() {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});

//mostrando uma pessoa aleatoria
//toda vez que houver click no botao Surprise Me, a função irá atribuir um numero aleatoria entre 0 e 3 (tamanho do array) e chamando a função showPerson;
randomButton.addEventListener('click', function () {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
})