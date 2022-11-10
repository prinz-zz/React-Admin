import './userList.scss';
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { userRows } from '../../data';
import { Link } from 'react-router-dom';
import { useState } from 'react';


export default function UserList() {

    const [data, setData] = useState(userRows)
    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        {field: 'user', headerName: 'User', width: 200, renderCell: (params) => {
            return (
                <div className='userListUser'>
                    <img src={params.row.avatar} alt='' />
                    {params.row.userName}
                </div>
            )
        }
        },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'status', headerName: 'Status', width: 150 },
        { field: 'transaction', headerName: 'Transaction Volume', width: 150 },
        {
            field: 'actions', headerName: 'Action', width: 100, renderCell: (params) => {
                return (
                    <>
                        <Link to={'/user/'+params.row.id}>
                            <button className='edit'>Edit</button>
                        </Link>
                    <DeleteOutlinedIcon className='icon' onClick={()=> handleDelete(params.row.id)}/>
                    </>    
                )
            }
        },
      ];

    return (
        <div className="userList">
       <DataGrid
        rows={data}
        disableSelectionOnClick        
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />

        </div>
    ) 
}