import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import ProfileContent from './ProfileContent';
import { useState, useEffect } from 'react';

export default function Profile( { profileInfo, handleProfiles } ) {
    
    
    
    return (
        <>
            <Box sx={{ display: 'flex',
            justifyContent: 'center',
            alignItems: 'center', 
            }}>
                <Card sx={{display: "flex", justifyContent: 'center', alignItems: 'center', border: "2px solid black",
            margin: "10px", borderRadius: "10px"}} variant="outlined">
                    <ProfileContent profileInfo={profileInfo} handleProfiles={handleProfiles}/>
                </Card>
            </Box>
        </>
    );
}