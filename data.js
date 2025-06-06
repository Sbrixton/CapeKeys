if (!localStorage.getItem('products')) {
  const products = [
      {
        name: "Aston Martin",
        price: 1,
        image: "/CapeKeys/Aston martin (1).jpeg",
        page: "/CapeKeys/Aston.html"
      },
      {
        name: "BMW 4 Series 420d Coupe M Sport ",
        price: 6400,
        image: "/CapeKeys/BMW 4 Series 420d Coupe M Sport (4).jpeg",
        page: "/CapeKeys/BMW-420d.html"
      },
      {
        name: "BMW 4 Series 420i Coupe M Sport",
        price: 3000,
        image: "/CapeKeys/BMW 4 Series 420i Coupe M Sport  (3).jpeg",
        page: "/CapeKeys/BMW-420i.html"
      },
      {
        name: "BMW M2 Coupe",
        price: 4500,
        image: "/CapeKeys/BMW M2 Coupe  (3).jpeg",
        page: "/CapeKeys/BMW-M2-Coupe.html"
      },
      {
        name: "BMW X1",
        price: 4500,
        image: "/CapeKeys/BMW X1 (6).jpeg",
        page: "/CapeKeys/BMW-X1.html"
      },
      {
        name: "Ford Mustang 5.0 GT",
        price: 4000,
        image: "/CapeKeys/Ford Mustang 5.0 GT (1).jpeg",
        page: "/CapeKeys/Ford-Mustang.html"
      },
      {
        name: "Hyndui",
        price: 1400,
        image: "/CapeKeys/Hyndui (2).jpeg",
        page: "/CapeKeys/Hyndui.html"
      },
      {
        name: "Jaguar F-Pace R-Sport",
        price: 5000,
        image: "/CapeKeys/Jaguar F-Pace 25d AWD R-Sport (1).jpeg",
        page: "/CapeKeys/Jaguar-R-Sport.html"
      },
      {
        name: "Kia Picanto",
        price: 2400,
        image: "/CapeKeys/KIA (3).jpeg",
        page: "/CapeKeys/kia.html"
      },
      {
        name: "Lamborghini Evo",
        price: 10000,
        image: "/CapeKeys/Lamb (1).jpeg",
        page: "/CapeKeys/Lambo.html"
      },
      {
        name: "Range Rover Sport",
        price: 7000,
        image: "/CapeKeys/Land Rover Range Rover Sport.jpeg",
        page: "/CapeKeys/Rover.html"
      },
      {
        name: "Mercedes Benz S-class",
        price: 5400,
        image: "/CapeKeys/Mercedes (3).jpeg",
        page: "/CapeKeys/S-class.html"
      },
      {
        name: "Merecedes-Benz G-Class G350d",
        price: 7000,
        image: "/CapeKeys/Mercedes-Benz G-Class G350d (5).jpeg",
        page: "/CapeKeys/G.html"
      },
      {
        name: "Merecedes-Benz ML ML63",
        price: 4700,
        image: "/CapeKeys/Mercedes-Benz ML ML63 (4).jpeg",
        page: "/CapeKeys/Mercedes-Benz-ML63.html"
      },
      {
        name: "Merecedes V300 Maybach",
        price: 7600,
        image: "/CapeKeys/V class.jpeg",
        page: "/CapeKeys/V-class.html"
      },
      {
        name: "Merecedes-Benz Vito Maybach",
        price: 7400,
        image: "/CapeKeys/Mercedes-Benz Vito (2).jpeg",
        page: "/CapeKeys/Benz Vito.html"
      },
      {
        name: "Porsche 911 Carrera GTS",
        price: 4800,
        image: "/CapeKeys/Porsche (2).png",
        page: "/CapeKeys/Porsche.html"
      },
      {
        name: "Porsche Boxster",
        price: 4800,
        image: "/CapeKeys/Boxster (1).jpg",
        page: "/CapeKeys/Boxster.html"
      },
      {
        name: "Range Rover Evoque",
        price: 5200,
        image: "/CapeKeys/Range Rover (4).jpeg",
        page: "/CapeKeys/Range.html"
      },
      {
        name: "Rolls Royce",
        price: 7400,
        image: "/CapeKeys/Rolls.jpg",
        page: "/CapeKeys/Rolls.html"
      },
      {
        name: "Toyota Yaris 1.5 XS",
        price: 2900,
        image: "/CapeKeys/Toyota Yaris 1.5 XS (3).jpeg",
        page: "/CapeKeys/Toyota Yaris.html"
      },
      {
        name: "Volvo-XC90",
        price: 4300,
        image: "/CapeKeys/Volvo (1).jpeg",
        page: "/CapeKeys/Volvo.html"
      },
      {
        name: "Land Rover Discovery",
        price: 4700,
        image: "/CapeKeys/Discovery (2).png",
        page: "/CapeKeys/Discovery.html"
      },
    // Add more products as needed
    ];

    localStorage.setItem('products', JSON.stringify(products));
}
