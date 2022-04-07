import React, { useEffect,useState } from 'react';
import  axios  from 'axios';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea, Stack } from '@mui/material';
 import {Grid,Container,Paper,Link,Box,MenuItem,FormControl,Select,InputLabel, Stack} from '@mui/material';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
import PublicIcon from '@mui/icons-material/Public';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Post from './Post';





const News = () => {

    const[News,setNewss]=useState([]);
    const [category, setCategory] = React.useState('general');
    const [city,setCity]=useState('eg');

    const handleChange = (event) => {
      setCategory(event.target.value);
    }
  const handleCityChange=(event)=>{
        setCity(event.target.value);
  }
   
    useEffect(()=>{
         axios.get(`https://newsapi.org/v2/top-headlines?country=${city}&category=${category}&apiKey=4433c45cb21646b8a2285f5e46e5c5a5`)
         .then(response=>{
             console.log(response.data.articles)
             setNewss(response.data.articles)
             ;})
    },[category,city]);
    return (
        <Container sx={{mt:3}}>
         <Stack direction={'row'} spacing={2}> 

     <PublicIcon></PublicIcon>
        <Box sx={{ maxWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={city}
          label="Country"
          onChange={handleCityChange}
        >
          <MenuItem value={'eg'}>Egypt</MenuItem>
          <MenuItem value={'us'}>United-States</MenuItem>
          <MenuItem value={'fr'}>France</MenuItem>
          <MenuItem value={'de'}>German</MenuItem>
          <MenuItem value={'ru'}>Ruissa</MenuItem>
        </Select>
      </FormControl>
    </Box>      
   <Box sx={{ maxWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Category"
          onChange={handleChange}
        >
          <MenuItem value={'general'}>General</MenuItem>
          <MenuItem value={'business'}>business</MenuItem>
          <MenuItem value={'sports'}>sports</MenuItem>
        </Select>
      </FormControl>
    </Box>

  
    </Stack>
          <Paper sx={{p:2}} elevation={24}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

            {News.map((post,idx)=>{
                return(
        <Grid key={`${post.source.name}-${post.publishedAt}`} item md={3}>
                    <Post {...post}  ></Post>
                    </Grid>
                )
            })}
 

            
       </Grid>
       </Paper>
       </Container>
   


    );
};

export default News;