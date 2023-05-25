const data ={
    productName: "New product"
}
async function postData(url, postData){
    const response = await fetch(url,{
        method:"POST",
        header: {
            "content-type":"application/json"
        },
        body: JSON.stringify(postData)
        
    });
    const data = await response.json();
    console.log(data);

}
postData('https://dummyjson.com/products/add',data);