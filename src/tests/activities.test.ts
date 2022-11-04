/* eslint-disable @typescript-eslint/no-unused-vars */

import request from 'supertest';
import mongoose from 'mongoose';
import createApp from '../app';
import Container from '../utils/dependenciesControl/injectionContainer';
import Activity from '../api/activities/activities.model';

const mongoId = new mongoose.Types.ObjectId();
const resultObject = {
  name: 'test',
  comment: 'comment',
  value: 1,
  _id: mongoId,
};
const resultObjectWithIdAsSting = {
  ...resultObject,
  _id: mongoId.toString(),
};

const mockedActivityRepository = {
  getAllActivities: jest.fn(async () => []),
  getActivityById: jest.fn(async (id: string) => resultObject),
  createActivities: jest.fn(async (activity: Activity) => ({
    ...activity,
    _id: mongoId,
  })),
};

let app: any;

beforeAll(async () => {
  await Container.initDependencyContainerWithObj({
    ActivityRepository: mockedActivityRepository,
  });
  app = createApp();
});

describe('activities.handler', () => {
  describe('findAll', () => {
    it('should call getAllActivities once', async () => {
      await request(app).get('/api/activities/');
      expect(mockedActivityRepository.getAllActivities.mock.calls.length).toBe(1);
    });
    it('should return objects provided by the repository', async () => {
      const { body } = await request(app).get('/api/activities/');
      expect(body).toEqual([]);
    });
  });

  describe('findOne', () => {
    it('should respond with an error because provided id is too short', async () => {
      const { status } = await request(app).get('/api/activities/12');
      expect(status).toBe(500);
    });
    it('should call getActivityById once', async () => {
      await request(app).get(`/api/activities/${mongoId}`);
      expect(mockedActivityRepository.getActivityById.mock.calls.length).toBe(1);
    });
    it('should call getActivityById with id provided in params', async () => {
      await request(app).get(`/api/activities/${mongoId}`);
      const callParams = mockedActivityRepository.getActivityById.mock.lastCall;
      const firstCallParam = callParams ? callParams[0] : null;
      expect(firstCallParam).toEqual(mongoId.toString());
    });
    it('should return object provided by the repository', async () => {
      const { body } = await request(app).get(`/api/activities/${mongoId}`);
      expect(body).toEqual(resultObjectWithIdAsSting);
    });
  });
});
