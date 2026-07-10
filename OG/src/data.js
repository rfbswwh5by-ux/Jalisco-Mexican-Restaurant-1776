export const restaurant = {
  name: 'Jalisco Mexican Restaurant',
  tagline: 'Authentic Mexican Food in Fulton, Missouri',
  rating: 4.5,
  reviewCount: '1K+',
  priceRange: '$10–20',
  phone: '(573) 592-0047',
  address: '1211 US-54 BUS, Fulton, MO 65251',
  website: '#',
}

export const hours = [
  { day: 'Monday',    open: '11 AM', close: '9 PM' },
  { day: 'Tuesday',   open: '11 AM', close: '9 PM' },
  { day: 'Wednesday', open: '11 AM', close: '9 PM' },
  { day: 'Thursday',  open: '11 AM', close: '9 PM' },
  { day: 'Friday',    open: '11 AM', close: '10 PM' },
  { day: 'Saturday',  open: '11 AM', close: '10 PM' },
  { day: 'Sunday',    open: '11 AM', close: '9 PM' },
]

export const popularDishes = [
  {
    name: "Fajitas Jalisco",
    price: "$16.99",
    desc: "Chicken, steak, chorizo, and shrimp cooked with bell peppers, tomatoes, and onions."
  },
  {
    name: "Monster Chimi",
    price: "$12.75",
    desc: "A 10-inch flour tortilla filled with grilled chicken, steak, and mushrooms, topped with cheese and ranchero sauce."
  },
  {
    name: "Pollo Jalisco",
    price: "$12.25+",
    desc: "Grilled chicken over rice covered with cheese sauce. Served with fries, lettuce, sour cream, and tomatoes."
  },
  {
    name: "Steak La Paz",
    price: "$16.99",
    desc: "Ribeye steak with grilled shrimp, cheese sauce, and fries."
  },
  {
    name: "Burrito California",
    price: "$13.29",
    desc: "Grilled chicken and steak with rice, beans, lettuce, guacamole, sour cream, pico de gallo, and cheese sauce."
  },
  {
    name: "Margaritas",
    price: "$4.50+",
    desc: "Lime and flavored margaritas available regular, jumbo, and pitcher size."
  }
]

export const enchiladas = [
  { name: 'Enchiladas Suizas', desc: 'Three chicken enchiladas topped with a creamy tomatillo sauce and melted cheese.', price: '$12.99' },
  { name: 'Enchilada Jalisco', desc: 'Shrimp enchiladas in a mild red sauce, topped with cheese and sliced avocado.', price: '$14.99' },
  { name: 'Enchilada Bandera', desc: 'Three enchiladas in green, white, and red sauces — representing the colors of the Mexican flag.', price: '$13.49' },
  { name: 'Cheese Enchilada', desc: 'Classic corn tortillas rolled with melted cheese and smothered in red enchilada sauce.', price: '$10.99' },
]

export const otherOptions = [
  { name: 'Pollo Feliz', desc: 'Grilled chicken breast topped with cheese sauce and mushrooms. Served with rice and salad.', price: '$13.99' },
  { name: 'Mexican Horseshoe', desc: 'A local favorite — tortilla chips topped with your choice of meat, cheese sauce, and all the fixings.', price: '$12.49' },
  { name: 'Fajita Quesadilla', desc: 'A large quesadilla packed with grilled fajita meat, peppers, onions, and melted cheese.', price: '$13.49' },
]

export const fullMenu = [
  {
    id: "appetizers",
    title: "Appetizers & Dips",
    items: [
      { name: "Cheese Dip", desc: "", price: "4.75" },
      { name: "Guacamole", desc: "", price: "4.75" },
      { name: "Bean Dip", desc: "", price: "7.25" },
      { name: "Beef Queso Dip", desc: "Ground beef and pico de gallo with cheese sauce.", price: "7.99" },
      { name: "Arroz con Queso", desc: "Rice topped with cheese sauce.", price: "5.25" },
      { name: "Guacamole Casero", desc: "Chunks of avocado mixed with tomato, onion, cilantro, jalapeño, lime, and salt.", price: "7.99" },
      { name: "Queso Fundido", desc: "Mexican sausage topped with melted cheese. Served with tortillas.", price: "8.25" },
      { name: "Appetizer Sampler", desc: "2 cheese quesadillas, 2 chicken taquitos, lettuce, sour cream, and pico de gallo.", price: "8.99" },
      { name: "Quesadilla", desc: "Chicken, beef, or mushrooms.", price: "4.99" }
    ]
  },
  {
    id: "nachos",
    title: "Nachos",
    items: [
      { name: "Cheese Nachos", desc: "Fried corn tortilla chips topped with cheese.", price: "7.25" },
      { name: "Shredded Chicken Nachos", desc: "Half order available.", price: "7.99" },
      { name: "Ground Beef Nachos", desc: "Half order available.", price: "7.99" },
      { name: "Grilled Steak Nachos", desc: "", price: "11.25" },
      { name: "Grilled Chicken Nachos", desc: "", price: "11.25" },
      { name: "Grilled Shrimp and Chorizo Nachos", desc: "", price: "13.99" },
      { name: "Nachos Supreme", desc: "Topped with chicken, beef, beans, lettuce, tomatoes, sour cream, and cheese.", price: "10.25" },
      { name: "Nachos Fajita Style", desc: "Cooked with onions, tomatoes, and bell peppers. Choice of chicken, steak, shrimp, or mixed.", price: "12.25+" }
    ]
  },
  {
  id: "combinations",
  title: "Make Your Own Combination",
  items: [
    { name: "Combination Plate", desc: "Pick 1 item from Side A and 1 item from Side B. Includes rice and beans.", price: "10.25" },
    { name: "Side A Options", desc: "Chimichanga, burrito, quesadilla, chile relleno, or tostaguac.", price: "" },
    { name: "Side B Options", desc: "Taco, enchilada, tostada, mini chimichanga, or tamal.", price: "" },
    { name: "Combo 1", desc: "Burrito, enchilada, rice, and beans.", price: "10.25" },
    { name: "Combo 2", desc: "Burrito, taco, rice, and beans.", price: "10.25" },
    { name: "Combo 3", desc: "Quesadilla, taco, rice, and beans.", price: "10.25" },
    { name: "Combo 4", desc: "Enchilada, tamal, rice, and beans.", price: "10.25" },
    { name: "Combo 5", desc: "Two enchiladas, rice, and beans.", price: "10.25" },
    { name: "Combo 6", desc: "Chimichanga, taco, rice, and beans.", price: "10.25" },
    { name: "Combo 7", desc: "Chimichanga, mini chimi, rice, and beans.", price: "10.25" }
  ]
},
{
  id: "fajitas",
  title: "Fajitas",
  items: [
    { name: "Chicken Fajitas", desc: "Cooked with bell peppers, tomatoes, and onions. Served with rice, beans, lettuce, sour cream, pico de gallo, cheese, and tortillas.", price: "1 for 13.99 • 2 for 25.99" },
    { name: "Steak Fajitas", desc: "Cooked with bell peppers, tomatoes, and onions.", price: "1 for 14.99 • 2 for 26.99" },
    { name: "Fajitas Mix", desc: "Chicken, steak, and shrimp.", price: "1 for 16.25 • 2 for 27.99" },
    { name: "Fajitas Jalisco", desc: "Chicken, steak, chorizo, and shrimp.", price: "1 for 16.99 • 2 for 27.99" },
    { name: "Fajitas Camarón", desc: "Shrimp fajitas.", price: "1 for 18.50 • 2 for 28.50" },
    { name: "Fajita Hawaiana", desc: "Sautéed onion, bell pepper, and pineapple. Choice of chicken, steak, or shrimp.", price: "15.80+" },
    { name: "Super Fajitas", desc: "Chicken, steak, chorizo, and carnitas cooked with bell peppers, tomatoes, and onions. Topped with yellow and white cheese.", price: "17.99" },
    { name: "Mar y Tierra", desc: "Chicken, steak, shrimp, fish fillet, and chorizo. Served on a bed of bell peppers, onions, and tomatoes.", price: "24.75" },
    { name: "Mi Fajita", desc: "Chicken, steak, Mexican sausage, onions, tomatoes, cilantro, and jalapeño. Not too spicy, not too mild.", price: "16.25" }
  ]
},
{
  id: "chicken",
  title: "Chicken From the Grill",
  items: [
    { name: "El Jalisco Special", desc: "Chicken, steak, and shrimp cooked with bell peppers, tomatoes, and onions. Served on rice covered with cheese sauce.", price: "13.99" },
    { name: "Grilled Chicken Tacos", desc: "Three grilled chicken tacos served with beans, pico de gallo, and green salsa.", price: "11.99" },
    { name: "Pollo Cancún", desc: "Chicken breast and shrimp, pico de gallo, and mushrooms. Served with rice, salad, and tortillas.", price: "14.50" },
    { name: "Pollo Feliz", desc: "Grilled chicken breast with shrimp, mushrooms, onions, bell peppers, and melted cheese. Served with rice, beans, and tortillas.", price: "14.75" },
    { name: "Chicken Fiesta", desc: "Grilled chicken breast served on a bed of vegetables covered with cheese sauce.", price: "13.75" },
    { name: "Pollo Palapa", desc: "Chicken breast covered with cheese sauce. Served with salad and fries.", price: "12.25" },
    { name: "Pollo Jalisco", desc: "Grilled chicken on a bed of rice, covered with cheese sauce. Served with fries, lettuce, sour cream, and tomatoes.", price: "12.25+" },
    { name: "Pollo Michoacano", desc: "Grilled chicken breast with chorizo and topped with melted cheese. Served with beans, salad, and tortillas.", price: "13.25" },
    { name: "Pollo a la Parrilla", desc: "Grilled chicken breast with mushrooms, onions, and bell peppers. Topped with melted cheese. Served with beans, salad, and tortillas.", price: "13.25" },
    { name: "Pollo Loco", desc: "Grilled chicken breast with ranchero sauce and cheese. Served with salad, rice, beans, and tortillas.", price: "13.25" }
  ]
},
{
  id: "steak",
  title: "Steak",
  items: [
    { name: "Carne Asada", desc: "Slices of steak with cooked onions on top. Served with rice, beans, guacamole salad, and tortillas.", price: "13.75" },
    { name: "Steak Mexicano", desc: "Ribeye topped with cooked onions, tomatoes, and bell peppers. Served with rice, beans, and tortillas.", price: "15.75" },
    { name: "Steak Ranchero", desc: "Ribeye steak with ranchero sauce on top. Served with rice, beans, and tortillas.", price: "15.75" },
    { name: "Tacos de Carne Asada", desc: "Three steak tacos served with pico de gallo and beans.", price: "13.75" },
    { name: "Steak La Paz", desc: "Ribeye steak, grilled shrimp, cheese sauce, and fries.", price: "16.99" },
    { name: "Steak and Shrimp", desc: "Ribeye steak with shrimp on a bed of mushrooms, onions, bell peppers, and melted cheese. Comes with rice, beans, and tortillas.", price: "16.99" }
  ]
},
  {
  id: "seafood",
  title: "Seafood",
  items: [
    {
      name: "Gordo Special",
      desc: "Shrimp cooked with garlic and dried red peppers. Served on a bed of rice with lettuce, pico de gallo, and sliced avocado.",
      price: "15.25"
    },
    {
      name: "Camarones a la Diabla",
      desc: "Grilled shrimp cooked in our special red Mexican sauce. Served with rice and guacamole salad.",
      price: "14.99"
    },
    {
      name: "Fish Jalisco",
      desc: "Grilled tilapia fillet served with rice and guacamole salad.",
      price: "13.75"
    },
    {
      name: "Fish or Shrimp Tacos",
      desc: "Three tilapia fish or shrimp tacos with pico de gallo, lettuce, and cheese. Served with rice and beans.",
      price: "13.75"
    },
    {
      name: "Steamed Vegetable Shrimp",
      desc: "Grilled shrimp over fresh steamed vegetables. Served with rice and cheese dip.",
      price: "14.99"
    }
  ]
},
{
  id: "traditional",
  title: "Traditional Mexican Dishes",
  items: [
    {
      name: "Carnitas Dinner",
      desc: "Slowly braised pork with sautéed onions. Served with rice, beans, lettuce, sour cream, pico de gallo, and tortillas.",
      price: "12.75"
    },
    {
      name: "Chile Colorado",
      desc: "Chicken or steak with red chile sauce. Served with rice, beans, and flour tortillas.",
      price: "12.50"
    },
    {
      name: "Chile Verde",
      desc: "Choice of pork or steak cooked with green tomatillo sauce. Served with rice, beans, and flour tortillas.",
      price: "12.50"
    },
    {
      name: "Mexican Taquitos",
      desc: "Four deep-fried rolled corn tortillas stuffed with chicken. Served with lettuce, sour cream, pico de gallo, and cheese dip.",
      price: "10.99"
    }
  ]
},
{
  id: "burritos",
  title: "Burritos",
  items: [
    {
      name: "Burritos Azteca",
      desc: "Two burritos: one grilled chicken and one steak. Topped with rice and cheese sauce.",
      price: "12.25"
    },
    {
      name: "Burrito Real",
      desc: "Chicken or beef burrito topped with lettuce, sour cream, cheese, tomatoes, rice, and beans.",
      price: "11.25"
    },
    {
      name: "Burritos Supremos",
      desc: "Two burritos: one chicken with beans and one beef with beans. Topped with red sauce, lettuce, sour cream, tomatoes, and cheese.",
      price: "11.75"
    },
    {
      name: "Burrito Roqueta",
      desc: "Flour tortilla stuffed with pork carnitas. Topped with pico de gallo, cheese, and green tomatillo sauce. Served with rice and beans.",
      price: "11.75"
    },
    {
      name: "Burrito Fajita",
      desc: "Choice of chicken or steak cooked with bell peppers, onions, and tomatoes. Served with rice, lettuce, guacamole, sour cream, and pico de gallo.",
      price: "12.25"
    },
    {
      name: "Burrito California",
      desc: "Grilled chicken and steak with lettuce, guacamole, sour cream, pico de gallo, rice, and beans. Topped with cheese sauce and green tomatillo sauce.",
      price: "13.29"
    },
    {
      name: "Burrito Carne Asada",
      desc: "Steak and beans inside. Served with rice, lettuce, guacamole, sour cream, and pico de gallo.",
      price: "12.25"
    },
    {
      name: "Burritos San José",
      desc: "Two steak burritos covered with cheese sauce. Served with rice and beans.",
      price: "12.75"
    },
    {
      name: "Burrito Río Grande",
      desc: "Flour tortilla filled with beef tips, beans, and rice, topped with cheese sauce and red sauce.",
      price: "11.25"
    },
    {
      name: "Burrito Mexicano",
      desc: "Flour tortilla stuffed with your choice of chicken or beef. Served with lettuce, tomatoes, sour cream, and red sauce.",
      price: "11.25"
    },
    {
      name: "Burrito Ranchero",
      desc: "Flour tortilla with grilled chicken, sour cream, tomatoes, lettuce, and beans inside, topped with cheese sauce.",
      price: "12.75"
    }
  ]
},
  {
  id: "quesadillas",
  title: "Quesadillas",
  items: [
    {
      name: "Quesadilla Mexicana",
      desc: "Flour tortilla stuffed with cheese, beans, and your choice of beef tips, ground beef, or chicken. Served with lettuce, tomatoes, and sour cream.",
      price: "9.75"
    },
    {
      name: "Quesadilla Ranchera",
      desc: "Four tortillas stuffed with cheese and cooked mushrooms. Served with lettuce, sour cream, and tomatoes.",
      price: "9.50"
    },
    {
      name: "Quesadilla Jalisco",
      desc: "Grilled shrimp and beans inside. Served with rice, lettuce, tomatoes, sour cream, and cheese sauce on top.",
      price: "11.75"
    },
    {
      name: "Quesadilla Fajita Chicken Or Steak",
      desc: "Cooked with vegetables. Served with rice, lettuce, tomatoes, sour cream, and pico de gallo. Choice of Chicken or Steak.",
      price: "Chicken for 12.50 • Steak for 12.99"
    },
    {
      name: "Quesadilla Suprema",
      desc: "Stuffed with shredded chicken. Served with cheese, lettuce, sour cream, tomatoes, and rice. Grilled chicken or steak for 13.99",
      price: "12.99"
    }
  ]
},
{
  id: "enchiladas",
  title: "Enchiladas",
  items: [
    {
      name: "Enchiladas Supremas",
      desc: "Combination of one chicken enchilada, one bean enchilada, one cheese enchilada, and one beef enchilada. Topped with enchilada sauce, lettuce, cheese, tomatoes, and sour cream.",
      price: "12.25"
    },
    {
      name: "Enchilada Azteca",
      desc: "One chicken enchilada, one bean enchilada, one cheese enchilada, and one beef enchilada. Topped with enchilada sauce, rice, and cheese sauce.",
      price: "12.50"
    },
    {
      name: "Enchiladas Jalisco",
      desc: "Three shrimp enchiladas topped with cheese sauce. Served with rice, lettuce, sour cream, guacamole, and tomatoes.",
      price: "12.75"
    },
    {
      name: "Enchiladas Bandera",
      desc: "One chicken with green salsa, one beef with cheese sauce, and one cheese with enchilada sauce. Served with rice and salad.",
      price: "11.99"
    },
    {
      name: "Yolandas",
      desc: "Three chicken enchiladas topped with ranchero sauce. Served with rice and salad.",
      price: "11.99"
    },
    {
      name: "Enchiladas Suizas",
      desc: "Four chicken enchiladas topped with green tomatillo sauce, cheese sauce, onions, and cilantro.",
      price: "12.25"
    },
    {
      name: "Enchiladas el Compadre",
      desc: "Two cheese enchiladas topped with grilled chicken. Served with rice and beans.",
      price: "12.25"
    }
  ]
},
  {
  id: "chimichangas",
  title: "Chimichangas",
  items: [
    {
      name: "Chimichanga",
      desc: "A flour tortilla fried golden brown, filled with ground beef, chicken or beef tips. Topped with cheese sauce. Served with rice, beans, lettuce, tomatoes, and sour cream.",
      price: "10.50"
    },
    {
      name: "Chimichanga Shrimp",
      desc: "A flour tortilla fried golden brown, filled with shrimp and topped with cheese sauce. Served with rice, beans, lettuce, tomatoes, and sour cream.",
      price: "11.75"
    },
    {
      name: "Chimichangas Reales",
      desc: "One beef and one chicken chimichanga topped with cheese sauce. Served with rice and beans.",
      price: "11.75"
    },
    {
      name: "Chimichanga Fajita",
      desc: "Stuffed with your choice of meat, bell peppers, onions, and tomatoes. Topped with cheese sauce. Served with lettuce, sour cream, pico de gallo, rice, and beans.",
      price: "11.75+"
    },
    {
      name: "Monster Chimi",
      desc: "10-inch flour tortilla filled with grilled chicken, steak, and mushrooms. Served on a hot skillet with bell peppers and onions. Topped with cheese and ranchero sauce.",
      price: "12.75"
    },
    {
      name: "Dos Changuitos",
      desc: "One chicken mini chimi and one beef mini chimi on top of queso fundido.",
      price: "11.25"
    }
  ]
},
{
  id: "lunch-specials",
  title: "Lunch Specials",
  items: [
    { name: "Lunch #1", desc: "One enchilada, one taco, rice, and beans.", price: "8.49" },
    { name: "Lunch #2", desc: "Chile relleno, one taco, beans, and guacamole salad.", price: "8.75" },
    { name: "Lunch #3", desc: "Cheese quesadilla, one taco, and rice.", price: "7.95" },
    { name: "Lunch #4", desc: "One beef burrito, rice, and beans.", price: "7.95" },
    { name: "Lunch #5", desc: "One beef burrito, one taco, and beans.", price: "7.95" },
    { name: "Lunch #6", desc: "One chicken enchilada, rice, and beans.", price: "7.95" },
    { name: "Lunch #7", desc: "One chicken quesadilla, rice, and beans.", price: "7.95" },
    { name: "Lunch #8", desc: "One tamal, rice, and beans.", price: "7.95" },
    { name: "Lunch #9", desc: "Two chicken taquitos with rice, beans, lettuce, pico de gallo, and sour cream.", price: "7.95" },
    { name: "Lunch #10", desc: "Grilled chicken breast served with rice, salad, and tortillas.", price: "9.25" }
  ]
},
{
  id: "lunch-favorites",
  title: "Lunch Favorites",
  items: [
    {
      name: "Lunch Taco Salad",
      desc: "Ground beef or chicken with cheese sauce, lettuce, tomatoes, cheese, and sour cream.",
      price: "8.95"
    },
    {
      name: "Lunch Chimichanga",
      desc: "Ground beef, chicken, or beef tips topped with cheese sauce. Served with rice, beans, lettuce, tomatoes, and sour cream.",
      price: "9.25"
    },
    {
      name: "Huevos Rancheros",
      desc: "Three eggs with ranchero sauce. Served with rice, beans, and tortillas.",
      price: "8.99"
    },
    {
      name: "Huevos con Chorizo",
      desc: "Three scrambled eggs mixed with Mexican sausage. Served with rice, beans, and tortillas.",
      price: "8.99"
    },
    {
      name: "Arroz con Pollo",
      desc: "Grilled chicken over rice with lettuce, tomatoes, cheese, and sour cream.",
      price: "9.25"
    },
    {
      name: "Chori Pollo",
      desc: "Grilled chicken breast topped with chorizo and cheese. Served with rice, beans, and tortillas.",
      price: "10.25"
    },
    {
      name: "Pollo con Queso",
      desc: "Grilled chicken breast topped with cheese sauce. Served with rice, beans, and tortillas.",
      price: "9.99"
    },
    {
      name: "Lunch Quesadilla Fajita",
      desc: "Chicken or steak cooked with vegetables. Served with rice, lettuce, tomatoes, sour cream, and pico de gallo.",
      price: "9.75"
    },
    {
      name: "Lunch Fajitas",
      desc: "Chicken or steak cooked with bell peppers, onions, and tomatoes. Served with rice, beans, lettuce, sour cream, pico de gallo, cheese, and tortillas.",
      price: "11.99"
    }
  ]
},
  {
  id: "soups",
  title: "Soups",
  items: [
    {
      name: "Caldo de Pollo",
      desc: "Mexican chicken soup with chicken chunks, rice, pico de gallo, and three tortillas.",
      price: "9.25"
    },
    {
      name: "Mexican Shrimp Soup",
      desc: "With rice, pico de gallo, and three tortillas.",
      price: "12.75"
    },
    {
      name: "Caldo del Mar",
      desc: "Shrimp and tilapia soup simmered with California mix onions, tomatoes, and spices.",
      price: "13.99"
    }
  ]
},
{
  id: "salads",
  title: "Salads",
  items: [
    {
      name: "Grilled Chicken Salad",
      desc: "Grilled chicken with lettuce, tomatoes, onions, cheese, and mushrooms.",
      price: "10.95"
    },
    {
      name: "Dinner Taco Salad",
      desc: "A crispy flour tortilla, chicken or beef, cheese sauce, lettuce, tomatoes, shredded cheese, and sour cream.",
      price: "9.50"
    },
    {
      name: "Taco Salad Fajitas",
      desc: "A crispy flour tortilla with your choice of grilled chicken or steak with sautéed onions, bell peppers, cheese sauce, lettuce, tomatoes, cheese, and sour cream.",
      price: "10.95"
    },
    {
      name: "Shrimp Salad",
      desc: "Shrimp with lettuce, tomatoes, onions, avocado slices, cheese, and mushrooms.",
      price: "12.95"
    }
  ]
},
{
  id: "vegetarian",
  title: "Vegetarian",
  items: [
    {
      name: "Vegetarian #1",
      desc: "One bean tostada, one cheese enchilada, and one bean burrito.",
      price: "10.25"
    },
    {
      name: "Vegetarian #2",
      desc: "One cheese burrito and one bean tostada. Served with rice.",
      price: "10.25"
    },
    {
      name: "Vegetarian #3",
      desc: "One bean burrito, one cheese enchilada, and one quesadilla.",
      price: "10.25"
    },
    {
      name: "Vegetarian #4",
      desc: "One chalupa, one bean burrito, and one quesadilla.",
      price: "10.25"
    },
    {
      name: "Vegetarian #5",
      desc: "Two burritos with cooked bell peppers, tomatoes, and onions. Topped with melted cheese.",
      price: "10.25"
    },
    {
      name: "Vegetarian #6",
      desc: "Two chile rellenos served with rice and beans.",
      price: "10.25"
    },
    {
      name: "Vegetarian #7",
      desc: "Two cheese quesadillas topped with mushrooms. Served with rice.",
      price: "10.25"
    }
  ]
},
  {
  id: "vegetarian-fajitas",
  title: "Vegetarian Fajitas",
  items: [
    {
      name: "Vegetarian Fajitas",
      desc: "Grilled broccoli, zucchini, onions, bell peppers, carrots, cauliflower, and mushrooms.",
      price: "12.99"
    },
    {
      name: "Add Chicken",
      desc: "",
      price: "+4.00"
    },
    {
      name: "Add Steak",
      desc: "",
      price: "+5.00"
    },
    {
      name: "Add Shrimp",
      desc: "",
      price: "+7.25"
    }
  ]
},
  {
  id: "a-la-carte",
  title: "À La Carte",
  items: [
    { name: "Beans", desc: "", price: "2.95" },
    { name: "Mexican Rice", desc: "", price: "2.95" },
    { name: "Cheese Quesadilla", desc: "1 for", price: "3.95" },
    { name: "Cheese Quesadilla", desc: "2 for", price: "7.25" },
    { name: "Beef, Chicken or Beef Tips Quesadilla", desc: "1 for", price: "4.99" },
    { name: "Beef, Chicken or Beef Tips Quesadilla", desc: "2 for", price: "9.25" },
    { name: "Tamale", desc: "1 for", price: "3.99" },
    { name: "Tamale", desc: "3 for", price: "10.55" },
    { name: "Burrito", desc: "1 for", price: "5.25" },
    { name: "Burrito", desc: "2 for", price: "9.99" },
    { name: "Enchilada (Cheese, Chicken or Beef)", desc: "1 for", price: "3.15" },
    { name: "Enchilada (Cheese, Chicken or Beef)", desc: "3 for", price: "8.99" },
    { name: "Crunchy or Soft Taco", desc: "Chicken or beef with lettuce and cheese (1).", price: "2.25" },
    { name: "Crunchy or Soft Taco", desc: "Chicken or beef with lettuce and cheese (3).", price: "6.25" },
    { name: "Grilled Chicken or Steak Taco", desc: "", price: "3.50" },
    { name: "Shrimp or Fish Taco", desc: "", price: "3.99" },
    { name: "Supreme", desc: "Add to any taco.", price: "+0.35" },
    {
      name: "Chiles Poblanos",
      desc: "Stuffed poblano pepper with Chihuahua cheese, covered with egg whites and deep fried, topped with ranchero sauce.",
      price: "1 for 4.25 • 2 for 7.99"
    }
  ]
},
{
  id: "kids",
  title: "Kids Menu",
  items: [
    { name: "Cheese Quesadilla", desc: "With your choice of rice or beans.", price: "6.99" },
    { name: "Taco", desc: "Chicken or beef with rice and beans.", price: "6.99" },
    { name: "Hot Dog", desc: "With French fries.", price: "6.99" },
    { name: "Taco Salad", desc: "Chicken or beef.", price: "6.99" },
    { name: "Chicken Nuggets", desc: "With French fries.", price: "6.99" },
    { name: "Cheeseburger", desc: "With French fries.", price: "6.99" },
    { name: "Enchilada", desc: "With rice and beans.", price: "6.99" },
    { name: "Burrito", desc: "With rice and beans.", price: "6.99" },
    { name: "Arroz con Pollo", desc: "Grilled chicken over a bed of rice topped with cheese sauce.", price: "6.99" }
  ]
},
{
  id: "desserts",
  title: "Desserts",
  items: [
    { name: "Ice Cream", desc: "", price: "3.25" },
    { name: "Cheesecake", desc: "", price: "4.99" },
    { name: "Chimi Cheesecake with Ice Cream", desc: "", price: "6.25" },
    { name: "Fried Ice Cream", desc: "", price: "6.25" },
    { name: "Sopapilla with Ice Cream", desc: "", price: "5.25" },
    { name: "Sopapilla", desc: "", price: "3.25" },
    { name: "Churros", desc: "", price: "6.99" }
  ]
},
{
  id: "drinks",
  title: "Margaritas, Beer & Wine",
  items: [
    { name: "Regular Margarita - Lime", desc: "", price: "4.50" },
    { name: "Regular Margarita - Flavor", desc: "", price: "5.25" },
    { name: "Jumbo Margarita - Lime", desc: "", price: "7.75" },
    { name: "Jumbo Margarita - Flavor", desc: "", price: "8.75" },
    { name: "Small Pitcher Margarita - Lime", desc: "", price: "11.75" },
    { name: "Small Pitcher Margarita - Flavor", desc: "", price: "12.25" },
    { name: "Large Pitcher Margarita - Lime", desc: "", price: "17.75" },
    { name: "Large Pitcher Margarita - Flavor", desc: "", price: "18.75" },

    { name: "Domestic Beer", desc: "Bud, Bud Light, Michelob Ultra, Busch, Bush Light, Miller Lite, and Coors Lite.", price: "3.65" },
    { name: "Imported Beer", desc: "Corona, Negra Modelo, Modelo Especial, Sol, XX Amber, XX Lager, Tecate, and Pacífico.", price: "4.25" },
    { name: "Wine Glass", desc: "Merlot, Sangria, Zinfandel, or Chardonnay.", price: "4.75" }
  ]
}
  ]

export const reviews = [
  { author: 'Maria G.', rating: 5, text: 'This has become my comfort place. The staff are always so welcoming, friendly, and kind. They have gotten to know me with how often I come.', source: 'Facebook' },
  { author: 'James R.', rating: 5, text: 'The food is great, the prices are low, and the staff are helpful and funny. It\'s our go-to restaurant in town.', source: 'Tripadvisor' },
  { author: 'Sarah L.', rating: 5, text: 'Nice stop on way home from the Ozarks. Delicious food, friendly service. The fajitas and vegetarian options are excellent.', source: 'Tripadvisor' },
  { author: 'David K.', rating: 4, text: 'Comfortable and welcoming environment with fresh, flavorful food. Service is generally friendly, though it can be slow during busy hours.', source: 'Google' },
  { author: 'Elena P.', rating: 5, text: 'Best Mexican food in Fulton! The chimichangas are perfectly crispy and the salsa is always fresh. Highly recommend.', source: 'Google' },
  { author: 'Tom W.', rating: 5, text: 'Affordable, authentic, and delicious. The enchiladas Jalisco with shrimp is a must-try. We come back every week.', source: 'Tripadvisor' },
]

export const photos = [
  { src: '/burrito_in_red_sauce.jpg', alt: 'Burrito in Red Sauce' },
  { src: '/chicken_platter.jpg', alt: 'Chicken Platter' },
  { src: '/fajitas_shrimp_and_chicken.JPG', alt: 'Chicken and Shrimp Fajitas' },
  { src: '/grilled_chicken_breast_platter.jpg', alt: 'Grilled Chicken Breast Platter' },
  { src: '/Grilled_shrimp.jpg', alt: 'Grilled Shrimp' },
  { src: '/Margarites.JPG', alt: 'Fresh Margaritas' },
  { src: '/INSIDE.jpg', alt: 'Inside Jalisco Mexican Restaurant' },
  { src: '/IMG_1153.jpg', alt: 'Jalisco Signature Dish' }
]
