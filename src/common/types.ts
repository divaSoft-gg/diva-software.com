/**
 * @description
 * Interface for Scrollama step
 */
export interface IStep {
    index: number;
    element: HTMLElement;
    direction: string;
}

/**
 * @description
 * Interface for product
 * Used in the Scrollama component (our products section)
 */
export interface IProduct {
    logo: string;
    name: string;
    slug: string;
    description: string;
    preview: string;
    customStyles: {
        bgColor: string,
        rotation: string
    }
}