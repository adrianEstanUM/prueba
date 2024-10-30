import * as Service from '../src/app.service';

describe('AppController', () => {
  it('should return "Hello World!"', () => {
    const appService = new Service.AppService();
    expect(appService.getHello()).toBe('Hello World!');
  });
});
