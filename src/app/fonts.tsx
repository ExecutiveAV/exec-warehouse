import localFont from "next/font/local";

export const loraFont = localFont({ src: [
    {
      path: '../assets/fonts/lora-regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/lora-regular-italic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../assets/fonts/lora-bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/lora-bold-italic.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../assets/fonts/lora-medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/lora-medium-italic.ttf',
      weight: '500',
      style: 'italic',
    }
] });

export const marcellusFont = localFont({ src: [
    {
        path: '../assets/fonts/marcellus.ttf',
        weight: '400',
        style: 'normal',
    }
] });

export const permanentMarkerFont = localFont({ src: [
    {
        path: '../assets/fonts/permanent-marker.ttf',
        weight: '400',
        style: 'normal',
    },
] });