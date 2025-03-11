import React from "react";

const Facts = () => {
  return (
    <div className="page page_fact">
      <h2 >Asosiy fondlarning ta’rifi va turlari</h2>
      <div className="home1">
        <img
          src="https://th.bing.com/th/id/R.e0e9327d65b14b53dee634892eae5ce5?rik=h5G17KADaom%2fVA&pid=ImgRaw&r=0&sres=1&sresct=1"
          alt="Qiziqarli faktlar"
          className="hero-image"
        />
        <ul>
          <li>Asosiy fondlar – bu uzoq muddat xizmat qiluvchi moddiy va nomoddiy aktivlar bo‘lib, ular ishlab chiqarish jarayonida faol ishtirok etadi va asta-sekin eskiradi.</li>
          <h4>Moddiy asosiy fondlar:</h4>
          <li>Binolar va inshootlar – zavodlar, omborxonalar, ishlab chiqarish sexlari. <br />
            Mashina va uskunalar – ishlab chiqarish jarayonida ishlatiladigan texnika. <br />
            Transport vositalari – xomashyo va tayyor mahsulotlarni tashish uchun transport. <br />
            Energetik tizimlar – ishlab chiqarish jarayoni uchun zarur bo‘lgan energiya manbalari.
          </li>
          <h4>Nomoddiy asosiy fondlar:</h4>
          <li>
            Texnologiyalar – dasturiy ta’minot, ishlab chiqarish metodlari. <br />
            Patent va litsenziyalar – ishlab chiqarish sohasidagi intellektual mulk.
          </li>
        </ul>
      </div>
      <h2>Asosiy fondlarning eskirish jarayoni hamda  samaradorligini oshirish usullari</h2>
      <div className="home1">
        <img
          src="https://th.bing.com/th/id/OIP.7kFJH3VVeMDVHzsxJyl8VgHaD4?rs=1&pid=ImgDetMain"
          alt="Qiziqarli faktlar"
          className="hero-image"
        />
        <ul>
          {/* <li>Asosiy fondlarning eskirish jarayoni va ularni modernizatsiya qilish</li> */}
          <h4>Asosiy fondlarning eskirish jarayoni va ularni modernizatsiya qilish</h4>
          <li>Jismoniy eskirish – ishlab chiqarish vositalarining texnik jihatdan yaroqsiz holga kelishi.<br />
            Ma’naviy eskirish – texnologik o‘zgarishlar sababli ishlab chiqarish vositalarining qadrsizlanishi.<br />
            Modernizatsiya qilish – yangi texnologiyalar joriy etish orqali ishlab chiqarish vositalarining samaradorligini oshirish.</li>
          <h4>Asosiy fondlarning samaradorligini oshirish usullari:</h4>
          <li>
            Texnik xizmat ko‘rsatish – ishlab chiqarish vositalarining muntazam ta’miri va yangilanishi. <br />
            Avtomatlashtirish va raqamli texnologiyalar – ishlab chiqarish jarayonlarini optimallashtirish. <br />
            Yashil texnologiyalar – ekologik xavfsiz ishlab chiqarish tizimlarini rivojlantirish.
          </li>
        </ul>
      </div>


    </div>
  );
};

export default Facts;