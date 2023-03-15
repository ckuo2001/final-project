// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { html, render } from "lit-html";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  setDoc,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
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

let recipeContent = [];
let newRecipeContent = new Map();
const recipeRef = collection(db, "allRecipes");

function view() {
    if (document.body.id === 'backendPage') {
      let submitRecipe = document.getElementById("submitRecipe");
      submitRecipe.addEventListener("click", handleRecipeInput);
      let addRecipeInputBtn = document.getElementById("addRecipeInputBtn");
      addRecipeInputBtn.addEventListener("click", addRecipeInputBox);
    } else if (document.body.id === 'recipePage') {
      let recipeName = localStorage.getItem("recipeName");
      let recipeTitle = document.getElementById("recipe-title");
      recipeTitle.innerHTML = recipeName;
      let recipePageContent = document.getElementById("recipePageContent");
      let content = JSON.parse(localStorage.getItem(recipeName));
      content.forEach((step) => {
        let p1 = document.createElement("p");
        p1.innerHTML = step[0];
        p1.style.fontSize = "20px";
        let p2 = document.createElement("p");
        p2.innerHTML = step[1];
        recipePageContent.append(p1);
        recipePageContent.append(p2);
      });
    } else if (document.body.id === 'allRecipesPage') {
      let allRecipesPageContent = document.getElementById("allRecipesPageContent");
      for (var i = 0 ; i < recipeContent.length; i++) {
        let div = document.createElement("div");
        let p1 = document.createElement("p");
        let a = document.createElement("a");
        a.append(recipeContent[i][0]);
        p1.addEventListener("click", function(clicked) {
          localStorage.setItem("recipeName", clicked.target.innerHTML);
          recipeName = clicked.target.innerHTML;
        });
        a.href = "recipe.html";
        p1.append(a);
        p1.style.fontSize = "20px";
        //div.append(img);
        div.append(p1);
        div.classList.add("singleRecipe");
        allRecipesPageContent.append(div);
      }
    }
}

// Add new input box when the user click the button
function addRecipeInputBox() {
  console.log("adding input box");
  let allchildren = [];
  let inputs = document.getElementById("recipeInputs");
  let inputCount = inputs.childElementCount + 1;

  let divInput = document.createElement("div");
  divInput.setAttribute("id", inputCount);

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
  }
  sendMessage("allRecipes",recipeName, Object.fromEntries(map1));
}

async function sendMessage(collection, docID, message) {
    await setDoc(doc(db, collection, docID), {
      time: Date.now(),
      content: message
    });
}

async function getAllMessages() {
  const allRecipeSnapshot = await getDocs(recipeRef);
  allRecipeSnapshot.forEach((doc) => {
    let steps = doc.data();
    let tempArray = [];
    tempArray.push(doc.id);
    tempArray.push(Object.values(steps['content']));
    recipeContent.push(tempArray);
    localStorage.setItem(doc.id, JSON.stringify(Object.values(steps['content'])));
  });
  render(view(), document.body);
}

getAllMessages();
