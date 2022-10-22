import axios from 'axios';

import { User } from '../../../models/User';
import { AppDispatch } from '../../index';
import { IEvent } from './../../../models/Event';
import { EventActionEnum, SetEventsAction, SetGuestsAction } from './models';

export const EventActionCreators = {
  setGuests: (guests: User[]): SetGuestsAction => ({ type: EventActionEnum.SET_GUESTS, payload: guests }),
  setEvents: (events: IEvent[]): SetEventsAction => ({ type: EventActionEnum.SET_EVENTS, payload: events }),

  fetchGuests: () => async (dispatch: AppDispatch) => {
    try {
      const guests: User[] = await axios.get('./users.json');
    } catch (error) {
      console.log('error', error);
    }
  },
};
