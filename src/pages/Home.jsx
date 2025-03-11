import React, { useEffect, useState } from "react";

const Home = () => {
  const [keyCount, setKeyCount] = useState(0); // Tugma bosilgan soni
  const [fly, setFly] = useState(false)
  useEffect(() => {
    // Klaviatura hodisasini tinglash
    const handleKeyPress = (event) => {
      if (event.key === "s" || event.key === "S" || event.key === 'ы' || "Ы") {
        setKeyCount((prevCount) => prevCount + 1); // Sanash
      }
    };

    // Hodisani qo'shish
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      // Komponent unmount bo'lganda hodisani tozalash
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [fly]);

  useEffect(() => {
    if (keyCount === 3) {
      setFly(!fly); // Hodisani ishga tushirish
      setKeyCount(0); // Qayta sanashni boshlash
    }
  }, [keyCount, fly]);

  return (
    <div className="page home_main">
      <div className="back_video">
        {/* <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/SxTsShVXECs?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=SxTsShVXECs&vq=hd720"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
        </iframe> */}

      </div>
      <div className={fly === true ? "fly_full_x" : ""}>
        <h1 style={{ color: 'white' }}>Sanoatda ishlab chiqarishning asosiy fondlari va ishchi quvvatlari</h1>
        <h3>Sanoat iqtisodiyotning eng muhim tarmoqlaridan biri bo‘lib, quyidagi jihatlari bilan ajralib turadi:
          <br />
        </h3>
        <div className="home_hero">
          <img
            src="https://th.bing.com/th/id/R.ff16a4894590f275e0bd25df2f2766bf?rik=maQtBk1vMASfjw&pid=ImgRaw&r=0"
            alt="Nobel Sovrindorlari"
            className="hero-image"
          />

          <h4>Mahsulot yaratish – sanoat jamiyat ehtiyojlarini qondiruvchi turli mahsulotlarni ishlab chiqaradi. <br />
            Ish o‘rinlari yaratish – sanoat sektori millionlab odamlarni ish bilan ta’minlaydi. <br />
            Innovatsion rivojlanish – yangi texnologiyalar sanoat orqali hayotga tadbiq etiladi. <br />
            Milliy iqtisodiyotni mustahkamlash – eksport hajmining oshishi va ichki bozor rivojlanishi sanoatning ahamiyatini oshiradi.</h4>
          <img
            src="https://th.bing.com/th/id/OIP.YaDM07wq2Rw4fy5XGQ3FYAHaFj?rs=1&pid=ImgDetMain"
            alt="Nobel Sovrindorlari"
            className="hero-image"
          />
        </div>
        <div className="home1">
          <div>
            {/* <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/L0LypAwOd0A?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=L0LypAwOd0A&showinfo=0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen>
            </iframe> */}


          </div>
          <h3>Ishlab chiqarish jarayonining asosiy tarkibiy qismlari
            Sanoat ishlab chiqarishi quyidagi asosiy tarkibiy qismlardan tashkil topadi: <br />

            Asosiy fondlar – uzoq muddat foydalaniladigan moddiy aktivlar. <br />
            Ishlab chiqarish quvvatlari – ma’lum bir vaqt ichida ishlab chiqarish mumkin bo‘lgan mahsulot hajmi. <br />
            Xomashyo va resurslar – ishlab chiqarish jarayoni uchun zarur bo‘lgan materiallar. <br />
            Texnologiya va avtomatlashtirish – ishlab chiqarish jarayonlarini optimallashtirish.
          </h3>
        </div>

      </div>
    </div>
  );
};

export default Home;