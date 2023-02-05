import { collection, getDocs, query, where } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../firebase/config'

const useFirebase = (categoriaId) => {
    const [products , setProducts] = useState([])
    const [loading , setLoading] = useState(false)
    const [error , setError] = useState("")

    useEffect(() =>{

        try {
            setLoading(true);
            const getProductos = async () =>{
              let querySnapshot
              if (categoriaId){
                const q = query(collection(db, "productos"), where("categoria", "==", categoriaId));
                querySnapshot = await getDocs(q);
              }else{
                querySnapshot = await getDocs(collection(db, "productos"));
              }
              const productosFirebase = [];
                querySnapshot.forEach((doc) => {
                const product ={
                  id: doc.id,
                  ...doc.data()
                }
                productosFirebase.push(product)
              });
              setProducts(productosFirebase)
              setLoading(false)
            }
        
            getProductos();

        } catch (error) {
            setError(error.message)
        }
      }, [categoriaId] )

  return [products,loading,error]
}

export default useFirebase