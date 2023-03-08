// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { html, render } from "lit-html";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  query,
  orderBy,
  setDoc,
  doc,
  runTransaction,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import {
  ref,
  getDatabase,
  child,
  get,
  onValue,
} from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-OP6xCH6Mjk_fIjE72qlvkEe4cgST1k8",
  authDomain: "final-project-9900f.firebaseapp.com",
  projectId: "final-project-9900f",
  storageBucket: "final-project-9900f.appspot.com",
  messagingSenderId: "680888784335",
  appId: "1:680888784335:web:eae497e39825627ba06eba",
  measurementId: "G-BEGD4JP81N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

let aboutContent = [];
let recipeContent = [];
const aboutRef = collection(db, "about");
const recipeRef = collection(db, "newAllRecipes");
//const allRecipesRef = collection(db);
//const aboutContentRef = collection(db, "introduction");

/*
try {
  const docRef = await addDoc(collection(db, "player"), {
    first: "Ada",
    last: "Lovelace",
    highScore: 1815,
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}*/

function view() {
  /*return html`<h1>About Page Input</h1>
    <p>Input Content Here:</p>
    <div id="inputs">
      <input type="text" name="array[]" @keydown=${handleInput} />
      <input type="text" name="array[]" @keydown=${handleInput} />
    </div>
    <button @mousedown=${handleInput}>submit</button>
    <button @mousedown=${addInputBox}>add input box</button>
    <div id="messages-container">
      ${aboutContent.map((msg) => html`<div class="message">${msg.content}</div>`)}
    </div>`;*/
    if (document.body.id === 'aboutMePage') {
      let aboutPageContent = document.getElementById("aboutPageContent");
      for (var i = 0; i < aboutContent.length; i++) {
        let p1 = document.createElement("p");
        console.log(aboutContent[i].content[0]);
        let p2 = document.createElement("p");
        p1.append(aboutContent[i].content[0]);
        p2.append(aboutContent[i].content[1]);
        aboutPageContent.append(p1);
        aboutPageContent.append(p2);
      }
    } else if (document.body.id === 'backendPage') {
      let submitAbout = document.getElementById("submitAbout");
      let submitRecipe = document.getElementById("submitRecipe");
      submitAbout.addEventListener("click", handleInput);
      submitRecipe.addEventListener("click", handleRecipeInput);

      let addAboutInputBtn = document.getElementById("addAboutInputBtn");
      let addRecipeInputBtn = document.getElementById("addRecipeInputBtn");
      addAboutInputBtn.addEventListener("click", addInputBox);
      addRecipeInputBtn.addEventListener("click", addRecipeInputBox);
    } else if (document.body.id === 'recipePage') {
      let recipePageContent = document.getElementById("recipePageContent");
      for (var i = 0; i < recipeContent.length; i++) {
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        p1.append(recipeContent[i][0]);
        p2.append(recipeContent[i][1]);
        recipePageContent.append(p1);
        recipePageContent.append(p2);
      }
    } else if (document.body.id === 'allRecipesPage') {
      let allRecipesPageContent = document.getElementById("allRecipesPageContent");
      for (var i = 0 ; i < recipeContent.length; i++) {
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        p1.append(recipeContent[i][0]);
        p2.append(recipeContent[i][1]);
        allRecipesPageContent.append(p1);
        allRecipesPageContent.append(p2);
      }
      //let allRecipesRef =
      /*for (var i = 0; i < allRecipesContent.length; i++) {
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        p1.append(recipeContent[i].content[0]);
        p2.append(recipeContent[i].content[1]);
        allRecipesPageContent.append(p1);
        allRecipesPageContent.append(p2);
      }*/
    }
}

// Add new input box when the user click the button
function addRecipeInputBox() {
  console.log("adding input box");
  let allchildren = [];
  let inputs = document.getElementById("recipeInputs");
  let inputCount = inputs.childElementCount + 1;

  let divInput = document.createElement("div");
  divInput.setAttribute("id", "step-"+inputCount);

  let newTitleP = document.createElement("p");
  newTitleP.textContent = "Step title";
  let newTitle = document.createElement("input");
  newTitle.setAttribute("type", "text");
  newTitle.setAttribute("class", "array");

  let newContentP = document.createElement("p");
  newContentP.textContent = "Step content";
  let newContent = document.createElement("input");
  newContent.setAttribute("type", "text");
  newContent.setAttribute("class", "array");

  allchildren.push(newTitleP, newTitle, newContentP, newContent);

  allchildren.forEach(element => {
    divInput.append(element);
  });
  inputs.appendChild(divInput);
}

// Add new input box when the user click the button
function addInputBox() {
  console.log("adding input box");
  let allchildren = [];
  let inputs = document.getElementById("aboutInputs");
  let inputCount = inputs.childElementCount + 1;

  let divInput = document.createElement("div");
  divInput.setAttribute("id", "about-"+inputCount);

  let newTitleP = document.createElement("p");
  newTitleP.textContent = "paragraph title";
  let newTitle = document.createElement("input");
  newTitle.setAttribute("type", "text");
  newTitle.setAttribute("class", "array");

  let newContentP = document.createElement("p");
  newContentP.textContent = "paragraph content";
  let newContent = document.createElement("input");
  newContent.setAttribute("type", "text");
  newContent.setAttribute("class", "array");

  allchildren.push(newTitleP, newTitle, newContentP, newContent);

  allchildren.forEach(element => {
    divInput.append(element);
  });
  inputs.appendChild(divInput);
}

render(view(), document.body);

function handleInput(e) {
  /*if (e.key == "Enter") {
    sendMessage(e.target.value);
    e.target.value = "";
  }*/
  //let allInputs = document.getElementById("inputs").children;
  //let input = document.getElementsByName("array[]");
  //let inputArray = [];
  /*for (let p = 0; p < allInputs.length; p++) {
    inputArray[p] = allInputs[p].id;
    for (var i = 0; i < input.length; i++) {
      inputArray[p][i] = input[i].value;
    }
  }*/
  //sendMessage(inputArray);
  //let returnMap = new Map();
  let returnAboutArray = [];
  let allInputs = document.getElementById("aboutInputs");
  for (var i = 0; i < allInputs.children.length; i++) {
    let currentAbout = allInputs.children[i].querySelectorAll(".array");
    let currentAboutArray = [];
    currentAboutArray.push(allInputs.children[i].id);
    let aboutContentArray = [];
    for (var k = 0; k < currentAbout.length; k++) {
      if (currentAbout[k].value != "") {
        aboutContentArray.push(currentAbout[k].value);
      }
    }
    currentAboutArray.push(aboutContentArray);
    returnAboutArray.push(currentAboutArray);
  }
  returnAboutArray.forEach((item) => sendMessage("about", item[0], item[1]));
}

function handleRecipeInput(e) {
  const map1 = new Map();
  let allRecipeInputs = document.getElementById("recipeInputs"); //get big div
  let recipeName = document.getElementById("recipe-name").value;
  for (var i = 0; i < allRecipeInputs.children.length; i++) {
    let currentStep = allRecipeInputs.children[i].querySelectorAll(".array"); //get title and content
    let stepContentArray = [];
    for (var k = 0; k < currentStep.length; k++) {
      stepContentArray.push(currentStep[k].value); //title, content
    }
    map1.set(allRecipeInputs.children[i].id, stepContentArray);
    //currentRecipeArray.push(stepContentArray);
    //returnRecipeArray.push(currentRecipeArray);
  }
  //returnRecipeArray.forEach((item) => sendMessage("testing-recipe", item));
  //map1.forEach((item) => sendMessage("pizza", item));
  sendMessage("newAllRecipes",recipeName, Object.fromEntries(map1));
}

async function sendMessage(collection, docID, message) {
  //let messageObject = Object.fromEntries(message);
  //firebase.firestore().collection("newAllRecipes").doc("pizza").set(messageObject);
  /*const frankDocRef = doc(db, "newAllRecipes", "pizza");
  await updateDoc(frankDocRef, {"map": message});*/
  //const ref = doc(db, "newAllRecipes", docID).withConverter(aboutMapConverter);
  //await setDoc(ref, new aboutMap(message));

  /*const ref = doc(db, "introduction", "testing").withConverter(aboutMapConverter);
  await setDoc(ref, message);*/
  /*for (var i = 0; i < message.length; i++) {
    await setDoc(ref, message);
  }*/

  //try {
    //for (var i = 0; i < message.length; i++) {
      //let key = message.keys();
      //console.log(key);
      //let value = message.get(key);
      //console.log(value);
      /*const docRef = await setDoc(doc(db, "newAllRecipes", docID, {
        time: Date.now(),
        message: "a",
        content: messageObject,
      }));*/
      //console.log("Document written with ID: ", docRef.id);
    //}
    await setDoc(doc(db, collection, docID), {
      time: Date.now(),
      content: message
    });

    /*const docRef = await addDoc(collection(db, "newAllRecipes"), {
      time: Date.now(),
      content: messageObject,
    });*/
    //console.log("Document written with ID: ", docRef.id);
  //} catch (e) {
    //console.error("Error adding document: ", e);
  //}
}

async function getAllMessages() {
  //const aboutContentRef = doc(db, "about");
  //aboutContent = [];
  //const docSnap = await getDoc(aboutContentRef);
  /*const querySnapshot = await getDocs(
    query(aboutContentRef, orderBy("time", "desc"))
  );*/
  //let msgData = docSnap.data();
  //aboutContent.push(msgData);
  /*docSnap.forEach((doc) => {
    let msgData = doc.data();
    aboutContent.push(msgData);
  });*/

  //const aboutContentRef = collection(db, 'about');
  /*const aboutContentRef = ref(db, 'about/');
  onValue(aboutContentRef, (snapshot) => {
    const data = snapshot.val();
  })*/
  //const snapshot = await db.firestore().collection('about').get();
  //const aboutRef = collection(db, 'about');
  const querySnapshot = await getDocs(
    query(aboutRef)
  );
  querySnapshot.forEach((doc) => {
    let msgData = doc.data();
    aboutContent.push(msgData);
  });

  /*const recipeSnapshot = await getDocs(
    query(recipeRef)
  );*/
  let oneRecipeRef = doc(db, "newAllRecipes", "pizza");
  const docSnap = await getDoc(oneRecipeRef);
  let steps = docSnap.data();
  recipeContent.push(Object.values(steps['content']));
  console.log(recipeContent);
  //console.log(recipeSnapshot);
  //recipeSnapshot.forEach((doc) => {
    //let recipeData = doc.data()['content'];
    //console.log(recipeData.values());
    /*console.log(recipeData);
    recipeData.forEach((doc1) => {
      console.log(doc1.value);
      recipeContent.push(doc1.value);
    });*/
    //for (var i = 0; i < recipeData.size; i++) {
      //if(recipeData[i] != "") {
        //console.log(recipeData[i]);
        //recipeContent.push(recipeData[i]);
      //}
    //}
  //});
  render(view(), document.body);
}

getAllMessages();

/*onSnapshot(
  collection(db, "introduction"),
  (snapshot) => {
    console.log("snap", snapshot);
    getAllMessages();
  },
  (error) => {
    console.error(error);
  }
);*/

/*import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInAnonymously,
  onAuthStateChanged,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
import { html, render } from "lit-html";

const firebaseConfig = {
  apiKey: "AIzaSyD-OP6xCH6Mjk_fIjE72qlvkEe4cgST1k8",
  authDomain: "final-project-9900f.firebaseapp.com",
  projectId: "final-project-9900f",
  storageBucket: "final-project-9900f.appspot.com",
  messagingSenderId: "680888784335",
  appId: "1:680888784335:web:eae497e39825627ba06eba",
  measurementId: "G-BEGD4JP81N"
};


let messages = [];

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Auth
const auth = getAuth(app);

// Initialize Firestore
const db = getFirestore(app);
const messagesRef = collection(db, "messages");

// Setup Google authentication
const provider = new GoogleAuthProvider();

// This function is called if the Sign In button is clicked
function signInUser() {
  signInWithRedirect(auth, provider);
}

function signInAnon() {
  signInAnonymously(auth)
    .then(() => {
      // Signed in..
    })
    .catch((error) => {
      console.error(`Error ${error.code}: ${error.message}.`);
    });
}

// This function is called if the Sign Out button is clicked
function signOutUser() {
  signOut(auth)
    .then(() => {
      console.info("Sign out was successful");
    })
    .catch((error) => {
      console.error(`Error ${error.code}: ${error.message}.`);
    });
}

// This function returns a template with the sign in view - what the user sees when they're signed out
function signInView() {
  return html`<button class="sign-in" @click=${signInUser}>
      Sign in with Google
    </button>
    <button class="sign-in" @click=${signInAnon}>Anonymous Sign in</button>`;
}

// This function returns a template with normal app view - what the user sees when they're signed in
function view() {
  let user = auth.currentUser;
  return html`
    <div id="top-bar">
      <span>chit chat</span>
      <span
        >Signed in as
        ${user.isAnonymous ? "anon" : auth.currentUser.displayName}</span
      >
      <button @click=${signOutUser}>Sign Out</button>
    </div>
    <div id="messages-container">
      ${messages.map(
        (msg) => html`<div
          class="message ${msg.uid == user.uid ? "right" : "left"}">
          <div class="message-content">${msg.content}</div>
          <div class="message-info">${msg.displayName}</div>
        </div>`
      )}
    </div>
    <div id="message-composer">
      <input
        id="message-entry"
        @keydown=${type}
        type="text"
        placeholder="type here..." />
    </div>
  `;
}

// This is an observer which runs whenever the authentication state is changed
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("AUTH STATE CHANGED");
    const uid = user.uid;
    console.log(user);
    // If there is an authenticated user, we render the normal view
    render(view(), document.body);
    getAllMessages();
  } else {
    // Otherwise, we render the sign in view
    render(signInView(), document.body);
  }
});

async function sendMessage(message) {
  console.log("Sending a message!");
  const user = auth.currentUser;
  // Add some data to the users collection
  try {
    const docRef = await addDoc(collection(db, "messages"), {
      displayName: user.isAnonymous ? "anon" : user.displayName,
      uid: user.uid,
      time: Date.now(),
      content: message,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function getAllMessages() {
  messages = [];

  const querySnapshot = await getDocs(
    query(messagesRef, orderBy("time", "desc"))
  );
  querySnapshot.forEach((doc) => {
    let msgData = doc.data();
    messages.push(msgData);
  });
  render(view(), document.body);
}

onSnapshot(
  collection(db, "messages"),
  (snapshot) => {
    console.log("snap", snapshot);
    getAllMessages();
  },
  (error) => {
    console.error(error);
  }
);

function type(e) {
  if (e.key == "Enter") {
    sendMessage(e.target.value);
    e.target.value = "";
  }
}*/