/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";

interface Props {
  sampleValue: string;
}

const Sample = (props: Props) => {
  const styles = {
    container: {
      border: "1px solid blue",
      padding: "15px",
    },
    red: {
      background: "red",
      ["@media (min-width: 500px)"]: {
        fontSize: "20px",
      },
    },
    green: {
      background: "green",
      "& span:first-of-type": {
        color: "yellow",
      },
    },
  };

  return (
    <div css={styles.container} onClick={() => console.log(styles)}>
      <div css={styles.red}>item red</div>
      <div css={styles.green}>
        item green <span>sasaassaasa1 </span>
        <span>sasaassaasa2</span>
        <div>{JSON.stringify(props)}</div>
      </div>
      <div css={styles.green}>item green</div>
    </div>
  );
};

export default Sample;
