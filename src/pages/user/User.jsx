import './user.scss';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import PublishIcon from '@mui/icons-material/Publish';
import { Link } from 'react-router-dom';


export default function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to='/newUser'>
                    <button className="userAddButton">Create user</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src='https://www.w3schools.com/howto/img_avatar2.png' alt="" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Adam Smith</span>
                            <span className="userShowTitle">Economist</span>
                    </div>
                    </div>
                    <div className="userShowBottom">
                        <span className='userShowTitle'>Account Details</span>
                        <div className="userShowInfo">
                        <PermIdentityIcon className='icon' />
                        <span className="userShowInfoTitle">adamSmith77</span>
                        </div>
                        <div className="userShowInfo">
                        <CalendarTodayIcon className='icon' />
                        <span className="userShowInfoTitle">22 - 03 - 1976</span>
                        </div>
                        <span className='userShowTitle'>Contact Details</span>
                        <div className="userShowInfo">
                        <PhoneAndroidIcon className='icon' />
                        <span className="userShowInfoTitle">+91 2345 8765</span>
                        </div>
                        <div className="userShowInfo">
                        <MailOutlineIcon className='icon' />
                        <span className="userShowInfoTitle">adamSmith77@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                        <LocationSearchingIcon className='icon' />
                        <span className="userShowInfoTitle">New Delhi | India</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form action="" className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" placeholder='adamSmith77' />
                            </div>
                            <div className="userUpdateItem">
                                <label>Fullname</label>
                                <input type="text" placeholder='Adam Smith' />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input type="text" placeholder='+91 2345 8765' />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="text" placeholder='adamSmith77@gamil.com' />
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input type="text" placeholder='New Delhi | India' />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src='https://www.w3schools.com/howto/img_avatar2.png' alt="" />
                                <label htmlFor="file"><PublishIcon/></label>
                                <input type="file" id="file" />
                            </div>
                            <button>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}