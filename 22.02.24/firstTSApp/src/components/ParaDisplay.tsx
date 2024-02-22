import { useRecoilValue } from "recoil";
import { para } from "../store/atom/para";

export default function ParaDisplay() {
   const paraToDisplay: string = useRecoilValue(para);

   return (
      <>
         <h1>Generated Paragraph :</h1>
         <h3>{paraToDisplay}</h3>
      </>
   );
}
