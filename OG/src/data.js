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
  { name: 'Chimichangas', desc: 'A crispy flour tortilla filled with seasoned beef or chicken, deep-fried golden and topped with cheese sauce. Served with rice and beans.', price: '$12.99', img: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: 'Burritos San Jose', desc: 'A large flour tortilla stuffed with grilled steak, rice, beans, pico de gallo, and melted cheese. A house specialty.', price: '$13.49', img: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: 'Chori Pollo', desc: 'Grilled chicken breast with Mexican chorizo, sautéed onions, and melted cheese. Served with rice, beans, and tortillas.', price: '$14.99', img: 'https://images.pexels.com/photos/2087748/pexels-photo-2087748.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: 'Fajitas', desc: 'Sizzling strips of marinated steak or chicken with bell peppers and onions. Served with rice, beans, sour cream, and warm tortillas.', price: '$15.99', img: 'https://images.pexels.com/photos/359993/pexels-photo-359993.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: 'Tacos', desc: 'Three soft corn tortillas filled with your choice of carnitas, carne asada, or grilled chicken. Topped with onion and cilantro.', price: '$10.99', img: 'https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: 'Quesadillas', desc: 'A large flour tortilla grilled with melted cheese and your choice of filling. Served with guacamole and sour cream.', price: '$11.49', img: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800' },
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
    id: "fajitas",
    title: "Fajitas",
    items: [
      { name: "Chicken Fajitas", desc: "Cooked with bell peppers, tomatoes, and onions. Served with rice, beans, lettuce, sour cream, pico de gallo, cheese, and tortillas.", price: "13.99" },
      { name: "Steak Fajitas", desc: "Cooked with bell peppers, tomatoes, and onions.", price: "14.99" },
      { name: "Fajitas Mix", desc: "Chicken, steak, and shrimp.", price: "16.25" },
      { name: "Fajitas Jalisco", desc: "Chicken, steak, chorizo, and shrimp.", price: "16.99" },
      { name: "Fajitas Camarón", desc: "Shrimp fajitas.", price: "18.50" },
      { name: "Fajita Hawaiana", desc: "Sautéed onion, bell pepper, and pineapple. Choice of chicken, steak, or shrimp.", price: "15.80+" },
      { name: "Super Fajitas", desc: "Chicken, steak, chorizo, and carnitas cooked with bell peppers, tomatoes, and onions. Topped with yellow and white cheese.", price: "17.99" },
      { name: "Mar y Tierra", desc: "Chicken, steak, shrimp, fish fillet, and chorizo.", price: "24.75" },
      { name: "Mi Fajita", desc: "Chicken, steak, Mexican sausage, onions, tomatoes, cilantro, and jalapeño. Not too spicy, not too mild.", price: "16.25" }
    ]
  },
  {
    id: "chicken",
    title: "Chicken From the Grill",
    items: [
      { name: "El Jalisco Special", desc: "Chicken, steak, and shrimp cooked with bell peppers, tomatoes, and onions. Served on rice covered with cheese sauce.", price: "13.99" },
      { name: "Grilled Chicken Tacos", desc: "Three grilled chicken tacos served with beans, pico de gallo, and green salsa.", price: "11.99" },
      { name: "Pollo Cancún", desc: "Chicken breast and shrimp with pico de gallo and mushrooms. Served with rice, salad, and tortillas.", price: "14.50" },
      { name: "Pollo Feliz", desc: "Grilled chicken breast with shrimp, mushrooms, onions, bell peppers, and melted cheese. Served with rice, beans, and tortillas.", price: "14.75" },
      { name: "Chicken Fiesta", desc: "Grilled chicken breast served on vegetables covered with cheese sauce.", price: "13.75" },
      { name: "Pollo Palapa", desc: "Chicken breast covered with cheese sauce. Served with salad and fries.", price: "12.25" },
      { name: "Pollo Jalisco", desc: "Grilled chicken on rice, covered with cheese sauce. Served with fries, lettuce, sour cream, and tomatoes.", price: "12.25+" },
      { name: "Pollo Michoacano", desc: "Grilled chicken breast with chorizo and melted cheese. Served with beans, salad, and tortillas.", price: "13.25" },
      { name: "Pollo a la Parrilla", desc: "Grilled chicken breast with mushrooms, onions, and bell peppers. Topped with melted cheese.", price: "13.25" },
      { name: "Pollo Loco", desc: "Grilled chicken breast with ranchero sauce and cheese. Served with salad, rice, beans, and tortillas.", price: "13.25" }
    ]
  },
  {
    id: "steak",
    title: "Steak",
    items: [
      { name: "Carne Asada", desc: "Slices of steak with cooked onions on top. Served with rice, beans, guacamole salad, and tortillas.", price: "13.75" },
      { name: "Steak Mexicano", desc: "Ribeye topped with cooked onions, tomatoes, and bell peppers. Served with rice, beans, and tortillas.", price: "15.75" },
      { name: "Steak Ranchero", desc: "Ribeye steak with ranchero sauce. Served with rice, beans, and tortillas.", price: "15.70" },
      { name: "Tacos de Carne Asada", desc: "Three steak tacos served with pico de gallo and beans.", price: "13.75" },
      { name: "Steak La Paz", desc: "Ribeye steak, grilled shrimp, cheese sauce, and fries.", price: "16.99" },
      { name: "Steak and Shrimp", desc: "Ribeye steak with shrimp on mushrooms, onions, bell peppers, and melted cheese. Comes with rice, beans, and tortillas.", price: "16.99" }
    ]
  },
  {
    id: "burritos",
    title: "Burritos",
    items: [
      { name: "Burritos Azteca", desc: "Two burritos: one grilled chicken and one steak. Topped with rice and cheese sauce.", price: "12.25" },
      { name: "Burrito Real", desc: "One chicken or beef burrito topped with lettuce, sour cream, cheese, tomatoes, rice, and beans.", price: "11.25" },
      { name: "Burritos Supremos", desc: "Two burritos: one chicken with beans and one beef with beans. Topped with red sauce, lettuce, sour cream, tomatoes, and cheese.", price: "11.75" },
      { name: "Burrito Roqueta", desc: "Flour tortilla stuffed with pork carnitas, pico de gallo, cheese, and green tomatillo sauce. Served with rice and beans.", price: "11.75" },
      { name: "Burrito Fajita", desc: "Choice of chicken or steak with peppers, onions, and tomatoes. Served with rice, lettuce, guacamole, sour cream, and pico de gallo.", price: "12.25" },
      { name: "Burrito California", desc: "Grilled chicken and steak with lettuce, guacamole, sour cream, pico de gallo, rice, and beans. Topped with cheese sauce and green tomatillo sauce.", price: "13.99" }
    ]
  },
  {
    id: "quesadillas",
    title: "Quesadillas",
    items: [
      { name: "Quesadilla Mexicana", desc: "Flour tortilla stuffed with cheese, beans, and choice of beef tips, ground beef, or chicken. Served with lettuce, tomatoes, and sour cream.", price: "9.75" },
      { name: "Quesadilla Ranchera", desc: "Flour tortilla stuffed with cheese and cooked mushrooms. Served with lettuce, sour cream, and tomatoes.", price: "9.50" },
      { name: "Quesadilla Jalisco", desc: "Grilled shrimp and beans inside. Served with rice, lettuce, tomatoes, sour cream, and cheese sauce on top.", price: "11.75" },
      { name: "Quesadilla Fajita", desc: "Cooked with vegetables. Served with rice, lettuce, tomatoes, sour cream, and pico de gallo.", price: "12.50+" },
      { name: "Quesadilla Suprema", desc: "Stuffed with shredded chicken. Served with cheese, lettuce, sour cream, tomatoes, and rice.", price: "12.99" }
    ]
  },
  {
    id: "enchiladas",
    title: "Enchiladas",
    items: [
      { name: "Enchiladas Supremas", desc: "One chicken enchilada, one bean enchilada, one cheese enchilada, and one beef enchilada. Topped with enchilada sauce, lettuce, cheese, tomatoes, and sour cream.", price: "12.25" },
      { name: "Enchilada Azteca", desc: "One chicken enchilada, one bean enchilada, one cheese enchilada, and one beef enchilada. Topped with enchilada sauce, rice, and cheese sauce.", price: "12.50" },
      { name: "Enchiladas Jalisco", desc: "Three shrimp enchiladas with cheese sauce on top. Served with rice, lettuce, sour cream, guacamole, and tomatoes.", price: "12.75" },
      { name: "Enchiladas Bandera", desc: "One chicken with green salsa, one beef with cheese sauce, and one cheese with enchilada sauce. Served with rice and salad.", price: "11.99" },
      { name: "Yolandas", desc: "Order of three chicken enchiladas topped with ranchero sauce. Served with rice and salad.", price: "11.99" },
      { name: "Enchiladas Suizas", desc: "Four chicken enchiladas topped with green tomatillo cheese sauce, onions, and cilantro.", price: "12.25" },
      { name: "Enchiladas el Compadre", desc: "Two cheese enchiladas topped with grilled chicken. Served with rice and beans.", price: "12.25" }
    ]
  },
  {
    id: "lunch",
    title: "Lunch",
    items: [
      { name: "Lunch 1", desc: "Speedy Gonzales: one enchilada, one taco, rice, and beans.", price: "8.49" },
      { name: "Lunch 2", desc: "Chile relleno, one taco, beans, and guacamole salad.", price: "8.75" },
      { name: "Lunch 3", desc: "Cheese quesadilla, one taco, and rice.", price: "7.95" },
      { name: "Lunch 4", desc: "One beef burrito, rice, and beans.", price: "7.95" },
      { name: "Lunch 5", desc: "One beef burrito, one taco, and beans.", price: "7.95" },
      { name: "Lunch 6", desc: "One chicken enchilada, rice, and beans.", price: "7.95" },
      { name: "Lunch 7", desc: "One chicken quesadilla, rice, and beans.", price: "7.95" },
      { name: "Lunch 8", desc: "One tamal, rice, and beans.", price: "7.95" },
      { name: "Lunch 9", desc: "Taquitos Mexicanos. Two chicken taquitos with rice, beans, lettuce, pico de gallo, and sour cream.", price: "7.95" },
      { name: "Lunch 10", desc: "Grilled chicken breast served with rice, salad, and tortillas.", price: "9.25" }
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
