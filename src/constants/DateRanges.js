import dayjs from "dayjs";

export const ebolaInitialDateRange = {
  from: new Date(2014, 9, 1),
  to: new Date(2016, 1, 20),
};

export const covidInitialDateRange = {
  from: new Date(2020, 0, 1),
  to: new Date(),
};

export const covidDateRangeOptions = [
  {
    label: "Since Jan 1, 2020",
    range: () => ({
      startDate: covidInitialDateRange.from,
      endDate: new Date(),
    }),
    isSelected() {
      return true;
    },
  },
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

export const ebolaDateRangeOptions = [
  {
    label: "1 month",
    range: () => ({
      startDate: ebolaInitialDateRange.from,
      endDate: new Date(dayjs(ebolaInitialDateRange.from).add(1, "month")),
    }),
    isSelected() {
      return true;
    },
  },
  {
    label: "3 months",
    range: () => ({
      startDate: ebolaInitialDateRange.from,
      endDate: new Date(dayjs(ebolaInitialDateRange.from).add(3, "month")),
    }),
    isSelected() {
      return true;
    },
  },
  {
    label: "6 months",
    range: () => ({
      startDate: ebolaInitialDateRange.from,
      endDate: new Date(dayjs(ebolaInitialDateRange.from).add(6, "month")),
    }),
    isSelected() {
      return true;
    },
  },
  {
    label: "1 year",
    range: () => ({
      startDate: ebolaInitialDateRange.from,
      endDate: new Date(dayjs(ebolaInitialDateRange.from).add(1, "year")),
    }),
    isSelected() {
      return true;
    },
  },
  {
    label: "Max",
    range: () => ({
      startDate: ebolaInitialDateRange.from,
      endDate: ebolaInitialDateRange.to,
    }),
    isSelected() {
      return true;
    },
  },
  {
    label: "Reset",
    range: () => ({
      startDate: ebolaInitialDateRange.from,
      endDate: ebolaInitialDateRange.to,
    }),
    isSelected() {
      return true;
    },
  },
];
