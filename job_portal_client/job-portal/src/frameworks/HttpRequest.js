export default class HttpRequest
{
    apiBaseUrl = "http://naveenkumarjp.com:8000";

    async getRequest(url)
    {
        var apiURL = this.apiBaseUrl + "/" + url;
        var response = await fetch(apiURL);
        var body = await response.json();
        if(response.status == 200){
            return {
                "status" : true,
                "data" : body["data"]
            };
        }else{
            return {
                "status" : false,
                "data" : body
            };
        }
    }
}