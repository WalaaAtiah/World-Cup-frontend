import { Avatar, List, ListItem, autocompleteClasses, ListItemText, Button, ListItemAvatar, Typography, TextField, Box } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import { Comment, Header } from 'semantic-ui-react';
import EditIcon from '@mui/icons-material/Edit';
import Carousel from "react-bootstrap/Carousel";
import Commentators from './Commentators.json';
import { withAuth0 } from '@auth0/auth0-react';
import Navbar from 'react-bootstrap/Navbar';
import UpdateCom from './UpdateComment';
import React from 'react';
import axios from 'axios';
import './Comments.css';


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
            .get(`https://comments1234.herokuapp.com/coment`)
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
            .post(`https://comments1234.herokuapp.com/coment`, obj)
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
            .delete(`https://comments1234.herokuapp.com/coment/${id}`)
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
            name: user.name,
            picture: user.picture,
            comment: event.target.comCom.value
        }
        const id = this.state.currentComment._id;
        axios
            .put(`https://comments1234.herokuapp.com/coment/${id}`, obj)
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
        const { isAuthenticated, user } = this.props.auth0;
        return (
            <>
                <div>

                    <div>
                    <Navbar className='top5'>
                                <h3>top 5 commentators</h3>
                            </Navbar>


                        <div className="contenteeeeeee" >
                            
                            <Carousel >
                                {Commentators.map(item => {
                                    return (
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={item.img}
                                                alt={item.name}
                                                style={{ width: '5rem', height: '30rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                                            />
                                            <Carousel.Caption
                                                style={{ border: "solid 1px rgba(255,255,255,.5)", backgroundColor: "rgba(0,0,0,.5)", width: '22rem', height: '70px' }}
                                            >
                                                <p>{item.name}</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    );
                                })}
                            </Carousel>
                        </div>
                        <div className='comment-navbar'>
                            <Navbar >
                                <h2>Comments</h2>
                            </Navbar>
                        </div>
                        {this.state.commentsArr.map(item => {
                            return (
                                <div style={{ wordBreak: 'break-all' }}>
                                    <div>
                                        <Comment.Group minimal>
                                            <Header as='h3' dividing>

                                            </Header>
                                            <Comment className='commentcomment'>
                                                <div className='comment'>
                                                    <Avatar className='avatar' title={item.name} alt="Cindy Baker" src={item.picture} />
                                                    <Comment.Author as='a'>{item.name}</Comment.Author>
                                                </div>
                                                <Comment.Content>
                                                    <p>{item.comment}</p>
                                                    {isAuthenticated &&
                                                        <div className='div-button'>
                                                            {item.name === user.name ?
                                                                <Button title="Delete" variant="outlined" color="error" onClick={() => this.deleteComment(item._id)} startIcon={<DeleteIcon />}>
                                                                    delete
                                                                </Button> : console.log(false)}
                                                            {item.name === user.name ?
                                                                <Button title="Edit" color="info" onClick={() => this.openForm(item)} startIcon={<EditIcon />}>edit</Button>
                                                                : console.log(false)}
                                                        </div>
                                                    }
                                                </Comment.Content>
                                            </Comment>
                                        </Comment.Group>
                                    </div>
                                </div>
                            )
                        })
                        }
                        <form onSubmit={this.addComment} style={{
                            margin: '10px', justifyContent: "center",
                            width: "800px", height: autocompleteClasses
                        }}>
                            <List className='add-comment-box'>
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                        <AccountCircle sx={{ color: 'rgb(100, 100, 100)', mr: 1, my: 2.5, boxShadow: '0 0 0 2px #0e8b29', borderRadius: '15px' }} />
                                                        <TextField onDragEnter={SubmitEvent} name="comCom" id="input-with-sx" label={"Add a comment..."}
                                                            variant="standard" />
                                                    </Box>
                                                </Typography>
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                            </List>
                        </form>
                        {
                            this.state.showFlag && <UpdateCom
                                show={this.state.showFlag}
                                handleClose={this.handleClose}
                                updateComment={this.updateComment}
                                currentComment={this.state.currentComment}
                            />
                        }
                    </div>
                </div>
            </>
        )
    }
}
export default withAuth0(Coment);
