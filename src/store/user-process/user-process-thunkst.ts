import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginData, UserData } from '../../types/user';
import { ThunkAPI } from '../../types/state';
import { APIRoute, NameSpace } from '../../const';
import { dropToken, saveToken } from '../../service/token';

export const checkAuthAction = createAsyncThunk<UserData, undefined, ThunkAPI> (
  `${NameSpace.User}/checkAuth`,
  async (_arg, {extra: api}) => {
    const {data} = await api.get<UserData>(APIRoute.Login);
    return data;
  }
);

export const loginAction = createAsyncThunk<UserData, LoginData, ThunkAPI> (
  `${NameSpace.User}/login`,
  async (body, {extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, body);
    saveToken(data.token);
    return data;
  }
);

export const logoutAction = createAsyncThunk<unknown, undefined, ThunkAPI> (
  `${NameSpace.User}/logout`,
  async (_arg, {extra: api}) => {
    await api.delete<string>(APIRoute.Logout);
    dropToken();
  }
);

