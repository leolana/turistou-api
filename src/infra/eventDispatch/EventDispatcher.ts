import { EventDispatcher as EventDispatcherClass } from 'event-dispatch';
import { Container } from 'typedi';

// tslint:disable-next-line:function-name
export function EventDispatcher(): any {
  return (object: any, propertyName: string, index?: number): any => {
    const eventDispatcher = new EventDispatcherClass();
    Container.registerHandler({
      object,
      propertyName,
      index,
      value: () => eventDispatcher,
    });
  };
}

export { EventDispatcher as EventDispatcherInterface } from 'event-dispatch';
