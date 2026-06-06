export const SITE = {
  name: 'Mandy Coffee',
  tagline: "Addis Ababa's Favorite Coffee Experience.",
  phone: '+251 97 631 3040',
  phoneHref: 'tel:+251976313040',
  address: 'Haile Gebresillassie Road, Addis Ababa',
  near: 'Near Bambis Train Station',
  hours: 'Open Daily',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Mandy+Coffee+Haile+Gebresillassie+Road+Addis+Ababa',
  rating: '4.9',
  reviews: '40+',
}

export const STATS = [
  { value: '4.9', suffix: '★', label: 'Google Rating' },
  { value: '40', suffix: '+', label: 'Happy Reviews' },
  { value: '100', suffix: '%', label: 'Ethiopian Coffee' },
  { value: '1', suffix: '', label: 'Women-Owned', isText: true, text: 'Women-Owned' },
]

export type MenuItem = {
  name: string
  description: string
  price: string
  image: string
}

export const MENU: { category: string; items: MenuItem[] }[] = [
  {
    category: 'Coffee',
    items: [
      {
        name: 'Espresso',
        description: 'Bold, single-origin Ethiopian shot with rich golden crema.',
        price: '60 Br',
        image: '/images/menu-espresso.png',
      },
      {
        name: 'Cappuccino',
        description: 'Velvety steamed milk over espresso, finished with latte art.',
        price: '90 Br',
        image: '/images/menu-cappuccino.png',
      },
      {
        name: 'Café Latte',
        description: 'Smooth espresso layered with silky milk — our signature pour.',
        price: '95 Br',
        image: '/images/iced-latte.jpg',
      },
      {
        name: 'Traditional Ethiopian',
        description: 'Ceremonial jebena-brewed coffee, the heart of our heritage.',
        price: '70 Br',
        image: '/images/menu-ethiopian.png',
      },
    ],
  },
  {
    category: 'Snacks',
    items: [
      {
        name: 'Meat Samosa',
        description: 'Crispy golden pastry filled with spiced minced beef.',
        price: '45 Br',
        image: '/images/menu-samosa.png',
      },
      {
        name: 'Vegetable Samosa',
        description: 'Flaky parcels of lentils and seasonal vegetables.',
        price: '40 Br',
        image: '/images/menu-samosa.png',
      },
      {
        name: 'Fresh Pastries',
        description: 'Daily-baked croissants and sweet pastries, warm from the oven.',
        price: '55 Br',
        image: '/images/menu-pastry.png',
      },
    ],
  },
  {
    category: 'Cold Drinks',
    items: [
      {
        name: 'Iced Mocha',
        description: 'Chilled espresso, milk & chocolate with a luxe drizzle.',
        price: '110 Br',
        image: '/images/iced-mocha.jpg',
      },
      {
        name: 'Fruit Smoothies',
        description: 'Blended fresh mango, berry & avocado, naturally sweet.',
        price: '120 Br',
        image: '/images/menu-smoothie.png',
      },
      {
        name: 'Mojito',
        description: 'Refreshing lime & mint mocktail over crushed ice.',
        price: '100 Br',
        image: '/images/menu-mojito.png',
      },
    ],
  },
]

export const REVIEWS = [
  {
    quote:
      'Delicious samosa, excellent coffee, and great smoothies. Highly recommended.',
    author: 'Selamawit T.',
    role: 'Google Review',
  },
  {
    quote:
      'Great coffee shop near Bambis Train Station. The meat samosas were amazing.',
    author: 'Daniel K.',
    role: 'Google Review',
  },
  {
    quote:
      'Beautiful place, perfect for grab-and-go. The mojito and snacks were excellent.',
    author: 'Hanna M.',
    role: 'Google Review',
  },
]

export const GALLERY = [
  { src: '/images/menu-espresso.png', alt: 'Espresso preparation', span: 'row-span-1' },
  { src: '/images/gallery-latteart.png', alt: 'Latte art being poured', span: 'row-span-2' },
  { src: '/images/menu-ethiopian.png', alt: 'Ethiopian coffee ceremony', span: 'row-span-2' },
  { src: '/images/menu-pastry.png', alt: 'Fresh pastries', span: 'row-span-1' },
  { src: '/images/gallery-interior.png', alt: 'Cozy café seating', span: 'row-span-2' },
  { src: '/images/gallery-beans.png', alt: 'Roasted coffee beans', span: 'row-span-1' },
  { src: '/images/iced-mocha.jpg', alt: 'Iced mocha with chocolate', span: 'row-span-1' },
  { src: '/images/iced-latte.jpg', alt: 'Layered iced latte', span: 'row-span-2' },
]

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Visit', href: '#visit' },
  { label: 'Contact', href: '#contact' },
]
