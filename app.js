document.addEventListener('DOMContentLoaded', function () {


    var friendNames = ['Erica', 'Alicia', 'LaDonna', 'Yvette', 'Talaya'];
    var locationNames = ['kitchen', 'back porch', 'cellar', 'attic', 'bedroom', 'bathroom', 'roof', 'rompus room', 'basement', 'den'];
    var weaponNames = ['a vermicious knit', 'a gun', 'a wangdoodle', 'a knife', 'a rabid dog', 'some nunchucks', 'a daffy duck', 'a billy stick','an ambulance chaser', 'a pit bull', 'a Shropshire Slasher', 'a sword', 'a lying politician', 'a poisoned apple', 'a narcissistic boss', 'a blunt object', 'a bad egg', 'a lethal injection', 'a congressman'];


    for (i = 1; i < 100; i++) {
        var h3 = document.createElement('h3');
        var h3Text = document.createTextNode('Accusation - ' + i);
        h3.appendChild(h3Text);
        document.body.appendChild(h3);
    
        h3.addEventListener("click", alertnotice(i, friendNames, locationNames, weaponNames));
    }
    
    function alertnotice(i, friendNames, locationNames, weaponNames) {
        return function () {
            console.log(i);
            alert('Accusation ' + i + ' I accuse ' +  friendNames[i%5] + ' with the ' + weaponNames[i%20] + ' in ' + locationNames[i%10])
    
        }
    }
})