import React from 'react'
import { Typography, Button, ButtonGroup, Container, TextField } from '@material-ui/core'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'
import SendIcon from '@mui/icons-material/Send';

export default function Notes() {
  return (
    <div>
      <Container>

        <Typography
          variant='h6'
          color='textSecondary'
          component='h2'
          gutterBottom
        >
          Note Here
        </Typography>
        <br/>

        <form noValidate autoComplete='off'>
          <TextField placeholder='...'/>
        </form>
        
        <br/>
        <Button
          variant='contained'
          color='secondary'
          onClick={() => { console.log('you click me?') }}
          startIcon= {<SendIcon/>}
        >
          click me
        </Button>
        <br />
        <br />
        <ButtonGroup
          variant='contained'
          color='primary'
        >
          <Button>one</Button>
          <Button>two</Button>
          <Button>three</Button>
        </ButtonGroup>
      </Container>
    </div>
  )
}
