import React from 'react'

import Card from 'react-bootstrap/Card';




const MovieCard = ({movie}) => {
    
  return (
    <div>
 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.posterURL} style={{width:"100%", height:"150px"}}/>
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
{movie.description}
        </Card.Text>
        <Card.Text>
{movie.rating}
        </Card.Text>
      
      </Card.Body>
    </Card>

    </div>
  )
}

export default MovieCard