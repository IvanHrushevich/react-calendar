import moment, { Moment } from 'moment';

export const rules = {
  required: (message: string = 'Required field') => ({
    required: true,
    message,
  }),
  isDateAfter:
    (message: string = 'Date cannot be in past') =>
    () => {
      return {
        validator(_: any, value: Moment) {
          const currentDateMoment = moment().utcOffset(0);
          currentDateMoment.set({ hour: 0, minute: 0, second: 0, millisecond: 0 });

          return value.isSameOrAfter(currentDateMoment) ? Promise.resolve() : Promise.reject(new Error(message));
        },
      };
    },
};
