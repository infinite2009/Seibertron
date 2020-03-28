import CommandType from '@/enum/command-type';

export default interface ICommandPayload {
  type: CommandType;
  payload: {
    type: string;
    data: {
      [key: string]: any;
      [index: number]: any;
    }
  };
}
