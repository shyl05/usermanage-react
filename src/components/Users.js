import React from "react";
import axios from "axios";
import { useEffect , useState } from "react";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
}))(TableCell);
  
const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 400,
  },
});

const Users = () => {
    const [users , setusers] = useState([]);
    const classes = useStyles();
    const getUserData = async() =>{
        try{
        const data = await axios.get(
            "http://3.6.93.159:7883/machstatz/get_all_users"
        );
        console.log(data.data);
        setusers(data.data);
        }
        catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getUserData();
    }, []);

    return(
        
        <div className = "users">
            {/* <ul>
                
                    <li key = {item.email}>
                        First Name : {item.first_name} | Last Name : {item.last_name} | Email : {item.email}
                    </li>
                    )
                )
                }
            </ul> */}
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="right">First Name</StyledTableCell>
                            <StyledTableCell align="right">Last Name</StyledTableCell>
                            <StyledTableCell align="right">Username</StyledTableCell>
                            <StyledTableCell align="right">Email</StyledTableCell>
                            <StyledTableCell align="right"> </StyledTableCell>
                            <StyledTableCell align="right"> </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            {users.map(item => (
                            <StyledTableRow key={item.email}>
                                <StyledTableCell align="right">{item.fist_name}</StyledTableCell>
                                <StyledTableCell align="right">{item.last_name}</StyledTableCell>
                                <StyledTableCell align="right">{item.username}</StyledTableCell>
                                <StyledTableCell align="right">{item.email}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Users