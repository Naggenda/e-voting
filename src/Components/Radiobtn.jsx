import React from "react";
import {
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@material-ui/core";

const Radiobtn = (props) => {
  const candidate = props.candidate;
  console.log(candidate);

  return (
    <div>
      {candidate?.map((candidate) => (
        <FormControl>
          <h2>{candidate.title}</h2>
          {candidate.value.map((c, i) => (
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group" key={i}
            >
              <FormControlLabel
                value={c.name}
                control={<Radio />}
                label={c.name}
              />
            </RadioGroup>
          ))}
        </FormControl>
      ))}
    </div>
  );
};

export default Radiobtn;
