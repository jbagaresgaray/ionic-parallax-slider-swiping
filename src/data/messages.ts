export interface ParallaxItem {
  image: string;
  avatar: string;
  id: number;
}

const sliderItems: ParallaxItem[] = [
  {
    image: "./assets/images/image.svg",
    avatar:
      "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
    id: 0,
  },
  {
    image: "./assets/images/pasted.svg",
    avatar:
      "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
    id: 1,
  },
];

export const getSliderItems = () => sliderItems;

export const getSliderItem = (id: number) =>
  sliderItems.find((m) => m.id === id);
