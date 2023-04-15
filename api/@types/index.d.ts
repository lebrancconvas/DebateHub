export interface Welcome {
    kind:     string;
    etag:     string;
    items:    Item[];
    pageInfo: PageInfo;
}

export interface Item {
    kind:    string;
    etag:    string;
    id:      string;
    snippet: Snippet;
}

export interface Snippet {
    publishedAt:          Date;
    channelId:            string;
    title:                string;
    description:          string;
    thumbnails:           Thumbnails;
    channelTitle:         string;
    tags:                 string[];
    categoryId:           string;
    liveBroadcastContent: string;
    localized:            Localized;
    defaultAudioLanguage: string;
}

export interface Localized {
    title:       string;
    description: string;
}

export interface Thumbnails {
    default:  Default;
    medium:   Default;
    high:     Default;
    standard: Default;
    maxres:   Default;
}

export interface Default {
    url:    string;
    width:  number;
    height: number;
}

export interface PageInfo {
    totalResults:   number;
    resultsPerPage: number; 
}
