//Team Data
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

//Modify Code below this line
const data = new Promise((resolve, reject) => {
  try {
    resolve(team);
  } catch {
    reject(new Error("could not fetch data"));
  }
});

//Content Selected using ID.
const content = document.getElementById("content");

/**
 * Creates and img HTML element with given src and alt
 * @param {string} src - Source for image
 * @param {string} alt - Alt text for image
 * @returns An Image HTML Element
 */
const getImageElement = (src, alt) => {
  let image = document.createElement("img");
  image.setAttribute("src", src);
  image.setAttribute("alt", alt);
  image.setAttribute("height", "100px");
  image.setAttribute("width", "100px");
  return image;
};

/**
 * Creates a new card with passed parameters.
 * @param {string} id - Unique id from team data
 * @param {string} fullName - Name of the team member
 * @param {string} jobTitle - Job title of the team memeber
 * @param {string} bio - Description Bio
 * @param {string} avatar - Source of the avatar image.
 * @returns section HTML element with Image and Text
 */
function generateCard(id, fullName, jobTitle, bio, avatar) {
  //1. Create a new "section" element and set the className and id
  let section = document.createElement("section");
  section.setAttribute("class", "team-member");
  section.setAttribute("id", id);
  //2. Generate the image using getImageElement() function
  //Hint - Use fullname as alt for the image.
  let returnedImage = getImageElement(avatar, fullName);
  //3. Create a div for text content
  let div = document.createElement("div");
  //4. Create an h2 for fullName
  let h2 = document.createElement("h1");
  h2.textContent = fullName;
  //5. Create an h3 for jobTitle
  let h3 = document.createElement("h3");
  h3.textContent = jobTitle;
  //6. Create a p for bio
  let p = document.createElement("p");
  p.textContent = bio;
  //7. Append the fullName, jobTitle, and bio element
  //   to the div created for text.
  div.appendChild(h2);
  div.appendChild(h3);
  div.appendChild(p);
  //8. Append the Image and the Text div
  //   to the new section you created in step 1
  section.appendChild(returnedImage);
  section.appendChild(div);
  //Return the new section element created.
  return section;
}

/**
 * Generates and returns an array of HTML elements
 * @param {Array} data Team data array
 */
function generateCardArray(data) {
  const cards = [];
  //Add logic to populate `cards` array below
  for (let i = 0; i < team.length; i++) {
    cards[i] = generateCard(
      team[i].id,
      team[i].fullName,
      team[i].jobTitle,
      team[i].bio,
      team[i].avatar
    );
  }
  //Return cards array
  return cards;
}

data.then((res) => {
  const cardsArray = generateCardArray(res);
});

//Run a loop for the cardsArray and append its elements to content.
for (let card of cardsArray) {
  content.append(card);
}
//Modify Code above this line
