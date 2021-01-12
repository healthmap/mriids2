import dayjs from "dayjs";

export const ebolaInitialDateRange = {
  from: new Date(2014, 9, 1),
  to: new Date(2016, 1, 20),
};

export const covidInitialDateRange = {
  from: new Date(2020, 0, 20),
  to: new Date(),
};

export const covidDateRangeOptions = [
  {
    label: "Previous 30 days",
    range: () => ({
      startDate: new Date(dayjs().subtract(30, "day")),
      endDate: new Date(),
    }),
    isSelected() {
      return true;
    },
  },
  {
    label: "Previous 60 days",
    range: () => ({
      startDate: new Date(dayjs().subtract(60, "day")),
      endDate: new Date(),
    }),
    isSelected() {
      return true;
    },
  },
  {
    label: "Previous 90 days",
    range: () => ({
      startDate: new Date(dayjs().subtract(90, "day")),
      endDate: new Date(),
    }),
    isSelected() {
      return true;
    },
  },
  {
    label: "Previous 120 days",
    range: () => ({
      startDate: new Date(dayjs().subtract(120, "day")),
      endDate: new Date(),
    }),
    isSelected() {
      return true;
    },
  },
];
