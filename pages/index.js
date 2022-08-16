import { useState } from 'react'
import { Card,CardMedia,Grid,ButtonBase,Typography,Modal,Box,Stack,Avatar } from '@mui/material'
import { styled } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import PublicIcon from '@mui/icons-material/Public';
import Link from 'next/link'

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });

  const boxStyle = {
    position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "330px", md: "500px" },
  bgcolor: "background.paper",
  border: "white solid 2px",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
  alignItems: "center",
  };

  const A = styled('a')({
    textDecoration: 'none',
    color: '#0074D9',
    cursor: 'pointer',
  });
const Search = ()=>{
    const [open,setOpen]=useState(false);
    const handleOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };
    return(
        <>
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <ButtonBase onClick={handleOpen} sx={{width:"100%"}}>                
                    <Card elevation={5} sx={{padding:3, minHeight:"100px",width:"100%"}}>
                        <Grid container spacing={1} direction="row">
                            <Grid item xs={4}>
                                <Avatar src="/images/GenericMale.png" sx={{width:"100px", height:"100px"}} variant="rounded"/>
                            </Grid>
                            <Grid item container direction="column" sx={{alignItems:"right"}} xs={8}>
                                <Grid item>
                                    <Typography textAlign="center">Student Name</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography textAlign="center">DEPT</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography textAlign="center">ROLL</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Card>
                </ButtonBase>
                <Modal open={open} onClose={handleClose}>
                    <Box sx={boxStyle} maxWidth="100">
                        <Stack spacing={3}>
                            <Typography textAlign="center" variant="h4"><b>NAME</b></Typography>
                            <div align="center">
                            <Avatar src="/images/GenericMale.png" sx={{width:200, height:200}} variant="rounded"/>
                            </div>
                            <Typography variant="subtitle1" align="center">
                                DEPT
                            </Typography>
                            <Typography variant="subtitle1" align="center">
                                ROLL
                            </Typography>
                            <Typography variant="subtitle1" align="center">
                                H13, A666
                            </Typography>
                            <Grid container spacing={1}>
                                <Grid item xs={4}>
                                    <Stack alignItems="center">
                                        <EmailIcon/>
                                        <Typography variant="subtitle2" color="textSecondary">nameYXX@iitk.ac.in</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={4}>
                                    <Stack alignItems="center">
                                        <HomeIcon/>
                                        <Typography variant="subtitle2" color="textSecondary">Kanpur, U.P.</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={4}>
                                    <Stack alignItems="center">
                                        <BloodtypeIcon/>
                                        <Typography variant="subtitle2" color="textSecondary">AB+</Typography>
                                    </Stack>
                                </Grid>
                            </Grid>
                            <Stack direction="column" align="center">
                                <Link href="#">
                                    <a>
                                        <PublicIcon />
                                        <Typography variant="subtitle2"><a className="underline">Homepage</a></Typography>
                                    </a>
                                </Link>
                            </Stack>
                        </Stack>
                    </Box>
                </Modal>
            </Grid>
            <Grid item xs={4}>
                <Card elevation={5} sx={{padding:3, minHeight:"100px"}}>
                    <div> 
                        NAME
                    </div>
                    <div>EE </div>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card elevation={5} sx={{padding:3, minHeight:"100px"}}>
                    <div> 
                        NAME
                    </div>
                    <div>EE </div>
                </Card>
            </Grid>     
        </Grid>
        <style jsx>{`
            a{
                text-decoration: none;
                color: #0074D9;
              }
              .underline{
                position: relative;
              }
              
              .underline::before{
                content: '';
                position: absolute;
                bottom: 0;
                right: 0;
                width: 0;
                height: 2px;
                background-color: #0074D9;
                transition: width 0.6s cubic-bezier(0.25, 1, 0.5, 1);
              }
              
              @media (hover: hover) and (pointer: fine) {
                .underline:hover::before{
                  left: 0;
                  right: auto;
                  width: 100%;
                }
              }
        `
        }
        </style>
        </>
    )
}

export default Search