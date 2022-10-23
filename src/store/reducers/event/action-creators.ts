import UserService from '../../../api/UserService';

import { User } from '../../../models/User';
import { AppDispatch } from '../../index';
import { IEvent } from './../../../models/Event';
import { EventActionEnum, SetEventsAction, SetGuestsAction } from './models';

export const EventActionCreators = {
  setGuests: (guests: User[]): SetGuestsAction => ({ type: EventActionEnum.SET_GUESTS, payload: guests }),
  setEvents: (events: IEvent[]): SetEventsAction => ({ type: EventActionEnum.SET_EVENTS, payload: events }),

  fetchGuests: () => async (dispatch: AppDispatch) => {
    try {
      const response = await UserService.getUsers();
      dispatch(EventActionCreators.setGuests(response.data));
    } catch (error) {
      console.log('error', error);
    }
  },
  createEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
    try {
      const eventsStr: string = localStorage.getItem('events') || '[]';
      const events: IEvent[] = JSON.parse(eventsStr);

      events.push(event);
      dispatch(EventActionCreators.setEvents(events));
      localStorage.setItem('events', JSON.stringify(events));
    } catch (error) {
      console.log('error', error);
    }
  },
};
