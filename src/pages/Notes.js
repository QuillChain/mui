import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import { Typography, Button, ButtonGroup, Container, TextField } from '@material-ui/core'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'
import SendIcon from '@mui/icons-material/Send';
import './Notes.css'
import NoteCard from '../Component/NoteCard';



export default function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/notes')
      .then(res => res.json())
      .then(data => setNotes(data))
  }, [])
  console.log(notes)
  const handleDelete = async (id)=>{
    await fetch('http://localhost:8000/notes/'+id,{
      method: 'DELETE',
    });
    const newNotes = notes.filter(note=> note.id != id) ;
    setNotes(newNotes);
  }

  return (
    <div>
      <Container className='container' >
        <Grid container spacing={2}>

          {notes.map(note => (
            <Grid item key={note.id} xs={12} sm={6} md={4} lg={2} >
              <Paper elevation={8}>
                <NoteCard note={note} handleDelete={handleDelete}/>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
}