console.table(countries);

function getNames(countries) {
    /*
        дописать функцию, чтоб getNames возвращало список имен стран
        (массив countryNames, каждый элемент этого массива - название страны (поле name у каждого объекта))
    */
    
    var countryNames = [];
    for(var i = 0; i < countries.length; i++){
        countryNames.push(`name: ${countries[i].name}`);
    }
    return countryNames;
    //return countryNames;
}
var names = getNames(countries);
console.log(names);
//пример: после getNames(countries) в names будет храниться ['Afganistan', 'Angola', ...]


function getCapitals(countries) {
    /*
        дописать функцию, чтоб getCapitals возвращало список столиц от каждой страны
        (массив countryCapitals, каждый элемент этого массива - название столицы страны (поле capital у каждого объекта страны))
    */
    var countryCapitals = [];
    for(var i = 0; i < countries.length; i++){
        countryCapitals.push(`capital: ${countries[i].capital}`);
    }
    return countryCapitals;
}
var capitals = getCapitals(countries);
console.log(capitals);
//пример: после getCapitals(countries) в capitals будет храниться ['Kyiv', 'London', ...]


function getAverageArea(countries) {
    /*
        дописать функцию, чтоб getAverageArea возвращало среднюю площадь из массива countries.
        получается, нужно посчитать среднее арифметическое. название поля - area
        результат с точностью до 1 знака после запятой
    */
    var averageArea = [];
    var total = 0;
    for(var i = 0; i < countries.length; i++){
        averageArea.push(countries[i].area);

        for (var j = 0; j < averageArea.length; j++){
            total = (total + averageArea[i]) / averageArea.length;
        }
    }
    console.log(averageArea);
    console.log(total.toFixed(1));
    return total.toFixed(1);
}
var average = getAverageArea(countries)
//пример: в average -> 601162.3

function getUniqueRegions(countries) {
    /*
        Возвращает список уникальных названий регионов (поле region)

    */
    var uniqueRegions = [];
    for(var i = 0; i < countries.length; i++){
        uniqueRegions.push(`region: ${countries[i].region}`)
    }
    console.log(uniqueRegions);
    return uniqueRegions;
}
var unique = getUniqueRegions(countries);
//пример: unique -> ["Asia", "Europe", "Africa", "Oceania", "Americas", "Polar", "Antarctic Ocean", "Antarctic"]