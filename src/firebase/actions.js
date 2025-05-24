import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "./config";

// -------------------- Blogs --------------------

export const getBlogs = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "blogs"));
    const blogs = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    console.log("Blogs retrieved successfully.", blogs);
    return blogs;
  } catch (e) {
    console.error("Error getting blog documents: ", e);
    throw e;
  }
};

export const getBlogById = async (id) => {
  try {
    const docRef = doc(db, "blogs", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      console.log("No such blog document!");
      return null;
    }
  } catch (e) {
    console.error("Error getting blog document: ", e);
    throw e;
  }
};

// -------------------- Courses --------------------

export const getCourses = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "courses"));
    const courses = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    console.log("Courses retrieved successfully.", courses);
    return courses;
  } catch (e) {
    console.error("Error getting course documents: ", e);
    throw e;
  }
};

export const getCourseById = async (id) => {
  try {
    const docRef = doc(db, "courses", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Course document data:", docSnap.data());
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      console.log("No such course document!");
      return null;
    }
  } catch (e) {
    console.error("Error getting course document: ", e);
    throw e;
  }
};
