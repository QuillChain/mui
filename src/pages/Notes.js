import React from 'react'
import { Typography, Button, ButtonGroup, Container } from '@material-ui/core'

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
        <Button
          variant='contained'
          color='secondary'
          onClick={() => { console.log('you click me?') }}
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
