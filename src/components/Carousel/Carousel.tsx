import React, { useEffect } from "react";
import SlickSlider from "react-slick";
import { Box, Image, Text, VStack, useBreakpointValue } from "@chakra-ui/react";
import { useCarouselStore } from "../../store/carouselStore";
import tiny1 from "../../assets/images/gallery/1.jpeg";
import tiny2 from "../../assets/images/gallery/2.jpg";
import tiny3 from "../../assets/images/gallery/3.jpg";

const Carousel: React.FC = () => {
    const { index, setIndex } = useCarouselStore();

    // Determina el tamaño del texto basado en el tamaño de la pantalla
    const textSize = useBreakpointValue({ base: "2xl", md: "4xl", lg: "5xl" });
    const boxHeight = useBreakpointValue({ base: "40vh", md: "50vh", lg: "60vh" });

    const settings = {
        dots: true,
        infinite: true,
        speed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        afterChange: (current: number) => setIndex(current),
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const newIndex = index === 2 ? 0 : index + 1;
            setIndex(newIndex);
        }, 4000);

        return () => clearInterval(interval);
    }, [index, setIndex]);

    return (
        <Box position="relative" width="full" overflow="hidden">
            <SlickSlider {...settings}>
                <Box height={boxHeight} position="relative">
                    <Image src={tiny1} alt="Gallery 1" width="100%" height="100%" objectFit="cover" position="absolute" />
                </Box>
                <Box height={boxHeight} position="relative">
                    <Image src={tiny2} alt="Gallery 2" width="100%" height="100%" objectFit="cover" position="absolute" />
                </Box>
                <Box height={boxHeight} position="relative">
                    <Image src={tiny3} alt="Gallery 3" width="100%" height="100%" objectFit="cover" position="absolute" />
                </Box>
            </SlickSlider>
            <VStack position="absolute" top={{ base: "25%", md: "30%", lg: "55%" }} left="0" right="0" alignItems="flex-start" px={{ base: 4, md: 8, lg: 16 }} zIndex="2" fontFamily="Raleway">
                <Text fontSize={textSize} color="white" fontWeight="bold" textAlign="left">
                    Escápate a la experiencia
                </Text>
                <Text fontSize={textSize} color="white" fontWeight="bold" textAlign="left">
                    de alojarte en una minicasa
                </Text>
            </VStack>
        </Box>
    );
};

export default Carousel;
