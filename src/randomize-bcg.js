const image_array = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png'];
const new_image_array = [];
let create_image;

function getNumberImage() {

    // Рандомне число від 1 до 5, кількість зображень
    let a = Math.floor(Math.random(1, 5));

    // цикл, який працює на кожне зображення
    while (a > 0) {
        function getRandomImage() {
            
            // рандомне зображення з масиву зображень
            let random_index = Math.floor(Math.random() * image_array.length);
            // присвоєння змінній цього зображення
            let selected_image = image_array[random_index];

            // іф елс якщо зображення останнє, то не додає кому в кінці масиму, хоча правильніше було зробити рядок
            if (a = 1) {
                new_image_array.push(` /src/images/${selected_image}`);
            } else {
                new_image_array.push(` /src/images/${selected_image},`);
            }
        }

        // зменьшення числа для цикла
        a -= 1;
    }
    // кожний масив перебирає та додає в змінну
    for (const new_image of new_image_array) {
        create_image += document.getElementsByClassName('section').background = `${new_image}`;
    }

    // повертає відповідь
    return create_image;
}