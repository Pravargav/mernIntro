import { createContext,  useState } from "react";
export const ShopContext = createContext(null);



export const ShopContextProvider = (props) => {
  const [bidItem, setBidItem] = useState(0);



  const addToBid = (itemId) => {
    setBidItem(itemId);
  };



  const contextValue = {
    bidItem,
    addToBid,
  };

  return (
    <ShopContext.Provider value={contextValue}>  
     {props.children}    
     </ShopContext.Provider>
  );
};
