import { IResponse } from '../interfaces/basic/IResponse';

const DBG = true;

export function debug(message: string, moduleName?: string, lineMarker?: string)
{
    const moduleId: string = moduleName ? `[${moduleName}]` : '';
    const lineId: string = lineMarker ? `[${lineMarker}]` : '';
    const spacer: string = moduleId || lineId ? '| ' : '';

    // resulted string format : "[MODULE_NAME][line_bla_41234]: mesaj bla bla12344"
    const lineHeader = `${moduleId}${lineId}${spacer} ${message}`;

    console.log(`${message}`);
}


enum HttpReturnCodes
{
    OK = 200,
    Created = 201,
    BadRequest = 400,
    Forbidden = 403,
    NotFound = 404,
    InternalServerError = 500
}

// tslint:disable-next-line: variable-name
const DefaultErrorMessages: Map<number, string> = new Map(
    [
        [400, 'Bad, bad request...'],
        [404, `Oops, the resource you're looking for is ... missing`],
        [500, 'Oops, something wrong happened...']
    ]);



export function SendError(res, code: number, message?: string)
{
    const errorMessage: string = message || DefaultErrorMessages.get(code) || '._(ツ)_.';

    const errorResponse: IResponse = { responseCode: code, responseMessage: errorMessage };

    //console.log(JSON.stringify(errorResponse));

    res.status(errorResponse.responseCode).json(errorResponse);
}
