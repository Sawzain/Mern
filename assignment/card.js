const product=[
    {
        "id":1,
        "title":"iPhone 9",
        "description":"An apple mobile which is nothing like apple",
        "price":549,
        "discountPercentage":12.96,
        "rating":4.69,
        "stock":94,"brand":"Apple",
        "category":"smartphones",
        "thumbnail":"https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        "images":
            "https://i.dummyjson.com/data/products/1/1.jpg",
            
    },
    {"id":2,
    "title":"iPhone X",
    "description":"SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    "price":899,
    "discountPercentage":17.94,
    "rating":4.44,
    "stock":34,
    "brand":"Apple",
    "category":"smartphones",
    "thumbnail":"https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    "images":
        "https://i.dummyjson.com/data/products/2/1.jpg"
        
    },
    {"id":3,
    "title":"Samsung Universe 9",
    "description":"Samsung's new variant which goes beyond Galaxy to the Universe",
    "price":1249,
    "discountPercentage":15.46,
    "rating":4.09,
    "stock":36,
    "brand":"Samsung",
    "category":"smartphones",
    "thumbnail":"https://i.dummyjson.com/data/products/3/thumbnail.jpg",
    "images":"https://i.dummyjson.com/data/products/3/1.jpg"
     },
    
     {"id":4,
     "title":"OPPOF19",
     "description":"OPPO F19 is officially announced on April 2021.",
     "price":280,"discountPercentage":17.91,
     "rating":4.3,
     "stock":123,
     "brand":"OPPO",
     "category":"smartphones",
     "thumbnail":"https://i.dummyjson.com/data/products/4/thumbnail.jpg",
     "images":
     "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
    },

    {"id":5,
    "title":"Huawei P30",
    "description":"Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    "price":499,
    "discountPercentage":10.58,
    "rating":4.09,
    "stock":32,
    "brand":"Huawei",
    "category":"smartphones",
    "thumbnail":"https://i.dummyjson.com/data/products/5/thumbnail.jpg",
    "images":
    "https://i.dummyjson.com/data/products/5/3.jpg"},
    ]

    
    const container =document.getElementById('container')
    container.className = "d-flex justify-content-around flex-wrap";
    let card
    product.forEach((Data)=>{
        card=document.createElement('div')
        card.className='card'
        card.style.width='18rem'
        
        const image =document.createElement('img')
        image.src=Data.thumbnail
        image.className='h-50'
        card.append(image)
        const body=document.createElement('div')
        body.className='card-body'
        card.append(body)
        const title=document.createElement('h5')
        title.className='card-title'
        title.innerHTML=Data.title
        card.append(title)
        const description=document.createElement('p')
        description.className='card-text'
        card.append(description)
        description.innerHTML=Data.description
        const button=document.createElement('a')
        button.className='btn btn-primary'
        button.innerHTML='View product'
        card.append(button)
        
        container.append(card)
    })