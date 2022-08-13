export interface Incident {
    id: number;
    objet: string;
    description: string;
        telephone: string;
        adresse: string;
        raison: string;
        document?: any;
        gravite: string;
        creation: Date;
        status: string;
        consultant_id: number;
        fichiers:Array<string>;
}
export interface Incidentpagination{
    listincidentFront:Array<Incident>;
    nbpage: number;
    numPage: number;
}

