/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import * as React from 'react'


const Sample:React.FC = () => {


  const titleStyle = css({
    background: 'blue'
  })

  const styles = {
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
    <div onClick={()=>console.log(styles)}>
    sample component

    <div css={titleStyle}>
      item blue
      </div>
          <div css={styles.red}>
            item red
            </div>
                <div css={styles.green}>
                  item green <span>sasaassaasa1 </span><span>sasaassaasa2</span>
                  </div>
                      <div css={styles.green}>
                        item green
                        </div>

    {/*  <div className={styles.blueDiv}>
      item blue
      </div>

        <div className={styles.redDiv}>
        item red
        </div>
          <div className={styles.redDiv}>
          item red
          </div>
*/}
    </div>
  )

}

export default Sample;
