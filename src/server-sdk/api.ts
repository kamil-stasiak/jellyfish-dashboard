/* tslint:disable */
/* eslint-disable */
/**
 * Jellyfish Media Server
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError } from './base';

/**
 * Describes component
 * @export
 * @interface Component
 */
export interface Component {
    /**
     * Assigned component id
     * @type {string}
     * @memberof Component
     */
    'id': string;
    /**
     * Component type
     * @type {string}
     * @memberof Component
     */
    'type': string;
}
/**
 * Response containing component details
 * @export
 * @interface ComponentDetailsResponse
 */
export interface ComponentDetailsResponse {
    /**
     * 
     * @type {Component}
     * @memberof ComponentDetailsResponse
     */
    'data': Component;
}
/**
 * 
 * @export
 * @interface JellyfishWebComponentControllerCreateRequest
 */
export interface JellyfishWebComponentControllerCreateRequest {
    /**
     * Component-specific options
     * @type {object}
     * @memberof JellyfishWebComponentControllerCreateRequest
     */
    'options'?: object;
    /**
     * Component type
     * @type {string}
     * @memberof JellyfishWebComponentControllerCreateRequest
     */
    'type': string;
}
/**
 * 
 * @export
 * @interface JellyfishWebPeerControllerCreateRequest
 */
export interface JellyfishWebPeerControllerCreateRequest {
    /**
     * Peer type
     * @type {string}
     * @memberof JellyfishWebPeerControllerCreateRequest
     */
    'type': string;
}
/**
 * Error message
 * @export
 * @interface ModelError
 */
export interface ModelError {
    /**
     * Error details
     * @type {string}
     * @memberof ModelError
     */
    'errors': string;
}
/**
 * Describes peer status
 * @export
 * @interface Peer
 */
export interface Peer {
    /**
     * Assigned peer id
     * @type {string}
     * @memberof Peer
     */
    'id': string;
    /**
     * 
     * @type {PeerStatus}
     * @memberof Peer
     */
    'status': PeerStatus;
    /**
     * Peer type
     * @type {string}
     * @memberof Peer
     */
    'type': string;
}


/**
 * Response containing peer details and their token
 * @export
 * @interface PeerDetailsResponse
 */
export interface PeerDetailsResponse {
    /**
     * 
     * @type {PeerDetailsResponseData}
     * @memberof PeerDetailsResponse
     */
    'data': PeerDetailsResponseData;
}
/**
 * 
 * @export
 * @interface PeerDetailsResponseData
 */
export interface PeerDetailsResponseData {
    /**
     * 
     * @type {Peer}
     * @memberof PeerDetailsResponseData
     */
    'peer': Peer;
    /**
     * Token for authorizing websocket connection
     * @type {string}
     * @memberof PeerDetailsResponseData
     */
    'token': string;
}
/**
 * Informs about the peer status
 * @export
 * @enum {string}
 */

export const PeerStatus = {
    Connected: 'connected',
    Disconnected: 'disconnected'
} as const;

export type PeerStatus = typeof PeerStatus[keyof typeof PeerStatus];


/**
 * Description of the room state
 * @export
 * @interface Room
 */
export interface Room {
    /**
     * 
     * @type {Array<Component>}
     * @memberof Room
     */
    'components': Array<Component>;
    /**
     * 
     * @type {RoomConfig}
     * @memberof Room
     */
    'config': RoomConfig;
    /**
     * Room ID
     * @type {string}
     * @memberof Room
     */
    'id': string;
    /**
     * 
     * @type {Array<Peer>}
     * @memberof Room
     */
    'peers': Array<Peer>;
}
/**
 * Room configuration
 * @export
 * @interface RoomConfig
 */
export interface RoomConfig {
    /**
     * Maximum amount of peers allowed into the room
     * @type {number}
     * @memberof RoomConfig
     */
    'maxPeers'?: number | null;
}
/**
 * Response containing room details
 * @export
 * @interface RoomDetailsResponse
 */
export interface RoomDetailsResponse {
    /**
     * 
     * @type {Room}
     * @memberof RoomDetailsResponse
     */
    'data': Room;
}
/**
 * Response containing list of all rooms
 * @export
 * @interface RoomsListingResponse
 */
export interface RoomsListingResponse {
    /**
     * 
     * @type {Array<Room>}
     * @memberof RoomsListingResponse
     */
    'data': Array<Room>;
}

/**
 * ComponentApi - axios parameter creator
 * @export
 */
export const ComponentApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates the component and adds it to the room
         * @param {string} roomId Room ID
         * @param {JellyfishWebComponentControllerCreateRequest} [jellyfishWebComponentControllerCreateRequest] Component config
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        jellyfishWebComponentControllerCreate: async (roomId: string, jellyfishWebComponentControllerCreateRequest?: JellyfishWebComponentControllerCreateRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'roomId' is not null or undefined
            assertParamExists('jellyfishWebComponentControllerCreate', 'roomId', roomId)
            const localVarPath = `/room/{room_id}/component`
                .replace(`{${"room_id"}}`, encodeURIComponent(String(roomId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication authorization required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(jellyfishWebComponentControllerCreateRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete the component from the room
         * @param {string} roomId Room ID
         * @param {string} id Component ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        jellyfishWebComponentControllerDelete: async (roomId: string, id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'roomId' is not null or undefined
            assertParamExists('jellyfishWebComponentControllerDelete', 'roomId', roomId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('jellyfishWebComponentControllerDelete', 'id', id)
            const localVarPath = `/room/{room_id}/component/{id}`
                .replace(`{${"room_id"}}`, encodeURIComponent(String(roomId)))
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication authorization required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ComponentApi - functional programming interface
 * @export
 */
export const ComponentApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ComponentApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Creates the component and adds it to the room
         * @param {string} roomId Room ID
         * @param {JellyfishWebComponentControllerCreateRequest} [jellyfishWebComponentControllerCreateRequest] Component config
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async jellyfishWebComponentControllerCreate(roomId: string, jellyfishWebComponentControllerCreateRequest?: JellyfishWebComponentControllerCreateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ComponentDetailsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.jellyfishWebComponentControllerCreate(roomId, jellyfishWebComponentControllerCreateRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Delete the component from the room
         * @param {string} roomId Room ID
         * @param {string} id Component ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async jellyfishWebComponentControllerDelete(roomId: string, id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.jellyfishWebComponentControllerDelete(roomId, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ComponentApi - factory interface
 * @export
 */
export const ComponentApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ComponentApiFp(configuration)
    return {
        /**
         * 
         * @summary Creates the component and adds it to the room
         * @param {string} roomId Room ID
         * @param {JellyfishWebComponentControllerCreateRequest} [jellyfishWebComponentControllerCreateRequest] Component config
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        jellyfishWebComponentControllerCreate(roomId: string, jellyfishWebComponentControllerCreateRequest?: JellyfishWebComponentControllerCreateRequest, options?: any): AxiosPromise<ComponentDetailsResponse> {
            return localVarFp.jellyfishWebComponentControllerCreate(roomId, jellyfishWebComponentControllerCreateRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete the component from the room
         * @param {string} roomId Room ID
         * @param {string} id Component ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        jellyfishWebComponentControllerDelete(roomId: string, id: string, options?: any): AxiosPromise<void> {
            return localVarFp.jellyfishWebComponentControllerDelete(roomId, id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ComponentApi - object-oriented interface
 * @export
 * @class ComponentApi
 * @extends {BaseAPI}
 */
export class ComponentApi extends BaseAPI {
    /**
     * 
     * @summary Creates the component and adds it to the room
     * @param {string} roomId Room ID
     * @param {JellyfishWebComponentControllerCreateRequest} [jellyfishWebComponentControllerCreateRequest] Component config
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ComponentApi
     */
    public jellyfishWebComponentControllerCreate(roomId: string, jellyfishWebComponentControllerCreateRequest?: JellyfishWebComponentControllerCreateRequest, options?: AxiosRequestConfig) {
        return ComponentApiFp(this.configuration).jellyfishWebComponentControllerCreate(roomId, jellyfishWebComponentControllerCreateRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Delete the component from the room
     * @param {string} roomId Room ID
     * @param {string} id Component ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ComponentApi
     */
    public jellyfishWebComponentControllerDelete(roomId: string, id: string, options?: AxiosRequestConfig) {
        return ComponentApiFp(this.configuration).jellyfishWebComponentControllerDelete(roomId, id, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * PeerApi - axios parameter creator
 * @export
 */
export const PeerApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create peer
         * @param {string} roomId Room id
         * @param {JellyfishWebPeerControllerCreateRequest} [jellyfishWebPeerControllerCreateRequest] Peer specification
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        jellyfishWebPeerControllerCreate: async (roomId: string, jellyfishWebPeerControllerCreateRequest?: JellyfishWebPeerControllerCreateRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'roomId' is not null or undefined
            assertParamExists('jellyfishWebPeerControllerCreate', 'roomId', roomId)
            const localVarPath = `/room/{room_id}/peer`
                .replace(`{${"room_id"}}`, encodeURIComponent(String(roomId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication authorization required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(jellyfishWebPeerControllerCreateRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete peer
         * @param {string} roomId Room ID
         * @param {string} id Peer id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        jellyfishWebPeerControllerDelete: async (roomId: string, id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'roomId' is not null or undefined
            assertParamExists('jellyfishWebPeerControllerDelete', 'roomId', roomId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('jellyfishWebPeerControllerDelete', 'id', id)
            const localVarPath = `/room/{room_id}/peer/{id}`
                .replace(`{${"room_id"}}`, encodeURIComponent(String(roomId)))
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication authorization required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PeerApi - functional programming interface
 * @export
 */
export const PeerApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PeerApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Create peer
         * @param {string} roomId Room id
         * @param {JellyfishWebPeerControllerCreateRequest} [jellyfishWebPeerControllerCreateRequest] Peer specification
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async jellyfishWebPeerControllerCreate(roomId: string, jellyfishWebPeerControllerCreateRequest?: JellyfishWebPeerControllerCreateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PeerDetailsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.jellyfishWebPeerControllerCreate(roomId, jellyfishWebPeerControllerCreateRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Delete peer
         * @param {string} roomId Room ID
         * @param {string} id Peer id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async jellyfishWebPeerControllerDelete(roomId: string, id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.jellyfishWebPeerControllerDelete(roomId, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PeerApi - factory interface
 * @export
 */
export const PeerApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PeerApiFp(configuration)
    return {
        /**
         * 
         * @summary Create peer
         * @param {string} roomId Room id
         * @param {JellyfishWebPeerControllerCreateRequest} [jellyfishWebPeerControllerCreateRequest] Peer specification
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        jellyfishWebPeerControllerCreate(roomId: string, jellyfishWebPeerControllerCreateRequest?: JellyfishWebPeerControllerCreateRequest, options?: any): AxiosPromise<PeerDetailsResponse> {
            return localVarFp.jellyfishWebPeerControllerCreate(roomId, jellyfishWebPeerControllerCreateRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete peer
         * @param {string} roomId Room ID
         * @param {string} id Peer id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        jellyfishWebPeerControllerDelete(roomId: string, id: string, options?: any): AxiosPromise<void> {
            return localVarFp.jellyfishWebPeerControllerDelete(roomId, id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PeerApi - object-oriented interface
 * @export
 * @class PeerApi
 * @extends {BaseAPI}
 */
export class PeerApi extends BaseAPI {
    /**
     * 
     * @summary Create peer
     * @param {string} roomId Room id
     * @param {JellyfishWebPeerControllerCreateRequest} [jellyfishWebPeerControllerCreateRequest] Peer specification
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PeerApi
     */
    public jellyfishWebPeerControllerCreate(roomId: string, jellyfishWebPeerControllerCreateRequest?: JellyfishWebPeerControllerCreateRequest, options?: AxiosRequestConfig) {
        return PeerApiFp(this.configuration).jellyfishWebPeerControllerCreate(roomId, jellyfishWebPeerControllerCreateRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Delete peer
     * @param {string} roomId Room ID
     * @param {string} id Peer id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PeerApi
     */
    public jellyfishWebPeerControllerDelete(roomId: string, id: string, options?: AxiosRequestConfig) {
        return PeerApiFp(this.configuration).jellyfishWebPeerControllerDelete(roomId, id, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * RoomApi - axios parameter creator
 * @export
 */
export const RoomApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates a room
         * @param {RoomConfig} [roomConfig] Room configuration
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        jellyfishWebRoomControllerCreate: async (roomConfig?: RoomConfig, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/room`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication authorization required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(roomConfig, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete the room
         * @param {string} roomId Room id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        jellyfishWebRoomControllerDelete: async (roomId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'roomId' is not null or undefined
            assertParamExists('jellyfishWebRoomControllerDelete', 'roomId', roomId)
            const localVarPath = `/room/{room_id}`
                .replace(`{${"room_id"}}`, encodeURIComponent(String(roomId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication authorization required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Show information about all rooms
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        jellyfishWebRoomControllerIndex: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/room`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication authorization required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Shows information about the room
         * @param {string} roomId Room ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        jellyfishWebRoomControllerShow: async (roomId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'roomId' is not null or undefined
            assertParamExists('jellyfishWebRoomControllerShow', 'roomId', roomId)
            const localVarPath = `/room/{room_id}`
                .replace(`{${"room_id"}}`, encodeURIComponent(String(roomId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication authorization required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * RoomApi - functional programming interface
 * @export
 */
export const RoomApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = RoomApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Creates a room
         * @param {RoomConfig} [roomConfig] Room configuration
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async jellyfishWebRoomControllerCreate(roomConfig?: RoomConfig, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RoomDetailsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.jellyfishWebRoomControllerCreate(roomConfig, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Delete the room
         * @param {string} roomId Room id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async jellyfishWebRoomControllerDelete(roomId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.jellyfishWebRoomControllerDelete(roomId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Show information about all rooms
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async jellyfishWebRoomControllerIndex(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RoomsListingResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.jellyfishWebRoomControllerIndex(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Shows information about the room
         * @param {string} roomId Room ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async jellyfishWebRoomControllerShow(roomId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RoomDetailsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.jellyfishWebRoomControllerShow(roomId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * RoomApi - factory interface
 * @export
 */
export const RoomApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = RoomApiFp(configuration)
    return {
        /**
         * 
         * @summary Creates a room
         * @param {RoomConfig} [roomConfig] Room configuration
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        jellyfishWebRoomControllerCreate(roomConfig?: RoomConfig, options?: any): AxiosPromise<RoomDetailsResponse> {
            return localVarFp.jellyfishWebRoomControllerCreate(roomConfig, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete the room
         * @param {string} roomId Room id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        jellyfishWebRoomControllerDelete(roomId: string, options?: any): AxiosPromise<void> {
            return localVarFp.jellyfishWebRoomControllerDelete(roomId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Show information about all rooms
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        jellyfishWebRoomControllerIndex(options?: any): AxiosPromise<RoomsListingResponse> {
            return localVarFp.jellyfishWebRoomControllerIndex(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Shows information about the room
         * @param {string} roomId Room ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        jellyfishWebRoomControllerShow(roomId: string, options?: any): AxiosPromise<RoomDetailsResponse> {
            return localVarFp.jellyfishWebRoomControllerShow(roomId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * RoomApi - object-oriented interface
 * @export
 * @class RoomApi
 * @extends {BaseAPI}
 */
export class RoomApi extends BaseAPI {
    /**
     * 
     * @summary Creates a room
     * @param {RoomConfig} [roomConfig] Room configuration
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomApi
     */
    public jellyfishWebRoomControllerCreate(roomConfig?: RoomConfig, options?: AxiosRequestConfig) {
        return RoomApiFp(this.configuration).jellyfishWebRoomControllerCreate(roomConfig, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Delete the room
     * @param {string} roomId Room id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomApi
     */
    public jellyfishWebRoomControllerDelete(roomId: string, options?: AxiosRequestConfig) {
        return RoomApiFp(this.configuration).jellyfishWebRoomControllerDelete(roomId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Show information about all rooms
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomApi
     */
    public jellyfishWebRoomControllerIndex(options?: AxiosRequestConfig) {
        return RoomApiFp(this.configuration).jellyfishWebRoomControllerIndex(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Shows information about the room
     * @param {string} roomId Room ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomApi
     */
    public jellyfishWebRoomControllerShow(roomId: string, options?: AxiosRequestConfig) {
        return RoomApiFp(this.configuration).jellyfishWebRoomControllerShow(roomId, options).then((request) => request(this.axios, this.basePath));
    }
}

