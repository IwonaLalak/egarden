/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import * as React from 'react'


const Sample:React.FC = () => {

  const styles = {
    container:{
      border:'1px solid blue',
      padding:'15px',
    },
    red:{
      background: 'red',
      ['@media (min-width: 500px)']:{
        fontSize:'20px'
      }
  },
      green:{
        background: 'green',
        '& span:first-of-type':{
          color:'white'
        }

    }
  }

  return(

    <div css={styles.container}  onClick={()=>console.log(styles)}>
    <div css={styles.red}>
      item red
      </div>
    <div css={styles.green}>
            item green <span>sasaassaasa1 </span><span>sasaassaasa2</span>
    </div>
    <div css={styles.green}>
                  item green
    </div>


    </div>

  )

}

export default Sample;
