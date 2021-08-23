/*!
 * Transfer xml response to json response using api http://data.go.kr.
 * 공공데이터포털 - 공공데이터 오픈 API 중, REST API 형식 기반 XML Response 데이터를 json 데이터로 변환 및 반환
 * 
 * API KEY - 공공데이터 포털에서 발급 받은 API 키
 * 
 * 
 * @author jay <jaychoi201@gmail.com>
 * @license MIT
 */

const got = require('got');
const parseString = require('xml2js').parseString;


/** Set open api base url with apikey */
const getBaseUrl = async (url, apiKey) => {
    return url + "?" + encodeURIComponent("ServiceKey") + "=" + apiKey;
};

/** Add Query parameter at base url */
const addQueryParameter = async (url, name, value) => {
    return (url + "&" +
        encodeURIComponent(name.toString()) +
        "=" +
        encodeURIComponent(value.toString()));
}

const getRequestUrl = async (url, apiKey, requestParams) => {
    url = await getBaseUrl(url, apiKey);
    for (key in requestParams) {
        url = await addQueryParameter(url, key, requestParams[key]);
    }
    return url;
}

const openapiXml2Json = async (baseUrl, apiKey, requestParams) => {
    try {
        let result;
        let url = await getRequestUrl(baseUrl, apiKey, requestParams);
        const response = await got(url);

        parseString(response.body, (err, res) => {
            result = res.response.body;
        });

        return result;

    } catch (error) {
        console.log(error.body);
    }
}

module.exports = openapiXml2Json;