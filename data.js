if (!localStorage.getItem('products')) {
  const products = [
      {
        name: "Aston Martin",
        price: 6400,
        image: "Aston martin (1).jpeg",
        page: "Aston.html"
      },
      {
        name: "BMW 4 Series 420d Coupe M Sport ",
        price: 6400,
        image: "BMW 4 Series 420d Coupe M Sport (4).jpeg",
        page: "BMW-420d.html"
      },
      {
        name: "BMW 4 Series 420i Coupe M Sport",
        price: 3000,
        image: "BMW 4 Series 420i Coupe M Sport  (3).jpeg",
        page: "BMW-420i.html"
      },
      {
        name: "BMW M2 Coupe",
        price: 4500,
        image: "BMW M2 Coupe  (3).jpeg",
        page: "BMW-M2-Coupe.html"
      },
      {
        name: "BMW X1",
        price: 4500,
        image: "BMW X1 (6).jpeg",
        page: "BMW-X1.html"
      },
      {
        name: "Ford Mustang 5.0 GT",
        price: 4000,
        image: "Ford Mustang 5.0 GT (1).jpeg",
        page: "Ford-Mustang.html"
      },
      {
        name: "Hyndui",
        price: 1400,
        image: "Hyndui (2).jpeg",
        page: "Hyndui.html"
      },
      {
        name: "Jaguar F-Pace R-Sport",
        price: 5000,
        image: "Jaguar F-Pace 25d AWD R-Sport (1).jpeg",
        page: "Jaguar-R-Sport.html"
      },
      {
        name: "Kia Picanto",
        price: 2400,
        image: "KIA (3).jpeg",
        page: "kia.html"
      },
      {
        name: "Lamborghini Evo",
        price: 10000,
        image: "Lamb (1).jpeg",
        page: "Lambo.html"
      },
      {
        name: "Mercedes Benz S-class",
        price: 5400,
        image: "Mercedes (3).jpeg",
        page: "S-class.html"
      },
      {
        name: "Merecedes-Benz G-Class G350d",
        price: 7000,
        image: "Mercedes-Benz G-Class G350d (5).jpeg",
        page: "G.html"
      },
      {
        name: "Merecedes-Benz ML ML63",
        price: 4700,
        image: "Mercedes-Benz ML ML63 (4).jpeg",
        page: "Mercedes-Benz-ML63.html"
      },
      {
        name: "Merecedes V300 Maybach",
        price: 7600,
        image: "V class.jpeg",
        page: "V-class.html"
      },
      {
        name: "Merecedes-Benz Vito Maybach",
        price: 7400,
        image: "Mercedes-Benz Vito (2).jpeg",
        page: "Benz Vito.html"
      },
      {
        name: "Porsche 911 Carrera GTS",
        price: 4800,
        image: "Porsche (2).png",
        page: "Porsche.html"
      },
      {
        name: "Porsche Boxster",
        price: 4800,
        image: "Boxster (1).jpg",
        page: "Boxster.html"
      },
      {
        name: "Range Rover Evoque",
        price: 5200,
        image: "Range Rover (4).jpeg",
        page: "Range.html"
      },
      {
        name: "Rolls Royce",
        price: 7400,
        image: "Rolls.jpg",
        page: "Rolls.html"
      },
      {
        name: "Toyota Yaris 1.5 XS",
        price: 2900,
        image: "Toyota Yaris 1.5 XS (3).jpeg",
        page: "Toyota Yaris.html"
      },
      {
        name: "Volvo-XC90",
        price: 4300,
        image: "Volvo (1).jpeg",
        page: "Volvo.html"
      },
      {
        name: "Land Rover Discovery",
        price: 4700,
        image: "Discovery (2).png",
        page: "Discovery.html"
      },
    // Add more products as needed
    ];

    localStorage.setItem('products', JSON.stringify(products));
}
