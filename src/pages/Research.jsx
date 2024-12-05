import React from "react";

const Research = () => {
  return (
    <div className="page research_page">
      <h2>Tadqiqotlar</h2>
      <section className="res1 re_color">
        <h1> <span>Shartnoma</span> <span>nazariyasining</span> <span>mazmuni</span></h1>
        <div className="res1_card">
          <h6>Shartnoma nazariyasi iqtisodiyotda tomonlar o‘rtasidagi kelishuvlarning qanday ishlashini o‘rganadi. Bu nazariya, ayniqsa, quyidagilarni tahlil qiladi:</h6>
          <h3>Axborot assimetriyasi</h3>
          <h6>Shartnoma tuzayotgan tomonlardan biri boshqasidan ko‘proq yoki kamroq ma’lumotga ega bo‘lishi mumkin. Masalan, kompaniya xodimining qobiliyatini to‘liq bilmasligi yoki xodim o‘z vazifalarini bajarishda qanchalik harakat qilishini nazorat qila olmasligi.</h6>
          <h3>Xavflarni taqsimlash</h3>
          <h6>Shartnomalar taraflarning xavfga nisbatan chidamliligini hisobga olgan holda tuzilishi kerak.</h6>
          <h3>Rag‘batlar tizimi</h3>
          <h6>Tomonlar bir-biriga qarshi emas, birga ishlashga undaydigan shartlarni belgilash.</h6>
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
        <h1><span>1. Holmström:</span> <span>Rag‘batlantiruvchi</span> <span>shartnomalar</span></h1>
        <div className="res2_card">
          <h6>Holmström shartnoma nazariyasining "asosiy-agent modeli" (principal-agent model) deb ataluvchi tamoyilini ishlab chiqdi. </h6>
          <h3>Xodimlarning samaradorligi: Xodimlarning ishlash samaradorligi ularning mukofotlariga bog‘liq. Shuning uchun ish beruvchi ishchining harakatlarini nazorat qila olmaydigan holatlarda ham mukofot tizimi orqali rag‘batlantirishi kerak.</h3>
          <h3>Xatarlarni taqsimlash: Mukofot tizimi xodimni haddan tashqari xavfli yoki xavfsiz qarorlar qabul qilishdan saqlanishi kerak. Shartnoma tuzishda, xavflarni taqsimlash agentning xavfga chidamliligi bilan muvofiqlashtirilishi lozim.</h3>
          <h3>Axborot assimetriyasi muammosini tahlil:
            Xodimning harakatlarini kuzatib bo‘lmasa, mukofot tizimi qanday ishlashi kerak:
            samarali shartnoma xodimning mehnati va natijalarga mos rag‘batni bog‘lash orqali tuzilishi mumkin.</h3>
        </div>
      </section>
      <section className="res3 re_color">
        <h1><span>2. Hart:</span> <span> Nomukammal </span> <span>shartnomalar nazariyasi</span></h1>
        <div className="res3_card">
          <h3>Hart real hayotda shartnomalar to‘liq (ya'ni, barcha ehtimoliy holatlar uchun qoidalar belgilangan) bo‘lolmasligini ko‘rsatdi. U "nomukammal shartnomalar" nazariyasini ishlab chiqdi bunda:  Shartnomani shunday tuzish kerakki, keyinchalik noaniqlik yuzaga kelganda tomonlar optimal qaror qabul qila olsin.</h3>
          <h3>Mulkchilikning ahamiyati: U shartnoma tuzishda mulk huquqi kimga tegishli bo‘lishi muhimligini ko‘rsatdi. Agar qaror qabul qilish uchun aniqlik kerak bo‘lsa, mulkni boshqarish huquqi eng samarali tomonlarga berilishi kerak.</h3>
          <h3>Menejment va mulkchilik o‘rtasidagi muvozanat: <br /> Korporativ boshqaruvda aktsiyadorlar va menejerlar o‘rtasidagi nizolarni hal qilish uchun mulk huquqlari va shartnoma sharoitlarini optimal taqsimlash zarurligini ko‘rsatdi.  </h3>
          <img src="https://i.pinimg.com/originals/3d/f0/cb/3df0cb87d1c48b17ecf616d95e4f22f3.gif" alt="" />
        </div>
      </section>
    </div>
  );
};

export default Research;