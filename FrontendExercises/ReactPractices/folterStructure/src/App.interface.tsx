export interface SectionModel {
    name: string,
    sections?: SectionModel[]
}

export interface SectionModelElementList {
    name: string,
    sections?: SectionModel[],
    level: number,
    onSelectSection: (name: string) => void; 
    actualSection: string,
}