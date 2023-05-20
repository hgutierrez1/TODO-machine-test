import React from "react";

function useLocalStorage(itemName,initialValue){
  const[item,setItem]=React.useState(initialValue);

  const [loading,setLoading]=React.useState(true)
  const [error,setError]=React.useState(false)

    
    React.useEffect(()=>{
      setTimeout(()=>{
      try{
        const localStorageItem=localStorage.getItem(itemName);
        let parsedItem;
        if(!localStorageItem){
          localStorage.setItem(itemName,JSON.stringify([initialValue]));
          parsedItem=[]
        }else{
          parsedItem=JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
        setLoading(false);
      }
      catch(error){
        setLoading(false)
        setError(true)
      }
      console.log('se cargo')
    },2000)//por el momento,el set time out solo me ayuda a ver mi estamos cargando
    // eslint-disable-next-line react-hooks/exhaustive-deps  
  },[])

  
    
  
    const saveItem=(newItem)=>{
      localStorage.setItem(itemName,JSON.stringify(newItem))
      setItem(newItem)
    }
    return {
      item,
      saveItem,
      loading,
      error
    }
  }

  export {useLocalStorage}