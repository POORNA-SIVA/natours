import axios from 'axios';
import '@babel/polyfill';
import { showAlert } from './alerts';

export const resetPassword = async (tokenurl, password, passwordConfirm) => {
  const tokenArray = tokenurl.split('/');
  const token = tokenArray[tokenArray.length - 1];
  try {
    const res = await axios({
      method: 'PATCH',
      url: `/api/v1/users/resetPassword/${token}`,
      data: {
        password,
        passwordConfirm,
      },
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Password reset completed succesfully');
      window.setTimeout(() => {
        location.assign('/');
      }, 1000);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
