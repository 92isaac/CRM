/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState, createContext, useContext, ReactNode } from "react";

interface GlobalData {
  toggle: boolean;
  dropdown: boolean;
  isCapturing: boolean;
  divRef: any;
  videoRef: any;
  canvasRef:any;
  // onCapture: (base64Image: string) => void;
  handleChange: (nextChecked: boolean) => void;
  handleDropDown: (nextChecked: boolean) => void;
  handleClick:()=> void;
  startCapture:()=> void;
  stopCapture:()=> void;
  captureImage:any

}


export const AppContext = createContext<GlobalData | null | any >(null);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [toggle, setToggle] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const divRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isCapturing, setIsCapturing] = useState(false);
  const canvasRef = useRef(null);


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



  const startCapture = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      (videoRef.current as HTMLVideoElement).srcObject = stream;
      setIsCapturing(true);
    } catch (error) {
      console.error('Error accessing the camera:', error);
    }
  };
  

  const stopCapture = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
      setIsCapturing(false);
    }
  };
  
  

  const captureImage = ({ onCapture }: { onCapture: (base64Image: string) => void }) => {
    const video = videoRef.current;
    const canvas = canvasRef.current as unknown as HTMLCanvasElement;

    if (video && canvas) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const context = canvas.getContext('2d');
      if (context) {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageSrc = canvas.toDataURL('image/jpeg');
        onCapture(imageSrc); // Call the onCapture prop with the captured image
      }
    }
  };



  const globalData: GlobalData = {
    toggle,
    divRef,
    dropdown,
    isCapturing,
    videoRef,
    canvasRef,
    handleChange,
    handleClick,
    handleDropDown,
    startCapture,
    stopCapture,
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
