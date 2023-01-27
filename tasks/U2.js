//Write a function 
//Create an array of strings with your favorite bands or artists; write a function called listArtists() which iterates over the items of the array and logs them out to the console.
const favBands = ['Gorillaz', 'MF DOOM', 'The Garden', 'Nine Inch Nails', 'System of a Down', 'JPEGMAFIA', 'Doja Cat']
const listArtists = () => {
    for (let i = 0; i < favBands.length; i++ ) {
        console.log(favBands[i]);
    }
}
listArtists();
//Invert
//Invert the colors of the sketch. Use black for the background and white for the outlines.

//handled in ../sketches/sketch-01.js