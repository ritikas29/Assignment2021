import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '85vh',
      //height: '85vh',
      background: '#FFFFF',
    },
    boxHeight: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
    },
    boxRow: {
      display: 'flex',
      flex: 1,
      height: '100%',
    },
    width1: {
      display: 'flex',
      width: '100%',
      height: '100%',
      padding: '3%',
      paddingTop: 0,
    },
    heading: {
      color: '#063797',
      paddingTop: '3%',
      fontWeight: 'bold',
      fontSize: '1.3em',
      //marginLeft:'50%',
      fontFamily: 'Nunito Sans',
    },
    title: {
      color: '#063797',
      fontSize: '1.2em',
      paddingRight: '5%',
      fontFamily: 'Nunito Sans',
      // marginBottom: '5%',
    },
    subheader: {
      fontSize: '1.2em',
      color: '#000',
      paddingLeft: '3%',
      paddingTop: '3%',
      //fontFamily: 'Nunito Sans',
    },
    card: {
      //display: 'flex',
      paddingBottom: '2%',
      //flexDirection: 'column',
      height: '40%',
      width: '50%',
    },
    halfBox: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      paddingTop: '2%',
  
      justifyContent: 'space-evenly',
    },
    box: {
      display: 'flex',
      flexWrap: 'wrap',
      //minHeight: '85vh',
      // height: '85vh',
      width: '80%',
      alignSelf: 'center',
      flexDirection: 'column',
    },
    paper: {
      display: 'flex',
      //flexDirection: 'column',
      padding: '2%',
      paddingRight: '4%',
      width: '100%',
    },
    width: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%',
      //height: '100%',
      padding: '3%',
      marginRight: '5%',
      paddingTop: 0,
    },
  
  }))
const DisplayDetails = (props)=>{
    const item_id = props.location.state.object;
    console.log(props.location.state.object)
     console.log(item_id)
     console.log(item_id.bids[0])
     const classes = useStyles()
     const Card = (title, value, object) => {
        if (object && object.array) {
            if (object.bids) {
              
              return (
                <Box className={classes.card} color='white'>
                   <Typography className={classes.title}> {title}</Typography>{' '}
                      <List className={classes.list} dense={true}>
                        {value.map((el) => (
                          <ListItem>
                            <ListItemAvatar>
                             
                            </ListItemAvatar>
                            <Typography className={classes.title}> Car Title</Typography>{' '}
                            <ListItemText
                              className={classes.subheader}
                              primary={
                                el.carTitle 
                              }
                              
                            />
                            <Typography className={classes.title}> Amount</Typography>{' '}
                            <ListItemText
                              className={classes.subheader}
                              primary={
                                el.amount 
                              }
                              
                            />
                          </ListItem>
                        ))}
                      </List>  
                </Box>
              )
            }
        }
        return (
          <Box className={classes.card} color='white'>
            <Typography className={classes.title}>{title} </Typography>
            <Grid item xs={10}>
              <Paper elevation={2} className={classes.width}>
                <Typography className={classes.subheader}>{value} </Typography>
              </Paper>
            </Grid>
          </Box>
        )
      }
      return (
        <div className={classes.root}>
          <Box className={classes.box} mt={5} px={2}>
            
              <Typography variant='h5' gutterBottom className={classes.heading}>
                Customer Details
              </Typography>
    
              <img alt="" src={item_id.avatarUrl} style={{width: 50, borderRadius: '50%'}}/>
                {Card('Name:', item_id.firstname)}
                {Card('Lastname', item_id.lastname)}
                {Card('Email:', item_id.email)}
                {Card('Phone:', item_id.phone)}
                {Card('HasPremium:', item_id.hasPremium  ? 'True' : 'False')}
                {Card('Bids', [...item_id.bids].reverse(), {
            array: true,
            bids: true,
          })}
          </Box>
        </div>
      )
}
export default DisplayDetails
