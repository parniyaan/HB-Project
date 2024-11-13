'use client';

import React, {useState, useContext, useEffect,createContext} from 'react';
import KMCImage from "../images/products-Images/KMC.jpg";
import ToyotaHiluxImage from "../images/products-Images/Toyota Hilux.jpg";
import WingleImage from "../images/products-Images/Wingle.jpg";
import NissanPickupImage from "../images/products-Images/Nissan Pickup.jpg";
import CapraImage from "../images/products-Images/Capra.jpg";
import AmicoAsenaImage from "../images/products-Images/Amico Asena.jpg";
import KalutImage from "../images/products-Images/Kalut.jpg";
import FotonImage from "../images/products-Images/Foton.jpg";
import IsuzuImage from "../images/products-Images/Isuzu.jpg";
import PrideVanetImage from "../images/products-Images/Pride vanet.jpg";
import ArisanImage from "../images/products-Images/Arisan.jpg";
import image1KMC from "../images/kmc/1-1.jpg";
import image2KMC from "../images/kmc/1-2.jpg";
import image3KMC from "../images/kmc/1-3.jpg";
import image1foton from "../images/foton/4-1.jpg";
import image2foton from "../images/foton/4-2.jpg";

const CarsContext = React.createContext();

function ContextProvider({children}) {
    const [burgerMenu, setBurgerMenu] = useState(true);
    const [carData, setCarData] = useState([]);
    const [selectedCar, setSelectedCar] = useState(null);
    const [showProduct,setShowProduct] = useState(false);
    // const [selectedCar,setSelectedCar] =useState();

    const data = [
        {
            name: "KMC",
            src: KMCImage,
            description: "خودروی توانمند و مناسب برای استفاده در شرایط سخت",
            information: "KMC یک خودروی قوی و مقاوم است که طراحی آن برای چالش‌های سخت بهینه شده است. ما با تولید لوازم جانبی آفرود با کیفیت بالا، تجربه‌ای ایمن و مطمئن برای شما به ارمغان می‌آوریم. با استفاده از مواد باکیفیت، اطمینان داریم که سفرهای شما با لوازم ما بی‌نقص خواهد بود.",
            slug: "kmc",
            image1: image1KMC,
            image2: image2KMC,
            image3: image3KMC,
        },
        {
            name: "Toyota Hilux",
            src: ToyotaHiluxImage,
            description: "قدرت و دوام بالا، مناسب برای آفرود و کارهای سنگین",
            information: "تویوتا هایلوکس با قدرت و دوام بالا، گزینه‌ای ایده‌آل برای آفرود و کارهای سنگین است. لوازم جانبی آفرود ما به گونه‌ای طراحی شده‌اند که امنیت و راحتی شما را در سفرهای سخت تضمین کنند. ما از بهترین مواد اولیه برای تولید لوازم خود استفاده می‌کنیم تا تجربه‌ای عالی را فراهم کنیم.",
            slug: "toyota-hilux",
            image1: image1foton,
            image2: image2foton,
        },
        {
            name: "Wingle",
            src: WingleImage,
            description: "کیفیت ساخت بالا و مصرف سوخت مناسب، انتخاب اقتصادی",
            information: "وینگل با طراحی اقتصادی و کیفیت ساخت بالا، بهترین گزینه برای مصرف‌کنندگان هوشمند است. ما با تولید لوازم جانبی آفرود با کیفیت، اطمینان حاصل می‌کنیم که سفرهای شما ایمن و بهینه باشد. تجربه‌ای بی‌نظیر از کیفیت و عملکرد را با محصولات ما تجربه کنید.",
            slug: "wingle"
        },
        {
            name: "Nissan Pickup",
            src: NissanPickupImage,
            description: "عملکرد قوی و دوام بالا، گزینه‌ای محبوب در خودروهای تجاری",
            information: "پیکاپ نیسان با عملکرد قوی و دوام بالا، یک گزینه محبوب در خودروهای تجاری است. با لوازم جانبی آفرود ما، می‌توانید از دوام و قابلیت اطمینان بیشتری در سفرهای خود بهره‌مند شوید. ما از مواد با کیفیت برای تولید محصولات خود استفاده می‌کنیم تا شما را در مسیرهای دشوار همراهی کنیم.",
            slug: "nissan-pickup"
        },
        {
            name: "Capra",
            src: CapraImage,
            description: "نسخه بهبودیافته با امکانات بیشتر و مناسب برای مسیرهای سخت و آفرود",
            information: "کپر یک نسخه بهبودیافته است که برای مسیرهای چالشی طراحی شده است. با لوازم جانبی آفرود با کیفیت ما، می‌توانید به راحتی از چالش‌های طبیعی عبور کنید. ما به استفاده از مواد باکیفیت متعهد هستیم تا سفرهای شما را ایمن و لذت‌بخش کنیم.",
            slug: "capra"
        },
        {
            name: "Amico Asena",
            src: AmicoAsenaImage,
            description: "دو دیفرانسیل با طراحی مدرن و امکانات رفاهی بالا",
            information: "آمیگو آسنای با طراحی مدرن، گزینه‌ای عالی برای آفرود است. لوازم جانبی ما به گونه‌ای طراحی شده‌اند که راحتی و ایمنی را برای شما به ارمغان بیاورند. با استفاده از بهترین مواد، می‌توانید به محصولات ما اعتماد کنید.",
            slug: "amico-asena"
        },
        {
            name: "Kalut",
            src: KalutImage,
            description: "پیکاپ اقتصادی مناسب برای استفاده تجاری و باربری",
            information: "کالات یک پیکاپ اقتصادی است که برای استفاده تجاری بهینه شده است. با لوازم جانبی آفرود ما، می‌توانید از قابلیت‌های بیشتری در سفرهای خود بهره‌مند شوید. ما از مواد باکیفیت استفاده می‌کنیم تا به شما اطمینان خاطر بدهیم.",
            slug: "kalut"
        },
        {
            name: "Foton",
            src: FotonImage,
            description: "موتور قوی و قابلیت حمل بار زیاد، مناسب برای مصارف سنگین",
            information: "فوتون با موتور قوی و قابلیت حمل بار زیاد، یک انتخاب مناسب برای مصارف سنگین است. لوازم جانبی ما برای عملکرد بهینه طراحی شده‌اند و ایمنی سفرهای شما را تضمین می‌کنند. از کیفیت بالای محصولات ما لذت ببرید.",
            slug: "foton"
        },
        {
            name: "Isuzu",
            src: IsuzuImage,
            description: "ساختار محکم با عملکرد بالا برای باربری‌های سنگین و شرایط سخت",
            information: "ایسوزو با ساختاری محکم و عملکرد بالا، بهترین انتخاب برای باربری‌های سنگین است. با لوازم جانبی آفرود ما، شما می‌توانید در سخت‌ترین شرایط به راحتی سفر کنید. کیفیت بالای مواد به شما اطمینان می‌دهد.",
            slug: "isuzu"
        },
        {
            name: "Pride Vanet",
            src: PrideVanetImage,
            description: "خودروی اقتصادی و مناسب برای حمل و نقل بار",
            information: "پراید ونت یک خودروی اقتصادی است که به طور خاص برای حمل و نقل بار طراحی شده است. لوازم جانبی آفرود ما به شما کمک می‌کند تا در باربری‌های خود ایمنی و کارایی بیشتری داشته باشید. ما از مواد باکیفیت استفاده می‌کنیم تا سفرهای شما را آسان‌تر کنیم.",
            slug: "pride-vanet"
        },
        {
            name: "Arisan",
            src: ArisanImage,
            description: "وانت سبک شهری با طراحی مناسب برای کارهای روزمره",
            information: "آریسان با طراحی مناسب برای کارهای روزمره، گزینه‌ای عالی برای حمل و نقل بارهای سبک در شهر است. لوازم جانبی آفرود ما به شما این امکان را می‌دهد که از کارایی و ایمنی بیشتری در مسیرهای شهری و جاده‌ای برخوردار شوید. ما از مواد باکیفیت در تولید محصولات خود استفاده می‌کنیم.",
            slug: "arisan"
        }
    ];


    useEffect(() => {
        setCarData(data);
    }, []);


    return (
        <CarsContext.Provider value={{
            burgerMenu,
            setBurgerMenu,
            carData,
            selectedCar,
            setSelectedCar,
            showProduct,
            setShowProduct
        }}>
            {children}
        </CarsContext.Provider>
    );
}

function useCars() {
    const context = useContext(CarsContext);
    if (context === undefined) throw Error('CarsContext was used outside the CarsProvider');
    return context;
}

export {ContextProvider, useCars};
