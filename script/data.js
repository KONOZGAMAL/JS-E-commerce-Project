//items in shop
let data = [
    {
      "id": 1,
      "qty": 1,
      "Brand": "Generic",
      "type":"Fashion",
      "img": "../img/products/d3.jpeg",
      "title": "Cartoon Astronaut T-Shirts",
      "price": 1122,
      "Availability": "12 Left in Stock",
     "description":
        "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.        ",
        "imgSrc":["../img/products/d3.jpeg",
        "../img/products/d1.jpeg",
        "../img/products/d2.jpeg",
        "../img/products/d4.jpeg"],
      },
    {
      "id": 2,
      "qty": 1,
      "Brand": "DOTT JEANS WEAR",
      "type":"Fashion",
      "img": "../img/products/q1.jpeg",
      "title": "Dott Jeans Wear Men 1420 Slim Fit Striped Shirt",
      "price": 988,
      "Availability": "30 Left in Stock",
     "description":
        "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.        ",
        "imgSrc":["../img/products/q2.jpeg",
        "../img/products/q3.jpeg",
        "../img/products/q4.jpeg",
        "../img/products/q5.jpeg"],
      },
    {
      "id": 3,
      "qty": 1,
      "Brand": "Generic",
      "type":"Fashion",
      "img": "../img/products/b1.jpeg",
      "title": "Diamond Breaking Tape Abaya",
      "price": 790,
      "Availability": "11 Left in Stock",
      "description":
        "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.        ",
        "imgSrc":["../img/products/b3.jpeg",
        "../img/products/b2.jpeg",
        "../img/products/b1.jpeg",
        "../img/products/b4.jpeg"],
      },
    {
      "id": 4,
      "qty": 1,
      "Brand": "Generic",
      "type":"Fashion",
      "img": "../img/products/p1.jpeg",
      "title": "Long Shirt",
      "price": 860,
      "Availability": "5 Left in Stock",
      "description":
        "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.        ",
        "imgSrc":["../img/products/p2.jpeg",
        "../img/products/p3.jpeg",
        "../img/products/p1.jpeg",
        "../img/products/p4.jpeg"],
      },
      {
        "id": 5,
        "qty": 1,
        "Brand": "Generic",
        "type":"T-Shirts",
        "img": "../img/products/tsh1.jpeg",
        "title": "Mobaco Mens MEPU Regular Fit",
        "price": 461,
        "Availability": "5 Left in Stock",
        "description":
          "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.        ",
          "imgSrc":["../img/products/tsh2.jpeg",
          "../img/products/tsh3.jpeg",
          "../img/products/tsh1.jpeg",
          "../img/products/tsh4.jpeg"],
        },
        {
          "id": 6,
          "qty": 1,
          "Brand": "DOTT JEANS WEAR",
          "type":"T-Shirts",
          "img": "../img/products/n1.jpg",
          "title": "DOTT JEANS Striped Oxford Men shirt Slim Fit",
          "price": 299,
          "Availability": "5 Left in Stock",
          "description":
            "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.        ",
            "imgSrc":["../img/products/n2.jpg",
            "../img/products/n3.jpg",
            "../img/products/n1.jpg",
            "../img/products/n5.jpg"],
          },
          {
            "id": 7,
            "qty": 1,
            "Brand": "DOTT JEANS WEAR",
            "type":"T-Shirts",
            "img": "../img/products/f1.jpg",
            "title": "Cartoon Astronaut T-Shirts",
            "price": 770,
            "Availability": "5 Left in Stock",
            "description":
              "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.        ",
              "imgSrc":["../img/products/f3.jpg",
              "../img/products/f2.jpg",
              "../img/products/f1.jpg",
              "../img/products/f4.jpg"],
            },
            {
              "id": 8,
              "qty": 1,
              "Brand": "DOTT JEANS WEAR",
              "type":"T-Shirts",
              "img": "../img/products/n4.jpg",
              "title": "Cartoon Astronaut T-Shirts",
              "price": 500,
              "Availability": "5 Left in Stock",
              "description":
                "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.        ",
                "imgSrc":["../img/products/n8.jpg",
                "../img/products/n3.jpg",
                "../img/products/n1.jpg",
                "../img/products/n4.jpg"],
              },
  ];
  localStorage.setItem("allProduct",JSON.stringify(data));