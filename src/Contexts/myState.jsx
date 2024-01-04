import { useEffect, useState } from "react";
import MyContext from "./myContext";
import { Timestamp, addDoc, deleteDoc, onSnapshot, orderBy, setDoc, updateDoc } from "firebase/firestore";
import { fireDB } from "../Firebase/Firebaseconfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import { doc } from "firebase/firestore";
import {toast} from "react-toastify";
import { addToCart } from "../Redux/cartSlice";
export default function MyState(props){
    const [mode,setMode] = useState("dark");
    const toggleMode = ()=>{
        if(mode=="dark"){
            setMode("light");
            document.body.style.backgroundColor = "rgb(17,24,39)";

        }
        else{
            setMode("dark");
            document.body.backgroundColor = "white";
        }
    }
    
    const [loading,setLoading] = useState(false);


    const [products,setProducts] = useState({
        title:null,
        price:null,
        imageURL:null,
        category:null,
        description:null,
        time:Timestamp.now(),
        date:new Date().toLocaleString("en-US",
        {
            month:"short",
            day:"2-digit",
            year:"numeric",
        })
    })

    
    //add product 
    //single product

    const addProduct = async()=>{
        setLoading(true);
        console.log(products)
        if(products.title == null||products.category== null||products.description ==null
            ||products.imageURL == null||products.price == null){
                console.log("please enter all the fields")
                return toast.error("please add all the fields")
            }
            try{
                const productref = collection(fireDB,"products");

                await addDoc(productref,products);
                toast.success("Product Successfully Added")
                setTimeout(()=>{
                    window.location.href = "/dashboard";
                  },1000)
                setLoading(false);
              
           
            }catch(error)

            {
                setLoading(false);
                console.log("Error")
            }
    }

    //get product
    const [product,setProduct] = useState([]);





    const getProductData = async()=>{
        setLoading(true);
        try{
            const q = query(collection(fireDB,"products"),orderBy("time"));
            const querySnapshot = await getDocs(q);
           let productrarray = [];
            querySnapshot.forEach((doc) => {
                console.log(doc)
           productrarray.push({...doc.data(),id:doc.id});

        })
        setProduct(productrarray);  
        setLoading(false)
        return productrarray;
        }catch(error){
            console.log(error);
            setLoading(false)
        }
    }

    //update products
    const edithandle = (item)=>{
        setProducts(item);
    }

    const updateProducts = async () => {
        setLoading(true);
        try {
          const productref = doc(fireDB, "products", products.id);
      
          // Update the document with the fields from the products state
          await updateDoc(productref, {
            title: products.title,
            price: products.price,
            imageURL: products.imageURL,
            category: products.category,
            description: products.description,
            time: products.time,
            date: products.date,
          });
      
          // Add any other fields as needed
          toast.success("Product successfully updated");
          setLoading(false);
          setTimeout(()=>{
            window.location.href = "/dashboard"
          },800)
          getProductData();
        } catch (error) {
          console.error(error);
          setLoading(false);
        }
      };

    //delete products
    
    const deleteProduct = async(item)=>{
        console.log(item)
        
        console.log("you called me")
        setLoading(true);
        try{
            const productRef = doc(fireDB,"products",item.id);
            await deleteDoc(productRef);
        
           toast.success("product deleted successfully");
           setLoading(false);
           getProductData();

        }catch(error){
            console.log(error)
            setLoading(false);

        }

    }

    useEffect(()=>{
        getProductData();
    },[]);
    return (
        <MyContext.Provider value = {{mode,toggleMode,loading,setLoading,product,setProducts,products,addProduct,updateProducts,edithandle,deleteProduct}}>
        {props.children}
        </MyContext.Provider>
    )   

}