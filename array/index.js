const posts = [
  {
    id: 1,
    title: "Mi primer post",
    tags: ["javascript", "backend"],
  },
  {
    id: 2,
    title: "Mi segundo post",
    image: "https://img.com/2",
    tags: ["javascript", "frontend"],
  },
  {
    id: 3,
    title: "Mi tercer post",
    image: "https://img.com/3",
    tags: ["javascript", "fullstack"],
  },
];

// Find
const find = posts.find((post) => post.title == "Mi primer post"); // Return whole object

// Some
const some = posts.some((post) => post.id == 1); // Return true or false

// Some && Includes
const includes = posts.some((post) => post.tags.includes("backend")); // Returns true using includes

// Every
const every = posts.every((post) => post.tags.includes("frontend")); // Returns false

// Map
const map = posts.map((post) => post.title); // Return array with every title
const map2 = posts.map((post) => post.tags.includes("javascript")); // Returns array with every post that includes javascript

// Filter
const filter = posts.filter((post) => post?.title); // Return array of objects, second and third

// Reduce
const reduce = posts.reduce((allTags, post) => {
  return Array.from(new Set([...allTags, ...post.tags])); // Gets all tags and returns them duplicated, them creates a new array and removes duplicates
}, []);
