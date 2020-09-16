import { EventEmitter, Type } from '@angular/core';

export const enum SlideInModes {
  Create,
  Update
}

export const enum SlideInVisibilityState {
  Close,
  Open,
}

export interface SlideInState {
  heading: string;
  formData: any;
  modalMode: SlideInModes;
  component: Type<any>;
  handleSave: (eventData: any, afterSave?: () => void) => void;
  handleDelete?: (eventData: any, afterDelete?: () => void) => void;
}

export interface IFormModal {
  saveClicked: EventEmitter<any>;
  deleteClicked: EventEmitter<any>;
  closeClicked: EventEmitter<any>;
  content: {
    component: Type<any>;
    formData: any;
    heading: string;
    showDelete: boolean;
  };
}
