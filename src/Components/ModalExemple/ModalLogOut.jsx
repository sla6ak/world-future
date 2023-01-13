import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { isAdmin } from 'redux/sliceAdmin';
import { ButtonWrapper, ModalTitle, LogOutContainer, TitleAccent, ShowPasswordBtnStyles } from './ModalLogOut.styled';
import { GeneralButton } from 'components/generalButton/GeneralButton.styled';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import { Lock, Visibility, VisibilityOff } from '@mui/icons-material';
const PASSVORD = '12345';

const ModalLogOut = ({ onModalClose }) => {
    const dispatch = useDispatch();
    const admin = useSelector(state => state.admin);
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');

    const handleClickShowPassword = () => setShowPassword(!showPassword);

    const handleChange = e => {
        setPassword(e.target.value);
    };

    const logOut = () => {
        if (admin) {
            dispatch(isAdmin(!admin));
            toast.success('Good By admin!');
            onModalClose();
        }
        if (!admin) {
            if (password === PASSVORD) {
                dispatch(isAdmin(!admin));
                toast.success('Hello admin!');
                onModalClose();
            }
        }
    };

    return (
        <LogOutContainer>
            <ModalTitle>
                {admin ? (
                    <>
                        <TitleAccent>Log Out</TitleAccent>Are you sure you want to log out?
                    </>
                ) : (
                    <>
                        <TitleAccent>Log In</TitleAccent>
                        <TextField
                            fullWidth
                            variant={'standard'}
                            required
                            id="password"
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                            onChange={handleChange}
                            value={password}
                            placeholder={'Password'}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Lock sx={{ color: '#E0E0E0', ml: '7px' }} />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                        >
                                            {showPassword ? (
                                                <Visibility />
                                            ) : (
                                                <VisibilityOff sx={ShowPasswordBtnStyles} />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        Are you sure you want to log in?
                    </>
                )}
            </ModalTitle>
            <ButtonWrapper>
                <GeneralButton fullWidth variant={'contained'} bts={'submit'} onClick={logOut} type="button">
                    Yes
                </GeneralButton>
                <GeneralButton fullWidth variant={'outlined'} bts={'link'} onClick={onModalClose} type="button">
                    No
                </GeneralButton>
            </ButtonWrapper>
        </LogOutContainer>
    );
};

export default ModalLogOut;
