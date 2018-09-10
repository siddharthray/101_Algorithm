function addBorder(picture: string[]): any {
    const lengthofWall = picture[0].length + 2;
    let wall = '';
    for (let i = 0; i < lengthofWall; i++) {
        wall = wall.concat('*');
    }
    picture.unshift(wall);
    picture.push(wall);

    for (let i = 1; i < picture.length - 1; i++) {
        picture[i] = '*'.concat(picture[i]);
    }
    
    return picture;

}

function addBorder2(picture: string[]): any {
    
    let wall = '*'.repeat(picture[0].length + 2);

    picture.unshift(wall);
    picture.push(wall);

    for (let i = 0; i < picture.length - 1; i++) {
        picture[i] = '*'.concat(picture[i], '*');
    }
    return picture;

}

console.log(addBorder(["abc", "def"]));
console.log(addBorder2(["abc", "def"]));