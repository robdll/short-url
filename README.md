# **Short Url**

Microservice node API featuring NextJs and mongoDB to shorten long url

[Demo](https://short-url-six-sigma.vercel.app/)

## **Installation**

1. clone this repository

```bash
git clone https://github.com/robdll/short-url
```

2. move to the project directory and install dependecies

```bash
cd short-url
yarn
```

3. run locally

```bash
yarn dev
```

4. visit [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# **API usage**

### **POST endpoint**

> `<projecturl>`/api/shorturl

### **Request body**

json object containing the following key/value

`url`: a valid url

example: `{ url: "https://www.google.com" }`

### **Response**

json object containing the following key/value

`original_url`: original user url  
`short_url`: id of the url

### **Response example**

```
{
    "original_url":"www.google.com",
    "short_url": 650
}
```

Short url can is now available via <b>GET</b> request to the url
[[projectURL]/api/shorturl/10](robertodilillo.dev)

## Deploy

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
