let apiKey = '49823e8b82bd4187a008d2ef878ff0a6';
$.getJSON('https://ipgeolocation.abstractapi.com/v1/?api_key=' + apiKey, function (data) {
    document.getElementById("user-info").innerHTML = (JSON.stringify(data, null, 2)).replaceAll(",", "<br />")
});
