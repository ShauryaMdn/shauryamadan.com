import { SliderItems } from "./slider-items";

export interface SliderState {
    currentIndex: number;
    itemsLength: number;
    items: SliderItems[];
};
