/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState, createContext, useContext, ReactNode, useCallback } from "react";
import Webcam from 'react-webcam';
import { MutableRefObject } from 'react';


interface WebcamRef extends MutableRefObject<Webcam | null> {}

interface GlobalData {
  toggle: boolean;
  dropdown: boolean;
  divRef: any;
  canvasRef:any;
  capturedImage: string | null;
  handleChange: (nextChecked: boolean) => void;
  handleDropDown: (nextChecked: boolean) => void;
  handleClick:()=> void;
  captureImage:any;
  webcamRef: WebcamRef

}


export const AppContext = createContext<GlobalData | null | any >(null);

interface AppProviderProps {
  children: ReactNode;
 

}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [toggle, setToggle] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const divRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef(null);
  const webcamRef = useRef<Webcam | null>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);


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

  const captureImage = useCallback(()=>{
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc !== null) {
        setCapturedImage(imageSrc);
      } else {
        console.error('Error capturing image.');
      }
    }
  }, [webcamRef]);



  
  


  const globalData: GlobalData = {
    toggle,
    divRef,
    dropdown,
    canvasRef,
    capturedImage,
    webcamRef,
    handleChange,
    handleClick,
    handleDropDown,
    captureImage,
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
