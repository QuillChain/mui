import React from 'react'
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { Card, IconButton, Typography } from '@mui/material';
import { DeleteOutline } from '@mui/icons-material';

export default function NoteCard({ note, handleDelete }) {

  return (
    <>
      <Card elevation={3}>
        <CardHeader
          action={
            <IconButton onClick={()=>handleDelete(note.id)}>
              <DeleteOutline />
            </IconButton>
          }
          title={note.title}
          subheader= {note.category}
        />
        <CardContent>
          <Typography variant='body2' >
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}
