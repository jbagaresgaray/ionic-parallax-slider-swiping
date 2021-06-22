import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonRouter,
  useIonViewWillEnter,
} from "@ionic/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { ParallaxItem, getSliderItems } from "../data/messages";
import SlideItem from "../components/SlideItem/SlideItem";
import Segment from "../components/Segment/Segment";

import "./Home.scss";

const Home: React.FC = () => {
  const [sliderItems, setSliderItems] = useState<ParallaxItem[]>([]);
  const router = useIonRouter();

  useIonViewWillEnter(() => {
    const msgs = getSliderItems();
    setSliderItems(msgs);
  });

  const onCardSlideClick = (id: number) => {
    router.push(`/detail/${id}`, "forward");
  };

  return (
    <IonPage id="home-page">
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense" className="ion-no-border">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
          <Segment />
        </IonHeader>
        <Swiper
          spaceBetween={15}
          slidesPerView={1.15}
          centeredSlides
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {sliderItems &&
            sliderItems.map((item, index) => (
              <SwiperSlide key={index}>
                <SlideItem
                  itemSrc={item.image}
                  onCardClick={() => onCardSlideClick(item.id)}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </IonContent>
    </IonPage>
  );
};

export default Home;
