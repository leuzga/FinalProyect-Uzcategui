import { getFirestore, collection, getDocs } from 'firebase/firestore';

export default async function ServiceJson(): Promise<any> {
  
  let data: any[] = [];
  const db = getFirestore();
  const querySnapshot = await getDocs(collection(db, 'products_FS'));

  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  })

  return data;
}
