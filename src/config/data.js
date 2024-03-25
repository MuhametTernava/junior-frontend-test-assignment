const data = [
  {
    id: 1,
    name: "Organic Cotton T-Shirt",
    category: "Apparel",
    price: 29.99,
    bestseller: true,
    featured: false,
    image: {
      alt: "Organic Cotton T-Shirt",
      url: "https://picsum.photos/800/400?random=1",
    },
    size: 451,
    dimensions: {
      width: 30,
      height: 40,
    },
  },
  {
    id: 2,
    name: "Leather Messenger Bag",
    category: "Accessories",
    price: 79.99,
    bestseller: false,
    featured: true,
    image: {
      alt: "Leather Messenger Bag",
      url: "https://picsum.photos/800/400?random=2",
    },
    size: 221,
    dimensions: {
      width: 40,
      height: 50,
    },
  },
  {
    id: 3,
    name: "Wooden Desk Organizer",
    category: "Office Supplies",
    price: 34.99,
    bestseller: true,
    featured: false,
    image: {
      alt: "Wooden Desk Organizer",
      url: "https://picsum.photos/800/400?random=3",
    },
    size: 651,
    dimensions: {
      width: 20,
      height: 20,
    },
  },
  {
    id: 4,
    name: "Stainless Steel Water Bottle",
    category: "Kitchen & Dining",
    price: 19.99,
    bestseller: false,
    featured: false,
    image: {
      alt: "Stainless Steel Water Bottle",
      url: "https://picsum.photos/800/400?random=4",
    },
    size: 31,
    dimensions: {
      width: 10,
      height: 25,
    },
  },
  {
    id: 5,
    name: "Natural Bamboo Cutting Board",
    category: "Kitchen & Dining",
    price: 24.99,
    bestseller: true,
    featured: false,
    image: {
      alt: "Natural Bamboo Cutting Board",
      url: "https://picsum.photos/800/400?random=5",
    },
    size: 98,
    dimensions: {
      width: 30,
      height: 40,
    },
  },
  {
    id: 6,
    name: "Vintage Leather Wallet",
    category: "Accessories",
    price: 39.99,
    bestseller: false,
    featured: true,
    image: {
      alt: "Vintage Leather Wallet",
      url: "https://picsum.photos/800/400?random=6",
    },
    size: 21,
    dimensions: {
      width: 15,
      height: 10,
    },
  },
  {
    id: 7,
    name: "Soy Wax Scented Candle",
    category: "Home Decor",
    price: 14.99,
    bestseller: false,
    featured: false,
    image: {
      alt: "Soy Wax Scented Candle",
      url: "https://picsum.photos/800/400?random=7",
    },
    size: 251,
    dimensions: {
      width: 5,
      height: 10,
    },
  },
  {
    id: 8,
    name: "Classic Aviator Sunglasses",
    category: "Accessories",
    price: 49.99,
    bestseller: true,
    featured: false,
    image: {
      alt: "Classic Aviator Sunglasses",
      url: "https://picsum.photos/800/400?random=8",
    },
    size: 217,
    dimensions: {
      width: 5,
      height: 3,
    },
  },
  {
    id: 9,
    name: "Handmade Ceramic Mug",
    category: "Kitchen & Dining",
    price: 19.99,
    bestseller: true,
    featured: false,
    image: {
      alt: "Handmade Ceramic Mug",
      url: "https://picsum.photos/800/400?random=9",
    },
    size: 167,
    dimensions: {
      width: 10,
      height: 15,
    },
  },
  {
    id: 10,
    name: "Recycled Paper Notebook",
    category: "Stationery",
    price: 9.99,
    bestseller: false,
    featured: true,
    image: {
      alt: "Recycled Paper Notebook",
      url: "https://picsum.photos/800/400?random=10",
    },
    size: 5747,
    dimensions: {
      width: 15,
      height: 20,
    },
  },
  {
    id: 11,
    name: "Stainless Steel Kitchen Utensil Set",
    category: "Kitchen & Dining",
    price: 29.99,
    bestseller: false,
    featured: false,
    image: {
      alt: "Stainless Steel Kitchen Utensil Set",
      url: "https://picsum.photos/800/400?random=11",
    },
    size: 21,
    dimensions: {
      width: 30,
      height: 5,
    },
  },
  {
    id: 12,
    name: "Rustic Wooden Picture Frame",
    category: "Home Decor",
    price: 15.99,
    bestseller: true,
    featured: false,
    image: {
      alt: "Rustic Wooden Picture Frame",
      url: "https://picsum.photos/800/400?random=12",
    },
    size: 421,
    dimensions: {
      width: 20,
      height: 25,
    },
  },
  {
    id: 13,
    name: "Himalayan Salt Lamp",
    category: "Home Decor",
    price: 39.99,
    bestseller: false,
    featured: false,
    image: {
      alt: "Himalayan Salt Lamp",
      url: "https://picsum.photos/800/400?random=13",
    },
    size: 2564,
    dimensions: {
      width: 10,
      height: 20,
    },
  },
  {
    id: 14,
    name: "Eco-Friendly Bamboo Toothbrush",
    category: "Personal Care",
    price: 5.99,
    bestseller: true,
    featured: false,
    image: {
      alt: "Eco-Friendly Bamboo Toothbrush",
      url: "https://picsum.photos/800/400?random=14",
    },
    size: 211,
    dimensions: {
      width: 2,
      height: 20,
    },
  },
  {
    id: 15,
    name: "Reusable Cotton Grocery Bag",
    category: "Household",
    price: 7.99,
    bestseller: false,
    featured: true,
    image: {
      alt: "Reusable Cotton Grocery Bag",
      url: "https://picsum.photos/800/400?random=15",
    },
    size: 891,
    dimensions: {
      width: 22,
      height: 210,
    },
  },
  {
    id: 16,
    name: "Aromatherapy Essential Oil Diffuser",
    category: "Home Decor",
    price: 34.99,
    bestseller: true,
    featured: false,
    image: {
      alt: "Aromatherapy Essential Oil Diffuser",
      url: "https://picsum.photos/800/400?random=16",
    },
    size: 8745,
    dimensions: {
      width: 61,
      height: 2,
    },
  },
  {
    id: 17,
    name: "Portable Bluetooth Speaker",
    category: "Electronics",
    price: 59.99,
    bestseller: false,
    featured: false,
    image: {
      alt: "Portable Bluetooth Speaker",
      url: "https://picsum.photos/800/400?random=17",
    },
    size: 978,
    dimensions: {
      width: 51,
      height: 22,
    },
  },
  {
    id: 18,
    name: "Natural Linen Throw Pillow",
    category: "Home Decor",
    price: 24.99,
    bestseller: false,
    featured: true,
    image: {
      alt: "Natural Linen Throw Pillow",
      url: "https://picsum.photos/800/400?random=18",
    },
    size: 713,
    dimensions: {
      width: 1,
      height: 2,
    },
  },
  {
    id: 19,
    name: "Handcrafted Wooden Coasters",
    category: "Home Decor",
    price: 12.99,
    bestseller: true,
    featured: false,
    image: {
      alt: "Handcrafted Wooden Coasters",
      url: "https://picsum.photos/800/400?random=19",
    },
    size: 4124,
    dimensions: {
      width: 21,
      height: 25,
    },
  },
  {
    id: 20,
    name: "Stainless Steel French Press",
    category: "Kitchen & Dining",
    price: 29.99,
    bestseller: false,
    featured: false,
    image: {
      alt: "Stainless Steel French Press",
      url: "https://picsum.photos/800/400?random=20",
    },
    size: 4241,
    dimensions: {
      width: 258,
      height: 2512,
    },
  },
];

export const getAllPosts = async () => {
  return data;
};
