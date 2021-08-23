# openapi-xml2json

Transfer xml response to json response using api http://data.go.kr.

공공데이터포털 - 공공데이터 오픈 API 중, REST API 형식 기반 XML Response 데이터를 json 데이터로 변환 및 반환


```
npm install openapi-xml2json
```

 API KEY - 공공데이터 포털에서 발급 받은 API 키


```
const openapiXml2Json = require("openapi-xml2json");
// API KEY
const apiKey = 'OPEN_API_KEY';

// API Request Parameters (query parameters) (example)
const requestParams = {
    pageNo: 2,
    numOfRows: 10,
    meet: 3,
    rc_date: 20210814,
    rc_month: 202108
};
```

# execute request
```
const result = await openapiXml2Json('OPEN_API_END_POINT_URL', API_KEY, requestParams);

```

console.log
```
console.log(result);
[
  {
    items: [ [Object] ],
    numOfRows: [ '10' ],
    pageNo: [ '2' ],
    totalCount: [ '69' ]
  }
]
```
