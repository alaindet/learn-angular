import { ServerElement } from './server-element.model';

export class ServerBlueprint implements ServerElement {

  name: string;
  content: string;
  type: string;

  constructor(name = '', content = '') {
    this.name = name;
    this.content = content;
    this.type = 'blueprint';
  }

}
