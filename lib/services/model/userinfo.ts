import {User} from './user';
import {Weather} from './weather';

export interface UserInfo extends User {
    code: string;
    position: Position;
    weather: Weather;
    time: number;
    index: number;
}
