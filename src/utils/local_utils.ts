import { IResponse } from '../interfaces/basic/IResponse';

const DBG = true;

export function debug(message: string, moduleName?: string, lineMarker?: string)
{
    const moduleId: string = moduleName ? `[${moduleName}]` : '';
    const lineId: string = lineMarker ? `[${lineMarker}]` : '';
    const spacer: string = moduleId || lineId ? '| ' : '';

    const lineHeader = `${moduleId}${lineId}${spacer} ${message}`;  // resulted string format : "[MOD][41234]: mesaj 12344"

    console.log(`${message}`);
}


export enum HttpReturnCodes
{
    OK = 200,
    Created = 201,
    BadRequest = 400,
    Forbidden = 403,
    NotFound = 404,
    InternalServerError = 500
}


export function SendError(res, code: number, message?: string)
{
    const defaultHardcodedResponse: IResponse = { responseCode: HttpReturnCodes.InternalServerError, responseMessage: message || 'Oops, something wrong happened...' };

    let errorResponse: IResponse | undefined = errorResponsesList.get(code);

    if (!errorResponse)
        errorResponse = defaultHardcodedResponse;

    console.log(JSON.stringify(errorResponse));

    res.status(errorResponse.responseCode).json(errorResponse);
}

