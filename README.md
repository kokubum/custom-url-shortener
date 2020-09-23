# Custom Url Shortener
A custom url shortener API made with express and mongoDB.
<br>
<br>
This API have a route **/api/v1/shortener** that receives a **json** with this structure:
```
{
  "originalUrl":"www.someurl.com.br",
  "custom":true,
  "customName":"someCustomName"
}
```
The **custom** and **customName** fields are not required, if they are provided, the API will respond with an url shortener using the customName that will redirect to the original url.
```
http://serverBaseUrl/customName
```
If the **custom** is false, or not provided, the API will follow the same behavior of a simple url shortener.
```
http://serverBaseUrl/someRandomGeneratedCode
```
## Getting Started

Clone this repository:
```
git clone https://github.com/kokubum/node-crud-api.git
```
Make sure that you have node installed in your machine. After that, install the packages:
```
npm install
```
Create a **.env** file in your root directory with information for your mongo database and base url.<br><br>
**Ex: (DATABASE_URI, DB_USERNAME, DB_PASSWORD, BASE_URL)**.

**obs:** If the DATABASE_URI is not defined, a local uri will be given: **mongodb://localhost:27017/url-shortener-api**<br>

Run the server:
```
npm start
```
