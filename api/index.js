// https://transport.opendata.ch/docs.html

/**
 * Example:
 * exports.searchLocations('Winterthur')
 *     .then(locations => console.log(locations))
 *     .catch(e => console.error(e))
 */
exports.findLocation = query => {
    return get('locations', {query})
};

/**
 * Example (location from searchLocations):
 * exports.getStationboard(location)
 *     .then(stationboard => console.log(stationboard))
 *     .catch(e => console.error(e))
 */
exports.getStationboard = location => {
    return get('stationboard', {id: location.id})
};

function get(resource, parameters) {
    const uri = `https://transport.opendata.ch/v1/${resource}`;

    return fetch(uri + paramToString(parameters)).then((response) => {
        return response.json();
    });

}

function paramToString(parameters) {
    let result = "";
    if (parameters) {
        result = "?";
        Object.keys(parameters).forEach((key) => {
            result += key + "=" + parameters[key] + "&";
        });
        result.substring(0, result.length - 1);
    }
    return result;

    //MOCHA can't handle that :(
    // let searchParams = new URLSearchParams();
    // return "?" + searchParams.append(Object.keys(parameters)[0], parameters[Object.keys(parameters)[0]]).toString();
}
