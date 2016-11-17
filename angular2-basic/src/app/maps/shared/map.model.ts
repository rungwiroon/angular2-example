export class MarkerModel implements Marker {
    public Lat?: number;
    public Lng?: number;
    public Info?: Info;
    public IconPath?: string;
}

export interface Marker {
    Lat?: number;
    Lng?: number;
    IconPath?: string;
}

export class Info {
    CustomerBoxId: number;
    License: string;
    Head: number;
    StatusDate: string;
    Status: string;
    Speed: number;
    Address: string;
}
