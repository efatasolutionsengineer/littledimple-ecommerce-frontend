import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { type Settings } from "react-slick";

export const BasicSlider = ({ children, settings }: { children: React.ReactNode, settings: Settings }) => {

    return (
        <Slider {...settings} nextArrow={<NextArrow />} prevArrow={<PrevArrow />}>
            {children}
        </Slider>
    )
}

function NextArrow(props: { className?: string, style?: React.CSSProperties, onClick?: React.MouseEventHandler<HTMLDivElement> }) {
    const { className, style, onClick } = props;
    return (
        <div onClick={onClick} className={`${className} absolute !right-8 top-1/2 z-10`} style={style}>
            <svg width="20" height="20" viewBox="0 0 22 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.4325 18.4922L0.590857 32.3344C0.209726 32.7146 6.10352e-05 33.223 6.10352e-05 33.7651C6.10352e-05 34.3074 0.209726 34.8155 0.590857 35.1963L1.80373 36.4086C2.18426 36.79 2.69294 37 3.235 37C3.77707 37 4.28514 36.79 4.66597 36.4086L21.1466 19.9283C21.5289 19.5462 21.7383 19.0357 21.7368 18.4931C21.7383 17.948 21.5292 17.4381 21.1466 17.0558L4.68131 0.591396C4.30048 0.209969 3.79241 0 3.25004 0C2.70798 0 2.19991 0.209969 1.81878 0.591396L0.606197 1.80367C-0.182835 2.5927 -0.182835 3.87718 0.606197 4.66591L14.4325 18.4922Z" fill="#7E8185" />
            </svg>

        </div>
    );
}

function PrevArrow(props: { className?: string, style?: React.CSSProperties, onClick?: React.MouseEventHandler<HTMLDivElement> }) {
    const { className, style, onClick } = props;
    return (
        <div onClick={onClick} className={`${className} absolute !left-8 top-1/2 z-10`} style={style}>
            <svg width="20" height="20" viewBox="0 0 22 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.38569 18.5693L21.1663 4.6663C21.5457 4.2844 21.7532 3.7751 21.7508 3.23304C21.7484 2.69068 21.5365 2.18354 21.1537 1.80439L19.9355 0.597459C19.5533 0.217706 19.0437 0.00997818 18.5016 0.0123627C17.9596 0.0147471 17.4524 0.226948 17.0733 0.61005L0.665294 17.1627C0.284645 17.5464 0.0775267 18.0578 0.0814179 18.6005C0.0823115 19.1456 0.293617 19.6545 0.67793 20.0352L17.2155 36.427C17.598 36.8067 18.107 37.0145 18.6494 37.0121C19.1914 37.0097 19.6986 36.7975 20.078 36.4144L21.2852 35.1968C22.0708 34.4043 22.0651 33.1198 21.2726 32.3346L7.38569 18.5693Z" fill="#7E8185" />
            </svg>
        </div>
    );
}