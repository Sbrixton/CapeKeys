if (!localStorage.getItem('products')) {
  const products = [
      {
        name: "Aston Martin",
        price: 6400,
        image: "Aston martin (1).jpeg"
      },
      {
        name: "BMW 4 Series 420d Coupe M Sport ",
        price: 6400,
        image: "BMW 4 Series 420d Coupe M Sport (4).jpeg"
      },
      {
        name: "BMW 4 Series 420i Coupe M Sport",
        price: 3000,
        image: "BMW 4 Series 420i Coupe M Sport (3).jpeg"
      },
      {
        name: "BMW M2 Coupe",
        price: 4500,
        image: "BMW M2 Coupe (3).jpeg"
      },
      {
        name: "BMW X1",
        price: 4500,
        image: "BMW 4 Series 420i Coupe M Sport (3).jpeg"
      },
      {
        name: "BMW 4 Series 420i Coupe M Sport",
        price: 280000,
        image: "BMW X1 (3).jpeg"
      },
      {
        name: "Ford Mustang 5.0 GT",
        price: 4000,
        image: "Ford Mustang 5.0 GT (1).jpeg"
      },
      {
        name: "Hyndui",
        price: 1400,
        image: "Hyndui (2).jpeg"
      },
      {
        name: "Jaguar F-Pace R-Sport",
        price: 5000,
        image: "Jaguar F-Pace 25d AWD R-Sport (1).jpeg"
      },
      {
        name: "Kia Picanto",
        price: 2400,
        image: "KIA (3).jpeg"
      },
      {
        name: "Lamborghini Evo",
        price: 10000,
        image: "Lambo (1).jpeg"
      },
      {
        name: "Mercedes Benz S-class",
        price: 5400,
        image: "Mercedes (3).jpeg"
      },
      {
        name: "Merecedes-Benz G-Class G350d",
        price: 7000,
        image: "Merecedes-Benz G-Class G350d (3).jpeg"
      },
      {
        name: "Merecedes-Benz ML ML63",
        price: 4700,
        image: "Merecedes-Benz ML ML63 (3).jpeg"
      },
      {
        name: "Merecedes V300 Maybach",
        price: 7600,
        image: "Vclass.jpeg"
      },
      {
        name: "Merecedes-Benz Vito Maybach",
        price: 7400,
        image: "Merecedes-Benz Vito (2).jpeg"
      },
      {
        name: "Porsche 911 Carrera GTS",
        price: 4800,
        image: "Porschet (3).jpeg"
      },
      {
        name: "Porsche Boxster",
        price: 4800,
        image: "Boxster_(1)_upscaled.jpeg"
      },
      {
        name: "Range Rover Evoque",
        price: 5200,
        image: "Range Rover (4).jpeg"
      },
      {
        name: "Rolls Royce",
        price: 7400,
        image: "Rolls1.jpg"
      },
      {
        name: "Toyota Yaris 1.5 XS",
        price: 2900,
        image: "Toyota Yaris 1.5 XS (3).jpeg"
      },
      {
        name: "Volvo-XC90",
        price: 4300,
        image: "Volvo (1).jpeg"
      },
      {
        name: "Land Rover Discovery",
        price: 10000,
        image: "Discovery (1).jpeg"
      },
    // Add more products as needed
    ];

  localStorage.setItem('products', JSON.stringify(products));
}
