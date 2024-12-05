import React, { useEffect, useState } from "react";

const Home = () => {
  const [keyCount, setKeyCount] = useState(0); // Tugma bosilgan soni
  const[fly, setFly] = useState(false)
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
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/SxTsShVXECs?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=SxTsShVXECs&vq=hd720"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
        </iframe>

      </div>
      <div className={fly === true ? "fly_full" : ""}>
        <h1 style={{ color: 'white' }}>Shartnoma Nazariyasi Sohasidagi Nobel Sovrindorlari</h1>
        <h3>Oliver Hart va Bengt Holmström iqtisodiyot bo‘yicha 2016-yilgi Nobel mukofotini "shartnoma nazariyasiga qo‘shgan hissalari uchun" olishdi. Ushbu mukofot 2016-yilning 10-dekabr kuni Stokgolm, Shvetsiyada bo‘lib o‘tgan tantanali marosimda topshirilgan.</h3>
        <div className="home_hero">
          <img
            src="https://th.bing.com/th/id/R.2263cec1c2c7ec5169965dbe3ecafcde?rik=6PFFb7jQI29zdA&pid=ImgRaw&r=0"
            alt="Nobel Sovrindorlari"
            className="hero-image"
          />

          <h4>Oliver Hart va Bengt Holmström 2016-yilgi Iqtisodiyot bo‘yicha Nobel mukofoti uchun umumiy 8 million Shvetsiya kronasi (taxminan 2016-yilda 923,000 AQSh dollari atrofida) bilan taqdirlangan. Ushbu mukofot odatda bir necha kishiga berilgan taqdirda teng bo‘linadi, shuning uchun Hart va Holmström har biri 4 million Shvetsiya kronasi olgan.</h4>
          <img
            src="https://th.bing.com/th/id/OIP.xhdd49riFdQ7lJIFF-pY2AHaE8?rs=1&pid=ImgDetMain"
            alt="Nobel Sovrindorlari"
            className="hero-image"
          />
        </div>
        <div className="home1">
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/L0LypAwOd0A?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=L0LypAwOd0A&showinfo=0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen>
            </iframe>


          </div>
          <h3>Nobel mukofotlarini topshirish marosimi har yili Shvetsiya Qirollik Konsert Zalida (Stockholm Concert Hall) bo‘lib o‘tadi. <br />
            Marosim har yili 10-dekabrda, Nobel mukofotini asoschisi Alfred Nobelning vafot etgan kunida o‘tkaziladi. <br />
            Shvetsiya qirol oilasi mukofot topshirish marosimida doimiy ishtirok etadi. Mukofotni Shvetsiya qiroli Carl XVI Gustaf shaxsan topshiradi. Bu 2016-yilda ham shunday bo‘lgan. <br />
            Mukofot topshirishdan so‘ng, Stokgolmning shonli City Hall (Shahar zali) binosida 1,300 nafardan ortiq mehmon ishtirokida tantanali ziyofat bo‘lib o‘tadi. <br />
            Mehmonlar va g‘oliblar uchun kiyinish tartibi qat’iy: erkaklar oq galstukli smoking, ayollar esa uzun libos kiyishlari kerak. <br />
            Barcha dekoratsiyalar, jumladan, gullar Shvetsiya bilan bog‘liq bo‘lsa-da, gullar Italiyadan, Alfred Nobel tug‘ilgan joyi Sanremo shahridan olib kelinadi.
          </h3>
        </div>

      </div>
    </div>
  );
};

export default Home;