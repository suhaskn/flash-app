const fruit = [
    {
        url: 'https://images-na.ssl-images-amazon.com/images/I/81xQBb5jRzL._SX522_.jpg',
        answer: 'Apple'
    },
    {
        url: 'https://www.healthline.com/hlcmsresource/images/AN_images/banana-pink-background-thumb.jpg',
        answer: 'Banana'
    },
    {
        url: 'https://images-na.ssl-images-amazon.com/images/I/714LOAKHnfL._SX522_.jpg',
        answer: 'Orange'
    },
    {
        url: 'https://images-na.ssl-images-amazon.com/images/I/71mgm8fudZL._SX522_.jpg',
        answer: 'Grapes'
    },
    {
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/PerfectStrawberry.jpg/220px-PerfectStrawberry.jpg',
        answer: 'Strawberry'
    }
]

 
//const images = fruit[0].answer;
 
 //const rand = Math.floor(Math.random() * 5);

 function randomImage() {
    //var img = 'url';

    const content = document.getElementById('content');

    var randomIndex = Math.floor(Math.random() * fruit.length);
    const image = fruit[randomIndex].url;
    const answer = fruit[randomIndex].answer;
    console.log(image);
    //console.log(answer);

    //create elements
    const section = document.createElement('section');
    const img = document.createElement('img');
    const p = document.createElement('p');

    //adjust element    
    img.src = fruit[randomIndex].url;
    p.innerText = answer;

    console.log(p.innerText);
    
    //display element
    section.appendChild(img);
    img.appendChild(p);
    content.appendChild(section);


    
    
    //console.log(fruit[randomIndex].url);
    // img += fruit[randomIndex].url;
    // img += '\" alt=\"Some alt text\"/>';
    // return img;
 }
