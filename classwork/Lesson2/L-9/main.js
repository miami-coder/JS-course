let color = prompt('Please enter a color');

switch (color) {
    case 'green':
        console.log('go');
        break;
    case 'yellow':
        console.log('wait');
        break;
    case 'red':
        console.log('stop');
        break;
    default:
        console.log('???')
}