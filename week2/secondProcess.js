fetch("http://localhost:3000/handleSum?counter=10",sendObj).then(callbackFunc);

var sendObj = {
    method:"GET"
}

function logResponseBody(result)
{
    console.log(result);
}
function callbackFunc(result)
{
result.json().then(logResponseBody);
}