import { TextField, Button, Container, Typography, makeStyles } from '@material-ui/core'
import { ArrowBackOutlined, ArrowRightOutlined, Block, ClassRounded } from '@mui/icons-material'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl'

import React from 'react'

import { useState } from 'react'
import { useHistory } from 'react-router-dom';
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
  },
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
}
)

export default function Create() {
  const history = useHistory();
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [category, setCategory] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const handleSubmit = (e) => {

    title == '' ? setTitleError(true) : setTitleError(false);
    details == '' ? setDetailsError(true) : setDetailsError(false);

    e.preventDefault()
    if (title && details) {
      fetch('http://localhost:8000/notes',{
        method: 'POST',
        headers: {'content-type':'application/json' },
        body: JSON.stringify({title,details,category})
      }).then(()=>history.push('/'))
    }
  }
  return (
    <div>
      <Container className='container'>

        <Typography
          variant='h6'
          color='textSecondary'
          component='h2'
          gutterBottom
        >
          Create Note Here
        </Typography>
        <form noValidate autoComplete='off' onSubmit={handleSubmit}>
          <TextField
            onChange={(e) => { setTitle(e.target.value) }}
            label='Note Title'
            variant='outlined'
            color='secondary'
            fullWidth
            required
            className={classes.field}
            error={titleError}
          />
          <TextField
            onChange={(e) => { setDetails(e.target.value) }}
            label='Detail'
            variant='outlined'
            color='secondary'
            fullWidth
            required
            className={classes.field}
            multiline
            rows={5}
            error={detailsError}
          />
          <FormControl className={classes.field}>
            <FormLabel>Category</FormLabel>
            <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
              <FormControlLabel control={<Radio />} value='money' label='money' />
              <FormControlLabel control={<Radio />} value='work' label='work' />
              <FormControlLabel control={<Radio />} value='todos' label='todos' />
              <FormControlLabel control={<Radio />} value='reminders' label='reminders' />
            </RadioGroup>
          </FormControl>

          <br/>
          <Button
            variant='contained'
            color='secondary'
            endIcon={<ArrowRightOutlined />}
            type='submit'
          >

            SUBMIT
          </Button>

        </form>

      </Container>
    </div>
  )
}
