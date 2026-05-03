export const books = [
  {
    id: "1",
    title: "The Silent River",
    author: "Ayesha Rahman",
    description:
      "A heart-touching story about memory, family, and courage as a young woman crosses a forgotten river to understand the truth behind her past.",
    category: "Story",
    available_quantity: 7,
    image_url:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "2",
    title: "Java Mastery",
    author: "James Cooper",
    description:
      "A practical guide to modern Java programming, clean object-oriented design, concurrency, collections, and production-ready application patterns.",
    category: "Tech",
    available_quantity: 3,
    image_url:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "3",
    title: "Space Wonders",
    author: "Liam Harper",
    description:
      "Explore planets, stars, black holes, and the thrilling discoveries that help scientists understand the vast universe around us.",
    category: "Science",
    available_quantity: 6,
    image_url:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "4",
    title: "The Lost Diary",
    author: "Meera Iyer",
    description:
      "An old diary sends two friends into a chain of secrets, letters, and choices that reshape a village's hidden history.",
    category: "Story",
    available_quantity: 4,
    image_url:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "5",
    title: "Quantum World",
    author: "Dr. Isaac Newton",
    description:
      "A friendly introduction to quantum physics, particles, uncertainty, and the strange experiments that changed modern science.",
    category: "Science",
    available_quantity: 5,
    image_url:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "6",
    title: "Code Complete",
    author: "Steve McConnell",
    description:
      "Timeless software construction lessons covering readable code, debugging, testing, estimation, and better engineering habits.",
    category: "Tech",
    available_quantity: 2,
    image_url:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "7",
    title: "The Hidden Way",
    author: "Sophie Lee",
    description:
      "A mysterious forest path appears only at dusk, leading one curious reader toward a choice between comfort and adventure.",
    category: "Story",
    available_quantity: 6,
    image_url:
      "https://images.unsplash.com/photo-1476231682828-37e571bc172f?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "8",
    title: "The Final Empire",
    author: "Brandon Sanderson",
    description:
      "A bold fantasy adventure about rebellion, trust, and the spark of hope inside a world ruled by impossible power.",
    category: "Story",
    available_quantity: 8,
    image_url:
      "https://images.unsplash.com/photo-1526243741027-444d633d7365?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "9",
    title: "Deep Work",
    author: "Cal Newport",
    description:
      "A focused productivity book about protecting attention, building skill, and doing meaningful work in a distracted world.",
    category: "Tech",
    available_quantity: 4,
    image_url:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "10",
    title: "The Biology Book",
    author: "DK Publishing",
    description:
      "A visual tour through cells, genetics, evolution, ecosystems, and the discoveries that explain living systems.",
    category: "Science",
    available_quantity: 7,
    image_url:
      "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "11",
    title: "1984",
    author: "George Orwell",
    description:
      "A classic dystopian novel about surveillance, language, fear, and the human hunger for truth.",
    category: "Story",
    available_quantity: 6,
    image_url:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "12",
    title: "Think Again",
    author: "Adam Grant",
    description:
      "A smart guide to rethinking assumptions, learning with humility, and making stronger decisions through curiosity.",
    category: "Science",
    available_quantity: 5,
    image_url:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80",
  },
];

export function getBookById(id) {
  return books.find((book) => book.id === String(id));
}
