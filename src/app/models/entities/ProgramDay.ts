import { ProgramDayEvent } from './ProgramDayEvent';

export class ProgramDay {
  constructor(
    public id: number,
    public name: string,
    public events: ProgramDayEvent[],
    public date?: Date
  ) {}
}
