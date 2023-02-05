import React, { useEffect, useState } from 'react'
import ItemDetail from '../../components/ItemDetail'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/config';

const ItemDetailContainer = () => {
  const {id} = useParams()
  const [detail , setDetail] = useState({})

  useEffect(() =>{

    const getProduct = async () => {
      const docRef = doc(db, "productos", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        const productDetail = {
          id: docSnap.id,
          ...docSnap.data()
        }
        setDetail(productDetail);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }

    getProduct();

  },[id])

  
  return (
    <div>
      {
        Object.keys(detail).length === 0
        ? <h2 className='text-center fs-3'>Loading...</h2>
        :<ItemDetail detail={detail}/>
      }
    </div>
  )
}

export default ItemDetailContainer