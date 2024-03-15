import React from "react";
import {
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@material-ui/core";

const Radiobtn = (props) => {
  const candidates = props.candidates;

  
  return (
    <div>
      {candidates.map((candidate, i) => (
        <FormControl key={i}>
          <h2>{candidate.title}</h2>
          {
            candidate.values.map((value, index) => (
              <RadioGroup 
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              key={index}>
                <FormControlLabel value={value.name} control={<Radio />} label={value.name} />
              </RadioGroup>
            ))
          }
          <br />
        </FormControl>
      ))}
    </div>
  )
}

//   return (
//     <div>
//       {candidates?.map((candidate) => (
//         <FormControl>
//           <h2>{candidate.title}</h2>
//           {candidate.value.map((c, i) => (
//             <RadioGroup
//               aria-labelledby="demo-radio-buttons-group-label"
//               name="radio-buttons-group" key={i}
//             >
//               <FormControlLabel
//                 value={c.name}
//                 control={<Radio />}
//                 label={c.name}
//               />
//             </RadioGroup>
//           ))}
//         </FormControl>
//       ))}
//     </div>
//   );
// };

export default Radiobtn;
