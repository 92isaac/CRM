/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState, createContext, useContext, ReactNode } from "react";

interface GlobalData {
  toggle: boolean;
  dropdown: boolean;
  divRef: any;
  handleChange: (nextChecked: boolean) => void;
  handleDropDown: (nextChecked: boolean) => void;
  handleClick:()=> void;

}


export const AppContext = createContext<GlobalData | null | any >(null);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [toggle, setToggle] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const divRef = useRef<HTMLDivElement | null>(null);


  const handleClick = () => {
    if (divRef.current) {
      divRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleChange = () => {
    setToggle(!toggle);
  };

  const handleDropDown = ()=>{
    setDropdown(!dropdown)
  }


  const globalData: GlobalData = {
    toggle,
    divRef,
    dropdown,
    handleChange,
    handleClick,
    handleDropDown,
  };

  return (
    <AppContext.Provider value={globalData}>
      {children}
    </AppContext.Provider>
  );
};

export const GlobalUseContext = () => {
  return useContext(AppContext);
};
