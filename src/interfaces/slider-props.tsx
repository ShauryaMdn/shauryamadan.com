import { SliderItems } from "./slider-items";

export interface SliderProps {
    items: SliderItems[];
};

export interface SlideProps {
    item: SliderItems;
    className: string;
    moveFunction: (direction: string) => void;
}
