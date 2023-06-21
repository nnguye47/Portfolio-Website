import db from "./firebase";
import { collection, getDocs } from "firebase/firestore";

export default async function handler() {
  const querySnapshot = await getDocs(collection(db, "Projects"));
  let projects: object[] = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    projects.push(doc.data());
  });

  return projects;
}
