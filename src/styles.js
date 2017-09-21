export const fill = {
  flex: 1
};

export const row = {
  flexDirection: 'row'
};

export const col = {
  flexDirection: 'column'
};

export const fillRow = {
  flex: 1,
  flexDirection: 'row'
};

export const fillCol = {
  flex: 1,
  flexDirection: 'column'
};

export const fillRowVCenter = {
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
};

export const fillRowHCenter = {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'center',
};

export const fillRowCenter = {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
};

export const fillColCenter = {
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

export const fillRowSpaceBetween = {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
};

export const border = (borderRadius = 5, borderColor = '#ccc', borderWidth = 1) => ({
  borderRadius,
  borderColor,
  borderWidth
});

export default {
  fill,
  row,
  col,
  fillRow,
  fillCol,
  fillColCenter,
  fillRowCenter,
  fillRowHCenter,
  fillRowVCenter,
  fillRowSpaceBetween
}
