///<reference path="../infrastructure/services/businessservice.ts"/>

import {
  ItemListDto,
  ObjectByCodeDto,
  CodeDescriptionDto,
  ListObjectsByIdsDto,
  GetCategoriesDto,
  ItemDetailDto
} from "./dto";
import {Position, User, Activity, Material, Item, AttachFile} from "../models";

export interface IBusinessService {
  getAllActivities(item: Item): Activity[];
  
  getImages(item: Item): string[];
  
  getAttachFiles(item: Item): AttachFile[];
  
  getItem(id: string): Promise<ItemDetailDto>;
  
  getCategories(): Promise<GetCategoriesDto>;
  
  getObjectsByBluetoothIds(ids: string[]): Promise<ListObjectsByIdsDto>;
  
  getActivities(material: Material): Activity[];
  
  getCodeDescription(code: string): Promise<CodeDescriptionDto>;
  
  saveCurrentPosition(position: Position): any;
  
  toTimeString(time: number): string;
  
  toDateString(time: number): string;
  
  getItems(): Promise<ItemListDto>;
  
  getObjectByCode(code: string): Promise<ObjectByCodeDto>;
  
  getLink(relative: string): string;
  
  getCurrentPosition(): Promise<Position>;
  
  getUser(): Promise<User>;
  
  toDateString(time: number): string;
  
  toTimeString(time: number): string;
  
  toDateTimeString(time: number): string;
}
