export interface ResourceItem {
    name: string;
    path: string;
    type: string;
    size?: number;
}

export interface BreadcrumbItem {
    name: string;
    path: string;
}

export interface ResourceItemsData {
    items: ResourceItem[];
    total: number;
}
