// Catalog data. In a real app this would come from a backend/API.
const BOOKS = [
  { id: 1,  title: "The Salt Path",            author: "Amelia Rourke",   price: 14.99, genre: "memoir",   color: "#2C4A3E" },
  { id: 2,  title: "Orbital Silence",           author: "Kenji Watanabe",  price: 18.50, genre: "sci-fi",   color: "#1D332A" },
  { id: 3,  title: "The Cartographer's Wife",   author: "Nora Fenwick",    price: 16.00, genre: "fiction",  color: "#B5562B" },
  { id: 4,  title: "A Grammar of Rivers",       author: "Priya Nandan",    price: 12.75, genre: "poetry",   color: "#94431F" },
  { id: 5,  title: "The Long Ledger",           author: "Marcus Ilie",     price: 21.00, genre: "history",  color: "#A98F5B" },
  { id: 6,  title: "Static and Stars",          author: "Junie Okafor",    price: 15.25, genre: "sci-fi",   color: "#2C4A3E" },
  { id: 7,  title: "Small Mercies at Dusk",     author: "Eleanor Voss",    price: 13.40, genre: "fiction",  color: "#B5562B" },
  { id: 8,  title: "The Apprentice's Almanac",  author: "Tobias Wren",     price: 17.90, genre: "fantasy",  color: "#1D332A" },
  { id: 9,  title: "Field Notes on Silence",    author: "Amelia Rourke",   price: 11.50, genre: "memoir",   color: "#94431F" },
  { id: 10, title: "The Ninth Orchard",         author: "Delphine Cho",    price: 19.20, genre: "fantasy",  color: "#A98F5B" },
  { id: 11, title: "Concrete and Clover",       author: "Ravi Mehta",      price: 10.99, genre: "poetry",   color: "#2C4A3E" },
  { id: 12, title: "The Last Cartel of Kings",  author: "Marcus Ilie",     price: 22.50, genre: "history",  color: "#B5562B" },
];

function findBook(id) {
  return BOOKS.find((b) => b.id === Number(id));
}
