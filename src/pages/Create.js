import { Button, Container, Typography, makeStyles } from '@material-ui/core'
import { ArrowBackOutlined, ArrowRightOutlined, ClassRounded } from '@mui/icons-material'
import React from 'react'

const useStyles = makeStyles({
  btn: {
    fontSize: 60,
    backgroundColor: 'violet',
    '&:hover': {
      backgroundColor: 'blue'
    }
  },
  title: {
    textDecoration: 'underline',
    marginBottom: 20
  }
}
)

export default function Create() {
  const classes = useStyles();
  return (
    <div>
      <Container>

        <Typography
          variant='h6'
          color='textSecondary'
          component='h2'
          gutterBottom
        >
          Create Note Here
        </Typography>
        <br />
        <Button
          variant='contained'
          color='secondary'
          endIcon={<ArrowRightOutlined />}
          onClick={() => console.log('you clicked me.')}
        >
          SUBMIT
        </Button>
      </Container>
    </div>
  )
}
