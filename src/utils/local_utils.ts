import { IResponse } from '../interfaces/IResponse';

const DBG = true;

export function debug(message: string, moduleName?: string, lineMarker?: string)
{
    const moduleId: string = moduleName ? `[${moduleName}]` : '';
    const lineId: string = lineMarker ? `[${lineMarker}]` : '';
    const spacer: string = moduleId || lineId ? '| ' : '';

    const lineHeader = `${moduleId}${lineId}${spacer} ${message}`;  // resulted string format : "[MOD][41234]: mesaj 12344"

    console.log(`${message}`);
}


export function respond(res, code: number, message?: string)
{
    const errorResponse: IResponse = { responseCode: code, responseMessage: message };
    res.status(errorResponse.responseCode).json(errorResponse);
}
