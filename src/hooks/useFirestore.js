import { useState, useEffect } from 'react'
import firebase from '../firebase'

export default function useFirestore() {
  const [data, setData] = useState();

  useEffect(() => {
    firebase
      .firestore()
      .collection('reports')
      .onSnapshot(snapshot => {
        const newData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))

        setData(newData)
      })
  }, [])

  return data;
}
