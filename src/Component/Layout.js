import { makeStyles } from '@material-ui/core'
import React from 'react'
const useStyles = makeStyles({
    page:{
        background:'#f9f9f9',
        with: '100%',
        height: '200%'

    }
}) 

export default function Layout({children}) {
    const classes = useStyles();
  return (
    <div>
        <div className={classes.page}>
            {children}
        </div>
    </div>
  )
}
