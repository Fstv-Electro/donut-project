const image_array = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png'];
const new_image_array = [];
let create_image;

function getNumberImage() {
    let a = Math.floor(Math.random(1, 5));
    while (a > 0) {
        function getRandomImage(){
            let random_index = Math.floor(Math.random() * image_array.length);

            let selected_image = image_array[random_index];

            if (a = 1) {
                new_image_array.push(` /src/images/${selected_image}`);
            } else {
                new_image_array.push(` /src/images/${selected_image},`);
            }
        }
        a -= 1;
    }
    for (const new_image of new_image_array) {
        create_image = document.getElementsByClassName('section').background = `${new_image}`;
    }
    return create_image;
}