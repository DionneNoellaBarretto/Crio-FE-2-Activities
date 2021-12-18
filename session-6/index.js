// const myPromise = new Promise((resolve, reject) => {
//   try {
//     const a = [1, 2, 3];
//     resolve(a);
//   } catch {
//     reject("Could not find array");
//   }
// });

// console.log(myPromise);

const team = [
  {
    id: "anna",
    fullName: "Anna Kendrick",
    jobTitle: "Front-end Ninja",
    bio:
      "Bibliophile, loves to dive into fictional worlds, ships JS code like brownies",
    avatar: "https://avatars.dicebear.com/api/avataaars/annakendrick.svg"
  },
  {
    id: "harry",
    fullName: "Harry Fawn",
    jobTitle: "Illustrator",
    bio:
      "Creates new illustrations each week, will kill for coffee, and loves beaches",
    avatar: "https://avatars.dicebear.com/api/avataaars/harryfn.svg"
  },
  {
    id: "sofia",
    fullName: "Sofia Sultan",
    jobTitle: "Backend Engineer",
    bio:
      "Donuts over waffles. Martinis over whiskeys. Typescript over anything.",
    avatar: "https://avatars.dicebear.com/api/avataaars/sofiasul.svg"
  }
];

const teamData = new Promise((resolve, reject) => {
  try {
    resolve(team);
  } catch {
    reject(new Error("Could not fetch data"));
  }
});

// console.log(teamData);

teamData
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
