import React from 'react';
import axios from 'axios';
import UpdateCom from './UpdateComment'
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
// import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';
// import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';


// import { Button } from 'bootstrap';
import { withAuth0 } from '@auth0/auth0-react';
import { autocompleteClasses } from '@mui/material';
// import './css.css'



class Coment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            commentsArr: [],
            showFlag: false,
            currentComment: []
        }
    }


    componentDidMount = () => {
        axios
            .get(`http://localhost:3010/coment`)
            .then(result => {
                this.setState({
                    commentsArr: result.data
                })

            })
            .catch(err => {
                console.log(err);
            })

    }

    addComment = async (event) => {
        event.preventDefault();

        const { user } = this.props.auth0;
        const obj = {
            name: user.name,
            picture: user.picture,
            comment: event.target.comCom.value
        }
        // console.log(obj);


        await axios
            .post(`http://localhost:3010/coment`, obj)
            .then(result => {
                this.setState({
                    commentsArr: result.data
                })

            })
            .catch(err => {
                console.log(err);
            })
    }


    deleteComment = (id) => {
        // console.log(id);
        axios
            .delete(`http://localhost:3010/coment/${id}`)
            .then(result => {
                this.setState({
                    commentsArr: result.data
                })
            })
            .catch(err => {
                console.log(err);
            })

    }

    updateComment = (event) => {
        event.preventDefault();
    //    alert(1);
        const { user } = this.props.auth0;
        let obj = {
            // name: user.name,
            // picture: user.picture,
            comment: event.target.comCom.value
        }
        const id = this.state.currentComment._id;
        axios
            .put(`http://localhost:3010/coment/${id}`, obj)
            .then(result => {
                this.setState({
                    commentsArr: result.data
                })
                this.handleClose();
            })
            .catch(err => {
                console.log(err);
            })
    }

    openForm = (item) => {
        this.setState({
            showFlag: true,
            currentComment: item
        })
        console.log(item);
    }

    handleClose = () => {
        this.setState({
            showFlag: false
        })
    }




    render() {
        const { user } = this.props.auth0;
        // console.log(user.picture)

        return (
            <>



                <h1>Comments</h1>
                {this.state.commentsArr.map(item => {
                    return (

                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                            <Divider variant="inset" component="li" />
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt="Cindy Baker" src={item.picture} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={item.name}
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                <h3>{item.comment}</h3>
                                                <Button onClick={() => this.deleteComment(item._id)} variant="outlined" startIcon={<DeleteIcon />}>
                                                    Delete
                                                </Button>
                                                <EditIcon onClick={() => this.openForm(item)} />
                                                Edit
                                            </Typography>

                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                        </List>
                    )
                })}
                <form onSubmit={this.addComment} style={{
                    margin: '10px', justifyContent: "center",
                    width: "800px", height: autocompleteClasses
                }}>

                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        {/* <Divider variant="inset" component="li" /> */}
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                {/* <Avatar alt="Cindy Baker" src={user.picture} /> */}
                            </ListItemAvatar>
                            <ListItemText
                                // primary={user.name}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >

                                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 2.5 }} />
                                                <TextField onDragEnter={SubmitEvent} name="comCom" id="input-with-sx" label="add comment" variant="standard" />
                                            </Box>
                                            {/* <textarea type="text" name="comCom" placeholder='Write a nice comment like you' /> */}
                                            {/* <Button type='submit' variant="outline-danger">Comment</Button> */}
                                            {/* <Button type='submit' variant="contained" endIcon={<SendIcon />}>
                                                Comment
                                            </Button> */}

                                        </Typography>

                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    </List>
                </form>
                {this.state.showFlag && <UpdateCom
                show={this.state.showFlag}
                handleClose={this.handleClose}
                updateComment={this.updateComment}
                currentComment={this.state.currentComment}
                />}


            </>
        )
    }
}
export default withAuth0(Coment);