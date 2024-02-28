import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function Cards(props) {
  return (
    <div>
                            <Card sx={{ width: 375 , height:200 , padding:"20px 0px" ,background:"#f8f9fa"}}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 18, fontWeight: "bold" }} color="text.primary" gutterBottom>
                                        {props.year}
                                    </Typography>
                                    <Typography variant="p" component="div" sx={{fontSize:"18px"}}>
                                       {props.degree}
                                    </Typography>
                                    <Typography sx={{ m: 1.5 }}>
                                       {props.clgname}
                                    </Typography>
                                </CardContent>
                            </Card>
    </div>
  )
}
