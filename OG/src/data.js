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
    category: 'Appetizers',
    items: [
      { name: 'Chips & Salsa', desc: 'Crispy tortilla chips with house-made red and green salsa.', price: '$3.99' },
      { name: 'Guacamole', desc: 'Fresh avocado mashed with tomato, onion, cilantro, and lime.', price: '$6.49' },
      { name: 'Queso Dip', desc: 'Warm melted cheese dip with peppers. Served with chips.', price: '$5.99' },
      { name: 'Nachos Jalisco', desc: 'Tortilla chips topped with cheese, beans, beef, guacamole, and sour cream.', price: '$9.99' },
      { name: 'Chile Colorado', desc: 'Tender beef chunks simmered in a rich red chile sauce. Served with rice and beans.', price: '$13.99' },
      { name: 'Jalapeño Poppers', desc: 'Six jalapeños stuffed with cream cheese, breaded and fried.', price: '$7.49' },
    ],
  },
  {
    category: 'Tacos & Burritos',
    items: [
      { name: 'Tacos (3)', desc: 'Three soft corn tortillas with carnitas, carne asada, or grilled chicken. Onion and cilantro.', price: '$10.99' },
      { name: 'Burrito San Jose', desc: 'Large flour tortilla with grilled steak, rice, beans, pico de gallo, and cheese.', price: '$13.49' },
      { name: 'Bean Burrito', desc: 'Flour tortilla filled with refried beans, cheese, and onion. Smothered in red sauce.', price: '$9.99' },
      { name: 'Chimichanga', desc: 'Crispy fried flour tortilla filled with beef or chicken. Topped with cheese sauce.', price: '$12.99' },
      { name: 'Wet Burrito', desc: 'A large burrito smothered in red enchilada sauce and melted cheese.', price: '$13.99' },
    ],
  },
  {
    category: 'Enchiladas',
    items: [
      { name: 'Enchiladas Suizas', desc: 'Three chicken enchiladas with creamy tomatillo sauce and melted cheese.', price: '$12.99' },
      { name: 'Enchilada Jalisco', desc: 'Shrimp enchiladas in mild red sauce, topped with cheese and avocado.', price: '$14.99' },
      { name: 'Enchilada Bandera', desc: 'Three enchiladas in green, white, and red sauces — the colors of Mexico.', price: '$13.49' },
      { name: 'Cheese Enchilada', desc: 'Corn tortillas rolled with melted cheese, smothered in red sauce.', price: '$10.99' },
      { name: 'Azteca Combo', desc: 'One chicken, one bean, one cheese, and one beef enchilada. Topped with enchilada sauce, rice, and cheese sauce.', price: '$14.99' },
    ],
  },
  {
    category: 'Fajitas',
    items: [
      { name: 'Chicken Fajitas', desc: 'Sizzling marinated chicken with peppers and onions. Rice, beans, and tortillas.', price: '$15.99' },
      { name: 'Steak Fajitas', desc: 'Sizzling marinated steak with peppers and onions. Rice, beans, and tortillas.', price: '$16.99' },
      { name: 'Shrimp Fajitas', desc: 'Sizzling grilled shrimp with peppers and onions. Rice, beans, and tortillas.', price: '$17.99' },
      { name: 'Fajitas for Two', desc: 'A generous platter of chicken and steak fajitas with all the fixings.', price: '$29.99' },
    ],
  },
  {
    category: 'House Specialties',
    items: [
      { name: 'Chori Pollo', desc: 'Grilled chicken with chorizo, sautéed onions, and melted cheese. Rice, beans, tortillas.', price: '$14.99' },
      { name: 'Pollo Feliz', desc: 'Grilled chicken breast with cheese sauce and mushrooms. Rice and salad.', price: '$13.99' },
      { name: 'Mexican Horseshoe', desc: 'Tortilla chips with your choice of meat, cheese sauce, and all the fixings.', price: '$12.49' },
      { name: 'Fajita Quesadilla', desc: 'Large quesadilla with grilled fajita meat, peppers, onions, and cheese.', price: '$13.49' },
      { name: 'Carne Asada', desc: 'Grilled skirt steak with onions, guacamole, pico de gallo, rice, and beans.', price: '$16.99' },
    ],
  },
  {
    category: 'Vegetarian',
    items: [
      { name: 'Veggie Burrito', desc: 'Flour tortilla with rice, beans, peppers, onions, and cheese. No meat.', price: '$10.99' },
      { name: 'Veggie Quesadilla', desc: 'Grilled peppers, onions, tomatoes, and melted cheese in a flour tortilla.', price: '$10.49' },
      { name: 'Spinach Enchiladas', desc: 'Two enchiladas filled with spinach and cheese, topped with green sauce.', price: '$11.99' },
      { name: 'Bean Tacos (3)', desc: 'Three soft tacos with refried beans, cheese, lettuce, and tomato.', price: '$9.49' },
    ],
  },
  {
    category: 'Desserts & Drinks',
    items: [
      { name: 'Flan', desc: 'Traditional Mexican caramel custard.', price: '$4.49' },
      { name: 'Churros (3)', desc: 'Cinnamon-sugar fried dough with chocolate dipping sauce.', price: '$5.49' },
      { name: 'Sopapillas', desc: 'Fried pastry pillows drizzled with honey and cinnamon.', price: '$4.99' },
      { name: 'Margarita', desc: 'Classic lime margarita on the rocks with salt. Happy hour pricing available.', price: '$6.99' },
      { name: 'Mexican Coke', desc: 'Coca-Cola made with cane sugar in a glass bottle.', price: '$3.49' },
      { name: 'Horchata', desc: 'Sweet rice milk drink with cinnamon.', price: '$3.99' },
    ],
  },
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
