import { ImageSourcePropType } from "react-native";

export type ImageSliderType = {
    title: string;
    image: ImageSourcePropType;
    description: string;
};

export const ImageSlider = [
    {
        title: "Sistema inteligente",
        image: require('../../assets/images/image1.jpg'),
        description: "Inteligência na gestão, excelência na educação."
    },
    {
        title: "Todo mundo usa o Proesc",
        image: require('../../assets/images/image2.jpg'),
        description: "+ de 3 mil escolas parceiras, de norte ao sul do país"
    },
    {
        title: "Simplifique seu trabalho",
        image: require('../../assets/images/image4.jpg'),
        description: "A proesc transforma a gestão escolar em todos os níveis."
    },
    {
        title: "Vem de Proesc",
        image: require('../../assets/images/image3.jpg'),
        description: "Conheça nossos serviços!"
    },
]