import request from '~/utils/http';

const findAll = async ({ page, sort }) => {
  try {
    const res = await request.get('of-device-last-update', {
      params: {
        page,
        sort,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
