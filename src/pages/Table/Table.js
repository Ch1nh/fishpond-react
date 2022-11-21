const sortFishPondName = 'fishPond.name';
const sortDeviceID = 'device.device_id';
const sortCreateDate = 'create_date';
const sortDissolvedOxygen = 'dissolved_oxygen';
const sortHumidity = 'humidity';
const sortTemperature = 'temperature';
const sortPH = 'ph';
const sortEvaluation = 'evaluation';
const sortTypeDESC = 'desc';
const sortTypeASC = 'asc';
export const initState = {
  page: 0,
  size: 10,
  sort: sortFishPondName,
  sortType: sortTypeASC,
  search: '',
  totalPage: 5,
};
export const SET_PREVPAGE = 'set_prevpage';
export const SET_NEXTPAGE = 'set_nextpage';
export const SET_SORTFISHPONDNAME = 'set_sortFishPondName';
export const SET_SORTDEVICEID = 'set_sortDeviceID';
export const SET_SORTCREATEDATE = 'set_sortCreateDate';
export const SORTDISSOLVEDOXYGEN = 'set_sortDissolvedOxygen';
export const SET_SORTHUMIDITY = 'set_sortHumidity';
export const SET_SORTTEMPERATURE = 'set_temperature';
export const SET_SORTPH = 'set_sortPH';
export const SET_SORTEVALUATION = 'set_sortEvaluation';

export const SET_SEARCH = 'set_search';

export const setSearch = (payload) => {
  return {
    type: SET_SEARCH,
    payload,
  };
};
export const reducer = (state, action) => {
  console.log(action);
  switch (action.type || action) {
    case SET_PREVPAGE:
      if (state.page === 0) {
        return state;
      } else {
        return { ...state, page: state.page - 1 };
      }
    case SET_NEXTPAGE:
      if (state.page === state.totalPage) return state;
      else return { ...state, page: state.page + 1 };

    case SET_SORTFISHPONDNAME:
      if (state.sortType === sortTypeASC) {
        return { ...state, sortType: sortTypeDESC, sort: sortFishPondName };
      } else return { ...state, sortType: sortTypeASC, sort: sortFishPondName };

    case SET_SORTDEVICEID:
      if (state.sortType === sortTypeASC) {
        return { ...state, sortType: sortTypeDESC, sort: sortDeviceID };
      } else return { ...state, sortType: sortTypeASC, sort: sortDeviceID };

    case SET_SORTCREATEDATE:
      if (state.sortType === sortTypeASC) {
        return { ...state, sortType: sortTypeDESC, sort: sortCreateDate };
      } else return { ...state, sortType: sortTypeASC, sort: sortCreateDate };

    case SORTDISSOLVEDOXYGEN:
      if (state.sortType === sortTypeASC) {
        return { ...state, sortType: sortTypeDESC, sort: sortDissolvedOxygen };
      } else return { ...state, sortType: sortTypeASC, sort: sortDissolvedOxygen };
    case SET_SORTHUMIDITY:
      if (state.sortType === sortTypeASC) {
        return { ...state, sortType: sortTypeDESC, sort: sortHumidity };
      } else return { ...state, sortType: sortTypeASC, sort: sortHumidity };
    case SET_SORTTEMPERATURE:
      if (state.sortType === sortTypeASC) {
        return { ...state, sortType: sortTypeDESC, sort: sortTemperature };
      } else return { ...state, sortType: sortTypeASC, sort: sortTemperature };

    case SET_SORTPH:
      if (state.sortType === sortTypeASC) {
        return { ...state, sortType: sortTypeDESC, sort: sortPH };
      } else return { ...state, sortType: sortTypeASC, sort: sortPH };
    case SET_SORTEVALUATION:
      if (state.sortType === sortTypeASC) {
        return { ...state, sortType: sortTypeDESC, sort: sortEvaluation };
      } else return { ...state, sortType: sortTypeASC, sort: sortEvaluation };

    case SET_SEARCH:
      return { ...state, search: action.payload };
    default:
      throw new Error('acction invalid');
  }
};
