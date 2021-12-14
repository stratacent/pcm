
var serverURL = "https://stratacent-pcm-api.herokuapp.com/"
var localURL = "http://localhost:5000/"

const getAPIURL = function(service) {

    const location = window.location.host;
    if(location.indexOf('localhost') > -1) {
        return localURL + service;
    }
    return serverURL + service;
}

export { getAPIURL }