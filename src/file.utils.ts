import * as FS from 'fs';
import {StringUtils} from './string.utils';

export class FileUtils {

    public static loadJson(fileUrl: string, options: { encoding: string; flag?: string; } | string) {
        FS.promises.readFile(fileUrl, options).then(b => JSON.parse(StringUtils.fromBuffer(b)));
    }
}