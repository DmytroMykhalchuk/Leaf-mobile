import { Path, Svg } from "react-native-svg";

type NotebookType = {
    size?: number;
};

export const NotebookIcon: React.FC<NotebookType> = ({ size = 40 }) => {

    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 1024 1024" class="icon" version="1.1">
            <Path d="M806.4 896c0 14.08-11.52 25.6-25.6 25.6H243.2c-14.08 0-25.6-11.52-25.6-25.6V153.6c0-14.08 11.52-25.6 25.6-25.6h537.6c14.08 0 25.6 11.52 25.6 25.6v742.4z" fill="#FAC546" />
            <Path d="M780.8 934.4H243.2c-21.76 0-38.4-16.64-38.4-38.4V153.6c0-21.76 16.64-38.4 38.4-38.4h537.6c21.76 0 38.4 16.64 38.4 38.4v742.4c0 21.76-16.64 38.4-38.4 38.4zM243.2 140.8c-7.68 0-12.8 5.12-12.8 12.8v742.4c0 7.68 5.12 12.8 12.8 12.8h537.6c7.68 0 12.8-5.12 12.8-12.8V153.6c0-7.68-5.12-12.8-12.8-12.8H243.2z" fill="#231C1C" />
            <Path d="M217.6 896c0 14.08 11.52 25.6 25.6 25.6h64V128h-64c-14.08 0-25.6 11.52-25.6 25.6v742.4z" fill="#C89005" />
            <Path d="M307.2 934.4h-64c-21.76 0-38.4-16.64-38.4-38.4V153.6c0-21.76 16.64-38.4 38.4-38.4h64c7.68 0 12.8 5.12 12.8 12.8v793.6c0 7.68-5.12 12.8-12.8 12.8z m-64-793.6c-7.68 0-12.8 5.12-12.8 12.8v742.4c0 7.68 5.12 12.8 12.8 12.8h51.2V140.8h-51.2z" fill="#231C1C" />
            <Path d="M409.6 678.4l-51.2-89.6-51.2 89.6V128h102.4z" fill="#E24F32" />
            <Path d="M409.6 691.2c-5.12 0-8.96-2.56-11.52-6.4L358.4 614.4l-39.68 70.4c-2.56 5.12-8.96 7.68-14.08 6.4-5.12-1.28-8.96-6.4-8.96-12.8V128c0-7.68 5.12-12.8 12.8-12.8h102.4c7.68 0 12.8 5.12 12.8 12.8v550.4c0 6.4-3.84 11.52-8.96 12.8H409.6z m-51.2-115.2c5.12 0 8.96 2.56 11.52 6.4l26.88 47.36V140.8h-76.8v488.96l26.88-47.36c2.56-3.84 6.4-6.4 11.52-6.4z" fill="#231C1C" />
        </Svg>
    );
};