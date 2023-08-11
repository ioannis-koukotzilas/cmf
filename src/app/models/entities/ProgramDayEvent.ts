import { ProgramEventItem } from './ProgramEventItem';

export class ProgramDayEvent {
  constructor(
    public type: string,
    public items: ProgramEventItem[]
  ) { }
}
