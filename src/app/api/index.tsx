import axios from "axios";
import db from "./firebase";
import { collection, getDocs } from "firebase/firestore";

console.log(db);
export default async function handler() {
  let projects = [];
  const querySnapshot = await getDocs(collection(db, "MyProject"));
  await querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    projects.push(doc.data);
  });

  return projects;
}
