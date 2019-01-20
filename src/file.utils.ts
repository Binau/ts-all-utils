import * as FS from 'fs';
import {StringUtils} from './string.utils';

/**
 * Classe permettant de gerer les fichiers
 */
export class FileUtils {

    /**
     * Chargement d'un fichier json en objet
     * @param fileUrl
     * @param options
     */
    public static loadJson(fileUrl: string, options: { encoding: string; flag?: string; } | string = 'utf8') {
        return FS.promises.readFile(fileUrl, options).then(b => JSON.parse(StringUtils.fromBuffer(b)));
    }

    /**
     * Ecriture d'un fichier depuis des données json
     * @param fileUrl
     * @param data
     */
    public static writeJson(fileUrl: string, data: any, options?: { encoding?: string | null, mode?: string | number, flag?: string | number } | string | null) {
        return FS.promises.writeFile(fileUrl, JSON.stringify(data), options);
    }
}