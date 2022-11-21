import request from '~/utils/http';

export const findAll = async ({ page, sort, search = '' }) => {
  try {
    const res = await request.get('aquatic-information/', {
      params: {
        page,
        sort,
        search,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
export const getAllOfDeviceLastUpdate = async (page, sort, sortType, search = '') => {
  try {
    const res = await request.get('aquatic-information/of-device-last-update', {
      params: {
        page,
        sort: `${sort},${sortType}`,
        search,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
