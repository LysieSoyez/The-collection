const collection = [
    {
      name: "Intuitions",
      autor: "Rachel Ward",
      releaseYear: 2013,
      picture: "assets/Intuitions.jpeg",
      pages: "330 pages",
      character: ["Jem", "Spider"],
    },
    {
      name: "Les larmes de l'assassin",
      autor: "Anne-Laure Bondoux",
      releaseYear: 2017,
      picture: "assets/Les-larmes-de-l'assassin.jpeg",
      pages: "224 pages",
      character: "Paolo",
    },
    {
      name: "L'affaire Jennifer Jone",
      autor: "Anne Cassidy",
      releaseYear: 2017,
      picture: "assets/Jennifer-Jones.jpeg",
      pages: "384 pages",
      character: ["Jennifer","Alice"],
    },
    {
      name: "Les enfants rats",
      autor: "Françoise Jay",
      releaseYear: 2009,
      picture: "assets/Les-enfants-rats.jpeg",
      pages: "216 pages",
      character: ["Irielle", "Jode","Atlan","Yentlan"],
    },
    {
      name: "Le feu secret",
      autor: ["C.J Daugherty","Carina Rozenfeld"],
      releaseYear: 2015,
      picture: "assets/le-feu-secret.jpeg",
      pages: "474 pages",
      character: ["Sacha","Taylor"],
    },
    {
      name: "Cauchemar d'une nuit d'été",
      autor: "R.L Stine",
      releaseYear: 2014,
      picture: "assets/Cauchemar.jpeg",
      pages: "310 pages",
      character: ["Claire", "Délia"],
    },
    {
      name: "Fahrenheit 451",
      autor: "Ray Bradbury",
      releaseYear: 2000,
      picture: "assets/fahrenheit.jpeg",
      pages: "236 pages",
      character: "Montag",
    },
    {
      name: "La montagne qui m'a sauvée",
      autor: "Lauren Wolk",
      releaseYear: 2021,
      picture: "assets/La-Montagne.jpeg",
      pages: "464 pages",
      character: ["Ellie", "Larkin"],
    },
    {
      name: "Frère de sang",
      autor: "Ollovier Mikaël",
      releaseYear: 2018,
      picture: "assets/Frères-de-sang.jpeg",
      pages: "144 pages",
      character: ["Brice", "Martin"],
    },
    {
      name: "Skeleton Creek #1",
      autor: "Patrick Carman",
      releaseYear: 2011,
      picture: "assets/Skeleton-creek.jpeg",
      pages: "187 pages",
      character: ["Sarah", "Ryan"],
    }
  ];

for(let elem of collection){

    let carte= document.createElement('div');
    document.getElementsByClassName('container')[0].appendChild(carte);
    carte.className="carte"

    //div for the front
    let front=document.createElement('div');
    carte.appendChild(front)
    front.className="div_front"
    
    //div for the back
    let back=document.createElement('div');
    carte.appendChild(back);
    back.className="div_back"

    //images
    let image= document.createElement('img');
    image.src=elem['picture'];
    front.appendChild(image);

    //name
    let names= document.createElement('h2');
    names.textContent=elem['name'];
    back.appendChild(names);

    //autors
    let autors= document.createElement('p');
    autors.textContent=elem['autor'];
    autors.className="auteur"
    back.appendChild(autors);

    //release year
    let year= document.createElement('p');
    year.textContent=elem['releaseYear'];
    year.className="year"
    back.appendChild(year);

    //Pages
    let page= document.createElement('p');
    page.textContent=elem['pages'];
    page.className="page"
    back.appendChild(page);

    //character
    let perso= document.createElement('p');
    perso.textContent=elem['character'];
    back.appendChild(perso);
}