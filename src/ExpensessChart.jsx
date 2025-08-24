import React from "react";
import {Box , Typography} from "@mui/material"
import {BarChart ,  Bar , Tooltip , XAxis , ResponsiveContainer} from "recharts"


import data from "../src/data.json"



export default function ExpensesChart(){
      return (
        <Box sx={{
            bgcolor:"white",
            borderRadiusL:"12px",
            p:3,
            width:"100%",
            maxWidth:400,
            mx:"auto",
            mb:3,
            "@media (max-width:600px)": {
              maxWidth: "90%",
              p: 2,
        },
        }}>
                <Typography  variant="h6" fontWeight="bold" sx={{mb:2 , fontSize: {xs:"16px" , sm:"18px"}}}>
                     Spending - last 7 days
                </Typography>
                 <ResponsiveContainer width="100%" height={200}>
                        <BarChart data={data}>
                                 <XAxis  dataKey="day" />
                                 <Tooltip />
                                 <Bar dataKey="amount" fill="#ec775f" radius={[5,5,0,0]} />
                        </BarChart>
               </ResponsiveContainer>
        </Box>

       
      )
}