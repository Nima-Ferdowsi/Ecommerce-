import * as React from "react";
import { Img } from "react-image";
import  ScaleLoader  from "react-spinners/ScaleLoader";

interface ImgLoaderProps{
    img:string,
    classes?:string
}


const ImgLoader: React.FC<ImgLoaderProps> = (props) => {
  return (
    <Img
    className={props.classes}
      src={`${props.img}`}
      loader={
        <div className="text-center mx-auto">
          <ScaleLoader loading={true} color={"#FF4500	"} />
        </div>
      }
    />
  );
};

export default ImgLoader;
