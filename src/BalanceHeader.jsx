import React from "react";
import {Box , Typography} from "@mui/material"



export default function BalanceHeader(){
     return ( 
        <Box sx={{
            bgcolor:"#ec775f",
            color :"white",
            borderRadius:"12px", 
            padding:2,
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            width:"100%",
            maxWidth:400,
            mx:"auto",
            mb:3,
             "@media (max-width:600px)": {
              maxWidth: "90%",
               p: 1.5,
        },
        }}>
              <Box>
                <Typography variant="body2" sx={{opacity:0.9}}>My Balance</Typography>
                <Typography variant="h6" sx={{fontWeight:"bold" , fontSize: { xs: "18px", sm: "20px"}}}>$921.48</Typography>
              </Box>
                <Box>
                    <Box sx={{
                        width:40,
                        height:40,
                         bgcolor: "rgba(255,255,255,0.3)",
                          borderRadius: "50%",
                    }}>

                    </Box>
                </Box>
        </Box>
     )
}