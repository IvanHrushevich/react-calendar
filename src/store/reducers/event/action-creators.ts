import UserService from '../../../api/UserService';

import { User } from '../../../models/User';
import { AppDispatch } from '../../index';
import { IEvent } from './../../../models/Event';
import { EventActionEnum, SetEventsAction, SetGuestsAction } from './models';

const getEventsFromLocalStorage = (): IEvent[] => {
  const eventsStr: string = localStorage.getItem('events') || '[]';
  return JSON.parse(eventsStr);
};

const saveEventsToLocalStorage = (events: IEvent[]): void => {
  localStorage.setItem('events', JSON.stringify(events));
};

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
      const events: IEvent[] = getEventsFromLocalStorage();
      events.push(event);
      dispatch(EventActionCreators.setEvents(events));
      saveEventsToLocalStorage(events);
      localStorage.setItem('events', JSON.stringify(events));
    } catch (error) {
      console.log('error', error);
    }
  },
  fetchEvents: (username: string) => async (dispatch: AppDispatch) => {
    try {
      const events: IEvent[] = getEventsFromLocalStorage();
      const eventsRelatedToUser: IEvent[] = events.filter(
        (event: IEvent) => event.author === username || event.guest === username
      );
      dispatch(EventActionCreators.setEvents(eventsRelatedToUser));
    } catch (error) {
      console.log('error', error);
    }
  },
};
