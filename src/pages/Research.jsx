import React from "react";

const Research = () => {
  return (
    <div className="page research_page">
      <h2>Ishlab chiqarish quvvatlari va ularning samaradorligi</h2>
      <section className="res1 re_color">
        <h1> <span>Ishlab chiqarish</span> <span>quvvati tushunchasi</span> <span>va turlari</span></h1>
        <div className="res1_card">
          <h6>Ishlab chiqarish quvvati – bu korxonaning ma’lum bir vaqt davomida ishlab chiqarish imkoniyatini ifodalovchi ko‘rsatkich. <br />
            Ishlab chiqarish quvvatlarining turlari:
          </h6>
          <h3>Loyihaviy quvvat</h3>
          <h6>Korxona to‘liq yuklamada ishlaganida ishlab chiqarish mumkin bo‘lgan maksimal mahsulot hajmi.</h6>
          <h3>Haqiqiy quvvat</h3>
          <h6>Mavjud sharoit va resurslar asosida erishilgan ishlab chiqarish hajmi.</h6>
          <h3>Zaxiradagi quvvat</h3>
          <h6>Favqulodda holatlar yoki talab oshishi uchun tayyorlangan qo‘shimcha ishlab chiqarish imkoniyatlari.</h6>
          <iframe
            src="https://giphy.com/embed/26n6Q6VdXo6JiaR20"
            width="80"
            height="80"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
            title="Trippy GIF"
            style={{ border: 'none' }}  // style as an object
          ></iframe>
        </div>
      </section>
      <section className="res2 re_color">
        <h1><span>Ishlab chiqarish</span> <span>quvvatlarining</span> <span>rejalashtirilishi</span></h1>
        <div className="res2_card">
          <h6>Rejalashtirishning quyidagi turlari mavjud</h6>
          <h3>Qisqa muddatli rejalashtirish – mavjud resurslardan samarali foydalanish.</h3>
          <h3>Uzoq muddatli rejalashtirish – yangi texnologiyalar va ishlab chiqarish obyektlarini rivojlantirish.</h3>
          <h3>Tahlil va prognozlash – bozor talabi asosida ishlab chiqarish hajmini rejalashtirish.</h3>
        </div>
      </section>
      <section className="res3 re_color">
        <h1><span>Ishlab chiqarish </span> <span> quvvatlaridan samarali  </span> <span>foydalanish yo‘llari</span></h1>
        <div className="res3_card">
          <h3>Ishlab chiqarish jarayonlarini avtomatlashtirish.</h3>
          <h3>Ishlab chiqarish quvvatlarini optimallashtirish va isrofni kamaytirish.</h3>
          <h3>Yangi innovatsion uskunalardan foydalanish orqali ishlab chiqarish samaradorligini oshirish.</h3>
          <img src="https://i.pinimg.com/originals/3d/f0/cb/3df0cb87d1c48b17ecf616d95e4f22f3.gif" alt="" />
        </div>
      </section>
    </div>
  );
};

export default Research;