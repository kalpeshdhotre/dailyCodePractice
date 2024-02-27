import React from "react";
import { useSetRecoilState } from "recoil";
import { para } from "../store/atom/para";

export default function UserInput() {
   // const [Paragraph, SetParaGraph] = useRecoilState(para);
   const SetParaGraph = useSetRecoilState(para);
   const wordsArray = ["Hello", "Good", "Morning", "evening", "Night", "year", "Happy"];
   let paraLength: number = 0;

   function getLength(e: React.ChangeEvent<HTMLInputElement>) {
      paraLength = parseInt(e.target.value);
   }

   function generatePara() {
      let tempPara: string = "";
      for (let i = 1; i <= paraLength; i++) {
         tempPara = tempPara + " " + wordsArray[Math.floor(Math.random() * 7)];
      }
      SetParaGraph(tempPara);
   }

   return (
      <div>
         <input onChange={(e) => getLength(e)} type="number" />
         <button onClick={() => generatePara()} type="button">
            Button
         </button>
      </div>
   );
}
const test: string = "TIME_limit";
